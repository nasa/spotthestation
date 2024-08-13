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
    body: "Aby korzystać z tej funkcji, musisz przyznać uprawnienia do dostępu do galerii.",
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
    body: "Dziękujemy za kontakt z nami. Otrzymaliśmy Twoją wiadomość i przetworzymy Twoje zgłoszenie. Proszę pamiętać, że ta aplikacja nie zbiera danych użytkowników, więc nie możemy odpowiadać na wszystkie wiadomości indywidualnie.",
    dismiss: "Odrzuć",
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
      subTitle: "Stacja przechodzi nad Tobą o",
    },
    before: {
      titleOne: "Zobacz Stację za",
      titleTwo: "minut!",
      subTitleOne: "Stacja przechodzi nad Tobą za",
      subTitleTwo: "minut o",
    },
  },
  units: {
    minute: "min",
    kilometer: "km",
    kilogram: "kg",
    month: "miesiąc",
    metersPerSecond: "M/S",
    time: "T",
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
      title: "Zobacz Stację",
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
      firstTimeHead: "LISTA NASTĘPNYCH OBSERWACJI",
      secondTimeHead: "ODLICZANIE",
      timezone: "Strefa czasowa",
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
      title: "Nadchodzące obserwacje",
      sightings: "Obserwacje",
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
      longerThan2: "2 minuty i dłużej",
      empty: "Brak potencjalnych obserwacji stacji dla tej lokalizacji od {{start}} do {{end}}.",
      shareTitle: "Stacja przechodzi nad {{location}} w dniu {{date}}",
      shareLink:
        "Aby dowiedzieć się więcej i śledzić stację za pomocą rozszerzonej rzeczywistości, pobierz aplikację na",
      coach: {
        title: "Opis ikon",
        moon: "Będzie noc w wybranej lokalizacji, gdy stacja będzie nad horyzontem.",
        sunset: "Będzie zmierzch w wybranej lokalizacji, gdy stacja będzie nad horyzontem.",
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
        "Ta sekcja pokazuje datę i licznik odliczania do następnej nadchodzącej obserwacji stacji w pobliżu wybranej lokalizacji. Możesz dotknąć pola Następna Obserwacja, aby zobaczyć pełną listę nadchodzących obserwacji.",
      globeTitle: "Interaktywna Ziemia",
      globeData:
        "Możesz zobaczyć rzeczywistą pozycję stacji, przesuwając ekran. Pozwala to na interakcję z Ziemią i śledzenie lokalizacji ISS w czasie rzeczywistym.",
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
      dimensionsValue: "109m szerokości x 73m długości x 14m wysokości",
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
    },
    astronauts: {
      title: "Kto jest teraz na Stacji",
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
  },
}

export default pl
export type Translations = typeof pl
