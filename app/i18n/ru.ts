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
  outdatedModal: {
    title: "Доступно обновление",
    body: "Доступна новая версия приложения! Скачайте новую версию в",
    buttonNegative: "Отмена",
    buttonPositive: "Скачать",
  },
  permissionsModal: {
    close: "Закрыть",
    openSettings: "Открыть настройки",
    bodyGallery:
      "Чтобы использовать эту функцию, вам необходимо предоставить разрешение на доступ к галерее.",
    bodyCalendar: "Чтобы использовать эту функцию, вам необходимо предоставить доступ к календарю.",
  },
  fontSizeModal: {
    title: "Размер шрифта слишком большой",
    body1:
      "Похоже, что размер шрифта на вашем устройстве установлен слишком высоко. Это может привести к обрезке или неправильному отображению важной информации в приложении.",
    bodyAndroid:
      "Чтобы настроить размер шрифта, перейдите в Настройки → Дисплей → Размер и стиль шрифта → Переместите ползунок на меньший размер.",
    bodyIOS:
      "Чтобы настроить размер шрифта, перейдите в Настройки → Универсальный доступ → Дисплей и размер текста → Увеличенный текст → Переместите ползунок на меньший размер.",
    cancel: "Отмена",
    settings: "Перейти в Настройки",
  },
  permissionsAndroid: {
    title: "Разрешение на сохранение видео",
    message: "Этому приложению требуется разрешение на сохранение видео на вашем устройстве.",
    buttonNeutral: "Спросить меня позже",
    buttonNegative: "Отмена",
    buttonPositive: "OK",
    alarmPermissionTitle: "Требуется разрешение",
    alarmPermissionMessage:
      "Пожалуйста, предоставьте разрешение на установку напоминаний на следующем экране, чтобы получать уведомления о предстоящих наблюдениях.",
  },
  thanksModal: {
    body: "Спасибо, что связались с нами. Мы получили ваше сообщение и обработаем ваш запрос. Обратите внимание, что это приложение не собирает данные пользователей, поэтому мы не можем ответить на все сообщения индивидуально. Пожалуйста, посетите страницу Часто задаваемых вопросов, чтобы узнать, есть ли ответ на ваш вопрос.",
    dismiss: "Закрыть",
    faq: "Часто задаваемые вопросы",
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
      subTitleIos: "Станция проходит над вами в",
      subTitleAndroid: "Станция проходит над вами сейчас ({{time}}) в",
    },
    before: {
      title: "Посмотрите на станцию через {{amount}} {{units}}!",
      subTitleIos: "Станция будет проходить над вами через {{amount}} {{units}} в {{location}}",
      subTitleAndroid:
        "Станция будет проходить над вами через {{amount}} {{units}} ({{time}}) в {{location}}",
      minutes: "минут",
      hours: "часов",
    },
    timeLeft: "ОСТАВШЕЕСЯ ВРЕМЯ",
  },
  units: {
    minute: "мин",
    kilometer: "км",
    kilogram: "кг",
    month: "месяц",
    metersPerSecond: "м/с",
    time: "T",
    hour: "ч",
    mile: "миль",
    foot: "футов",
    meter: "м",
    pound: "фунтов",
    milesPerHour: "миль/ч",
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
      title: "Увидьте\nстанцию",
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
      message: "Загрузка данных о станции… Это может занять некоторое время.",
      trajectoryError:
        "Данные о траектории станции в настоящее время недоступны из-за обслуживания сервера. Пожалуйста, попробуйте снова позже.",
      noNetwork:
        "Данные о траектории станции в настоящее время недоступны из-за отсутствия подключения. Пожалуйста, попробуйте снова позже.",
    },
    header: {
      firstTimeHead: "СЛЕДУЮЩЕЕ НАБЛЮДЕНИЕ",
      secondTimeHead: "ОБРАТНЫЙ ОТСЧЕТ",
      timezone: "Часовой пояс",
      opportunities: "Наблюдения",
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
      upcomingSightings: "Предстоящие наблюдения",
      pastSightings: "Прошлые наблюдения",
      selectMessage: "Выберите события, для которых вы хотите получать уведомления.",
      switch: "Уведомлять меня о всех предстоящих событиях в этом местоположении.",
      aboveHorizon: "Над горизонтом",
      maxHeight: "Максимальная высота",
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
      between2And4: "от 2 до 4 минут",
      longerThan4: "4 минуты и дольше",
      empty:
        "Для этого местоположения с {{start}} по {{end}} нет потенциальных наблюдений станции.",
      shareTitle: "Станция проходит над {{location}} {{date}}",
      shareAllTitle: "Станция проходит над {{location}}:",
      shareLink:
        "Чтобы узнать больше и отслеживать станцию с помощью дополненной реальности, скачайте приложение по ссылке",
      calendarEventTitle: "Наблюдайте за станцией в {{location}}!",
      calendarSuccess: "Событие в календаре успешно создано",
      calendarError: "Не удалось создать событие в календаре",
      coach: {
        title: "Описание значков",
        moon: "Станция проходит над горизонтом в выбранном местоположении в ночное время.",
        sunset: "Станция проходит над горизонтом в выбранном местоположении в период сумерек.",
      },
      cloudCover: {
        title: "Облачность",
        any: "Любая",
        low: "Низкая (<25%)",
        medium: "Средняя (25-50%)",
      },
      shareAll: "Поделиться списком наблюдений",
      compass: {
        N: "С",
        NNE: "ССВ",
        NE: "СВ",
        ENE: "ВСВ",
        E: "В",
        ESE: "ВЮВ",
        SE: "ЮВ",
        SSE: "ЮЮВ",
        S: "Ю",
        SSW: "ЮЮЗ",
        SW: "ЮЗ",
        WSW: "ЗЮЗ",
        W: "З",
        WNW: "ЗСЗ",
        NW: "СЗ",
        NNW: "ССЗ",
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
        "Этот раздел показывает дату и таймер обратного отсчета до следующего наблюдения станции рядом с вашим выбранным местоположением. Вы можете нажать на блок Следующее наблюдение, чтобы увидеть полный список предстоящих наблюдений.",
      globeTitle: "Интерактивная Земля",
      globeData:
        "Вы можете видеть текущее положение станции, проводя пальцем по экрану. Это позволяет вам взаимодействовать с Землей и отслеживать положение станции в режиме реального времени.",
      mapTitle: "2D вид на карте",
      mapData:
        "Этот раздел показывает двухмерное представление полного пути станции на фоне ночных и дневных регионов Земли.",
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
      title: "Информация",
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
      dimensionsValue: "{{width}} x {{length}} x {{height}}",
      dateTime: "Дата и время",
      maxHeight: "Максимальная высота",
      duration: "Продолжительность над горизонтом",
      appears: "Появляется",
      disappears: "Исчезает",
      distance: "Расстояние",
      nextSighting: "Следующее наблюдение",
    },
    arNotSupported: "AR не поддерживается на этом устройстве",
    noOrientationSensor: "Датчик ориентации недоступен",
    noMagnetometerSensor: "Магнитометр недоступен",
    screenshotError: "Невозможно сделать снимок экрана",
    coachMarks: {
      circleTitle: "Увидьте станцию",
      circleData:
        "Чтобы найти станцию, поверните телефон в направлении стрелки за пределами круга. По мере приближения цвет круга изменится на зеленый.",
      compassTitle: "Компас",
      compassData:
        "Этот компас показывает вам направление, в котором вы смотрите, и относительное направление, в котором вы можете увидеть станцию.",
      infoTitle: "Информация",
      infoData:
        "Этот переключатель открывает или закрывает окно с подробной информацией о текущем или следующем наблюдении и актуальной информацией о станции.",
      trajectoryTitle: "Траектория станции",
      trajectoryData:
        "Этот переключатель включает или отключает траекторию станции на экране. Сплошная линия показывает прошлую, а пунктирная - будущую траекторию станции.",
      arTitle: "Режим AR",
      arData: "Этот переключатель переключает между полноэкранным и оконным режимом AR.",
      shareTitle: "Поделиться",
      shareData:
        "Эта кнопка позволяет вам поделиться скриншотом AR через SMS, электронную почту или социальные сети.",
      screenshotTitle: "Снимок экрана",
      screenshotData:
        "Эта кнопка позволяет вам сделать снимок AR для сохранения в галерее фотографий.",
      videoTitle: "Запись видео",
      videoData:
        "Эта кнопка позволяет вам записать видео AR, чтобы запечатлеть моменты, когда вы находите станцию.",
    },
    safetyReminder: {
      title: "Внимание: Напоминание о безопасности",
      subtitle1: "Рекомендуется родительский контроль:",
      body1:
        "Пожалуйста, помните о важности родительского контроля при взаимодействии с экраном дополненной реальности в этом приложении. Дети должны использовать эту функцию под руководством ответственного взрослого, чтобы обеспечить безопасный опыт.",
      subtitle2: "Будьте внимательны к окружающей обстановке:",
      body2:
        "Пока вы используете экран дополненной реальности, всегда оставайтесь внимательными к своему физическому окружению. Обращайте внимание на препятствия, неровный рельеф или другие опасности, которые могут создавать угрозу для вашей безопасности. Ваша безопасность превыше всего, поэтому, пожалуйста, всега проявляйте осторожность и внимательность.",
      home: "На главную",
      ok: "Я понимаю",
    },
  },
  settings: {
    header: "Настройки",
    locationSettings: "Настройки местоположения",
    notificationSettings: "Настройки уведомлений",
    termsAndConditions: "Условия использования",
    contactUs: "Свяжитесь с нами",
    language: "Язык",
    timeFormat: "Формат времени",
    unitsOfMeasurement: "Система измерения",
    metric: "Метрическая",
    imperial: "Имперская (США)",
    calibrateCompass: "Калибровка компаса",
    calibrateCompassData: {
      instructions: "Для калибровки компаса поверните устройство восьмёркой несколько раз.",
      accuracy: "Точность сенсора:",
      low: "Низкая",
      medium: "Средняя",
      high: "Высокая",
    },
    tutorials: "Учебные материалы",
    tutorialsData: {
      description:
        "Хотите ли вы еще раз посмотреть пошаговые инструкции для домашней и AR-страниц?",
      homePage: "Главная страница",
      arPage: "Режим AR",
    },
    termsAndConditionsData: {
      backButton: "Настройки",
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
      rangeInputPlaceholder: "Выберите от 1 до 120 минут",
      customOption: "Пользовательский",
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
    share: "Поделиться",
    shareLink:
      "Чтобы отслеживать Международную космическую станцию с помощью дополненной реальности, скачайте мобильное приложение NASA Spot The Station на",
    localCalculations: "Локальные вычисления",
  },
  resources: {
    header: "Ресурсы",
    goBack: "Вернуться",
    sightings: {
      title: "Предстоящие наблюдения",
    },
    news: {
      title: "Новости станции",
      searchPlaceholder: "Поиск статей, событий и т.д...",
      suggestions: "ПРЕДЛОЖЕНИЯ",
      searchResults: "Результаты поиска",
    },
    spotTheStation: {
      title: "Как увидеть станцию?",
    },
    about: {
      title: "О станции",
    },
    details: {
      title: "Детали станции",
    },
    faq: {
      title: "Часто задаваемые вопросы",
      questions: {
        question1: "1. Зачем нужна Международная космическая станция?",
        answer1:
          "Международная космическая станция — это слияние науки, технологий и человеческих инноваций, которое позволяет проводить исследования, невозможные на Земле, на благо человечества. Более 24 лет NASA поддерживает постоянное присутствие человека на станции, благодаря чему астронавты научились жить и работать в космосе в течение длительных периодов.<br/>" +
          "Космическая станция — в которой участвуют США, Россия, Канада, Япония и страны-участницы ЕКА (Европейское космическое агентство) — является одной из самых сложных и взаимозависимых международных коллабораций, когда-либо предпринятых. Она объединяет международные экипажи и множество поставщиков космического транспорта, а также глобально распределенные команды поддержки, объекты, сети связи и мировое научное сообщество.<br/>" +
          "За последние 24 года космическая станция превратилась в орбитальную лабораторию с исследовательскими возможностями, которые позволяют ученым из более чем 109 стран проводить более 4000 новаторских экспериментов в экстремальной и уникальной среде космического полета.<br/>" +
          "Космическая станция служит трамплином для развития экономики низкой околоземной орбиты и следующих великих шагов NASA в исследовании, включая миссии на Луну в рамках программы Artemis и, в конечном итоге, исследование Марса человеком.<br/>" +
          "Узнайте больше о Международной космической станции, ее исследованиях и экипаже на:<br/>" +
          "<a href='https://www.nasa.gov/station'>https://www.nasa.gov/station</a>",

        question2: "2. С какой скоростью движется Международная космическая станция?",
        answer2:
          "Международная космическая станция облетает Землю каждые 90 минут. Она движется со скоростью около 28 000 километров в час, что позволяет экипажу на борту видеть 16 восходов и закатов каждый день. Экипажи непрерывно занимают космическую станцию с ноября 2000 года. За это время 280 человек из 23 стран посетили орбитальный форпост, а станция облетела Землю сотни тысяч раз.",

        question3: "3. Как часто я могу видеть Международную космическую станцию?",
        answer3:
          "Международная космическая станция видна, потому что отражает солнечный свет — по той же причине мы видим Луну. Однако, в отличие от Луны, космическая станция недостаточно яркая, чтобы ее можно было увидеть днем. Возможности наблюдения могут варьироваться от одного раза в месяц до нескольких раз в неделю, поскольку солнечный свет отражается от станции, когда она проходит над вашим местоположением на рассвете и в сумерках.",

        question4: "4. Что такое приложение Spot the Station?",
        answer4:
          "Мобильное приложение Spot the Station — это официальное приложение NASA, которое помогает пользователям отслеживать и получать уведомления о видимости Международной космической станции, когда она проходит над их местоположением. Оно также предоставляет возможность отслеживания в реальном времени, расписания пролётов и оповещения.",

        question5: "5. Как скачать мобильное приложение Spot the Station?",
        answer5: "Мобильное приложение Spot the Station доступно на устройствах iOS и Android.",

        question6:
          "6. Как приложение Spot the Station уведомляет меня о предстоящих возможностях наблюдения за Международной космической станцией?",
        answer6:
          "Приложение Spot the Station отправляет push-уведомления, чтобы предупредить пользователей о предстоящих пролётах Международной космической станции. Пользователи должны убедиться, что разрешения на уведомления приложения включены в настройках их устройства.",

        question7: "7. Могу ли я настроить уведомления в приложении Spot the Station?",
        answer7:
          "Приложение Spot the Station имеет возможность настраивать персонализированные настройки уведомлений, чтобы получать push-уведомления, специфичные для предпочтительного местоположения и времени пользователя. Настройки уведомлений можно найти на странице настроек приложения, где пользователи могут включить уведомления для всех предстоящих событий или настроить уведомления для текущего выбранного местоположения. Пользователи могут настроить уведомления для других местоположений через настройки местоположения.",

        question8: "8. Что делать, если я не получаю уведомления?",
        answer8:
          "Пользователи должны проверить предпочтения уведомлений в приложении Spot the Station (Настройки уведомлений на странице настроек), чтобы подтвердить, что устройство настроено на получение уведомлений в предпочтительном местоположении и времени. Если пользователи по-прежнему не получают уведомления, они должны убедиться, что уведомления включены в настройках их устройства.",

        question9: "9. Работает ли приложение Spot the Station на международном уровне?",
        answer9:
          "Приложение Spot the Station доступно по всему миру и на нескольких языках, включая английский, голландский, французский, немецкий, хинди, итальянский, японский, польский, португальский (Бразилия), русский, испанский, турецкий и украинский. Приложение предоставляет информацию о видимости для большинства населенных мест, что облегчает наблюдение за Международной космической станцией, когда она проходит над почти любым местом.",

        question10: "10. Почему нет возможностей наблюдения для моего местоположения?",
        answer10:
          "Для того чтобы вы могли увидеть станцию, там, где вы находитесь, должно быть темно, и космическая станция должна быть над вами. Поскольку орбита космической станции проходит по всему земному шару, она может проходить над вами в моменты, когда она не будет видна — либо в середине дня, либо в середине ночи. Spot The Station отправит уведомления только тогда, когда будет возможность увидеть Международную космическую станцию в вашем местоположении, а не каждый раз, когда она будет над вами.",

        question11: "11. Нужен ли мне телескоп, чтобы увидеть Международную космическую станцию?",
        answer11:
          "Нет, пользователи могут видеть Международную космическую станцию невооруженным глазом, дополнительное оборудование не требуется.",

        question12:
          "12. Появляется и исчезает ли Международная космическая станция из-за света Луны?",
        answer12:
          "Международная космическая станция видна, потому что отражает солнечный свет. Это та же причина, по которой Луна кажется светящейся. Даже когда Луна не взошла, пользователи могут видеть станцию.",

        question13: "13. Какой часовой пояс используется для уведомлений об оповещениях?",
        answer13:
          "Весь контент в приложении Spot the Station указан в местном часовом поясе для выбранного пользователем местоположения. Приложение автоматически корректируется на летнее время.",

        question14:
          "14. Какую информацию предоставляет приложение Spot the Station для каждого наблюдения?",
        answer14:
          "Для каждого наблюдения приложение Spot the Station отображает время, продолжительность видимости, максимальную высоту над горизонтом и направления, где Международная космическая станция появится и исчезнет, помогая пользователям точно ее локализовать на небе.",

        question15:
          "15. Как я могу обнаружить Международную космическую станцию во время возможности наблюдения? Что означают все эти данные?",
        answer15:
          "Приложение Spot the Station предоставляет список «Предстоящих наблюдений», если пользователи нажмут на «Список следующих наблюдений» на главной странице.<br/>" +
          "<strong>Дата и время</strong> — это когда возможность наблюдения начнется в местном часовом поясе. Все пролёты произойдут в течение нескольких часов до или после восхода или заката. Это оптимальный период наблюдения, так как Солнце отражается от Международной космической станции и контрастирует с более темным небом.<br/>" +
          "<strong>Над горизонтом</strong> — это максимальный период времени, в течение которого станция видна, прежде чем снова пересечет горизонт.<br/>" +
          "<strong>Максимальная высота</strong> измеряется в градусах (также известна как высота). Она представляет высоту станции от горизонта на ночном небе. Горизонт находится на нуле градусов, а прямо над головой — на 90 градусах. Если пользователи держат кулак на вытянутой руке и помещают его на горизонт, верхняя часть будет примерно на 10 градусов высоты.<br/>" +
          "<strong>Появляется</strong> — это место на небе, где станция будет видна впервые. Это значение, как и максимальная высота, также измеряется в градусах от горизонта. Буквы представляют направления компаса — N — север, WNW — запад-северо-запад и так далее.<br/>" +
          "<strong>Исчезает</strong> представляет, где на ночном небе станция покинет поле зрения." +
          "<img src='https://sts-app-resources.s3.us-east-1.amazonaws.com/astro_horizon.png' />",

        question16:
          "16. График пролётов указывает, что Международная космическая станция появляется и исчезает из одного и того же направления, как это возможно?",
        answer16:
          "Программное обеспечение Spot the Station округляет направления до ближайших кардинальных и межкардинальных направлений. Это может привести к тому, что кажется, что Международная космическая станция появится и исчезнет в одном и том же направлении, хотя она движется по небу. Это обычно происходит при пролётах с коротким окном видимости, потому что станция быстро перемещается в (или из) темную тень Земли, где, с позиции пользователя на земле, полный проход по небу не может быть наблюдаем.",

        question17:
          "17. Могу ли я увидеть карту в реальном времени с местоположением Международной космической станции?",
        answer17:
          "Да, приложение Spot the Station включает карту в реальном времени, показывающую текущее положение Международной космической станции, когда она облетает Землю, предоставляя пользователям визуальную ссылку для отслеживания ее прогресса.",

        question18: "18. Что такое функция дополненной реальности в приложении Spot the Station?",
        answer18:
          "Функция дополненной реальности в приложении Spot the Station позволяет пользователям видеть виртуальное наложение пути Международной космической станции на небе. Эта функция помогает пользователям более точно локализовать станцию, выравнивая свое устройство с реальным положением станции.",

        question19:
          "19. Как получить доступ к функции дополненной реальности в приложении Spot the Station?",
        answer19:
          "Чтобы получить доступ к функции дополненной реальности, откройте приложение Spot the Station и перейдите к опции «Вид AR» в нижнем меню. Следуйте инструкциям на экране, чтобы выровнять камеру устройства с небом, где приложение отобразит виртуальное наложение, указывающее положение и траекторию Международной космической станции.",

        question20:
          "20. Нужен ли мне специальное устройство или программное обеспечение для использования функции дополненной реальности?",
        answer20:
          "Функция дополненной реальности Spot the Station работает только на устройствах, которые могут определять свою ориентацию в 3D-пространстве. Это требует наличия определенного оборудования, такого как гироскоп или сопроцессор движения. Более старые или бюджетные устройства могут не поддерживать эту функциональность.",

        question21: "21. Как работает функция дополненной реальности?",
        answer21:
          "Используя камеру и датчики устройства, функция дополненной реальности Spot the Station накладывает местоположение Международной космической станции на небе на экран, корректируя в реальном времени, когда пользователь перемещает устройство. Приложение направляет пользователей в нужном направлении и показывает, где станция появится и исчезнет.",

        question22:
          "22. Могу ли я использовать функцию дополненной реальности как днем, так и ночью?",
        answer22:
          "Да, функция дополненной реальности в приложении Spot the Station доступна как днем, так и ночью; однако, лучший опыт наблюдения обычно бывает в сумерках или ночью, когда Международная космическая станция видна невооруженным глазом. Наложение дополненной реальности будет работать независимо от условий освещения, но фактические возможности наблюдения зависят от видимости.",

        question23:
          "23. Является ли наложение дополненной реальности точным для всех местоположений?",
        answer23:
          "Да, функция дополненной реальности в приложении Spot the Station разработана для предоставления точной информации о положении на основе GPS-локации устройства. Однако точность может немного варьироваться в зависимости от калибровки компаса и датчиков устройства. Если пользователи замечают расхождения, откалибруйте компас устройства через настройки.",

        question24:
          "24. Может ли функция дополненной реальности помочь с точными временами наблюдения?",
        answer24:
          "Функция дополненной реальности в приложении Spot the Station визуально направляет пользователей, чтобы локализовать Международную космическую станцию в точное время, когда она появляется на небе. В сочетании с оповещениями приложения, она улучшает способность видеть станцию, изуально направляя вас в реальном времени и предоставляя индикатор высоты для точного отслеживания.",

        question25: "25. Есть ли советы по оптимизации моего опыта дополненной реальности?",
        answer25:
          "Для лучшего опыта дополненной реальности в приложении Spot the Station используйте функцию в открытой области с ясным видом на небо. Избегайте препятствий, таких как высокие здания или деревья, так как они могут блокировать видимость. Откалибруйте компас устройства и убедитесь, что службы определения местоположения и разрешения камеры включены для плавной работы.",

        question26: "26. Доступна ли функция дополненной реальности на устройствах iOS и Android?",
        answer26:
          "Да, функция дополненной реальности приложения Spot the Station доступна на мобильных устройствах и планшетах iOS и Android, если ваше устройство соответствует аппаратным требованиям.",

        question27: "27. Работает ли приложение Spot the Station в оффлайн-режиме?",
        answer27:
          "Некоторая базовая функциональность, такая как доступ к ранее загруженным расписаниям возможностей наблюдения или получение запланированных уведомлений, может работать в оффлайн-режиме. Однако функции, требующие данных в реальном времени, такие как отслеживание, требуют интернет-соединение.",

        question28:
          "28. Есть ли специальные требования для использования приложения Spot the Station?",
        answer28:
          "Приложение Spot the Station требует активого интернет-соединения для отслеживания в реальном времени и оповещений. Кроме того, для получения информации, специфичной для местоположения, убедитесь, что службы определения местоположения устройства включены для приложения.",

        question29: "29. Является ли приложение Spot the Station бесплатным для использования?",
        answer29:
          "Да, приложение Spot the Station бесплатно для загрузки и использования, без покупок в приложении или подписок.",

        question30: "30. С кем я могу связаться за поддержкой по приложению Spot the Station?",
        answer30:
          "Для поддержки по приложению Spot the Station свяжитесь через опцию обратной связи в приложении или <a href='mailto:hq-spotthestation@mail.nasa.gov'>отправьте электронное письмо команде Spot the Station</a>.",
      },
    },
    astronauts: {
      title: "Кто сейчас на станции?",
      number: "Количество людей:",
    },
    live: {
      title: "Прямая трансляция",
      description:
        "В настоящее время с внешней HD-камеры, установленной на МКС, транслируется видео Земли в режиме реального времени. Камера смотрит на Землю, иногда мелькает солнечная панель.",
    },
    tour: {
      title: "Виртуальный тур",
    },
    videos: {
      title: "Видео станции",
    },
    gallery: {
      title: "Галерея",
    },
    earthScience: { title: "Ресурсы по наукам о Земле" },
  },
}

export default ru
export type Translations = typeof ru
