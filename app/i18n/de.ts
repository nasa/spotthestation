const de = {
  name: "Deutsch",
  errorScreen: {
    title: "Etwas ist schief gelaufen!",
    friendlySubtitle:
      'Dies ist der Bildschirm, den Ihre Benutzer in der Produktion sehen, wenn ein Fehler geworfen wird. Sie möchten diese Meldung (in "App/i18n/en.ts") wahrscheinlich anpassen und auch im Layout (`app/screens/fehlerscreen`). Wenn Sie diese Meldung vollständig entfernen möchten, überprüfen Sie `app/app.tsx` auf die <Regelboundary> -Komponente.',
    reset: "App zurücksetzen",
  },
  snackBar: {
    ok: "OK",
    dismiss: "Ablehnen",
    sightingsSaved: "Sichtungen für den letzten gespeicherten Ort geladen",
    defaultError: "Ein Fehler ist aufgetreten!",
    locationSaved: "Ort gespeichert",
    locationExist: "Ort mit dieser Bezeichnung existiert schon",
    openSettingsError: "Einstellungen können nicht geöffnet werden",
    shared: "Erfolgreich geteilt",
    savedToGallery: "In der Galerie gespeichert",
  },
  outdatedModal: {
    title: "Update verfügbar",
    body: "Eine neue Version der App ist verfügbar! Laden Sie die neue Version herunter auf",
    buttonNegative: "Abbrechen",
    buttonPositive: "Herunterladen",
  },
  permissionsModal: {
    close: "Schließen",
    openSettings: "Einstellungen öffnen",
    body: "Um diese Funktion zu verwenden, müssen Sie die Erlaubnis erteilen, auf die Galerie zuzugreifen.",
  },
  permissionsAndroid: {
    title: "Erlaubnis zum Speichern von Videos",
    message: "Diese App benötigt die Berechtigung, Videos auf Ihrem Gerät zu speichern.",
    buttonNeutral: "Fragen Sie mich später",
    buttonNegative: "Abbrechen",
    buttonPositive: "OK",
    alarmPermissionTitle: "Berechtigung erforderlich",
    alarmPermissionMessage:
      "Bitte erteilen Sie auf dem nächsten Bildschirm die Berechtigung für Alarme und Erinnerungen, um Benachrichtigungen über bevorstehende Sichtungen zu erhalten.",
  },
  thanksModal: {
    body: "Danke, dass Sie uns kontaktiert haben. Wir haben Ihre Nachricht erhalten und werden Ihre Anfrage bearbeiten. Bitte beachten Sie, dass diese Anwendung keine Benutzerdaten sammelt und wir daher nicht auf alle Nachrichten einzeln antworten können.",
    dismiss: "Ablehnen",
  },
  privacy: {
    title: "Aktuellen Standort verwenden",
    body: "Wir verwenden Standortdaten, um die bevorstehenden Sichtungen an Ihrem aktuellen Standort zu berechnen. Bitte erteilen Sie die Zugriffsberechtigung auf den Standort, um diese Funktionalität zu ermöglichen.",
    agree: "Zustimmen",
    skip: "Überspringen",
    policy: "Datenschutz-Bestimmungen",
  },
  notifications: {
    push: {
      title: "Finden Sie die Station jetzt!",
      subTitle: "Die Station zieht gerade über Ihnen vorbei",
    },
    before: {
      titleOne: "Entdecken Sie die Station in",
      titleTwo: "Minuten",
      subTitleOne: "Die Station wird in ",
      subTitleTwo: "Minuten vorbeiziehen",
    },
  },
  units: {
    minute: "Min",
    kilometer: "Km",
    kilogram: "Kg",
    month: "Monat",
    metersPerSecond: "m/sek",
    time: "T",
  },
  tabNavigator: {
    homeTab: "Home",
    issViewTab: "AR Ansicht",
    issNowTab: "Tracker",
    resourcesTab: "Ressourcen",
    settingsTab: "Einstellungen",
  },
  onboarding: {
    splash: {
      title: "Entdecken Sie\ndie Station",
      subTitle: "Schauen Sie zum Himmel und entdecken Sie die Internationale Raumstation ISS",
    },
    completeProfile: {
      notification: {
        title: "Benachrichtigungseinstellungen",
        label: "Fordern Sie Push-Benachrichtigungen an",
        tip: "Fordern Sie einen Alarm an, wenn sich die ISS Ihrem Standort nähert",
        nextButton: "Weiter",
      },
      location: {
        title: "Ihr Standort",
        subtitle:
          "Bitte erlauben Sie der App, Ihren Standort automatisch zu erkennen, oder geben Sie Ihren Standort manuell an.",
        detectButton: "Erkennen Sie meinen Standort",
        orLabel: "oder",
        selectLocation: "Geben Sie Ihren Standort an",
        detecting: "Standort erkennen ...",
        doneButton: "Fertig",
        serviceAlertTitle: "Standortdienste deaktiviert",
        serviceAlertBody: "Bitte geben Sie Ihre Standortabfrage für die App frei.",
        permissionAlertTitle: "Erlaubnis nicht erteilt",
        permissionAlertBody:
          "Wir verwenden Standortdaten, um die bevorstehenden Sichtungen an Ihrem aktuellen Standort zu berechnen. Bitte erteilen Sie die Berechtigung zur Standortabfrage, um diese Funktionalität zu ermöglichen.",
      },
    },
  },
  homeScreen: {
    initLoader: {
      message: "Stations-Daten werden geladen. Dies kann einen Moment dauern.",
      trajectoryError:
        "Die Flugbahndaten sind derzeit aufgrund einer Serverwartung nicht verfügbar. Bitte versuchen Sie es später noch einmal.",
      noNetwork:
        "Die Flugbahndaten sind derzeit wegen fehlender Netzverbindung nicht verfügbar. Bitte prüfen Sie die Netzverbindung oder versuchen Sie es später noch einmal.",
    },
    header: {
      firstTimeHead: "LISTE DER NÄCHSTEN SICHTUNGEN",
      secondTimeHead: "COUNTDOWN",
      timezone: "Zeitzone",
    },
    selectLocation: {
      title: "Ort auswählen",
      inputPlaceholder: "Suche mit Namen des Ortes, PLZ ...",
      current: "Aktueller Standort",
      saved: "Gespeicherte Standorte",
      nearby: "Nahe gelegene Standorte",
      search: "Suchergebnisse",
      cta: "Passen Sie Benachrichtigungen für diesen Ort an",
      actionTitle: "Alarm",
      refresh: "Aktualisieren",
    },
    selectSightings: {
      title: "Bevorstehende Sichtungen",
      sightings: "Sichtungen",
      selectMessage: "Wählen Sie Ereignisse aus, über die Sie benachrichtigt werden möchten",
      switch: "Benachrichtigen Sie mich über alle bevorstehenden Ereignisse an diesem Ort",
      aboveHorizon: "Über dem Horizont",
      maxHeight: "Maximale Höhe von",
      today: "Heute",
      tomorrow: "Morgen",
      appears: "erscheint",
      disappears: "verschwindet",
      all: "Alle",
      timeOfDay: "Uhrzeit",
      night: "Nacht",
      twilight: "Dämmerung",
      duration: "Dauer",
      shorterThan2: "kürzer als 2 Minuten",
      longerThan2: "2 Minuten und länger",
      empty:
        "Von {{start}} bis {{end}} gibt es für diesen Standort keine potenziellen Stations-Sichtungen.",
      shareTitle: "Die Station fliegt über {{location}} am {{date}} vorbei",
      shareLink:
        "Um mehr zu erkunden und die Station mittels Augmented Reality zu verfolgen, laden Sie bitte die App herunter unter",
      coach: {
        title: "Symbolbeschreibung",
        moon: "Es wird Nacht am ausgewählten Ort sein, wenn sich die Station über dem Horizont befindet.",
        sunset:
          "Es wird dämmern am ausgewählten Ort, wenn sich die Station über dem Horizont befindet.",
      },
      compass: {
        N: "N",
        NNE: "NNO",
        NE: "NO",
        ENE: "ONO",
        E: "O",
        ESE: "OSO",
        SE: "SO",
        SSE: "SSO",
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
      skip: "Einführung überspringen",
      next: "Weiter",
      finish: "Beenden",
      dismiss: "Ablehnen",
      locationTitle: "Den Ort wechseln",
      locationData: "Sie können Ihren Standort hier direkt auswählen oder abändern.",
      sightingsTitle: "Nächste Sichtung & Countdown",
      sightingsData:
        "In diesem Abschnitt wird das Datum und ein Countdown-Timer für die nächste bevorstehende Stations-Sichtung in der Nähe Ihres ausgewählten Standorts angezeigt. Sie können auf >Nächste Sichtung< tippen, um eine vollständige Liste der bevorstehenden Sichtungen zu sehen.",
      globeTitle: "Interaktive Erdansicht",
      globeData:
        "Sie können die Echtzeitposition der Station sehen, indem Sie auf dem Bildschirm wischen. Auf diese Weise können Sie mit der Darstellung der Erde interagieren und den Ort der Station in Echtzeit verfolgen.",
      mapTitle: "2D-Kartenansicht",
      mapData:
        "Dieser Abschnitt zeigt eine 2D-Darstellung des vollständigen Weges der Station mit den Tag/Nacht-Regionen der Erde.",
      navigationTitle: "Navigation",
      navigationData:
        "Sie können im folgenden Navigationsmenü verschiedene Funktionen der App ausprobieren.",
    },
  },
  issView: {
    timeHeader: "Countdown",
    cameraPermissionText:
      "Sie haben die Verwendung der Kamera Ihres Telefons nicht zugelassen. Klicken Sie hier, um das zuzulassen.",
    issCaptured: "Halten Sie diesen Moment fest",
    details: {
      title: "Information",
      orbitalSpeed: "Orbitalgeschwindigkeit",
      longitude: "Längengrad",
      latitude: "Breitengrad",
      altitude: "Höhe",
      crewOnboard: "Typische Anzahl der Besatzungsmitglieder an Bord",
      launched: "Baubeginn",
      launchedValue: "20. November 1998",
      mass: "Geschätztes Gewicht",
      dimensions: "Geschätzte Abmessungen",
      orbitalPeriod: "Umlaufzeit",
      orbitsPerDay: "Umläufe/Tag",
      dimensionsValue: "109 m breit x 73 m lang x 14 m hoch",
      dateTime: "Datum und Uhrzeit",
      maxHeight: "Maximale Höhe",
      duration: "Dauer über dem Horizont",
      appears: "Erscheint",
      disappears: "Verschwindet",
      distance: "Entfernung",
      nextSighting: "Nächste Sichtung",
    },
    arNotSupported: "AR wird auf diesem Gerät nicht unterstützt",
    noOrientationSensor: "Orientierungssensor nicht verfügbar",
    noMagnetometerSensor: "Magnetometer ist nicht verfügbar",
    screenshotError: "Screenshot kann nicht erstellt werden",
    coachMarks: {
      circleTitle: "Station entdecken",
      circleData:
        "Um die Station zu entdecken, bewegen Sie Ihr Telefon in Richtung des Pfeils außerhalb des Kreises. Wenn Sie näher kommen, ändert sich die Farbe des Kreises zu Grün.",
      compassTitle: "Kompass",
      compassData:
        "Dieser Kompass zeigt Ihnen die Richtung, in die Sie schauen, und die relative Richtung, in der Sie die Station entdecken können.",
      infoTitle: "Information",
      infoData:
        "Dieser Umschalter öffnet oder schließt das Fenster mit detaillierten Informationen über die aktuelle oder nächste bevorstehende Sichtung sowie Live-Informationen über die Station.",
      trajectoryTitle: "Flugbahn",
      trajectoryData:
        "Dieser Umschalter schaltet die Flugbahnanzeige auf dem Bildschirm ein oder aus. Die durchgezogene Linie zeigt die vergangene und die gestrichelte Linie die zukünftige Bahn der Station an.",
      arTitle: "AR-Ansicht",
      arData: "Dieser Umschalter wechselt zwischen der Vollbild- und Teilansicht der AR.",
      shareTitle: "Teilen",
      shareData:
        "Mit dieser Schaltfläche können Sie einen Screenshot der AR-Ansicht per Textnachricht, E-Mail oder soziale Medien teilen.",
      screenshotTitle: "Bildschirmfoto",
      screenshotData:
        "Mit dieser Schaltfläche können Sie einen Screenshot der AR-Ansicht aufnehmen und in Ihrer Fotogalerie speichern.",
      videoTitle: "Videoaufzeichnung",
      videoData:
        "Mit dieser Schaltfläche können Sie ein Video der AR-Ansicht aufnehmen, um die Momente festzuhalten, in denen Sie die Station entdecken.",
    },
    safetyReminder: {
      title: "Achtung: Sicherheitshinweis",
      subtitle1: "Elterliche Aufsicht empfohlen:",
      body1:
        "Bitte denken Sie daran, dass elterliche Aufsicht beim Umgang mit dem AR-Bildschirm in der App wichtig ist. Kinder sollten dieses Feature unter Anleitung eines verantwortungsbewussten Erwachsenen verwenden, um ein geeignetes und angemessenes Erlebnis zu gewährleisten.",
      subtitle2: "Achten Sie auch während der Benutzung des AR Features auf Ihre Umgebung:",
      body2:
        "Genießen Sie die Augmented-Reality-Erfahrung und bleiben Sie dabei immer auf Ihre physische Umgebung aufmerksam. Achten Sie auf Hindernisse, unebenes Gelände oder andere Gefahren, die Ihre Sicherheit gefährden könnten. Ihre Sicherheit hat oberste Priorität. Daher seien Sie bitte jederzeit aufmerksam und vorsichtig.",
      home: "Zurück zur Startseite",
      ok: "Ich verstehe",
    },
  },
  settings: {
    header: "Einstellungen",
    locationSettings: "Ortseinstellungen",
    notificationSettings: "Benachrichtigungseinstellungen",
    termsAndConditions: "Geschäftsbedingungen",
    contactUs: "Kontaktieren Sie uns",
    language: "Sprache",
    calibrateCompass: "Kompasskalibrierung",
    calibrateCompassData: {
      instructions:
        "Um den Kompass zu kalibrieren, bewegen Sie Ihr Gerät mehrmals in Form einer Acht.",
      accuracy: "Sensorgenauigkeit:",
      low: "Niedrig",
      medium: "Mittel",
      high: "Hoch",
    },
    tutorials: "Anleitungen",
    tutorialsData: {
      description:
        "Möchten Sie die schrittweisen Anleitungen für die Startseite und die AR-Ansicht noch einmal sehen?",
      homePage: "Startseite",
      arPage: "AR-Ansicht",
    },
    termsAndConditionsData: {
      backButton: "Einstellungen",
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
      backButton: "Einstellungen",
      title: "Kontaktieren Sie uns",
      titlePlaceholder: "Wählen Sie eine Überschrift",
      commentsPlaceholder: "Kommentare eingeben",
      sendButton: "Senden",
      contactUsOptions: {
        reportAnIssue: "Ein Problem melden",
        improvementIdeas: "Verbesserungsvorschläge",
        generalQuestions: "Allgemeine Fragen",
        comments: "Kommentare",
      },
    },
    notificationSettingsData: {
      backButton: "Einstellungen",
      notificationTitle: "Benachrichtigungseinstellungen",
      privacyTitle: "Datenschutzeinstellungen",
      upcomingLabel: "Kommende Ereignisse",
      customizeLabel: "Benachrichtigungen anpassen",
      upcomingTip: "Ausschalten, um Ereignisbenachrichtigungen zu stoppen.",
      notifyMeBefore: "Benachrichtigen Sie mich vorher",
      turnOffNotifications: "Benachrichtigungen Abschalten",
      rangeInputPlaceholder: "Wählen Sie zwischen 1 bis 120 Minuten",
      customOption: "Benutzerdefiniert",
      from: "Von",
      until: "Bis",
    },
    locationSettingsData: {
      backToSettings: "Einstellungen",
      goBack: "Zurück",
      generalTitle: "Ortseinstellungen",
      cta: "Benachrichtigungen für diesen Ort anpassen",
      locationPermission: "Erteilen Sie die Erlaubnis, Ihren Standort zu verwenden",
      addNewLocation: {
        generalTitleAdd: "Neuen Standort hinzufügen",
        generalTitleEdit: "Standort bearbeiten",
        confirnModalButton: "Bestätigen",
        saveButton: "Ort speichern",
        searchInputPlaceholder: "Geben Sie Stadt, Postleitzahl oder Adresse ein",
        nameInputPlaceholder: "Name des Orts speichern",
      },
      removeLocation: {
        question: "Sind Sie sicher, dass Sie diesen Ort löschen wollen?",
        cancelButton: "Abbrechen",
        removeButton: "Löschen",
      },
    },
    share: "Teilen",
    shareLink:
      "Um die Internationale Raumstation über Augmented Reality zu verfolgen, laden Sie die NASA Spot The Station Mobile App herunter unter",
    localCalculations: "Lokale Berechnungen",
  },
  resources: {
    header: "Ressourcen",
    goBack: "Zurück",
    news: {
      title: "Stationsnachrichten",
      searchPlaceholder: "Artikel, Veranstaltungen usw. suchen...",
      suggestions: "VORSCHLÄGE",
      searchResults: "Suchergebnisse",
    },
    spotTheStation: {
      title: "Wie erkenne ich die Station?",
    },
    about: {
      title: "Über die Station",
    },
    details: {
      title: "Stationsdetails",
    },
    faq: {
      title: "Häufig gestellte Fragen",
      questions: {
        question1: "1. Warum ist die Raumstation dort oben?",
        answer1:
          "Die Internationale Raumstation ist das einzige Mikrogravitationslabor der Erde. Diese fußballfeldgroße Plattform beherbergt eine Vielzahl von Wissenschafts- und Technologieexperimenten, die kontinuierlich von Besatzungsmitgliedern durchgeführt oder automatisiert werden. Die Forschung an Bord des umlaufenden Labors bietet Vorteile für das Leben auf der Erde sowie für die zukünftige Weltraumforschung. Die Raumstation dient als Testumgebung für Technologien und ermöglicht es uns, die Auswirkungen von Langzeitflügen auf den Menschen zu untersuchen, was die Mission der NASA unterstützt, die menschliche Präsenz weiter in den Weltraum zu bringen. Um mehr über die Forschung auf der Raumstation und die Möglichkeiten, dort Ihre Wissenschaft durchzuführen, zu erfahren, klicken Sie bitte <a href='https://www.nasa.gov/international-space-station/'>hier</a>.",
        question2: "2. Wie schnell reist die Raumstation?",
        answer2:
          "Die Station umkreist die Erde alle 90 Minuten. Sie reist mit etwa 17.500 Meilen (28.000 km) pro Stunde, was der Besatzung 16 Sonnenauf- und -untergänge pro Tag beschert. In den mehr als 15 Jahren, in denen Menschen an Bord leben, hat die Station die Erde zehntausende Male umrundet. Weitere Fakten über die Station finden Sie auf <a href='https://www.nasa.gov/international-space-station/space-station-facts-and-figures/'>dieser Webseite</a>.",
        question3: "3. Wie oft kann ich erwarten, die Raumstation zu sehen?",
        answer3:
          "Die Raumstation ist sichtbar, weil sie das Licht der Sonne reflektiert – aus demselben Grund, warum wir den Mond sehen können. Im Gegensatz zum Mond ist die Raumstation jedoch nicht hell genug, um sie tagsüber zu sehen. Sie kann nur gesehen werden, wenn es an Ihrem Standort Dämmerung oder Morgengrauen ist. Daher kann es von einer Sichtungsmöglichkeit pro Monat bis zu mehreren pro Woche reichen, da es sowohl dunkel sein muss, wo Sie sich befinden, als auch die Raumstation zufällig über Ihnen sein muss.",
        question4: "4. Was ist die Spot the Station Mobile App?",
        answer4:
          "Die Spot the Station Mobile App ist eine offizielle NASA-App, die Benutzern hilft, Sichtungen der Internationalen Raumstation zu verfolgen und Benachrichtigungen zu erhalten, wenn sie über ihren Standort fliegt. Sie bietet Echtzeit-Tracking, Sichtungspläne und Warnungen.",
        question5: "5. Wie lade ich die Spot the Station Mobile App herunter?",
        answer5:
          "Sie können die App sowohl im Apple App Store <a href='https://apps.apple.com/us/app/spot-the-station/id6449235044'>hier</a> als auch im Google Play Store <a href='https://play.google.com/store/apps/details?id=gov.nasa.hq.SpotTheStation&hl=en_US&pli=1'>hier</a> herunterladen.",
        question6: "6. Wie benachrichtigt mich die App über bevorstehende Sichtungen der Station?",
        answer6:
          "Die App sendet Push-Benachrichtigungen, um Sie über bevorstehende Sichtungen der Station zu informieren, einschließlich Datum, Uhrzeit, Dauer und Sichtbarkeitsbedingungen, die für Ihren Standort spezifisch sind. Bitte stellen Sie sicher, dass Sie die Benachrichtigungsberechtigungen für diese App in den Einstellungen Ihres Telefons aktiviert haben.",
        question7: "7. Kann ich Benachrichtigungen in der App anpassen?",
        answer7:
          "Ja, Sie können die Benachrichtigungseinstellungen in der App personalisieren, um Benachrichtigungen basierend auf Ihrem bevorzugten Standort, Sichtungsbedingungen und sogar bestimmten Zeiten zu erhalten, die für Sie am besten geeignet sind.",
        question8: "8. Was soll ich tun, wenn ich keine Benachrichtigungen erhalte?",
        answer8:
          "Wenn Sie keine Benachrichtigungen erhalten, stellen Sie sicher, dass Benachrichtigungen in den Einstellungen Ihres Geräts aktiviert sind. Überprüfen Sie auch die Benachrichtigungseinstellungen der App, um zu bestätigen, dass Sie Benachrichtigungen für Ihren gewählten Standort und Ihre bevorzugte Zeit eingerichtet haben.",
        question9: "9. Funktioniert die App international?",
        answer9:
          "Ja, die Spot the Station App ist weltweit verfügbar und bietet Sichtungsinformationen für die meisten bewohnten Orte, sodass es einfach ist, die Station von fast überall aus zu sehen.",
        question10: "10. Warum gibt es keine Sichtungsmöglichkeiten für meinen Standort?",
        answer10:
          "Es muss dunkel sein, wo Sie sich befinden, und die Raumstation muss über Ihnen sein, damit Sie sie sehen können. Da die Umlaufbahn der Raumstation sie um den gesamten Globus führt, kann sie zu Zeiten über Ihnen vorbeiziehen, in denen sie nicht sichtbar ist – entweder mitten am Tag oder mitten in der Nacht. Spot The Station sendet nur Benachrichtigungen, wenn Sie die Möglichkeit haben, die Raumstation zu sehen, nicht jedes Mal, wenn sie über Ihnen ist.",
        question11: "11. Brauche ich ein Teleskop, um die Raumstation zu sehen?",
        answer11:
          "Nein, Sie können die Raumstation mit bloßem Auge sehen, keine Ausrüstung erforderlich.",
        question12: "12. Erscheint und verschwindet die Station wegen des Lichts des Mondes?",
        answer12:
          "Die Raumstation ist sichtbar, weil sie Licht von der Sonne reflektiert. Dies ist derselbe Grund, warum der Mond zu leuchten scheint. Auch wenn der Mond nicht aufgegangen ist, können Sie die Raumstation trotzdem sehen.",
        question13: "13. Welche Zeitzone wird für Benachrichtigungen verwendet?",
        answer13:
          "Alle Informationen von Spot The Station sind in der lokalen Zeitzone für den ausgewählten Standort angegeben. Spot The Station passt sich automatisch an die Sommerzeit an.",
        question14: "14. Welche Informationen bietet die App für jede Sichtung?",
        answer14:
          "Für jede Sichtung zeigt die App die Uhrzeit, die Sichtbarkeitsdauer, die maximale Höhe und die Richtungen an, in denen die Station erscheinen und verschwinden wird, um Ihnen zu helfen, sie genau am Himmel zu lokalisieren.",
        question15:
          "15. Wie erkenne ich die Station bei jeder Sichtung? Was bedeuten all diese Sichtungsinformationen?",
        answer15:
          "Die App bietet eine Liste der bevorstehenden Sichtungen, wenn Sie auf der Startseite auf die Liste der nächsten Sichtungen tippen.<br/><strong>Datum und Uhrzeit</strong> ist, wann die Sichtungsmöglichkeit in Ihrer lokalen Zeitzone beginnt. Alle Sichtungen finden innerhalb weniger Stunden vor oder nach Sonnenaufgang oder Sonnenuntergang statt. Dies ist die optimale Beobachtungszeit, da die Sonne von der Raumstation reflektiert wird und sich gegen den dunkleren Himmel abhebt.<br/><strong>Über dem Horizont</strong> ist die maximale Zeitspanne, in der die Raumstation sichtbar ist, bevor sie wieder unter den Horizont zurückkehrt.<br/><strong>Maximale Höhe</strong> wird in Grad gemessen (auch als Elevation bekannt). Sie repräsentiert die Höhe der Raumstation vom Horizont im Nachthimmel. Der Horizont liegt bei null Grad, und direkt über Ihnen sind es neunzig Grad. Wenn Sie Ihre Faust auf Armlänge halten und Ihre Faust auf dem Horizont ruhen lassen, wird die Oberseite etwa 10 Grad betragen.<br/><strong>Erscheint</strong> ist der Ort am Himmel, an dem die Station zuerst sichtbar wird. Dieser Wert wird, wie die maximale Höhe, ebenfalls in Grad vom Horizont gemessen. Die Buchstaben stehen für Himmelsrichtungen – N ist Norden, WNW ist West-Nordwest und so weiter.<br/><strong>Verschwindet</strong> repräsentiert, wo im Nachthimmel die Internationale Raumstation Ihr Sichtfeld verlässt.<img src='https://spotthestation.nasa.gov/images/astro_horizon.png' />",
        question16:
          "16. Der Überflugplan zeigt an, dass die Raumstation sowohl aus derselben Richtung erscheint als auch verschwindet, wie ist das möglich? Z.B. - Zeit: Mo 15. Juli 23:57 Uhr, Sichtbar: 2 Min, Maximale Höhe: 51°, Erscheint: 51° über ENE, Verschwindet: 11° über ENE",
        answer16:
          "Die Spot the Station-Software rundet Richtungen auf die nächsten Haupt- und Zwischenhimmelsrichtungen ab. Dies kann dazu führen, dass es so aussieht, als ob die Station in derselben Richtung erscheint und verschwindet, obwohl sie über den Himmel reist. Dies geschieht typischerweise bei Überflügen mit einem kurzen Sichtfenster, da die Station schnell in (oder aus) den dunklen Schatten der Erde eintritt, wo wir von unserem Standort auf dem Boden aus ihren vollständigen Durchgang über den Himmel nicht beobachten können.",
        question17: "17. Kann ich eine Live-Karte des Standorts der Station anzeigen?",
        answer17:
          "Ja, die App enthält eine Echtzeitkarte, die die aktuelle Position der Station zeigt, während sie die Erde umkreist, und Ihnen eine visuelle Referenz bietet, um ihren Fortschritt zu verfolgen.",
        question18: "18. Was ist die AR-Funktion in der Spot the Station App?",
        answer18:
          "Die Augmented Reality (AR)-Funktion in der Spot the Station App ermöglicht es Benutzern, eine virtuelle Überlagerung des Pfades der Internationalen Raumstation am Himmel zu sehen. Diese Funktion hilft Benutzern, die Station genauer zu lokalisieren, indem sie ihr Gerät mit der Echtzeitposition der Station ausrichten.",
        question19: "19. Wie greife ich auf die AR-Funktion in der App zu?",
        answer19:
          "Um auf die AR-Funktion zuzugreifen, öffnen Sie die App und navigieren Sie zur AR-Ansicht im unteren Menü. Folgen Sie den Anweisungen auf dem Bildschirm, um die Kamera Ihres Geräts mit dem Himmel auszurichten, wo die App eine virtuelle Überlagerung anzeigt, die die Position und den Verlauf der Station anzeigt.",
        question20:
          "20. Benötige ich ein bestimmtes Gerät oder eine spezielle Software, um die AR-Funktion zu nutzen?",
        answer20:
          "Die AR-Funktion erfordert ein Gerät, das seine Ausrichtung im 3D-Raum bestimmen kann. Es erfordert spezielle Hardwareunterstützung, wie z.B. ein Gyroskop oder einen Bewegungskoprozessor. Ältere oder preisgünstige Geräte unterstützen diese Funktion möglicherweise nicht.",
        question21: "21. Wie funktioniert die AR-Funktion?",
        answer21:
          "Mit der Kamera und den Sensoren Ihres Geräts überlagert die AR-Funktion die Position der Station am Himmel auf Ihrem Bildschirm und passt sich in Echtzeit an, während Sie Ihr Gerät bewegen. Die App führt Sie dazu, Ihre Kamera in die richtige Richtung zu richten und zeigt Ihnen, wo die Station erscheinen und verschwinden wird.",
        question22: "22. Kann ich die AR-Funktion sowohl tagsüber als auch nachts nutzen?",
        answer22:
          "Ja, Sie können die AR-Funktion sowohl tagsüber als auch nachts nutzen; jedoch ist die beste Erfahrung typischerweise während der Dämmerung oder nachts, wenn die Station mit bloßem Auge sichtbar ist. Die AR-Überlagerung funktioniert unabhängig von den Lichtverhältnissen, aber tatsächliche Sichtungen hängen von der Sichtbarkeit ab.",
        question23: "23. Ist die AR-Überlagerung für alle Standorte genau?",
        answer23:
          "Ja, die AR-Funktion ist so konzipiert, dass sie genaue Positionsinformationen basierend auf Ihrem GPS-Standort liefert. Die Genauigkeit kann jedoch leicht variieren, abhängig von der Kalibrierung des Kompasses und der Sensoren Ihres Geräts. Wenn Sie Abweichungen bemerken, kalibrieren Sie den Kompass Ihres Geräts über die Einstellungen neu.",
        question24: "24. Kann die AR-Funktion bei genauen Sichtungszeiten helfen?",
        answer24:
          "Die AR-Funktion führt Sie visuell, um die Station zu dem genauen Zeitpunkt zu lokalisieren, an dem sie am Himmel erscheint. In Kombination mit den Sichtungswarnungen der App verbessert sie Ihre Fähigkeit, die Station zu sehen, indem sie Ihnen eine Live-Visualisierung der Richtung und Höhe bietet, um sie genau zu verfolgen.",
        question25: "25. Gibt es Tipps zur Optimierung meiner AR-Erfahrung?",
        answer25:
          "Für die beste AR-Erfahrung verwenden Sie die Funktion in einem offenen Bereich mit freiem Blick auf den Himmel. Vermeiden Sie Hindernisse wie hohe Gebäude oder Bäume, da diese die Sichtbarkeit blockieren können. Kalibrieren Sie den Kompass Ihres Geräts und stellen Sie sicher, dass Standortdienste und Kameraberechtigungen aktiviert sind, um eine reibungslose Funktion zu gewährleisten.",
        question26: "26. Ist die AR-Funktion sowohl auf Android als auch auf iOS verfügbar?",
        answer26:
          "Ja, die AR-Funktion ist sowohl in den iOS- als auch in den Android-Versionen der App verfügbar, sofern Ihr Gerät die Hardwareanforderungen erfüllt.",
        question27: "27. Funktioniert die App offline?",
        answer27:
          "Einige grundlegende Funktionen, wie der Zugriff auf zuvor heruntergeladene Sichtungspläne oder das Empfangen geplanter Benachrichtigungen, können offline funktionieren. Funktionen, die Echtzeitdaten erfordern, wie das Tracking, benötigen jedoch eine Internetverbindung.",
        question28: "28. Gibt es besondere Anforderungen für die Nutzung der App?",
        answer28:
          "Die App erfordert eine aktive Internetverbindung für Echtzeit-Tracking und Benachrichtigungen. Stellen Sie außerdem sicher, dass die Standortdienste Ihres Geräts für die App aktiviert sind, um standortspezifische Informationen zu erhalten.",
        question29: "29. Ist die App kostenlos nutzbar?",
        answer29:
          "Ja, die Spot the Station App ist kostenlos herunterzuladen und zu nutzen, ohne In-App-Käufe oder Abonnements.",
        question30: "30. Wen kann ich für App-Support kontaktieren?",
        answer30:
          "Für Unterstützung mit der Spot the Station App besuchen Sie die Support-Seite der NASA oder wenden Sie sich über die Feedback-Option innerhalb der App an uns.",
      },
    },
    astronauts: {
      title: "Wer ist jetzt in der Station?",
      number: "Anzahl der Personen:",
    },
    live: {
      title: "Live-Stream",
      description:
        "Derzeit wird ein Live-Video der Erde von einer externen HD-Kamera auf der ISS übertragen. Die Kamera schaut auf die Erde, gelegentlich quert ein Sonnenkollektor das Bild.",
    },
    tour: {
      title: "Virtuelle Tour",
    },
    videos: {
      title: "Stationsvideos",
    },
    gallery: {
      title: "Galerie",
    },
  },
}

export default de
export type Translations = typeof de
