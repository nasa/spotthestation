const de = {
  errorScreen: {
    title: "Etwas ist schief gelaufen!",
    friendlySubtitle:
      'Dies ist der Bildschirm, den Ihre Benutzer in der Produktion sehen, wenn ein Fehler geworfen wird.Sie möchten diese Meldung (befinden Sie sich in "App/i18n/en.ts") und wahrscheinlich auch im Layout (`app/screens/fehlerscreen").Wenn Sie dies vollständig entfernen möchten, überprüfen Sie `app/app.tsx` auf die <ErrorBoundary> -Komponente.',
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
    body: "Danke, dass Sie uns kontaktiert haben.Wir haben Ihre Nachricht bekommen und werden Ihre Anfrage bearbeiten. Wir hoffen, eine Lösung in zukünftigen Veröffentlichungen aufzunehmen. Bitte beachten Sie, dass diese Anwendung keine Benutzerdaten sammelt, sodass wir nicht auf alle Nachrichten einzeln beantworten können.",
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
      title: "Erkennen Sie die ISS jetzt!",
      subTitle: "Die ISS übergeht über Ihnen",
    },
    before: {
      titleOne: "Entdecken Sie die ISS in",
      titleTwo: "Protokoll!",
      subTitleOne: "Die ISS übergeht über Ihnen in",
      subTitleTwo: "Minuten",
    },
  },
  units: {
    minute: "Mindest",
    kilometer: "km",
    kilogram: "kg",
    month: "Monat",
    metersPerSecond: "MS",
  },
  tabNavigator: {
    homeTab: "Heim",
    issViewTab: "ISS -Ansicht",
    issNowTab: "ISS jetzt",
    resourcesTab: "Ressourcen",
    settingsTab: "Einstellungen",
  },
  onboarding: {
    splash: {
      title: "Entdecken Sie die Station",
      subTitle:
        "Schauen Sie in den Himmel und sehen Sie sich die Internationale Raumstation (ISS) an,",
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
        doneButton: "Erledigt",
        serviceAlertTitle: "Standortdienste deaktivierien",
        serviceAlertBody: "Bitte ermöglichen Sie Ihre Standortdienste.",
        permissionAlertTitle: "Erlaubnis nicht erteilten",
        permissionAlertBody:
          "Wir verwenden Standortdaten, um die bevorstehenden Sichtungen an Ihrem aktuellen Standort zu berechnen.Bitte erteilen Sie die Standortberechtigungen, um diese Funktionalität zu ermöglichen.",
      },
    },
  },
  homeScreen: {
    initLoader: {
      message:
        "ISS -Daten werden geladen. Dies kann einen Moment dauern, bis es abgeschlossen wird.",
      trajectoryError:
        "Die ISS -Trajektoriendaten sind derzeit aufgrund der Serverwartung nicht verfügbar.Bitte schauen Sie später an.",
    },
    header: {
      firstTimeHead: "Nächste Sichtung",
      secondTimeHead: "COUNTDOWN",
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
    },
    selectSightings: {
      title: "Bevorstehende Sichtungen",
      sightings: "Sichtungen",
      selectMessage: "Wählen Sie Ereignisse aus, über die Sie benachrichtigt werden möchten.",
      switch: "Benachrichtigen Sie mich über alle bevorstehenden Veranstaltungen an diesem Ort.",
      aboveHorizon: "Über dem Horizont",
      today: "Heute",
      tomorrow: "Morgen",
      coach: {
        title: "Symbole Beschreibung",
        moon: "Es wird Nacht am ausgewählten Ort sein, an dem sich die ISS über dem Horizont befindet.",
        sunset:
          "Am ausgewählten Ort wird es eine Dämmerung geben, an der sich die ISS über dem Horizont befindet.",
        sun: "Am ausgewählten Ort wird es Tageslicht geben, an dem sich die ISS über dem Horizont befindet.",
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
        "In diesem Abschnitt werden Sie das Datum und einen Countdown -Timer für das nächste bevorstehende ISS -Sicht in der Nähe Ihres ausgewählten Standorts angezeigt.Sie können auf die nächste Sichtbox tippen, um eine vollständige Liste der bevorstehenden Sichtungen zu sehen.",
      globeTitle: "Interaktive Erde",
      globeData:
        "Sie können die Echtzeitposition der ISS ansehen, indem Sie auf dem Bildschirm wischen.Auf diese Weise können Sie mit der Erde interagieren und den Ort der ISS in Echtzeit verfolgen.",
      mapTitle: "2D -Kartenansicht",
      mapData:
        "Dieser Abschnitt zeigt eine 2D -Darstellung des vollständigen Weges der ISS gegen die Nacht- und Tagesregionen auf der ganzen Erde.",
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
      distance: "Distanz",
      orbitalSpeed: "Orbitalgeschwindigkeit",
      longitude: "Längengrad",
      latitude: "Breite",
      altitude: "Höhe",
      crewOnboard: "Crew an Bord",
      launched: "Die Versammlung begann",
      launchedValue: "20. November 1998",
      mass: "Geschätzte Masse",
      dimensions: "Geschätzte Abmessungen",
      orbitalPeriod: "Umlaufzeit",
      orbitsPerDay: "Umlaufbahnen/Tag",
      orbitalDecay: "Orbitalverfall",
      dimensionsValue: "109 m breit x 73 m lang x 14 m hoch",
    },
  },
  settings: {
    header: "Einstellungen",
    locationSettings: "Ortseinstellungen",
    notificationSettings: "Benachrichtigungseinstellungen",
    termsAndConditions: "Geschäftsbedingungen",
    contactUs: "Kontaktieren Sie uns",
    termsAndConditionsData: {
      backButton: "Einstellungen",
      ios: {
        title: "Lizenzierte Antragsnutzungsvereinbarung",
        intro1:
          "Der Endbenutzer möchte den folgenden lizenzierten Antrag nutzen, der von der US-Regierung entwickelt wurde, die von der National Aeronautics and Space Administration in der 300 E Street SW, Washington, DC (nachfolgend NASA), vertreten wird:",
        appData: {
          line1: "Lizenzierte Anwendung:",
          line2: "Ausführung:",
          line3: "NASA-Technologienummer: MSC-27535-1 (im Folgenden lizenzierte Anwendung)",
        },
        contactData: {
          line1: "NASA -Kontaktpunkt:",
          line2: "Jacob Keaton",
          line3: "NASA -Hauptquartier",
          line4: "300 E Street SW",
          line5: "E-Mail: spotthestation@hq.nasa.gov",
        },
        intro2:
          "Die Behörde für die NASA zur Veröffentlichung des lizenzierten Antrags ist die NASA -Richtlinienrichtlinie (NPD) 2820.1c",
        intro3:
          "In Anbetracht der NASA-Veröffentlichung des lizenzierten Antrags auf den Endbenutzer und die Gewährung des Endbenutzers das nicht übertragbare Recht, die hier angegebene lizenzierte Anwendung zu verwenden, wie dies hier angegeben ist, wie in einem iPhone oder iPod Touch, das Endbenutzer besitzt, besitzt der Endbenutzer oder Kontrollpersonen, und wie die Nutzungsregeln zugelassen sind, sind die Nutzungsregeln in den APPS-Bedingungen und die Bedingungen für nicht-commercial-Nutzungen, in denen die Nutzungsbedingungen zustimmen, wie folgt.",
        body: {
          line1:
            "1. Die NASA und der Endbenutzer erkennen an, dass diese Vereinbarung nur zwischen der NASA und dem Endbenutzer abgeschlossen ist, und nicht mit Apple ist diese Vereinbarung nicht übertragbar, und die NASA, nicht Apple, ist ausschließlich für die lizenzierte Anwendung und den Inhalt davon verantwortlich.",
          line2:
            "2. Die NASA und der Endbenutzer erkennen an und vereinbaren, dass Apple und Apple-Tochtergesellschaften Dritte Begünstigte dieser Vereinbarung sind, und dass Apple nach Annahme der Bedingungen für diese Vereinbarung durch Endbenutzer das Recht (und als angenommene Annahme des Rechts angenommen wird), diese Vereinbarung gegen End-User als Drittanbieter dieser Vereinbarung durchzusetzen.",
          line3:
            "3. Der lizenzierte Antrag bleibt Eigentum der NASA.Der Endbenutzer erkennt an, dass er kein Eigentumsinteresse an dem lizenzierten Antrag im Rahmen dieser Vereinbarung erwirbt.Der lizenzierte Antrag ist nicht öffentlich zugänglich und nichts in dieser Vereinbarung wird als die zur Verfügung stehende lizenzierte Anmeldung ohne Beschränkung ausgelegt.",
          line4:
            "4. Es gibt keine Veröffentlichung, Verteilung oder Veröffentlichung des lizenzierten Antrags durch den Endbenutzer.",
          line5:
            "5. Die NASA haftet weder haftbar noch verantwortlich für die Wartung oder Aktualisierung des lizenzierten Antrags oder für die Korrektur von Fehlern im lizenzierten Antrag.Die NASA und Endbenutzer erkennen an, dass Apple keinerlei Verpflichtung hat, Wartungs- und Unterstützungsdienste in Bezug auf den lizenzierten Antrag bereitzustellen.",
          line6:
            "6. Der Endbenutzer repräsentiert und garantiert, dass (i) er/sie nicht in einem Land befindet, das einem Embargo der US-Regierung unterliegt oder von der US-Regierung als „Terrorist unterstützt“ bezeichnet wurde.und (ii) er/sie ist nicht in einer Liste der US -Regierung von verbotenen oder eingeschränkten Parteien aufgeführt.",
          line7:
            "7. Der lizenzierte Antrag wird „wie es ist“ ohne garantierte Gewährleistung gewählt, entweder ausgedrückt, impliziert oder gesetzlich, einschließlich, aber nicht beschränkt auf eine Garantie, die der lizenzierte Antrag an Spezifikationen entspricht, impliziten Gewährleistungen für die Handelsfähigkeit, Eignung für einen bestimmten Zweck und die Freiheit von Verstoß oder eine gewisse Garantie, die die lizenzierte Anmeldung befreit ist, fehlerfrei sind.In keinem Fall haftet die NASA für Schadensersatz, einschließlich, aber nicht beschränkt auf direkte, indirekte, besondere oder Folgeschäden, die sich aus oder in irgendeiner Weise mit dem lizenzierten Antrag ergeben, unabhängig davon, ob sie auf der Grundlage der Garantie, des Vertrags, des Vertrags, des Vertrags, des Vertrags, der Tortierung oder der Verluste, oder nicht, oder nicht, oder nicht, oder nicht, oder nicht.Der Endbenutzer erklärt sich damit einverstanden, auf alle Ansprüche gegen die US-Regierung, ihre Auftragnehmer und ihre Subunternehmer zu verzichten und die US-Regierung, ihre Auftragnehmer und ihre Subunternehmer für Schäden, die Endbenutzer von Endbenutzer aus der Verwendung des lizenzierten Antrags durch den Endbenutzer entstehen können, entschädigen und harmlos sind.",
          line8:
            "8. Im Falle eines Versäumnisses des lizenzierten Antrags auf die gesetzlich anwendbare Garantie kann der Endbenutzer Apple benachrichtigen, und Apple erstattet den Kaufpreis (falls vorhanden) für den lizenzierten Antrag an Endbenutzer.Soweit nach geltendem Recht zulässig, hat Apple keine weiteren Verluste, Verbindlichkeiten, Schäden, Kosten oder Kosten, die auf einen Ausfall des lizenzierten Antrags zur Einhaltung einer Garantie zurückzuführen sind.",
          line9:
            "9. NASA und Endbenutzer erkennen an, dass im Falle eines Anspruchs Dritter, dass der lizenzierte Antrag oder der Besitz und die Verwendung von lizenzierter Anmeldung des Endbenutzers, die Rechte des geistigen Eigentums, die NASA, nicht Apple, ausschließlich für die Untersuchung, Verteidigung, Einigung und Entladung eines solchen Anspruchs in Bezug auf das Intellektuelle, das Recht, nach dem Gesetz verantwortlich sein wird.",
          line10:
            "10. Die NASA und der Endbenutzer erkennen an, dass die NASA, nicht Apple für die Bekämpfung von Ansprüchen von Endbenutzer oder Dritten im Zusammenhang mit dem lizenzierten Antrag oder dem Besitz und /oder der Verwendung des lizenzierten Antrags des Endbenutzers, verantwortlich ist, einschließlich, aber nicht beschränkt auf: (i) Produkthaftungsansprüche;(ii) jede Behauptung, dass der lizenzierte Antrag keine anwendbaren gesetzlichen oder behördlichen Anforderungen entspricht, einschließlich aller gesetzlich geltenden Garantien;und (iii) Ansprüche, die sich im Verbraucherschutz oder einer ähnlichen Gesetzgebung ergeben.",
          line11:
            "11. Diese Vereinbarung wird ausgelegt, und die rechtlichen Beziehungen zwischen den Parteien, die sich für alle Zwecke des US -Bundesgesetzes befinden, werden festgelegt.",
          line12:
            "12. Diese Vereinbarung stellt das gesamte Verständnis und die Übereinstimmung zwischen der NASA und dem Endbenutzer in Bezug auf die Veröffentlichung des lizenzierten Antrags dar und kann nicht ersetzt, modifiziert oder geändert werden.",
          line13:
            "13. Durch die Akzeptanz und Verwendung des lizenzierten Antrags im Rahmen dieser Vereinbarung stimmt der Endbenutzer hiermit alle hierin alle Bedingungen zu.",
        },
      },
      android: {
        title: "Lizenzierte Antragsnutzungsvereinbarung",
        intro1:
          "Der Endbenutzer möchte das folgende Produkt verwenden, das von der Regierung der Vereinigten Staaten entwickelt wurde, wie sie von der National Aeronautics and Space Administration, Ames Research Center, im Moffett Field, CA 94035 (nachfolgend NASA), vertreten:",
        appData: {
          line1: "Software:",
          line2: "Ausführung:",
          line3: "NASA-Technologienummer: MSC-27535-1",
        },
        intro2:
          "Die Behörde für die NASA zur Veröffentlichung des lizenzierten Antrags ist die NASA -Richtlinienrichtlinie (NPD) 2820.1c.",
        intro3:
          "NOW THEREFORE, in consideration of NASA releasing the LICENSED APPLICATION to END-USER and granting END-USER the non-transferable right to use the LICENSED APPLICATION for personal, noncommercial use and as specified herein and as permitted by the Android Market Terms of Service on any Android-powered mobile device (“Device”) that END-USER owns or controls, END-USER agrees as follows:",
        body: {
          line1:
            "1. Der lizenzierte Antrag bleibt Eigentum der NASA.Der Endbenutzer erkennt an, dass er kein Eigentumsinteresse an dem lizenzierten Antrag im Rahmen dieser Vereinbarung erwirbt.Der lizenzierte Antrag ist nicht öffentlich zugänglich und nichts in dieser Vereinbarung wird als die zur Verfügung stehende lizenzierte Anmeldung ohne Beschränkung ausgelegt.",
          line2:
            "2. Es darf keine Veröffentlichung, Verteilung oder Veröffentlichung des lizenzierten Antrags durch den Endbenutzer geben.",
          line3:
            "3. Die NASA haftet weder haftbar noch verantwortlich für die Wartung oder Aktualisierung des lizenzierten Antrags oder für die Korrektur von Fehlern im lizenzierten Antrag.",
          line4:
            "4. Endbenutzer vertritt und garantiert, dass (i) er/sie nicht in einem Land befindet, das einem Embargo der US-Regierung unterliegt oder von der US-Regierung als „Terrorist unterstützt“ bezeichnet wurde.und (ii) er/sie ist nicht in einer Liste der US -Regierung von verbotenen oder eingeschränkten Parteien aufgeführt.",
          line5:
            "5. Der lizenzierte Antrag wird „wie es ist“ ohne garantierte Gewährleistung gewählt, entweder ausgedrückt, impliziert oder gesetzlich, einschließlich, aber nicht beschränkt auf eine Garantie, dass der lizenzierte Antrag Spezifikationen entspricht, impliziten Gewährleistungen für die Handelsfähigkeit, Eignung für einen bestimmten Zweck und die Freiheit von Verstoß oder eine gewisse Garantie, die die lizenzierte Anmeldung fehlerfrei ist.In keinem Fall haftet die NASA für Schadensersatz, einschließlich, aber nicht beschränkt auf direkte, indirekte, besondere oder Folgeschäden, die sich aus oder in irgendeiner Weise mit dem lizenzierten Antrag ergeben, unabhängig davon, ob sie auf der Grundlage der Garantie, des Vertrags, des Vertrags, des Vertrags, des Vertrags, der Sortierung oder der Verluste, oder nicht, oder nicht, oder nicht, oder nicht, oder nicht.Der Endbenutzer erklärt sich damit einverstanden, auf alle Ansprüche gegen die US-Regierung, ihre Auftragnehmer und ihre Subunternehmer zu verzichten und die US-Regierung, ihre Auftragnehmer und ihre Subunternehmer für Schäden, die Endbenutzer von Endbenutzer aus der Verwendung des lizenzierten Antrags durch Endbenutzer entstehen, entschädigen und harmlos sind, und die zu lizenzierten Anträgen durch die lizenzierten Anwendung durch die lizenzierten Antrag, die nach dem lizenzierten Antrag auf lizenzierte Anwendungen entspricht, nach, oder der zu ergebenden Anträgen, in der sie sich aus den Erscheinen ergeben haben, nach, um zu ergeben.",
          line6:
            "6. Diese Vereinbarung wird ausgelegt, und die rechtlichen Beziehungen zwischen den Parteien, die sie für alle Zwecke des US -Bundesgesetzes für alle Zwecke des US -Bundesstaates entspricht, werden festgelegt.",
          line7:
            "7. Diese Vereinbarung stellt das gesamte Verständnis und die Übereinstimmung zwischen der NASA und dem Endbenutzer in Bezug auf die Veröffentlichung des lizenzierten Antrags dar und kann nicht ersetzt, modifiziert oder geändert werden.",
          line8:
            "8. Durch die Akzeptanz und Verwendung des lizenzierten Antrags im Rahmen dieser Vereinbarung stimmt der Endbenutzer hiermit alle hierin alle Bedingungen zu.",
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
      locationPermission: "Erlaubnis zur Erlaubnis zu Gewähren",
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
