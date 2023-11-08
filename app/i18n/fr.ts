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
  permissionsModal: {
    close: "Fermer",
    openSettings: "Ouvrir les Paramètres",
    body: "Pour utiliser cette fonctionnalité, vous devez accorder la permission d'accéder à la galerie.",
  },
  permissionsAndroid: {
    title: "Autorisation pour enregistrer des vidéos",
    message:
      "Cette application a besoin de l'autorisation pour enregistrer des vidéos sur votre appareil.",
    buttonNeutral: "Demandez moi plus tard",
    buttonNegative: "Annuler",
    buttonPositive: "D'accord",
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
      subTitleTwo: "mintutes à",
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
      title: "Repérer la Station",
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
      title: "International Space Station - Details",
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
    },
    arNotSupported: "La AR n'est pas prise en charge sur cet appareil",
    noOrientationSensor: "Capteur d'orientation non disponible",
    noMagnetometerSensor: "Le magnétomètre n'est pas disponible",
    screenshotError: "Impossible de capturer la capture d'écran",
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
    termsAndConditionsData: {
      backButton: "Settings",
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
    localCalculations: "Calculs locaux",
  },
  resources: {
    header: "Ressources",
    searchPlaceholder: "Recherchez des articles, des événements, etc ...",
    suggestions: "SUGGESTIONS",
    searchResults: "Résultats de recherche",
    tabs: {
      news: "Actualités",
      about: "À propos",
      details: "Détails",
    },
  },
}

export default fr
export type Translations = typeof fr
