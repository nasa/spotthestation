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
      title: "Zoek het station",
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
