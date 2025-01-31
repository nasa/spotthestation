const fr = {
  name: "Français",
  errorScreen: {
    title: "Quelque chose s'est mal passé!",
    friendlySubtitle:
      "C'est l'écran que vos utilisateurs verront en production lorsqu'une erreur sera générée. Vous voudrez personnaliser ce message (situé dans `app / i18n / en.ts`) et probablement également la mise en page (` app / écran / errerscreen`). Si vous souhaitez supprimer cela entièrement, vérifiez `app / app.tsx` pour le composant <ReurrBoundary>.",
    reset: "Réinitialiser l'application",
  },
  snackBar: {
    ok: "D'accord!",
    dismiss: "Rejeter",
    sightingsSaved: "Observations pour la dernière localisation enregistrée chargée!",
    defaultError: "Une erreur s'est produite",
    locationSaved: "Localisation enregistrée",
    locationExist: "Une localisation avec ce titre existe déjà!",
    openSettingsError: "Impossible d'ouvrir les paramètres!",
    shared: "Partagé avec succès!",
    savedToGallery: "Enregistré dans la galerie",
  },
  outdatedModal: {
    title: "Mise à jour disponible",
    body: "Nouvelle version de l'application disponible ! Téléchargez la nouvelle version sur",
    buttonNegative: "Annuler",
    buttonPositive: "Télécharger",
  },
  permissionsModal: {
    close: "Fermer",
    openSettings: "Ouvrir les Paramètres",
    body: "Pour utiliser cette fonctionnalité, vous devez accorder la permission d'accéder à la galerie.",
  },
  fontSizeModal: {
    title: "Taille de police trop grande",
    body1:
      "Il semble que la taille de la police de votre appareil soit réglée trop haut. Cela peut entraîner une coupure ou un affichage incorrect de certaines informations essentielles dans l'application.",
    bodyAndroid:
      "Pour ajuster la taille de votre police, allez dans Paramètres → Affichage → Taille et style de police → Ajustez le curseur à une taille plus petite.",
    bodyIOS:
      "Pour ajuster la taille de votre police, allez dans Paramètres → Accessibilité → Affichage et taille du texte → Texte plus grand → Ajustez le curseur à une taille plus petite.",
    cancel: "Annuler",
    settings: "Aller aux paramètres",
  },
  permissionsAndroid: {
    title: "Autorisation pour enregistrer des vidéos",
    message:
      "Cette application a besoin de l'autorisation pour enregistrer des vidéos sur votre appareil.",
    buttonNeutral: "Demandez moi plus tard",
    buttonNegative: "Annuler",
    buttonPositive: "D'accord",
    alarmPermissionTitle: "Permission requise",
    alarmPermissionMessage:
      "Veuillez accorder l'autorisation d'alarmes et de rappels à l'écran suivant afin de recevoir des notifications sur les observations à venir.",
  },
  thanksModal: {
    body: "Merci de nous contacter. Nous avons bien reçu votre message et traiterons votre demande. Veuillez noter que cette application ne collecte pas de données utilisateur, nous ne pouvons donc pas répondre à tous les messages individuellement.",
    dismiss: "Rejeter",
  },
  privacy: {
    title: "Utilisez votre localisation",
    body: "Nous utilisons des données de localisation pour calculer les observations à venir dans votre localisation actuelle. Veuillez accorder les autorisations de localisation pour activer cette fonctionnalité.",
    agree: "ACCEPTER",
    skip: "PASSER",
    policy: "politique de confidentialité",
  },
  notifications: {
    push: {
      title: "Repérez la Station maintenant!",
      subTitle: "La Station passe au-dessus de vous",
    },
    before: {
      titleOne: "Repérez la Station dans",
      titleTwo: "minutes!",
      subTitleOne: "La Station passe au-dessus de vous",
      subTitleTwo: "minutes à",
    },
  },
  units: {
    minute: "min",
    kilometer: "km",
    kilogram: "kg",
    month: "mois",
    metersPerSecond: "M/S",
    time: "T",
  },
  tabNavigator: {
    homeTab: "Accueil",
    issViewTab: "Vue AR",
    issNowTab: "Traqueur",
    resourcesTab: "Ressources",
    settingsTab: "Paramètres",
  },
  onboarding: {
    splash: {
      title: "Repérer la\nStation",
      subTitle: "Regardez dans le ciel et voyez la Station spatiale internationale",
    },
    completeProfile: {
      notification: {
        title: "Paramètres de notification",
        label: "Obtenez des alertes de notification push",
        tip: "Obtenez des alertes lorsque la station spatiale s’approche de votre localisation.",
        nextButton: "Suivant",
      },
      location: {
        title: "Votre localisation",
        subtitle:
          "Veuillez permettre à l'application de détecter automatiquement votre localisation ou veuillez fournir votre localisation manuellement.",
        detectButton: "Détecter ma localisation",
        orLabel: "ou",
        selectLocation: "Entrez votre localisation",
        detecting: "Détection de localisation ...",
        doneButton: "Terminé",
        serviceAlertTitle: "Services de localisation désactivés",
        serviceAlertBody: "Veuillez authoriser vos services de localisation pour continuer.",
        permissionAlertTitle: "Permission non accordée",
        permissionAlertBody:
          "Nous utilisons des données de localisation pour calculer les observations à venir dans votre localisation actuelle. Veuillez accorder des autorisations de localisation pour activer cette fonctionnalité.",
      },
    },
  },
  homeScreen: {
    initLoader: {
      message:
        "Les données Station sont en train de charger… cela peut prendre un moment pour aboutir.",
      trajectoryError:
        "Les données de trajectoire Station sont actuellement indisponibles en raison de la maintenance du serveur. S'il vous plaît, veuillez reessayer plus tard.",
      noNetwork:
        "Les données de trajectoire Station sont actuellement indisponibles en raison d'une absence de connexion. S'il vous plaît, veuillez reessayer plus tard.",
    },
    header: {
      firstTimeHead: "LISTE DES PROCHAINES OBSERVATIONS",
      secondTimeHead: "COMPTE À REBOURS",
      timezone: "Fuseau horaire",
    },
    selectLocation: {
      title: "Sélectionnez la localisation",
      inputPlaceholder: "Localisation de recherche par ville, localisation enregistrée ...",
      current: "Localisation actuelle",
      saved: "Localisations enregistrées",
      nearby: "Localisations à proximité",
      search: "Résultats de recherche",
      cta: "Personnaliser les notifications pour cette localisation",
      actionTitle: "Alerte",
      refresh: "Rafraîchir",
    },
    selectSightings: {
      title: "Observations à venir",
      sightings: "Observations",
      selectMessage: "Sélectionnez des événements pour lesquels vous souhaitez être averti.",
      switch: "Me notifier pour tous les événements à venir à cette localisation.",
      aboveHorizon: "Au-dessus de l'horizon",
      maxHeight: "Hauteur maximale de",
      today: "Aujourd'hui",
      tomorrow: "Demain",
      appears: "Apparaît",
      disappears: "Disparaît",
      all: "Tout",
      timeOfDay: "Moment de la journée",
      night: "Nuit",
      twilight: "Crépuscule",
      duration: "Durée",
      shorterThan2: "moins de 2 minutes",
      longerThan2: "2 minutes et plus",
      empty:
        "Il n'y a aucune observation potentielle de la Station pour cet emplacement de {{start}} à {{end}}.",
      shareTitle: "La station passe au-dessus de {{location}} le {{date}}",
      shareLink:
        "Pour explorer plus et suivre la station en réalité augmentée, téléchargez l'application sur",
      coach: {
        title: "Description des icônes",
        moon: "Ce sera la nuit à la localisation sélectionnée lorsque la Station sera au-dessus de l'horizon.",
        sunset:
          "Ce sera le crépuscule à la localisation sélectionnée lorsque la Station sera au-dessus de l'horizon.",
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
        SSW: "SSO",
        SW: "SO",
        WSW: "OSO",
        W: "O",
        WNW: "ONO",
        NW: "NO",
        NNW: "NNO",
      },
    },
    coachMarks: {
      skip: "Passer le tour",
      next: "Suivant",
      finish: "Terminer",
      dismiss: "Rejeter",
      locationTitle: "Changer de localisation",
      locationData:
        "Vous pouvez sélectionner ou modifier votre localisation pour une autre directement ici.",
      sightingsTitle: "Prochaine observation et compte à rebours",
      sightingsData:
        "Cette section vous montre la date et un compte à rebours pour la prochaine observation Station à venir près de votre localisation sélectionnée. Vous pouvez appuyer sur la prochaine case d'observation pour voir une liste complète des prochaines observations.",
      globeTitle: "Terre interactive",
      globeData:
        "Vous pouvez afficher la position de la Station en temps réel en touchant l’écran. Cela vous permet d’interagir avec la carte de la terre et de suivre en temps réel l’emplacement de la station.",
      mapTitle: "Vue de carte 2D",
      mapData:
        "Cette section montre une représentation 2D du chemin complet de la Station à travers les régions jour et nuit de la Terre.",
      navigationTitle: "Navigation",
      navigationData:
        "Vous pouvez parcourir les différentes fonctionnalités de l'application à partir du menu de navigation ci-dessous.",
    },
  },
  issView: {
    timeHeader: "Compte à rebours",
    cameraPermissionText:
      "Vous n'avez pas autorisé l'utilisation de l'appareil photo de votre téléphone. Cliquez ici pour authoriser.",
    issCaptured: "Capturez ce moment",
    details: {
      title: "Information",
      orbitalSpeed: "Vitesse orbitale",
      longitude: "Longitude",
      latitude: "Latitude",
      altitude: "Altitude",
      crewOnboard: "Nombre typique d'équipage à bord",
      launched: "L'assemblage a commencé",
      launchedValue: "20 novembre 1998",
      mass: "Masse estimée",
      dimensions: "Dimensions estimées",
      orbitalPeriod: "Période orbitale",
      orbitsPerDay: "Orbites / jour",
      dimensionsValue: "109 m de large x 73 m de long x 14 m de haut",
      dateTime: "Date et Heure",
      maxHeight: "Hauteur Maximale",
      duration: "Durée au-dessus de l'Horizon",
      appears: "Apparaît",
      disappears: "Disparaît",
      distance: "Distance",
      nextSighting: "Prochaine Observation",
    },
    arNotSupported: "La AR n'est pas prise en charge sur cet appareil",
    noOrientationSensor: "Capteur d'orientation non disponible",
    noMagnetometerSensor: "Le magnétomètre n'est pas disponible",
    screenshotError: "Impossible de capturer la capture d'écran",
    coachMarks: {
      circleTitle: "Repérer la Station",
      circleData:
        "Pour repérer la station, déplacez votre téléphone dans la direction de la flèche à l'extérieur du cercle. À mesure que vous vous rapprochez, la couleur du cercle passera au vert.",
      compassTitle: "Boussole",
      compassData:
        "Cette boussole vous indique la direction dans laquelle vous regardez, ainsi que la direction relative dans laquelle vous pouvez repérer la station.",
      infoTitle: "Information",
      infoData:
        "Cet interrupteur ouvre ou ferme la fenêtre avec des informations détaillées sur la prochaine observation en cours ou à venir et des informations en direct sur la station.",
      trajectoryTitle: "Trajectoire de la Station",
      trajectoryData:
        "Cet interrupteur active ou désactive la trajectoire de la station à l'écran. La ligne pleine montre le passé et la ligne en pointillé montre la trajectoire future de la station.",
      arTitle: "Vue AR",
      arData: "Cet interrupteur permet de basculer entre les vues AR en plein écran et partielles.",
      shareTitle: "Partager",
      shareData:
        "Ce bouton vous permet de partager une capture d'écran de la vue AR via un message texte, un e-mail ou les médias sociaux.",
      screenshotTitle: "Capture d'écran",
      screenshotData:
        "Ce bouton vous permet de capturer une capture d'écran de la vue AR à enregistrer dans votre galerie de photos.",
      videoTitle: "Enregistrement vidéo",
      videoData:
        "Ce bouton vous permet d'enregistrer une vidéo de la vue AR pour capturer les moments où vous repérez la station.",
    },
    safetyReminder: {
      title: "Attention : Rappel de sécurité",
      subtitle1: "Supervision parentale recommandée :",
      body1:
        "Veuillez vous rappeler de l'importance de la supervision parentale lors de l'utilisation de l'écran AR dans cette application. Les enfants doivent utiliser cette fonctionnalité sous la direction d'un adulte responsable pour garantir une expérience sûre et appropriée.",
      subtitle2: "Restez attentif à votre environnement :",
      body2:
        "Pendant que vous profitez de l'expérience de réalité augmentée, restez toujours conscient de votre environnement physique. Faites attention aux obstacles, au terrain irrégulier ou à tout autre danger pouvant présenter un risque pour votre sécurité. Votre sécurité est primordiale, alors veuillez faire preuve de prudence et de vigilance en tout temps.",
      home: "Retour à l'accueil",
      ok: "J'ai compris",
    },
  },
  settings: {
    header: "Paramètres",
    locationSettings: "Les paramètres de localisation",
    notificationSettings: "Paramètres de notification",
    termsAndConditions: "Termes et conditions",
    contactUs: "Contactez-nous",
    language: "Langue",
    calibrateCompass: "Calibrage de la boussole",
    calibrateCompassData: {
      instructions:
        "Pour calibrer la boussole, faites pivoter votre appareil plusieurs fois en un motif en forme de 8.",
      accuracy: "Précision du capteur:",
      low: "Faible",
      medium: "Moyenne",
      high: "Élevée",
    },
    tutorials: "Tutoriels",
    tutorialsData: {
      description:
        "Voulez-vous revoir les tutoriels étape par étape des pages d'accueil et de vue AR une fois de plus?",
      homePage: "Page d'accueil",
      arPage: "Vue AR",
    },
    termsAndConditionsData: {
      backButton: "Paramètres",
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
      backButton: "Paramètres",
      title: "Contactez-nous",
      titlePlaceholder: "Choisir le titre",
      commentsPlaceholder: "Commentaires d'entrée",
      sendButton: "Envoyer",
      contactUsOptions: {
        reportAnIssue: "Signaler un problème",
        improvementIdeas: "Idées d'amélioration",
        generalQuestions: "Questions générales",
        comments: "Commentaires",
      },
    },
    notificationSettingsData: {
      backButton: "Paramètres",
      notificationTitle: "Paramètres de notification",
      privacyTitle: "Paramètres de confidentialité",
      upcomingLabel: "Evènements à venir",
      customizeLabel: "Personnaliser les notifications",
      upcomingTip: "Desactivez pour arrêter de recevoir des notifications d'événements.",
      notifyMeBefore: "Informez-moi avant",
      turnOffNotifications: "DÉSACTIVER LES NOTIFICATIONS",
      rangeInputPlaceholder: "Choisissez entre 1 à 120 minutes",
      customOption: "Personnalisé",
      from: "Depuis",
      until: "Jusqu'à",
    },
    locationSettingsData: {
      backToSettings: "Paramètres",
      goBack: "Retour",
      generalTitle: "Les paramètres de localisation",
      cta: "Personnaliser les notifications pour cette localisation",
      locationPermission: "Autorisation de localisation",
      addNewLocation: {
        generalTitleAdd: "Ajouter une nouvelle localisation",
        generalTitleEdit: "Modifier la localisation",
        confirnModalButton: "Confirmer",
        saveButton: "Enregistrer la localisation",
        searchInputPlaceholder: "Entrez la ville, le code postal ou l'adresse",
        nameInputPlaceholder: "Enregistrer le nom de la localisation",
      },
      removeLocation: {
        question: "Êtes-vous sûr de supprimer cette localisation?",
        cancelButton: "Annuler",
        removeButton: "Supprimer",
      },
    },
    share: "Partager",
    shareLink:
      "Pour suivre la Station spatiale internationale via la réalité augmentée, téléchargez l'application mobile NASA Spot The Station à",
    localCalculations: "Calculs locaux",
  },
  resources: {
    header: "Ressources",
    goBack: "Retour",
    news: {
      title: "Nouvelles de la Station",
      searchPlaceholder: "Rechercher des articles, événements, etc...",
      suggestions: "SUGGESTIONS",
      searchResults: "Résultats de recherche",
    },
    spotTheStation: {
      title: "Comment repérer la station ?",
    },
    about: {
      title: "À propos de la Station",
    },
    details: {
      title: "Détails de la Station",
    },
    faq: {
      title: "Questions Fréquemment Posées",
      questions: {
        question1: "1. Pourquoi la Station Spatiale est-elle là-haut ?",
        answer1:
          "La Station Spatiale Internationale est le seul laboratoire de microgravité de la Terre. Cette plateforme de la taille d'un terrain de football accueille une multitude d'expériences scientifiques et technologiques qui sont continuellement menées par les membres de l'équipage ou sont automatisées. La recherche à bord du laboratoire en orbite offre des avantages pour la vie sur Terre, ainsi que pour l'exploration spatiale future. La Station Spatiale sert de banc d'essai pour les technologies et nous permet d'étudier les impacts des vols spatiaux de longue durée sur les humains, soutenant la mission de la NASA d'étendre la présence humaine plus loin dans l'espace. Pour en savoir plus sur la recherche en cours sur la Station Spatiale et les opportunités de mener vos expériences scientifiques là-bas, veuillez <a href='https://www.nasa.gov/international-space-station/'>cliquer ici</a>.",
        question2: "2. À quelle vitesse voyage la Station Spatiale ?",
        answer2:
          "La Station fait le tour de la Terre toutes les 90 minutes. Elle voyage à environ 17 500 miles (28 000 km) par heure, ce qui donne à l'équipage 16 levers et couchers de soleil chaque jour. En plus de 15 ans de présence humaine à bord, la Station a fait le tour de la Terre des dizaines de milliers de fois. Vous pouvez voir plus de faits sur la Station sur <a href='https://www.nasa.gov/international-space-station/space-station-facts-and-figures/'>cette page web</a>.",
        question3: "3. À quelle fréquence puis-je m'attendre à voir la Station Spatiale ?",
        answer3:
          "La Station Spatiale est visible car elle reflète la lumière du Soleil, pour la même raison que nous pouvons voir la Lune. Cependant, contrairement à la Lune, la Station Spatiale n'est pas assez lumineuse pour être vue pendant la journée. Elle ne peut être vue que lorsqu'il fait aube ou crépuscule à votre emplacement. Ainsi, cela peut varier d'une opportunité d'observation par mois à plusieurs par semaine, car il doit faire sombre là où vous êtes, et la Station Spatiale doit passer au-dessus.",
        question4: "4. Qu'est-ce que l'application mobile Spot the Station ?",
        answer4:
          "L'application mobile Spot the Station est une application officielle de la NASA qui aide les utilisateurs à suivre et à recevoir des notifications pour les observations de la Station Spatiale Internationale lorsqu'elle passe au-dessus de leur emplacement. Elle fournit un suivi en temps réel, des horaires d'observation et des alertes.",
        question5: "5. Comment télécharger l'application mobile Spot the Station ?",
        answer5:
          "Vous pouvez télécharger l'application à la fois sur l'Apple App Store <a href='https://apps.apple.com/us/app/spot-the-station/id6449235044'>ici</a> et sur le Google Play Store <a href='https://play.google.com/store/apps/details?id=gov.nasa.hq.SpotTheStation&hl=en_US&pli=1'>ici</a>.",
        question6:
          "6. Comment l'application me notifie-t-elle des prochaines observations de la Station ?",
        answer6:
          "L'application envoie des notifications push pour vous alerter des prochaines observations de la Station, y compris la date, l'heure, la durée et les conditions de visibilité spécifiques à votre emplacement. Assurez-vous d'avoir activé les autorisations de notifications pour cette application dans les paramètres de votre téléphone.",
        question7: "7. Puis-je personnaliser les notifications dans l'application ?",
        answer7:
          "Oui, vous pouvez personnaliser les paramètres d'alerte dans l'application pour recevoir des notifications basées sur votre emplacement préféré, les conditions d'observation et même des horaires spécifiques qui vous conviennent le mieux.",
        question8: "8. Que dois-je faire si je ne reçois pas de notifications ?",
        answer8:
          "Si vous ne recevez pas d'alertes, assurez-vous que les notifications sont activées dans les paramètres de votre appareil. Vérifiez également les préférences de notification de l'application pour confirmer que vous avez configuré des alertes pour votre emplacement choisi et votre horaire préféré.",
        question9: "9. L'application fonctionne-t-elle à l'international ?",
        answer9:
          "Oui, l'application Spot the Station est disponible dans le monde entier et fournit des informations d'observation pour la plupart des lieux habités, ce qui facilite la visualisation de la Station depuis presque n'importe où.",
        question10:
          "10. Pourquoi n'y a-t-il pas d'opportunités d'observation pour mon emplacement ?",
        answer10:
          "Il doit faire sombre là où vous êtes et la Station Spatiale doit être au-dessus pour que vous puissiez la voir. Étant donné que l'orbite de la Station Spatiale la conduit autour du globe, elle peut passer au-dessus de vous à des moments où elle ne sera pas visible, soit en plein jour, soit en pleine nuit. Spot The Station n'enverra des notifications que lorsque vous aurez l'opportunité de voir la Station Spatiale, pas chaque fois qu'elle sera au-dessus.",
        question11: "11. Ai-je besoin d'un télescope pour voir la Station Spatiale ?",
        answer11:
          "Non, vous pouvez voir la Station Spatiale à l'œil nu, aucun équipement n'est requis.",
        question12:
          "12. La Station apparaît-elle puis disparaît-elle à cause de la lumière de la Lune ?",
        answer12:
          "La Station Spatiale est visible car elle reflète la lumière du Soleil. C'est la même raison pour laquelle la Lune semble briller. Même lorsque la Lune ne s'est pas levée, vous pourrez toujours voir la Station Spatiale.",
        question13: "13. Quel fuseau horaire est utilisé pour les notifications d'alerte ?",
        answer13:
          "Toutes les informations de Spot The Station sont listées dans le fuseau horaire local pour l'emplacement sélectionné. Spot The Station s'ajuste automatiquement à l'heure d'été.",
        question14: "14. Quelles informations l'application fournit-elle pour chaque observation ?",
        answer14:
          "Pour chaque observation, l'application affiche l'heure, la durée de visibilité, la hauteur maximale et les directions où la Station apparaîtra et disparaîtra, vous aidant à la localiser avec précision dans le ciel.",
        question15:
          "15. Comment repérer la Station lors de chaque observation ? Que signifient toutes ces informations d'observation ?",
        answer15:
          "L'application fournit une liste des Prochaines Observations si vous appuyez sur la Liste des Prochaines Observations sur la page d'accueil.<br/><strong>Date et heure</strong> est le moment où l'opportunité d'observation commencera dans votre fuseau horaire local. Toutes les observations auront lieu quelques heures avant ou après le lever ou le coucher du soleil. C'est la période d'observation optimale car le soleil se reflète sur la Station Spatiale et contraste avec le ciel plus sombre.<br/><strong>Au-dessus de l'horizon</strong> est la période maximale pendant laquelle la Station Spatiale est visible avant de repasser sous l'horizon.<br/><strong>Hauteur maximale</strong> est mesurée en degrés (également connue sous le nom d'élévation). Elle représente la hauteur de la Station Spatiale par rapport à l'horizon dans le ciel nocturne. L'horizon est à zéro degré, et directement au-dessus est à quatre-vingt-dix degrés. Si vous tenez votre poing à bout de bras et placez votre poing reposant sur l'horizon, le sommet sera à environ 10 degrés.<br/><strong>Apparaît</strong> est l'endroit dans le ciel où la Station sera visible en premier. Cette valeur, comme la hauteur maximale, est également mesurée en degrés par rapport à l'horizon. Les lettres représentent les directions de la boussole : N est nord, ONO est ouest-nord-ouest, et ainsi de suite.<br/><strong>Disparaît</strong> représente où dans le ciel nocturne la Station Spatiale Internationale quittera votre champ de vision.<img src='https://spotthestation.nasa.gov/images/astro_horizon.png' />",
        question16:
          "16. Le calendrier de survol indique que la Station Spatiale apparaît et disparaît de la même direction, comment est-ce possible ? Par exemple - Heure : Lun 15 juil 23:57, Visible : 2 min, Hauteur max : 51°, Apparaît : 51° au-dessus de ENE, Disparaît : 11° au-dessus de ENE",
        answer16:
          "Le logiciel Spot the Station arrondit les directions aux directions cardinales et intercardinales les plus proches. Cela peut donner l'impression que la Station apparaîtra et disparaîtra dans la même direction même si elle traverse le ciel. Cela se produit généralement lors de survols avec une courte fenêtre de visibilité car la Station entre rapidement dans (ou sort de) l'ombre sombre de la Terre où, depuis notre emplacement au sol, nous ne pouvons pas observer son passage complet à travers le ciel.",
        question17: "17. Puis-je voir une carte en direct de l'emplacement de la Station ?",
        answer17:
          "Oui, l'application inclut une carte en temps réel montrant la position actuelle de la Station alors qu'elle orbite autour de la Terre, vous donnant une référence visuelle pour suivre sa progression.",
        question18: "18. Quelle est la fonctionnalité AR dans l'application Spot the Station ?",
        answer18:
          "La fonctionnalité de Réalité Augmentée (AR) dans l'application Spot the Station permet aux utilisateurs de voir une superposition virtuelle du chemin de la Station Spatiale Internationale dans le ciel. Cette fonctionnalité aide les utilisateurs à localiser la Station plus précisément en alignant leur appareil avec la position en temps réel de la Station.",
        question19: "19. Comment accéder à la fonctionnalité AR dans l'application ?",
        answer19:
          "Pour accéder à la fonctionnalité AR, ouvrez l'application et naviguez vers l'option Vue AR dans le menu inférieur. Suivez les instructions à l'écran pour aligner la caméra de votre appareil avec le ciel, où l'application affichera une superposition virtuelle indiquant la position et la trajectoire de la Station.",
        question20:
          "20. Ai-je besoin d'un appareil ou d'un logiciel spécifique pour utiliser la fonctionnalité AR ?",
        answer20:
          "La fonctionnalité AR nécessite un appareil capable de déterminer son orientation dans l'espace 3D. Elle nécessite un support matériel spécifique, tel qu'un gyroscope ou un coprocesseur de mouvement. Les appareils plus anciens ou économiques peuvent ne pas prendre en charge cette fonctionnalité.",
        question21: "21. Comment fonctionne la fonctionnalité AR ?",
        answer21:
          "En utilisant la caméra et les capteurs de votre appareil, la fonctionnalité AR superpose la position de la Station dans le ciel sur votre écran, s'ajustant en temps réel à mesure que vous déplacez votre appareil. L'application vous guide pour pointer votre caméra dans la bonne direction et vous montre où la Station apparaîtra et disparaîtra.",
        question22: "22. Puis-je utiliser la fonctionnalité AR à la fois de jour et de nuit ?",
        answer22:
          "Oui, vous pouvez utiliser la fonctionnalité AR à la fois de jour et de nuit ; cependant, la meilleure expérience est généralement au crépuscule ou la nuit lorsque la Station est visible à l'œil nu. La superposition AR fonctionnera indépendamment des conditions de lumière, mais les observations réelles dépendent de la visibilité.",
        question23: "23. La superposition AR est-elle précise pour tous les emplacements ?",
        answer23:
          "Oui, la fonctionnalité AR est conçue pour fournir des informations de position précises basées sur votre emplacement GPS. Cependant, la précision peut légèrement varier en fonction de la calibration de la boussole et des capteurs de votre appareil. Si vous remarquez des écarts, recalibrez la boussole de votre appareil via les Paramètres.",
        question24:
          "24. La fonctionnalité AR peut-elle aider avec les heures d'observation exactes ?",
        answer24:
          "La fonctionnalité AR vous guide visuellement pour localiser la Station au moment précis où elle apparaît dans le ciel. Associée aux alertes d'observation de l'application, elle améliore votre capacité à voir la Station en vous donnant une direction visuelle en direct et un indicateur de hauteur pour la suivre précisément.",
        question25: "25. Y a-t-il des conseils pour optimiser mon expérience AR ?",
        answer25:
          "Pour la meilleure expérience AR, utilisez la fonctionnalité dans un espace ouvert avec une vue dégagée du ciel. Évitez les obstructions comme les grands bâtiments ou les arbres, car ils peuvent bloquer la visibilité. Calibrez la boussole de votre appareil et assurez-vous que les services de localisation et les autorisations de la caméra sont activés pour un fonctionnement fluide.",
        question26: "26. La fonctionnalité AR est-elle disponible sur Android et iOS ?",
        answer26:
          "Oui, la fonctionnalité AR est disponible sur les versions iOS et Android de l'application, tant que votre appareil répond aux exigences matérielles.",
        question27: "27. L'application fonctionne-t-elle hors ligne ?",
        answer27:
          "Certaines fonctionnalités de base, comme l'accès aux horaires d'observation précédemment téléchargés ou la réception de notifications programmées, peuvent fonctionner hors ligne. Cependant, les fonctionnalités nécessitant des données en temps réel, comme le suivi, nécessitent une connexion Internet.",
        question28: "28. Y a-t-il des exigences spéciales pour utiliser l'application ?",
        answer28:
          "L'application nécessite une connexion Internet active pour le suivi en temps réel et les alertes. De plus, pour obtenir des informations spécifiques à l'emplacement, assurez-vous que les services de localisation de votre appareil sont activés pour l'application.",
        question29: "29. L'application est-elle gratuite ?",
        answer29:
          "Oui, l'application Spot the Station est gratuite à télécharger et à utiliser, sans achats intégrés ni abonnements.",
        question30: "30. Qui puis-je contacter pour le support de l'application ?",
        answer30:
          "Pour obtenir de l'aide avec l'application Spot the Station, visitez la page de support de la NASA ou contactez-nous via l'option de retour d'information dans l'application.",
      },
    },
    astronauts: {
      title: "Qui est dans la Station maintenant?",
      number: "Nombre de personnes :",
    },
    live: {
      title: "Diffusion en Direct",
      description:
        "Actuellement, une vidéo en direct de la Terre est diffusée depuis une caméra HD externe montée sur l'ISS. La caméra regarde vers la Terre avec un panneau solaire occasionnel passant à travers la vue.",
    },
    tour: {
      title: "Visite Virtuelle",
    },
    videos: {
      title: "Vidéos de la Station",
    },
    gallery: {
      title: "Galerie",
    },
  },
}

export default fr
export type Translations = typeof fr
