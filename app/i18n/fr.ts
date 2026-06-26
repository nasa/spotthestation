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
    bodyGallery:
      "Pour utiliser cette fonctionnalité, vous devez accorder la permission d'accéder à la galerie.",
    bodyCalendar: "Pour utiliser cette fonctionnalité, vous devez autoriser l'accès au calendrier.",
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
    body: "Merci de nous contacter. Nous avons bien reçu votre message et traiterons votre demande. Veuillez noter que cette application ne collecte pas de données utilisateur, nous ne pouvons donc pas répondre à tous les messages individuellement. Veuillez visiter la page des Questions Fréquemment Posées pour voir s'il y a une réponse à votre question.",
    dismiss: "Rejeter",
    faq: "FAQ",
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
      subTitleIos: "La Station passe au-dessus de vous",
      subTitleAndroid: "La station passe au-dessus de vous ({{time}})",
    },
    before: {
      title: "Repérez la station dans {{amount}} {{units}} !",
      subTitleIos: "La station passera au-dessus de vous dans {{amount}} {{units}} à {{location}}",
      subTitleAndroid:
        "La station passera au-dessus de vous dans {{amount}} {{units}} ({{time}}) à {{location}}",
      minutes: "minutes",
      hours: "heures",
    },
    timeLeft: "TEMPS RESTANT",
  },
  units: {
    minute: "min",
    kilometer: "km",
    kilogram: "kg",
    month: "mois",
    metersPerSecond: "M/S",
    time: "T",
    hour: "h",
    mile: "mi",
    foot: "ft",
    meter: "m",
    pound: "lbs",
    milesPerHour: "mph",
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
      firstTimeHead: "PROCHAINE OBSERVATION",
      secondTimeHead: "COMPTE À REBOURS",
      timezone: "Fuseau horaire",
      opportunities: "Observations",
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
      upcomingSightings: "Observations à venir",
      pastSightings: "Observations Passées",
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
      between2And4: "entre 2 et 4 minutes",
      longerThan4: "4 minutes et plus",
      empty:
        "Il n'y a aucune observation potentielle de la Station pour cet emplacement de {{start}} à {{end}}.",
      shareTitle: "La station passe au-dessus de {{location}} le {{date}}",
      shareAllTitle: "La Station passe au-dessus de {{location}} :",
      shareLink:
        "Pour explorer plus et suivre la station en réalité augmentée, téléchargez l'application sur",
      calendarEventTitle: "Repérez la station à {{location}} !",
      calendarSuccess: "Événement de calendrier créé avec succès",
      calendarError: "Impossible de créer l'événement de calendrier",
      coach: {
        title: "Description des icônes",
        moon: "Ce sera la nuit à la localisation sélectionnée lorsque la Station sera au-dessus de l'horizon.",
        sunset:
          "Ce sera le crépuscule à la localisation sélectionnée lorsque la Station sera au-dessus de l'horizon.",
      },
      cloudCover: {
        title: "Couverture nuageuse",
        any: "N'importe quel",
        low: "Faible (<25%)",
        medium: "Moyenne (25-50%)",
      },
      shareAll: "Partager la liste des observations",
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
        "Cette section vous montre la date/heure et un compte à rebours pour la prochaine observation Station à venir près de votre localisation sélectionnée. Vous pouvez appuyer sur la case Observations pour voir une liste complète des observations passées récentes et des prochaines observations.",
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
      dimensionsValue: "{{width}} de large x {{length}} de long x {{height}} de haut",
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
    timeFormat: "Format de l'heure",
    unitsOfMeasurement: "Unités",
    metric: "Métrique",
    imperial: "Impérial (US)",
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
      reportIssueHint:
        "Veuillez inclure une description du problème, ainsi que le lieu sélectionné et la date et l'heure de l'opportunité d'observation de la station, afin que notre équipe d'assistance puisse mieux reproduire et diagnostiquer le problème signalé.",
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
    sightings: {
      title: "Observations à venir",
    },
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
      searchPlaceholder: "Rechercher des questions...",
      questions: {
        question1: "1. Pourquoi la Station spatiale internationale est-elle là-haut ?",
        answer1:
          "La Station spatiale internationale est une convergence de science, de technologie et d'innovation humaine qui permet des recherches impossibles sur Terre pour le bénéfice de l'humanité. Depuis plus de 24 ans, la NASA soutient une présence humaine continue des États-Unis à bord de la station, grâce à laquelle les astronautes ont appris à vivre et à travailler dans l'espace pendant de longues périodes.<br/>" +
          "La station spatiale – qui implique les États-Unis, la Russie, le Canada, le Japon et les pays participants de l'ESA (Agence spatiale européenne) – est l'une des collaborations internationales les plus complexes et interdépendantes jamais tentées. Elle réunit des équipages de vol internationaux et plusieurs fournisseurs de transport spatial, ainsi que des équipes de soutien réparties dans le monde entier, des installations, des réseaux de communication et la communauté scientifique mondiale.<br/>" +
          "Au cours des 24 dernières années, la station spatiale s'est transformée en un laboratoire en orbite avec des capacités de recherche qui permettent à des scientifiques de plus de 109 nations de mener plus de 4 000 expériences révolutionnaires dans un environnement de vol spatial extrême et unique.<br/>" +
          "La station spatiale sert de tremplin pour développer une économie en orbite basse et les prochains grands sauts de la NASA en exploration, y compris les missions vers la Lune sous Artemis et, finalement, l'exploration humaine de Mars.<br/>" +
          "En savoir plus sur la Station spatiale internationale, ses recherches et son équipage sur :<br/>" +
          "<a href='https://www.nasa.gov/station'>https://www.nasa.gov/station</a>",

        question2: "2. À quelle vitesse voyage la Station spatiale internationale ?",
        answer2:
          "La Station spatiale internationale orbite autour de la Terre toutes les 90 minutes. Elle voyage à environ 28 000 kilomètres par heure, ce qui permet à l'équipage à bord de voir 16 levers et couchers de soleil chaque jour. Les équipages occupent la station spatiale en continu depuis novembre 2000. Pendant ce temps, 280 personnes de 23 pays ont visité le poste orbital, et la station a fait le tour de la Terre des centaines de milliers de fois.",

        question3:
          "3. À quelle fréquence puis-je m'attendre à voir la Station spatiale internationale ?",
        answer3:
          "La Station spatiale internationale est visible car elle reflète la lumière du soleil – pour la même raison que nous pouvons voir la Lune. Cependant, contrairement à la Lune, la station spatiale n'est pas assez lumineuse pour être vue pendant la journée. Les opportunités d'observation peuvent varier d'une fois par mois à plusieurs fois par semaine, car la lumière du Soleil se reflète sur la station lorsqu'elle passe au-dessus à l'aube et au crépuscule à votre emplacement.<br/>" +
          "L'application mobile calcule et affiche les observations à venir pour les 14 prochains jours. Depuis mai 2026, le site web Spot the Station de la NASA a rétabli la fonctionnalité permettant de trouver les opportunités d'observation de la Station directement depuis votre navigateur, sans application : <a href='https://www.nasa.gov/spot-the-station/'>https://www.nasa.gov/spot-the-station/</a> Choisissez votre pays et votre région/ville pour voir les opportunités d'observation à venir pour les 14 prochains jours.",

        question4: "4. Qu'est-ce que l'application Spot the Station ?",
        answer4:
          "L'application mobile Spot the Station est une application officielle de la NASA qui aide les utilisateurs à suivre et à recevoir des notifications pour les observations de la Station spatiale internationale lorsqu'elle passe au-dessus de leur emplacement respectif. Elle fournit également un suivi en temps réel, des horaires de survol et des alertes.",

        question5: "5. Comment télécharger l'application mobile Spot the Station ?",
        answer5:
          "L'application mobile Spot the Station est disponible sur les appareils mobiles et tablettes iOS et Android.",

        question6:
          "6. Comment l'application Spot the Station me notifie-t-elle des prochaines opportunités d'observation de la Station spatiale internationale ?",
        answer6:
          "L'application Spot the Station envoie des notifications push pour alerter les utilisateurs des prochains passages de la Station spatiale internationale. Les utilisateurs doivent s'assurer que les autorisations de notification de l'application sont activées dans les paramètres de leur appareil. Notez que l'application calcule les observations pour votre emplacement sélectionné pour les 14 prochains jours, vous pourriez donc cesser de recevoir des notifications si vous n'utilisez pas l'application pendant un certain temps.",

        question7:
          "7. Puis-je personnaliser les notifications dans l'application Spot the Station ?",
        answer7:
          "L'application Spot the Station a la capacité de configurer des alertes personnalisées pour recevoir des notifications push spécifiques à l'emplacement et au moment préféré de l'utilisateur. Les paramètres de notification se trouvent sur la page des paramètres de l'application, où les utilisateurs peuvent activer les notifications pour tous les événements à venir ou personnaliser les notifications pour l'emplacement actuellement sélectionné. Les utilisateurs peuvent personnaliser les notifications pour d'autres emplacements via les paramètres de localisation. Vous pouvez accéder à la page Observations depuis la page d'accueil pour activer/désactiver les notifications pour chaque prochaine opportunité d'observation à votre emplacement sélectionné.",

        question8: "8. Que dois-je faire si je ne reçois pas de notifications ?",
        answer8:
          "Les utilisateurs doivent vérifier les préférences de notification dans l'application Spot the Station (Paramètres de notification sur la page des paramètres) pour confirmer que l'appareil est configuré pour les alertes à un emplacement et un moment préférés. Si les utilisateurs ne reçoivent toujours pas d'alertes, ils doivent s'assurer que les notifications sont activées dans les paramètres de leur appareil. Veuillez noter que l'application calcule les observations pour votre emplacement sélectionné pour les 14 prochains jours chaque fois que vous ouvrez l'application, vous pourriez donc cesser de recevoir des notifications si vous ne la consultez pas régulièrement.",

        question9: "9. L'application Spot the Station fonctionne-t-elle à l'international ?",
        answer9:
          "L'application Spot the Station est disponible dans le monde entier et en plusieurs langues, y compris l'anglais, le néerlandais, le français, l'allemand, l'hindi, l'italien, le japonais, le polonais, le portugais (Brésil), le russe, l'espagnol, le turc et l'ukrainien. L'application fournit des informations d'observation pour la plupart des lieux habités, ce qui facilite la visualisation de la Station spatiale internationale lorsqu'elle passe au-dessus de presque n'importe où.",

        question10:
          "10. Pourquoi n'y a-t-il pas d'opportunités d'observation pour mon emplacement ?",
        answer10:
          "Il doit faire sombre avec une bonne visibilité à votre emplacement et la station spatiale doit être au-dessus de vous pour la voir. Étant donné que l'orbite de la station spatiale la conduit autour du globe, elle peut passer au-dessus à des moments où elle ne sera pas visible – soit en plein jour, soit en pleine nuit lorsqu'elle est masquée par l'ombre de la Terre. Spot The Station enverra des notifications uniquement lorsqu'il y aura des opportunités de voir la Station spatiale internationale à votre emplacement, pas chaque fois qu'elle sera au-dessus. Les observations sont calculées jusqu'à 14 jours à l'avance, alors consultez régulièrement pour découvrir les nouvelles opportunités prévues.",

        question11:
          "11. Ai-je besoin d'un télescope pour voir la Station spatiale internationale ?",
        answer11:
          "Non, les utilisateurs peuvent voir la Station spatiale internationale à l'œil nu, aucun équipement supplémentaire n'est requis.",

        question12:
          "12. La Station spatiale internationale apparaît-elle et disparaît-elle à cause de la lumière de la Lune ?",
        answer12:
          "La Station spatiale internationale est visible car elle reflète la lumière du soleil, tout comme la Lune. Lorsque la station se déplace autour de la Terre, elle entre et sort de l'ombre de la Terre. Lorsqu'elle entre dans l'ombre de la Terre, elle n'est pas visible, même si elle est peut-être encore en orbite au-dessus de vous.",

        question13: "13. Quel fuseau horaire est utilisé pour les notifications d'alerte ?",
        answer13:
          "Tout le contenu de l'application Spot the Station est répertorié dans le fuseau horaire local pour l'emplacement sélectionné par l'utilisateur. L'application s'ajuste automatiquement à l'heure d'été.",

        question14:
          "14. Quelles informations l'application Spot the Station fournit-elle pour chaque observation ?",
        answer14:
          "Pour chaque observation, l'application Spot the Station affiche l'heure, la durée de visibilité au-dessus de l'horizon, la hauteur maximale au-dessus de l'horizon, les directions où la Station spatiale internationale apparaîtra et disparaîtra, et la couverture nuageuse prévue pour l'emplacement sélectionné au moment de l'observation, aidant les utilisateurs à la localiser avec précision dans le ciel.",

        question15:
          "15. Comment repérer la Station spatiale internationale lors d'une opportunité d'observation ? Que signifient toutes ces informations ?",
        answer15:
          "L'application Spot the Station fournit une liste des « Prochaines observations » si les utilisateurs appuient sur la « Liste des prochaines observations » sur la page d'accueil.<br/>" +
          "<strong>Date et heure</strong> est le moment où l'opportunité d'observation commencera dans le fuseau horaire local. Tous les passages se produiront dans les quelques heures avant ou après le lever ou le coucher du soleil. C'est la période d'observation optimale car le Soleil se reflète sur la Station spatiale internationale et contraste avec le ciel plus sombre.<br/>" +
          "<strong>Au-dessus de l'horizon</strong> est la période maximale pendant laquelle la station est visible avant de repasser sous l'horizon.<br/>" +
          "<strong>Hauteur maximale</strong> est mesurée en degrés (également connue sous le nom d'élévation). Elle représente la hauteur de la station par rapport à l'horizon dans le ciel nocturne. L'horizon est à zéro degré, et directement au-dessus de la tête est à 90 degrés. Si les utilisateurs tiennent leur poing à bout de bras et le placent reposant sur l'horizon, le sommet sera d'environ 10 degrés d'élévation.<br/>" +
          "<strong>Apparaît</strong> est l'endroit dans le ciel où la station sera visible en premier. Cette valeur, comme la hauteur maximale, est également mesurée en degrés par rapport à l'horizon. Les lettres représentent les directions de la boussole – N est nord, ONO est ouest-nord-ouest, et ainsi de suite.<br/>" +
          "<strong>Disparaît</strong> représente où dans le ciel nocturne la station quittera le champ de vision." +
          "<img src='https://sts-app-resources.s3.us-east-1.amazonaws.com/astro_horizon.png' />",

        question16:
          "16. Le calendrier de survol indique que la Station spatiale internationale apparaît et disparaît de la même direction, comment est-ce possible ?",
        answer16:
          "Le logiciel Spot the Station arrondit les directions aux directions cardinales et intercardinales les plus proches. Cela peut donner l'impression que la Station spatiale internationale apparaîtra et disparaîtra dans la même direction, même si elle traverse le ciel. Cela se produit généralement lors de survols avec une courte fenêtre de visibilité car la station se déplace rapidement dans (ou hors de) l'ombre sombre de la Terre où, depuis la position de l'utilisateur au sol, un passage complet à travers le ciel ne peut pas être observé.",

        question17:
          "17. Puis-je voir une carte en direct de l'emplacement de la Station spatiale internationale ?",
        answer17:
          "Oui, l'application Spot the Station inclut une carte en temps réel montrant la position actuelle de la Station spatiale internationale alors qu'elle orbite autour de la Terre, offrant aux utilisateurs une référence visuelle pour suivre sa progression. Consultez la page Tracker pour voir la trajectoire de la station en vue 2D, 3D ou Satellite.",

        question18:
          "18. Quelle est la fonction de réalité augmentée dans l'application Spot the Station ?",
        answer18:
          "La fonction de réalité augmentée dans l'application Spot the Station permet aux utilisateurs de voir une superposition virtuelle du chemin de la Station spatiale internationale dans le ciel par-dessus la vue de la caméra du téléphone. Cette fonction aide les utilisateurs à localiser la station plus précisément en alignant leur appareil avec la position en temps réel de la station.",

        question19:
          "19. Comment accéder à la fonction de réalité augmentée dans l'application Spot the Station ?",
        answer19:
          "Pour accéder à la fonction de réalité augmentée, ouvrez l'application Spot the Station et naviguez vers l'option « Vue AR » dans le menu inférieur. Suivez les instructions à l'écran pour aligner la caméra de l'appareil avec le ciel, où l'application affichera une superposition virtuelle indiquant la position et la trajectoire de la Station spatiale internationale.",

        question20:
          "20. Ai-je besoin d'un appareil ou d'un logiciel spécifique pour utiliser la fonction de réalité augmentée ?",
        answer20:
          "La fonction de réalité augmentée de Spot the Station nécessite un appareil capable de déterminer son orientation dans l'espace 3D. Elle nécessite un support matériel spécifique, tel qu'un gyroscope ou un coprocesseur de mouvement. Les appareils plus anciens ou économiques peuvent ne pas prendre en charge cette fonctionnalité en raison des limitations de leur capteur magnétomètre. La précision peut être améliorée en suivant le guide de Calibration de la Boussole dans le menu Paramètres de l'application.",

        question21: "21. Comment fonctionne la fonction de réalité augmentée ?",
        answer21:
          "En utilisant la caméra et les capteurs de l'appareil, la fonction de réalité augmentée de Spot the Station superpose la position de la Station spatiale internationale dans le ciel sur l'écran, s'ajustant en temps réel à mesure que l'utilisateur déplace l'appareil. L'application guide les utilisateurs pour pointer la caméra de l'appareil dans la bonne direction et montre où la station apparaîtra et disparaîtra. Veuillez suivre le Tutoriel de la Vue AR depuis le menu Paramètres de l'application.",

        question22:
          "22. Puis-je utiliser la fonction de réalité augmentée à la fois de jour et de nuit ?",
        answer22:
          "Oui, la fonction de réalité augmentée dans l'application Spot the Station est disponible à la fois de jour et de nuit ; cependant, la meilleure expérience d'observation est généralement au crépuscule ou la nuit lorsque la Station spatiale internationale est visible à l'œil nu. La superposition de réalité augmentée fonctionnera indépendamment des conditions de lumière, mais les opportunités d'observation réelles dépendent de la visibilité.",

        question23:
          "23. La superposition de réalité augmentée est-elle précise pour tous les emplacements ?",
        answer23:
          "Oui, la fonction de réalité augmentée dans l'application Spot the Station est conçue pour fournir des informations de position précises basées sur la localisation GPS de l'appareil. Cependant, la précision peut légèrement varier en fonction de la calibration de la boussole et des capteurs de l'appareil. Si les utilisateurs remarquent des écarts, recalibrez la boussole de l'appareil en suivant le guide de Calibration de la Boussole depuis le menu Paramètres de l'application. Les appareils plus anciens ou économiques peuvent ne pas prendre en charge cette fonctionnalité en raison des limitations de leur capteur magnétomètre.",

        question24:
          "24. La fonction de réalité augmentée peut-elle aider avec les heures d'observation exactes ?",
        answer24:
          "La fonction de réalité augmentée dans l'application Spot the Station guide visuellement les utilisateurs pour localiser la Station spatiale internationale au moment précis où elle apparaît dans le ciel. Associée aux alertes de l'application, elle améliore la capacité de voir la station en fournissant une direction visuelle en direct et un indicateur de hauteur pour la suivre précisément.",

        question25:
          "25. Y a-t-il des conseils pour optimiser mon expérience de réalité augmentée ?",
        answer25:
          "Pour la meilleure expérience de réalité augmentée dans l'application Spot the Station, utilisez la fonction dans un espace ouvert avec une vue dégagée du ciel. Évitez les obstructions comme les grands bâtiments ou les arbres, car ils peuvent bloquer la visibilité. Calibrez la boussole de l'appareil (suivez le guide de Calibration de la Boussole dans le menu Paramètres) et assurez-vous que les services de localisation et les autorisations de la caméra sont activés pour un fonctionnement fluide.",

        question26:
          "26. La fonction de réalité augmentée est-elle disponible sur les appareils iOS et Android ?",
        answer26:
          "Oui, la fonction de réalité augmentée de l'application Spot the Station est disponible sur les appareils mobiles et tablettes iOS et Android, tant que votre appareil répond aux exigences matérielles. Les appareils plus anciens ou économiques peuvent ne pas prendre en charge cette fonctionnalité en raison des limitations de leur capteur magnétomètre.",

        question27: "27. L'application Spot the Station fonctionne-t-elle hors ligne ?",
        answer27:
          "Certaines fonctionnalités de base, comme l'accès aux horaires d'opportunités d'observation précédemment téléchargés ou la réception de notifications programmées, peuvent fonctionner hors ligne. Cependant, les fonctionnalités nécessitant des données en temps réel, comme le suivi, nécessitent un service cellulaire ou une connexion Internet.",

        question28:
          "28. Y a-t-il des exigences particulières pour utiliser l'application Spot the Station ?",
        answer28:
          "L'application Spot the Station nécessite un service cellulaire actif ou une connexion Internet pour le suivi en temps réel et les alertes. De plus, pour les informations spécifiques à l'emplacement, assurez-vous que les services de localisation de l'appareil sont activés pour l'application.",

        question29: "29. L'application Spot the Station est-elle gratuite ?",
        answer29:
          "Oui, l'application Spot the Station est gratuite à télécharger et à utiliser, sans achats intégrés ni abonnements.",

        question30:
          "30. Qui puis-je contacter pour obtenir de l'aide avec l'application Spot the Station ?",
        answer30:
          "Pour obtenir de l'aide avec l'application Spot the Station, contactez via l'option Nous contacter dans le menu Paramètres de l'application ou <a href='mailto:hq-spotthestation@mail.nasa.gov'>envoyez un e-mail à l'équipe Spot the Station</a>.",
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
    earthScience: { title: "Ressources de Données en Sciences de la Terre" },
  },
}

export default fr
export type Translations = typeof fr
