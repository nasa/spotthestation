const it = {
  name: "Italiano",
  errorScreen: {
    title: "Qualcosa è andato storto!",
    friendlySubtitle:
      "Questo è lo schermo che i tuoi utenti vedranno in produzione quando viene generato un errore. Ti consigliamo di personalizzare questo messaggio (situato in `app/i18n/en.ts`) e probabilmente anche il layout (`app/schermate/ErrorScreen`). Se si desidera rimuoverlo del tutto, controlla `app/app.tsx` per il componente <ErrorBoundary>.",
    reset: "Ripristina l'app",
  },
  snackBar: {
    ok: "OK",
    dismiss: "Ignora",
    sightingsSaved: "Avvistamenti per l'ultima posizione salvata caricati!",
    defaultError: "Si sono verificati alcuni errori",
    locationSaved: "Posizione salvata",
    locationExist: "La posizione con questo titolo esiste già!",
    openSettingsError: "Impossibile aprire le impostazioni!",
    shared: "Condiviso con successo!",
    savedToGallery: "Salvato nella galleria",
  },
  outdatedModal: {
    title: "Aggiornamento disponibile",
    body: "Nuova versione dell'app disponibile! Scarica la nuova versione su",
    buttonNegative: "Annulla",
    buttonPositive: "Scarica",
  },
  permissionsModal: {
    close: "Chiudi",
    openSettings: "Apri le impostazioni",
    body: "Per utilizzare questa funzione, è necessario concedere l'autorizzazione per accedere alla galleria.",
  },
  fontSizeModal: {
    title: "Dimensione del carattere troppo grande",
    body1:
      "Sembra che la dimensione del carattere del tuo dispositivo sia impostata troppo alta. Questo potrebbe causare il taglio o la visualizzazione errata di alcune informazioni essenziali nell'app.",
    bodyAndroid:
      "Per regolare la dimensione del carattere, vai su Impostazioni → Display → Dimensione e stile del carattere → Regola il cursore su una dimensione più piccola.",
    bodyIOS:
      "Per regolare la dimensione del carattere, vai su Impostazioni → Accessibilità → Display e dimensione del testo → Testo più grande → Regola il cursore su una dimensione più piccola.",
    cancel: "Annulla",
    settings: "Vai alle Impostazioni",
  },
  permissionsAndroid: {
    title: "Autorizzazione per salvare i video",
    message: "Questa app richiede l'autorizzazione per salvare i video sul tuo dispositivo.",
    buttonNeutral: "Chiedimelo più tardi",
    buttonNegative: "Annulla",
    buttonPositive: "OK",
    alarmPermissionTitle: "Autorizzazione richiesta",
    alarmPermissionMessage:
      "Si prega di concedere l'autorizzazione agli allarmi e ai promemoria nella prossima schermata per ricevere notifiche sugli avvistamenti imminenti.",
  },
  thanksModal: {
    body: "Grazie per averci contattato. Abbiamo ricevuto il tuo messaggio ed elaboreremo la tua richiesta. Si prega di notare che questa applicazione non raccoglie i dati dell'utente, quindi non possiamo rispondere a tutti i messaggi individualmente.",
    dismiss: "Ignora",
  },
  privacy: {
    title: "Usa la tua posizione",
    body: "Usiamo i dati sulla posizione per calcolare gli avvistamenti imminenti nella tua posizione attuale. Si prega di concedere l'autorizzazione ad accedere la tua posizione per abilitare questa funzionalità.",
    agree: "Accetta",
    skip: "Salta",
    policy: "Politica sulla Riservatezza",
  },
  notifications: {
    push: {
      title: "Individua la Stazione ora!",
      subTitle: "La Stazione sta passando sopra di te alle",
    },
    before: {
      titleOne: "Individua la Stazione",
      titleTwo: "minuti!",
      subTitleOne: "La Stazione sta passando sopra di te tra",
      subTitleTwo: "minuti alle",
    },
  },
  units: {
    minute: "min",
    kilometer: "km",
    kilogram: "kg",
    month: "mese",
    metersPerSecond: "m/s",
    time: "T",
  },
  tabNavigator: {
    homeTab: "Home",
    issViewTab: "Vista AR",
    issNowTab: "Tracker",
    resourcesTab: "Risorse",
    settingsTab: "Impostazioni",
  },
  onboarding: {
    splash: {
      title: "Individua la\nstazione",
      subTitle: "Guarda il cielo e visualizza la Stazione Spaziale Internazionale",
    },
    completeProfile: {
      notification: {
        title: "Impostazioni di notifica",
        label: "Ricevi Avvisi di Notifica Push",
        tip: "Ricevi avvisi quando la stazione spaziale si avvicina alla tua posizione.",
        nextButton: "Avanti",
      },
      location: {
        title: "La tua posizione",
        subtitle:
          "Si prega di consentire all'app di rilevare automaticamente la tua posizione o di fornire la tua posizione manualmente.",
        detectButton: "Rileva la mia posizione",
        orLabel: "o",
        selectLocation: "Inserisci la tua posizione",
        detecting: "Rilevamento della posizione ...",
        doneButton: "Fatto",
        serviceAlertTitle: "Servizi di posizione disabilitati",
        serviceAlertBody: "Si prega di consentire ai servizi di localizzazione di continuare.",
        permissionAlertTitle: "Autorizzazione non concessa",
        permissionAlertBody:
          "Usiamo i dati sulla posizione per calcolare gli avvistamenti imminenti nella tua posizione attuale. Si prega di concedere l'autorizzazione ad accedere alla tua posizione per abilitare questa funzionalità.",
      },
    },
  },
  homeScreen: {
    initLoader: {
      message:
        "I dati della Stazione stanno caricando ... Questo potrebbe richiedere un momento per essere completato.",
      trajectoryError:
        "I dati della traiettoria della Stazione non sono attualmente disponibili a causa della manutenzione del server. Si prega di riprovare più tardi.",
      noNetwork:
        "I dati della traiettoria della Stazione non sono attualmente disponibili a causa della mancanza di connessione. Si prega di riprovare più tardi.",
    },
    header: {
      firstTimeHead: "ELENCO DEI PROSSIMI AVVISTAMENTI",
      secondTimeHead: "Conto alla rovescia",
      timezone: "Fuso orario",
    },
    selectLocation: {
      title: "Seleziona posizione",
      inputPlaceholder: "Cerca la posizione specificando la città, ...",
      current: "Posizione attuale",
      saved: "Posizioni salvate",
      nearby: "Posizioni vicine",
      search: "Risultati di ricerca",
      cta: "Personalizza le notifiche per questa posizione",
      actionTitle: "Allerta",
      refresh: "Ricaricare",
    },
    selectSightings: {
      title: "Prossimi Avvistamenti",
      sightings: "Avvistamenti",
      selectMessage: "Avvisami per tutti i prossimi avvistamenti in questa posizione.",
      switch: "Avvisami per tutti gli eventi imminenti in questa posizione.",
      aboveHorizon: "Sopra l'orizzonte",
      maxHeight: "Altezza massima di",
      today: "Oggi",
      tomorrow: "Domani",
      appears: "Appare",
      disappears: "Scompare",
      all: "Tutto",
      timeOfDay: "Ora del giorno",
      night: "Notte",
      twilight: "Twilight",
      duration: "Crepuscolo",
      shorterThan2: "inferiore a 2 minuti",
      longerThan2: "2 minuti e più",
      empty:
        "Non ci sono potenziali avvistamenti della Stazione per questa località dal {{start}} al {{end}}.",
      shareTitle: "La stazione sta passando sopra {{location}} il {{date}}",
      shareLink:
        "Per esplorare di più e tracciare la stazione tramite realtà aumentata, scarica l'app a",
      coach: {
        title: "Descrizione delle icone",
        moon: "Sarà notte nella posizione selezionata quando la Stazione è al di sopra dell'orizzonte.",
        sunset:
          "Ci sarà il crepuscolo nella posizione selezionata quando la Stazione è al di sopra dell'orizzonte.",
      },
      compass: {
        N: "N",
        NNE: "NNE",
        NE: "NE",
        ENE: "ENE",
        E: "E",
        ESE: "ESE",
        SE: "SE",
        SSE: "SSE",
        S: "S",
        SSW: "SSW",
        SW: "SW",
        WSW: "WSW",
        W: "W",
        WNW: "WNW",
        NW: "NW",
        NNW: "NNW",
      },
    },
    coachMarks: {
      skip: "Salta il tour",
      next: "Avanti",
      finish: "Fine",
      dismiss: "Ignora",
      locationTitle: "Cambia posizione",
      locationData: "Puoi selezionare o modificare la tua posizione direttamente da qui.",
      sightingsTitle: "Prossimo avvistamento e conto alla rovescia",
      sightingsData:
        'Questa sezione mostra la data e un timer per il conto alla rovescia per il prossimo avvistamento della Stazione vicino alla posizione selezionata. Usa l\'opzione "avvistamenti successivi" per vedere un elenco completo dei prossimi avvistamenti.',
      globeTitle: "Avvistamenti Interattiva",
      globeData:
        "È possibile visualizzare la posizione in tempo reale della Stazione scorrendo il dito sullo schermo. Ciò consente di interagire con la Terra e seguire la posizione della Stazione in tempo reale.",
      mapTitle: "Visualizzazione della mappa 2D",
      mapData:
        "Questa sezione mostra una rappresentazione 2D dell'intero percorso della Stazione relativamente alle regioni notturne e diurne di tutta la Terra.",
      navigationTitle: "Navigazione",
      navigationData:
        "È possibile scoprire diverse funzionalità dell'app dal menu di navigazione in basso.",
    },
  },
  issView: {
    timeHeader: "Conto alla rovescia",
    cameraPermissionText:
      "Non hai permesso l'uso della fotocamera del telefono. Clicca qui per consentire.",
    issCaptured: "Catturare questo momento",
    details: {
      title: "Informazioni",
      orbitalSpeed: "Velocità orbitale",
      longitude: "Longitudine",
      latitude: "Latitudine",
      altitude: "Altitudine",
      crewOnboard: "Numero tipico di equipaggio a bordo",
      launched: "L'Assemblaggio iniziò il",
      launchedValue: "20 novembre 1998",
      mass: "Massa stimata",
      dimensions: "Dimensioni stimate",
      orbitalPeriod: "Periodo orbitale",
      orbitsPerDay: "Orbite/Giorno",
      dimensionsValue: "109m di larghezza x 73m di lunghezza x 14m di altezza",
      dateTime: "Data e Ora",
      maxHeight: "Altezza Massima",
      duration: "Durata sopra l'Orizzonte",
      appears: "Compare",
      disappears: "Scompare",
      distance: "Distanza",
      nextSighting: "Prossima Avvistamento",
    },
    arNotSupported: "AR non è supportato su questo dispositivo",
    noOrientationSensor: "Sensore di orientamento non disponibile",
    noMagnetometerSensor: "Il magnetometro non è disponibile",
    screenshotError: "Impossibile catturare lo screenshot",
    coachMarks: {
      circleTitle: "Individua la Stazione",
      circleData:
        "Per individuare la stazione, muovi il tuo telefono nella direzione della freccia al di fuori del cerchio. Man mano che ti avvicini, il colore del cerchio diventerà verde.",
      compassTitle: "Bussola",
      compassData:
        "Questa bussola mostra la direzione in cui stai guardando e la direzione relativa in cui puoi individuare la stazione.",
      infoTitle: "Informazioni",
      infoData:
        "Questo interruttore apre o chiude la finestra con informazioni dettagliate sulla visione attuale o successiva e informazioni in tempo reale sulla stazione.",
      trajectoryTitle: "Traiettoria della Stazione",
      trajectoryData:
        "Questo interruttore attiva o disattiva la traiettoria della stazione sullo schermo. La linea continua mostra il passato e la linea tratteggiata mostra la traiettoria futura della stazione.",
      arTitle: "Vista AR",
      arData: "Questo interruttore passa tra la vista AR a schermo intero e parziale.",
      shareTitle: "Condividi",
      shareData:
        "Questo pulsante ti consente di condividere uno screenshot della vista AR tramite messaggio di testo, email o social media.",
      screenshotTitle: "Cattura Schermo",
      screenshotData:
        "Questo pulsante ti consente di catturare uno screenshot della vista AR da salvare nella tua galleria fotografica.",
      videoTitle: "Registrazione Video",
      videoData:
        "Questo pulsante ti consente di registrare un video della vista AR per catturare i momenti in cui individui la stazione.",
    },
    safetyReminder: {
      title: "Attenzione: Promemoria sulla sicurezza",
      subtitle1: "Supervisione parentale consigliata:",
      body1:
        "Ricorda l'importanza della supervisione parentale quando interagisci con lo schermo AR in questa app. I bambini dovrebbero utilizzare questa funzione sotto la guida di un adulto responsabile per garantire un'esperienza sicura e appropriata.",
      subtitle2: "Resta attento ai tuoi dintorni:",
      body2:
        "Mentre ti godi l'esperienza della realtà aumentata, rimani sempre consapevole del tuo ambiente fisico. Presta attenzione agli ostacoli, al terreno irregolare o ad altri pericoli che potrebbero rappresentare un rischio per la tua sicurezza. La tua sicurezza è fondamentale, quindi ti preghiamo di esercitare cautela e attenzione in ogni momento.",
      home: "Torna alla Home",
      ok: "Ho capito",
    },
  },
  settings: {
    header: "Impostazioni",
    locationSettings: "Impostazioni di posizione",
    notificationSettings: "Impostazioni di notifica",
    termsAndConditions: "Termini e Condizioni",
    contactUs: "Contattaci",
    language: "Lingua",
    calibrateCompass: "Calibrazione della bussola",
    calibrateCompassData: {
      instructions:
        "Per calibrare la bussola, ruota il tuo dispositivo più volte in un pattern a forma di 8.",
      accuracy: "Precisione del sensore:",
      low: "Bassa",
      medium: "Media",
      high: "Alta",
    },
    tutorials: "Tutorial",
    tutorialsData: {
      description:
        "Vuoi vedere i tutorial passo passo per le pagine Home e Visualizzazione AR ancora una volta?",
      homePage: "Pagina iniziale",
      arPage: "Visualizzazione AR",
    },
    termsAndConditionsData: {
      backButton: "Impostazioni",
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
      backButton: "Impostazioni",
      title: "Contattaci",
      titlePlaceholder: "Scegli il Soggetto",
      commentsPlaceholder: "Inserisci Commenti",
      sendButton: "Invia",
      contactUsOptions: {
        reportAnIssue: "Segnala un problema",
        improvementIdeas: "Idee di miglioramento",
        generalQuestions: "Domande generali",
        comments: "Commenti",
      },
    },
    notificationSettingsData: {
      backButton: "Impostazioni",
      notificationTitle: "Impostazioni di notifica",
      privacyTitle: "Impostazioni sulla Privacy",
      upcomingLabel: "Prossimi Avvistamenti",
      customizeLabel: "Personalizza le notifiche",
      upcomingTip: "Disattiva le notifiche per smettere di ricevere notifiche di eventi.",
      notifyMeBefore: "Avvisami prima",
      turnOffNotifications: "Disattiva le notifiche",
      rangeInputPlaceholder: "Scegli tra 1 a 120 minuti",
      customOption: "Personalizzato",
      from: "Da",
      until: "Fino a",
    },
    locationSettingsData: {
      backToSettings: "Impostazioni",
      goBack: "Torna indietro",
      generalTitle: "Impostazioni di posizione",
      cta: "Personalizza le notifiche per questa posizione",
      locationPermission: "Concedi il permesso ad accedere la tua posizione",
      addNewLocation: {
        generalTitleAdd: "Aggiungi una nuova posizione",
        generalTitleEdit: "Modifica la posizione",
        confirnModalButton: "Conferma",
        saveButton: "Salva la posizione",
        searchInputPlaceholder: "Specifica la città, CAP o indirizzo",
        nameInputPlaceholder: "Salva il nome della posizione",
      },
      removeLocation: {
        question: "Sei sicuro di voler eliminare questa posizione?",
        cancelButton: "Annulla",
        removeButton: "Elimina",
      },
    },
    share: "Condividi",
    shareLink:
      "Per tracciare la Stazione Spaziale Internazionale tramite realtà aumentata, scarica l'app mobile NASA Spot The Station su",
    localCalculations: "Calcoli locali",
  },
  resources: {
    header: "Risorse",
    goBack: "Torna indietro",
    news: {
      title: "Notizie della Stazione",
      searchPlaceholder: "Cerca articoli, eventi, ecc...",
      suggestions: "SUGGERIMENTI",
      searchResults: "Risultati della ricerca",
    },
    spotTheStation: {
      title: "Come posso vedere la stazione?",
    },
    about: {
      title: "Informazioni sulla Stazione",
    },
    details: {
      title: "Dettagli della Stazione",
    },
    faq: {
      title: "Domande Frequenti",
      questions: {
        question1: "1. Perché la Stazione Spaziale è lassù?",
        answer1:
          "La Stazione Spaziale Internazionale è l'unico laboratorio di microgravità della Terra. Questa piattaforma delle dimensioni di un campo da calcio ospita una miriade di esperimenti scientifici e tecnologici che vengono continuamente condotti dai membri dell'equipaggio o sono automatizzati. La ricerca a bordo del laboratorio orbitante offre benefici per la vita sulla Terra, così come per la futura esplorazione spaziale. La Stazione Spaziale funge da banco di prova per le tecnologie e ci consente di studiare gli impatti del volo spaziale a lungo termine sugli esseri umani, supportando la missione della NASA di spingere la presenza umana più lontano nello spazio. Per saperne di più sulla ricerca che avviene sulla Stazione Spaziale e sulle opportunità di condurre la tua scienza lì, per favore <a href='https://www.nasa.gov/international-space-station/'>clicca qui</a>.",
        question2: "2. Quanto velocemente viaggia la Stazione Spaziale?",
        answer2:
          "La Stazione orbita attorno alla Terra ogni 90 minuti. Viaggia a circa 17.500 miglia (28.000 km) all'ora, il che dà all'equipaggio 16 albe e tramonti ogni giorno. Nei più di 15 anni in cui le persone hanno vissuto a bordo, la Stazione ha circumnavigato la Terra decine di migliaia di volte. Puoi vedere più fatti sulla Stazione su <a href='https://www.nasa.gov/international-space-station/space-station-facts-and-figures/'>questa pagina web</a>.",
        question3: "3. Quanto spesso posso aspettarmi di vedere la Stazione Spaziale?",
        answer3:
          "La Stazione Spaziale è visibile perché riflette la luce del Sole, lo stesso motivo per cui possiamo vedere la Luna. Tuttavia, a differenza della Luna, la Stazione Spaziale non è abbastanza luminosa da essere vista durante il giorno. Può essere vista solo quando è l'alba o il tramonto nella tua posizione. Pertanto, può variare da una possibilità di avvistamento al mese a diverse alla settimana, poiché deve essere sia buio dove ti trovi, sia la Stazione Spaziale deve trovarsi sopra di te.",
        question4: "4. Cos'è l'app mobile Spot the Station?",
        answer4:
          "L'app mobile Spot the Station è un'app ufficiale della NASA che aiuta gli utenti a tracciare e ricevere notifiche per gli avvistamenti della Stazione Spaziale Internazionale mentre passa sopra la loro posizione. Fornisce tracciamento in tempo reale, programmi di avvistamento e avvisi.",
        question5: "5. Come posso scaricare l'app mobile Spot the Station?",
        answer5:
          "Puoi scaricare l'app sia dall'Apple App Store <a href='https://apps.apple.com/us/app/spot-the-station/id6449235044'>qui</a> che dal Google Play Store <a href='https://play.google.com/store/apps/details?id=gov.nasa.hq.SpotTheStation&hl=en_US&pli=1'>qui</a>.",
        question6: "6. Come mi notifica l'app degli avvistamenti imminenti della Stazione?",
        answer6:
          "L'app invia notifiche push per avvisarti degli avvistamenti imminenti della Stazione, inclusi la data, l'ora, la durata e le condizioni di visibilità specifiche per la tua posizione. Assicurati di aver abilitato i permessi di notifica per questa app nelle impostazioni del tuo telefono.",
        question7: "7. Posso personalizzare le notifiche nell'app?",
        answer7:
          "Sì, puoi personalizzare le impostazioni degli avvisi nell'app per ricevere notifiche in base alla tua posizione preferita, alle condizioni di avvistamento e persino agli orari specifici che funzionano meglio per te.",
        question8: "8. Cosa devo fare se non ricevo notifiche?",
        answer8:
          "Se non ricevi avvisi, assicurati che le notifiche siano abilitate nelle impostazioni del tuo dispositivo. Inoltre, controlla le preferenze di notifica dell'app per confermare di aver impostato gli avvisi per la tua posizione scelta e il tempo preferito.",
        question9: "9. L'app funziona a livello internazionale?",
        answer9:
          "Sì, l'app Spot the Station è disponibile in tutto il mondo e fornisce informazioni sugli avvistamenti per la maggior parte delle località abitate, rendendo facile vedere la Stazione da quasi ovunque.",
        question10: "10. Perché non ci sono opportunità di avvistamento per la mia posizione?",
        answer10:
          "Deve essere buio dove ti trovi e la Stazione Spaziale deve essere sopra di te per poterla vedere. Poiché l'orbita della Stazione Spaziale la porta in tutto il mondo, può passare sopra di te in momenti in cui non sarà visibile, sia nel mezzo del giorno che nel mezzo della notte. Spot The Station invierà notifiche solo quando avrai un'opportunità di vedere la Stazione Spaziale, non ogni volta che sarà sopra di te.",
        question11: "11. Ho bisogno di un telescopio per vedere la Stazione Spaziale?",
        answer11:
          "No, puoi vedere la Stazione Spaziale a occhio nudo, senza bisogno di attrezzature.",
        question12: "12. La Stazione appare e poi scompare a causa della luce della Luna?",
        answer12:
          "La Stazione Spaziale è visibile perché riflette la luce del Sole. Questo è lo stesso motivo per cui la Luna appare luminosa. Anche quando la Luna non è ancora sorta, sarai comunque in grado di vedere la Stazione Spaziale.",
        question13: "13. Quale fuso orario viene utilizzato per le notifiche di avviso?",
        answer13:
          "Tutte le informazioni di Spot The Station sono elencate nel fuso orario locale per la posizione selezionata. Spot The Station si adatta automaticamente all'ora legale.",
        question14: "14. Quali informazioni fornisce l'app per ogni avvistamento?",
        answer14:
          "Per ogni avvistamento, l'app mostra l'ora, la durata della visibilità, l'altezza massima e le direzioni in cui la Stazione apparirà e scomparirà, aiutandoti a localizzarla accuratamente nel cielo.",
        question15:
          "15. Come posso individuare la Stazione durante ogni avvistamento? Cosa significano tutte queste informazioni sugli avvistamenti?",
        answer15:
          "L'app fornisce un elenco di Avvistamenti Imminenti se tocchi l'Elenco dei Prossimi Avvistamenti nella pagina principale.<br/><strong>Data e ora</strong> è quando l'opportunità di avvistamento inizierà nel tuo fuso orario locale. Tutti gli avvistamenti avverranno entro poche ore prima o dopo l'alba o il tramonto. Questo è il periodo di visione ottimale poiché il sole si riflette sulla Stazione Spaziale e contrasta con il cielo più scuro.<br/><strong>Sopra l'orizzonte</strong> è il periodo massimo di tempo in cui la Stazione Spaziale è visibile prima di attraversare di nuovo sotto l'orizzonte.<br/><strong>Altezza massima</strong> è misurata in gradi (conosciuti anche come elevazione). Rappresenta l'altezza della Stazione Spaziale dall'orizzonte nel cielo notturno. L'orizzonte è a zero gradi e direttamente sopra la testa è a novanta gradi. Se tieni il pugno a braccio teso e posizioni il pugno sull'orizzonte, la parte superiore sarà circa a 10 gradi.<br/><strong>Appare</strong> è la posizione nel cielo dove la Stazione sarà visibile per prima. Questo valore, come l'altezza massima, è misurato in gradi dall'orizzonte. Le lettere rappresentano le direzioni della bussola: N è nord, WNW è ovest-nord-ovest, e così via.<br/><strong>Scompare</strong> rappresenta dove nel cielo notturno la Stazione Spaziale Internazionale lascerà il tuo campo visivo.<img src='https://spotthestation.nasa.gov/images/astro_horizon.png' />",
        question16:
          "16. Il programma di sorvolo indica che la Stazione Spaziale appare e scompare dalla stessa direzione, come è possibile? Esempio: - Ora: Lun 15 Lug 11:57 PM, Visibile: 2 min, Altezza Massima: 51°, Appare: 51° sopra ENE, Scompare: 11° sopra ENE",
        answer16:
          "Il software Spot the Station arrotonda le direzioni ai punti cardinali e intercardinali più vicini. Questo può far sembrare che la Stazione appaia e scompaia nella stessa direzione anche se sta attraversando il cielo. Questo accade tipicamente durante i sorvoli con una breve finestra di visibilità perché la Stazione si sta rapidamente muovendo dentro (o fuori) dall'ombra oscura della Terra dove, dalla nostra posizione a terra, non possiamo osservare il suo passaggio completo attraverso il cielo.",
        question17: "17. Posso vedere una mappa in tempo reale della posizione della Stazione?",
        answer17:
          "Sì, l'app include una mappa in tempo reale che mostra la posizione attuale della Stazione mentre orbita attorno alla Terra, dandoti un riferimento visivo per tracciare il suo progresso.",
        question18: "18. Cos'è la funzione AR nell'app Spot the Station?",
        answer18:
          "La funzione di Realtà Aumentata (AR) nell'app Spot the Station consente agli utenti di visualizzare una sovrapposizione virtuale del percorso della Stazione Spaziale Internazionale nel cielo. Questa funzione aiuta gli utenti a localizzare la Stazione in modo più accurato allineando il loro dispositivo con la posizione in tempo reale della Stazione.",
        question19: "19. Come accedo alla funzione AR nell'app?",
        answer19:
          "Per accedere alla funzione AR, apri l'app e naviga nell'opzione AR View nel menu in basso. Segui le istruzioni sullo schermo per allineare la fotocamera del tuo dispositivo con il cielo, dove l'app mostrerà una sovrapposizione virtuale che indica la posizione e la traiettoria della Stazione.",
        question20:
          "20. Ho bisogno di un dispositivo o software specifico per utilizzare la funzione AR?",
        answer20:
          "La funzione AR richiede un dispositivo che possa determinare il suo orientamento nello spazio 3D. Richiede supporto hardware specifico, come un giroscopio o un co-processore di movimento. I dispositivi più vecchi o economici potrebbero non supportare questa funzionalità.",
        question21: "21. Come funziona la funzione AR?",
        answer21:
          "Utilizzando la fotocamera e i sensori del tuo dispositivo, la funzione AR sovrappone la posizione della Stazione nel cielo sul tuo schermo, regolando in tempo reale mentre muovi il tuo dispositivo. L'app ti guida a puntare la fotocamera nella direzione corretta e ti mostra dove la Stazione apparirà e scomparirà.",
        question22: "22. Posso usare la funzione AR sia di giorno che di notte?",
        answer22:
          "Sì, puoi usare la funzione AR sia di giorno che di notte; tuttavia, l'esperienza migliore è tipicamente durante il crepuscolo o la notte quando la Stazione è visibile a occhio nudo. La sovrapposizione AR funzionerà indipendentemente dalle condizioni di luce, ma gli avvistamenti effettivi dipendono dalla visibilità.",
        question23: "23. La sovrapposizione AR è accurata per tutte le località?",
        answer23:
          "Sì, la funzione AR è progettata per fornire informazioni sulla posizione accurate in base alla tua posizione GPS. Tuttavia, l'accuratezza può variare leggermente a seconda della calibrazione della bussola e dei sensori del tuo dispositivo. Se noti discrepanze, ricalibra la bussola del tuo dispositivo tramite le Impostazioni.",
        question24: "24. La funzione AR può aiutare con i tempi di avvistamento esatti?",
        answer24:
          "La funzione AR ti guida visivamente a localizzare la Stazione nel momento preciso in cui appare nel cielo. Insieme agli avvisi di avvistamento dell'app, migliora la tua capacità di vedere la Stazione fornendoti una direzione visiva e un indicatore di altezza in tempo reale per tracciarla con precisione.",
        question25: "25. Ci sono suggerimenti per ottimizzare la mia esperienza AR?",
        answer25:
          "Per la migliore esperienza AR, usa la funzione in un'area aperta con una vista chiara del cielo. Evita ostacoli come edifici alti o alberi, poiché possono bloccare la visibilità. Calibra la bussola del tuo dispositivo e assicurati che i servizi di localizzazione e i permessi della fotocamera siano abilitati per un funzionamento fluido.",
        question26: "26. La funzione AR è disponibile sia su Android che su iOS?",
        answer26:
          "Sì, la funzione AR è disponibile sia nelle versioni iOS che Android dell'app, purché il tuo dispositivo soddisfi i requisiti hardware.",
        question27: "27. L'app funziona offline?",
        answer27:
          "Alcune funzionalità di base, come l'accesso ai programmi di avvistamento precedentemente scaricati o la ricezione di notifiche programmate, possono funzionare offline. Tuttavia, le funzionalità che richiedono dati in tempo reale, come il tracciamento, richiedono una connessione a Internet.",
        question28: "28. Ci sono requisiti speciali per utilizzare l'app?",
        answer28:
          "L'app richiede una connessione Internet attiva per il tracciamento in tempo reale e gli avvisi. Inoltre, per informazioni specifiche sulla posizione, assicurati che i servizi di localizzazione del tuo dispositivo siano abilitati per l'app.",
        question29: "29. L'app è gratuita?",
        answer29:
          "Sì, l'app Spot the Station è gratuita da scaricare e utilizzare, senza acquisti in-app o abbonamenti.",
        question30: "30. Chi posso contattare per il supporto dell'app?",
        answer30:
          "Per supporto con l'app Spot the Station, visita la pagina di supporto della NASA o contatta tramite l'opzione di feedback all'interno dell'app.",
      },
    },
    astronauts: {
      title: "Chi è nella Stazione ora?",
      number: "Numero di persone:",
    },
    live: {
      title: "Streaming in Diretta",
      description:
        "Attualmente, un video in diretta della Terra viene trasmesso da una telecamera HD esterna montata sulla ISS. La telecamera guarda verso la Terra con un pannello solare occasionale che passa attraverso la vista.",
    },
    tour: {
      title: "Tour Virtuale",
    },
    videos: {
      title: "Video della Stazione",
    },
    gallery: {
      title: "Galleria",
    },
  },
}

export default it
export type Translations = typeof it
