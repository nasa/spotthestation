const pl = {
  name: "Polski",
  errorScreen: {
    title: "Coś poszło nie tak!",
    friendlySubtitle:
      "To jest ekran, który zobaczą Twoi użytkownicy w produkcji, gdy wystąpi błąd. Będziesz chciał dostosować tę wiadomość (znajdującą się w `app/i18n/en.ts`) i prawdopodobnie również układ (`app/screens/ErrorScreen`). Jeśli chcesz to całkowicie usunąć, sprawdź komponent <ErrorBoundary> w `app/app.tsx`.",
    reset: "RESETUJ APLIKACJĘ",
  },
  snackBar: {
    ok: "OK",
    dismiss: "Odrzuć",
    sightingsSaved: "Obserwacje dla ostatniej zapisanej lokalizacji załadowane!",
    defaultError: "Wystąpił błąd",
    locationSaved: "Lokalizacja zapisana",
    locationExist: "Lokalizacja o tym tytule już istnieje!",
    openSettingsError: "Nie można otworzyć ustawień!",
    shared: "Pomyślnie udostępniono!",
    savedToGallery: "Zapisano w galerii",
  },
  outdatedModal: {
    title: "Aktualizacja dostępna",
    body: "Nowa wersja aplikacji jest dostępna! Pobierz nową wersję na",
    buttonNegative: "Anuluj",
    buttonPositive: "Pobierz",
  },
  permissionsModal: {
    close: "Zamknij",
    openSettings: "Otwórz ustawienia",
    bodyGallery: "Aby korzystać z tej funkcji, musisz przyznać uprawnienia do dostępu do galerii.",
    bodyCalendar: "Aby skorzystać z tej funkcji, musisz zezwolić na dostęp do kalendarza.",
  },
  fontSizeModal: {
    title: "Rozmiar czcionki za duży",
    body1:
      "Wygląda na to, że rozmiar czcionki na Twoim urządzeniu jest ustawiony zbyt wysoko. Może to spowodować, że niektóre istotne informacje zostaną obcięte lub wyświetlone nieprawidłowo w aplikacji.",
    bodyAndroid:
      "Aby dostosować rozmiar czcionki, przejdź do Ustawienia → Wyświetlacz → Rozmiar i styl czcionki → Dostosuj suwak do mniejszego rozmiaru.",
    bodyIOS:
      "Aby dostosować rozmiar czcionki, przejdź do Ustawienia → Dostępność → Wyświetlacz i rozmiar tekstu → Większy tekst → Dostosuj suwak do mniejszego rozmiaru.",
    cancel: "Anuluj",
    settings: "Przejdź do Ustawień",
  },
  permissionsAndroid: {
    title: "Uprawnienia do zapisywania filmów",
    message: "Ta aplikacja potrzebuje uprawnień do zapisywania filmów na Twoim urządzeniu.",
    buttonNeutral: "Zapytaj mnie później",
    buttonNegative: "Anuluj",
    buttonPositive: "OK",
    alarmPermissionTitle: "Wymagane uprawnienia",
    alarmPermissionMessage:
      "Proszę przyznać uprawnienia do alarmów i przypomnień na następnym ekranie, aby otrzymywać powiadomienia o nadchodzących obserwacjach.",
  },
  thanksModal: {
    body: "Dziękujemy za kontakt z nami. Otrzymaliśmy Twoją wiadomość i przetworzymy Twoje zgłoszenie. Proszę pamiętać, że ta aplikacja nie zbiera danych użytkowników, więc nie możemy odpowiadać na wszystkie wiadomości indywidualnie. Proszę odwiedzić stronę z Najczęściej Zadawanymi Pytaniami, aby sprawdzić, czy jest odpowiedź na Twoje pytanie.",
    dismiss: "Odrzuć",
    faq: "Najczęściej Zadawane Pytania",
  },
  privacy: {
    title: "Użyj swojej lokalizacji",
    body: "Używamy danych lokalizacyjnych do obliczania nadchodzących obserwacji w Twojej bieżącej lokalizacji. NIE wymagamy dostępu do danych lokalizacyjnych, gdy aplikacja nie jest używana. Proszę przyznać uprawnienia do lokalizacji, aby umożliwić tę funkcjonalność",
    agree: "ZGADZAM SIĘ",
    skip: "POMIŃ",
    policy: "Polityka prywatności",
  },
  notifications: {
    push: {
      title: "Zobacz Stację teraz!",
      subTitleIos: "Stacja przechodzi nad Tobą o",
      subTitleAndroid: "Stacja przechodzi nad Tobą ({{time}}) o",
    },
    before: {
      title: "Zobacz stację za {{amount}} {{units}}!",
      subTitleIos: "Stacja przeleci nad tobą za {{amount}} {{units}} w {{location}}",
      subTitleAndroid: "Stacja przeleci nad tobą za {{amount}} {{units}} ({{time}}) w {{location}}",
      minutes: "minut",
      hours: "godzin",
    },
    timeLeft: "POZOSTAŁY CZAS",
  },
  units: {
    minute: "min",
    kilometer: "km",
    kilogram: "kg",
    month: "miesiąc",
    metersPerSecond: "M/S",
    time: "T",
    hour: "godz",
    mile: "mi",
    foot: "ft",
    meter: "m",
    pound: "lbs",
    milesPerHour: "mph",
  },
  tabNavigator: {
    homeTab: "Strona główna",
    issViewTab: "Widok AR",
    issNowTab: "Tracker",
    resourcesTab: "Zasoby",
    settingsTab: "Ustawienia",
  },
  onboarding: {
    splash: {
      title: "Zobacz\nStację",
      subTitle: "Spójrz w niebo i zobacz Międzynarodową Stację Kosmiczną",
    },
    completeProfile: {
      notification: {
        title: "Ustawienia powiadomień",
        label: "Otrzymuj powiadomienia push",
        tip: "Otrzymuj powiadomienia, gdy stacja kosmiczna zbliża się do Twojej lokalizacji.",
        nextButton: "Dalej",
      },
      location: {
        title: "Twoja lokalizacja",
        subtitle:
          "Proszę pozwolić aplikacji automatycznie wykryć Twoją lokalizację lub podać ją ręcznie.",
        detectButton: "Wykryj moją lokalizację",
        orLabel: "lub",
        selectLocation: "Wprowadź swoją lokalizację",
        detecting: "Wykrywanie lokalizacji...",
        doneButton: "Gotowe",
        serviceAlertTitle: "Usługi lokalizacyjne wyłączone",
        serviceAlertBody: "Proszę włączyć usługi lokalizacyjne, aby kontynuować.",
        permissionAlertTitle: "Brak przyznanych uprawnień",
        permissionAlertBody:
          "Używamy danych lokalizacyjnych do obliczania nadchodzących obserwacji w Twojej bieżącej lokalizacji. Proszę przyznać uprawnienia do lokalizacji, aby umożliwić tę funkcjonalność.",
      },
    },
  },
  homeScreen: {
    initLoader: {
      message: "Ładowanie danych stacji… To może chwilę potrwać.",
      trajectoryError:
        "Dane trajektorii stacji są obecnie niedostępne z powodu konserwacji serwera. Proszę spróbować ponownie później.",
      noNetwork:
        "Dane trajektorii stacji są obecnie niedostępne z powodu braku połączenia. Proszę spróbować ponownie później.",
    },
    header: {
      firstTimeHead: "NASTĘPNA OBSERWACJA",
      secondTimeHead: "ODLICZANIE",
      timezone: "Strefa czasowa",
      opportunities: "Obserwacje",
    },
    selectLocation: {
      title: "Wybierz lokalizację",
      inputPlaceholder: "Wyszukaj lokalizację według miasta, kodu pocztowego...",
      current: "Bieżąca lokalizacja",
      saved: "Zapisane lokalizacje",
      nearby: "Bliskie lokalizacje",
      search: "Wyniki wyszukiwania",
      cta: "Dostosuj powiadomienia dla tej lokalizacji",
      actionTitle: "Alert",
      refresh: "Odśwież",
    },
    selectSightings: {
      upcomingSightings: "Nadchodzące Obserwacje",
      pastSightings: "Przeszłe Obserwacje",
      selectMessage: "Wybierz wydarzenia, o których chcesz być powiadamiany.",
      switch: "Powiadom mnie o wszystkich nadchodzących wydarzeniach w tej lokalizacji.",
      aboveHorizon: "Nad horyzontem",
      maxHeight: "Maksymalna wysokość",
      today: "Dziś",
      tomorrow: "Jutro",
      appears: "Pojawia się",
      disappears: "Znika",
      all: "Wszystkie",
      timeOfDay: "Pora dnia",
      night: "Noc",
      twilight: "Zmierzch",
      duration: "Czas trwania",
      shorterThan2: "krótsze niż 2 minuty",
      between2And4: "między 2 a 4 minutami",
      longerThan4: "4 minuty i dłużej",
      empty: "Brak potencjalnych obserwacji stacji dla tej lokalizacji od {{start}} do {{end}}.",
      shareTitle: "Stacja przechodzi nad {{location}} w dniu {{date}}",
      shareAllTitle: "Stacja przelatuje nad {{location}}:",
      shareLink:
        "Aby dowiedzieć się więcej i śledzić stację za pomocą rozszerzonej rzeczywistości, pobierz aplikację na",
      calendarEventTitle: "Zobacz stację w {{location}}!",
      calendarSuccess: "Wydarzenie w kalendarzu utworzone pomyślnie",
      calendarError: "Nie można utworzyć wydarzenia w kalendarzu",
      coach: {
        title: "Opis ikon",
        moon: "Będzie noc w wybranej lokalizacji, gdy stacja będzie nad horyzontem.",
        sunset: "Będzie zmierzch w wybranej lokalizacji, gdy stacja będzie nad horyzontem.",
      },
      cloudCover: {
        title: "Pokrycie chmur",
        any: "Dowolny",
        low: "Niskie (<25%)",
        medium: "Średnie (25-50%)",
      },
      shareAll: "Udostępnij listę obserwacji",
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
      skip: "Pomiń wycieczkę",
      next: "Dalej",
      finish: "Zakończ",
      dismiss: "Odrzuć",
      locationTitle: "Zmień lokalizację",
      locationData: "Możesz wybrać lub zmienić swoją lokalizację na inną bezpośrednio stąd.",
      sightingsTitle: "Następna obserwacja i odliczanie",
      sightingsData:
        "Ta sekcja pokazuje datę/czas i odliczanie do następnej nadchodzącej obserwacji stacji w pobliżu wybranej lokalizacji. Możesz dotknąć pola Obserwacje, aby zobaczyć pełną listę ostatnich i nadchodzących obserwacji.",
      globeTitle: "Interaktywna Ziemia",
      globeData:
        "Możesz zobaczyć rzeczywistą pozycję stacji, przesuwając ekran. Pozwala to na interakcję z Ziemią i śledzenie lokalizacji stacji w czasie rzeczywistym.",
      mapTitle: "Widok mapy 2D",
      mapData:
        "Ta sekcja pokazuje dwuwymiarową reprezentację pełnej ścieżki stacji w stosunku do regionów nocnych i dziennych na Ziemi.",
      navigationTitle: "Nawigacja",
      navigationData: "Możesz przeglądać różne funkcje aplikacji z menu nawigacyjnego poniżej.",
    },
  },
  issView: {
    timeHeader: "Odliczanie",
    cameraPermissionText:
      "Nie zezwoliłeś na użycie kamery w telefonie. Kliknij tutaj, aby zezwolić.",
    issCaptured: "Uchwyć ten moment",
    details: {
      title: "Informacje",
      orbitalSpeed: "Prędkość orbitalna",
      longitude: "Długość geograficzna",
      latitude: "Szerokość geograficzna",
      altitude: "Wysokość",
      crewOnboard: "Typowa liczba załogi na pokładzie",
      launched: "Rozpoczęcie montażu",
      launchedValue: "20 listopada 1998",
      mass: "Szacowana masa",
      dimensions: "Szacowane wymiary",
      orbitalPeriod: "Okres orbitalny",
      orbitsPerDay: "Orbity/dzień",
      dimensionsValue: "{{width}} szerokości x {{length}} długości x {{height}} wysokości",
      dateTime: "Data i czas",
      maxHeight: "Maksymalna wysokość",
      duration: "Czas trwania nad horyzontem",
      appears: "Pojawia się",
      disappears: "Znika",
      distance: "Odległość",
      nextSighting: "Następna obserwacja",
    },
    arNotSupported: "AR nie jest obsługiwane na tym urządzeniu",
    noOrientationSensor: "Czujnik orientacji nie jest dostępny",
    noMagnetometerSensor: "Magnetometr nie jest dostępny",
    screenshotError: "Nie można uchwycić zrzutu ekranu",
    coachMarks: {
      circleTitle: "Zobacz Stację",
      circleData:
        "Aby zobaczyć stację, przesuń telefon w kierunku strzałki poza okręgiem. Gdy się zbliżysz, kolor okręgu zmieni się na zielony.",
      compassTitle: "Kompas",
      compassData:
        "Ten kompas pokazuje kierunek, w którym patrzysz, oraz względny kierunek, w którym możesz zobaczyć stację.",
      infoTitle: "Informacje",
      infoData:
        "Ten przełącznik otwiera lub zamyka okno ze szczegółowymi informacjami o bieżącej lub następnej nadchodzącej obserwacji oraz informacje na żywo o stacji.",
      trajectoryTitle: "Trajektoria stacji",
      trajectoryData:
        "Ten przełącznik włącza lub wyłącza trajektorię stacji na ekranie. Linia ciągła pokazuje przeszłą, a linia przerywana przyszłą trajektorię stacji.",
      arTitle: "Widok AR",
      arData: "Ten przełącznik przełącza między pełnym ekranem a częściowym widokiem AR.",
      shareTitle: "Udostępnij",
      shareData:
        "Ten przycisk pozwala udostępnić zrzut ekranu widoku AR za pomocą wiadomości tekstowej, e-maila lub mediów społecznościowych.",
      screenshotTitle: "Zrzut ekranu",
      screenshotData:
        "Ten przycisk pozwala uchwycić zrzut ekranu widoku AR, aby zapisać go w galerii zdjęć.",
      videoTitle: "Nagrywanie wideo",
      videoData:
        "Ten przycisk pozwala nagrać wideo widoku AR, aby uchwycić momenty, w których zobaczysz stację.",
    },
    safetyReminder: {
      title: "Uwaga: Przypomnienie o bezpieczeństwie",
      subtitle1: "Zalecany nadzór rodzicielski:",
      body1:
        "Proszę pamiętać o znaczeniu nadzoru rodzicielskiego podczas korzystania z ekranu AR w tej aplikacji. Dzieci powinny korzystać z tej funkcji pod nadzorem odpowiedzialnej osoby dorosłej, aby zapewnić bezpieczne i odpowiednie doświadczenie.",
      subtitle2: "Bądź czujny na swoje otoczenie:",
      body2:
        "Podczas korzystania z rozszerzonej rzeczywistości zawsze bądź świadomy swojego fizycznego otoczenia. Uważaj na przeszkody, nierówności terenu lub inne zagrożenia, które mogą stanowić ryzyko dla Twojego bezpieczeństwa. Twoje bezpieczeństwo jest najważniejsze, więc proszę zachować ostrożność i rozwagę w każdej chwili.",
      home: "Powrót do strony głównej",
      ok: "Rozumiem",
    },
  },
  settings: {
    header: "Ustawienia",
    locationSettings: "Ustawienia lokalizacji",
    notificationSettings: "Ustawienia powiadomień",
    termsAndConditions: "Warunki i zasady",
    contactUs: "Skontaktuj się z nami",
    language: "Język",
    timeFormat: "Format czasu",
    unitsOfMeasurement: "Jednostki",
    metric: "Metryczny",
    imperial: "Imperialny (US)",
    calibrateCompass: "Kalibracja kompasu",
    calibrateCompassData: {
      instructions: "Aby skalibrować kompas, obróć urządzenie kilka razy w kształcie ósemki.",
      accuracy: "Dokładność czujnika:",
      low: "Niska",
      medium: "Średnia",
      high: "Wysoka",
    },
    tutorials: "Samouczki",
    tutorialsData: {
      description:
        "Czy chcesz ponownie zobaczyć samouczki krok po kroku dla stron głównej i widoku AR?",
      homePage: "Strona główna",
      arPage: "Widok AR",
    },
    termsAndConditionsData: {
      backButton: "Ustawienia",
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
      backButton: "Ustawienia",
      title: "Skontaktuj się z nami",
      titlePlaceholder: "Wybierz tytuł",
      commentsPlaceholder: "Wprowadź komentarze",
      sendButton: "Wyślij",
      reportIssueHint:
        "Prosimy o dołączenie opisu problemu wraz z wybraną lokalizacją oraz datą i godziną możliwości obserwacji stacji, aby nasz zespół wsparcia mógł lepiej odtworzyć i zdiagnozować zgłoszony problem.",
      contactUsOptions: {
        reportAnIssue: "Zgłoś problem",
        improvementIdeas: "Pomysły na ulepszenia",
        generalQuestions: "Ogólne pytania",
        comments: "Komentarze",
      },
    },
    notificationSettingsData: {
      backButton: "Ustawienia",
      notificationTitle: "Ustawienia powiadomień",
      privacyTitle: "Ustawienia prywatności",
      upcomingLabel: "Nadchodzące wydarzenia",
      customizeLabel: "Dostosuj powiadomienia",
      upcomingTip: "Wyłącz, aby przestać otrzymywać powiadomienia o wydarzeniach.",
      notifyMeBefore: "POWIADOM MNIE PRZED",
      turnOffNotifications: "WYŁĄCZ POWIADOMIENIA",
      rangeInputPlaceholder: "Wybierz od 1 do 120 minut",
      customOption: "Niestandardowe",
      from: "Od",
      until: "Do",
    },
    locationSettingsData: {
      backToSettings: "Ustawienia",
      goBack: "Wróć",
      generalTitle: "Ustawienia lokalizacji",
      cta: "Dostosuj powiadomienia dla tej lokalizacji",
      locationPermission: "Przyznaj uprawnienia do lokalizacji",
      addNewLocation: {
        generalTitleAdd: "Dodaj nową lokalizację",
        generalTitleEdit: "Edytuj lokalizację",
        confirnModalButton: "Potwierdź",
        saveButton: "Zapisz lokalizację",
        searchInputPlaceholder: "Wprowadź miasto, kod pocztowy lub adres",
        nameInputPlaceholder: "Zapisz nazwę lokalizacji",
      },
      removeLocation: {
        question: "Czy na pewno chcesz usunąć tę lokalizację?",
        cancelButton: "Anuluj",
        removeButton: "Usuń",
      },
    },
    share: "Udostępnij",
    shareLink:
      "Aby śledzić Międzynarodową Stację Kosmiczną za pomocą rozszerzonej rzeczywistości, pobierz aplikację mobilną NASA Spot The Station na",
    localCalculations: "Lokalne obliczenia",
  },
  resources: {
    header: "Zasoby",
    goBack: "Wróć",
    sightings: {
      title: "Nadchodzące Obserwacje",
    },
    news: {
      title: "Wiadomości ze Stacji",
      searchPlaceholder: "Szukaj artykułów, wydarzeń itp...",
      suggestions: "SUGESTIE",
      searchResults: "Wyniki wyszukiwania",
    },
    spotTheStation: {
      title: "Jak zauważyć stację?",
    },
    about: {
      title: "O Stacji",
    },
    details: {
      title: "Szczegóły Stacji",
    },
    faq: {
      title: "Najczęściej Zadawane Pytania",
      searchPlaceholder: "Szukaj pytań...",
      questions: {
        question1: "1. Dlaczego Międzynarodowa Stacja Kosmiczna jest tam na górze?",
        answer1:
          "Międzynarodowa Stacja Kosmiczna to połączenie nauki, technologii i ludzkiej innowacji, które umożliwia badania niemożliwe do przeprowadzenia na Ziemi, z korzyścią dla ludzkości. Od ponad 24 lat NASA wspiera ciągłą obecność ludzi z USA na pokładzie stacji, dzięki czemu astronauci nauczyli się żyć i pracować w kosmosie przez dłuższe okresy.<br/>" +
          "Stacja kosmiczna – w której uczestniczą Stany Zjednoczone, Rosja, Kanada, Japonia i kraje uczestniczące w ESA (Europejska Agencja Kosmiczna) – jest jednym z najbardziej złożonych, współzależnych międzynarodowych współprac, jakie kiedykolwiek podjęto. Łączy międzynarodowe załogi lotnicze i wielu dostawców transportu kosmicznego, a także globalnie rozproszone zespoły wsparcia, obiekty, sieci komunikacyjne i światową społeczność naukową.<br/>" +
          "W ciągu ostatnich 24 lat stacja kosmiczna przekształciła się w orbitujące laboratorium z możliwościami badawczymi, które pozwalają naukowcom z ponad 109 krajów przeprowadzać ponad 4000 przełomowych eksperymentów w ekstremalnym i unikalnym środowisku lotu kosmicznego.<br/>" +
          "Stacja kosmiczna służy jako trampolina do rozwoju gospodarki niskoorbitalnej i kolejnych wielkich kroków NASA w eksploracji, w tym misji na Księżyc w ramach programu Artemis i ostatecznie eksploracji Marsa przez ludzi.<br/>" +
          "Dowiedz się więcej o Międzynarodowej Stacji Kosmicznej, jej badaniach i załodze na:<br/>" +
          "<a href='https://www.nasa.gov/station'>https://www.nasa.gov/station</a>",

        question2: "2. Jak szybko porusza się Międzynarodowa Stacja Kosmiczna?",
        answer2:
          "Międzynarodowa Stacja Kosmiczna okrąża Ziemię co 90 minut. Porusza się z prędkością około 28 000 kilometrów na godzinę, co pozwala załodze na pokładzie zobaczyć 16 wschodów i zachodów słońca każdego dnia. Od listopada 2000 roku stacja kosmiczna jest nieprzerwanie zamieszkana. W tym czasie 280 osób z 23 krajów odwiedziło ten orbitalny posterunek, a stacja okrążyła Ziemię setki tysięcy razy.",

        question3: "3. Jak często mogę spodziewać się zobaczyć Międzynarodową Stację Kosmiczną?",
        answer3:
          "Międzynarodowa Stacja Kosmiczna jest widoczna, ponieważ odbija światło słoneczne – z tego samego powodu, dla którego widzimy Księżyc. Jednak w przeciwieństwie do Księżyca, stacja kosmiczna nie jest wystarczająco jasna, aby ją zobaczyć w ciągu dnia. Możliwości obserwacji mogą się różnić od jednej w miesiącu do kilku w tygodniu, ponieważ światło Słońca odbija się od stacji, gdy przechodzi nad twoją lokalizacją o świcie i zmierzchu.<br/>" +
          "Aplikacja mobilna oblicza i wyświetla nadchodzące możliwości obserwacji na maksymalnie kolejne 14 dni. Od maja 2026 roku witryna Spot the Station NASA przywróciła funkcję wyszukiwania możliwości obserwacji stacji bezpośrednio z przeglądarki, bez potrzeby aplikacji: <a href='https://www.nasa.gov/spot-the-station/'>https://www.nasa.gov/spot-the-station/</a> Wybierz swój kraj i region/miasto, aby zobaczyć nadchodzące możliwości obserwacji na maksymalnie kolejne 14 dni.",

        question4: "4. Co to jest aplikacja Spot the Station?",
        answer4:
          "Aplikacja mobilna Spot the Station to oficjalna aplikacja NASA, która pomaga użytkownikom śledzić i otrzymywać powiadomienia o widoczności Międzynarodowej Stacji Kosmicznej, gdy przechodzi nad ich lokalizacją. Oferuje również śledzenie w czasie rzeczywistym, harmonogramy przelotów i alerty.",

        question5: "5. Jak pobrać aplikację mobilną Spot the Station?",
        answer5:
          "Aplikacja mobilna Spot the Station jest dostępna na urządzeniach mobilnych i tabletach z systemem iOS i Android.",

        question6:
          "6. Jak aplikacja Spot the Station powiadamia mnie o nadchodzących możliwościach obserwacji Międzynarodowej Stacji Kosmicznej?",
        answer6:
          "Aplikacja Spot the Station wysyła powiadomienia push, aby ostrzec użytkowników o nadchodzących przelotach Międzynarodowej Stacji Kosmicznej. Użytkownicy powinni upewnić się, że uprawnienia do powiadomień aplikacji są włączone w ustawieniach ich urządzenia. Pamiętaj, że aplikacja oblicza możliwości obserwacji dla wybranej lokalizacji na maksymalnie kolejne 14 dni, więc możesz przestać otrzymywać powiadomienia, jeśli przez jakiś czas nie korzystasz z aplikacji.",

        question7: "7. Czy mogę dostosować powiadomienia w aplikacji Spot the Station?",
        answer7:
          "Aplikacja Spot the Station ma możliwość konfigurowania spersonalizowanych ustawień powiadomień, aby otrzymywać powiadomienia push specyficzne dla preferowanej lokalizacji i czasu użytkownika. Ustawienia powiadomień można znaleźć na stronie ustawień aplikacji, gdzie użytkownicy mogą włączyć powiadomienia dla wszystkich nadchodzących wydarzeń lub dostosować powiadomienia dla aktualnie wybranej lokalizacji. Użytkownicy mogą dostosować powiadomienia dla innych lokalizacji za pomocą ustawień lokalizacji. Możesz odwiedzić stronę Obserwacje ze strony głównej, aby włączać/wyłączać powiadomienia dla każdej nadchodzącej możliwości obserwacji dla wybranej lokalizacji.",

        question8: "8. Co powinienem zrobić, jeśli nie otrzymuję powiadomień?",
        answer8:
          "Użytkownicy powinni sprawdzić preferencje powiadomień w aplikacji Spot the Station (Ustawienia powiadomień na stronie ustawień), aby potwierdzić, że urządzenie jest skonfigurowane do otrzymywania powiadomień w preferowanej lokalizacji i czasie. Jeśli użytkownicy nadal nie otrzymują powiadomień, powinni upewnić się, że powiadomienia są włączone w ustawieniach ich urządzenia. Pamiętaj, że aplikacja oblicza możliwości obserwacji dla wybranej lokalizacji na maksymalnie kolejne 14 dni za każdym razem, gdy ją otwierasz, więc możesz przestać otrzymywać powiadomienia, jeśli nie sprawdzasz jej regularnie.",

        question9: "9. Czy aplikacja Spot the Station działa międzynarodowo?",
        answer9:
          "Aplikacja Spot the Station jest dostępna na całym świecie i w wielu językach, w tym angielskim, niderlandzkim, francuskim, niemieckim, hindi, włoskim, japońskim, polskim, portugalskim (Brazylia), rosyjskim, hiszpańskim, tureckim i ukraińskim. Aplikacja dostarcza informacji o widoczności dla większości zamieszkanych miejsc, co ułatwia obserwację Międzynarodowej Stacji Kosmicznej, gdy przechodzi nad prawie każdym miejscem.",

        question10: "10. Dlaczego nie ma możliwości obserwacji dla mojej lokalizacji?",
        answer10:
          "Musi być ciemno z dobrą widocznością w twojej lokalizacji, a stacja kosmiczna musi być nad tobą, aby ją zobaczyć. Ponieważ orbita stacji kosmicznej prowadzi ją po całym świecie, może przechodzić nad tobą w momentach, gdy nie będzie widoczna – albo w środku dnia, albo w środku nocy, gdy jest przesłonięta przez cień Ziemi. Spot The Station wyśle powiadomienia tylko wtedy, gdy będą możliwości zobaczenia Międzynarodowej Stacji Kosmicznej w twojej lokalizacji, a nie za każdym razem, gdy będzie nad tobą. Możliwości obserwacji są obliczane z wyprzedzeniem do 14 dni, więc sprawdzaj regularnie nowo przewidziane możliwości.",

        question11: "11. Czy potrzebuję teleskopu, aby zobaczyć Międzynarodową Stację Kosmiczną?",
        answer11:
          "Nie, użytkownicy mogą zobaczyć Międzynarodową Stację Kosmiczną gołym okiem, nie jest wymagany dodatkowy sprzęt.",

        question12:
          "12. Czy Międzynarodowa Stacja Kosmiczna pojawia się i znika z powodu światła Księżyca?",
        answer12:
          "Międzynarodowa Stacja Kosmiczna jest widoczna, ponieważ odbija światło słoneczne, podobnie jak Księżyc. Gdy stacja przemieszcza się wokół Ziemi, wchodzi w cień Ziemi i z niego wychodzi. Gdy wchodzi w cień Ziemi, nie jest widoczna, nawet jeśli nadal krąży nad tobą.",

        question13: "13. Jaka strefa czasowa jest używana do powiadomień o alertach?",
        answer13:
          "Cała zawartość w aplikacji Spot the Station jest wymieniona w lokalnej strefie czasowej dla wybranej przez użytkownika lokalizacji. Aplikacja automatycznie dostosowuje się do czasu letniego.",

        question14:
          "14. Jakie informacje dostarcza aplikacja Spot the Station dla każdej obserwacji?",
        answer14:
          "Dla każdej obserwacji aplikacja Spot the Station wyświetla czas, czas trwania widoczności nad horyzontem, maksymalną wysokość nad horyzontem, kierunki, w których Międzynarodowa Stacja Kosmiczna pojawi się i zniknie, oraz prognozowane zachmurzenie dla wybranej lokalizacji w czasie obserwacji, pomagając użytkownikom dokładnie ją zlokalizować na niebie.",

        question15:
          "15. Jak mogę dostrzec Międzynarodową Stację Kosmiczną podczas możliwości obserwacji? Co oznaczają te wszystkie informacje?",
        answer15:
          "Aplikacja Spot the Station dostarcza listę „Nadchodzących obserwacji”, jeśli użytkownicy stukną w „Lista następnych obserwacji” na stronie głównej.<br/>" +
          "<strong>Data i czas</strong> to moment, kiedy możliwość obserwacji rozpocznie się w lokalnej strefie czasowej. Wszystkie przeloty będą miały miejsce w ciągu kilku godzin przed lub po wschodzie lub zachodzie słońca. Jest to optymalny okres obserwacji, ponieważ Słońce odbija się od Międzynarodowej Stacji Kosmicznej i kontrastuje z ciemniejszym niebem.<br/>" +
          "<strong>Nad horyzontem</strong> to maksymalny okres czasu, w którym stacja jest widoczna, zanim ponownie przejdzie pod horyzont.<br/>" +
          "<strong>Maksymalna wysokość</strong> jest mierzona w stopniach (znana również jako elewacja). Reprezentuje wysokość stacji od horyzontu na nocnym niebie. Horyzont jest na zero stopni, a bezpośrednio nad głową jest 90 stopni. Jeśli użytkownicy trzymają pięść na długość ramienia i umieszczą ją na horyzoncie, górna część będzie miała około 10 stopni elewacji.<br/>" +
          "<strong>Pojawia się</strong> to miejsce na niebie, gdzie stacja będzie widoczna jako pierwsza. Ta wartość, podobnie jak maksymalna wysokość, jest również mierzona w stopniach od horyzontu. Litery reprezentują kierunki kompasu – N to północ, WNW to zachód-północny-zachód i tak dalej.<br/>" +
          "<strong>Znika</strong> reprezentuje miejsce na nocnym niebie, gdzie stacja opuści pole widzenia." +
          "<img src='https://sts-app-resources.s3.us-east-1.amazonaws.com/astro_horizon.png' />",

        question16:
          "16. Harmonogram przelotów wskazuje, że Międzynarodowa Stacja Kosmiczna pojawia się i znika z tego samego kierunku, jak to możliwe?",
        answer16:
          "Oprogramowanie Spot the Station zaokrągla kierunki do najbliższych kierunków kardynalnych i interkardynalnych. Może to sprawić, że wydaje się, że Międzynarodowa Stacja Kosmiczna pojawi się i zniknie w tym samym kierunku, mimo że przemieszcza się po niebie. Zwykle dzieje się to podczas przelotów z krótkim oknem widoczności, ponieważ stacja szybko wchodzi (lub wychodzi) z ciemnego cienia Ziemi, gdzie z lokalizacji użytkownika na ziemi nie można zaobserwować pełnego przelotu przez niebo.",

        question17:
          "17. Czy mogę zobaczyć mapę na żywo z lokalizacją Międzynarodowej Stacji Kosmicznej?",
        answer17:
          "Tak, aplikacja Spot the Station zawiera mapę w czasie rzeczywistym, która pokazuje aktualną pozycję Międzynarodowej Stacji Kosmicznej, gdy okrąża Ziemię, dając użytkownikom wizualne odniesienie do śledzenia jej postępów. Odwiedź stronę Tracker, aby zobaczyć trajektorię stacji w widoku 2D, 3D lub satelitarnym.",

        question18:
          "18. Co to jest funkcja rozszerzonej rzeczywistości w aplikacji Spot the Station?",
        answer18:
          "Funkcja rozszerzonej rzeczywistości w aplikacji Spot the Station pozwala użytkownikom zobaczyć wirtualną nakładkę ścieżki Międzynarodowej Stacji Kosmicznej na niebie nad widokiem kamery telefonu. Ta funkcja pomaga użytkownikom dokładniej zlokalizować stację, wyrównując ich urządzenie z pozycją stacji w czasie rzeczywistym.",

        question19:
          "19. Jak uzyskać dostęp do funkcji rozszerzonej rzeczywistości w aplikacji Spot the Station?",
        answer19:
          "Aby uzyskać dostęp do funkcji rozszerzonej rzeczywistości, otwórz aplikację Spot the Station i przejdź do opcji „Widok AR” w dolnym menu. Postępuj zgodnie z instrukcjami na ekranie, aby wyrównać kamerę urządzenia z niebem, gdzie aplikacja wyświetli wirtualną nakładkę wskazującą pozycję i trajektorię Międzynarodowej Stacji Kosmicznej.",

        question20:
          "20. Czy potrzebuję specjalnego urządzenia lub oprogramowania, aby korzystać z funkcji rozszerzonej rzeczywistości?",
        answer20:
          "Funkcja rozszerzonej rzeczywistości Spot the Station wymaga urządzenia, które może określić swoją orientację w przestrzeni 3D. Wymaga to specjalnego wsparcia sprzętowego, takiego jak żyroskop lub koprocesor ruchu. Starsze lub budżetowe urządzenia mogą nie obsługiwać tej funkcjonalności z powodu ograniczeń ich czujnika magnetometru. Dokładność można poprawić, postępując zgodnie z przewodnikiem Kalibracji Kompasu w menu Ustawienia aplikacji.",

        question21: "21. Jak działa funkcja rozszerzonej rzeczywistości?",
        answer21:
          "Korzystając z kamery i czujników urządzenia, funkcja rozszerzonej rzeczywistości Spot the Station nakłada pozycję Międzynarodowej Stacji Kosmicznej na niebie na ekran, dostosowując się w czasie rzeczywistym, gdy użytkownik porusza urządzeniem. Aplikacja prowadzi użytkowników do skierowania kamery urządzenia we właściwym kierunku i pokazuje, gdzie stacja się pojawi i zniknie. Postępuj zgodnie z Samouczkiem widoku AR z menu Ustawienia aplikacji.",

        question22:
          "22. Czy mogę korzystać z funkcji rozszerzonej rzeczywistości zarówno w dzień, jak i w nocy?",
        answer22:
          "Tak, funkcja rozszerzonej rzeczywistości w aplikacji Spot the Station jest dostępna zarówno w dzień, jak i w nocy; jednak najlepsze wrażenia z obserwacji są zazwyczaj o zmierzchu lub w nocy, gdy Międzynarodowa Stacja Kosmiczna jest widoczna gołym okiem. Nakładka rozszerzonej rzeczywistości będzie działać niezależnie od warunków oświetleniowych, ale rzeczywiste możliwości obserwacji zależą od widoczności.",

        question23:
          "23. Czy nakładka rozszerzonej rzeczywistości jest dokładna dla wszystkich lokalizacji?",
        answer23:
          "Tak, funkcja rozszerzonej rzeczywistości w aplikacji Spot the Station została zaprojektowana, aby dostarczać dokładnych informacji o pozycji na podstawie lokalizacji GPS urządzenia. Jednak dokładność może się nieznacznie różnić w zależności od kalibracji kompasu i czujników urządzenia. Jeśli użytkownicy zauważą rozbieżności, skalibruj kompas urządzenia ponownie, postępując zgodnie z przewodnikiem Kalibracji Kompasu z menu Ustawienia aplikacji. Starsze lub budżetowe urządzenia mogą nie obsługiwać tej funkcjonalności z powodu ograniczeń ich czujnika magnetometru.",

        question24:
          "24. Czy funkcja rozszerzonej rzeczywistości może pomóc w dokładnych czasach obserwacji?",
        answer24:
          "Funkcja rozszerzonej rzeczywistości w aplikacji Spot the Station wizualnie prowadzi użytkowników do zlokalizowania Międzynarodowej Stacji Kosmicznej w dokładnym momencie, gdy pojawia się na niebie. W połączeniu z alertami aplikacji, zwiększa zdolność do zobaczenia stacji, dostarczając na żywo wizualny kierunek i wskaźnik wysokości do precyzyjnego śledzenia.",

        question25:
          "25. Czy są jakieś wskazówki dotyczące optymalizacji mojego doświadczenia z rozszerzoną rzeczywistością?",
        answer25:
          "Aby uzyskać najlepsze wrażenia z rozszerzonej rzeczywistości w aplikacji Spot the Station, używaj funkcji na otwartej przestrzeni z wyraźnym widokiem na niebo. Unikaj przeszkód, takich jak wysokie budynki lub drzewa, ponieważ mogą one blokować widoczność. Skalibruj kompas urządzenia (postępuj zgodnie z przewodnikiem Kalibracji Kompasu w menu Ustawienia) i upewnij się, że usługi lokalizacyjne i uprawnienia do kamery są włączone dla płynnego działania.",

        question26:
          "26. Czy funkcja rozszerzonej rzeczywistości jest dostępna na urządzeniach iOS i Android?",
        answer26:
          "Tak, funkcja rozszerzonej rzeczywistości aplikacji Spot the Station jest dostępna na urządzeniach mobilnych i tabletach z systemem iOS i Android, o ile urządzenie spełnia wymagania sprzętowe. Starsze lub budżetowe urządzenia mogą nie obsługiwać tej funkcjonalności z powodu ograniczeń ich czujnika magnetometru.",

        question27: "27. Czy aplikacja Spot the Station działa offline?",
        answer27:
          "Niektóre podstawowe funkcje, takie jak dostęp do wcześniej pobranych harmonogramów możliwości obserwacji lub otrzymywanie zaplanowanych powiadomień, mogą działać offline. Jednak funkcje wymagające danych w czasie rzeczywistym, takie jak śledzenie, wymagają usługi komórkowej lub połączenia internetowego.",

        question28:
          "28. Czy są jakieś specjalne wymagania dotyczące korzystania z aplikacji Spot the Station?",
        answer28:
          "Aplikacja Spot the Station wymaga aktywnej usługi komórkowej lub połączenia internetowego do śledzenia w czasie rzeczywistym i alertów. Dodatkowo, aby uzyskać informacje specyficzne dla lokalizacji, upewnij się, że usługi lokalizacyjne urządzenia są włączone dla aplikacji.",

        question29: "29. Czy aplikacja Spot the Station jest darmowa?",
        answer29:
          "Tak, aplikacja Spot the Station jest darmowa do pobrania i używania, bez zakupów w aplikacji ani subskrypcji.",

        question30:
          "30. Z kim mogę się skontaktować w sprawie wsparcia aplikacji Spot the Station?",
        answer30:
          "W celu uzyskania wsparcia dotyczącego aplikacji Spot the Station, skontaktuj się za pośrednictwem opcji Skontaktuj się z nami w menu Ustawienia aplikacji lub <a href='mailto:hq-spotthestation@mail.nasa.gov'>wyślij e-mail do zespołu Spot the Station</a>.",
      },
    },
    astronauts: {
      title: "Kto jest teraz na Stacji?",
      number: "Liczba osób:",
    },
    live: {
      title: "Transmisja na Żywo",
      description:
        "Obecnie na żywo transmitowane jest wideo Ziemi z zewnętrznej kamery HD zamontowanej na ISS. Kamera patrzy na Ziemię, a czasami przez widok przechodzi panel słoneczny.",
    },
    tour: {
      title: "Wirtualna Wycieczka",
    },
    videos: {
      title: "Filmy ze Stacji",
    },
    gallery: {
      title: "Galeria",
    },
    earthScience: { title: "Zasoby Danych o Naukach o Ziemi" },
  },
}

export default pl
export type Translations = typeof pl
