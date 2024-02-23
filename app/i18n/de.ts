const de = {
  name: "Deutsch",
  errorScreen: {
    title: "Etwas ist schief gelaufen!",
    friendlySubtitle:
      'Dies ist der Fehlerbildschirm, den Ihre Benutzer in der Produktion sehen, wenn ein Fehler auftritt. Sie möchten diese Meldung (befinden Sie sich in "App/i18n/de.ts") und wahrscheinlich auch im Layout (`app/screens/errorscreen") bearbeiten. Wenn Sie dies vollständig entfernen möchten, überprüfen Sie `app/app.tsx` auf die <Regelboundary>-Komponente.',
    reset: "App zurücksetzen",
  },
  snackBar: {
    ok: "OK",
    dismiss: "Schließen",
    sightingsSaved: "Sichtungen für den zuletzt gespeicherten Ort geladen!",
    defaultError: "Ein Fehler ist aufgetreten",
    locationSaved: "Ort gespeichert",
    locationExist: "Ein Ort mit diesem Namen existiert bereits!",
    openSettingsError: "Die Einstellungen können nicht geöffnet werden!",
    shared: "Erfolgreich geteilt!",
    savedToGallery: "In der Galerie gespeichert",
  },
  permissionsModal: {
    close: "Schließen",
    openSettings: "Einstellungen öffnen",
    body:
      "Um diese Funktion nutzen zu können, müssen Sie die Erlaubnis haben, auf die Galerie zuzugreifen.",
  },
  permissionsAndroid: {
    title: "Berechtigung zum Speichern von Videos",
    message:
      "Diese App benötigt diese Berechtigung, um Videos auf Ihrem Gerät zu speichern.",
    buttonNeutral: "Später fragen",
    buttonNegative: "Abbrechen",
    buttonPositive: "OK",
  },
  thanksModal: {
    body:
      "Vielen Dank für Ihre Kontaktaufnahme. Wir haben Ihre Nachricht erhalten und werden Ihre Anfrage bearbeiten. Bitte beachten Sie, dass diese Anwendung keine Benutzerdaten sammelt und wir daher nicht auf alle Nachrichten individuell antworten können.",
    dismiss: "Schließen",
  },
  privacy: {
    title: "Verwenden Sie Ihren Standort",
    body:
      "Wir verwenden Standortdaten, um bevorstehende Sichtungen an Ihrem aktuellen Standort zu berechnen. Bitte erteilen Sie die Standortfreigabe, um diese Funktion zu ermöglichen.",
    agree: "ZUSTIMMEN",
    skip: "ÜBERSPRINGEN",
    policy: "Datenschutzbestimmungen",
  },
  notifications: {
    push: {
      title: "Erkennen Sie jetzt die Station!",
      subTitle: "Die Station überfliegt Sie",
    },
    before: {
      titleOne: "Entdecken Sie die Station in",
      titleTwo: "Minuten!",
      subTitleOne: "Die Station überfliegt Sie in",
      subTitleTwo: "Minuten!",
    },
  },
  units: {
    minute: "min",
    kilometer: "km",
    kilogram: "kg",
    month: "Monat",
    metersPerSecond: "M/S",
    time: "T",
  },
  tabNavigator: {
    homeTab: "Startseite",
    issViewTab: "AR-Ansicht",
    issNowTab: "Tracker",
    resourcesTab: "Ressourcen",
    settingsTab: "Einstellungen",
  },
  onboarding: {
    splash: {
      title: "Entdecken Sie die Station",
      subTitle:
        "Schauen Sie in den Himmel und entdecken Sie die Internationale Raumstation.",
    },
    completeProfile: {
      notification: {
        title: "Benachrichtigungs-Einstellungen",
        label: "Erhalten Sie Push-Benachrichtigung",
        tip:
          "Benachrichtigung erhalten, wenn sich die Raumstation Ihrem Standort nähert.",
        nextButton: "Weiter",
      },
      location: {
        title: "Ihr Standort",
        subtitle:
          "Bitte erlauben Sie der App, Ihren Standort automatisch zu erkennen, oder geben Sie Ihren Standort manuell an.",
        detectButton: "Meinen Standort erkennen",
        orLabel: "oder",
        selectLocation: "Geben Sie Ihren Standort ein",
        detecting: "Standort erkennen...",
        doneButton: "Fertig",
        serviceAlertTitle: "Standortdienste deaktiviert",
        serviceAlertBody: "Bitte aktivieren Sie Ihre Standortdienste.",
        permissionAlertTitle: "Berechtigung nicht erteilt",
        permissionAlertBody:
          "Wir verwenden Standortdaten, um bevorstehenden Sichtungen an Ihrem aktuellen Standort zu berechnen. Bitte erteilen Sie die Standortberechtigungen, um diese Funktionalität zu ermöglichen.",
      },
    },
  },
  homeScreen: {
    initLoader: {
      message: "Stationdaten werden geladen… Dies kann einen Moment dauern.",
      trajectoryError:
        "Die Stationtrajektoriedaten sind derzeit wegen Serverwartung nicht verfügbar. Bitte versuchen Sie es später noch einmal.",
    },
    header: {
      firstTimeHead: "LISTE DER NÄCHSTEN SICHTUNGEN",
      secondTimeHead: "COUNTDOWN",
      timezone: "Zeitzone",
    },
    selectLocation: {
      title: "Ort auswählen",
      inputPlaceholder: "Suchen Sie Ihren Standort über Stadt, Postleitzahl...",
      current: "Aktueller Standort",
      saved: "Gespeicherte Standorte",
      nearby: "Standorte in der Nähe",
      search: "Suchergebnisse",
      cta: "Benachrichtigungen für diesen Standort anpassen",
      actionTitle: "Benachrichtigung",
      refresh: "Aktualisieren",
    },
    selectSightings: {
      title: "Bevorstehende Sichtungen",
      sightings: "Sichtungen",
      selectMessage:
        "Ereignisse auswählen, über die Sie benachrichtigt werden möchten.",
      switch:
        "Über alle bevorstehenden Ereignisse an diesem Ort benachrichtigen.",
      aboveHorizon: "Über dem Horizont",
      maxHeight: "Maximale Höhe von",
      today: "Heute",
      tomorrow: "Morgen",
      appears: "Erscheint",
      disappears: "Verschwindet",
      all: "Alle",
      timeOfDay: "Tageszeit",
      night: "Nacht",
      twilight: "Dämmerung",
      duration: "Dauer",
      shorterThan2: "kürzer als 2 Minuten",
      longerThan2: "2 Minuten und länger",
      empty:
        "Von {{start}} bis {{end}} gibt es keine potenziellen Station-Sichtungen für diesen Standort.",
      coach: {
        title: "Symbol Beschreibung",
        moon:
          "Am gewählten Standort, an dem sich die Station über dem Horizont befindet, wird es Nacht sein.",
        sunset:
          "Am gewählten Standort, an dem sich die Station über dem Horizont befindet, wird es eine Dämmerung geben.",
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
      skip: "Tour überspringen",
      next: "Weiter",
      finish: "Beenden",
      dismiss: "Schließen",
      locationTitle: "Standort wechseln",
      locationData:
        "Sie können direkt von hier aus einen anderen Standort auswählen oder ändern.",
      sightingsTitle: "Nächste Sichtung & Countdown",
      sightingsData:
        "In diesem Bereich wird das Datum und ein Countdown-Timer für die nächste Sichtung der Station in der Nähe des von Ihnen gewählten Standortes angezeigt. Sie können auf das Feld Nächste Sichtung tippen, um eine vollständige Liste der nächsten Sichtungen anzuzeigen.",
      globeTitle: "Interaktive Erde",
      globeData:
        "Sie können die Position der Station in Echtzeit anzeigen, indem Sie über den Bildschirm streichen. So können Sie mit der Erde interagieren und die Position der ISS in Echtzeit verfolgen.",
      mapTitle: "2D-Kartenansicht",
      mapData:
        "Dieser Ausschnitt zeigt eine 2D-Darstellung der gesamten Bahn der Station im Vergleich zu den Tag- und Nachtregionen auf der Erde.",
      navigationTitle: "Navigation",
      navigationData:
        "Im folgenden Navigationsmenü können Sie durch verschiedene Funktionen der Anwendung navigieren.",
    },
  },
  issView: {
    timeHeader: "Countdown",
    cameraPermissionText:
      "Sie haben die Verwendung der Kamera Ihres Telefons nicht zugelassen. Klicken Sie hier, um sie zuzulassen.",
    issCaptured: "Erfassen Sie diesen Moment",
    details: {
      title: "Internationale Raumstation - Details",
      orbitalSpeed: "Orbitalgeschwindigkeit",
      longitude: "Längengrad",
      latitude: "Breitengrad",
      altitude: "Höhengrad",
      crewOnboard: "Typische Anzahl der Besatzungsmitglieder an Bord",
      launched: "Der Bau begann",
      launchedValue: "20. November 1998",
      mass: "Geschätzte Masse",
      dimensions: "Geschätzte Abmessungen",
      orbitalPeriod: "Umlaufzeit",
      orbitsPerDay: "Umlaufbahnen/Tag",
      dimensionsValue: "109m breit x 73m lang x 14m hoch",
    },
    arNotSupported: "AR wird auf diesem Gerät nicht unterstützt",
    noOrientationSensor: "Orientierungssensor nicht verfügbar",
    noMagnetometerSensor: "Magnetometer ist nicht verfügbar",
    screenshotError: "Screenshot kann nicht erstellt werden",
  },
  settings: {
    header: "Einstellungen",
    locationSettings: "Standort-Einstellungen",
    notificationSettings: "Benachrichtigungs-Einstellungen",
    termsAndConditions: "Geschäftsbedingungen",
    contactUs: "Kontaktieren Sie uns",
    language: "Sprache",
    calibrateCompass: "Kompasskalibrierung",
    calibrateCompassData: {
      instructions:
        "Um den Kompass zu kalibrieren, drehen Sie Ihr Gerät mehrmals in einer Acht-Figur.",
      accuracy: "Sensorgenauigkeit:",
      low: "Niedrig",
      medium: "Mittel",
      high: "Hoch",
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
          line3:
            "NASA Technology Number: MSC-27535-1 (hereinafter LICENSED APPLICATION)",
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
      titlePlaceholder: "Titel wählen",
      commentsPlaceholder: "Kommentar eingeben",
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
      notificationTitle: "Benachrichtigungs-Einstellungen",
      privacyTitle: "Datenschutz-Einstellungen",
      upcomingLabel: "Kommende Veranstaltungen",
      customizeLabel: "Benachrichtigungen anpassen",
      upcomingTip: "Ausschalten, um keine Benachrichtungen mehr zu erhalten",
      notifyMeBefore: "VORHER BENACHRICHTIGEN",
      turnOffNotifications: "BENACHRICHTIGUNGEN ABSCHALTEN",
      rangeInputPlaceholder: "Wählen Sie zwischen 1 bis 120 Minuten",
      customOption: "Benutzerdefiniert",
      from: "Von",
      until: "Bis",
    },
    locationSettingsData: {
      backToSettings: "Einstellungen",
      goBack: "Zurück",
      generalTitle: "Standort-Einstellungen",
      cta: "Benachrichtigungen für diesen Standort anpassen",
      locationPermission:
        "Erteilen Sie die Berechtigung, den Standort zu verwenden",
      addNewLocation: {
        generalTitleAdd: "Neuer Standort hinzufügen",
        generalTitleEdit: "Standort bearbeiten",
        confirnModalButton: "Bestätigen",
        saveButton: "Ort speichern",
        searchInputPlaceholder: "Ort, Postleitzahl oder Adresse eingeben",
        nameInputPlaceholder: "Standort speichern",
      },
      removeLocation: {
        question: "Sind Sie sicher, dass sie diesen Standort löschen möchten?",
        cancelButton: "Abbrechen",
        removeButton: "Löschen",
      },
    },
    localCalculations: "Lokale Berechnungen",
  },
  resources: {
    header: "Ressourcen",
    searchPlaceholder: "Suchen Sie nach Artikeln, Ereignissen usw.",
    suggestions: "VORSCHLÄGE",
    searchResults: "Suchergebnisse",
    liveTitle: "Hochauflösendes Live-Streaming-Video der Erde",
    liveDescription:
      "Derzeit wird ein Live-Video der Erde von einer externen HD-Kamera auf der ISS übertragen. Die Kamera schaut auf die Erde, gelegentlich überquert ein Sonnenkollektor das Bild.",
    tabs: {
      news: "News",
      about: "Über",
      details: "Details",
      live: "Live-Stream",
    },
  },
}

export default de
export type Translations = typeof de
