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
    body: "Чтобы использовать эту функцию, вам необходимо предоставить разрешение на доступ к галерее.",
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
    time: "T",
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
      longerThan2: "2 минуты и дольше",
      empty:
        "Для этого местоположения с {{start}} по {{end}} нет потенциальных наблюдений станции.",
      shareTitle: "Станция проходит над {{location}} {{date}}",
      shareLink:
        "Чтобы узнать больше и отслеживать станцию с помощью дополненной реальности, скачайте приложение по ссылке",
      coach: {
        title: "Описание значков",
        moon: "Станция проходит над горизонтом в выбранном местоположении в ночное время.",
        sunset: "Станция проходит над горизонтом в выбранном местоположении в период сумерек.",
      },
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
      dimensionsValue: "109м x 73м x 14м",
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
        question1: "1. Почему Международная космическая станция находится на орбите?",
        answer1:
          "Международная космическая станция — это единственная лаборатория микрогравитации на Земле. Эта платформа размером с футбольное поле является местом проведения множества научных и технологических экспериментов как членами экипажа, так и в автоматическом режиме. Исследования на борту орбитальной лаборатории приносят пользу для жизни на Земле, а также для будущих космических исследований. Космическая станция служит испытательной площадкой для технологий и позволяет изучать влияние длительных космических полетов на человека, поддерживая миссию НАСА по расширению присутствия человека в космосе. Чтобы узнать больше о проводимых на Космической станции исследованиях и возможностях проведения ваших научных экспериментов, пожалуйста, <a href='https://www.nasa.gov/international-space-station/'>нажмите здесь</a>.",

        question2: "2. С какой скоростью движется Международная космическая станция?",
        answer2:
          "Станция облетает Землю каждые 90 минут. Она движется со скоростью около 17 500 миль (28 000 км) в час, что позволяет экипажу наблюдать 16 восходов и закатов каждый день. За более чем 15 лет, что люди живут на борту, станция облетела Землю десятки тысяч раз. Вы можете узнать больше фактов о станции на <a href='https://www.nasa.gov/international-space-station/space-station-facts-and-figures/'>этой веб-странице</a>.",

        question3: "3. Как часто я могу видеть Международную космическую станцию?",
        answer3:
          "Международная космическая станция видна, потому что она отражает свет Солнца — по той же причине мы видим Луну. Однако, в отличие от Луны, космическая станция недостаточно яркая, чтобы ее можно было увидеть днем. Ее можно увидеть только на рассвете или в сумерках в вашем местоположении. Таким образом, количество возможностей для наблюдения может варьироваться от одного раза в месяц до нескольких раз в неделю, так как там, где вы находитесь, должно быть темно, и космическая станция должна проходить над вами.",

        question4: "4. Что такое мобильное приложение Spot the Station?",
        answer4:
          "Мобильное приложение Spot the Station — это официальное приложение НАСА, которое помогает пользователям отслеживать и получать уведомления о наблюдениях Международной космической станции, когда она проходит над их местоположением. Оно предоставляет возможность отслеживания в реальном времени, расписание наблюдений и оповещения.",

        question5: "5. Как скачать мобильное приложение Spot the Station?",
        answer5:
          "Вы можете скачать приложение как в Apple App Store <a href='https://apps.apple.com/us/app/spot-the-station/id6449235044'>здесь</a>, так и в Google Play Store <a href='https://play.google.com/store/apps/details?id=gov.nasa.hq.SpotTheStation&hl=en_US&pli=1'>здесь</a>.",

        question6: "6. Как приложение уведомляет меня о предстоящих наблюдениях станции?",
        answer6:
          "Приложение отправляет push-уведомления, чтобы предупредить вас о предстоящих наблюдениях станции, включая дату, время, продолжительность и условия видимости, специфичные для вашего местоположения. Пожалуйста, убедитесь, что вы включили разрешения на уведомления для этого приложения в настройках вашего телефона.",

        question7: "7. Могу ли я настроить уведомления в приложении?",
        answer7:
          "Да, вы можете персонализировать настройки оповещений в приложении, чтобы получать уведомления на основе вашего предпочтительного местоположения, условий наблюдения и даже конкретных промежутков времени, которые лучше всего подходят для вас.",

        question8: "8. Что делать, если я не получаю уведомления?",
        answer8:
          "Если вы не получаете оповещения, убедитесь, что уведомления включены в настройках вашего устройства. Также проверьте настройки уведомлений в приложении, чтобы подтвердить, что вы настроили оповещения для выбранного местоположения и времени.",

        question9: "9. Работает ли приложение за границей?",
        answer9:
          "Да, приложение Spot the Station доступно по всему миру и предоставляет информацию о наблюдениях для большинства населенных мест, что позволяет легко увидеть станцию практически из любой точки.",

        question10: "10. Почему в моем местоположении нет возможностей для наблюдения?",
        answer10:
          "Для того чтобы вы могли увидеть станцию, там, где вы находитесь, должно быть темно, и космическая станция должна быть над вами. Поскольку орбита космической станции проходит по всему земному шару, она может проходить над вами в моменты, когда она не будет видна — либо в середине дня, либо в середине ночи. Spot The Station будет отправлять уведомления только тогда, когда у вас будет возможность увидеть Космическую станцию, а не каждый раз, когда она будет над вами.",

        question11: "11. Нужен ли мне телескоп, чтобы увидеть космическую станцию?",
        answer11:
          "Нет, вы можете увидеть Кксмическую станцию невооруженным глазом, без какого-либо оборудования.",

        question12: "12. Появляется ли и исчезает ли станция из-за света Луны?",
        answer12:
          "Космическая станция видна, потому что она отражает свет Солнца. Это та же причина, по которой Луна кажется светящейся. Даже когда Луна не взошла, вы все равно сможете увидеть космическую станцию.",

        question13: "13. Какой часовой пояс используется для уведомлений?",
        answer13:
          "Вся информация Spot The Station указана в местном часовом поясе для выбранного местоположения. Spot The Station автоматически корректирует время с учетом перехода на летнее время.",

        question14: "14. Какую информацию приложение предоставляет для каждого наблюдения?",
        answer14:
          "Для каждого наблюдения приложение отображает время, продолжительность видимости, максимальную высоту и направления, где станция появится и исчезнет, помогая вам найти ее в небе.",

        question15:
          "15. Как я могу увидеть станцию во время каждого наблюдения? Что означает вся эта информация о наблюдении?",
        answer15:
          "Приложение предоставляет список предстоящих наблюдений, если вы нажмете на Список следующих наблюдений на главной странице.<br/><strong>Дата и время</strong> — это когда начнется возможность наблюдения в вашем часовом поясе. Все наблюдения будут происходить за несколько часов до или после восхода или заката. Это оптимальный период для наблюдения, так как космическая станция отражает солнечный свет и контрастирует с более темным небом.<br/><strong>Над горизонтом</strong> — это максимальный период времени, в течение которого космическая станция видна, прежде чем снова пересечет горизонт.<br/><strong>Максимальная высота</strong> измеряется в градусах. Она представляет высоту космической станции над горизонтом в ночном небе. Линия горизонта соответствует 0 градусов, а точка прямо над головой — 90 градусам. Если вы держите кулак на вытянутой руке и совместите его нижнюю часть с линией горизонта, верхняя часть будет соответсвовать примерно 10 градусам.<br/><strong>Появляется</strong> — это место в небе, где станция будет видна изначально. Это значение, как и максимальная высота, также измеряется в градусах от горизонта. Буквы представляют направления компаса — C — север, ЗСЗ — запад-северо-запад и так далее.<br/><strong>Исчезает</strong> — это место в ночном небе, где Международная космическая станция покинет ваше поле зрения.<img src='https://spotthestation.nasa.gov/images/astro_horizon.png' />",

        question16:
          "16. В расписании пролета указано, что космическая станция появляется и исчезает в одном и том же направлении, как это возможно? Например, - Время: Пн 15 июля 11:57 PM, Видимость: 2 мин, Макс. высота: 51°, Появляется: 51° над ENE, Исчезает: 11° над ENE",
        answer16:
          "Программное обеспечение Spot the Station округляет направления до ближайших основных и промежуточных направлений. Это может привести к тому, что кажется, будто станция появляется и исчезает в одном и том же направлении, хотя она движется по небу. Это обычно происходит при пролетах с коротким окном видимости, потому что станция быстро перемещается в (или из) тень Земли, где, с вашего местоположения на земле, вы не можете наблюдать ее полный проход по небу.",

        question17: "17. Могу ли я увидеть карту в реальном времени с местоположением станции?",
        answer17:
          "Да, приложение включает карту в реальном времени, показывающую текущее положение станции, когда она облетает Землю, давая вам представление о ее полете.",

        question18: "18. Что такое функция AR в приложении Spot the Station?",
        answer18:
          "Функция дополненной реальности (AR) в приложении Spot the Station позволяет пользователям видеть виртуальное наложение пути Международной космической станции в небе. Эта функция помогает пользователям более точно определить местоположение станции, выравнивая их устройство с реальным положением станции.",

        question19: "19. Как получить доступ к функции AR в приложении?",
        answer19:
          "Чтобы получить доступ к функции AR, откройте приложение и перейдите к опции Вид AR в нижнем меню. Следуйте подсказкам на экране, чтобы выровнять камеру вашего устройства с небом, где приложение отобразит виртуальное наложение, указывающее положение и траекторию станции.",

        question20:
          "20. Нужен ли мне специальный прибор или программное обеспечение для использования функции AR?",
        answer20:
          "Функция AR работает только на устройствах, которые могут определять свою ориентацию в 3D-пространстве. Это требует наличия определенного оборудования, такого как гироскоп или сопроцессор движения. Старые или бюджетные устройства могут не поддерживать эту функциональность.",

        question21: "21. Как работает функция AR?",
        answer21:
          "Используя камеру и датчики вашего устройства, функция AR накладывает местоположение станции в небе на ваш экран, корректируя в реальном времени, когда вы перемещаете устройство. Приложение направляет вас в нужном направлении и показывает, где станция появится и исчезнет.",

        question22: "22. Могу ли я использовать функцию AR как днем, так и ночью?",
        answer22:
          "Да, вы можете использовать функцию AR как днем, так и ночью; однако лучший опыт обычно бывает в сумерках или ночью, когда станция видна невооруженным глазом. Наложение AR будет работать независимо от условий освещения, но фактические наблюдения зависят от видимости.",

        question23: "23. Точно ли наложение AR для всех местоположений?",
        answer23:
          "Да, функция AR разработана для предоставления точной информации о положении на основе вашего местоположения по GPS. Однако точность может немного варьироваться в зависимости от калибровки компаса и датчиков вашего устройства. Если вы заметите расхождения, откалибруйте компас вашего устройства через Настройки.",

        question24: "24. Может ли функция AR помочь с точным временем наблюдения?",
        answer24:
          "Функция AR визуально направляет вас, чтобы вы могли найти станцию в точное время, когда она появляется в небе. В сочетании с оповещениями о наблюдениях в приложении она улучшает вашу способность видеть станцию, визуально направляя вас в реальном времени и предоставляя индикатор высоты для точного отслеживания.",

        question25: "25. Есть ли советы по улучшению моего опыта использования AR?",
        answer25:
          "Для лучшего опыта использования AR используйте функцию на открытой местности с ясным видом на небо. Избегайте препятствий, таких как высокие здания или деревья, так как они могут блокировать видимость. Откалибруйте компас вашего устройства и убедитесь, что службы определения местоположения и разрешения на использование камеры включены для плавной работы.",

        question26: "26. Доступна ли функция AR как на Android, так и на iOS?",
        answer26:
          "Да, функция AR доступна как в версиях приложения для iOS, так и для Android, если ваше устройство соответствует требованиям к оборудованию.",

        question27: "27. Работает ли приложение в оффлайн-режиме?",
        answer27:
          "Некоторые базовые функции, такие как доступ к ранее загруженным расписаниям наблюдений или получение запланированных уведомлений, может работать в оффлайн-режиме. Однако функции, требующие данных в реальном времени, такие как отслеживание, требуют подключения к интернету.",

        question28: "28. Есть ли какие-либо особые требования для использования приложения?",
        answer28:
          "Приложение требует активного подключения к интернету для отслеживания в реальном времени. Кроме того, для получения информации, специфичной для местоположения, убедитесь, что службы определения местоположения вашего устройства включены для приложения.",

        question29: "29. Приложение бесплатное?",
        answer29:
          "Да, приложение Spot the Station можно бесплатно скачать и использовать, без покупок в приложении или подписок.",

        question30: "30. К кому я могу обратиться за поддержкой по приложению?",
        answer30:
          "Для поддержки по приложению Spot the Station посетите страницу поддержки НАСА или свяжитесь через опцию обратной связи в приложении.",
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
  },
}

export default ru
export type Translations = typeof ru
