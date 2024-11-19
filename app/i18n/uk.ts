const uk = {
  name: "Українська",
  errorScreen: {
    title: "Щось пішло не так!",
    friendlySubtitle:
      "Це екран, який ваші користувачі побачать в продакшені, коли станеться помилка. Вам знадобиться налаштувати це повідомлення (розташовано в app/i18n/en.ts) та, можливо, також макет (app/screens/ErrorScreen). Якщо ви хочете це повністю видалити, перевірте компонент <ErrorBoundary> в app/app.tsx.",
    reset: "ПЕРЕЗАВАНТАЖИТИ ДОДАТОК",
  },
  snackBar: {
    ok: "Добре",
    dismiss: "Відхилити",
    sightingsSaved: "Завантажені дані спостережень для останньої збереженої локації!",
    defaultError: "Сталася помилка",
    locationSaved: "Локацію збережено",
    locationExist: "Локація з такою назвою вже існує!",
    openSettingsError: "Не вдається відкрити налаштування!",
    shared: "Успішно поділилися!",
    savedToGallery: "Збережено до галереї",
  },
  outdatedModal: {
    title: "Доступне оновлення",
    body: "Доступна нова версія застосунку! Завантажте нову версію в",
    buttonNegative: "Скасувати",
    buttonPositive: "Завантажити",
  },
  permissionsModal: {
    close: "Закрити",
    openSettings: "Відкрити налаштування",
    body: "Для використання цієї функції вам потрібно надати дозвіл на доступ до галереї.",
  },
  permissionsAndroid: {
    title: "Дозвіл на збереження відео",
    message: "Цьому додатку потрібен дозвіл на збереження відео на вашому пристрої.",
    buttonNeutral: "Запитати пізніше",
    buttonNegative: "Скасувати",
    buttonPositive: "Добре",
    alarmPermissionTitle: "Необхідний дозвіл",
    alarmPermissionMessage:
      "Будь ласка, надайте дозвіл на встановлення нагадувань на наступному екрані, щоб отримувати сповіщення про майбутні спостереження.",
  },
  thanksModal: {
    body: "Дякуємо, що зв'язались з нами. Ми отримали ваше повідомлення і обробимо ваш запит. Зверніть увагу, що цей додаток не збирає дані користувачів, тому ми не можемо відповісти на всі повідомлення індивідуально.",
    dismiss: "Відхилити",
  },
  privacy: {
    title: "Використання вашого місцезнаходження",
    body: "Ми використовуємо дані місцезнаходження для розрахунку моментів проходження станції у вашому поточному місці розташування. Будь ласка, надайте дозвіл на доступ до місцезнаходження, щоб увімкнути цю функцію.",
    agree: "ПРИЙМАЮ",
    skip: "ПРОПУСТИТИ",
    policy: "Політика конфіденційності",
  },
  notifications: {
    push: {
      title: "Побачте станцію зараз!",
      subTitle: "Станція проходить над вами у",
    },
    before: {
      titleOne: "Побачте станцію через",
      titleTwo: "хвилин!",
      subTitleOne: "Станція проходить над вами через",
      subTitleTwo: "хвилин у",
    },
  },
  units: {
    minute: "хв",
    kilometer: "км",
    kilogram: "кг",
    month: "місяць",
    metersPerSecond: "м/с",
    time: "T",
  },
  tabNavigator: {
    homeTab: "Головна",
    issViewTab: "Режим AR",
    issNowTab: "Стеження",
    resourcesTab: "Ресурси",
    settingsTab: "Налаштування",
  },
  onboarding: {
    splash: {
      title: "Побачте\nстанцію",
      subTitle: "Погляньте на небо та спостерігайте Міжнародну космічну станцію",
    },
    completeProfile: {
      notification: {
        title: "Налаштування сповіщень",
        label: "Отримувати сповіщення з пуш-повідомленнями",
        tip: "Отримуйте сповіщення, коли космічна станція наближається до вашого місцезнаходження.",
        nextButton: "Далі",
      },
      location: {
        title: "Ваше місцезнаходження",
        subtitle:
          "Будь ласка, дозвольте додатку автоматично визначити ваше місцезнаходження або введіть його самостійно.",
        detectButton: "Визначити моє місцезнаходження",
        orLabel: "або",
        selectLocation: "Введіть ваше місцезнаходження",
        detecting: "Визначення місцезнаходження...",
        doneButton: "Готово",
        serviceAlertTitle: "Служби локації вимкнені",
        serviceAlertBody: "Будь ласка, увімкніть служби локації, щоб продовжити.",
        permissionAlertTitle: "Дозвіл не надано",
        permissionAlertBody:
          "Ми використовуємо дані місцезнаходження для розрахунку моментів проходження станції у вашому поточному місці розташування. Будь ласка, надайте дозвіл на доступ до місцезнаходження, щоб увімкнути цю функцію.",
      },
    },
  },
  homeScreen: {
    initLoader: {
      message: "Завантаження даних станції... Це може зайняти деякий час.",
      trajectoryError:
        "Дані про траєкторію станції в даний момент недоступні через обслуговування серверів. Будь ласка, спробуйте знову пізніше.",
      noNetwork:
        "Дані про траєкторію станції в даний момент недоступні через відсутність підключення. Будь ласка, спробуйте знову пізніше.",
    },
    header: {
      firstTimeHead: "СПИСОК НАСТ. СПОСТЕРЕЖЕНЬ",
      secondTimeHead: "ЗВОРОТНІЙ ВІДЛІК",
      timezone: "Часовий пояс",
    },
    selectLocation: {
      title: "Вибрати локацію",
      inputPlaceholder: "Пошук локації за містом, адресою...",
      current: "Поточна локація",
      saved: "Збережені локації",
      nearby: "Локації поблизу",
      search: "Результати пошуку",
      cta: "Налаштувати сповіщення для цієї локації",
      actionTitle: "Сповіщення",
      refresh: "Оновити",
    },
    selectSightings: {
      title: "Майбутні спостереження",
      sightings: "Спостереження",
      selectMessage: "Оберіть події, для яких ви хочете отримувати сповіщення.",
      switch: "Повідомляйте мене про всі майбутні події для цієї локації.",
      aboveHorizon: "Над горизонтом",
      maxHeight: "Максимальна висота",
      today: "Сьогодні",
      tomorrow: "Завтра",
      appears: "Зʼявляється",
      disappears: "Зникає",
      all: "Усі",
      timeOfDay: "Час дня",
      night: "Ніч",
      twilight: "Сутінки",
      duration: "Тривалість",
      shorterThan2: "коротше 2 хвилин",
      longerThan2: "2 хвилини і довше",
      empty: "Немає потенційних спостережень станції для цієї локації з {{start}} по {{end}}.",
      shareTitle: "Станція проходить над {{location}} {{date}}",
      shareLink:
        "Щоб дізнатись більше і відстежувати станцію за допомогою доповненої реальності, завантажте додаток за посиланням",
      coach: {
        title: "Пояснення до іконок",
        moon: "Коли станція буде над горизонтом у обраній локації, там буде ніч.",
        sunset: "Коли станція буде над горизонтом у обраній локації, там будуть сутінки.",
      },
      compass: {
        N: "Пн",
        NNE: "Пн-Пн-Сх",
        NE: "Пн-Сх",
        ENE: "Сх-Пн-Сх",
        E: "Сх",
        ESE: "Сх-Пд-Сх",
        SE: "Пд-Сх",
        SSE: "Пд-Пд-Сх",
        S: "Пд",
        SSW: "Пд-Пд-Зх",
        SW: "Пд-Зх",
        WSW: "Зх-Пд-Зх",
        W: "Зх",
        WNW: "Зх-Пн-Зх",
        NW: "Пн-Зх",
        NNW: "Пн-Пн-Зх",
      },
    },
    coachMarks: {
      skip: "Пропустити тур",
      next: "Далі",
      finish: "Завершити",
      dismiss: "Відхилити",
      locationTitle: "Змінити локацію",
      locationData: "Ви можете обрати або змінити вашу локацію на іншу прямо тут.",
      sightingsTitle: "Наступне спостереження та зворотній відлік",
      sightingsData:
        "Цей розділ показує вам дату та відлік до наступного наближення станції до вашої обраної локації. Ви можете натиснути на блок 'Наступне спостереження', щоб побачити повний список майбутніх спостережень.",
      globeTitle: "Інтерактивна Земля",
      globeData:
        "Ви можете переглянути розташування станції у даний час, проводячи пальцем по екрану. Це дозволяє вам взаємодіяти з Землею та відстежувати розташування станції в реальному часі.",
      mapTitle: "2D Вид на мапі",
      mapData:
        "Цей розділ показує 2D відображення повного шляху станції відносно областей ночі та дня на Землі.",
      navigationTitle: "Навігація",
      navigationData:
        "Ви можете переходити між різними функціями додатка з навігаційного меню нижче.",
    },
  },
  issView: {
    timeHeader: "Зворотній відлік",
    cameraPermissionText:
      "Ви не надали дозвіл на використання камери вашого телефону. Натисніть тут, щоб надати дозвіл.",
    issCaptured: "Зафіксуйте цей момент",
    details: {
      title: "Інформація",
      orbitalSpeed: "Орбітальна швидкість",
      longitude: "Довгота",
      latitude: "Широта",
      altitude: "Висота",
      crewOnboard: "Типова чисельність екіпажу на борту",
      launched: "Початок збирання",
      launchedValue: "20 листопада 1998",
      mass: "Приблизна маса",
      dimensions: "Приблизні розміри",
      orbitalPeriod: "Період обертання навколо Землі",
      orbitsPerDay: "Обертів на день",
      dimensionsValue: "109м x 73м x 14м",
      dateTime: "Дата і час",
      maxHeight: "Максимальна висота",
      duration: "Тривалість над горизонтом",
      appears: "З'являється",
      disappears: "Зникає",
      distance: "Відстань",
      nextSighting: "Наступне спостереження",
    },
    arNotSupported: "AR не підтримується на цьому пристрої",
    noOrientationSensor: "Сенсор орієнтації недоступний",
    noMagnetometerSensor: "Магнітометр недоступний",
    screenshotError: "Неможливо зробити знімок екрану",
    coachMarks: {
      circleTitle: "Побачте станцію",
      circleData:
        "Щоб знайти станцію, рухайте телефон в напрямку стрілки поза колом. При наближенні колір кола зміниться на зелений.",
      compassTitle: "Компас",
      compassData:
        "Цей компас показує напрямок, в якому ви дивитеся, та відносний напрямок, в якому ви можете побачити станцію.",
      infoTitle: "Інформація",
      infoData:
        "Цей перемикач відкриває або закриває вікно з докладною інформацією про поточний або наступний спостережуваний прохід та живу інформацію про станцію.",
      trajectoryTitle: "Траєкторія станції",
      trajectoryData:
        "Цей перемикач вмикає або вимикає траєкторію станції на екрані. Суцільна лінія показує минулу, а пунктирна лінія - майбутню траєкторію станції.",
      arTitle: "Режим AR",
      arData: "Цей перемикач перемикає між повноекранним та віконним режимом AR.",
      shareTitle: "Поділитися",
      shareData:
        "Ця кнопка дозволяє поділитися знімком екрану AR через SMS, електронну пошту або соціальні мережі.",
      screenshotTitle: "Знімок екрану",
      screenshotData:
        "Ця кнопка дозволяє зробити знімок екрану AR для збереження в вашій фотогалереї.",
      videoTitle: "Відеозапис",
      videoData:
        "Ця кнопка дозволяє записати відео AR, щоб зафіксувати моменти, коли ви знаходите станцію.",
    },
    safetyReminder: {
      title: "Увага: Нагадування про безпеку",
      subtitle1: "Рекомендується батьківський контроль:",
      body1:
        "Будь ласка, пам'ятайте про важливість батьківського контролю при взаємодії з екраном доповненої реальності в цьому додатку. Діти повинні використовувати цю функцію під керівництвом відповідальної дорослої особи, щоб забезпечити безпечний досвід.",
      subtitle2: "Будьте уважні до свого оточення:",
      body2:
        "Поки ви користуєтесь екраном доповненої реальності, завжди залишайтеся уважними до вашого фізичного оточення. Звертайте увагу на перешкоди, нерівний рельєф або інші небезпеки, які можуть становити загрозу вашій безпеці. Ваша безпека є найважливішою, тому будь ласка, завжди будьте обережні та уважні.",
      home: "На головну",
      ok: "Розумію",
    },
  },
  settings: {
    header: "Налаштування",
    locationSettings: "Налаштування локації",
    notificationSettings: "Налаштування сповіщень",
    termsAndConditions: "Умови та положення",
    contactUs: "Зв'яжіться з нами",
    language: "Мова",
    calibrateCompass: "Калібрування компасу",
    calibrateCompassData: {
      instructions: "Для калібрування компасу оберніть пристрій вісімкою декілька разів.",
      accuracy: "Точність сенсора:",
      low: "Низька",
      medium: "Середня",
      high: "Висока",
    },
    tutorials: "Навчальні матеріали",
    tutorialsData: {
      description:
        "Чи бажаєте ви ще раз побачити покрокові інструкції для головної та AR-сторінок?",
      homePage: "Головна сторінка",
      arPage: "Режим AR",
    },
    termsAndConditionsData: {
      backButton: "Налаштування",
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
      backButton: "Налаштування",
      title: "Зв'яжіться з нами",
      titlePlaceholder: "Оберіть тему",
      commentsPlaceholder: "Введіть коментар",
      sendButton: "Відправити",
      contactUsOptions: {
        reportAnIssue: "Повідомити про проблему",
        improvementIdeas: "Ідеї щодо покращення",
        generalQuestions: "Загальні питання",
        comments: "Коментарі",
      },
    },
    notificationSettingsData: {
      backButton: "Налаштування",
      notificationTitle: "Налаштування сповіщень",
      privacyTitle: "Налаштування конфіденційності",
      upcomingLabel: "Майбутні події",
      customizeLabel: "Налаштувати індивідуальні сповіщення",
      upcomingTip: "Вимкніть, щоб припинити отримання сповіщень про події.",
      notifyMeBefore: "СПОВІСТИТИ МЕНЕ ЗА",
      turnOffNotifications: "ВИМКНУТИ СПОВІЩЕННЯ",
      rangeInputPlaceholder: "Оберіть від 1 до 120 хвилин",
      customOption: "Користувацький",
      from: "З",
      until: "До",
    },
    locationSettingsData: {
      backToSettings: "Налаштування",
      goBack: "Повернутися",
      generalTitle: "Налаштування локації",
      cta: "Налаштувати сповіщення для цієї локації",
      locationPermission: "Надати дозвіл на доступ до локації",
      addNewLocation: {
        generalTitleAdd: "Додати нову локацію",
        generalTitleEdit: "Редагувати локацію",
        confirnModalButton: "Підтвердити",
        saveButton: "Зберегти локацію",
        searchInputPlaceholder: "Введіть місто, поштовий індекс або адресу",
        nameInputPlaceholder: "Назва локації",
      },
      removeLocation: {
        question: "Ви впевнені, що хочете видалити цю локацію?",
        cancelButton: "Скасувати",
        removeButton: "Видалити",
      },
    },
    share: "Поділитися",
    shareLink:
      "Щоб відстежувати Міжнародну космічну станцію за допомогою доповненої реальності, завантажте мобільний застосунок NASA Spot The Station на",
    localCalculations: "Локальні обчислення",
  },
  resources: {
    header: "Ресурси",
    goBack: "Повернутися",
    news: {
      title: "Новини станції",
      searchPlaceholder: "Пошук статей, подій, тощо...",
      suggestions: "ПРОПОЗИЦІЇ",
      searchResults: "Результати пошуку",
    },
    spotTheStation: {
      title: "Як побачити станцію?",
    },
    about: {
      title: "Про станцію",
    },
    details: {
      title: "Деталі станції",
    },
    faq: {
      title: "Часті питання",
      questions: {
        question1: "1. Чому Міжнародна космічна станція знаходиться на орбіті?",
        answer1:
          "Міжнародна космічна станція — це єдина лабораторія мікрогравітації на Землі. Ця платформа розміром з футбольне поле є місцем проведення безлічі наукових і технологічних експериментівяк членами екіпажу, так і в автоматичному режимі. Дослідження на борту орбітальної лабораторії приносять користь для життя на Землі, а також для майбутніх космічних досліджень. Космічна станція служить випробувальним майданчиком для технологій і дозволяє вивчати впливи тривалих космічних польотів на людину, підтримуючи місію NASA з розширення присутності людини в космосі. Щоб дізнатися більше про дослідження, що проводяться на космічній станції, і можливості проведення ваших наукових експериментів, будь ласка, <a href='https://www.nasa.gov/international-space-station/'>натисніть тут</a>.",

        question2: "2. З якою швидкістю рухається Міжнародна космічна станція?",
        answer2:
          "Станція обертається навколо Землі кожні 90 хвилин. Вона рухається зі швидкістю близько 17 500 миль (28 000 км) на годину, що дозволяє екіпажу бачити 16 сходів і заходів сонця щодня. За понад 15 років, що люди живуть на борту, станція облетіла Землю десятки тисяч разів. Ви можете дізнатися більше фактів про станцію на <a href='https://www.nasa.gov/international-space-station/space-station-facts-and-figures/'>цій веб-сторінці</a>.",

        question3: "3. Як часто я можу побачити Міжнародну космічну станцію?",
        answer3:
          "Міжнародну космічну станцію видно, тому що вона відбиває світло Сонця — з тієї ж причини ми бачимо Місяць. Однак, на відміну від Місяця, космічна станція недостатньо яскрава, щоб її можна було побачити вдень. Її можна побачити лише на світанку або в сутінках у вашому місцезнаходженні. Таким чином, кількість можливостей для спостереження може варіюватися від одного разу на місяць до кількох разів на тиждень, оскільки там, де ви знаходитесь, має бути темно, і космічна станція має проходити над вами.",

        question4: "4. Що таке мобільний додаток Spot the Station?",
        answer4:
          "Мобільний додаток Spot the Station — це офіційний додаток NASA, який допомагає користувачам відстежувати і отримувати сповіщення про спостереження Міжнародної космічної станції, коли вона проходить над їхнім місцем розташування. Він надає можливість стеження в реальному часі, розклади спостережень і сповіщення.",

        question5: "5. Як завантажити мобільний додаток Spot the Station?",
        answer5:
          "Ви можете завантажити додаток як в Apple App Store <a href='https://apps.apple.com/us/app/spot-the-station/id6449235044'>тут</a>, так і в Google Play Store <a href='https://play.google.com/store/apps/details?id=gov.nasa.hq.SpotTheStation&hl=en_US&pli=1'>тут</a>.",

        question6: "6. Як додаток сповіщає мене про майбутні спостереження станції?",
        answer6:
          "Додаток надсилає push-сповіщення, щоб попередити вас про майбутні спостереження станції, включаючи дату, час, тривалість і умови видимості, специфічні для вашого місця розташування. Будь ласка, переконайтеся, що ви надали дозвіл на сповіщення для цього додатка в налаштуваннях вашого телефону.",

        question7: "7. Чи можу я налаштувати сповіщення в додатку?",
        answer7:
          "Так, ви можете персоналізувати налаштування сповіщень у додатку, щоб отримувати сповіщення на основі вашого місця розташування, умов спостереження і навіть проміжків часу, які найкраще підходять для вас.",

        question8: "8. Що робити, якщо я не отримую сповіщення?",
        answer8:
          "Якщо ви не отримуєте сповіщення, переконайтеся, що сповіщення увімкнені в налаштуваннях вашого пристрою. Також перевірте налаштування сповіщень у додатку, щоб підтвердити, що ви увімкнули сповіщення для обраного місця розташування і часу.",

        question9: "9. Чи працює додаток за кордоном?",
        answer9:
          "Так, додаток Spot the Station доступний у всьому світі і надає інформацію про спостереження для більшості населених місць, що дозволяє легко побачити станцію практично з будь-якої точки.",

        question10: "10. Чому в моєму місці розташування немає можливостей для спостереження?",
        answer10:
          "Щоб ви могли побачити станцію, там, де ви знаходитесь, має бути темно, і космічна станція має бути над вами. Оскільки орбіта космічної станції проходить по всій земній кулі, вона може проходити над вами в моменти, коли вона не буде видима — або в середині дня, або в середині ночі. Spot The Station буде надсилати сповіщення лише тоді, коли у вас буде можливість побачити космічну станцію, а не кожного разу, коли вона буде над вами.",

        question11: "11. Чи потрібен мені телескоп, щоб побачити космічну станцію?",
        answer11:
          "Ні, ви можете побачити космічну станцію неозброєним оком, без будь-якого обладнання.",

        question12: "12. Чи з'являється і зникає станція через світло Місяця?",
        answer12:
          "Космічна станція видима, тому що вона відбиває світло Сонця. Це та ж причина, чому Місяць здається сяючим. Навіть коли Місяць ще не зійшов, ви все одно зможете побачити космічну станцію.",

        question13: "13. Який часовий пояс використовується для сповіщень?",
        answer13:
          "Вся інформація Spot The Station вказана в місцевому часовому поясі для обраного місця розташування. Spot The Station автоматично коригує час з урахуванням переходу на літній час.",

        question14: "14. Яку інформацію додаток надає для кожного спостереження?",
        answer14:
          "Для кожного спостереження додаток відображає час, тривалість видимості, максимальну висоту і напрямки, де станція з'явиться і зникне, допомагаючи вам знайти її в небі.",

        question15:
          "15. Як я можу побачити станцію під час кожного спостереження? Що означає вся ця інформація про спостереження?",
        answer15:
          "Додаток надає список майбутніх спостережень, якщо ви натиснете на Список наступних спостережень на головній сторінці.<br/><strong>Дата і час</strong> — це коли почнеться можливість спостереження у вашому часовому поясі. Всі спостереження відбуватимуться за кілька годин до або після сходу або заходу сонця. Це оптимальний період для спостереження, оскільки космічна станція відбиває сонячне світло і контрастує з темнішим небом.<br/><strong>Над горизонтом</strong> — це максимальний період часу, протягом якого космічна станція видима, перш ніж знову перетне горизонт.<br/><strong>Максимальна висота</strong> вимірюється в градусах. Вона представляє висоту космічної станції від лінії горизонту в нічному небі. Лінія горизонту відповідає 0 градусів, а точка прямо над головою — 90 градусам. Якщо ви тримаєте кулак на витягнутій руці і сумістите його нижню частину з лінією горизонту, верхня частина буде відповідати приблизно 10 градусам.<br/><strong>З'являється</strong> — це місце в небі, де станція буде видима спочатку. Це значення, як і максимальна висота, також вимірюється в градусах від лінії горизонту. Літери представляють напрямки компаса — Пн — північ, ЗхПнЗх — захід-північний захід і так далі.<br/><strong>Зникає</strong> - це місце, де в нічному небі Міжнародна космічна станція покине ваше поле зору.<img src='https://spotthestation.nasa.gov/images/astro_horizon.png' />",

        question16:
          "16. Розклад прольоту вказує, що космічна станція з'являється і зникає в одному і тому ж напрямку, як це можливо? Наприклад, - Час: Пн 15 липня 11:57 PM, Видимість: 2 хв, Макс. висота: 51°, З'являється: 51° над ПнПнЗх, Зникає: 11° над ПнПнЗх",
        answer16:
          "Програмне забезпечення Spot the Station округлює напрямки до найближчих основних і проміжних напрямків. Це може призвести до того, що здається, ніби станція з'являється і зникає в одному і тому ж напрямку, хоча вона рухається по небу. Це зазвичай відбувається при прольотах з коротким вікном видимості, тому що станція швидко переміщується в (або з) тінь Землі, де з вашого місця на землі ви не зможете побачити її повний прохід по небу.",

        question17: "17. Чи можу я побачити карту в реальному часі з місцем розташування станції?",
        answer17:
          "Так, додаток включає карту в реальному часі, що показує поточне положення Станції, коли вона обертається навколо Землі, даючи вам уявлення про її політ.",

        question18: "18. Що таке функція AR в додатку Spot the Station?",
        answer18:
          "Функція доповненої реальності (AR) в додатку Spot the Station дозволяє користувачам бачити віртуальне накладення шляху Міжнародної космічної станції в небі. Ця функція допомагає користувачам точніше визначити місцезнаходження станції, вирівнюючи їхній пристрій з реальним положенням станції.",

        question19: "19. Як отримати доступ до функції AR в додатку?",
        answer19:
          "Щоб отримати доступ до функції AR, відкрийте додаток і перейдіть до опції Вид AR в нижньому меню. Дотримуйтесь підказок на екрані, щоб вирівняти камеру вашого пристрою з небом, де додаток відобразить віртуальне накладення, що вказує на положення і траєкторію станції.",

        question20:
          "20. Чи потрібен мені спеціальний пристрій або програмне забезпечення для використання функції AR?",
        answer20:
          "Функція AR працює лише на пристроях, які можуть визначати свою орієнтацію в 3D-просторі. Це вимагає наявності певного обладнання, такого як гіроскоп або співпроцесор руху. Старі або бюджетні пристрої можуть не підтримувати цю функціональність.",

        question21: "21. Як працює функція AR?",
        answer21:
          "Використовуючи камеру і датчики вашого пристрою, функція AR накладає місцезнаходження станції в небі на ваш екран, коригуючи в реальному часі, коли ви переміщуєте пристрій. Додаток направляє вас в необхідному напрямку і показує, де станція з'явиться і зникне.",

        question22: "22. Чи можу я використовувати функцію AR як вдень, так і вночі?",
        answer22:
          "Так, ви можете використовувати функцію AR як вдень, так і вночі; однак найкращий досвід зазвичай буває в сутінках або вночі, коли станція видима неозброєним оком. Накладення AR буде працювати незалежно від умов освітлення, але фактичні спостереження залежать від видимості.",

        question23: "23. Чи точне накладення AR для всіх місць?",
        answer23:
          "Так, функція AR розроблена для надання точної інформації про положення на основі вашого GPS-розташування. Однак точність може трохи варіюватися в залежності від калібрування компаса і датчиків вашого пристрою. Якщо ви помічаєте розбіжності, відкалібруйте компас вашого пристрою через Налаштування.",

        question24: "24. Чи може функція AR допомогти з точними часами спостереження?",
        answer24:
          "Функція AR візуально направляє вас, щоб ви могли знайти станцію в точний час, коли вона з'являється в небі. У поєднанні з сповіщеннями про спостереження в додатку вона покращує вашу здатність бачити станцію, візуально направляючи вас в реальному часі і надаючи індикатор висоти для точного відстеження.",

        question25: "25. Чи є поради для покращення мого досвіду використання AR?",
        answer25:
          "Для найкращого досвіду використання AR використовуйте функцію на відкритій місцевості з ясним видом на небо. Уникайте перешкод, таких як високі будівлі або дерева, оскільки вони можуть блокувати видимість. Відкалібруйте компас вашого пристрою і переконайтеся, що служби визначення місцезнаходження і дозволи на використання камери увімкнені для плавної роботи.",

        question26: "26. Чи доступна функція AR як на Android, так і на iOS?",
        answer26:
          "Так, функція AR доступна як у версіях додатка для iOS, так і для Android, якщо ваш пристрій відповідає вимогам до обладнання.",

        question27: "27. Чи працює додаток в офлайн-режимі?",
        answer27:
          "Деяка базова функціональність, така як доступ до раніше завантажених розкладів спостережень або отримання запланованих сповіщень, може працювати в офлайн-режимі. Однак функції, що вимагають даних в реальному часі, такі як відстеження, вимагають підключення до інтернету.",

        question28: "28. Чи є якісь особливі вимоги для використання додатка?",
        answer28:
          "Додаток вимагає активного підключення до інтернету для відстеження в реальному часі. Крім того, для отримання інформації, специфічної для місця розташування, переконайтеся, що служби визначення місцезнаходження вашого пристрою увімкнені для додатка.",

        question29: "29. Чи безкоштовний додаток?",
        answer29:
          "Так, додаток Spot the Station можна безкоштовно завантажити і використовувати, без покупок в додатку або підписок.",

        question30: "30. До кого я можу звернутися за підтримкою по додатку?",
        answer30:
          "Для підтримки по додатку Spot the Station відвідайте сторінку підтримки NASA або зв'яжіться через опцію зворотного зв'язку в додатку.",
      },
    },
    astronauts: {
      title: "Хто зараз на станції?",
      number: "Кількість людей:",
    },
    live: {
      title: "Пряма трансляція",
      description:
        "Наразі відео Землі транслюється з зовнішньої HD-камери, встановленої на Міжнародній космічній станції. Камера дивиться на Землю, іноді через зображення проходить сонячна панель.",
    },
    tour: {
      title: "Віртуальний тур",
    },
    videos: {
      title: "Відео станції",
    },
    gallery: {
      title: "Галерея",
    },
  },
}

export default uk
export type Translations = typeof uk
