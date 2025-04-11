const sv = {
  name: "Svenska",
  errorScreen: {
    title: "Något gick fel!",
    friendlySubtitle:
      "Det här är skärmen som dina användare kommer att se i produktionen när ett fel kuppstår.Du vill anpassa det här meddelandet (beläget i `App/i18n/en.ts ') och förmodligen också layouten (` app/skärmar/felaktigheter).Om du vill ta bort detta helt, kontrollera `app/app.tSx` för <felboundary> -komponenten.",
    reset: "Återställ app",
  },
  snackBar: {
    ok: "OK",
    dismiss: "Avvisa",
    sightingsSaved: "Observationer för den senast sparade platsen laddad!",
    defaultError: "Något fel inträffade",
    locationSaved: "Plats sparad",
    locationExist: "Plats med den här titeln finns redan!",
    openSettingsError: "Kan inte öppna inställningar!",
    shared: "Framgångsrikt delad!",
    savedToGallery: "Sparad till galleri",
  },
  outdatedModal: {
    title: "Uppdatering tillgänglig",
    body: "Ny version av appen tillgänglig! Ladda ner den nya versionen på",
    buttonNegative: "Avbryt",
    buttonPositive: "Ladda ner",
  },
  permissionsModal: {
    close: "Stänga",
    openSettings: "Öppna Inställningar",
    body: "För att använda den här funktionen måste du ge tillstånd att komma åt galleriet.",
  },
  fontSizeModal: {
    title: "Teckenstorlek för stor",
    body1:
      "Det verkar som att teckenstorleken på din enhet är inställd för högt. Detta kan orsaka att viss viktig information beskärs eller visas felaktigt i appen.",
    bodyAndroid:
      "För att justera teckenstorleken, gå till Inställningar → Skärm → Teckenstorlek och stil → Justera reglaget till en mindre storlek.",
    bodyIOS:
      "För att justera teckenstorleken, gå till Inställningar → Tillgänglighet → Skärm och textstorlek → Större text → Justera reglaget till en mindre storlek.",
    cancel: "Avbryt",
    settings: "Gå till Inställningar",
  },
  permissionsAndroid: {
    title: "Tillstånd att spara videor",
    message: "Den här appen behöver tillåtelse för att spara videor på din enhet.",
    buttonNeutral: "Fråga mig senare",
    buttonNegative: "Avbryt",
    buttonPositive: "OK",
    alarmPermissionTitle: "Tillstånd krävs",
    alarmPermissionMessage:
      "Vänligen bevilja tillstånd för larm och påminnelser på nästa skärm för att få meddelanden om kommande observationer.",
  },
  thanksModal: {
    body: "Tack för att du kontaktar oss. Vi har tagit emot ditt meddelande och kommer att behandla din förfrågan. Observera att denna applikation inte samlar in användardata, så vi kan inte svara på alla meddelanden individuellt. Vänligen besök sidan med Vanliga Frågor för att se om det finns ett svar på din fråga.",
    dismiss: "Avfärda",
    faq: "Vanliga Frågor",
  },
  privacy: {
    title: "Använd din plats",
    body: "Vi använder platsdata för att beräkna de kommande observationerna på din nuvarande plats.Vänligen ange platsbehörigheter för att aktivera denna funktionalitet.",
    agree: "Godkänn",
    skip: "Hoppa över",
    policy: "Integritetspolicy",
  },
  notifications: {
    push: {
      title: "Hitta stationen nu!",
      subTitleIos: "Stationen passerar ovanför dig vid",
      subTitleAndroid: "Stationen passerar ovanför dig nu ({{time}}) kl",
    },
    before: {
      titleOne: "Hitta stationen i",
      titleTwo: "minuter!",
      subTitleOne: "Stationen passerar ovanför dig",
      subTitleTwoIos: "minuter kl",
      subTitleTwoAndroid: "minuter ({{time}}) kl",
    },
  },
  units: {
    minute: "min",
    kilometer: "km",
    kilogram: "kg",
    month: "månad",
    metersPerSecond: "m/s",
    time: "T",
    hour: "tim",
    mile: "mi",
    pound: "lbs",
    milesPerHour: "mph",
  },
  tabNavigator: {
    homeTab: "Hem",
    issViewTab: "AR-vy",
    issNowTab: "Spårare",
    resourcesTab: "Resurser",
    settingsTab: "inställningar",
  },
  onboarding: {
    splash: {
      title: "Hitta\nstationen",
      subTitle: "Titta upp i skyn och se Internationella rymdstationen",
    },
    completeProfile: {
      notification: {
        title: "Notis inställningar",
        label: "Få pushnotiser",
        tip: "Få pushnotiser när Internationella rymdstationen närmar sig din plats.",
        nextButton: "Nästa",
      },
      location: {
        title: "Din plats",
        subtitle: "Låt appen upptäcka din plats automatiskt eller ange din plats manuellt.",
        detectButton: "Dela min plats",
        orLabel: "eller",
        selectLocation: "Ange din plats",
        detecting: "Delar plats ...",
        doneButton: "Klart",
        serviceAlertTitle: "Platstjänster inaktiverade",
        serviceAlertBody: "Låt dina platstjänster fortsätta.",
        permissionAlertTitle: "Tillstånd ej beviljat",
        permissionAlertBody:
          "Vi använder platsdata för att beräkna de kommande observationerna på din nuvarande plats.Vänligen ange platsbehörigheter för att aktivera denna funktionalitet.",
      },
    },
  },
  homeScreen: {
    initLoader: {
      message: "Stationen data laddas ... det kan ta en stund att slutföra.",
      trajectoryError:
        "Stationen -banan är för närvarande inte tillgänglig på grund av serverunderhåll. Kom tillbaka igen senare.",
      noNetwork:
        "Stationen -banan är för närvarande inte tillgänglig på grund av ingen anslutning. Kom tillbaka igen senare.",
    },
    header: {
      firstTimeHead: "NÄSTA IAKTTAGELSE(ER) LISTA",
      secondTimeHead: "NEDRÄKNING",
      timezone: "Tidszon",
    },
    selectLocation: {
      title: "Välj plats",
      inputPlaceholder: "Sök plats efter stad, kartnål...",
      current: "Nuvarande position",
      saved: "Sparade platser",
      nearby: "Närliggande platser",
      search: "Sökresultat",
      cta: "Anpassa aviseringar för den här platsen",
      actionTitle: "Varna",
      refresh: "Uppdatera",
    },
    selectSightings: {
      title: "Kommande observationer",
      sightings: "Observationer",
      selectMessage: "Välj händelser som du vill bli meddelad för.",
      switch: "Meddela mig för alla kommande händelser på den här platsen.",
      aboveHorizon: "Ovanför horisonten",
      maxHeight: "Maxhöjd av",
      today: "Idag",
      tomorrow: "Imorgon",
      appears: "Visas",
      disappears: "Försvinner",
      all: "Allt",
      timeOfDay: "Tidpunkt på dygnet",
      night: "Natt",
      twilight: "Skymning",
      duration: "Varaktighet",
      shorterThan2: "kortare än 2 minuter",
      longerThan2: "2 minuter och längre",
      empty:
        "Det finns inga potentiella Stationen-observationer för den här platsen från {{start}} till {{end}}.",
      shareTitle: "Stationen passerar över {{location}} den {{date}}",
      shareLink:
        "För att utforska mer och spåra stationen via förstärkt verklighet, ladda ner appen på",
      calendarEventTitle: "Se stationen i {{location}}!",
      calendarSuccess: "Kalenderhändelse skapad framgångsrikt",
      calendarError: "Det gick inte att skapa kalenderhändelse",
      coach: {
        title: "Ikoner Beskrivning",
        moon: "Det kommer att vara natt på den valda platsen när Stationen är över horisonten.",
        sunset: "Det kommer vara skymning vid den valda platsen när Stationen passerar horisonten",
      },
      cloudCover: {
        title: "Molntäcke",
        any: "Vilken som helst",
        low: "Låg (<25%)",
        medium: "Medel (25-50%)",
      },
      pastSightings: "Tidigare Iakttagelser",
      compass: {
        N: "N",
        NNE: "NNO",
        NE: "NO",
        ENE: "ONO",
        E: "O",
        ESE: "OSO",
        SE: "SO",
        SSE: "SSO",
        S: "S",
        SSW: "SSV",
        SW: "SV",
        WSW: "VSV",
        W: "V",
        WNW: "VNV",
        NW: "NV",
        NNW: "NNV",
      },
    },
    coachMarks: {
      skip: "Hoppa över rundtur",
      next: "Nästa",
      finish: "Avsluta",
      dismiss: "Avvisa",
      locationTitle: "Ändra plats",
      locationData: "Du kan välja eller ändra din plats till en annan direkt härifrån.",
      sightingsTitle: "Nästa observation och nedräkning",
      sightingsData:
        "Det här avsnittet visar dig datumet och en nedräkningstimer för nästa kommande Stationen -observation nära din valda plats.Du kan trycka på nästa observationsruta för att se en komplett lista över de kommande observationerna.",
      globeTitle: "Interaktiva jorden",
      globeData:
        "Du kan se Stationen i realtid genom att svepa på skärmen.Detta gör att du kan interagera med jorden och spåra platsen för Stationen i realtid.",
      mapTitle: "2d Map View",
      mapData:
        "Detta avsnitt visar en 2D -representation av den fullständiga vägen för Stationen mot natt- och dagregionerna över jorden.",
      navigationTitle: "Navigering",
      navigationData: "Du kan bläddra igenom olika funktioner i appen från navigationsmenyn nedan.",
    },
  },
  issView: {
    timeHeader: "Nedräkning",
    cameraPermissionText:
      "Du har inte beviljat tillgång till telefonens kamera, klicka här för att bevilja åtkomst till telefonens kameror.",
    issCaptured: "Fånga detta ögonblick",
    details: {
      title: "Information",
      orbitalSpeed: "Omloppshastighet",
      longitude: "Longitud",
      latitude: "Latitud",
      altitude: "Höjd över havet",
      crewOnboard: "Typiskt antal besättningar ombord",
      launched: "Montering började",
      launchedValue: "20 november 1998",
      mass: "Uppskattad massa",
      dimensions: "Uppskattade dimensioner",
      orbitalPeriod: "Omloppsperiod",
      orbitsPerDay: "Omlopp/dag",
      dimensionsValue: "109 m bred x 73 m lång x 14 m lång",
      dateTime: "Datum och Tid",
      maxHeight: "Maxhöjd",
      duration: "Varaktighet Ovan Horisonten",
      appears: "Dyker upp",
      disappears: "Försvinner",
      distance: "Avstånd",
      nextSighting: "Nästa Siktning",
    },
    arNotSupported: "AR stöds inte på den här enheten",
    noOrientationSensor: "Orienteringssensor är inte tillgänglig",
    noMagnetometerSensor: "Magnetometern är inte tillgänglig",
    screenshotError: "Kan inte ta skärmbild",
    coachMarks: {
      circleTitle: "Upptäck Stationen",
      circleData:
        "För att upptäcka stationen, rikta din telefon mot pilen utanför cirkeln. När du kommer närmare kommer cirkelns färg att ändras till grönt.",
      compassTitle: "Kompass",
      compassData:
        "Denna kompass visar dig riktningen du tittar åt och den relativa riktningen där du kan upptäcka stationen.",
      infoTitle: "Information",
      infoData:
        "Denna växel öppnar eller stänger fönstret med detaljerad information om nuvarande eller nästa kommande observation och live-information om stationen.",
      trajectoryTitle: "Stationens Bana",
      trajectoryData:
        "Denna växel visar stationens bana på eller av skärmen. Den fasta linjen visar det förflutna och den prickade linjen visar den framtida banan för stationen.",
      arTitle: "AR-Vy",
      arData: "Denna växel växlar mellan fullskärms- och delvis AR-vyer.",
      shareTitle: "Dela",
      shareData:
        "Denna knapp låter dig dela en skärmbild av AR-vyn via sms, e-post eller sociala medier.",
      screenshotTitle: "Skärmbild",
      screenshotData:
        "Denna knapp låter dig ta en skärmbild av AR-vyn för att spara i din fotoalbum.",
      videoTitle: "Videouppspelning",
      videoData:
        "Denna knapp låter dig spela in en video av AR-vyn för att fånga de ögonblick när du upptäcker stationen.",
    },
    safetyReminder: {
      title: "Varning: Säkerhetspåminnelse",
      subtitle1: "Föräldraskapets övervakning rekommenderas:",
      body1:
        "Kom ihåg vikten av föräldrars övervakning när du interagerar med AR-skärmen i den här appen. Barn bör använda den här funktionen under ledning av en ansvarig vuxen för att säkerställa en säker och lämplig upplevelse.",
      subtitle2: "Var uppmärksam på din omgivning:",
      body2:
        "När du njuter av den förstärkta verklighetsupplevelsen, förbli alltid medveten om din fysiska omgivning. Var uppmärksam på hinder, ojämn terräng eller andra faror som kan utgöra en risk för din säkerhet. Din säkerhet är av högsta prioritet, så var vänlig och utöva försiktighet och uppmärksamhet vid alla tillfällen.",
      home: "Tillbaka till startsidan",
      ok: "Jag förstår",
    },
  },
  settings: {
    header: "inställningar",
    locationSettings: "Platsinställningar",
    notificationSettings: "Notisinställningar",
    termsAndConditions: "Villkor",
    contactUs: "Kontakta oss",
    language: "Språk",
    timeFormat: "Tidsformat",
    unitsOfMeasurement: "Enheter",
    metric: "Metrisk",
    imperial: "Imperial (US)",
    calibrateCompass: "Kalibrera kompassen",
    calibrateCompassData: {
      instructions: "För att kalibrera kompassen, rotera din enhet flera gånger i ett åttamönster.",
      accuracy: "Sensornoggrannhet:",
      low: "Låg",
      medium: "Medium",
      high: "Hög",
    },
    tutorials: "Handledningar",
    tutorialsData: {
      description: "Vill du se de stegvisa handledningarna för Startsida och AR-vy igen?",
      homePage: "Startsida",
      arPage: "AR-vy",
    },
    termsAndConditionsData: {
      backButton: "inställningar",
      ios: {
        title: "LICENSED APPLICATION USAGE AGREEMENT",
        intro1:
          "END-USER wishes to use the following LICENSED APPLICATION developed by the United States Government as represented by the National Aeronautics and Space Administration, located at 300 E Street SW, Washington, D.C. (hereinafter NASA):",
        appData: {
          line1: "Licensed Application:",
          line2: "Version:",
          line3: "NASA Technology Number: MSC-27535-1 (hereinafter LICENSED APPLICATION)",
        },
        contactData: {
          line1: "NASA Point of Contact:",
          line2: "Jacob Keaton",
          line3: "NASA Headquarters",
          line4: "300 E Street SW",
          line5: "E-mail: SpotTheStation@hq.nasa.gov",
        },
        intro2:
          "The authority for NASA to release the LICENSED APPLICATION is NASA Policy Directive (NPD) 2820.1C",
        intro3:
          "NOW THEREFORE, in consideration of NASA releasing the LICENSED APPLICATION to END-USER and granting END-USER the non-transferable right to use the LICENSED APPLICATION as specified herein on any iPhone or iPod touch that END-USER owns or controls and as permitted by the Usage Rules set forth in the App Store Terms and Conditions for non-commercial purposes only, END-USER agrees as follows:",
        body: {
          line1:
            "1.        NASA and END-USER acknowledge that this Agreement is concluded between NASA and END-USER only, and not with Apple, this Agreement is non-transferable, and NASA, not Apple, is solely responsible for the LICENSED APPLICATION and the content thereof.",
          line2:
            "2.        NASA and END-USER acknowledge and agree that Apple, and Apple’s subsidiaries, are third party beneficiaries of this Agreement, and that upon END-USER’s acceptance of the terms and conditions of this Agreement, Apple will have the right (and will be deemed to have accepted the right) to enforce this Agreement against END-USER as a third party beneficiary of this Agreement.",
          line3:
            "3.        The LICENSED APPLICATION remains the property of NASA.  END-USER acknowledges that it acquires no ownership interest in the LICENSED APPLICATION under this Agreement.  The LICENSED APPLICATION is not in the public domain and nothing in this Agreement shall be construed as making the LICENSED APPLICATION available to the public without restriction.",
          line4:
            "4.        There shall be no release, distribution, or publication of the LICENSED APPLICATION by END-USER.",
          line5:
            "5.        NASA shall be neither liable nor responsible for any maintenance or updating of the provided LICENSED APPLICATION, nor for correction of any errors in the LICENSED APPLICATION.  NASA and END-USER acknowledge that Apple has no obligation whatsoever to furnish any maintenance and support services with respect to the LICENSED APPLICATION.",
          line6:
            "6.        END-USER represents and warrants that (i) he/she is not located in a country that is subject to a U.S. Government embargo, or that has been designated by the U.S. Government as a “terrorist supporting” country; and (ii) he/she is not listed on any U.S. Government list of prohibited or restricted parties.",
          line7:
            "7.        THE LICENSED APPLICATION IS PROVIDED “AS IS” WITHOUT ANY WARRANTY OF ANY KIND, EITHER EXPRESSED, IMPLIED, OR STATUTORY, INCLUDING, BUT NOT LIMITED TO, ANY WARRANTY THAT THE LICENSED APPLICATION WILL CONFORM TO SPECIFICATIONS, ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND FREEDOM FROM INFRINGEMENT, OR ANY WARRANTY THAT THE LICENSED APPLICATION WILL BE ERROR FREE.  IN NO EVENT SHALL NASA BE LIABLE FOR ANY DAMAGES, INCLUDING, BUT NOT LIMITED TO, DIRECT, INDIRECT, SPECIAL OR CONSEQUENTIAL DAMAGES, ARISING OUT OF, RESULTING FROM, OR IN ANY WAY CONNECTED WITH THE LICENSED APPLICATION, WHETHER OR NOT BASED UPON WARRANTY, CONTRACT, TORT, OR OTHERWISE, WHETHER OR NOT INJURY WAS SUSTAINED BY PERSONS OR PROPERTY OR OTHERWISE, AND WHETHER OR NOT LOSS WAS SUSTAINED FROM, OR AROSE OUT OF USE OF THE LICENSED APPLICATION. END-USER AGREES TO WAIVE ANY AND ALL CLAIMS AGAINST THE U.S. GOVERNMENT, ITS CONTRACTORS AND THEIR SUBCONTRACTORS, AND SHALL INDEMNIFY AND HOLD HARMLESS THE U.S. GOVERNMENT, ITS CONTRACTORS AND THEIR SUBCONTRACTORS FOR ANY DAMAGE THAT END-USER MAY INCUR FROM END-USER’S USE OF THE LICENSED APPLICATION, INCLUDING ANY DAMAGES FROM PRODUCTS BASED ON, OR RESULTING FROM, THE LICENSED APPLICATION.",
          line8:
            "8.        In the event of any failure of the LICENSED APPLICATION to conform to any warranty made applicable by law, END-USER may notify Apple, and Apple will refund the purchase price (if any) for the LICENSED APPLICATION to END-USER. To the maximum extent permitted by applicable law, Apple will have no other losses, liabilities, damages, costs or expenses attributable to any failure of the LICENSED APPLICATION to conform to any warranty.",
          line9:
            "9.        NASA and END-USER acknowledge that, in the event of any third party claim that the LICENSED APPLICATION or END-USER’s possession and use of LICENSED APPLICATION infringes intellectual property rights, NASA, not Apple, will be solely responsible for the investigation, defense, settlement and discharge of any such intellectual property infringement claim, subject to law.",
          line10:
            "10.        NASA and END-USER acknowledge that NASA, not Apple is responsible for addressing any claims of END-USER or third party relating to the LICENSED APPLICATION or END-USER’s possession and /or use of the LICENSED APPLICATION, including, but not limited to:  (i) product liability claims; (ii) any claim that the LICENSED APPLICATION fails to conform to any applicable legal or regulatory requirement, including any warranties made applicable by law; and (iii) claims arising under consumer protection or similar legislation.",
          line11:
            "11.        This Agreement shall be construed, and the legal relations between the parties hereto shall be determined, in accordance with United States federal law for all purposes.",
          line12:
            "12.        This Agreement constitutes the entire understanding and agreement between NASA and END-USER relating to release of the LICENSED APPLICATION and may not be superseded, modified or amended.",
          line13:
            "13.        By accepting and using the LICENSED APPLICATION under this Agreement, END-USER hereby agrees to all terms and conditions herein.",
        },
      },
      android: {
        title: "LICENSED APPLICATION USAGE AGREEMENT",
        intro1:
          "END-USER wishes to use the following PRODUCT developed by the United States Government as represented by the National Aeronautics and Space Administration, Ames Research Center, located at Moffett Field, CA 94035 (hereinafter NASA):",
        appData: {
          line1: "Software:",
          line2: "Version:",
          line3: "NASA Technology Number: MSC-27535-1",
        },
        intro2:
          "The authority for NASA to release the LICENSED APPLICATION is NASA Policy Directive (NPD) 2820.1C.",
        intro3:
          "NOW THEREFORE, in consideration of NASA releasing the LICENSED APPLICATION to END-USER and granting END-USER the non-transferable right to use the LICENSED APPLICATION for personal, noncommercial use and as specified herein and as permitted by the Android Market Terms of Service on any Android-powered mobile device (“Device”) that END-USER owns or controls, END-USER agrees as follows:",
        body: {
          line1:
            "1.	The LICENSED APPLICATION remains the property of NASA.  END-USER acknowledges that it acquires no ownership interest in the LICENSED APPLICATION under this Agreement.  The LICENSED APPLICATION is not in the public domain and nothing in this Agreement shall be construed as making the LICENSED APPLICATION available to the public without restriction.",
          line2:
            "2.	There shall be no release, distribution, or publication of the LICENSED APPLICATION by END-USER.",
          line3:
            "3.	NASA shall be neither liable nor responsible for any maintenance or updating of the provided LICENSED APPLICATION, nor for correction of any errors in the LICENSED APPLICATION.",
          line4:
            "4.	END-USER represents and warrants that (i) he/she is not located in a country that is subject to a U.S. Government embargo, or that has been designated by the U.S. Government as a “terrorist supporting” country; and (ii) he/she is not listed on any U.S. Government list of prohibited or restricted parties.",
          line5:
            "5.	THE LICENSED APPLICATION IS PROVIDED “AS IS” WITHOUT ANY WARRANTY OF ANY KIND, EITHER EXPRESSED, IMPLIED, OR STATUTORY, INCLUDING, BUT NOT LIMITED TO, ANY WARRANTY THAT THE LICENSED APPLICATION WILL CONFORM TO SPECIFICATIONS, ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND FREEDOM FROM INFRINGEMENT, OR ANY WARRANTY THAT THE LICENSED APPLICATION WILL BE ERROR FREE.  IN NO EVENT SHALL NASA BE LIABLE FOR ANY DAMAGES, INCLUDING, BUT NOT LIMITED TO, DIRECT, INDIRECT, SPECIAL OR CONSEQUENTIAL DAMAGES, ARISING OUT OF, RESULTING FROM, OR IN ANY WAY CONNECTED WITH THE LICENSED APPLICATION, WHETHER OR NOT BASED UPON WARRANTY, CONTRACT, TORT, OR OTHERWISE, WHETHER OR NOT INJURY WAS SUSTAINED BY PERSONS OR PROPERTY OR OTHERWISE, AND WHETHER OR NOT LOSS WAS SUSTAINED FROM, OR AROSE OUT OF USE OF THE LICENSED APPLICATION.   END-USER AGREES TO WAIVE ANY AND ALL CLAIMS AGAINST THE U.S. GOVERNMENT, ITS CONTRACTORS AND THEIR SUBCONTRACTORS, AND SHALL INDEMNIFY AND HOLD HARMLESS THE U.S. GOVERNMENT, ITS CONTRACTORS AND THEIR SUBCONTRACTORS FOR ANY DAMAGE THAT END-USER MAY INCUR FROM END-USER’S USE OF THE LICENSED APPLICATION, INCLUDING ANY DAMAGES FROM LICENSED APPLICATIONS BASED ON, OR RESULTING FROM, THE LICENSED APPLICATION.",
          line6:
            "6.	This Agreement shall be construed, and the legal relations between the parties hereto shall be determined, in accordance with United States federal law for all purposes.",
          line7:
            "7.	This Agreement constitutes the entire understanding and agreement between NASA and END-USER relating to release of the LICENSED APPLICATION and may not be superseded, modified or amended.",
          line8:
            "8.	By accepting and using the LICENSED APPLICATION under this Agreement, END-USER hereby agrees to all terms and conditions herein.",
        },
      },
    },
    contactUsData: {
      backButton: "inställningar",
      title: "Kontakta oss",
      titlePlaceholder: "Välj titel",
      commentsPlaceholder: "Ge synpunkter",
      sendButton: "Skicka",
      contactUsOptions: {
        reportAnIssue: "Rapportera ett problem",
        improvementIdeas: "Förbättringsidéer",
        generalQuestions: "Generella frågor",
        comments: "Kommentarer",
      },
    },
    notificationSettingsData: {
      backButton: "inställningar",
      notificationTitle: "Notisinställningar",
      privacyTitle: "Sekretessinställningar",
      upcomingLabel: "Kommande händelser",
      customizeLabel: "Anpassa notiser",
      upcomingTip: "Stäng av för att sluta ta emot notiser om händelser.",
      notifyMeBefore: "Meddela mig innan",
      turnOffNotifications: "Stäng av notiser",
      rangeInputPlaceholder: "Välj mellan 1 till 120 minuter",
      customOption: "Anpassad",
      from: "Från",
      until: "Fram tills",
    },
    locationSettingsData: {
      backToSettings: "inställningar",
      goBack: "Gå tillbaka",
      generalTitle: "Platsinställningar",
      cta: "Anpassa aviseringar för den här platsen",
      locationPermission: "Bevilja platstillstånd",
      addNewLocation: {
        generalTitleAdd: "Lägg till en ny plats",
        generalTitleEdit: "Redigera plats",
        confirnModalButton: "Bekräfta",
        saveButton: "Spara plats",
        searchInputPlaceholder: "Ange stad, postnummer eller adress",
        nameInputPlaceholder: "Spara platsnamn",
      },
      removeLocation: {
        question: "Är du säker på att ta bort den här platsen?",
        cancelButton: "Avbryt",
        removeButton: "Radera",
      },
    },
    share: "Dela",
    shareLink:
      "För att spåra den internationella rymdstationen via förstärkt verklighet, ladda ner NASA Spot The Station mobilapp på",
    localCalculations: "Lokala beräkningar",
  },
  resources: {
    header: "Resurser",
    goBack: "Gå tillbaka",
    news: {
      title: "Stationsnyheter",
      searchPlaceholder: "Sök artiklar, evenemang, etc...",
      suggestions: "FÖRSLAG",
      searchResults: "Sökresultat",
    },
    spotTheStation: {
      title: "Hur ser jag stationen?",
    },
    about: {
      title: "Om Stationen",
    },
    details: {
      title: "Stationsdetaljer",
    },
    faq: {
      title: "Vanliga Frågor",
      questions: {
        question1: "1. Varför är den internationella rymdstationen där uppe?",
        answer1:
          "Den internationella rymdstationen är en sammansmältning av vetenskap, teknik och mänsklig innovation som möjliggör forskning som inte är möjlig på jorden, till förmån för mänskligheten. I mer än 24 år har NASA stött en kontinuerlig amerikansk närvaro ombord på stationen, genom vilken astronauter har lärt sig att leva och arbeta i rymden under längre perioder.<br/>" +
          "Rymdstationen – som involverar USA, Ryssland, Kanada, Japan och ESA:s (Europeiska rymdorganisationen) deltagande länder – är en av de mest komplexa, ömsesidigt beroende internationella samarbetena som någonsin har försökt. Den samlar internationella flygbesättningar och flera rymdtransportleverantörer, samt globalt distribuerade supportteam, anläggningar, kommunikationsnätverk och det globala vetenskapliga samfundet.<br/>" +
          "Under de senaste 24 åren har rymdstationen förvandlats till ett kretsande laboratorium med forskningsmöjligheter som gör det möjligt för forskare från över 109 nationer att genomföra över 4 000 banbrytande experiment i en extrem och unik rymdflygmiljö.<br/>" +
          "Rymdstationen fungerar som en språngbräda för utvecklingen av en ekonomi i låg omloppsbana och NASAs nästa stora steg i utforskning, inklusive uppdrag till månen under Artemis och slutligen mänsklig utforskning av Mars.<br/>" +
          "Lär dig mer om den internationella rymdstationen, dess forskning och dess besättning på:<br/>" +
          "<a href='https://www.nasa.gov/station'>https://www.nasa.gov/station</a>",

        question2: "2. Hur snabbt färdas den internationella rymdstationen?",
        answer2:
          "Den internationella rymdstationen kretsar runt jorden var 90:e minut. Den färdas med cirka 28 000 kilometer per timme, vilket gör att besättningen ombord kan se 16 soluppgångar och solnedgångar varje dag. Besättningar har kontinuerligt bemannat rymdstationen sedan november 2000. Under den tiden har 280 personer från 23 länder besökt den orbitala utposten, och stationen har cirkulerat jorden hundratusentals gånger.",

        question3: "3. Hur ofta kan jag förvänta mig att se den internationella rymdstationen?",
        answer3:
          "Den internationella rymdstationen är synlig eftersom den reflekterar solljus – av samma anledning som vi kan se månen. Men till skillnad från månen är rymdstationen inte tillräckligt ljus för att ses under dagen. Visningsmöjligheter kan variera från en gång i månaden till flera gånger i veckan, eftersom solens ljus reflekteras från stationen när den passerar över din plats vid gryning och skymning.",

        question4: "4. Vad är Spot the Station-appen?",
        answer4:
          "Spot the Station-mobilappen är en officiell NASA-app som hjälper användare att spåra och få aviseringar för observationer av den internationella rymdstationen när den passerar över deras respektive plats. Den erbjuder också spårning i realtid, överflygningsscheman och varningar.",

        question5: "5. Hur laddar jag ner Spot the Station-mobilappen?",
        answer5:
          "Spot the Station-mobilappen är tillgänglig på iOS- och Android-mobila enheter och surfplattor.",

        question6:
          "6. Hur meddelar Spot the Station-appen mig om kommande observationsmöjligheter för den internationella rymdstationen?",
        answer6:
          "Spot the Station-appen skickar push-aviseringar för att varna användare om kommande passager av den internationella rymdstationen. Användare bör se till att appens meddelandetillstånd är aktiverade i deras enhetsinställningar.",

        question7: "7. Kan jag anpassa aviseringar i Spot the Station-appen?",
        answer7:
          "Spot the Station-appen har möjlighet att konfigurera personliga varningsinställningar för att ta emot push-aviseringar specifika för en användares föredragna plats och tidpunkt. Meddelandeinställningarna finns på appens inställningssida, där användare kan aktivera aviseringar för alla kommande händelser eller anpassa aviseringar för den för närvarande valda platsen. Användare kan anpassa aviseringar för andra platser via platsinställningarna.",

        question8: "8. Vad ska jag göra om jag inte får aviseringar?",
        answer8:
          "Användare bör kontrollera meddelandeinställningarna i Spot the Station-appen (Meddelandeinställningar på inställningssidan) för att bekräfta att enheten är inställd för aviseringar på en föredragen plats och tidpunkt. Om användare fortfarande inte får aviseringar bör de se till att aviseringar är aktiverade i deras enhetsinställningar.",

        question9: "9. Fungerar Spot the Station-appen internationellt?",
        answer9:
          "Spot the Station-appen är tillgänglig över hela världen och på flera språk, inklusive engelska, nederländska, franska, tyska, hindi, italienska, japanska, polska, portugisiska (Brasilien), ryska, spanska, turkiska och ukrainska. Appen tillhandahåller visningsinformation för de flesta bebodda platser, vilket gör det enkelt att se den internationella rymdstationen när den passerar över nästan var som helst.",

        question10: "10. Varför finns det inga visningsmöjligheter för min plats?",
        answer10:
          "Det måste vara mörkt med god sikt på din plats och rymdstationen måste vara ovanför dig för att se den. Eftersom rymdstationens omloppsbana tar den runt hela världen kan den passera över vid tidpunkter då den inte kommer att vara synlig – antingen mitt på dagen eller mitt i natten. Spot The Station skickar endast aviseringar när det finns möjligheter att se den internationella rymdstationen på din plats, inte varje gång den är ovanför.",

        question11: "11. Behöver jag ett teleskop för att se den internationella rymdstationen?",
        answer11:
          "Nej, användare kan se den internationella rymdstationen med blotta ögat, ingen extra utrustning krävs.",

        question12:
          "12. Visas och försvinner den internationella rymdstationen på grund av månens ljus?",
        answer12:
          "Den internationella rymdstationen är synlig eftersom den reflekterar solljus. Detta är samma anledning till att månen verkar lysa. Även när månen inte har gått upp kan användare se stationen.",

        question13: "13. Vilken tidszon används för varningsmeddelanden?",
        answer13:
          "Allt innehåll i Spot the Station-appen listas i den lokala tidszonen för användarens valda plats. Appen justeras automatiskt för sommartid.",

        question14:
          "14. Vilken information tillhandahåller Spot the Station-appen för varje observation?",
        answer14:
          "För varje observation visar Spot the Station-appen tid, varaktighet av synlighet, maximal höjd över horisonten och riktningar där den internationella rymdstationen kommer att visas och försvinna, vilket hjälper användare att lokalisera den exakt på himlen.",

        question15:
          "15. Hur kan jag upptäcka den internationella rymdstationen under en visningsmöjlighet? Vad betyder all denna information?",
        answer15:
          'Spot the Station-appen tillhandahåller en lista över "Kommande observationer" om användare trycker på "Nästa observationslista" på startsidan.<br/>' +
          "<strong>Datum och tid</strong> är när visningsmöjligheten börjar i den lokala tidszonen. Alla passager kommer att inträffa inom några timmar före eller efter soluppgång eller solnedgång. Detta är den optimala visningsperioden eftersom solen reflekteras på den internationella rymdstationen och kontrasterar mot den mörkare himlen.<br/>" +
          "<strong>Ovanför horisonten</strong> är den maximala tidsperioden som stationen är synlig innan den åter korsar under horisonten.<br/>" +
          "<strong>Maximal höjd</strong> mäts i grader (även känd som elevation). Det representerar stationens höjd från horisonten på natthimlen. Horisonten är vid noll grader, och rakt ovanför är 90 grader. Om användare håller sin knytnäve på armlängds avstånd och placerar den på horisonten, kommer toppen att vara cirka 10 grader i höjd.<br/>" +
          "<strong>Visas</strong> är platsen på himlen där stationen först kommer att synas. Detta värde, liksom maximal höjd, mäts också i grader från horisonten. Bokstäverna representerar kompassriktningar – N är norr, VNV är väst-nordväst, och så vidare.<br/>" +
          "<strong>Försvinner</strong> representerar var på natthimlen stationen kommer att lämna synfältet." +
          "<img src='https://spotthestation.nasa.gov/images/astro_horizon.png' />",

        question16:
          "16. Flygplansschemat anger att den internationella rymdstationen både visas och försvinner från samma riktning, hur är det möjligt?",
        answer16:
          "Spot the Station-programvaran avrundar riktningar till närmaste kardinal- och interkardinalriktningar. Detta kan resultera i att det verkar som om den internationella rymdstationen kommer att visas och försvinna i samma riktning även om den rör sig över himlen. Detta händer vanligtvis vid överflygningar med ett kort synlighetsfönster eftersom stationen snabbt rör sig in i (eller ut ur) jordens mörka skugga där, från användarens plats på marken, en fullständig passage över himlen inte kan observeras.",

        question17: "17. Kan jag se en livekarta över den internationella rymdstationens plats?",
        answer17:
          "Ja, Spot the Station-appen inkluderar en karta i realtid som visar den aktuella positionen för den internationella rymdstationen när den kretsar runt jorden, vilket ger användare en visuell referens för att spåra dess framsteg.",

        question18: "18. Vad är funktionen för förstärkt verklighet i Spot the Station-appen?",
        answer18:
          "Funktionen för förstärkt verklighet i Spot the Station-appen gör det möjligt för användare att se en virtuell överlagring av den internationella rymdstationens bana på himlen. Denna funktion hjälper användare att lokalisera stationen mer exakt genom att justera sin enhet med stationens position i realtid.",

        question19:
          "19. Hur får jag tillgång till funktionen för förstärkt verklighet i Spot the Station-appen?",
        answer19:
          'För att få tillgång till funktionen för förstärkt verklighet, öppna Spot the Station-appen och navigera till alternativet "AR View" i den nedre menyn. Följ instruktionerna på skärmen för att justera enhetens kamera med himlen, där appen kommer att visa en virtuell överlagring som anger den internationella rymdstationens position och bana.',

        question20:
          "20. Behöver jag en specifik enhet eller programvara för att använda funktionen för förstärkt verklighet?",
        answer20:
          "Funktionen för förstärkt verklighet i Spot the Station kräver en enhet som kan bestämma sin orientering i 3D-utrymme. Den kräver specifikt hårdvarustöd, såsom en gyroskop eller rörelsekoprocessor. Äldre eller budgetenheter kanske inte stöder denna funktionalitet.",

        question21: "21. Hur fungerar funktionen för förstärkt verklighet?",
        answer21:
          "Med hjälp av enhetens kamera och sensorer överlagrar funktionen för förstärkt verklighet i Spot the Station den internationella rymdstationens position på himlen på skärmen, justerar i realtid när användaren rör enheten. Appen guidar användare att rikta enhetens kamera i rätt riktning och visar var stationen kommer att visas och försvinna.",

        question22: "22. Kan jag använda funktionen för förstärkt verklighet både dag och natt?",
        answer22:
          "Ja, funktionen för förstärkt verklighet inom Spot the Station-appen är tillgänglig både dag och natt; dock är den bästa visningsupplevelsen vanligtvis under skymning eller natt när den internationella rymdstationen är synlig för blotta ögat. Överlagringen för förstärkt verklighet fungerar oavsett ljusförhållanden, men faktiska visningsmöjligheter beror på synlighet.",

        question23: "23. Är överlagringen för förstärkt verklighet exakt för alla platser?",
        answer23:
          "Ja, funktionen för förstärkt verklighet inom Spot the Station-appen är utformad för att ge exakt positionsinformation baserat på enhetens GPS-plats. Noggrannheten kan dock variera något beroende på enhetens kompass- och sensorkalibrering. Om användare märker avvikelser, kalibrera om enhetens kompass via inställningarna.",

        question24:
          "24. Kan funktionen för förstärkt verklighet hjälpa till med exakta observationstider?",
        answer24:
          "Funktionen för förstärkt verklighet inom Spot the Station-appen guidar visuellt användare att lokalisera den internationella rymdstationen vid den exakta tidpunkt den visas på himlen. Tillsammans med appens varningar förbättrar den förmågan att se stationen genom att tillhandahålla en live, visuell riktning och höjdindikator för att spåra den exakt.",

        question25: "25. Finns det tips för att optimera min upplevelse av förstärkt verklighet?",
        answer25:
          "För den bästa upplevelsen av förstärkt verklighet i Spot the Station-appen, använd funktionen i ett öppet område med fri sikt mot himlen. Undvik hinder som höga byggnader eller träd, eftersom dessa kan blockera synligheten. Kalibrera enhetens kompass och se till att plats- och kameratillstånd är aktiverade för smidig funktion.",

        question26:
          "26. Är funktionen för förstärkt verklighet tillgänglig på både iOS- och Android-enheter?",
        answer26:
          "Ja, funktionen för förstärkt verklighet i Spot the Station-appen är tillgänglig på både iOS- och Android-mobila enheter och surfplattor, så länge din enhet uppfyller hårdvarukraven.",

        question27: "27. Fungerar Spot the Station-appen offline?",
        answer27:
          "Viss grundläggande funktionalitet, som att få tillgång till tidigare nedladdade visningsmöjlighetscheman eller ta emot schemalagda aviseringar, kan fungera offline. Funktioner som kräver realtidsdata, som spårning, kräver dock mobiltjänst eller internetanslutning.",

        question28: "28. Finns det några speciella krav för att använda Spot the Station-appen?",
        answer28:
          "Spot the Station-appen kräver aktiv mobiltjänst eller internetanslutning för spårning i realtid och varningar. Dessutom, för plats-specifik information, se till att enhetens platstjänster är aktiverade för appen.",

        question29: "29. Är Spot the Station-appen gratis att använda?",
        answer29:
          "Ja, Spot the Station-appen är gratis att ladda ner och använda, utan köp i appen eller prenumerationer.",

        question30: "30. Vem kan jag kontakta för support med Spot the Station-appen?",
        answer30:
          "För support med Spot the Station-appen, kontakta via appens feedbackalternativ eller <a href='mailto:hq-spotthestation@mail.nasa.gov'>skicka ett e-postmeddelande till Spot the Station-teamet</a>.",
      },
    },
    astronauts: {
      title: "Vem är på stationen nu?",
      number: "Antal personer:",
    },
    live: {
      title: "Direktsändning",
      description:
        "För närvarande strömmas en livevideo av jorden från en extern HD-kamera monterad på ISS. Kameran tittar mot jorden med enstaka solpaneler som passerar genom vyn.",
    },
    tour: {
      title: "Virtuell Rundtur",
    },
    videos: {
      title: "Stationsvideor",
    },
    gallery: {
      title: "Galleri",
    },
    earthScience: { title: "Jordvetenskapsdataresurser" },
  },
}

export default sv
export type Translations = typeof sv
