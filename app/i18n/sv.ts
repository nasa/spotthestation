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
    body: "Tack för att du kontaktar oss. Vi har tagit emot ditt meddelande och kommer att behandla din förfrågan. Observera att denna applikation inte samlar in användardata, så vi kan inte svara på alla meddelanden individuellt.",
    dismiss: "Avfärda",
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
      subTitle: "Stationen passerar ovanför dig vid",
    },
    before: {
      titleOne: "Hitta stationen i",
      titleTwo: "minuter!",
      subTitleOne: "Stationen passerar ovanför dig",
      subTitleTwo: "protokoll vid",
    },
  },
  units: {
    minute: "min",
    kilometer: "km",
    kilogram: "kg",
    month: "månad",
    metersPerSecond: "m/s",
    time: "T",
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
      coach: {
        title: "Ikoner Beskrivning",
        moon: "Det kommer att vara natt på den valda platsen när Stationen är över horisonten.",
        sunset: "Det kommer vara skymning vid den valda platsen när Stationen passerar horisonten",
      },
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
        question1: "1. Varför är rymdstationen där uppe?",
        answer1:
          "Den internationella rymdstationen är jordens enda mikrogravitationslaboratorium. Denna plattform i storlek med en fotbollsplan är värd för en mängd vetenskapliga och tekniska experiment som kontinuerligt utförs av besättningsmedlemmar eller är automatiserade. Forskning ombord på det kretsande laboratoriet ger fördelar för livet tillbaka på jorden, såväl som för framtida rymdutforskning. Rymdstationen fungerar som en testbädd för teknologier och låter oss studera effekterna av långvariga rymdfärder på människor, vilket stöder NASAs uppdrag att driva människans närvaro längre ut i rymden. För att lära dig mer om forskningen som sker på rymdstationen och möjligheter att utföra din vetenskap där, vänligen <a href='https://www.nasa.gov/international-space-station/'>klicka här</a>.",

        question2: "2. Hur snabbt färdas rymdstationen?",
        answer2:
          "Stationen kretsar runt jorden var 90:e minut. Den färdas med cirka 17 500 miles (28 000 km) per timme, vilket ger besättningen 16 soluppgångar och solnedgångar varje dag. Under de mer än 15 år som människor har bott ombord har stationen kretsat runt jorden tiotusentals gånger. Du kan se fler fakta om stationen på <a href='https://www.nasa.gov/international-space-station/space-station-facts-and-figures/'>denna webbsida</a>.",

        question3: "3. Hur ofta kan jag förvänta mig att se rymdstationen?",
        answer3:
          "Rymdstationen är synlig eftersom den reflekterar solens ljus – av samma anledning kan vi se månen. Men till skillnad från månen är rymdstationen inte tillräckligt ljus för att ses under dagen. Den kan bara ses när det är gryning eller skymning på din plats. Som sådan kan det variera från en observationsmöjlighet i månaden till flera i veckan, eftersom det måste vara både mörkt där du är och rymdstationen måste råka passera över.",

        question4: "4. Vad är Spot the Station-mobilappen?",
        answer4:
          "Spot the Station-mobilappen är en officiell NASA-app som hjälper användare att spåra och ta emot meddelanden för observationer av den internationella rymdstationen när den passerar över deras plats. Den ger spårning i realtid, observationsscheman och varningar.",

        question5: "5. Hur laddar jag ner Spot the Station-mobilappen?",
        answer5:
          "Du kan ladda ner appen från både Apple App Store <a href='https://apps.apple.com/us/app/spot-the-station/id6449235044'>här</a> och Google Play Store <a href='https://play.google.com/store/apps/details?id=gov.nasa.hq.SpotTheStation&hl=en_US&pli=1'>här</a>.",

        question6: "6. Hur meddelar appen mig om kommande observationer av stationen?",
        answer6:
          "Appen skickar push-meddelanden för att varna dig om kommande observationer av stationen, inklusive datum, tid, varaktighet och siktförhållanden specifika för din plats. Se till att du har aktiverat meddelandetillstånd för denna app i telefonens inställningar.",

        question7: "7. Kan jag anpassa meddelanden i appen?",
        answer7:
          "Ja, du kan anpassa varningsinställningar i appen för att få meddelanden baserat på din föredragna plats, observationsförhållanden och till och med specifika tider som fungerar bäst för dig.",

        question8: "8. Vad ska jag göra om jag inte får meddelanden?",
        answer8:
          "Om du inte får varningar, se till att meddelanden är aktiverade i enhetsinställningarna. Kontrollera också appens meddelandeinställningar för att bekräfta att du har ställt in varningar för din valda plats och föredragna tid.",

        question9: "9. Fungerar appen internationellt?",
        answer9:
          "Ja, Spot the Station-appen är tillgänglig över hela världen och ger observationsinformation för de flesta bebodda platser, vilket gör det enkelt att se stationen från nästan var som helst.",

        question10: "10. Varför finns det inga observationsmöjligheter för min plats?",
        answer10:
          "Det måste vara mörkt där du är och rymdstationen måste vara ovanför för att du ska kunna se den. Eftersom rymdstationens omloppsbana tar den runt hela jorden kan den passera över dig vid tidpunkter då den inte kommer att vara synlig - antingen mitt på dagen eller mitt på natten. Spot The Station kommer bara att skicka ut meddelanden när du har en möjlighet att se rymdstationen, inte varje gång den är ovanför.",

        question11: "11. Behöver jag ett teleskop för att se rymdstationen?",
        answer11: "Nej, du kan se rymdstationen med blotta ögat, ingen utrustning krävs.",

        question12: "12. Visas och försvinner stationen på grund av månens ljus?",
        answer12:
          "Rymdstationen är synlig eftersom den reflekterar ljus från solen. Detta är samma anledning till att månen verkar lysa. Även när månen inte har stigit, kommer du fortfarande att kunna se rymdstationen.",

        question13: "13. Vilken tidszon används för meddelanden?",
        answer13:
          "All information i Spot The Station är listad i den lokala tidszonen för den valda platsen. Spot The Station justerar automatiskt för sommartid.",

        question14: "14. Vilken information ger appen för varje observation?",
        answer14:
          "För varje observation visar appen tid, siktvaraktighet, maximal höjd och riktningar där stationen kommer att dyka upp och försvinna, vilket hjälper dig att lokalisera den exakt på himlen.",

        question15:
          "15. Hur kan jag se stationen under varje observation? Vad betyder all denna observationsinformation?",
        answer15:
          "Appen ger en lista över kommande observationer om du trycker på Nästa observationslista på startsidan.<br/><strong>Datum och tid</strong> är när observationsmöjligheten börjar i din lokala tidszon. Alla observationer kommer att ske inom några timmar före eller efter soluppgång eller solnedgång. Detta är den optimala visningsperioden eftersom solen reflekteras från rymdstationen och kontrasterar mot den mörkare himlen.<br/><strong>Ovanför horisonten</strong> är den maximala tidsperioden rymdstationen är synlig innan den korsar tillbaka under horisonten.<br/><strong>Maximal höjd</strong> mäts i grader (även känd som elevation). Det representerar höjden på rymdstationen från horisonten på natthimlen. Horisonten är vid noll grader, och direkt ovanför är nittio grader. Om du håller din knytnäve på armlängds avstånd och placerar din knytnäve vilande på horisonten, kommer toppen att vara cirka 10 grader.<br/><strong>Visas</strong> är platsen på himlen där stationen först kommer att synas. Detta värde, liksom maximal höjd, mäts också i grader från horisonten. Bokstäverna representerar kompassriktningar – N är norr, VNV är väst-nordväst och så vidare.<br/><strong>Försvinner</strong> representerar var på natthimlen den internationella rymdstationen kommer att lämna ditt synfält.<img src='https://spotthestation.nasa.gov/images/astro_horizon.png' />",

        question16:
          "16. Flygplansschemat anger att rymdstationen både dyker upp och försvinner från samma riktning, hur är det möjligt? T.ex. - Tid: Mån 15 juli 11:57 PM, Synlig: 2 min, Maximal höjd: 51°, Visas: 51° ovanför ENE, Försvinner: 11° ovanför ENE",
        answer16:
          "Spot the Station-programvaran avrundar riktningar till närmaste kardinal- och interkardinalriktningar. Detta kan resultera i att det verkar som om stationen kommer att dyka upp och försvinna i samma riktning även om den rör sig över himlen. Detta händer vanligtvis vid överflygningar med ett kort fönster av synlighet eftersom stationen snabbt rör sig in i (eller ut ur) jordens mörka skugga där, från vår plats på marken, vi inte kan observera dess fulla passage över himlen.",

        question17: "17. Kan jag se en livekarta över stationens plats?",
        answer17:
          "Ja, appen inkluderar en karta i realtid som visar stationens aktuella position när den kretsar runt jorden, vilket ger dig en visuell referens för att spåra dess framsteg.",

        question18: "18. Vad är AR-funktionen i Spot the Station-appen?",
        answer18:
          "Augmented Reality (AR)-funktionen i Spot the Station-appen låter användare se en virtuell överlagring av den internationella rymdstationens bana på himlen. Denna funktion hjälper användare att lokalisera stationen mer exakt genom att justera deras enhet med stationens position i realtid.",

        question19: "19. Hur får jag tillgång till AR-funktionen i appen?",
        answer19:
          "För att få tillgång till AR-funktionen, öppna appen och navigera till AR View-alternativet i den nedre menyn. Följ instruktionerna på skärmen för att justera din enhets kamera med himlen, där appen kommer att visa en virtuell överlagring som indikerar stationens position och bana.",

        question20:
          "20. Behöver jag en specifik enhet eller programvara för att använda AR-funktionen?",
        answer20:
          "AR-funktionen kräver en enhet som kan bestämma sin orientering i 3D-utrymme. Den kräver specifikt hårdvarustöd, såsom en gyroskop eller rörelse-samprocessor. Äldre eller budgetenheter kanske inte stöder denna funktionalitet.",

        question21: "21. Hur fungerar AR-funktionen?",
        answer21:
          "Genom att använda din enhets kamera och sensorer överlagrar AR-funktionen stationens plats på himlen på din skärm, justerar i realtid när du flyttar din enhet. Appen guidar dig att rikta din kamera i rätt riktning och visar var stationen kommer att dyka upp och försvinna.",

        question22: "22. Kan jag använda AR-funktionen både dag och natt?",
        answer22:
          "Ja, du kan använda AR-funktionen både dag och natt; dock är den bästa upplevelsen vanligtvis under skymning eller natt när stationen är synlig för blotta ögat. AR-överlagringen fungerar oavsett ljusförhållanden, men faktiska observationer beror på synlighet.",

        question23: "23. Är AR-överlagringen exakt för alla platser?",
        answer23:
          "Ja, AR-funktionen är utformad för att ge exakt positionsinformation baserat på din GPS-plats. Dock kan noggrannheten variera något beroende på din enhets kompass och sensorkalibrering. Om du märker avvikelser, kalibrera din enhets kompass genom Inställningar.",

        question24: "24. Kan AR-funktionen hjälpa till med exakta observationstider?",
        answer24:
          "AR-funktionen guidar dig visuellt för att lokalisera stationen vid den exakta tidpunkt den dyker upp på himlen. I kombination med appens observationsvarningar förbättrar den din förmåga att se stationen genom att ge dig en live, visuell riktning och höjdindikator för att spåra den exakt.",

        question25: "25. Finns det tips för att optimera min AR-upplevelse?",
        answer25:
          "För den bästa AR-upplevelsen, använd funktionen i ett öppet område med fri sikt mot himlen. Undvik hinder som höga byggnader eller träd, eftersom dessa kan blockera synligheten. Kalibrera din enhets kompass och se till att plats- och kameratillstånd är aktiverade för smidig funktion.",

        question26: "26. Är AR-funktionen tillgänglig på både Android och iOS?",
        answer26:
          "Ja, AR-funktionen är tillgänglig på både iOS- och Android-versioner av appen, så länge din enhet uppfyller hårdvarukraven.",

        question27: "27. Fungerar appen offline?",
        answer27:
          "Viss grundläggande funktionalitet, som att komma åt tidigare nedladdade observationsscheman eller ta emot schemalagda meddelanden, kan fungera offline. Men funktioner som kräver realtidsdata, såsom spårning, kräver en internetanslutning.",

        question28: "28. Finns det några speciella krav för att använda appen?",
        answer28:
          "Appen kräver en aktiv internetanslutning för spårning i realtid och varningar. Dessutom, för plats-specifik information, se till att din enhets platstjänster är aktiverade för appen.",

        question29: "29. Är appen gratis att använda?",
        answer29:
          "Ja, Spot the Station-appen är gratis att ladda ner och använda, utan köp i appen eller prenumerationer.",

        question30: "30. Vem kan jag kontakta för appsupport?",
        answer30:
          "För support med Spot the Station-appen, besök NASAs supportsida eller kontakta via feedback-alternativet i appen.",
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
  },
}

export default sv
export type Translations = typeof sv
