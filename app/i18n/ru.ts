const ru = {
  name: "Русский",
  errorScreen: {
    title: "Произошла ошибка!",
    friendlySubtitle:
      "Это экран, который ваши пользователи увидят в продакшн-версии, когда произойдет ошибка. Вам следует настроить это сообщение (расположено в `app/i18n/ru.ts`) и, возможно, макет также (`app/screens/ErrorScreen`). Если вы хотите полностью удалить это, проверьте компонент <ErrorBoundary> в файле `app/app.tsx`.",
    reset: "СБРОСИТЬ ПРИЛОЖЕНИЕ",
  },
  snackBar: {
    ok: "OK",
    dismiss: "Закрыть",
    sightingsSaved: "Сведения о наблюдениях для последнего сохраненного местоположения загружены!",
    defaultError: "Произошла ошибка",
    locationSaved: "Местоположение сохранено",
    locationExist: "Местоположение с этим названием уже существует!",
    openSettingsError: "Не удается открыть настройки!",
    shared: "Успешно поделились!",
    savedToGallery: "Сохранено в галерее",
  },
  permissionsModal: {
    close: "Закрыть",
    openSettings: "Открыть настройки",
    body: "Чтобы использовать эту функцию, вам необходимо предоставить разрешение на доступ к галерее.",
  },
  permissionsAndroid: {
    title: "Разрешение на сохранение видео",
    message: "Этому приложению требуется разрешение на сохранение видео на вашем устройстве.",
    buttonNeutral: "Спросить меня позже",
    buttonNegative: "Отмена",
    buttonPositive: "OK",
  },
  thanksModal: {
    body: "Спасибо, что связались с нами. Мы получили ваше сообщение и обработаем ваш запрос. Обратите внимание, что это приложение не собирает данные пользователей, поэтому мы не можем ответить на все сообщения индивидуально.",
    dismiss: "Закрыть",
  },
  privacy: {
    title: "Использование вашего местоположения",
    body: "Мы используем данные о местоположении, чтобы вычислить предстоящие наблюдения в вашем текущем местоположении. Нам НЕ ТРЕБУЕТСЯ доступ к данным о местоположении, когда приложение не используется. Пожалуйста, предоставьте разрешение на доступ к местоположению, чтобы включить эту функцию.",
    agree: "СОГЛАСЕН",
    skip: "ПРОПУСТИТЬ",
    policy: "Политика конфиденциальности",
  },
  notifications: {
    push: {
      title: "Посмотрите на станцию сейчас!",
      subTitle: "Станция проходит над вами в",
    },
    before: {
      titleOne: "Посмотрите на станцию через",
      titleTwo: "минут!",
      subTitleOne: "Станция будет проходить над вами через",
      subTitleTwo: "минут в",
    },
  },
  units: {
    minute: "мин",
    kilometer: "км",
    kilogram: "кг",
    month: "месяц",
    metersPerSecond: "м/с",
  },
  tabNavigator: {
    homeTab: "Главная",
    issViewTab: "Режим AR",
    issNowTab: "Слежение",
    resourcesTab: "Ресурсы",
    settingsTab: "Настройки",
  },
  onboarding: {
    splash: {
      title: "Увидьте станцию",
      subTitle: "Взгляните в небо и увидьте Международную космическую станцию",
    },
    completeProfile: {
      notification: {
        title: "Настройки уведомлений",
        label: "Получать уведомления",
        tip: "Получайте уведомления, когда космическая станция приближается к вашему местоположению.",
        nextButton: "Далее",
      },
      location: {
        title: "Ваше местоположение",
        subtitle:
          "Пожалуйста, разрешите приложению автоматически определить ваше местоположение или введите его вручную.",
        detectButton: "Определить мое местоположение",
        orLabel: "или",
        selectLocation: "Введите ваше местоположение",
        detecting: "Определение местоположения...",
        doneButton: "Готово",
        serviceAlertTitle: "Службы геолокации отключены",
        serviceAlertBody: "Пожалуйста, включите службы геолокации, чтобы продолжить.",
        permissionAlertTitle: "Разрешение не предоставлено",
        permissionAlertBody:
          "Мы используем данные о местоположении для вычисления предстоящих наблюдений в вашем текущем местоположении. Пожалуйста, предоставьте разрешение на доступ к местоположению, чтобы включить эту функцию.",
      },
    },
  },
  homeScreen: {
    initLoader: {
      message: "Загрузка данных о МКС… Это может занять некоторое время.",
      trajectoryError:
        "Данные о траектории МКС в настоящее время недоступны из-за обслуживания сервера. Пожалуйста, попробуйте снова позже.",
    },
    header: {
      firstTimeHead: "СПИСОК СЛЕД. НАБЛЮДЕНИЙ",
      secondTimeHead: "ОБРАТНЫЙ ОТСЧЕТ",
      timezone: "Часовой пояс",
    },
    selectLocation: {
      title: "Выбор местоположения",
      inputPlaceholder: "Поиск местоположения по городу, индексу...",
      current: "Текущее местоположение",
      saved: "Сохраненные местоположения",
      nearby: "Ближайшие местоположения",
      search: "Результаты поиска",
      cta: "Настроить уведомления для этого местоположения",
      actionTitle: "Уведомления",
      refresh: "Обновить",
    },
    selectSightings: {
      title: "Предстоящие наблюдения",
      sightings: "Наблюдения",
      selectMessage: "Выберите события, для которых вы хотите получать уведомления.",
      switch: "Уведомлять меня о всех предстоящих событиях в этом местоположении.",
      aboveHorizon: "Над горизонтом",
      today: "Сегодня",
      tomorrow: "Завтра",
      appears: "Появляется",
      disappears: "Исчезает",
      all: "Все",
      timeOfDay: "Время суток",
      night: "Ночь",
      twilight: "Сумерки",
      duration: "Длительность",
      shorterThan2: "короче 2 минут",
      longerThan2: "2 минуты и дольше",
      empty: "Для этого местоположения с {{start}} по {{end}} нет потенциальных наблюдений МКС.",
      coach: {
        title: "Описание значков",
        moon: "МКС проходит над горизонтом в выбранном местоположении в ночное время.",
        sunset: "МКС проходит над горизонтом в выбранном местоположении в период сумерек.",
      },
    },
    coachMarks: {
      skip: "Пропустить тур",
      next: "Далее",
      finish: "Завершить",
      dismiss: "Закрыть",
      locationTitle: "Изменить местоположение",
      locationData: "Вы можете выбрать или изменить местоположение прямо здесь.",
      sightingsTitle: "Следующее наблюдение и обратный отсчет",
      sightingsData:
        "Этот раздел показывает дату и таймер обратного отсчета до следующего наблюдения МКС рядом с вашим выбранным местоположением. Вы можете нажать на блок Следующее наблюдение, чтобы увидеть полный список предстоящих наблюдений.",
      globeTitle: "Интерактивная Земля",
      globeData:
        "Вы можете видеть текущее положение МКС, проводя пальцем по экрану. Это позволяет вам взаимодействовать с Землей и отслеживать положение МКС в режиме реального времени.",
      mapTitle: "2D вид на карте",
      mapData:
        "Этот раздел показывает двухмерное представление полного пути МКС на фоне ночных и дневных регионов Земли.",
      navigationTitle: "Навигация",
      navigationData:
        "Вы можете переходить к различным функциям приложения из нижнего меню навигации.",
    },
  },
  issView: {
    timeHeader: "Обратный отсчет",
    cameraPermissionText:
      "Вы не разрешили использование камеры на вашем телефоне. Нажмите здесь, чтобы разрешить.",
    issCaptured: "Запечатлите этот момент",
    details: {
      title: "Международная космическая станция - Детали",
      orbitalSpeed: "Орбитальная скорость",
      longitude: "Долгота",
      latitude: "Широта",
      altitude: "Высота",
      crewOnboard: "Типичное количество экипажа на борту",
      launched: "Сборка началась",
      launchedValue: "20 ноября 1998",
      mass: "Расчетная масса",
      dimensions: "Расчетные размеры",
      orbitalPeriod: "Орбитальный период",
      orbitsPerDay: "Орбит в сутки",
      dimensionsValue: "109м x 73м x 14м",
    },
  },
  settings: {
    header: "Настройки",
    locationSettings: "Настройки местоположения",
    notificationSettings: "Настройки уведомлений",
    termsAndConditions: "Условия использования",
    contactUs: "Свяжитесь с нами",
    language: "Язык",
    termsAndConditionsData: {
      backButton: "Настройки",
      ios: {
        title: "ЛИЦЕНЗИОННОЕ СОГЛАШЕНИЕ ОБ ИСПОЛЬЗОВАНИИ ПРИЛОЖЕНИЯ",
        intro1:
          "ПОЛЬЗОВАТЕЛЬ желает использовать следующее ЛИЦЕНЗИРОВАННОЕ ПРИЛОЖЕНИЕ, разработанное Правительством Соединенных Штатов Америки, представленное Национальным управление по аэронавтике и исследованию космического пространства, находящимся по адресу: 300 E Street SW, Вашингтон, округ Колумбия (далее - NASA):",
        appData: {
          line1: "Лицензированное приложение:",
          line2: "Версия:",
          line3: "Номер технологии NASA: MSC-27535-1 (далее - ЛИЦЕНЗИРОВАННОЕ ПРИЛОЖЕНИЕ)",
        },
        contactData: {
          line1: "Контактное лицо в NASA:",
          line2: "Джейкоб Китон",
          line3: "Главный офис NASA",
          line4: "300 E Street SW",
          line5: "Электронная почта: SpotTheStation@hq.nasa.gov",
        },
        intro2:
          "Правом NASA на предоставление ЛИЦЕНЗИРОВАННОГО ПРИЛОЖЕНИЯ является Политика NASA NPD 2820.1C",
        intro3:
          "ТАКИМ ОБРАЗОМ, учитывая, что NASA предоставляет ЛИЦЕНЗИРОВАННОЕ ПРИЛОЖЕНИЕ ПОЛЬЗОВАТЕЛЮ и предоставляет ПОЛЬЗОВАТЕЛЮ непередаваемое право использования ЛИЦЕНЗИРОВАННОГО ПРИЛОЖЕНИЯ в соответствии с настоящим соглашением на любом iPhone или iPod touch, которым ПОЛЬЗОВАТЕЛЬ владеет или управляет, и в соответствии с Правилами использования, установленными в Пользовательском соглашении App Store, только для некоммерческих целей, ПОЛЬЗОВАТЕЛЬ соглашается со следующим:",
        body: {
          line1:
            "1. NASA и ПОЛЬЗОВАТЕЛЬ признают, что настоящее Соглашение заключено только между NASA и ПОЛЬЗОВАТЕЛЕМ, а не с Apple, это Соглашение непередаваемое, и NASA, а не Apple, полностью отвечает за ЛИЦЕНЗИРОВАННОЕ ПРИЛОЖЕНИЕ и его содержание.",
          line2:
            "2. NASA и ПОЛЬЗОВАТЕЛЬ признают и соглашаются, что Apple и дочерние компании Apple являются третьими сторонами, имеющими права в соответствии с настоящим Соглашением, и что после принятия ПОЛЬЗОВАТЕЛЕМ условий настоящего Соглашения Apple будет иметь право (и будет считаться принявшим право) принимать меры по исполнению настоящего Соглашения против ПОЛЬЗОВАТЕЛЯ в качестве третьей стороны, имеющей права по настоящему Соглашению.",
          line3:
            "3. ЛИЦЕНЗИРОВАННОЕ ПРИЛОЖЕНИЕ остается собственностью NASA. ПОЛЬЗОВАТЕЛЬ признает, что не приобретает никакого права собственности на ЛИЦЕНЗИРОВАННОЕ ПРИЛОЖЕНИЕ на основании настоящего Соглашения. ЛИЦЕНЗИРОВАННОЕ ПРИЛОЖЕНИЕ не является общественным достоянием, и ничто в настоящем Соглашении не может толковаться как предоставление ЛИЦЕНЗИРОВАННОГО ПРИЛОЖЕНИЯ общественности без ограничений.",
          line4:
            "4. ПОЛЬЗОВАТЕЛЬ не имеет права выпускать, распространять или публиковать ЛИЦЕНЗИРОВАННОЕ ПРИЛОЖЕНИЕ.",
          line5:
            "5. NASA не несет никакой ответственности за обслуживание или обновление предоставленного ЛИЦЕНЗИРОВАННОГО ПРИЛОЖЕНИЯ, а также за исправление ошибок в ЛИЦЕНЗИРОВАННОМ ПРИЛОЖЕНИИ. NASA и ПОЛЬЗОВАТЕЛЬ признают, что Apple не несет никаких обязательств предоставлять обслуживание и поддержку ЛИЦЕНЗИРОВАННОГО ПРИЛОЖЕНИЯ.",
          line6:
            '6. ПОЛЬЗОВАТЕЛЬ заявляет и гарантирует, что (i) он/она не находится в стране, подверженной эмбарго правительства США или которая была признана правительством США страной, "поддерживающей терроризм"; и (ii) он/она не включен(а) в какой-либо список запрещенных или ограниченных правительством США сторон.',
          line7:
            '7. ЛИЦЕНЗИРОВАННОЕ ПРИЛОЖЕНИЕ ПРЕДОСТАВЛЯЕТСЯ "КАК ЕСТЬ" БЕЗ ЛЮБЫХ ГАРАНТИЙ ЛЮБОГО ВИДА, НИ ВЫРАЖЕННЫХ, НИ ПОДРАЗУМЕВАЕМЫХ, НИ ПРАВОВЫХ, ВКЛЮЧАЯ, НО НЕ ОГРАНИЧИВАЯСЬ, ЛЮБЫЕ ГАРАНТИИ ТОГО, ЧТО ЛИЦЕНЗИРОВАННОЕ ПРИЛОЖЕНИЕ БУДЕТ СООТВЕТСТВОВАТЬ ТРЕБОВАНИЯМ, ЛЮБЫЕ ПОДРАЗУМЕВАЕМЫЕ ГАРАНТИИ ТОГО, ЧТО ЛИЦЕНЗИРОВАННОЕ ПРИЛОЖЕНИЕ БУДЕТ ПОДХОДИТЬ ДЛЯ ОПРЕДЕЛЕННОЙ ЦЕЛИ, НАДЕЖНОСТЬ ИСПОЛЬЗОВАНИЯ И ОТСУТСТВИЕ НАРУШЕНИЯ, А ТАКЖЕ ЛЮБЫЕ ГАРАНТИИ ТОГО, ЧТО ЛИЦЕНЗИРОВАННОЕ ПРИЛОЖЕНИЕ НЕ БУДЕТ СОДЕРЖАТЬ ОШИБОК. В НИКАКОМ СЛУЧАЕ NASA НЕ НЕСЕТ ОТВЕТСТВЕННОСТИ ЗА ЛЮБОЙ УЩЕРБ, ВКЛЮЧАЯ, НО НЕ ОГРАНИЧИВАЯСЬ, ПРЯМОЙ, КОСВЕННЫЙ, СПЕЦИАЛЬНЫЙ ИЛИ ПОСЛЕДСТВЕННЫЙ УЩЕРБ, ВОЗНИКАЮЩИЙ В КАКОМ-ЛИБО ОТНОШЕНИИ С ЛИЦЕНЗИРОВАННЫМ ПРИЛОЖЕНИЕМ, ВНЕ ЗАВИСИМОСТИ ОТ ТОГО, ВОЗНИК ЛИ ТАКОЙ УЩЕРБ НА ГАРАНТИЙНОМ, КОНТРАКТНОМ, ДЕЛИКТНОМ ИЛИ ДРУГОМ ОСНОВАНИИ, БЫЛ ЛИ УЩЕРБ НАНЕСЕН ЛИЦУ ИЛИ ИМУЩЕСТВУ, И БЫЛ ЛИ УЩЕРБ ПРИЧИНЕН ИСПОЛЬЗОВАНИЕМ ЛИЦЕНЗИРОВАННОГО ПРИЛОЖЕНИЯ ИЛИ НЕТ. ПОЛЬЗОВАТЕЛЬ СОГЛАШАЕТСЯ ОТКАЗАТЬСЯ ОТ ВСЕХ ПРЕТЕНЗИЙ К ПРАВИТЕЛЬСТВУ США, ЕГО ПОДРЯДЧИКАМ И ИХ СУБПОДРЯДЧИКАМ И ОБЯЗУЕТСЯ ВЫПЛАТИТЬ ВОЗМЕЩЕНИЕ И ОСВОБОДИТЬ ОТ ОТВЕТСТВЕННОСТИ ПРАВИТЕЛЬСТВО США, ЕГО ПОДРЯДЧИКОВ И ИХ СУБПОДРЯДЧИКОВ ЗА ЛЮБОЙ УЩЕРБ, НАНЕСЕННЫЙ В РЕЗУЛЬТАТЕ ИСПОЛЬЗОВАНИЯ ПОЛЬЗОВАТЕЛЕМ ЛИЦЕНЗИРОВАННОГО ПРИЛОЖЕНИЯ, ВКЛЮЧАЯ ЛЮБОЙ УЩЕРБ ОТ ПРОДУКТОВ, ОСНОВАННЫХ НА ЛИЦЕНЗИРОВАННОМ ПРИЛОЖЕНИИ.',
          line8:
            "8. В случае несоответствия ЛИЦЕНЗИРОВАННОГО ПРИЛОЖЕНИЯ любой гарантии, предоставленной законом, ПОЛЬЗОВАТЕЛЬ может уведомить Apple, и Apple вернет ПОЛЬЗОВАТЕЛЮ стоимость покупки (если таковая была) ЛИЦЕНЗИРОВАННОГО ПРИЛОЖЕНИЯ. В максимально допустимой степени согласно применимому законодательству, Apple не несет ответственности за любые другие убытки, обязательства, повреждения, расходы или издержки, связанные с несоответствием ЛИЦЕНЗИРОВАННОГО ПРИЛОЖЕНИЯ какой-либо гарантии.",
          line9:
            "9. NASA и ПОЛЬЗОВАТЕЛЬ признают, что в случае каких-либо претензий третьих сторон относительно того, что ЛИЦЕНЗИРОВАННОЕ ПРИЛОЖЕНИЕ или владение и использование ЛИЦЕНЗИРОВАННОГО ПРИЛОЖЕНИЯ ПОЛЬЗОВАТЕЛЕМ нарушает права интелектуальной собственности, ответственность за исследование, защиту, урегулирование и устранение любых таких претензий по нарушению интеллектуальных прав будет лежать исключительно на NASA, а не на Apple, с учетом закона.",
          line10:
            "10. NASA и ПОЛЬЗОВАТЕЛЬ признают, что NASA, а не Apple, несет ответственность за урегулирование любых претензий ПОЛЬЗОВАТЕЛЯ или третьих сторон, связанных с ЛИЦЕНЗИРОВАННЫМ ПРИЛОЖЕНИЕМ или владением и/или использованием ЛИЦЕНЗИРОВАННОГО ПРИЛОЖЕНИЯ ПОЛЬЗОВАТЕЛЕМ, включая, но не ограничиваясь: (i) претензии по ответственности за качество продукта; (ii) любые претензии о несоответствии ЛИЦЕНЗИРОВАННОГО ПРИЛОЖЕНИЯ применимым правовым или регулирующим требованиям, включая любые гарантии, предоставленные законом; и (iii) претензии, возникающие в соответствии с законодательством о защите прав потребителей или аналогичным законодательством.",
          line11:
            "11. Настоящее Соглашение должно толковаться и юридические отношения между сторонами должны определяться в соответствии с федеральным законодательством Соединенных Штатов Америки для всех целей.",
          line12:
            "12. Настоящее Соглашение составляет полное понимание и согласие между NASA и ПОЛЬЗОВАТЕЛЕМ относительно выпуска ЛИЦЕНЗИРОВАННОГО ПРИЛОЖЕНИЯ и не может быть заменено, изменено или дополнено.",
          line13:
            "13. Принимая и используя ЛИЦЕНЗИРОВАННОЕ ПРИЛОЖЕНИЕ на основании настоящего Соглашения, ПОЛЬЗОВАТЕЛЬ тем самым соглашается со всеми здесь приведенными условиями.",
        },
      },
      android: {
        title: "СОГЛАШЕНИЕ ОБ ИСПОЛЬЗОВАНИИ ЛИЦЕНЗИРОВАННОГО ПРИЛОЖЕНИЯ",
        intro1:
          "КОНЕЧНЫЙ ПОЛЬЗОВАТЕЛЬ желает использовать следующий ПРОДУКТ, разработанный Правительством Соединенных Штатов Америки, представленный Национальным управление по аэронавтике и исследованию космического пространства, находящимся по адресу: Moffett Field, CA 94035 (далее - NASA):",
        appData: {
          line1: "Программное обеспечение:",
          line2: "Версия:",
          line3: "Номер технологии NASA: MSC-27535-1",
        },
        intro2:
          "Правом NASA на выпуск ЛИЦЕНЗИРОВАННОГО ПРИЛОЖЕНИЯ является Политика NASA NPD 2820.1C.",
        intro3:
          "ТАКИМ ОБРАЗОМ, принимая во внимание предоставление ЛИЦЕНЗИРОВАННОГО ПРИЛОЖЕНИЯ ПОЛЬЗОВАТЕЛЮ и предоставление ПОЛЬЗОВАТЕЛЮ непередаваемого права использования ЛИЦЕНЗИРОВАННОГО ПРИЛОЖЕНИЯ в личных, некоммерческих целях и в соответствии с условиями, указанными здесь, а также в соответствии с Условиями использования Android Market, на любом мобильном устройстве с операционной системой Android (далее - Устройство), которым ПОЛЬЗОВАТЕЛЬ владеет или управляет, ПОЛЬЗОВАТЕЛЬ соглашается со следующим:",
        body: {
          line1:
            "1. ЛИЦЕНЗИРОВАННОЕ ПРИЛОЖЕНИЕ остается собственностью NASA. ПОЛЬЗОВАТЕЛЬ признает, что не приобретает никакого права собственности на ЛИЦЕНЗИРОВАННОЕ ПРИЛОЖЕНИЕ на основании настоящего Соглашения. ЛИЦЕНЗИРОВАННОЕ ПРИЛОЖЕНИЕ не является общественным достоянием, и ничто в настоящем Соглашении не может толковаться как предоставление ЛИЦЕНЗИРОВАННОГО ПРИЛОЖЕНИЯ общественности без ограничений.",
          line2:
            "2. ПОЛЬЗОВАТЕЛЬ не имеет права выпускать, распространять или публиковать ЛИЦЕНЗИРОВАННОЕ ПРИЛОЖЕНИЕ.",
          line3:
            "3. NASA не несет ни ответственности, ни обязанности по обслуживанию или обновлению предоставленного ЛИЦЕНЗИРОВАННОГО ПРИЛОЖЕНИЯ, а также по исправлению ошибок в ЛИЦЕНЗИРОВАННОМ ПРИЛОЖЕНИИ.",
          line4:
            '4. ПОЛЬЗОВАТЕЛЬ заявляет и гарантирует, что (i) он/она не находится в стране, подверженной эмбарго правительства США или которая была названа правительством США страной, "поддерживающей терроризм"; и (ii) он/она не включен(а) в какой-либо список запрещенных или ограниченных правительством США сторон.',
          line5:
            '5. ЛИЦЕНЗИРОВАННОЕ ПРИЛОЖЕНИЕ ПРЕДОСТАВЛЯЕТСЯ "КАК ЕСТЬ" БЕЗ ЛЮБЫХ ГАРАНТИЙ ЛЮБОГО ВИДА, НИ ВЫРАЖЕННЫХ, НИ ПОДРАЗУМЕВАЕМЫХ, НИ ПРАВОВЫХ, ВКЛЮЧАЯ, НО НЕ ОГРАНИЧИВАЯСЬ, ЛЮБЫЕ ГАРАНТИИ ТОГО, ЧТО ЛИЦЕНЗИРОВАННОЕ ПРИЛОЖЕНИЕ БУДЕТ СООТВЕТСТВОВАТЬ ТРЕБОВАНИЯМ, ЛЮБЫЕ ПОДРАЗУМЕВАЕМЫЕ ГАРАНТИИ ТОГО, ЧТО ЛИЦЕНЗИРОВАННОЕ ПРИЛОЖЕНИЕ БУДЕТ ПОДХОДИТЬ ДЛЯ ОПРЕДЕЛЕННОЙ ЦЕЛИ, НАДЕЖНОСТЬ ИСПОЛЬЗОВАНИЯ И ОТСУТСТВИЕ НАРУШЕНИЯ, А ТАКЖЕ ЛЮБЫЕ ГАРАНТИИ ТОГО, ЧТО ЛИЦЕНЗИРОВАННОЕ ПРИЛОЖЕНИЕ НЕ БУДЕТ СОДЕРЖАТЬ ОШИБОК. В НИКАКОМ СЛУЧАЕ NASA НЕ НЕСЕТ ОТВЕТСТВЕННОСТИ ЗА ЛЮБОЙ УЩЕРБ, ВКЛЮЧАЯ, НО НЕ ОГРАНИЧИВАЯСЬ, ПРЯМОЙ, КОСВЕННЫЙ, СПЕЦИАЛЬНЫЙ ИЛИ ПОСЛЕДСТВЕННЫЙ УЩЕРБ, ВОЗНИКАЮЩИЙ В КАКОМ-ЛИБО ОТНОШЕНИИ С ЛИЦЕНЗИРОВАННЫМ ПРИЛОЖЕНИЕМ, ВНЕ ЗАВИСИМОСТИ ОТ ТОГО, ВОЗНИК ЛИ ТАКОЙ УЩЕРБ НА ГАРАНТИЙНОМ, КОНТРАКТНОМ, ДЕЛИКТНОМ ИЛИ ДРУГОМ ОСНОВАНИИ, БЫЛ ЛИ УЩЕРБ НАНЕСЕН ЛИЦУ ИЛИ ИМУЩЕСТВУ, И БЫЛ ЛИ УЩЕРБ ПРИЧИНЕН ИСПОЛЬЗОВАНИЕМ ЛИЦЕНЗИРОВАННОГО ПРИЛОЖЕНИЯ ИЛИ НЕТ. ПОЛЬЗОВАТЕЛЬ СОГЛАШАЕТСЯ ОТКАЗАТЬСЯ ОТ ВСЕХ ПРЕТЕНЗИЙ К ПРАВИТЕЛЬСТВУ США, ЕГО ПОДРЯДЧИКАМ И ИХ СУБПОДРЯДЧИКАМ И ОБЯЗУЕТСЯ ВЫПЛАТИТЬ ВОЗМЕЩЕНИЕ И ОСВОБОДИТЬ ОТ ОТВЕТСТВЕННОСТИ ПРАВИТЕЛЬСТВО США, ЕГО ПОДРЯДЧИКОВ И ИХ СУБПОДРЯДЧИКОВ ЗА ЛЮБОЙ УЩЕРБ, НАНЕСЕННЫЙ В РЕЗУЛЬТАТЕ ИСПОЛЬЗОВАНИЯ ПОЛЬЗОВАТЕЛЕМ ЛИЦЕНЗИРОВАННОГО ПРИЛОЖЕНИЯ, ВКЛЮЧАЯ ЛЮБОЙ УЩЕРБ ОТ ПРОДУКТОВ, ОСНОВАННЫХ НА ЛИЦЕНЗИРОВАННОМ ПРИЛОЖЕНИИ.',
          line6:
            "6. Настоящее Соглашение должно толковаться и юридические отношения между сторонами должны определяться в соответствии с федеральным законодательством Соединенных Штатов Америки для всех целей.",
          line7:
            "7. Настоящее Соглашение составляет полное понимание и согласие между NASA и ПОЛЬЗОВАТЕЛЕМ относительно выпуска ЛИЦЕНЗИРОВАННОГО ПРИЛОЖЕНИЯ и не может быть заменено, изменено или дополнено.",
          line8:
            "8. Принимая и используя ЛИЦЕНЗИРОВАННОЕ ПРИЛОЖЕНИЕ на основании настоящего Соглашения, ПОЛЬЗОВАТЕЛЬ тем самым соглашается со всеми здесь приведенными условиями.",
        },
      },
    },
    contactUsData: {
      backButton: "Настройки",
      title: "Свяжитесь с нами",
      titlePlaceholder: "Выберите тему",
      commentsPlaceholder: "Введите комментарий",
      sendButton: "Отправить",
      contactUsOptions: {
        reportAnIssue: "Сообщить о проблеме",
        improvementIdeas: "Идеи по улучшению",
        generalQuestions: "Общие вопросы",
        comments: "Комментарии",
      },
    },
    notificationSettingsData: {
      backButton: "Настройки",
      notificationTitle: "Настройки уведомлений",
      privacyTitle: "Настройки конфиденциальности",
      upcomingLabel: "Предстоящие события",
      customizeLabel: "Настроить уведомления",
      upcomingTip: "Выключите, чтобы перестать получать уведомления о событиях.",
      notifyMeBefore: "УВЕДОМИТЬ МЕНЯ ЗА",
      turnOffNotifications: "ВЫКЛЮЧИТЬ УВЕДОМЛЕНИЯ",
      from: "С",
      until: "До",
    },
    locationSettingsData: {
      backToSettings: "Настройки",
      goBack: "Вернуться",
      generalTitle: "Настройки местоположения",
      cta: "Настроить уведомления для этого местоположения",
      locationPermission: "Предоставить разрешение на местоположение",
      addNewLocation: {
        generalTitleAdd: "Добавить новое местоположение",
        generalTitleEdit: "Редактировать местоположение",
        confirnModalButton: "Подтвердить",
        saveButton: "Сохранить местоположение",
        searchInputPlaceholder: "Введите город, почтовый индекс или адрес",
        nameInputPlaceholder: "Введите название местоположения",
      },
      removeLocation: {
        question: "Вы уверены, что хотите удалить это местоположение?",
        cancelButton: "Отмена",
        removeButton: "Удалить",
      },
    },
    localCalculations: "Локальные вычисления",
  },
  resources: {
    header: "Ресурсы",
    searchPlaceholder: "Поиск статей, событий и т.д...",
    suggestions: "ПРЕДЛОЖЕНИЯ",
    searchResults: "Результаты поиска",
    tabs: {
      news: "Новости",
      about: "О нас",
      details: "Детали",
    },
  },
}

export default ru
export type Translations = typeof ru