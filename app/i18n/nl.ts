const nl = {
  name: "Nederlands",
  errorScreen: {
    title: "Er is iets fout gegaan!",
    friendlySubtitle:
      "Dit is het scherm dat uw gebruikers zullen zien wanneer er een fout is opgetreden. U zult deze boodschap willen aanpassen (geloceerd in `app/i18n/en.ts`) en waarschijnlijk de layout ook (`app/screens/ErrorScreen`). Als u dit volledig wilt verwijderen, check `app/app.tsx` voor het <ErrorBoundary> bestanddeel.",
    reset: "Herstel app",
  },
  snackBar: {
    ok: "OK",
    dismiss: "Sluiten",
    sightingsSaved: "Waarnemingen voor de laatst opgeslagen locatie geladen!",
    defaultError: "Er is een fout opgetreden",
    locationSaved: "Locatie opgeslagen",
    locationExist: "Locatie met deze naam bestaat al!",
    openSettingsError: "Kan instellingen niet openen!",
    shared: "Delen geslaagd!",
    savedToGallery: "Opgeslagen in galerij",
  },
  outdatedModal: {
    title: "Update beschikbaar",
    body: "Nieuwe versie van de app beschikbaar! Download de nieuwe versie op",
    buttonNegative: "Annuleren",
    buttonPositive: "Downloaden",
  },
  permissionsModal: {
    close: "Sluiten",
    openSettings: "Open instellingen",
    body: "Om deze functie te kunnen gebruiken zult u toegang aan de galerij moeten verlenen.",
  },
  fontSizeModal: {
    title: "Lettergrootte te groot",
    body1:
      "Het lijkt erop dat de lettergrootte van uw apparaat te hoog is ingesteld. Dit kan ervoor zorgen dat essentiële informatie wordt afgekapt of onjuist wordt weergegeven in de app.",
    bodyAndroid:
      "Om uw lettergrootte aan te passen, gaat u naar Instellingen → Weergave → Lettergrootte en stijl → Pas de schuifregelaar aan naar een kleinere grootte.",
    bodyIOS:
      "Om uw lettergrootte aan te passen, gaat u naar Instellingen → Toegankelijkheid → Weergave en tekstgrootte → Grotere tekst → Pas de schuifregelaar aan naar een kleinere grootte.",
    cancel: "Annuleren",
    settings: "Ga naar Instellingen",
  },
  permissionsAndroid: {
    title: "Toestemming om video's op te slaan",
    message: "Deze app heeft toestemming nodig om video's op uw apparaat op te kunnen slaan.",
    buttonNeutral: "Vraag het me later",
    buttonNegative: "Annuleren",
    buttonPositive: "OK",
    alarmPermissionTitle: "Toestemming vereist",
    alarmPermissionMessage:
      "Verleen alsjeblieft toestemming voor wekkers en herinneringen op het volgende scherm om meldingen te ontvangen over aankomende waarnemingen.",
  },
  thanksModal: {
    body: "Bedankt dat u contact met ons opneemt. We hebben uw bericht ontvangen en zullen uw verzoek verwerken. Houd er rekening mee dat deze applicatie geen gebruikersgegevens verzamelt, dus we kunnen niet op alle berichten afzonderlijk reageren.",
    dismiss: "Sluiten",
  },
  privacy: {
    title: "Gebruik uw locatie",
    body: "We gebruiken locatiegegevens om de aankomende waarnemingen op uw huidige locatie te berekenen. Verleen alstublieft locatierechten om dit functioneel mogelijk te maken.",
    agree: "AKKOORD",
    skip: "OVERSLAAN",
    policy: "Privacybeleid",
  },
  notifications: {
    push: {
      title: "Aanschouw nu het station!",
      subTitle: "Het station passeert nu boven u met",
    },
    before: {
      titleOne: "Zie het station over",
      titleTwo: "minuten!",
      subTitleOne: "Het station passeert u over",
      subTitleTwo: "minuten met",
    },
  },
  units: {
    minute: "min",
    kilometer: "km",
    kilogram: "kg",
    month: "maand",
    metersPerSecond: "M/S",
    time: "T",
  },
  tabNavigator: {
    homeTab: "Thuis",
    issViewTab: "AR Weergave",
    issNowTab: "Spoorzoeker",
    resourcesTab: "Bronnen",
    settingsTab: "Instellingen",
  },
  onboarding: {
    splash: {
      title: "Zoek\nhet station",
      subTitle: "Kijk omhoog in de lucht en bekijk het Internationale Ruimtestation",
    },
    completeProfile: {
      notification: {
        title: "Notificatie instellingen",
        label: "Ontvang push-meldingen",
        tip: "Ontvang waarschuwingen wanneer het ruimtestation uw locatie nadert.",
        nextButton: "Volgende",
      },
      location: {
        title: "Uw locatie",
        subtitle: "Laat de app uw locatie automatisch zoeken of voer uw locatie handmatig in.",
        detectButton: "Detecteer mijn locatie",
        orLabel: "of",
        selectLocation: "Voer uw locatie in",
        detecting: "Locatie zoeken ...",
        doneButton: "Klaar",
        serviceAlertTitle: "Locatiediensten uitgeschakeld",
        serviceAlertBody: "Schakel uw locatiediensten in om door te gaan.",
        permissionAlertTitle: "Toestemming niet verleend",
        permissionAlertBody:
          "We gebruiken locatiegegevens om de aankomende waarnemingen op uw huidige locatie te berekenen. Verleen alstublieft lokatiepermissies om deze functionaliteit mogelijk te maken.",
      },
    },
  },
  homeScreen: {
    initLoader: {
      message: "Station-gegevens worden geladen... Dit kan even duren.",
      trajectoryError:
        "De Station-trajectgegevens zijn momenteel niet beschikbaar vanwege serveronderhoud. Kom later terug.",
      noNetwork:
        "De Station-trajectgegevens zijn momenteel niet beschikbaar vanwege geen verbinding. Kom later terug.",
    },
    header: {
      firstTimeHead: "VOLGENDE WAARNEMING(EN) LIJST",
      secondTimeHead: "Aftellen",
      timezone: "Tijdzone",
    },
    selectLocation: {
      title: "Selecteer een locatie",
      inputPlaceholder: "Zoek naar een stad of plaats een speld...",
      current: "Huidige locatie",
      saved: "Opgeslagen locaties",
      nearby: "Nabijgelegen locaties",
      search: "Zoekresultaten",
      cta: "Meldingen aanpassen voor deze locatie",
      actionTitle: "Waarschuwing",
      refresh: "Vernieuwen",
    },
    selectSightings: {
      title: "Eerstvolgende waarnemingen",
      sightings: "Waarnemingen",
      selectMessage: "Selecteer gebeurtenissen waarvan u op de hoogte gehouden wilt worden.",
      switch: "Houd mij op de hoogte van alle aankomende gebeurtenissen op deze locatie.",
      aboveHorizon: "Boven de horizon",
      maxHeight: "Maximale hoogte van",
      today: "Vandaag",
      tomorrow: "Morgen",
      appears: "Komt naar voren",
      disappears: "Verdwijnt",
      all: "Alle",
      timeOfDay: "Tijdstip",
      night: "Nacht",
      twilight: "Schemering",
      duration: "Duur",
      shorterThan2: "korter dan 2 minuten",
      longerThan2: "2 minuten en langer",
      empty:
        "Er zijn geen potentiële Station-waarnemingen voor deze locatie van {{start}} tot en met {{end}}.",
      shareTitle: "Het station vliegt boven {{location}} op {{date}}",
      shareLink:
        "Om meer te verkennen en het station via augmented reality te volgen, download de app op",
      coach: {
        title: "Beschrijving van pictogrammen",
        moon: "Het zal nacht zijn op de geselecteerde locatie wanneer het Station boven de horizon is.",
        sunset:
          "Er zal schemering zijn op de geselecteerde locatie wanneer het Station boven de horizon is.",
      },
      compass: {
        N: "N",
        NNE: "NNO",
        NE: "NO",
        ENE: "ONO",
        E: "O",
        ESE: "OZO",
        SE: "ZO",
        SSE: "ZZO",
        S: "Z",
        SSW: "ZZW",
        SW: "ZW",
        WSW: "WZW",
        W: "W",
        WNW: "WNW",
        NW: "NW",
        NNW: "NNW",
      },
    },
    coachMarks: {
      skip: "Rondleiding overslaan",
      next: "Volgende",
      finish: "Eindig",
      dismiss: "Verwijder",
      locationTitle: "Locatie veranderen",
      locationData:
        "U kunt uw locatie direct vanaf hier selecteren of wijzigen naar een andere locatie.",
      sightingsTitle: "Volgende waarneming & Aftellen",
      sightingsData:
        'Deze sectie laat u de datum en een aftelklok zien voor de eerstvolgende Station-waarneming in de buurt van uw geselecteerde locatie. U kunt op de knop "Volgende Waarneming" tikken om een complete lijst van de aankomende waarnemingen te zien.',
      globeTitle: "Interactieve aarde",
      globeData:
        "U kunt de realtime positie van het Station bekijken door over het scherm te vegen. Dit stelt u in staat de aarde te beinvloeden en het spoor van het Station in de werkelijke tijd te volgen.",
      mapTitle: "2D kaartweergave",
      mapData:
        "Deze sectie toont een 2D-weergave van het volledige pad van het Station tegen de nacht- en dagregio's van de aarde.",
      navigationTitle: "Navigatie",
      navigationData:
        "U kunt door de verschillende functies van de app bladeren via het onderstaande navigatiemenu.",
    },
  },
  issView: {
    timeHeader: "Aftellen",
    cameraPermissionText:
      "U heeft geen toestemming gegeven voor het gebruik van de camera van uw telefoon. Klik hier om toe te staan.",
    issCaptured: "Leg dit moment vast",
    details: {
      title: "Informatie",
      orbitalSpeed: "Orbitale snelheid",
      longitude: "Lengtegraad",
      latitude: "Breedtegraad",
      altitude: "Hoogte",
      crewOnboard: "Typisch aantal bemanningsleden aan boord",
      launched: "Montage begon",
      launchedValue: "20 november 1998",
      mass: "Geschatte massa",
      dimensions: "Geschatte afmetingen",
      orbitalPeriod: "Omlooptijd",
      orbitsPerDay: "Banen/dag",
      dimensionsValue: "109m breed x 73m lang x 14m hoog",
      dateTime: "Datum en Tijd",
      maxHeight: "Maximale Hoogte",
      duration: "Duur Boven Horizon",
      appears: "Verschijnt",
      disappears: "Verdwijnt",
      distance: "Afstand",
      nextSighting: "Volgende Waarneming",
    },
    arNotSupported: "AR wordt niet ondersteund op dit apparaat",
    noOrientationSensor: "Orientatiesensor niet beschikbaar",
    noMagnetometerSensor: "Magnetometer is niet beschikbaar",
    screenshotError: "Kan geen schermafbeelding maken",
    coachMarks: {
      circleTitle: "Spot de Station",
      circleData:
        "Om de station te spotten, beweeg je telefoon in de richting van de pijl buiten de cirkel. Naarmate je dichterbij komt, zal de kleur van de cirkel veranderen naar groen.",
      compassTitle: "Kompas",
      compassData:
        "Dit kompas toont je de richting waarin je kijkt, en de relatieve richting waarin je de station kunt spotten.",
      infoTitle: "Informatie",
      infoData:
        "Deze schakelaar opent of sluit het venster met gedetailleerde informatie over de huidige of volgende aanstaande waarneming en live informatie over de station.",
      trajectoryTitle: "Station Traject",
      trajectoryData:
        "Deze schakelaar zet het stationstraject aan of uit het scherm. De volle lijn toont het verleden en de stippellijn toont de toekomstige baan van de station.",
      arTitle: "AR Weergave",
      arData: "Deze schakelaar schakelt tussen de volledige scherm- en gedeeltelijke AR-weergaven.",
      shareTitle: "Delen",
      shareData:
        "Met deze knop kun je een screenshot van de AR-weergave delen via sms, e-mail of sociale media.",
      screenshotTitle: "Schermafbeelding",
      screenshotData:
        "Met deze knop kun je een screenshot van de AR-weergave maken om op te slaan in je fotogalerij.",
      videoTitle: "Videoregistratie",
      videoData:
        "Met deze knop kun je een video van de AR-weergave opnemen om de momenten vast te leggen waarop je de station spot.",
    },
    safetyReminder: {
      title: "Let op: Veiligheidsreminder",
      subtitle1: "Ouderlijk toezicht geadviseerd:",
      body1:
        "Denk alsjeblieft aan het belang van ouderlijk toezicht bij het gebruik van het AR-scherm in deze app. Kinderen moeten deze functie onder begeleiding van een verantwoordelijke volwassene gebruiken om een veilige en passende ervaring te garanderen.",
      subtitle2: "Blijf alert op je omgeving:",
      body2:
        "Terwijl je geniet van de augmented reality-ervaring, blijf altijd bewust van je fysieke omgeving. Let op obstakels, oneffen terrein of andere gevaren die een risico kunnen vormen voor je veiligheid. Je veiligheid staat voorop, dus wees alsjeblieft altijd voorzichtig en oplettend.",
      home: "Terug naar start",
      ok: "Ik begrijp het",
    },
  },
  settings: {
    header: "Instellingen",
    locationSettings: "Locatie instellingen",
    notificationSettings: "Notificatie instellingen",
    termsAndConditions: "Voorwaarden",
    contactUs: "Neem contact met ons op",
    language: "Taal",
    calibrateCompass: "Kalibreer de kompas",
    calibrateCompassData: {
      instructions:
        "Om de kompas te kalibreren, draai uw apparaat meerdere keren in een figuur 8-patroon.",
      accuracy: "Sensornauwkeurigheid:",
      low: "Laag",
      medium: "Gemiddeld",
      high: "Hoog",
    },
    tutorials: "Handleidingen",
    tutorialsData: {
      description:
        "Wil je de stapsgewijze handleidingen voor de Startpagina en AR-weergave nog een keer zien?",
      homePage: "Startpagina",
      arPage: "AR-weergave",
    },
    termsAndConditionsData: {
      backButton: "Instellingen",
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
            "7.        THE LICENSED APPLICATION IS PROVIDED “AS IS” WITHOUT ANY WARRANTY OF ANY KIND, EITHER EXPRESSED, IMPLIED, OR STATUTORY, INCLUDING, BUT NOT LIMITED TO, ANY WARRANTY THAT THE LICENSED APPLICATION WILL CONFORM TO SPECIFICATIONS, ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND FREEDOM FROM INFRINGEMENT, OR ANY WARRANTY THAT THE LICENSED APPLICATION WILL BE ERROR FREE.  IN NO EVENT SHALL NASA BE LIABLE FOR ANY DAMAGES, INCLUDING, BUT NOT LIMITED TO, DIRECT, INDIRECT, SPECIAL OR CONSEQUENTIAL DAMAGES, ARISING OUT OF, RESULTING FROM, OR IN ANY WAY CONNECTED WITH THE LICENSED APPLICATION, WHETHER OR NOT BASED UPON WARRANTY, CONTRACT, TORT, OR OTHERWISE, WHETHER OR NOT INJURY WAS SUSTAINED BY PERSONS OR PROPERTY OR OTHERWISE, AND WHETHER OR NOT LOSS WAS SUSTAINED FROM, OR AROSE OUT OF USE OF THE LICENSED APPLICATION. END-USER AGREES TO WAIVE ANY AND ALL CLAIMS AGAINST THE U.S. GOVERNMENT, ITS CONTRACTORS AND THEIR SUBCONTRACTORS, AND SHALL INDEMNIFY AND HOLD HARMLESS THE U.S. GOVERNMENT, ITS CONTRACTORS AND THEIR SUBCONTRACTORS FOR ANY DAMAGE THAT END-USER MAY INCUR FROM END-USER’S USE OF THE LICENSED APPLICATION, INCLUDING ANY DAMAGES FROM PRODUCTS BASED ON, OR RESULTING FROM, THE LICENSED APPLICATION. ",
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
      backButton: "Instellingen",
      title: "Neem contact met ons op",
      titlePlaceholder: "Kies titel",
      commentsPlaceholder: "Opmerkingen invoeren",
      sendButton: "Versturen",
      contactUsOptions: {
        reportAnIssue: "Een probleem melden",
        improvementIdeas: "Suggesties",
        generalQuestions: "Algemene vragen",
        comments: "Opmerkingen",
      },
    },
    notificationSettingsData: {
      backButton: "Instellingen",
      notificationTitle: "Notificatie instellingen",
      privacyTitle: "Privacy instellingen",
      upcomingLabel: "Aankomende Gebeurtenissen",
      customizeLabel: "Meldingen aanpassen",
      upcomingTip: "Schakel uit om geen gebeurtenismeldingen meer te ontvangen.",
      notifyMeBefore: "HERINNER MIJ VAN TEVOREN",
      turnOffNotifications: "SCHAKEL MELDINGEN UIT",
      rangeInputPlaceholder: "Kies tussen 1 tot 120 minuten",
      customOption: "Aangepast",
      from: "Van",
      until: "Tot",
    },
    locationSettingsData: {
      backToSettings: "Instellingen",
      goBack: "Ga terug",
      generalTitle: "Locatie instellingen",
      cta: "Pas meldingen voor deze locatie aan",
      locationPermission: "Locatietoestemming verlenen",
      addNewLocation: {
        generalTitleAdd: "Nieuwe locatie toevoegen",
        generalTitleEdit: "Locatie bewerken",
        confirnModalButton: "Bevestig",
        saveButton: "Locatie opslaan",
        searchInputPlaceholder: "Voer stad, postcode of adres in",
        nameInputPlaceholder: "Locatienaam opslaan",
      },
      removeLocation: {
        question: "Weet u zeker dat u deze locatie wilt verwijderen?",
        cancelButton: "Annuleren",
        removeButton: "Verwijderen",
      },
    },
    share: "Delen",
    shareLink:
      "Om het internationale ruimtestation via augmented reality te volgen, download de NASA Spot The Station mobiele app op",
    localCalculations: "Lokale berekeningen",
  },
  resources: {
    header: "Bronnen",
    goBack: "Ga terug",
    news: {
      title: "Station Nieuws",
      searchPlaceholder: "Zoek artikelen, evenementen, etc...",
      suggestions: "SUGGESTIES",
      searchResults: "Zoekresultaten",
    },
    spotTheStation: {
      title: "Hoe spot ik het station?",
    },
    about: {
      title: "Over het Station",
    },
    details: {
      title: "Station Details",
    },
    faq: {
      title: "Veelgestelde Vragen",

      questions: {
        question1: "1. Waarom is het ruimtestation daarboven?",
        answer1:
          "Het internationale ruimtestation is het enige microzwaartekrachtlaboratorium van de aarde. Dit platform ter grootte van een voetbalveld herbergt een overvloed aan wetenschappelijke en technologische experimenten die continu worden uitgevoerd door bemanningsleden of geautomatiseerd zijn. Onderzoek aan boord van het orbitale laboratorium biedt voordelen voor het leven op aarde, evenals voor toekomstige ruimteverkenning. Het ruimtestation dient als een testomgeving voor technologieën en stelt ons in staat de effecten van langdurige ruimtevluchten op mensen te bestuderen, ter ondersteuning van NASA's missie om de menselijke aanwezigheid verder de ruimte in te duwen. Voor meer informatie over het onderzoek dat plaatsvindt op het ruimtestation en mogelijkheden om daar je wetenschap uit te voeren, <a href='https://www.nasa.gov/international-space-station/'>klik hier</a>.",
        question2: "2. Hoe snel reist het ruimtestation?",
        answer2:
          "Het station draait elke 90 minuten om de aarde. Het reist met ongeveer 17.500 mijl (28.000 km) per uur, wat de bemanning 16 zonsopkomsten en zonsondergangen per dag geeft. In de meer dan 15 jaar dat mensen aan boord hebben gewoond, heeft het station tienduizenden keren de aarde omcirkeld. Je kunt meer feiten over het station zien op <a href='https://www.nasa.gov/international-space-station/space-station-facts-and-figures/'>deze webpagina</a>.",
        question3: "3. Hoe vaak kan ik verwachten het ruimtestation te zien?",
        answer3:
          "Het ruimtestation is zichtbaar omdat het het licht van de zon weerkaatst - dezelfde reden waarom we de maan kunnen zien. Echter, in tegenstelling tot de maan, is het ruimtestation niet helder genoeg om overdag te zien. Het kan alleen worden gezien wanneer het bij jou zonsopgang of zonsondergang is. Als zodanig kan het variëren van één waarnemingsmogelijkheid per maand tot meerdere per week, aangezien het zowel donker moet zijn waar je bent, als het ruimtestation toevallig boven je moet zijn.",
        question4: "4. Wat is de Spot the Station mobiele app?",
        answer4:
          "De Spot the Station mobiele app is een officiële NASA-app die gebruikers helpt om waarnemingen van het internationale ruimtestation te volgen en meldingen te ontvangen wanneer het over hun locatie passeert. Het biedt realtime tracking, waarnemingsschema's en waarschuwingen.",
        question5: "5. Hoe download ik de Spot the Station mobiele app?",
        answer5:
          "Je kunt de app downloaden van zowel de Apple App Store <a href='https://apps.apple.com/us/app/spot-the-station/id6449235044'>hier</a> als de Google Play Store <a href='https://play.google.com/store/apps/details?id=gov.nasa.hq.SpotTheStation&hl=en_US&pli=1'>hier</a>.",
        question6: "6. Hoe waarschuwt de app me voor aankomende waarnemingen van het station?",
        answer6:
          "De app stuurt pushmeldingen om je te waarschuwen voor aankomende waarnemingen van het station, inclusief de datum, tijd, duur en zichtbaarheidsomstandigheden specifiek voor jouw locatie. Zorg ervoor dat je meldingsrechten voor deze app hebt ingeschakeld in de instellingen van je telefoon.",
        question7: "7. Kan ik meldingen in de app aanpassen?",
        answer7:
          "Ja, je kunt de meldingsinstellingen in de app personaliseren om meldingen te ontvangen op basis van je voorkeurslocatie, waarnemingsomstandigheden en zelfs specifieke tijden die het beste voor je werken.",
        question8: "8. Wat moet ik doen als ik geen meldingen ontvang?",
        answer8:
          "Als je geen meldingen ontvangt, zorg ervoor dat meldingen zijn ingeschakeld in de instellingen van je apparaat. Controleer ook de meldingsvoorkeuren van de app om te bevestigen dat je meldingen hebt ingesteld voor je gekozen locatie en voorkeurstijd.",
        question9: "9. Werkt de app internationaal?",
        answer9:
          "Ja, de Spot the Station-app is wereldwijd beschikbaar en biedt waarnemingsinformatie voor de meeste bewoonde locaties, waardoor het gemakkelijk is om het station vanuit bijna overal te bekijken.",
        question10: "10. Waarom zijn er geen waarnemingsmogelijkheden voor mijn locatie?",
        answer10:
          "Het moet donker zijn waar je bent en het ruimtestation moet boven je zijn om het te kunnen zien. Aangezien de baan van het ruimtestation het over de hele wereld brengt, kan het op momenten boven je passeren wanneer het niet zichtbaar is - ofwel midden op de dag of midden in de nacht. Spot The Station stuurt alleen meldingen wanneer je de kans hebt om het ruimtestation te zien, niet elke keer dat het boven je is.",
        question11: "11. Heb ik een telescoop nodig om het ruimtestation te zien?",
        answer11:
          "Nee, je kunt het ruimtestation met het blote oog zien, er is geen apparatuur nodig.",
        question12: "12. Verschijnt en verdwijnt het station vanwege het licht van de maan?",
        answer12:
          "Het ruimtestation is zichtbaar omdat het licht van de zon weerkaatst. Dit is dezelfde reden dat de maan lijkt te schijnen. Zelfs wanneer de maan nog niet is opgekomen, kun je het ruimtestation nog steeds zien.",
        question13: "13. Welke tijdzone wordt gebruikt voor meldingswaarschuwingen?",
        answer13:
          "Alle informatie van Spot The Station wordt weergegeven in de lokale tijdzone voor de geselecteerde locatie. Spot The Station past zich automatisch aan voor zomertijd.",
        question14: "14. Welke informatie biedt de app voor elke waarneming?",
        answer14:
          "Voor elke waarneming toont de app de tijd, zichtbaarheidsduur, maximale hoogte en richtingen waar het station zal verschijnen en verdwijnen, zodat je het nauwkeurig in de lucht kunt lokaliseren.",
        question15:
          "15. Hoe spot ik het station tijdens elke waarneming? Wat betekent al deze waarnemingsinformatie?",
        answer15:
          "De app biedt een lijst met aankomende waarnemingen als je op de lijst met volgende waarnemingen op de startpagina tikt.<br/><strong>Datum en tijd</strong> is wanneer de waarnemingsmogelijkheid begint in jouw lokale tijdzone. Alle waarnemingen zullen plaatsvinden binnen een paar uur voor of na zonsopgang of zonsondergang. Dit is de optimale kijkperiode omdat de zon op het ruimtestation weerkaatst en contrasteert met de donkere lucht.<br/><strong>Boven de horizon</strong> is de maximale tijdsperiode dat het ruimtestation zichtbaar is voordat het weer onder de horizon verdwijnt.<br/><strong>Maximale hoogte</strong> wordt gemeten in graden (ook wel elevatie genoemd). Het vertegenwoordigt de hoogte van het ruimtestation vanaf de horizon in de nachtelijke hemel. De horizon is op nul graden en direct boven je is negentig graden. Als je je vuist op armlengte houdt en je vuist op de horizon plaatst, is de bovenkant ongeveer 10 graden.<br/><strong>Verschijnt</strong> is de locatie in de lucht waar het station eerst zichtbaar zal zijn. Deze waarde, net als de maximale hoogte, wordt ook gemeten in graden vanaf de horizon. De letters vertegenwoordigen kompasrichtingen - N is noord, WNW is west-noordwest, enzovoort.<br/><strong>Verdwijnt</strong> vertegenwoordigt waar in de nachtelijke hemel het internationale ruimtestation je gezichtsveld zal verlaten.<img src='https://spotthestation.nasa.gov/images/astro_horizon.png' />",
        question16:
          "16. Het overvliegschema geeft aan dat het ruimtestation zowel verschijnt als verdwijnt vanuit dezelfde richting, hoe is dat mogelijk? Bijv. - Tijd: ma 15 jul 11:57 PM, Zichtbaar: 2 min, Max hoogte: 51°, Verschijnt: 51° boven ENE, Verdwijnt: 11° boven ENE",
        answer16:
          "De Spot the Station-software rondt richtingen af naar de dichtstbijzijnde kardinale en interkardinale richtingen. Dit kan ertoe leiden dat het lijkt alsof het station in dezelfde richting verschijnt en verdwijnt, ook al beweegt het zich door de lucht. Dit gebeurt meestal bij overvluchten met een korte zichtvenster omdat het station snel in (of uit) de donkere schaduw van de aarde beweegt, waar we vanaf onze locatie op de grond de volledige passage door de lucht niet kunnen waarnemen.",
        question17: "17. Kan ik een live kaart van de locatie van het station bekijken?",
        answer17:
          "Ja, de app bevat een realtime kaart die de huidige positie van het station toont terwijl het om de aarde draait, waardoor je een visuele referentie hebt om zijn voortgang te volgen.",
        question18: "18. Wat is de AR-functie in de Spot the Station-app?",
        answer18:
          "De Augmented Reality (AR) functie in de Spot the Station-app stelt gebruikers in staat om een virtuele overlay van het pad van het internationale ruimtestation in de lucht te bekijken. Deze functie helpt gebruikers om het station nauwkeuriger te lokaliseren door hun apparaat uit te lijnen met de realtime positie van het station.",
        question19: "19. Hoe krijg ik toegang tot de AR-functie in de app?",
        answer19:
          "Om toegang te krijgen tot de AR-functie, open de app en navigeer naar de AR View-optie in het onderste menu. Volg de aanwijzingen op het scherm om de camera van je apparaat op de lucht te richten, waar de app een virtuele overlay zal weergeven die de positie en het traject van het station aangeeft.",
        question20:
          "20. Heb ik een specifiek apparaat of software nodig om de AR-functie te gebruiken?",
        answer20:
          "De AR-functie vereist een apparaat dat zijn oriëntatie in 3D-ruimte kan bepalen. Het vereist specifieke hardware-ondersteuning, zoals een gyroscoop of bewegingscoprocessor. Oudere of budgetapparaten ondersteunen deze functionaliteit mogelijk niet.",
        question21: "21. Hoe werkt de AR-functie?",
        answer21:
          "Met behulp van de camera en sensoren van je apparaat, legt de AR-functie de locatie van het station in de lucht over op je scherm, waarbij het in realtime wordt aangepast terwijl je je apparaat beweegt. De app begeleidt je om je camera in de juiste richting te richten en laat je zien waar het station zal verschijnen en verdwijnen.",
        question22: "22. Kan ik de AR-functie zowel overdag als 's nachts gebruiken?",
        answer22:
          "Ja, je kunt de AR-functie zowel overdag als 's nachts gebruiken; echter, de beste ervaring is meestal tijdens de schemering of 's nachts wanneer het station met het blote oog zichtbaar is. De AR-overlay werkt ongeacht de lichtomstandigheden, maar daadwerkelijke waarnemingen zijn afhankelijk van de zichtbaarheid.",
        question23: "23. Is de AR-overlay nauwkeurig voor alle locaties?",
        answer23:
          "Ja, de AR-functie is ontworpen om nauwkeurige positie-informatie te bieden op basis van je GPS-locatie. De nauwkeurigheid kan echter enigszins variëren, afhankelijk van de kalibratie van het kompas en de sensoren van je apparaat. Als je afwijkingen opmerkt, kalibreer dan het kompas van je apparaat via Instellingen.",
        question24: "24. Kan de AR-functie helpen met exacte waarnemingstijden?",
        answer24:
          "De AR-functie begeleidt je visueel om het station te lokaliseren op het precieze moment dat het in de lucht verschijnt. In combinatie met de waarschuwingsmeldingen van de app verbetert het je vermogen om het station te zien door je een live, visuele richting en hoogte-indicator te geven om het nauwkeurig te volgen.",
        question25: "25. Zijn er tips voor het optimaliseren van mijn AR-ervaring?",
        answer25:
          "Voor de beste AR-ervaring, gebruik de functie in een open gebied met een vrij uitzicht op de lucht. Vermijd obstakels zoals hoge gebouwen of bomen, omdat deze de zichtbaarheid kunnen blokkeren. Kalibreer het kompas van je apparaat en zorg ervoor dat locatievoorzieningen en cameramachtigingen zijn ingeschakeld voor een soepele werking.",
        question26: "26. Is de AR-functie beschikbaar op zowel Android als iOS?",
        answer26:
          "Ja, de AR-functie is beschikbaar op zowel de iOS- als Android-versies van de app, zolang je apparaat aan de hardwarevereisten voldoet.",
        question27: "27. Werkt de app offline?",
        answer27:
          "Sommige basisfunctionaliteiten, zoals toegang tot eerder gedownloade waarnemingsschema's of het ontvangen van geplande meldingen, kunnen offline werken. Functies die realtime gegevens vereisen, zoals tracking, vereisen echter een internetverbinding.",
        question28: "28. Zijn er speciale vereisten voor het gebruik van de app?",
        answer28:
          "De app vereist een actieve internetverbinding voor realtime tracking en waarschuwingen. Zorg er daarnaast voor dat de locatievoorzieningen van je apparaat zijn ingeschakeld voor de app voor locatie-specifieke informatie.",
        question29: "29. Is de app gratis te gebruiken?",
        answer29:
          "Ja, de Spot the Station-app is gratis te downloaden en te gebruiken, zonder in-app aankopen of abonnementen.",
        question30: "30. Wie kan ik contacteren voor app-ondersteuning?",
        answer30:
          "Voor ondersteuning met de Spot the Station-app, bezoek de ondersteuningspagina van NASA of neem contact op via de feedbackoptie binnen de app.",
      },
    },
    astronauts: {
      title: "Wie is er nu in het Station?",
      number: "Aantal mensen:",
    },
    live: {
      title: "Live Stream",
      description:
        "Momenteel wordt er een live video van de aarde gestreamd vanaf een externe HD-camera die op het ISS is gemonteerd. De camera kijkt naar de aarde met af en toe een zonnepaneel dat door het beeld beweegt.",
    },
    tour: {
      title: "Virtuele Tour",
    },
    videos: {
      title: "Station Video's",
    },
    gallery: {
      title: "Galerij",
    },
  },
}

export default nl
export type Translations = typeof nl
