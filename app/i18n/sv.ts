const sv = {
  errorScreen: {
    title: "Något gick fel!",
    friendlySubtitle:
      "Det här är skärmen som dina användare kommer att se i produktionen när ett fel kuppstår.Du vill anpassa det här meddelandet (beläget i `App/i18n/en.ts ') och förmodligen också layouten (` app/skärmar/felaktigheter).Om du vill ta bort detta helt, kontrollera `app/app.tSx` för <ErrorBoundary> -komponenten.",
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
  permissionsModal: {
    close: "Stänga",
    openSettings: "Öppna Inställningar",
    body: "För att använda den här funktionen måste du ge tillstånd att komma åt galleriet.",
  },
  permissionsAndroid: {
    title: "Tillstånd att spara videor",
    message: "Den här appen behöver tillåtelse för att spara videor på din enhet.",
    buttonNeutral: "Fråga mig senare",
    buttonNegative: "Avbryt",
    buttonPositive: "OK",
  },
  thanksModal: {
    body: "Tack för att du kontaktar oss.Vi har fått ditt meddelande och kommer att behandla din begäran.Vi hoppas kunna inkludera en resolution i framtida versioner. Observera att den här applikationen inte samlar in användardata, så vi kan inte svara på alla meddelanden individuellt.",
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
      title: "Hitta ISS nu!",
      subTitle: "ISS passerar ovanför dig vid",
    },
    before: {
      titleOne: "Hitta ISS i",
      titleTwo: "minuter!",
      subTitleOne: "ISS passerar ovanför dig",
      subTitleTwo: "protokoll vid",
    },
  },
  units: {
    minute: "min",
    kilometer: "km",
    kilogram: "kg",
    month: "månad",
    metersPerSecond: "m/s",
  },
  tabNavigator: {
    homeTab: "Hem",
    issViewTab: "ISS -vy",
    issNowTab: "ISS nu",
    resourcesTab: "Resurser",
    settingsTab: "inställningar",
  },
  onboarding: {
    splash: {
      title: "Hitta stationen",
      subTitle: "Titta upp i skyn och se Internationella rymdstationen (ISS)",
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
      message: "ISS data laddas ... det kan ta en stund att slutföra.",
      trajectoryError:
        "ISS -banan är för närvarande inte tillgänglig på grund av serverunderhåll. Kom tillbaka igen senare.",
    },
    header: {
      firstTimeHead: "Nästa observation",
      secondTimeHead: "NEDRÄKNING",
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
    },
    selectSightings: {
      title: "Kommande observationer",
      sightings: "Observationer",
      selectMessage: "Välj händelser som du vill bli meddelad för.",
      switch: "Meddela mig för alla kommande händelser på den här platsen.",
      aboveHorizon: "Ovanför horisonten",
      today: "Idag",
      tomorrow: "Imorgon",
      coach: {
        title: "Ikoner Beskrivning",
        moon: "Det kommer att vara natt på den valda platsen när ISS är över horisonten.",
        sunset: "Det kommer vara skymning vid den valda platsen när ISS passerar horisonten",
        sun: "Det kommer vara dagsljus vid den valda platsen när ISS passerar horisonten.",
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
        "Det här avsnittet visar dig datumet och en nedräkningstimer för nästa kommande ISS -observation nära din valda plats.Du kan trycka på nästa observationsruta för att se en komplett lista över de kommande observationerna.",
      globeTitle: "Interaktiva jorden",
      globeData:
        "Du kan se ISS i realtid genom att svepa på skärmen.Detta gör att du kan interagera med jorden och spåra platsen för ISS i realtid.",
      mapTitle: "2d Map View",
      mapData:
        "Detta avsnitt visar en 2D -representation av den fullständiga vägen för ISS mot natt- och dagregionerna över jorden.",
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
      title: "Internationella rymdstationen - Detaljer",
      distance: "Distans",
      orbitalSpeed: "Omloppshastighet",
      longitude: "Longitud",
      latitude: "Latitud",
      altitude: "Höjd över havet",
      crewOnboard: "Besättning ombord",
      launched: "Montering började",
      launchedValue: "20 november 1998",
      mass: "Uppskattad massa",
      dimensions: "Uppskattade dimensioner",
      orbitalPeriod: "Omloppsperiod",
      orbitsPerDay: "Omlopp/dag",
      orbitalDecay: "Omloppsförfall",
      dimensionsValue: "109 m bred x 73 m lång x 14 m lång",
    },
  },
  settings: {
    header: "inställningar",
    locationSettings: "Platsinställningar",
    notificationSettings: "Notisinställningar",
    termsAndConditions: "Villkor",
    contactUs: "Kontakta oss",
    termsAndConditionsData: {
      backButton: "inställningar",
      ios: {
        title: "Licensierad ansökan om användning",
        intro1:
          "Slutanvändare vill använda följande licensierade ansökan som utvecklats av USA: s regering, representerad av National Aeronautics and Space Administration, belägen på 300 E Street SW, Washington, D.C. (nedan NASA):",
        appData: {
          line1: "Licensierad ansökan:",
          line2: "Version:",
          line3: "NASA-tekniknummer: MSC-27535-1 (nedan licensierad applikation)",
        },
        contactData: {
          line1: "NASA -kontaktpunkt:",
          line2: "Jacob Keaton",
          line3: "NASA: s huvudkontor",
          line4: "300 E Street SW",
          line5: "E-post: spotthestation@hq.nasa.gov",
        },
        intro2:
          "Myndigheten för NASA att frigöra den licensierade ansökan är NASA Policy Direktiv (NPD) 2820.1C",
        intro3:
          "NOW THEREFORE, in consideration of NASA releasing the LICENSED APPLICATION to END-USER and granting END-USER the non-transferable right to use the LICENSED APPLICATION as specified herein on any iPhone or iPod touch that END-USER owns or controls and as permitted by the Usage Rules set forth in the App Store Terms and Conditions for non-commercial purposes only, END-USER agrees as follows:",
        body: {
          line1:
            "1. NASA och slutanvändare erkänner att detta avtal endast ingår mellan NASA och slutanvändare, och inte med Apple, detta avtal är inte överförbart, och NASA, inte Apple, är ensamt ansvarigt för den licensierade ansökan och innehållet därav.",
          line2:
            "2. NASA och slutanvändare erkänner och samtycker till att Apple och Apples dotterbolag är tredjepartsmottagare av detta avtal, och att Apple kommer att ha accepterat rätten att genomföra detta avtal mot slutanvändarens villkor som ett tredje parts förmånstillstånd.",
          line3:
            "3. Den licensierade ansökan förblir NASA: s egendom.Slutanvändare erkänner att den inte förvärvar något ägarintresse i den licensierade ansökan enligt detta avtal.Den licensierade ansökan är inte i allmänhetens område och ingenting i detta avtal ska tolkas som att göra den licensierade ansökan tillgänglig för allmänheten utan begränsning.",
          line4:
            "4. Det ska inte finnas någon frisläppande, distribution eller publicering av den licensierade ansökan från End-User.",
          line5:
            "5. NASA ska varken vara ansvarig eller ansvarig för underhåll eller uppdatering av den angivna licensierade ansökan eller för korrigering av fel i den licensierade ansökan.NASA och slutanvändare erkänner att Apple inte har någon skyldighet att tillhandahålla några underhålls- och supporttjänster med avseende på den licensierade ansökan.",
          line6:
            "6. Slutanvändare representerar och garanterar att (i) han/hon inte är belägen i ett land som är föremål för ett amerikanskt regeringsembargo, eller som har utsetts av den amerikanska regeringen som ett ”terroriststöd”.och (ii) Han/hon är inte listad på någon amerikansk regeringslista över förbjudna eller begränsade parter.",
          line7:
            '7. Den licensierade ansökan tillhandahålls "som den är" utan någon garanti av något slag, antingen uttryckt, underförstådd eller lagstadgad, inklusive, men inte begränsad till, någon garanti för att den licensierade ansökan kommer att anpassa sig till specifikationer, alla underförstådda garantier för försäljningsbarhet, lämplighet för ett visst syfte och frihet från att motverka, eller någon garanti för att den licensierade ansökan kommer att vara felfri.Under inga omständigheter ska NASA vara ansvarig för skadestånd, inklusive, men inte begränsat till, direkt, indirekt, special- eller följdskador, som uppstår, till följd av eller på något sätt kopplade till den licensierade ansökan, oavsett om eller inte är baserad på garanti, tort eller på annat sätt, oavsett om skador har upprätthållits av personer eller egendom eller på annat sätt, eller inte förlust utifrån, eller inte, eller på annat sätt, oavsett om skada har upprätthållits av personer eller egendom eller på annat sätt, eller om eller inte förlust utifrån, eller inte, eller på annat sätt.Slutanvändaren samtycker till att avstå från alla fordringar mot den amerikanska regeringen, dess entreprenörer och deras underleverantörer, och ska ersätta och hålla ofarligt den amerikanska regeringen, dess entreprenörer och deras underleverantörer för eventuella skador som slutanvändare kan komma från slutanvändarens användning av den licensierade tillämpningen, inklusive eventuella skador från produkter baserade på, eller följaktligen från LICENS.',
          line8:
            "8. I händelse av att det licensierade ansökan är att anpassa sig till eventuella garantier som är tillämpliga enligt lag, kan slutanvändare meddela Apple, och Apple kommer att återbetala inköpspriset (om någon) för den licensierade ansökan till slutanvändare.I den maximala utsträckningen som tillåts enligt tillämplig lag kommer Apple att inte ha några andra förluster, skulder, skador, kostnader eller utgifter som kan hänföras till eventuella misslyckanden i den licensierade ansökan att anpassa sig till alla garantier.",
          line9:
            "9. NASA och slutanvändare erkänner att i händelse av någon tredje part hävdar att den licensierade ansökan eller slutanvändarens besittning och användning av licensierad ansökan bryter mot immateriella rättigheter, NASA, inte Apple, ensam kommer att vara ansvarig för utredningen, försvaret, avvecklingen och ansvarsfriheten för en sådan intellektuell egendomskrav, med föremål för lag.",
          line10:
            "10. NASA och slutanvändare erkänner att NASA, inte Apple är ansvarig för att ta itu med några påståenden om slutanvändare eller tredje part som hänför sig till licensierade ansökan eller slutanvändarens besittning och /eller användning av den licensierade ansökan, inklusive, men inte begränsat till: (i) produktansvar;(ii) alla påståenden om att den licensierade ansökan inte uppfyller eventuella tillämpliga juridiska eller lagstiftningskrav, inklusive eventuella garantier som tillämpas enligt lag;och (iii) påståenden som uppstår enligt konsumentskydd eller liknande lagstiftning.",
          line11:
            "11. Detta avtal ska tolkas, och de rättsliga förbindelserna mellan parterna här, ska fastställas, i enlighet med USA: s federala lag för alla ändamål.",
          line12:
            "12. Detta avtal utgör hela förståelsen och avtalet mellan NASA och slutanvändare som hänför sig till frisläppandet av den licensierade ansökan och får inte ersättas, modifieras eller ändras.",
          line13:
            "13. Genom att acceptera och använda den licensierade ansökan enligt detta avtal samtycker slutanvändaren härmed till alla villkor här.",
        },
      },
      android: {
        title: "Licensierad ansökan om användning",
        intro1:
          "Slutanvändare vill använda följande produkt som utvecklats av USA: s regering, representerad av National Aeronautics and Space Administration, Ames Research Center, beläget vid Moffett Field, CA 94035 (nedan NASA):",
        appData: {
          line1: "Programvara:",
          line2: "Version:",
          line3: "NASA-tekniknummer: MSC-27535-1",
        },
        intro2:
          "Myndigheten för NASA att frigöra den licensierade ansökan är NASA Policy Direktiv (NPD) 2820.1C.",
        intro3:
          'Nu, med hänsyn till att NASA släpper den licensierade ansökan till slutanvändare och beviljande av slutanvändare den icke-överförbara rätten att använda den licensierade applikationen för personlig, icke-kommersiell användning och som specificeras här och som tillåtet av Android-marknaden för alla Android-drivna mobila enheter ("enhet") som slutanvändare äger, är det tillåtna, slutföretag som följer på alla Android-drivna mobila enheter ("anordning") som slutanvändare äger, slutar, slutar, som följer, som följer med att följa alla Android-drivna mobila enheter ("enhet") som slutanvändare äger eller kontroller, slutar, som är i slutändan:',
        body: {
          line1:
            "1. Den licensierade ansökan förblir NASA: s egendom.Slutanvändare erkänner att den inte förvärvar något ägarintresse i den licensierade ansökan enligt detta avtal.Den licensierade ansökan är inte i allmänhetens område och ingenting i detta avtal ska tolkas som att göra den licensierade ansökan tillgänglig för allmänheten utan begränsning.",
          line2:
            "2. Det ska inte finnas någon frisläppande, distribution eller publicering av den licensierade ansökan från End-User.",
          line3:
            "3. NASA ska varken vara ansvarig eller ansvarig för underhåll eller uppdatering av den angivna licensierade ansökan eller för korrigering av fel i den licensierade ansökan.",
          line4:
            "4. Slutanvändare representerar och garanterar att (i) han/hon inte är belägen i ett land som är föremål för ett amerikanskt regeringsembargo, eller som har utsetts av den amerikanska regeringen som ett ”terroriststöd”.och (ii) Han/hon är inte listad på någon amerikansk regeringslista över förbjudna eller begränsade parter.",
          line5:
            '5. Den licensierade ansökan tillhandahålls "som den är" utan någon garanti av något slag, antingen uttryckt, underförstådd eller lagstadgad, inklusive, men inte begränsad till, någon garanti för att den licensierade ansökan kommer att anpassa sig till specifikationer, alla underförstådda garantier för försäljningsbarhet, lämplighet för ett visst syfte och frihet från att motverka, eller någon garanti för att den licensierade ansökan kommer att vara felfri.Under inga omständigheter ska NASA vara ansvarig för skadestånd, inklusive, men inte begränsat till, direkt, indirekt, special- eller följdskador, som uppstår, till följd av eller på något sätt kopplade till den licensierade ansökan, oavsett om eller inte är baserad på garanti, tort eller på annat sätt, oavsett om skador har upprätthållits av personer eller egendom eller på annat sätt, eller inte förlust utifrån, eller inte, eller på annat sätt, oavsett om skada har upprätthållits av personer eller egendom eller på annat sätt, eller om eller inte förlust utifrån, eller inte, eller på annat sätt.Slutanvändare samtycker till att avstå från alla fordringar mot den amerikanska regeringen, dess entreprenörer och deras underleverantörer, och ska ersätta och hålla ofarligt den amerikanska regeringen, dess entreprenörer och deras underleverantörer för eventuella skador som slutanvändare kan komma från slutanvändarens användning av den licensierade ansökan, inklusive eventuella skador från licensierade tillämpningar baserade på eller resultera från licens.',
          line6:
            "6. Detta avtal ska tolkas, och de rättsliga förbindelserna mellan parterna här, ska fastställas, i enlighet med USA: s federala lag för alla ändamål.",
          line7:
            "7. Detta avtal utgör hela förståelsen och avtalet mellan NASA och slutanvändare som hänför sig till frisläppandet av den licensierade ansökan och får inte ersättas, modifieras eller ändras.",
          line8:
            "8. Genom att acceptera och använda den licensierade ansökan enligt detta avtal samtycker slutanvändaren härmed till alla villkor här.",
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
  },
  resources: {
    header: "Resurser",
    searchPlaceholder: "Sökartiklar, händelser osv ...",
    suggestions: "FÖRSLAG",
    searchResults: "sökresultat",
    tabs: {
      news: "Nyheter",
      about: "Om",
      details: "Information",
    },
  },
}

export default sv
export type Translations = typeof sv
