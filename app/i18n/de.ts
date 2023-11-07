const de = {
  name: "Deutsch",
  errorScreen: {
    title: "Etwas ist schief gelaufen!",
    friendlySubtitle:
      'Dies ist der Bildschirm, den Ihre Benutzer in der Produktion sehen, wenn ein Fehler geworfen wird.Sie möchten diese Meldung (befinden Sie sich in "App/i18n/en.ts") und wahrscheinlich auch im Layout (`app/screens/fehlerscreen").Wenn Sie dies vollständig entfernen möchten, überprüfen Sie `app/app.tsx` auf die <Regelboundary> -Komponente.',
    reset: "App zurücksetzen",
  },
  snackBar: {
    ok: "OK",
    dismiss: "Zurückweisen",
    sightingsSaved: "Sichtungen für den letzten gespeicherten Ort geladen!",
    defaultError: "Ein gewisser Fehler wird aufgetretet",
    locationSaved: "Ort gespeichert",
    locationExist: "Ort mit diesem Titel existiert schon!",
    openSettingsError: "Einstellungen können nicht geöffnet werden!",
    shared: "Erfolgreich geteilt!",
    savedToGallery: "In der Galerie gespeichert",
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
  },
  thanksModal: {
    body: "Danke, dass Sie uns kontaktiert haben. Wir haben Ihre Nachricht erhalten und werden Ihre Anfrage bearbeiten. Bitte beachten Sie, dass diese Anwendung keine Benutzerdaten sammelt und wir daher nicht auf alle Nachrichten einzeln antworten können.",
    dismiss: "Zurückweisen",
  },
  privacy: {
    title: "Verwenden Sie Ihren Standort",
    body: "Wir verwenden Standortdaten, um die bevorstehenden Sichtungen an Ihrem aktuellen Standort zu berechnen.Bitte erteilen Sie die Standortberechtigungen, um diese Funktionalität zu ermöglichen.",
    agree: "ZUSTIMMEN",
    skip: "ÜBERSPRINGEN",
    policy: "Datenschutz-Bestimmungen",
  },
  notifications: {
    push: {
      title: "Erkennen Sie die Station jetzt!",
      subTitle: "Die Station übergeht über Ihnen",
    },
    before: {
      titleOne: "Entdecken Sie die Station in",
      titleTwo: "Protokoll!",
      subTitleOne: "Die Station übergeht über Ihnen in",
      subTitleTwo: "Minuten",
    },
  },
  units: {
    minute: "Mindest",
    kilometer: "km",
    kilogram: "kg",
    month: "Monat",
    metersPerSecond: "MS",
    time: "T",
  },
  tabNavigator: {
    homeTab: "Heim",
    issViewTab: "AR-Ansicht",
    issNowTab: "Tracker",
    resourcesTab: "Ressourcen",
    settingsTab: "Einstellungen",
  },
  onboarding: {
    splash: {
      title: "Entdecken Sie die Station",
      subTitle: "Schauen Sie in den Himmel und sehen Sie sich die Internationale Raumstation an,",
    },
    completeProfile: {
      notification: {
        title: "Benachrichtigungseinstellungen",
        label: "Holen Sie sich Push -Benachrichtigung",
        tip: "Holen Sie sich Warnungen, wenn sich die Raumstation Ihrem Standort nähert.",
        nextButton: "Nächste",
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
        serviceAlertTitle: "Standortdienste deaktivierien",
        serviceAlertBody: "Bitte ermöglichen Sie Ihre Standortdienste.",
        permissionAlertTitle: "Erlaubnis nicht erteilten",
        permissionAlertBody:
          "Wir verwenden Standortdaten, um die bevorstehenden Sichtungen an Ihrem aktuellen Standort zu berechnen. Bitte erteilen Sie die Standortberechtigungen, um diese Funktionalität zu ermöglichen.",
      },
    },
  },
  homeScreen: {
    initLoader: {
      message:
        "Station -Daten werden geladen. Dies kann einen Moment dauern, bis es abgeschlossen wird.",
      trajectoryError:
        "Die Station -Trajektoriendaten sind derzeit aufgrund der Serverwartung nicht verfügbar.Bitte schauen Sie später an.",
    },
    header: {
      firstTimeHead: "LISTE DER NÄCHSTEN SICHTUNGEN",
      secondTimeHead: "COUNTDOWN",
      timezone: "Zeitzone",
    },
    selectLocation: {
      title: "Ort auswählen",
      inputPlaceholder: "Suchort von City, Pin ...",
      current: "Aktueller Standort",
      saved: "Gespeicherte Standorte",
      nearby: "Nahe gelegene Standorte",
      search: "Suchergebnisse",
      cta: "Passen Sie Benachrichtigungen für diesen Ort an",
      actionTitle: "Alarm",
      refresh: "Aktualisierung",
    },
    selectSightings: {
      title: "Bevorstehende Sichtungen",
      sightings: "Sichtungen",
      selectMessage: "Wählen Sie Ereignisse aus, über die Sie benachrichtigt werden möchten.",
      switch: "Benachrichtigen Sie mich über alle bevorstehenden Veranstaltungen an diesem Ort.",
      aboveHorizon: "Über dem Horizont",
      today: "Heute",
      tomorrow: "Morgen",
      appears: "Erscheint",
      disappears: "Verschwindet",
      all: "Alle",
      timeOfDay: "Uhrzeit",
      night: "Nacht",
      twilight: "Dämmerung",
      duration: "Dauer",
      shorterThan2: "kürzer als 2 Minuten",
      longerThan2: "2 Minuten und länger",
      empty:
        "Von {{start}} bis {{end}} gibt es für diesen Standort keine potenziellen Station-Sichtungen.",
      coach: {
        title: "Symbole Beschreibung",
        moon: "Es wird Nacht am ausgewählten Ort sein, an dem sich die Station über dem Horizont befindet.",
        sunset:
          "Am ausgewählten Ort wird es eine Dämmerung geben, an der sich die Station über dem Horizont befindet.",
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
      skip: "Rundgang überspringen",
      next: "Nächste",
      finish: "Beenden",
      dismiss: "Zurückweisen",
      locationTitle: "Den Ort wechseln",
      locationData:
        "Sie können Ihren Standort direkt von hier direkt aus auswählen oder in eine andere ändern.",
      sightingsTitle: "Nächste Sichtung & Countdown",
      sightingsData:
        "In diesem Abschnitt werden Sie das Datum und einen Countdown -Timer für das nächste bevorstehende Station -Sicht in der Nähe Ihres ausgewählten Standorts angezeigt.Sie können auf die nächste Sichtbox tippen, um eine vollständige Liste der bevorstehenden Sichtungen zu sehen.",
      globeTitle: "Interaktive Erde",
      globeData:
        "Sie können die Echtzeitposition der Station ansehen, indem Sie auf dem Bildschirm wischen.Auf diese Weise können Sie mit der Erde interagieren und den Ort der Station in Echtzeit verfolgen.",
      mapTitle: "2D -Kartenansicht",
      mapData:
        "Dieser Abschnitt zeigt eine 2D -Darstellung des vollständigen Weges der Station gegen die Nacht- und Tagesregionen auf der ganzen Erde.",
      navigationTitle: "Navigation",
      navigationData:
        "Sie können im folgenden Navigationsmenü verschiedene Funktionen der App durchsuchen.",
    },
  },
  issView: {
    timeHeader: "Countdown",
    cameraPermissionText:
      "Sie haben die Verwendung der Kamera Ihres Telefons nicht zugelassen.Klicken Sie hier, um zuzulassen.",
    issCaptured: "Erfassen Sie diesen Moment",
    details: {
      title: "Internationale Raumstation - Details",
      orbitalSpeed: "Orbitalgeschwindigkeit",
      longitude: "Längengrad",
      latitude: "Breite",
      altitude: "Höhe",
      crewOnboard: "Typische Anzahl der Besatzungsmitglieder an Bord",
      launched: "Die Versammlung begann",
      launchedValue: "20. November 1998",
      mass: "Geschätzte Masse",
      dimensions: "Geschätzte Abmessungen",
      orbitalPeriod: "Umlaufzeit",
      orbitsPerDay: "Umlaufbahnen/Tag",
      dimensionsValue: "109 m breit x 73 m lang x 14 m hoch",
    },
    arNotSupported: "AR wird auf diesem Gerät nicht unterstützt",
    noOrientationSensor: "Orientierungssensor nicht verfügbar",
    screenshotError: "Screenshot kann nicht erstellt werden",
  },
  settings: {
    header: "Einstellungen",
    locationSettings: "Ortseinstellungen",
    notificationSettings: "Benachrichtigungseinstellungen",
    termsAndConditions: "Geschäftsbedingungen",
    contactUs: "Kontaktieren Sie uns",
    language: "Sprache",
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
      backButton: "Einstellungen",
      title: "Kontaktieren Sie uns",
      titlePlaceholder: "Wählen Sie den Titel",
      commentsPlaceholder: "Kommentare eingeben",
      sendButton: "Schicken",
      contactUsOptions: {
        reportAnIssue: "Ein Problem melden",
        improvementIdeas: "Verbesserungsideen",
        generalQuestions: "Allgemeine Fragen",
        comments: "Kommentare",
      },
    },
    notificationSettingsData: {
      backButton: "Einstellungen",
      notificationTitle: "Benachrichtigungseinstellungen",
      privacyTitle: "Datenschutzeinstellungen",
      upcomingLabel: "Kommende Veranstaltungen",
      customizeLabel: "Benachrichtigungen anpassen",
      upcomingTip: "Schalten Sie aus, um die Ereignisbenachrichtigungen zu beenden.",
      notifyMeBefore: "Benachrichtigen Sie mich vorher",
      turnOffNotifications: "BENACHRICHTIGUNGEN ABSCHALTEN",
      from: "Aus",
      until: "Bis",
    },
    locationSettingsData: {
      backToSettings: "Einstellungen",
      goBack: "Geh zurück",
      generalTitle: "Ortseinstellungen",
      cta: "Passen Sie Benachrichtigungen für diesen Ort an",
      locationPermission: "Erteilen Sie die Erlaubnis, den Standort zu verwenden",
      addNewLocation: {
        generalTitleAdd: "Neuen Standort hinzufügen",
        generalTitleEdit: "Standort bearbeiten",
        confirnModalButton: "Bestätigen",
        saveButton: "Sicherer Ort",
        searchInputPlaceholder: "Geben Sie Stadt, Reißverschluss oder Adresse ein",
        nameInputPlaceholder: "Speicherortname speichern",
      },
      removeLocation: {
        question: "Sind Sie sicher, diesen Ort zu löschen?",
        cancelButton: "Abbrechen",
        removeButton: "Löschen",
      },
    },
    localCalculations: "Lokale Berechnungen",
  },
  resources: {
    header: "Ressourcen",
    searchPlaceholder: "Suchartikel, Ereignisse usw.",
    suggestions: "VORSCHLÄGE",
    searchResults: "Suchergebnisse",
    tabs: {
      news: "Nachricht",
      about: "Um",
      details: "Einzelheiten",
    },
  },
}

export default de
export type Translations = typeof de
