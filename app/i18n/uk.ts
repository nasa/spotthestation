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
      title: "Побачте станцію",
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
      title: "Міжнародна космічна станція - Деталі",
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
    },
    arNotSupported: "AR не підтримується на цьому пристрої",
    noOrientationSensor: "Сенсор орієнтації недоступний",
    noMagnetometerSensor: "Магнітометр недоступний",
    screenshotError: "Неможливо зробити знімок екрану",
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
    localCalculations: "Локальні обчислення",
  },
  resources: {
    header: "Ресурси",
    searchPlaceholder: "Пошук статей, подій, тощо...",
    suggestions: "ПРОПОЗИЦІЇ",
    searchResults: "Результати пошуку",
    tabs: {
      news: "Новини",
      about: "Про станцію",
      details: "Деталі",
    },
  },
}

export default uk
export type Translations = typeof uk
