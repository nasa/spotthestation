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
  },
  thanksModal: {
    body: "Bedankt dat u contact met ons heeft opgenomen. We hebben uw bericht ontvangen en zullen uw verzoek verwerken. We hopen een resolutie op te nemen in een toekomstige versie. Omdat deze applicatie geen gebruikersgegevens verzameld kunnen we op berichten helaas niet individueel reageren. beantwoorden. Houd er rekening mee dat sinds deze applicatie geen gebruikersgegevens verzamelt wij niet individueel op berichten kunnen reageren.",
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
      title: "Aanschouw nu het ISS!",
      subTitle: "Het ISS passeert nu boven u met",
    },
    before: {
      titleOne: "Zie het ISS over",
      titleTwo: "minuten!",
      subTitleOne: "Het ISS passeert u over",
      subTitleTwo: "minuten met",
    },
  },
  units: {
    minute: "min",
    kilometer: "km",
    kilogram: "kg",
    month: "maand",
    metersPerSecond: "M/S",
  },
  tabNavigator: {
    homeTab: "Thuis",
    issViewTab: "ISS Weergave",
    issNowTab: "ISS Nu",
    resourcesTab: "Bronnen",
    settingsTab: "Instellingen",
  },
  onboarding: {
    splash: {
      title: "Zoek het station",
      subTitle:
        "Kijk omhoog in de lucht en bekijk het Internationale Ruimtestation (International Space Station, ISS)",
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
      message: "ISS-gegevens worden geladen... Dit kan even duren.",
      trajectoryError:
        "De ISS-trajectgegevens zijn momenteel niet beschikbaar vanwege serveronderhoud. Kom later terug.",
    },
    header: {
      firstTimeHead: "Volgende waarneming",
      secondTimeHead: "Aftellen",
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
    },
    selectSightings: {
      title: "Eerstvolgende waarnemingen",
      sightings: "Waarnemingen",
      selectMessage: "Selecteer gebeurtenissen waarvan u op de hoogte gehouden wilt worden.",
      switch: "Houd mij op de hoogte van alle aankomende gebeurtenissen op deze locatie.",
      aboveHorizon: "Boven de horizon",
      today: "Vandaag",
      tomorrow: "Morgen",
      coach: {
        title: "Beschrijving van pictogrammen",
        moon: "Het zal nacht zijn op de geselecteerde locatie wanneer het ISS boven de horizon is.",
        sunset:
          "Er zal schemering zijn op de geselecteerde locatie wanneer het ISS boven de horizon is.",
        sun: "Er zal daglicht zijn op de geselecteerde locatie wanneer het ISS boven de horizon is.",
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
        'Deze sectie laat u de datum en een aftelklok zien voor de eerstvolgende ISS-waarneming in de buurt van uw geselecteerde locatie. U kunt op de knop "Volgende Waarneming" tikken om een complete lijst van de aankomende waarnemingen te zien.',
      globeTitle: "Interactieve aarde",
      globeData:
        "U kunt de realtime positie van het ISS bekijken door over het scherm te vegen. Dit stelt u in staat de aarde te beinvloeden en het spoor van het ISS in de werkelijke tijd te volgen.",
      mapTitle: "2D kaartweergave",
      mapData:
        "Deze sectie toont een 2D-weergave van het volledige pad van het ISS tegen de nacht- en dagregio's van de aarde.",
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
      title: "International Space Station - Details",
      distance: "Afstand",
      orbitalSpeed: "Orbitale snelheid",
      longitude: "Lengtegraad",
      latitude: "Breedtegraad",
      altitude: "Hoogte",
      crewOnboard: "Bemanning aan boord",
      launched: "Montage begon",
      launchedValue: "20 november 1998",
      mass: "Geschatte massa",
      dimensions: "Geschatte afmetingen",
      orbitalPeriod: "Omlooptijd",
      orbitsPerDay: "Banen/dag",
      orbitalDecay: "Orbitaal verval",
      dimensionsValue: "109m breed x 73m lang x 14m hoog",
    },
  },
  settings: {
    header: "Instellingen",
    locationSettings: "Locatie instellingen",
    notificationSettings: "Notificatie instellingen",
    termsAndConditions: "Voorwaarden",
    contactUs: "Neem contact met ons op",
    termsAndConditionsData: {
      backButton: "Instellingen",
      ios: {
        title: "GEBRUIKSOVEREENKOMST VOOR DE GELICENSEERDE APPLICATIE",
        intro1:
          "EINDGEBRUIKER wenst de volgende GELICENSEERDE APPLICATIE te gebruiken die is ontwikkeld door de regering van de Verenigde Staten, vertegenwoordigd door de National Aeronautics and Space Administration, gevestigd op 300 E Street SW, Washington, D.C. (hierna NASA genoemd):",
        appData: {
          line1: "GELICENSEERDE toepassing:",
          line2: "Versie:",
          line3: "NASA-technologienummer: MSC-27535-1 (hierna GELICENSEERDE TOEPASSING)",
        },
        contactData: {
          line1: "NASA contactpunt:",
          line2: "Jacob Keaton",
          line3: "NASA hoofdkwartier",
          line4: "300 E Street SW",
          line5: "E-mail: SpotTheStation@hq.nasa.gov",
        },
        intro2:
          "De autoriteit voor NASA om de GELICENSEERDE APPLICATIE vrij te geven is NASA Policy Directive (NPD) 2820.1C",
        intro3:
          "NU DAAROM, met inachtneming van het feit dat NASA de GELICENSEERDE APPLICATIE vrijgeeft aan EINDGEBRUIKER en EINDGEBRUIKER het niet-overdraagbare recht verleent om de GELICENSEERDE APPLICATIE te gebruiken zoals hierin gespecificeerd op elke iPhone of iPod touch die EINDGEBRUIKER bezit of beheert en zoals alleen toegestaan volgens de Gebruiksregels uiteengezet in de App Store Voorwaarden en Bepalingen voor niet-commerciële doeleinden, gaat de EINDGEBRUIKER akkoord met het volgende:",
        body: {
          line1:
            "1. NASA en EINDGEBRUIKER erkennen dat deze Overeenkomst uitsluitend is gesloten tussen NASA en EINDGEBRUIKER, en niet met Apple, dat deze Overeenkomst niet-overdraagbaar is en dat NASA, niet Apple, als enige verantwoordelijk is voor de GELICENSEERDE APPLICATIE en de inhoud daarvan.",
          line2:
            "2. NASA en EINDGEBRUIKER erkennen en gaan ermee akkoord dat Apple, en de dochterondernemingen van Apple, derde begunstigden zijn van deze Overeenkomst, en dat na aanvaarding van de voorwaarden van deze Overeenkomst door de EINDGEBRUIKER, Apple het recht heeft (en geacht zal worden het recht te hebben aanvaard) om deze Overeenkomst tegen EINDGEBRUIKER af te dwingen als derde begunstigde van deze Overeenkomst.",
          line3:
            "3. De GELICENSEERDE APPLICATIE blijft eigendom van NASA. EINDGEBRUIKER erkent dat het geen eigendomsbelang verwerft in de GELICENSEERDE APPLICATIE onder deze Overeenkomst. De GELICENSEERDE APPLICATIE bevindt zich niet in het publieke domein en niets in deze Overeenkomst zal worden opgevat als het zonder beperkingen beschikbaar stellen van de GELICENSEERDE APPLICATIE aan het publiek.",
          line4:
            "4. Er zal geen vrijgave, distributie of publicatie van de GELICENSEERDE APPLICATIE zijn door de EINDGEBRUIKER.",
          line5:
            "5. NASA is niet aansprakelijk of verantwoordelijk voor enig onderhoud of bijwerken van de verstrekte GELICENSEERDE APPLICATIE, noch voor het corrigeren van eventuele fouten in de GELICENSEERDE APPLICATIE. NASA en EINDGEBRUIKER erkennen dat Apple geen enkele verplichting heeft om enige onderhouds- en ondersteuningsdiensten te leveren met betrekking tot de GELICENSEERDE APPLICATIE.",
          line6:
            "6. EINDGEBRUIKER verklaart en garandeert dat (i) hij/zij zich niet bevindt in een land dat onderworpen is aan een embargo van de Amerikaanse regering, of dat door de Amerikaanse regering is aangewezen als een 'terrorisme steunend' land; en (ii) hij/zij niet vermeld staat op een Amerikaanse overheidslijst van verboden of beperkte partijen.",
          line7:
            "DE GELICENSEERDE APPLICATIE WORDT GELEVERD 'ZOALS DIE IS' ZONDER ENIGE GARANTIE VAN WELKE AARD DAN OOK, UITDRUKKELIJK, IMPLICIET OF WETTELIJK, INCLUSIEF, MAAR NIET BEPERKT TOT, ENIGE GARANTIE DAT DE GELICENSEERDE APPLICATIE VOLDOET AAN SPECIFICATIES, ALLE IMPLICIETE GARANTIES VAN VERKOOPBAARHEID, GESCHIKTHEID VOOR EEN BEPAALD DOEL EN VRIJHEID VAN INBREUK, OF ENIGE GARANTIE DAT DE GELICENSEERDE APPLICATIE FOUTVRIJ ZAL ZIJN. IN GEEN GEVAL ZAL NASA AANSPRAKELIJK ZIJN VOOR ENIGE SCHADE, INCLUSIEF, MAAR NIET BEPERKT TOT, DIRECTE, INDIRECTE, SPECIALE OF GEVOLGSCHADE, DIE VOORTVLOEIT UIT, RESULTAAT VAN, OF OP ENIGE MANIER VERBONDEN IS MET DE GELICENSEERDE APPLICATIE, OF HET NU GEBASEERD IS OP GARANTIE, CONTRACT, ONRECHTMATIGE DAAD OF ANDERSZINS, OF ER NU LETSELSCHADE IS GELEDEN DOOR PERSONEN OF EIGENDOMMEN OF ANDERSZINS, EN OF ER NU VERLIES IS GELEDEN VAN, OF VOORTGEVLOEID UIT HET GEBRUIK VAN DE GELICENSEERDE APPLICATIE. EINDGEBRUIKER GAAT ERMEE AKKOORD OM AF TE ZIEN VAN ALLE CLAIMS TEGEN DE REGERING VAN DE VERENIGDE STATEN, HAAR AANNEMERS EN HUN ONDERAANNEMERS, EN ZAL DE REGERING VAN DE VERENIGDE STATEN, HAAR AANNEMERS EN HUN ONDERAANNEMERS VRIJWAREN EN SCHADELOOS STELLEN VOOR ENIGE SCHADE DIE EINDGEBRUIKER MOGELIJK OPLOOPT DOOR HET GEBRUIK VAN DE GELICENSEERDE APPLICATIE, INCLUSIEF EVENTUELE SCHADE VAN PRODUCTEN DIE GEBASEERD ZIJN OP, OF VOORTVLOEIEN UIT, DE GELICENSEERDE APPLICATIE.",
          line8:
            "8. In het geval dat de GELICENSEERDE APPLICATIE niet voldoet aan enige garantie die wettelijk van toepassing is, kan de EINDGEBRUIKER Apple hiervan op de hoogte stellen en zal Apple de aankoopprijs (indien van toepassing) voor de GELICENSEERDE APPLICATIE aan de EINDGEBRUIKER terugbetalen. Voor zover maximaal toegestaan onder de toepasselijke wetgeving, zal Apple geen andere verliezen, aansprakelijkheden, schade, kosten of uitgaven hebben die toe te schrijven zijn aan enig falen van de GELICENSEERDE APPLICATIE om aan enige garantie te voldoen.",
          line9:
            "9. NASA en EINDGEBRUIKER erkennen dat, in het geval van een claim van een derde partij dat de GELICENSEERDE APPLICATIE of het bezit en gebruik van de GELICENSEERDE APPLICATIE door EINDGEBRUIKER inbreuk maakt op intellectuele eigendomsrechten, alleen NASA, en niet Apple, uitsluitend verantwoordelijk zal zijn voor het onderzoek, de verdediging, de schikking en de afhandeling van een dergelijke claim op inbreuk van intellectuele eigendom, onder voorbehoud van de wet.",
          line10:
            "10. NASA en EINDGEBRUIKER erkennen dat NASA, en niet Apple, verantwoordelijk is voor het afhandelen van claims van EINDGEBRUIKERS of derden met betrekking tot de GELICENSEERDE APPLICATIE of het bezit en/of gebruik van de GELICENSEERDE APPLICATIE door EINDGEBRUIKER, inclusief maar niet beperkt tot: (i) productaansprakelijkheidsclaims; (ii) enige claim dat de GELICENSEERDE APPLICATIE niet voldoet aan enige toepasselijke wettelijke of regelgevende eisen, inclusief eventuele garanties die door de wet van toepassing zijn gemaakt; en (iii) claims die voortvloeien uit consumentenbescherming of soortgelijke wetgeving.",
          line11:
            "11. Deze overeenkomst zal worden geïnterpreteerd en de juridische relaties tussen de partijen hierbij zullen worden bepaald in overeenstemming met de federale wetgeving van de Verenigde Staten voor alle doeleinden.",
          line12:
            "12. Deze overeenkomst vormt het volledige begrip en overeenkomst tussen NASA en EINDGEBRUIKER met betrekking tot de vrijgave van de GELICENSEERDE APPLICATIE en mag niet worden vervangen, gewijzigd of aangepast.",
          line13:
            "13. Door de GELICENSEERDE APPLICATIE onder deze Overeenkomst te accepteren en te gebruiken, stemt de EINDGEBRUIKER hierbij in met alle hierin vermelde voorwaarden.",
        },
      },
      android: {
        title: "OVEREENKOMST VOOR HET GEBRUIK VAN DE GELICENSEERDE APPLICATIE",
        intro1:
          "EINDGEBRUIKER wenst het volgende PRODUCT te gebruiken dat is ontwikkeld door de regering van de Verenigde Staten, vertegenwoordigd door de National Aeronautics and Space Administration, Ames Research Center, gevestigd in Moffett Field, CA 94035 (hierna NASA):",
        appData: {
          line1: "Software:",
          line2: "Versie:",
          line3: "NASA-technologienummer: MSC-27535-1",
        },
        intro2:
          "De bevoegdheid voor NASA om de GELICENSEERDE APPLICATIE vrij te geven, is NASA Policy Directive (NPD) 2820.1C.",
        intro3:
          "DAAROM, in overweging van NASA die de GELICENSEERDE APPLICATIE vrijgeeft aan EINDGEBRUIKER en EINDGEBRUIKER het niet-overdraagbare recht verleent om de GELICENSEERDE APPLICATIE te gebruiken voor persoonlijk, niet-commercieel gebruik en zoals hierin gespecificeerd en zoals toegestaan door de Android Market Servicevoorwaarden op elk Android-aangedreven mobiel apparaat (“Apparaat”) dat EINDGEBRUIKER bezit of beheert, stemt EINDGEBRUIKER als volgt in:",
        body: {
          line1:
            "1. De GELICENSEERDE APPLICATIE blijft eigendom van NASA. EINDGEBRUIKER erkent dat het geen eigendomsbelang verwerft in de GELICENSEERDE APPLICATIE onder deze Overeenkomst. De GELICENSEERDE APPLICATIE is niet in het publieke domein en niets in deze Overeenkomst zal worden opgevat als het zonder beperking beschikbaar stellen van de GELICENSEERDE APPLICATIE aan het algemeen.",
          line2:
            "2. Er zal geen vrijgave, distributie of publicatie van de GELICENSEERDE APPLICATIE door de EINDGEBRUIKER zijn.",
          line3:
            "3. NASA is noch aansprakelijk noch verantwoordelijk voor enig onderhoud of bijwerking van de verstrekte GELICENSEERDE APPLICATIE, noch voor correctie van eventuele fouten in de GELICENSEERDE APPLICATIE.",
          line4:
            "4. EINDGEBRUIKER verklaart en garandeert dat (i) hij/zij niet is gevestigd in een land dat onderworpen is aan een embargo van de Amerikaanse overheid, of dat door de Amerikaanse overheid is aangewezen als een “terrorisme steunend” land; en (ii) hij/zij niet op een Amerikaanse overheidslijst van verboden of beperkte partijen staat.",
          line5:
            "5. DE GELICENSEERDE APPLICATIE WORDT GELEVERD “ZOALS DEZE IS” ZONDER ENIGE GARANTIE VAN WELKE AARD DAN OOK, HETZIJ UITDRUKKELIJK, IMPLICIET OF WETTELIJK, MET INBEGRIP VAN, MAAR NIET BEPERKT TOT, ENIGE GARANTIE DAT DE GELICENSEERDE APPLICATIE ZAL VOLDOEN AAN SPECIFICATIES, EVENTUELE IMPLICIETE GARANTIES VAN VERKOOPBAARHEID, GESCHIKTHEID VOOR EEN BEPAALD DOEL EN VRIJHEID VAN INBREUK, OF ENIGE GARANTIE DAT DE GELICENSEERDE APPLICATIE FOUTVRIJ ZAL ZIJN. IN GEEN GEVAL ZAL NASA AANSPRAKELIJK ZIJN VOOR ENIGE SCHADE, INCLUSIEF, MAAR NIET BEPERKT TOT, DIRECTE, INDIRECTE, SPECIALE OF GEVOLGSCHADE, DIE VOORTVLOEIT UIT, RESULTEERT UIT, OF OP ENIGE WIJZE VERBONDEN IS MET DE GELICENSEERDE APPLICATIE, AL DAN NIET GEBASEERD OP GARANTIE, CONTRACT, ONRECHTMATIGE DAAD OF ANDERSZINS, OF ER NU LETSEL IS TOEGEBRACHT AAN PERSONEN OF EIGENDOMMEN OF ANDERSZINS, EN OF ER NU VERLIES IS GELEDEN VAN, OF ONTSTAAN UIT, HET GEBRUIK VAN DE GELICENSEERDE APPLICATIE. EINDGEBRUIKER STEMT ERMEE IN OM ALLE CLAIMS TEGEN DE AMERIKAANSE REGERING, HAAR AANNEMERS EN HUN ONDERAANNEMERS, TE ZIEN AF EN ZAL DE AMERIKAANSE REGERING, HAAR AANNEMERS EN HUN ONDERAANNEMERS VRIJWAREN EN SCHADELOOS STELLEN VOOR ENIGE SCHADE DIE EINDGEBRUIKER MAG OPLOPEN DOOR HET GEBRUIK VAN DE GELICENSEERDE APPLICATIE, INCLUSIEF EVENTUELE SCHADE VAN GELICENSEERDE APPLICATIES OP BASIS VAN, OF RESULTEREND UIT, DE GELICENSEERDE APPLICATIE.",
          line6:
            "6. Deze overeenkomst zal worden opgevat, en de juridische betrekkingen tussen de partijen zullen hierbij worden bepaald in overeenstemming met de federale wetgeving van de Verenigde Staten voor alle doeleinden.",
          line7:
            "7. Deze Overeenkomst vormt het volledige begrip en de volledige overeenkomst tussen NASA en EINDGEBRUIKER met betrekking tot de vrijgave van de GELICENSEERDE APPLICATIE en kan niet worden vervangen, gewijzigd of aangepast.",
          line8:
            "8. Door de GELICENSEERDE APPLICATIE te accepteren en te gebruiken onder deze Overeenkomst, stemt EINDGEBRUIKER hierbij in met alle hierin opgenomen voorwaarden en bepalingen.",
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
  },
  resources: {
    header: "Bronnen",
    searchPlaceholder: "Zoek naar artikelen, gebeurtenissen, etc...",
    suggestions: "SUGGESTIES",
    searchResults: "Zoekresultaten",
    tabs: {
      news: "Nieuws",
      about: "Over ons",
      details: "Details",
    },
  },
}

export default nl
export type Translations = typeof nl
