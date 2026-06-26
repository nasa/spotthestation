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
    bodyGallery:
      "Om deze functie te kunnen gebruiken zult u toegang aan de galerij moeten verlenen.",
    bodyCalendar:
      "Om deze functie te gebruiken, moet je toestemming geven om toegang te krijgen tot de agenda.",
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
    body: "Bedankt dat u contact met ons opneemt. We hebben uw bericht ontvangen en zullen uw verzoek verwerken. Houd er rekening mee dat deze applicatie geen gebruikersgegevens verzamelt, dus we kunnen niet op alle berichten afzonderlijk reageren. Bezoek de pagina met Veelgestelde Vragen om te zien of er een antwoord op uw vraag is.",
    dismiss: "Sluiten",
    faq: "Veelgestelde Vragen",
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
      subTitleIos: "Het station passeert nu boven u met",
      subTitleAndroid: "Het station passeert nu boven u ({{time}}) met",
    },
    before: {
      title: "Spot het station over {{amount}} {{units}}!",
      subTitleIos: "Het station komt over je heen in {{amount}} {{units}} bij {{location}}",
      subTitleAndroid:
        "Het station komt over je heen in {{amount}} {{units}} ({{time}}) bij {{location}}",
      minutes: "minuten",
      hours: "uren",
    },
    timeLeft: "TIJD OVER",
  },
  units: {
    minute: "min",
    kilometer: "km",
    kilogram: "kg",
    month: "maand",
    metersPerSecond: "M/S",
    time: "T",
    hour: "uur",
    mile: "mi",
    foot: "ft",
    meter: "m",
    pound: "lbs",
    milesPerHour: "mph",
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
      firstTimeHead: "VOLGENDE WAARNEMING",
      secondTimeHead: "Aftellen",
      timezone: "Tijdzone",
      opportunities: "Waarnemingen",
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
      upcomingSightings: "Eerstvolgende waarnemingen",
      pastSightings: "Eerdere Waarnemingen",
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
      between2And4: "tussen 2 en 4 minuten",
      longerThan4: "4 minuten en langer",
      empty:
        "Er zijn geen potentiële Station-waarnemingen voor deze locatie van {{start}} tot en met {{end}}.",
      shareTitle: "Het station vliegt boven {{location}} op {{date}}",
      shareAllTitle: "Het station komt over {{location}} heen:",
      shareLink:
        "Om meer te verkennen en het station via augmented reality te volgen, download de app op",
      calendarEventTitle: "Spot het station in {{location}}!",
      calendarSuccess: "Kalendergebeurtenis succesvol aangemaakt",
      calendarError: "Kan kalendergebeurtenis niet maken",
      coach: {
        title: "Beschrijving van pictogrammen",
        moon: "Het zal nacht zijn op de geselecteerde locatie wanneer het Station boven de horizon is.",
        sunset:
          "Er zal schemering zijn op de geselecteerde locatie wanneer het Station boven de horizon is.",
      },
      cloudCover: {
        title: "Wolkenbedekking",
        any: "Elke",
        low: "Laag (<25%)",
        medium: "Middel (25-50%)",
      },
      shareAll: "Waarnemingenlijst delen",
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
        'Deze sectie laat u de datum/tijd en een afteller zien voor de eerstvolgende Station-waarneming in de buurt van uw geselecteerde locatie. U kunt op de knop "Waarnemingen" tikken om een complete lijst van de recente en aankomende waarnemingen te zien.',
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
      dimensionsValue: "{{width}} breed x {{length}} lang x {{height}} hoog",
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
    timeFormat: "Tijdnotatie",
    unitsOfMeasurement: "Eenheden",
    metric: "Metrisch",
    imperial: "Imperiaal (VS)",
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
      reportIssueHint:
        "Voeg een beschrijving van het probleem toe, samen met de geselecteerde locatie en de datum en tijd van de waarnemingsmogelijkheid van het station, zodat ons supportteam het gemelde probleem beter kan reproduceren en diagnosticeren.",
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
    sightings: {
      title: "Eerstvolgende waarnemingen",
    },
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
      searchPlaceholder: "Zoek vragen...",
      questions: {
        question1: "1. Waarom is het Internationaal Ruimtestation daarboven?",
        answer1:
          "Het Internationaal Ruimtestation is een samensmelting van wetenschap, technologie en menselijke innovatie die onderzoek mogelijk maakt dat op aarde niet mogelijk is, ten behoeve van de mensheid. Al meer dan 24 jaar ondersteunt NASA een continue Amerikaanse menselijke aanwezigheid aan boord van het station, waardoor astronauten hebben geleerd om voor langere tijd in de ruimte te leven en te werken.<br/>" +
          "Het ruimtestation – waarbij de Verenigde Staten, Rusland, Canada, Japan en de deelnemende landen van de ESA (Europese Ruimtevaartorganisatie) betrokken zijn – is een van de meest complexe, onderling afhankelijke internationale samenwerkingen die ooit zijn geprobeerd. Het brengt internationale bemanningen en meerdere ruimtevaartaanbieders samen, evenals wereldwijd verspreide ondersteuningsteams, faciliteiten, communicatienetwerken en de wereldwijde wetenschappelijke gemeenschap.<br/>" +
          "In de afgelopen 24 jaar is het ruimtestation getransformeerd in een laboratorium in een baan om de aarde met onderzoeksfaciliteiten die wetenschappers uit meer dan 109 landen in staat stellen om meer dan 4.000 baanbrekende experimenten uit te voeren in een extreme en unieke ruimtevluchtomgeving.<br/>" +
          "Het ruimtestation dient als springplank voor de ontwikkeling van een lage-aarde-economie en de volgende grote sprongen van NASA in verkenning, inclusief missies naar de maan onder Artemis en uiteindelijk de menselijke verkenning van Mars.<br/>" +
          "Meer informatie over het Internationaal Ruimtestation, het onderzoek en de bemanning vindt u op:<br/>" +
          "<a href='https://www.nasa.gov/station'>https://www.nasa.gov/station</a>",

        question2: "2. Hoe snel reist het Internationaal Ruimtestation?",
        answer2:
          "Het Internationaal Ruimtestation draait elke 90 minuten om de aarde. Het reist met ongeveer 28.000 kilometer per uur, waardoor de bemanning aan boord elke dag 16 zonsopgangen en zonsondergangen kan zien. Sinds november 2000 is het ruimtestation continu bemand. In die tijd hebben 280 mensen uit 23 landen het orbitale voorpost bezocht, en het station heeft de aarde honderdduizenden keren omcirkeld.",

        question3: "3. Hoe vaak kan ik verwachten het Internationaal Ruimtestation te zien?",
        answer3:
          "Het Internationaal Ruimtestation is zichtbaar omdat het zonlicht reflecteert – om dezelfde reden dat we de maan kunnen zien. Echter, in tegenstelling tot de maan, is het ruimtestation niet helder genoeg om overdag te zien. Kijkmogelijkheden kunnen variëren van één keer per maand tot meerdere keren per week, omdat het zonlicht op het station weerkaatst wanneer het bij zonsopgang en zonsondergang boven uw locatie passeert.<br/>" +
          "De mobiele app berekent en toont aankomende waarnemingen voor de komende 14 dagen. Sinds mei 2026 heeft de Spot the Station-website van NASA de functie teruggebracht om waarnemingsmogelijkheden van het station rechtstreeks vanuit uw browser te vinden, zonder app: <a href='https://www.nasa.gov/spot-the-station/'>https://www.nasa.gov/spot-the-station/</a> Kies uw land en regio/stad om de aankomende waarnemingsmogelijkheden voor de komende 14 dagen te bekijken.",

        question4: "4. Wat is de Spot the Station-app?",
        answer4:
          "De Spot the Station mobiele app is een officiële NASA-app die gebruikers helpt om de zichtbaarheid van het Internationaal Ruimtestation te volgen en meldingen te ontvangen wanneer het over hun respectieve locatie passeert. Het biedt ook realtime tracking, overvliegschema's en waarschuwingen.",

        question5: "5. Hoe download ik de Spot the Station mobiele app?",
        answer5:
          "De Spot the Station mobiele app is beschikbaar op iOS- en Android-mobiele en tabletapparaten.",

        question6:
          "6. Hoe waarschuwt de Spot the Station-app mij voor aankomende zichtmogelijkheden van het Internationaal Ruimtestation?",
        answer6:
          "De Spot the Station-app stuurt pushmeldingen om gebruikers te waarschuwen voor aankomende passages van het Internationaal Ruimtestation. Gebruikers moeten ervoor zorgen dat de meldingsrechten van de app zijn ingeschakeld in de instellingen van hun apparaat. Houd er rekening mee dat de app waarnemingen voor uw geselecteerde locatie berekent voor de komende 14 dagen, dus u ontvangt mogelijk geen meldingen meer als u de app een tijdje niet gebruikt.",

        question7: "7. Kan ik meldingen in de Spot the Station-app aanpassen?",
        answer7:
          "De Spot the Station-app heeft de mogelijkheid om gepersonaliseerde meldingsinstellingen te configureren om specifieke pushmeldingen te ontvangen voor de voorkeurslocatie en -tijd van een gebruiker. De meldingsinstellingen zijn te vinden op de instellingenpagina van de app, waar gebruikers de meldingen voor alle aankomende evenementen kunnen inschakelen of meldingen voor de momenteel geselecteerde locatie kunnen aanpassen. Gebruikers kunnen meldingen voor andere locaties aanpassen via de locatie-instellingen. U kunt de Waarnemingen-pagina bezoeken vanaf de startpagina om meldingen voor elke aankomende waarnemingsmogelijkheid voor uw geselecteerde locatie in/uit te schakelen.",

        question8: "8. Wat moet ik doen als ik geen meldingen ontvang?",
        answer8:
          "Gebruikers moeten de meldingsvoorkeuren in de Spot the Station-app controleren (meldingsinstellingen op de instellingenpagina) om te bevestigen dat het apparaat is ingesteld voor meldingen op een voorkeurslocatie en -tijd. Als gebruikers nog steeds geen meldingen ontvangen, moeten ze ervoor zorgen dat meldingen zijn ingeschakeld in de instellingen van hun apparaat. Houd er rekening mee dat de app elke keer dat u deze opent waarnemingen voor uw geselecteerde locatie berekent voor de komende 14 dagen, dus u ontvangt mogelijk geen meldingen meer als u niet regelmatig terugkomt.",

        question9: "9. Werkt de Spot the Station-app internationaal?",
        answer9:
          "De Spot the Station-app is wereldwijd beschikbaar en in meerdere talen, waaronder Engels, Nederlands, Frans, Duits, Hindi, Italiaans, Japans, Pools, Portugees (Brazilië), Russisch, Spaans, Turks en Oekraïens. De app biedt kijkinformatie voor de meeste bewoonde locaties, waardoor het gemakkelijk is om het Internationaal Ruimtestation te zien wanneer het bijna overal boven passeert.",

        question10: "10. Waarom zijn er geen kijkmogelijkheden voor mijn locatie?",
        answer10:
          "Het moet donker zijn met goede zichtbaarheid op uw locatie en het ruimtestation moet boven u zijn om het te kunnen zien. Aangezien de baan van het ruimtestation het over de hele wereld brengt, kan het boven u passeren op momenten dat het niet zichtbaar is – ofwel midden op de dag of midden in de nacht wanneer het door de schaduw van de aarde wordt verduisterd. Spot The Station stuurt alleen meldingen wanneer er mogelijkheden zijn om het Internationaal Ruimtestation op uw locatie te zien, niet elke keer dat het boven u is. Waarnemingen worden tot 14 dagen van tevoren berekend, dus kom regelmatig terug voor nieuw voorspelde mogelijkheden.",

        question11: "11. Heb ik een telescoop nodig om het Internationaal Ruimtestation te zien?",
        answer11:
          "Nee, gebruikers kunnen het Internationaal Ruimtestation met het blote oog zien, er is geen extra apparatuur nodig.",

        question12:
          "12. Verschijnt en verdwijnt het Internationaal Ruimtestation door het licht van de maan?",
        answer12:
          "Het Internationaal Ruimtestation is zichtbaar omdat het zonlicht reflecteert, net als de maan. Terwijl het station rond de aarde reist, gaat het de schaduw van de aarde in en uit. Wanneer het in de schaduw van de aarde komt, is het niet zichtbaar, ook al draait het mogelijk nog steeds boven u.",

        question13: "13. Welke tijdzone wordt gebruikt voor meldingswaarschuwingen?",
        answer13:
          "Alle inhoud binnen de Spot the Station-app wordt vermeld in de lokale tijdzone voor de door de gebruiker geselecteerde locatie. De app past zich automatisch aan voor zomertijd.",

        question14: "14. Welke informatie biedt de Spot the Station-app voor elke waarneming?",
        answer14:
          "Voor elke waarneming toont de Spot the Station-app de tijd, de duur van de zichtbaarheid boven de horizon, de maximale hoogte boven de horizon, de richtingen waar het Internationaal Ruimtestation zal verschijnen en verdwijnen, en de voorspelde bewolking voor de geselecteerde locatie op het tijdstip van de waarneming, waardoor gebruikers het nauwkeurig in de lucht kunnen lokaliseren.",

        question15:
          "15. Hoe kan ik het Internationaal Ruimtestation spotten tijdens een kijkmogelijkheid? Wat betekent al deze informatie?",
        answer15:
          'De Spot the Station-app biedt een lijst van "Aankomende waarnemingen" als gebruikers op de "Volgende waarneming(en) lijst" op de startpagina tikken.<br/>' +
          "<strong>Datum en tijd</strong> is wanneer de kijkmogelijkheid begint in de lokale tijdzone. Alle passages zullen plaatsvinden binnen een paar uur voor of na zonsopgang of zonsondergang. Dit is de optimale kijkperiode omdat de zon weerkaatst op het Internationaal Ruimtestation en contrasteert tegen de donkere lucht.<br/>" +
          "<strong>Boven de horizon</strong> is de maximale tijdsperiode dat het station zichtbaar is voordat het weer onder de horizon verdwijnt.<br/>" +
          "<strong>Maximale hoogte</strong> wordt gemeten in graden (ook bekend als elevatie). Het vertegenwoordigt de hoogte van het station vanaf de horizon in de nachtelijke hemel. De horizon is op nul graden, en direct boven is 90 graden. Als gebruikers hun vuist op armlengte houden en deze op de horizon plaatsen, zal de bovenkant ongeveer 10 graden elevatie zijn.<br/>" +
          "<strong>Verschijnt</strong> is de locatie in de lucht waar het station eerst zichtbaar zal zijn. Deze waarde, net als de maximale hoogte, wordt ook gemeten in graden vanaf de horizon. De letters vertegenwoordigen kompasrichtingen – N is noord, WNW is west-noordwest, enzovoort.<br/>" +
          "<strong>Verdwijnt</strong> vertegenwoordigt waar in de nachtelijke hemel het station het gezichtsveld zal verlaten." +
          "<img src='https://sts-app-resources.s3.us-east-1.amazonaws.com/astro_horizon.png' />",

        question16:
          "16. Het overvliegschema geeft aan dat het Internationaal Ruimtestation zowel verschijnt als verdwijnt vanuit dezelfde richting, hoe is dat mogelijk?",
        answer16:
          "De Spot the Station-software rondt richtingen af naar de dichtstbijzijnde kardinale en interkardinale richtingen. Dit kan ertoe leiden dat het lijkt alsof het Internationaal Ruimtestation in dezelfde richting verschijnt en verdwijnt, hoewel het over de lucht reist. Dit gebeurt meestal bij overvliegingen met een kort zichtvenster omdat het station snel in (of uit) de donkere schaduw van de aarde beweegt, waar vanaf de locatie van de gebruiker op de grond een volledige passage over de lucht niet kan worden waargenomen.",

        question17:
          "17. Kan ik een live kaart van de locatie van het Internationaal Ruimtestation bekijken?",
        answer17:
          "Ja, de Spot the Station-app bevat een realtime kaart die de huidige positie van het Internationaal Ruimtestation toont terwijl het om de aarde draait, waardoor gebruikers een visuele referentie krijgen om de voortgang te volgen. Bezoek de Tracker-pagina om de baan van het station in 2D-, 3D- of satellietweergave te bekijken.",

        question18: "18. Wat is de augmented reality-functie in de Spot the Station-app?",
        answer18:
          "De augmented reality-functie in de Spot the Station-app stelt gebruikers in staat om een virtuele overlay van het pad van het Internationaal Ruimtestation in de lucht over de cameraweergave van de telefoon te bekijken. Deze functie helpt gebruikers om het station nauwkeuriger te lokaliseren door hun apparaat uit te lijnen met de realtime positie van het station.",

        question19:
          "19. Hoe krijg ik toegang tot de augmented reality-functie in de Spot the Station-app?",
        answer19:
          'Om toegang te krijgen tot de augmented reality-functie, opent u de Spot the Station-app en navigeert u naar de optie "AR-weergave" in het onderste menu. Volg de aanwijzingen op het scherm om de camera van het apparaat uit te lijnen met de lucht, waar de app een virtuele overlay zal weergeven die de positie en het traject van het Internationaal Ruimtestation aangeeft.',

        question20:
          "20. Heb ik een specifiek apparaat of software nodig om de augmented reality-functie te gebruiken?",
        answer20:
          "De augmented reality-functie van Spot the Station vereist een apparaat dat zijn oriëntatie in 3D-ruimte kan bepalen. Het vereist specifieke hardware-ondersteuning, zoals een gyroscoop of bewegingscoprocessor. Oudere of budgetapparaten ondersteunen deze functionaliteit mogelijk niet vanwege beperkingen van hun magnetometersensor. De nauwkeurigheid kan verbeteren door de Kompaskalibratie-handleiding in het menu Instellingen van de app te volgen.",

        question21: "21. Hoe werkt de augmented reality-functie?",
        answer21:
          "Met behulp van de camera en sensoren van het apparaat legt de augmented reality-functie van Spot the Station de locatie van het Internationaal Ruimtestation in de lucht over op het scherm, waarbij deze in realtime wordt aangepast terwijl de gebruiker het apparaat beweegt. De app begeleidt gebruikers om de camera van het apparaat in de juiste richting te richten en toont waar het station zal verschijnen en verdwijnen. Volg de Tutorial voor de AR-weergave vanuit het menu Instellingen van de app.",

        question22:
          "22. Kan ik de augmented reality-functie zowel overdag als 's nachts gebruiken?",
        answer22:
          "Ja, de augmented reality-functie binnen de Spot the Station-app is zowel overdag als 's nachts beschikbaar; echter, de beste kijkervaring is meestal tijdens de schemering of 's nachts wanneer het Internationaal Ruimtestation met het blote oog zichtbaar is. De augmented reality-overlay werkt ongeacht de lichtomstandigheden, maar daadwerkelijke kijkmogelijkheden zijn afhankelijk van de zichtbaarheid.",

        question23: "23. Is de augmented reality-overlay nauwkeurig voor alle locaties?",
        answer23:
          "Ja, de augmented reality-functie binnen de Spot the Station-app is ontworpen om nauwkeurige positie-informatie te bieden op basis van de GPS-locatie van het apparaat. De nauwkeurigheid kan echter enigszins variëren, afhankelijk van de kalibratie van het kompas en de sensoren van het apparaat. Als gebruikers discrepanties opmerken, kalibreer dan het kompas van het apparaat opnieuw door de Kompaskalibratie-handleiding in het menu Instellingen van de app te volgen. Oudere of budgetapparaten ondersteunen deze functionaliteit mogelijk niet vanwege beperkingen van hun magnetometersensor.",

        question24: "24. Kan de augmented reality-functie helpen met exacte waarnemingstijden?",
        answer24:
          "De augmented reality-functie binnen de Spot the Station-app begeleidt gebruikers visueel om het Internationaal Ruimtestation te lokaliseren op het exacte moment dat het in de lucht verschijnt. In combinatie met de meldingen van de app verbetert het de mogelijkheid om het station te zien door een live, visuele richting en hoogte-indicator te bieden om het nauwkeurig te volgen.",

        question25: "25. Zijn er tips om mijn augmented reality-ervaring te optimaliseren?",
        answer25:
          "Voor de beste augmented reality-ervaring in de Spot the Station-app, gebruik de functie in een open gebied met een vrij uitzicht op de lucht. Vermijd obstakels zoals hoge gebouwen of bomen, omdat deze de zichtbaarheid kunnen blokkeren. Kalibreer het kompas van het apparaat (volg de Kompaskalibratie-handleiding in het menu Instellingen) en zorg ervoor dat locatievoorzieningen en cameramachtigingen zijn ingeschakeld voor een soepele werking.",

        question26:
          "26. Is de augmented reality-functie beschikbaar op zowel iOS- als Android-apparaten?",
        answer26:
          "Ja, de augmented reality-functie van de Spot the Station-app is beschikbaar op zowel iOS- als Android-mobiele en tabletapparaten, zolang uw apparaat aan de hardwarevereisten voldoet. Oudere of budgetapparaten ondersteunen deze functionaliteit mogelijk niet vanwege beperkingen van hun magnetometersensor.",

        question27: "27. Werkt de Spot the Station-app offline?",
        answer27:
          "Sommige basisfunctionaliteiten, zoals toegang tot eerder gedownloade kijkmogelijkhedenschema's of het ontvangen van geplande meldingen, kunnen offline werken. Functies die realtime gegevens vereisen, zoals tracking, vereisen echter een mobiele service of een internetverbinding.",

        question28: "28. Zijn er speciale vereisten voor het gebruik van de Spot the Station-app?",
        answer28:
          "De Spot the Station-app vereist een actieve mobiele service of een internetverbinding voor realtime tracking en meldingen. Zorg er daarnaast voor dat de locatievoorzieningen van het apparaat zijn ingeschakeld voor de app voor locatie-specifieke informatie.",

        question29: "29. Is de Spot the Station-app gratis te gebruiken?",
        answer29:
          "Ja, de Spot the Station-app is gratis te downloaden en te gebruiken, zonder in-app aankopen of abonnementen.",

        question30: "30. Wie kan ik contacteren voor ondersteuning van de Spot the Station-app?",
        answer30:
          "Voor ondersteuning met de Spot the Station-app kunt u contact opnemen via de optie Contact opnemen in het menu Instellingen van de app of <a href='mailto:hq-spotthestation@mail.nasa.gov'>een e-mail sturen naar het Spot the Station-team</a>.",
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
    earthScience: { title: "Aardwetenschappelijke Gegevensbronnen" },
  },
}

export default nl
export type Translations = typeof nl
