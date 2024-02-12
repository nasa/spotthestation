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
    arNotSupported: "AR не поддерживается на этом устройстве",
    noOrientationSensor: "Датчик ориентации недоступен",
    noMagnetometerSensor: "Магнитометр недоступен",
    screenshotError: "Невозможно сделать снимок экрана",
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
    localCalculations: "Локальные вычисления",
  },
  resources: {
    header: "Ресурсы",
    searchPlaceholder: "Поиск статей, событий и т.д...",
    suggestions: "ПРЕДЛОЖЕНИЯ",
    searchResults: "Результаты поиска",
    liveTitle: "Видео Земли высокой четкости в режиме реального времени",
    liveDescription:
      "В настоящее время с внешней HD-камеры, установленной на МКС, транслируется видео Земли в режиме реального времени. Камера смотрит на Землю, иногда мелькает солнечная панель.",
    tabs: {
      news: "Новости",
      about: "О нас",
      details: "Детали",
      live: "Прямой эфир",
    },
  },
}

export default ru
export type Translations = typeof ru
