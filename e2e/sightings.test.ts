import { XMLParser } from "fast-xml-parser";
import { RootStoreModel } from "../app/models"
import { formatDateWithTZ } from "../app/utils/datetime"
import { addMinutes, parse, setSeconds, subMinutes } from "date-fns"
import { zonedTimeToUtc } from "date-fns-tz";
import "../test/matchers";

const locations = [{
  rss: 'https://spotthestation.nasa.gov/sightings/xml_files.cfm?filename=United_States_DC_NASA_Headquarters.xml',
  name: 'NASA Headquarters, DC',
  timezone: 'America/New_York',
  lat: 38.8830649,
  lon: -77.0188535,
}, {
  rss: "https://spotthestation.nasa.gov/sightings/xml_files.cfm?filename=United_States_Texas_Houston.xml",
  name: "Houston, TX",
  timezone: 'America/Chicago',
  lat: 29.7751019,
  lon: -95.3740024
}, {
  rss: "https://spotthestation.nasa.gov/sightings/xml_files.cfm?filename=United_States_Arizona_Phoenix.xml",
  name: "Phoenix, AZ",
  timezone: 'America/Phoenix',
  lat: 33.5155817,
  lon: -112.1563736
}, {
  rss: "https://spotthestation.nasa.gov/sightings/xml_files.cfm?filename=Ukraine_None_Kiev.xml",
  name: "Kyiv, Ukraine",
  timezone: 'Europe/Kiev',
  lat: 50.4099244,
  lon: 30.6313396,
}, {
  rss: "https://spotthestation.nasa.gov/sightings/xml_files.cfm?filename=Japan_None_Tokyo.xml",
  name: "Tokyo, Japan",
  timezone: 'Asia/Tokyo',
  lat: 35.6843573,
  lon: 139.7685425
}]

locations.forEach((location) => {
  it(location.name, async () => {
    const res = await fetch(location.rss)

    const parser = new XMLParser()
    const jObj = parser.parse(await res.text())
    let siteSightings = jObj.rss.channel.item.map((item) => {
      const fields: Record<string, string> = {}
      item.description.split('<br/>').forEach((f) => {
        if (!f.trim()) return;
        const m = f.trim().match(/([\w\s]+):(.+)/);
        fields[m[1].trim()] = m[2].trim();
      });

      const date = new Date(fields.Date);
      const dateTime = zonedTimeToUtc(
        parse(
          `${date.toISOString().split('T')[0]} ${fields.Time}`,
          'yyyy-MM-dd h:mm a',
          date,
        ),
        location.timezone,
      )

      return {
        date: dateTime.toISOString(),
        appears: fields.Approach.split(' ').pop(),
        disappears: fields.Departure.split(' ').pop(),
        visible: fields.Duration === 'less than  1 minute' ? 0 : Number(fields.Duration.split(' ')[0]),
        timezone: location.timezone,
      }
    }).filter((item) => new Date(item.date) >= new Date())

    const rootStore = RootStoreModel.create()
    await rootStore.setSelectedLocation({
      title: location.name,
      subtitle: "",
      location: { lat: location.lat, lng: location.lon }
    }, true)

    await rootStore.getISSSightings({ title: location.name, subtitle: '', location: { lat: location.lat, lng: location.lon } });
    let lastSiteSightingDate = new Date(siteSightings[siteSightings.length - 1].date);

    lastSiteSightingDate = addMinutes(lastSiteSightingDate, 2);

    const appSightings = rootStore
      .selectedLocation
      .sightings
      .filter((sighting) => {
        return new Date(sighting.date) <= lastSiteSightingDate;
      });

    siteSightings = siteSightings.filter((sighting) => {
        if (sighting.date < formatDateWithTZ(new Date().toISOString(), "yyyy-MM-dd", rootStore.selectedLocation.timezone)) return false;

        // we don't know what exact rounding algorithm STS website uses
        // some sightings with duration less than or equal 1 minute on website
        // may be considered as "0 minutes" by the app, thus excluding them from the list
        // here we filter out those ambiguous website sightings if they are not also found by the app
        if (sighting.visible <= 1) {
          return appSightings.find((as) => {
            return setSeconds(new Date(as.date), 0) >= subMinutes(new Date(sighting.date), 1)
              && setSeconds(new Date(as.date), 0) <= addMinutes(new Date(sighting.date), 1)
          })
        }

        return true;
      })

    siteSightings.forEach((item) => {
      expect(appSightings).toHaveSighting(item);
    })

    expect(appSightings).toHaveLength(siteSightings.length);
  })
})
