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
    body: "Merci de nous contacter.Nous avons reçu votre message et traiterons votre demande. Nous espérons inclure une résolution dans les versions futures. Veuillez noter que cette application ne collecte pas les données des utilisateurs, nous ne pouvons donc pas répondre à tous les messages individuellement.",
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
      title: "Repérez l'ISS maintenant!",
      subTitle: "L'ISS passe au-dessus de vous",
    },
    before: {
      titleOne: "Repérez l'ISS dans",
      titleTwo: "minutes!",
      subTitleOne: "L'ISS passe au-dessus de vous",
      subTitleTwo: "mintutes à",
    },
  },
  units: {
    minute: "min",
    kilometer: "km",
    kilogram: "kg",
    month: "mois",
    metersPerSecond: "M/S",
  },
  tabNavigator: {
    homeTab: "Accueil",
    issViewTab: "Vue ISS",
    issNowTab: "ISS Now",
    resourcesTab: "Ressources",
    settingsTab: "Paramètres",
  },
  onboarding: {
    splash: {
      title: "Repérer la Station",
      subTitle: "Regardez dans le ciel et voyez la Station spatiale internationale (ISS)",
    },
    completeProfile: {
      notification: {
        title: "Paramètres de notification",
        label: "Obtenez des alertes de notification push",
        tip: "Obtenez des alertes lorsque la station spatiale approche de votre localisation.",
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
        "Les données ISS sont en train de charger… cela peut prendre un moment pour aboutir.",
      trajectoryError:
        "Les données de trajectoire ISS sont actuellement indisponibles en raison de la maintenance du serveur. S'il vous plaît, veuillez reessayer plus tard.",
    },
    header: {
      firstTimeHead: "PROCHAINE OBSERVATION",
      secondTimeHead: "COMPTE À REBOURS",
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
    },
    selectSightings: {
      title: "Observations à venir",
      sightings: "Observations",
      selectMessage: "Sélectionnez des événements pour lesquels vous souhaitez être averti.",
      switch: "Me notifier pour tous les événements à venir à cette localisation.",
      aboveHorizon: "Au-dessus de l'horizon",
      today: "Aujourd'hui",
      tomorrow: "Demain",
      coach: {
        title: "Description des icônes",
        moon: "Ce sera la nuit à la localisation sélectionnée lorsque l'ISS sera au-dessus de l'horizon.",
        sunset:
          "Ce sera le crépuscule à la localisation sélectionnée lorsque l'ISS sera au-dessus de l'horizon.",
        sun: "Ce sera le jour à la localisation sélectionnée lorsque l'ISS sera au-dessus de l'horizon.",
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
        "Cette section vous montre la date et un compte à rebours pour la prochaine observation ISS à venir près de votre localisation sélectionnée. Vous pouvez appuyer sur la prochaine boîte d'observation pour voir une liste complète des prochaines observations.",
      globeTitle: "Terre interactive",
      globeData:
        "Vous pouvez afficher la position en temps réel de l'ISS en touchant l'écran. Cela vous permet d'interagir avec carte de la Terre et de suivre l'emplacement de l'ISS en temps réel.",
      mapTitle: "Vue de carte 2D",
      mapData:
        "Cette section montre une représentation 2D du chemin complet de l'ISS à travers les régions jour et nuit de la Terre.",
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
      distance: "Distance",
      orbitalSpeed: "Vitesse orbitale",
      longitude: "Longitude",
      latitude: "Latitude",
      altitude: "Altitude",
      crewOnboard: "Équipage à bord",
      launched: "L'assemblage a commencé",
      launchedValue: "20 novembre 1998",
      mass: "Masse estimée",
      dimensions: "Dimensions estimées",
      orbitalPeriod: "Période orbitale",
      orbitsPerDay: "Orbites / jour",
      orbitalDecay: "Désintégration orbitale",
      dimensionsValue: "109 m de large x 73 m de long x 14 m de haut",
    },
  },
  settings: {
    header: "Paramètres",
    locationSettings: "Les paramètres de localisation",
    notificationSettings: "Paramètres de notification",
    termsAndConditions: "Termes et conditions",
    contactUs: "Contactez-nous",
    termsAndConditionsData: {
      backButton: "Paramètres",
      ios: {
        title: "Contrat d'utilisation de l'application agréée",
        intro1:
          "L'utilisateur final souhaite utiliser l'application agréée suivante développée par le gouvernement américain représenté par la National Aeronautics and Space Administration, située au 300 E Street SW, Washington, D.C. (ci-après NASA):",
        appData: {
          line1: "Application agréée:",
          line2: "Version:",
          line3:
            "Numéro de technologie de la NASA: MSC-27535-1 (ci-après application sous licence)",
        },
        contactData: {
          line1: "Point de contact de la NASA:",
          line2: "Jacob Keaton",
          line3: "Quartier général de la NASA",
          line4: "300 E Street SW",
          line5: "E-mail: spothestation@hq.nasa.gov",
        },
        intro2:
          "L'autorité de la NASA de publier l'application agréée est la directive de politique de la NASA (NPD) 2820.1C",
        intro3:
          "En conséquent, en considération de la NASA, publiant l'application agréée à l'utilisateur final et accordant à l'utilisateur final le droit non transférable d'utiliser l'application agréée, comme spécifié ici sur tout iPhone ou iPod Touch que les utilisateurs finaux possèdent ou les contrôles et, comme le permet les règles d'utilisation énoncées dans les termes et les conditions de magasin de l'App.",
        body: {
          line1:
            "1. La NASA et l'utilisateur final reconnaissent que le présent accord est conclu entre la NASA et l'utilisateur final uniquement, et non avec Apple, le présent accord n'est pas transférable, et la NASA, et non Apple, est uniquement responsable de l'application agréée et de celle-ci.",
          line2:
            "2. La NASA et l'utilisateur final reconnaissent et conviennent qu'Apple, et les filiales d'Apple, sont des bénéficiaires de tiers du présent accord, et que lors de l'acceptation par l'utilisateur final des termes et conditions du présent accord, Apple aura le droit (et sera considéré comme un droit de droit) pour appliquer le présent accord contre la fin de l'utilisateur en tant que bénéficiaire de tiers de l'accord.",
          line3:
            "3. L'application agréée reste la propriété de la NASA. L'utilisateur final reconnaît qu'il n'acquiert aucune participation dans l'application agréée en vertu du présent accord. L'application agréée n'est pas dans le domaine public et rien dans le présent accord ne sera interprété comme mis à la disposition du public de l'application agréée sans restriction.",
          line4:
            "4. Il n'y aura pas de libération, de distribution ou de publication de l'application agréée par l'utilisateur final.",
          line5:
            "5. La NASA ne sera pas responsable de la maintenance ou de la mise à jour de l'application agréée, ni de la correction des erreurs dans l'application agréée. La NASA et l'utilisateur final reconnaissent qu'Apple n'a aucune obligation de fournir des services de maintenance et de soutien en ce qui concerne l'application agréée.",
          line6:
            "6. L'utilisateur final représente et justifie que (i) il n'est pas situé dans un pays soumis à un embargo du gouvernement américain, ou qui a été désigné par le gouvernement américain comme un pays de «soutien terroriste»; et (ii) il / elle n'est répertorié sur aucune liste du gouvernement américain des parties interdites ou restreintes.",
          line7:
            "7. L'application agréée est fournie «telle quel» sans aucune garantie d'aucune sorte, exprimée, implicite ou statutaire, y compris, mais sans s'y limiter, toute garantie selon laquelle l'application agréée sera conforme aux spécifications, à toute garantie implicite de qualité marchande, à un objectif particulier et à la liberté de l'infraction, ou à toute garantie que l'application agréée sera sans erreur. En aucun cas, la NASA ne sera responsable de tout dommage, y compris, mais sans s'y limiter, des dommages directs, indirects, spéciaux ou conséquents, résultant, résultant ou de quelque manière que ce soit avec l'application agréée, que ce soit ou non sur la garantie, le contrat, le délit ou non, qu'il s'agisse ou non de la blessure ou non par des personnes ou non, et si non la perte ou non de la demande de licence. L'utilisateur final accepte de renoncer à toutes les réclamations contre le gouvernement américain, ses entrepreneurs et leurs sous-traitants, et indemnisera et tiendra inoffensif le gouvernement américain, ses entrepreneurs et leurs sous-traitants pour tout dommage que l'utilisateur final peut entraîner de l'utilisation finale de l'application agréée.",
          line8:
            "8. En cas de défaillance de l'application agréée de se conformer à toute garantie appliquée par la loi, l'utilisateur final peut en informer Apple et Apple remboursera le prix d'achat (le cas échéant) pour la demande agréée à l'utilisateur final. Dans la mesure maximale autorisée par la loi applicable, Apple n'aura aucune autre pertes, passifs, dommages-intérêts, frais ou dépenses attribuables à toute défaillance de l'application agréée pour se conformer à toute garantie.",
          line9:
            "9. La NASA et l'utilisateur final reconnaissent que, en cas de prétend de tiers, que l'application agréée ou la possession de l'utilisateur final et l'utilisation de l'application agréée violaient les droits de propriété intellectuelle, la NASA, et non la pomme, la prétention contre les enquêteurs, la défense, le règlement et la décharge de toute demande de contrefaçon de propriété intellectuelle.",
          line10:
            "10. La NASA et l'utilisateur final reconnaissent que la NASA, et non Apple est chargée de répondre à toute réclamation de l'utilisateur final ou du tiers concernant l'application agréée ou la possession de l'utilisateur final et / ou l'utilisation de l'application agréée, y compris, mais sans s'y limiter: (i) les réclamations de responsabilité des produits;(ii) toute réclamation selon laquelle l'application agréée ne se conforme pas à toute exigence légale ou réglementaire applicable, y compris toute garantie appliquée par la loi; et (iii) les réclamations résultant de la protection des consommateurs ou d'une législation similaire.",
          line11:
            "11. Le présent accord sera interprété et les relations juridiques entre les parties auxquelles sont déterminées, conformément à la loi fédérale des États-Unis à toutes fins.",
          line12:
            "12. Le présent accord constitue l'intégralité de la compréhension et de l'accord entre la NASA et l'utilisateur final concernant la publication de l'application agréée et ne peut pas être remplacée, modifiée ou modifiée.",
          line13:
            "13. En acceptant et en utilisant l'application agréée en vertu du présent accord, l'utilisateur final accepte par la présente toutes les termes et conditions.",
        },
      },
      android: {
        title: "Contrat d'utilisation de l'application agréée",
        intro1:
          "L'utilisateur final souhaite utiliser le produit suivant développé par le gouvernement américain représenté par le National Aeronautics and Space Administration, Ames Research Center, situé à Moffett Field, CA 94035 (ci-après NASA):",
        appData: {
          line1: "Logiciel:",
          line2: "Version:",
          line3: "Numéro de technologie de la NASA: MSC-27535-1",
        },
        intro2:
          "L'autorité de la NASA de publier l'application agréée est la directive de politique de la NASA (NPD) 2820.1C.",
        intro3:
          "En Conséquent, en considération de la NASA, publiant l'application agréée à l'utilisateur final et accordant à l'utilisateur final le droit non transférable d'utiliser l'application agréée pour une utilisation personnelle et non commerciale et comme spécifié ici et comme le permet des conditions générales du marché Android sur un appareil mobile Android Suivre: \"Dispositif\"",
        body: {
          line1:
            "1. L'application agréée reste la propriété de la NASA. L'utilisateur final reconnaît qu'il n'acquiert aucune participation dans l'application agréée en vertu du présent accord. L'application agréée n'est pas dans le domaine public et rien dans le présent accord ne sera interprété comme mis à la disposition du public de l'application agréée sans restriction.",
          line2:
            "2. Il n'y aura pas de libération, de distribution ou de publication de l'application agréée par l'utilisateur final.",
          line3:
            "3. La NASA ne sera ni responsable ni responsable de la maintenance ou de la mise à jour de l'application agréée, ni de la correction des erreurs dans l'application agréée.",
          line4:
            "4. L'utilisateur final représente et justifie que (i) il n'est pas situé dans un pays soumis à un embargo du gouvernement américain, ou qui a été désigné par le gouvernement américain comme un pays de «soutien terroriste»; et (ii) il / elle n'est répertorié sur aucune liste du gouvernement américain des parties interdites ou restreintes.",
          line5:
            "5. L'application agréée est fournie «telle quel» sans aucune garantie d'aucune sorte, exprimée, implicite ou statutaire, y compris, mais sans s'y limiter, toute garantie selon laquelle l'application agréée sera conforme aux spécifications, à toute garantie implicite de la qualité marchande, à une condition physique à un usage particulier et à la liberté de contrefaçon, ou à toute garantie que l'application agréée sera sans erreur. En aucun cas, la NASA ne sera responsable de tout dommage, y compris, mais sans s'y limiter, des dommages directs, indirects, spéciaux ou conséquents, résultant, résultant ou de quelque manière que ce soit avec la demande de licence, que ce soit ou non sur la garantie, le contrat, le délit ou non, qu'il s'agisse ou non de la blessure ou non par des personnes ou non, et si non la perte ou non de la demande de licence. L'utilisateur final accepte de renoncer à toutes les réclamations contre le gouvernement américain, ses entrepreneurs et leurs sous-traitants, et indemnisera et tiendra inoffensif le gouvernement américain, ses entrepreneurs et leurs sous-traitants pour tout dommage que l'utilisateur final peut subir de l'utilisation finale de l'application agréée, y compris les dommages-intérêts liés à la base ou résultant de l'application agréée.",
          line6:
            "6. Le présent accord sera interprété et les relations juridiques entre les parties auxquelles sont déterminées, conformément à la loi fédérale des États-Unis à toutes fins.",
          line7:
            "7. Le présent accord constitue l'intégralité de la compréhension et de l'accord entre la NASA et l'utilisateur final concernant la libération de l'application agréée et ne peut pas être remplacé, modifié ou modifié.",
          line8:
            "8. En acceptant et en utilisant l'application agréée en vertu du présent accord, l'utilisateur final accepte par la présente toutes les termes et conditions.",
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
