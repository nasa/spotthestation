const it = {
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
  permissionsModal: {
    close: "Chiudi",
    openSettings: "Apri le impostazioni",
    body: "Per utilizzare questa funzione, è necessario concedere l'autorizzazione per accedere alla galleria.",
  },
  permissionsAndroid: {
    title: "Autorizzazione per salvare i video",
    message: "Questa app richiede l'autorizzazione per salvare i video sul tuo dispositivo.",
    buttonNeutral: "Chiedimelo più tardi",
    buttonNegative: "Annulla",
    buttonPositive: "OK",
  },
  thanksModal: {
    body: "Grazie per averci contattato. Abbiamo ricevuto il tuo messaggio e elaboreremo la tua richiesta. Speriamo di includere una risoluzione nelle versioni future. Si prega di notare che questa applicazione non raccoglie i dati dell'utente, quindi non possiamo rispondere direttamente a tutti i messaggi.",
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
      title: "Individua l'ISS ora!",
      subTitle: "L'ISS sta passando sopra di te alle",
    },
    before: {
      titleOne: "Individua l'ISS",
      titleTwo: "minuti!",
      subTitleOne: "La ISS sta passando sopra di te tra",
      subTitleTwo: "minuti alle",
    },
  },
  units: {
    minute: "min",
    kilometer: "km",
    kilogram: "kg",
    month: "mese",
    metersPerSecond: "m/s",
  },
  tabNavigator: {
    homeTab: "Home",
    issViewTab: "Vista ISS",
    issNowTab: "L'ISS ora",
    resourcesTab: "Risorse",
    settingsTab: "Impostazioni",
  },
  onboarding: {
    splash: {
      title: "Individua la stazione",
      subTitle: "Guarda il cielo e visualizza la Stazione Spaziale Internazionale (ISS)",
    },
    completeProfile: {
      notification: {
        title: "Impostazioni di notifica",
        label: "River avvisi di notifica",
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
        "I dati dell'ISS stanno caricando ... Questo potrebbe richiedere un momento per essere completato.",
      trajectoryError:
        "I dati della traiettoria dell'ISS non sono attualmente disponibili a causa della manutenzione del server. Si prega di riprovare più tardi.",
    },
    header: {
      firstTimeHead: "Avvistamento successivo",
      secondTimeHead: "Conto alla rovescia",
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
    },
    selectSightings: {
      title: "Avvistamenti imminenti",
      sightings: "Avvistamenti",
      selectMessage: "Seleziona eventi per i quali vorresti essere avvisato.",
      switch: "Avvisami per tutti gli eventi imminenti in questa posizione.",
      aboveHorizon: "Sopra l'orizzonte",
      today: "Oggi",
      tomorrow: "Domani",
      coach: {
        title: "Descrizione delle icone",
        moon: "Sarà notte nella posizione selezionata quando l'ISS è al di sopra dell'orizzonte.",
        sunset:
          "Ci sarà il crepuscolo nella posizione selezionata quando l'ISS è al di sopra dell'orizzonte.",
        sun: "Ci sarà la luce del giorno nella posizione selezionata quando l'ISS è al di sopra dell'orizzonte.",
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
        "Questa sezione mostra la data e un timer per il conto alla rovescia per il prossimo avvistamento dell'ISS vicino alla posizione selezionata. Usa l'opzione \"avvistamenti successivi\" per vedere un elenco completo dei prossimi avvistamenti.",
      globeTitle: "Terra interattiva",
      globeData:
        "È possibile visualizzare la posizione in tempo reale dell'ISS scorrere il dito sullo schermo. Ciò consente di interagire con la Terra e tracciare della posizione dell'ISS in tempo reale.",
      mapTitle: "Vista della mappa 2D",
      mapData:
        "Questa sezione mostra una rappresentazione 2D dell'intero percorso dell'ISS relativamente alle regioni notturne e diurne di tutta la terra.",
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
      title: "Stazione Spaziale Internazionale - Dettagli",
      distance: "Distanza",
      orbitalSpeed: "Velocità orbitale",
      longitude: "Longitudine",
      latitude: "Latitudine",
      altitude: "Altitudine",
      crewOnboard: "Crew a bordo",
      launched: "L'Assemblaggio iniziò il",
      launchedValue: "20 novembre 1998",
      mass: "Massa stimata",
      dimensions: "Dimensioni stimate",
      orbitalPeriod: "Periodo orbitale",
      orbitsPerDay: "Orbite/Giorno",
      orbitalDecay: "Decadimento orbitale",
      dimensionsValue: "109m di larghezza x 73m di lunghezza x 14m di altezza",
    },
  },
  settings: {
    header: "Impostazioni",
    locationSettings: "Impostazioni di posizione",
    notificationSettings: "Impostazioni di notifica",
    termsAndConditions: "Termini e Condizioni",
    contactUs: "Contattaci",
    termsAndConditionsData: {
      backButton: "Impostazioni",
      ios: {
        title: "ACCORDO DI UTILIZZO DELL'APPLICAZIONE CONCESSA IN LICENZA",
        intro1:
          "L'UTENTE FINALE desidera utilizzare la seguente APPLICAZIONE CONCESSA IN LICENZA sviluppata dal governo degli Stati Uniti come rappresentato dalla National Aeronautics and Space Administration, con sede a 300 E Street SW, Washington, DC (da adesso in poi NASA):",
        appData: {
          line1: "Applicazione concessa in licenza:",
          line2: "Versione:",
          line3:
            "Numero tecnologico NASA: MSC-27535-1 (da adesso in poi APPLICAZIONE CONCESSA IN LICENZA)",
        },
        contactData: {
          line1: "Punto di contatto della NASA:",
          line2: "Jacob Keaton",
          line3: "Quartier generale della NASA",
          line4: "300 E Street SW",
          line5: "E-mail: spotthestation@hq.nasa.gov",
        },
        intro2:
          "L'autorità della NASA per il rilascio dell'APPLICAZIONE CONCESSA IN LICENZA è la Direttiva Politica della NASA (NPD) 2820.1C",
        intro3:
          "PERTANTO, in considerazione del fatto che la NASA rilascia l'APPLICAZIONE CONCESSA IN LICENZA all'UTENTE FINALE e concede all'UTENTE FINALE il diritto non trasferibile di utilizzare l'APPLICAZIONE IN LICENZA come specificato nel presente documento su qualsiasi iPhone o iPod touch che l'UTENTE FINALE possiede o controlla e come consentito dalle Regole D'uso specificate nei termini e condizioni dell'App Store per soli scopi non commerciali, l'UTENTE FINALE accetta quanto segue",
        body: {
          line1:
            "1. La NASA e l'UTENTE FINALE riconoscono che il presente Contratto è esclusivamente tra la NASA e l'UTENTE FINALE e non con Apple, il presente Contratto non è trasferibile e la NASA, non Apple, è l'unica responsabile dell'APPLICAZIONE CONCESSA IN LICENZA e del relativo contenuto.",
          line2:
            "2. La NASA e l'UTENTE FINALE riconoscono e accettano che Apple, e le sussidiarie di Apple, sono terze parti beneficiarie del presente Contratto e che, previa accettazione da parte dell'UTENTE FINALE dei termini e delle condizioni del presente Contratto, Apple avrà il diritto (e si riterrà che abbia accettato il diritto) di far valere il presente Contratto nei confronti dell'UTENTE FINALE in qualità di terzo beneficiario del presente Contratto. ",
          line3:
            "3. L'APPLICAZIONE CONCESSA IN LICENZA rimane di proprietà della NASA. L'UTENTE FINALE riconosce di non acquisire alcun interesse di proprietà nell'APPLICAZIONE CONCESSA IN LICENZA ai sensi del presente Contratto. L'APPLICAZIONE CONCESSA IN LICENZA non è di pubblico dominio e nessuna disposizione del presente Contratto deve essere interpretata come messa a disposizione del pubblico senza restrizioni.",
          line4:
            "4. Non ci sarà alcun rilascio, distribuzione o pubblicazione dell'APPLICAZIONE CONCESSA IN LICENZA da parte dell'UTENTE FINALE.",
          line5:
            "5. La NASA non sarà responsabile dal punto di vista legale o tecnico sia per qualsiasi manutenzione o aggiornamento dell'APPLICAZIONE CONCESSA IN LICENZA, né per la correzione di eventuali errori nell'APPLICAZIONE CONCESSA IN LICENZA.",
          line6:
            '6. L\'UTENTE FINALE dichiara e garantisce che (1) non si trova in un paese soggetto a un embargo del governo degli Stati Uniti o che è stato designato dal governo degli Stati Uniti come un paese di "sostegno al terrorismo"; e (2) non è indicato in alcun elenco del governo degli Stati Uniti come parti proibite o limitate',
          line7:
            "7. L'APPLICAZIONE CONCESSA IN LICENZA VIENE FORNITA \"COSÌ COM'È\" SENZA ALCUNA GARANZIA DI ALCUN TIPO, ESPRESSA, IMPLICITA O LEGALE, COMPRESA, MA NON LIMITATA A, QUALSIASI GARANZIA CHE L'APPLICAZIONE CONCESSA IN LICENZA SARÀ CONFORME ALLE SPECIFICHE, EVENTUALI GARANZIE IMPLICITE DI COMMERCIABILITÀ, IDONEITÀ PER UNO SCOPO PARTICOLARE E LIBERTÀ DA VIOLAZIONI O QUALSIASI GARANZIA CHE L'APPLICAZIONE CONCESSA IN LICENZA SARÀ PRIVA DI ERRORI. IN NESSUN CASO LA NASA SARÀ RESPONSABILE PER EVENTUALI DANNI, INCLUSI, MA NON LIMITATI A, DANNI DIRETTI, INDIRETTI, SPECIALI O CONSEQUENZIALI, DERIVANTI DA, DERIVANTI DA O IN QUALSIASI MODO CONNESSI ALL'APPLICAZIONE CONCESSA IN LICENZA, BASATI O NON SULLA GARANZIA, CONTRATTO, ILLECITO O ALTRO, SE LESIONI SONO STATE SUBITE O MENO DA PERSONE O BENI O ALTRO, E SE LE PERDITE SONO STATE SOSTENUTE O DERIVATE DALL'UTILIZZO DELL'APPLICAZIONE CONCESSA IN LICENZA. L'UTENTE ACCETTA DI RINUNCIARE A QUALSIASI RECLAMO NEI CONFRONTI DEL GOVERNO DEGLI STATI UNITI, DEI SUOI ​​APPALTATORI E DEI RELATIVI SUBAPPALTATORI, E RICONOSCERE CHE IL GOVERNO DEGLI STATI UNITI, I SUOI ​​APPALTATORI E I LORO SUBAPPALTATORI NON SONO RESPONSABILI PER QUALSIASI DANNO CHE L'UTENTE FINALE POTREBBE SUBIRE DALL'UTILIZZO DA PARTE DELL'UTENTE FINALE DELL'APPLICAZIONE CONCESSA IN LICENZA, INCLUSI EVENTUALI DANNI DA PRODOTTI BASATI O DERIVANTI DALL'APPLICAZIONE CONCESSA IN LICENZA.",
          line8:
            "8. In caso di mancata conformità dell'APPLICAZIONE CONCESSA IN LICENZA a qualsiasi garanzia resa applicabile dalla legge, l'UTENTE FINALE può informare Apple e Apple rimborserà all'UTENTE FINALE il prezzo di acquisto (se presente) per l'APPLICAZIONE CONCESSA IN LICENZA. Nella misura massima consentita dalla legge applicabile, Apple non avrà altre perdite, responsabilità, danni, costi o spese attribuibili alla mancata conformità a qualsiasi garanzia dell'APPLICAZIONE CONCESSA IN LICENZA. ",
          line9:
            "9. La NASA e l'UTENTE FINALE riconoscono che, nel caso in cui una terza parte affermi che l'APPLICAZIONE IN LICENZA o il possesso e l'utilizzo dell'APPLICAZIONE IN LICENZA da parte dell'UTENTE FINALE viola i diritti di proprietà intellettuale, la NASA, non Apple, sarà l'unica responsabile dell'indagine, difesa e risoluzione di qualsiasi reclamo per violazione della proprietà intellettuale, soggetto alla legge.",
          line10:
            "10. La NASA e l'UTENTE FINALE riconoscono che la NASA, non Apple, è responsabile per la risoluzione di eventuali reclami dell'UTENTE FINALE o di terzi relativi all'APPLICAZIONE CONCESSA IN LICENZA o al possesso e/o all'uso dell'APPLICAZIONE CONCESSA IN LICENZA da parte dell'UTENTE FINALE, inclusi, a titolo esemplificativo, ma non limitati alle seguenti: (1) rivendicazioni di responsabilità per danno da prodotti difettosi; (2) qualsiasi reclamo secondo cui l'APPLICAZIONE CONCESSA IN LICENZA non è conforme a qualsiasi requisito legale o normativo applicabile, comprese eventuali garanzie rese applicabili dalla legge; e (3) rivendicazioni derivanti dalla tutela dei consumatori o da leggi simili.",
          line11:
            "11. Il presente Accordo sarà interpretato, e le relazioni legali tra le parti saranno determinate, in conformità con la legge federale degli Stati Uniti a tutti gli effetti.",
          line12:
            "12. Il presente Accordo costituisce l'intero accordo tra la NASA e l'UTENTE FINALE in relazione al rilascio dell'APPLICAZIONE CONCESSA IN LICENZA e non può essere sostituito, modificato o emendato.",
          line13:
            "13. Accettando e utilizzando l'APPLICAZIONE CONCESSA IN LICENZA ai sensi del presente Contratto, l'UTENTE FINALE accetta tutti i termini e le condizioni del presente documento.",
        },
      },
      android: {
        title: "CONTRATTO DI UTILIZZO DELL'APPLICAZIONE CON LICENZA",
        intro1:
          "L'UTENTE FINALE desidera utilizzare il seguente PRODOTTO sviluppato dal governo degli Stati Uniti come rappresentato dalla National Aeronautics and Space Administration, Ames Research Center, con sede a Moffett Field, CA 94035 (NASA):",
        appData: {
          line1: "Software:",
          line2: "Versione:",
          line3: "Numero tecnologia NASA: MSC-27535-1",
        },
        intro2:
          "L'autorità della NASA per il rilascio dell'APPLICAZIONE CON LICENZA è la Direttiva Politica della NASA (NPD) 2820.1C.",
        intro3:
          "PERTANTO, in considerazione del fatto che la NASA rilascia l'APPLICAZIONE CONCESSA IN LICENZA all'UTENTE FINALE e concede all'UTENTE FINALE il diritto non trasferibile di utilizzare l'APPLICAZIONE CONCESSA IN LICENZA per uso personale, non commerciale e come specificato nel presente documento e come consentito dai Termini di Servizio di Android Market su qualsiasi dispositivo mobile Android (\"Dispositivo\") che l'UTENTE FINALE possiede o controlla, l'UTENTE FINALE accetta quanto segue:",
        body: {
          line1:
            "1. L'APPLICAZIONE IN LICENZA rimane di proprietà della NASA. L'UTENTE FINALE riconosce di non acquisire alcun interesse di proprietà nell'APPLICAZIONE CONCESSA IN LICENZA ai sensi del presente Contratto. L'APPLICAZIONE CONCESSA IN LICENZA non è di pubblico dominio e nessuna disposizione del presente Contratto deve essere interpretata come messa a disposizione del pubblico senza restrizioni.",
          line2:
            "2. Non ci sarà alcun rilascio, distribuzione o pubblicazione dell'APPLICAZIONE CONCESSA IN LICENZA da parte dell'UTENTE FINALE.",
          line3:
            "3. La NASA non sarà responsabile dal punto di vista legale o tecnico per qualsiasi manutenzione o aggiornamento dell'APPLICAZIONE CONCESSA IN LICENZA, né per la correzione di eventuali errori nell'APPLICAZIONE CONCESSA IN LICENZA.",
          line4:
            '4. L\'UTENTE FINALE dichiara e garantisce che (1) non si trova in un paese soggetto a un embargo del governo degli Stati Uniti o che è stato designato dal governo degli Stati Uniti come un paese di "sostegno al terrorismo"; e (2) non è indicato in alcun elenco del governo degli Stati Uniti di parti proibite o soggette a restrizioni.',
          line5:
            "5. L'APPLICAZIONE CONCESSA IN LICENZA VIENE FORNITA \"COSÌ COM'È\" SENZA ALCUNA GARANZIA DI ALCUN TIPO, ESPRESSA, IMPLICITA O LEGALE, COMPRESA, MA NON LIMITATA A, QUALSIASI GARANZIA CHE L'APPLICAZIONE CONCESSA IN LICENZA SARÀ CONFORME ALLE SPECIFICHE, EVENTUALI GARANZIE IMPLICITE DI COMMERCIABILITÀ, IDONEITÀ PER UNO SCOPO PARTICOLARE E LIBERTÀ DA VIOLAZIONI O QUALSIASI GARANZIA CHE L'APPLICAZIONE CONCESSA IN LICENZA SARÀ PRIVA DI ERRORI. IN NESSUN CASO LA NASA SARÀ RESPONSABILE PER EVENTUALI DANNI, INCLUSI, MA NON LIMITATI A, DANNI DIRETTI, INDIRETTI, SPECIALI O CONSEQUENZIALI, DERIVANTI DA, DERIVANTI DA O IN QUALSIASI MODO CONNESSI ALL'APPLICAZIONE CONCESSA IN LICENZA, BASATI O NON SULLA GARANZIA, CONTRATTO, ILLECITO O ALTRO, SE LESIONI SONO STATE SUBITE O MENO DA PERSONE O BENI O ALTRO, E SE LE PERDITE SONO STATE SOSTENUTE O DERIVATE DALL'UTILIZZO DELL'APPLICAZIONE CONCESSA IN LICENZA. L'UTENTE FINALE ACCETTA DI RINUNCIARE A QUALSIASI RECLAMO NEI CONFRONTI DEL GOVERNO DEGLI STATI UNITI, DEI SUOI ​​APPALTATORI E DEI RELATIVI SUBAPPALTATORI, E RICONOSCERE CHE IL GOVERNO DEGLI STATI UNITI, I SUOI ​​APPALTATORI E I LORO SUBAPPALTATORI NON SONO RESPONSABILI PER QUALSIASI DANNO CHE L'UTENTE FINALE POTREBBE SUBIRE DALL'UTILIZZO DA PARTE DELL'UTENTE FINALE DELL'APPLICAZIONE CONCESSA IN LICENZA, INCLUSI EVENTUALI DANNI DA PRODOTTI BASATI O DERIVANTI DALL'APPLICAZIONE CONCESSA IN LICENZA.",
          line6:
            "6. Il presente Accordo sarà interpretato, e le relazioni legali tra le parti saranno determinate, in conformità con la legge federale degli Stati Uniti a tutti gli effetti.",
          line7:
            "7. Il presente Accordo costituisce l'intero accordo tra la NASA e l'UTENTE FINALE in relazione al rilascio dell'APPLICAZIONE CONCESSA IN LICENZA e non può essere sostituito, modificato o emendato.",
          line8:
            "8. Accettando e utilizzando l'APPLICAZIONE CONCESSA IN LICENZA ai sensi del presente Contratto, l'UTENTE FINALE accetta tutti i termini e le condizioni del presente documento.",
        },
      },
    },
    contactUsData: {
      backButton: "Impostazioni",
      title: "Contattaci",
      titlePlaceholder: "Scegli il titolo",
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
      upcomingLabel: "Prossimi eventi",
      customizeLabel: "Personalizza le notifiche",
      upcomingTip: "Disattiva le notifiche per smettere di ricevere notifiche di eventi.",
      notifyMeBefore: "Avvisami prima",
      turnOffNotifications: "Disattiva le notifiche",
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
  },
  resources: {
    header: "Risorse",
    searchPlaceholder: "Cerca articoli, eventi, ecc ...",
    suggestions: "Suggerimenti",
    searchResults: "Risultati di ricerca",
    tabs: {
      news: "Notizie",
      about: "Di",
      details: "Dettagli",
    },
  },
}

export default it
export type Translations = typeof it
