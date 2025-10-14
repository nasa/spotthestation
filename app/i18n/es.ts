const es = {
  name: "Español",
  errorScreen: {
    title: "¡Algo salió mal!",
    friendlySubtitle:
      "Esta es la pantalla que tus usuarios verán en producción cuando se lanza un error. Querrás personalizar este mensaje (situado en `APP/I18N/EN.TS`) y probablemente el diseño también (` APP/PROPES/ERRORSCREEN`). Si deseas eliminarlo completamente, busca en `app/app.tsx` para el componente <ErrorBoundary>.",
    reset: "Reiniciar la aplicación",
  },
  snackBar: {
    ok: "De acuerdo",
    dismiss: "Descartar", // <-- "Descartar"
    sightingsSaved: "Avistamientos para la última ubicación guardada cargada",
    defaultError: "Ocurrió un error", // <-- "Ocurrió un error"
    locationSaved: "Ubicación guardada",
    locationExist: "Ya existe una ubicación con este título", // <-- "¡La ubicación con este nombre ya existe!"
    openSettingsError: "No se pueden abrir los ajustes",
    shared: "¡Compartido con éxito!",
    savedToGallery: "Guardado en la galería",
  },
  outdatedModal: {
    title: "Actualización disponible",
    body: "¡Nueva versión de la aplicación disponible! Descargue la nueva versión en",
    buttonNegative: "Cancelar",
    buttonPositive: "Descargar",
  },
  permissionsModal: {
    close: "Cerrar", // <-- "Cerrar"
    openSettings: "Abrir ajustes", // <-- "Abrir Configuración."
    bodyGallery: "Para usar esta función, debes dar permiso para acceder a la galería.",
    bodyCalendar: "Para usar esta función, debes otorgar permiso para acceder al calendario.",
  },
  fontSizeModal: {
    title: "Tamaño de fuente demasiado grande",
    body1:
      "Parece que el tamaño de fuente de tu dispositivo está configurado demasiado alto. Esto puede causar que alguna información esencial se recorte o se muestre incorrectamente en la aplicación.",
    bodyAndroid:
      "Para ajustar el tamaño de fuente, ve a Configuración → Pantalla → Tamaño y estilo de fuente → Ajusta el control deslizante a un tamaño más pequeño.",
    bodyIOS:
      "Para ajustar el tamaño de fuente, ve a Configuración → Accesibilidad → Pantalla y tamaño de texto → Texto más grande → Ajusta el control deslizante a un tamaño más pequeño.",
    cancel: "Cancelar",
    settings: "Ir a Configuración",
  },
  permissionsAndroid: {
    title: "Permiso para guardar los videos",
    message: "Esta aplicación necesita permiso para guardar videos en tu dispositivo.",
    buttonNeutral: "Pregúntame después", // <-- "Preguntar después"
    buttonNegative: "Cancelar",
    buttonPositive: "De acuerdo",
    alarmPermissionTitle: "Permiso requerido",
    alarmPermissionMessage:
      "Por favor, otorgue permiso para alarmas y recordatorios en la próxima pantalla para recibir notificaciones sobre avistamientos próximos.",
  },
  thanksModal: {
    body: "Gracias por ponerte en contacto con nosotros. Hemos recibido tu mensaje y procesaremos tu solicitud. Ten en cuenta que esta aplicación no recopila datos de los usarios, por lo que no podemos responder a todos los mensajes individualmente. Por favor, visite la página de Preguntas Frecuentes para ver si hay una respuesta a su pregunta.",
    dismiss: "Descartar", // <-- "Descartar"
    faq: "Preguntas Frecuentes",
  },
  privacy: {
    title: "Usa tu ubicación",
    body: "Utilizamos datos de ubicación para calcular los próximos avistamientos en tu ubicación actual. Conceda permisos de ubicación para activar esta funcion.",
    agree: "Aceptar",
    skip: "Saltar",
    policy: "Política de privacidad",
  },
  notifications: {
    push: {
      title: "¡Avista la estación!",
      subTitleIos: "La estación va a pasar por encima de ti a las",
      subTitleAndroid: "La estación va a pasar por encima de ti ({{time}}) a las",
    },
    before: {
      title: "¡Avista la estación en {{amount}} {{units}}!",
      subTitleIos:
        "La estación va a pasar por encima de ti en {{amount}} {{units}} a las {{location}}",
      subTitleAndroid:
        "La estación pasará sobre ti en {{amount}} {{units}} ({{time}}) a las {{location}}",
      minutes: "minutos",
      hours: "horas",
    },
    timeLeft: "TIEMPO RESTANTE",
  },
  units: {
    minute: "minutos",
    kilometer: "km",
    kilogram: "kg",
    month: "mes",
    metersPerSecond: "m/s",
    time: "H",
    hour: "h",
    mile: "mi",
    foot: "ft",
    meter: "m",
    pound: "lbs",
    milesPerHour: "mph",
  },
  tabNavigator: {
    homeTab: "Inicio",
    issViewTab: "Vista AR",
    issNowTab: "Rastreador",
    resourcesTab: "Recursos",
    settingsTab: "Ajustes",
  },
  onboarding: {
    splash: {
      title: "Avista la\nestación",
      subTitle: "Mira al cielo y verás la Estación Espacial Internacional",
    },
    completeProfile: {
      notification: {
        title: "Ajustes para notficaciónes",
        label: "Recibir notificaciones push",
        tip: "Recibe alertas cuando la estación espacial se acerque a tu ubicación.",
        nextButton: "Próximo",
      },
      location: {
        title: "Tu ubicación",
        subtitle:
          "Por favor permita que la aplicación detecte tu ubicación automáticamente o indíquela manualmente.",
        detectButton: "Detectar mi ubicación",
        orLabel: "o",
        selectLocation: "Introduce tu ubicación",
        detecting: "Detección de ubicación ...",
        doneButton: "Listo",
        serviceAlertTitle: "Servicios de ubicación discapacitados",
        serviceAlertBody: "Por favor, permite que tus servicios de ubicación continúen.", // <-- "Permita que sus servicios de ubicación continúen"
        permissionAlertTitle: "Permiso no otorgado",
        permissionAlertBody:
          "Utilizamos los datos de ubicación para calcular los próximos avistamientos en tu ubicación actual. Por favor, otorga permisos de ubicación para habilitar esta funcionalidad.",
      },
    },
  },
  homeScreen: {
    initLoader: {
      message:
        "Los datos de la estación se están cargando ... Esto puede tardar un rato en completarse.",
      trajectoryError:
        "Los datos de trayectoria de la estación no están disponibles actualmente debido al mantenimiento del servidor. Por favor, vuelve a comprobar más tarde.",
      noNetwork:
        "Los datos de trayectoria de la estación no están disponibles actualmente debido a la falta de conexión. Por favor, vuelve a comprobar más tarde.",
    },
    header: {
      firstTimeHead: "PRÓXIMO AVISTAMIENTO",
      secondTimeHead: "Cuenta regresiva",
      timezone: "Zona horaria",
      opportunities: "Oportunidades de avistamiento",
    },
    selectLocation: {
      title: "Seleccionar ubicación",
      inputPlaceholder: "Buscar ubicación por ciudad...",
      current: "Ubicación actual",
      saved: "Ubicaciones guardadas",
      nearby: "Ubicaciones cercanas",
      search: "Resultados de la búsqueda",
      cta: "Personalizar notificaciones para esta ubicación",
      actionTitle: "Alerta",
      refresh: "Actualizar",
    },
    selectSightings: {
      upcomingSightings: "Próximos avistamientos",
      pastSightings: "Avistamientos Pasados",
      selectMessage: "Seleccione los eventos de los que deseas recibir notificaciones.",
      switch: "Notifícame para todos los próximos eventos en esta ubicación.",
      aboveHorizon: "Encima del horizonte",
      maxHeight: "Altura máxima de",
      today: "Hoy",
      tomorrow: "Mañana",
      appears: "Aparece",
      disappears: "Desaparece",
      all: "Todo",
      timeOfDay: "Hora del día",
      night: "Noche",
      twilight: "Crepúsculo",
      duration: "Duración",
      shorterThan2: "menos de 2 minutos",
      between2And4: "entre 2 y 4 minutos",
      longerThan4: "4 minutos y más",
      empty:
        "No hay posibles avistamientos de la estación para esta ubicación desde el {{start}} hasta el {{end}}.",
      shareTitle: "La estación está pasando sobre {{location}} el {{date}}",
      shareAllTitle: "La Estación está pasando sobre {{location}}:",
      shareLink:
        "Para explorar más y rastrear la estación mediante realidad aumentada, descarga la aplicación en",
      calendarEventTitle: "¡Avista la estación en {{location}}!",
      calendarSuccess: "Evento de calendario creado con éxito",
      calendarError: "No se pudo crear el evento de calendario",
      coach: {
        title: "Descripción de los iconos",
        moon: "Será de noche en la ubicación seleccionada cuando la estación esté por encima del horizonte.",
        sunset:
          "Habrá crepúsculo en la ubicación seleccionada cuando la estación esté por encima del horizonte.",
      },
      cloudCover: {
        title: "Cobertura de nubes",
        any: "Cualquiera",
        low: "Bajo (<25%)",
        medium: "Medio (25-50%)",
      },
      shareAll: "Compartir lista de avistamientos",
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
        SSW: "SSO",
        SW: "SO",
        WSW: "OSO",
        W: "O",
        WNW: "ONO",
        NW: "NO",
        NNW: "NNO",
      },
    },
    coachMarks: {
      skip: "Omitir la visita",
      next: "Próximo",
      finish: "Finalizar",
      dismiss: "Despedir", // <-- "Descartar"
      locationTitle: "Cambiar la ubicación",
      locationData: "Puedes seleccionar o cambiar tu ubicación directamente desde aquí.",
      sightingsTitle: "Proximo avistamiento y cuenta regresiva",
      sightingsData:
        "Esta sección te muestra la fecha y un temporizador de cuenta regresiva para el próximo avistamiento de la estación cerca de tu ubicación seleccionada. Puedes pulsar la casilla de Proximo avistamiento para ver una lista completa de los próximos avistamientos.",
      globeTitle: "Tierra interactiva",
      globeData:
        "Mientras deslizas el dedo por la pantalla, puedes ver la posición de la estación en tiempo real. Esto te permite interactuar con la Tierra y rastrear la ubicación de la estación en tiempo real.",
      mapTitle: "Vista del mapa 2D",
      mapData:
        "Esta sección muestra una representación en 2D del camino completo de la estación sobre las regiones nocturnas y diurnas en la Tierra.",
      navigationTitle: "Navegación",
      navigationData:
        "Puedes navegar por diferentes funciones de la aplicación usando el menú de navegación a continuación.",
    },
  },
  issView: {
    timeHeader: "Cuenta regresiva",
    cameraPermissionText:
      "No has permitido el uso de la cámara de tu teléfono. Haz clic aquí para permitirlo.",
    issCaptured: "Captura este momento",
    details: {
      title: "Información",
      orbitalSpeed: "Velocidad orbital",
      longitude: "Longitud",
      latitude: "Latitud",
      altitude: "Altitud",
      crewOnboard: "Número típico de tripulantes a bordo",
      launched: "El ensamblaje comenzó",
      launchedValue: "20 de noviembre 1998",
      mass: "Masa estimada",
      dimensions: "Dimensiones estimadas",
      orbitalPeriod: "Periodo orbital",
      orbitsPerDay: "Órbitas por día",
      dimensionsValue: "{{width}} de ancho x {{length}} de largo x {{height}} de alto",
      dateTime: "Fecha y Hora",
      maxHeight: "Altura Máxima",
      duration: "Duración sobre el Horizonte",
      appears: "Aparece",
      disappears: "Desaparece",
      distance: "Distancia",
      nextSighting: "Próxima avistamiento",
    },
    arNotSupported: "La realidad aumentada (RA) no es compatible con este dispositivo",
    noOrientationSensor: "El sensor de orientación no está disponible",
    noMagnetometerSensor: "El magnetómetro no está disponible",
    screenshotError: "No se puede capturar la captura de pantalla",
    coachMarks: {
      circleTitle: "Avista la estación",
      circleData:
        "Para localizar la estación, mueve tu teléfono en la dirección de la flecha fuera del círculo. A medida que te acerques, el color del círculo cambiará a verde.",
      compassTitle: "Brújula",
      compassData:
        "Esta brújula muestra la dirección en la que estás mirando y la dirección relativa en la que puedes localizar la estación.",
      infoTitle: "Información",
      infoData:
        "Este interruptor abre o cierra la ventana con información detallada sobre la observación actual o próxima y la información en vivo sobre la estación.",
      trajectoryTitle: "Trayectoria de la Estación",
      trajectoryData:
        "Este interruptor activa o desactiva la trayectoria de la estación en la pantalla. La línea sólida muestra el pasado y la línea punteada muestra la trayectoria futura de la estación.",
      arTitle: "Vista de RA",
      arData: "Este interruptor alterna entre vistas de RA de pantalla completa y parcial.",
      shareTitle: "Compartir",
      shareData:
        "Este botón te permite compartir una captura de pantalla de la vista de RA a través de mensajes de texto, correo electrónico o redes sociales.",
      screenshotTitle: "Captura de Pantalla",
      screenshotData:
        "Este botón te permite capturar una captura de pantalla de la vista de RA para guardar en tu galería de fotos.",
      videoTitle: "Grabación de Video",
      videoData:
        "Este botón te permite grabar un video de la vista de RA para capturar los momentos en que localizas la estación.",
    },
    safetyReminder: {
      title: "Atención: Recordatorio de seguridad",
      subtitle1: "Se recomienda supervisión parental:",
      body1:
        "Por favor, recuerde la importancia de la supervisión parental al interactuar con la pantalla de RA en esta aplicación. Los niños deben usar esta función bajo la supervisión de un adulto responsable para garantizar una experiencia segura y apropiada.",
      subtitle2: "Permanezca alerta a su entorno:",
      body2:
        "Mientras disfruta de la experiencia de realidad aumentada, manténgase siempre consciente de su entorno físico. Esté atento a obstáculos, terrenos irregulares u otras peligros que puedan representar un riesgo para su seguridad. Su seguridad es primordial, así que por favor, ejerza precaución y atención en todo momento.",
      home: "Volver a Inicio",
      ok: "Entendido",
    },
  },
  settings: {
    header: "Ajustes",
    locationSettings: "Ajustes de ubicación",
    notificationSettings: "Ajustes de notificacion",
    termsAndConditions: "Términos y condiciones",
    contactUs: "Contáctanos",
    language: "Idioma",
    timeFormat: "Formato de hora",
    unitsOfMeasurement: "Unidades",
    metric: "Métrico",
    imperial: "Imperial (EE. UU.)",
    calibrateCompass: "Calibración de la brújula",
    calibrateCompassData: {
      instructions:
        "Para calibrar la brújula, gira tu dispositivo varias veces siguiendo un patrón de ocho.",
      accuracy: "Precisión del sensor:",
      low: "Baja",
      medium: "Media",
      high: "Alta",
    },
    tutorials: "Tutoriales",
    tutorialsData: {
      description:
        "¿Quieres ver los tutoriales paso a paso de las páginas de Inicio y Vista AR una vez más?",
      homePage: "Página de inicio",
      arPage: "Vista AR",
    },
    termsAndConditionsData: {
      backButton: "Ajustes",
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
      backButton: "Ajustes",
      title: "Contacto",
      titlePlaceholder: "Elegir título",
      commentsPlaceholder: "Introducir comentarios",
      sendButton: "Enviar",
      contactUsOptions: {
        reportAnIssue: "Informar de un problema",
        improvementIdeas: "Ideas de mejora",
        generalQuestions: "Preguntas generales",
        comments: "Comentarios",
      },
    },
    notificationSettingsData: {
      backButton: "Ajustes",
      notificationTitle: "Ajustes de notificación",
      privacyTitle: "Ajustes de privacidad",
      upcomingLabel: "Próximos eventos",
      customizeLabel: "Personaliza las notificaciones",
      upcomingTip: "Desactiva para dejar de recibir notificaciones de eventos.",
      notifyMeBefore: "Notificarme antes de",
      turnOffNotifications: "Desactiva las notificaciones",
      rangeInputPlaceholder: "Elija entre 1 a 120 minutos",
      customOption: "Personalizado",
      from: "Desde",
      until: "Hasta",
    },
    locationSettingsData: {
      backToSettings: "Ajustes",
      goBack: "Regresar",
      generalTitle: "Ajustes de ubicación",
      cta: "Personalizar notificaciones para esta ubicación",
      locationPermission: "Conceder permiso de ubicación",
      addNewLocation: {
        generalTitleAdd: "Agregar una nueva ubicación",
        generalTitleEdit: "Editar ubicación",
        confirnModalButton: "Confirmar",
        saveButton: "Guardar ubicación",
        searchInputPlaceholder: "Introducir la ciudad, código postal o dirección",
        nameInputPlaceholder: "Guardar el nombre de ubicación",
      },
      removeLocation: {
        question: "¿Seguro que quieres eliminar esta ubicación?", // <-- "¿Seguro que quiere eliminar esta ubicación?"
        cancelButton: "Cancelar",
        removeButton: "Borrar",
      },
    },
    share: "Compartir",
    shareLink:
      "Para rastrear la Estación Espacial Internacional a través de la realidad aumentada, descarga la aplicación móvil NASA Spot The Station en",
    localCalculations: "Cálculos de ubicaciones",
  },
  resources: {
    header: "Recursos",
    goBack: "Regresar",
    sightings: {
      title: "Próximos avistamientos",
    },
    news: {
      title: "Noticias de la Estación",
      searchPlaceholder: "Búsqueda de artículos, eventos, etc.",
      suggestions: "Sugerencias",
      searchResults: "Resultados de la búsqueda",
    },
    spotTheStation: {
      title: "¿Cómo puedo ver la estación?",
    },
    about: {
      title: "Acerca de la Estación",
    },
    details: {
      title: "Detalles de la Estación",
    },
    faq: {
      title: "Preguntas Frecuentes",
      questions: {
        question1: "1. ¿Por qué está la Estación Espacial Internacional allá arriba?",
        answer1:
          "La Estación Espacial Internacional es una convergencia de ciencia, tecnología e innovación humana que permite investigaciones imposibles en la Tierra para el beneficio de la humanidad. Durante más de 24 años, la NASA ha apoyado una presencia humana continua de EE.UU. a bordo de la estación, a través de la cual los astronautas han aprendido a vivir y trabajar en el espacio por períodos prolongados.<br/>" +
          "La estación espacial, que involucra a Estados Unidos, Rusia, Canadá, Japón y los países participantes de la ESA (Agencia Espacial Europea), es una de las colaboraciones internacionales más complejas e interdependientes jamás intentadas. Reúne tripulaciones de vuelo internacionales y múltiples proveedores de transporte espacial, así como equipos de apoyo distribuidos globalmente, instalaciones, redes de comunicación y la comunidad científica mundial.<br/>" +
          "En los últimos 24 años, la estación espacial se ha transformado en un laboratorio en órbita con capacidades de investigación que permiten a científicos de más de 109 naciones realizar más de 4,000 experimentos innovadores en un entorno de vuelo espacial extremo y único.<br/>" +
          "La estación espacial sirve como trampolín para desarrollar una economía en órbita baja y los próximos grandes saltos de la NASA en exploración, incluidas misiones a la Luna bajo Artemis y, en última instancia, la exploración humana de Marte.<br/>" +
          "Obtenga más información sobre la Estación Espacial Internacional, su investigación y su tripulación en:<br/>" +
          "<a href='https://www.nasa.gov/station'>https://www.nasa.gov/station</a>",

        question2: "2. ¿A qué velocidad viaja la Estación Espacial Internacional?",
        answer2:
          "La Estación Espacial Internacional orbita la Tierra cada 90 minutos. Viaja a aproximadamente 28,000 kilómetros por hora, lo que permite a la tripulación a bordo ver 16 amaneceres y atardeceres cada día. Las tripulaciones han ocupado la estación espacial continuamente desde noviembre de 2000. En ese tiempo, 280 personas de 23 países han visitado el puesto orbital, y la estación ha circunnavegado la Tierra cientos de miles de veces.",

        question3: "3. ¿Con qué frecuencia puedo esperar ver la Estación Espacial Internacional?",
        answer3:
          "La Estación Espacial Internacional es visible porque refleja la luz solar, por la misma razón que podemos ver la Luna. Sin embargo, a diferencia de la Luna, la estación espacial no es lo suficientemente brillante como para verla durante el día. Las oportunidades de visualización pueden variar desde una vez al mes hasta varias veces a la semana, ya que la luz del Sol se refleja en la estación mientras pasa por encima al amanecer y al atardecer en su ubicación.",

        question4: "4. ¿Qué es la aplicación Spot the Station?",
        answer4:
          "La aplicación móvil Spot the Station es una aplicación oficial de la NASA que ayuda a los usuarios a rastrear y recibir notificaciones para las visualizaciones de la Estación Espacial Internacional a medida que pasa sobre su ubicación respectiva. También proporciona seguimiento en tiempo real, horarios de sobrevuelo y alertas.",

        question5: "5. ¿Cómo descargo la aplicación móvil Spot the Station?",
        answer5:
          "La aplicación móvil Spot the Station está disponible en dispositivos móviles y tabletas iOS y Android.",

        question6:
          "6. ¿Cómo me notifica la aplicación Spot the Station sobre las próximas oportunidades de visualización de la Estación Espacial Internacional?",
        answer6:
          "La aplicación Spot the Station envía notificaciones push para alertar a los usuarios sobre los próximos pasos de la Estación Espacial Internacional. Los usuarios deben asegurarse de que los permisos de notificación de la aplicación estén habilitados en la configuración de su dispositivo.",

        question7: "7. ¿Puedo personalizar las notificaciones en la aplicación Spot the Station?",
        answer7:
          "La aplicación Spot the Station tiene la capacidad de configurar alertas personalizadas para recibir notificaciones push específicas para la ubicación y el momento preferido del usuario. Las configuraciones de notificación se pueden encontrar en la página de configuración de la aplicación, donde los usuarios pueden activar las notificaciones para todos los eventos próximos o personalizar las notificaciones para la ubicación seleccionada actualmente. Los usuarios pueden personalizar las notificaciones para otras ubicaciones a través de la configuración de ubicación.",

        question8: "8. ¿Qué debo hacer si no recibo notificaciones?",
        answer8:
          "Los usuarios deben verificar las preferencias de notificación en la aplicación Spot the Station (Configuración de notificaciones en la página de configuración) para confirmar que el dispositivo está configurado para alertas en una ubicación y momento preferidos. Si los usuarios aún no reciben alertas, deben asegurarse de que las notificaciones estén habilitadas en la configuración de su dispositivo.",

        question9: "9. ¿Funciona la aplicación Spot the Station internacionalmente?",
        answer9:
          "La aplicación Spot the Station está disponible en todo el mundo y en varios idiomas, incluidos inglés, neerlandés, francés, alemán, hindi, italiano, japonés, polaco, portugués (Brasil), ruso, español, turco y ucraniano. La aplicación proporciona información de visualización para la mayoría de las ubicaciones habitadas, lo que facilita ver la Estación Espacial Internacional mientras pasa por encima desde casi cualquier lugar.",

        question10: "10. ¿Por qué no hay oportunidades de visualización para mi ubicación?",
        answer10:
          "Debe estar oscuro con buena visibilidad en su ubicación y la estación espacial debe estar sobre usted para verla. Dado que la órbita de la estación espacial la lleva por todo el mundo, puede pasar por encima en momentos en que no será visible, ya sea en medio del día o en medio de la noche. Spot The Station enviará notificaciones solo cuando haya oportunidades de ver la Estación Espacial Internacional en su ubicación, no cada vez que esté sobre usted.",

        question11: "11. ¿Necesito un telescopio para ver la Estación Espacial Internacional?",
        answer11:
          "No, los usuarios pueden ver la Estación Espacial Internacional a simple vista, no se requiere equipo adicional.",

        question12:
          "12. ¿Aparece y desaparece la Estación Espacial Internacional debido a la luz de la Luna?",
        answer12:
          "La Estación Espacial Internacional es visible porque refleja la luz solar. Esta es la misma razón por la que la Luna parece brillar. Incluso cuando la Luna no ha salido, los usuarios pueden ver la estación.",

        question13: "13. ¿Qué zona horaria se utiliza para las notificaciones de alerta?",
        answer13:
          "Todo el contenido dentro de la aplicación Spot the Station está listado en la zona horaria local para la ubicación seleccionada por el usuario. La aplicación se ajusta automáticamente al horario de verano.",

        question14:
          "14. ¿Qué información proporciona la aplicación Spot the Station para cada avistamiento?",
        answer14:
          "Para cada avistamiento, la aplicación Spot the Station muestra la hora, la duración de la visibilidad, la altura máxima sobre el horizonte y las direcciones donde la Estación Espacial Internacional aparecerá y desaparecerá, ayudando a los usuarios a localizarla con precisión en el cielo.",

        question15:
          "15. ¿Cómo puedo detectar la Estación Espacial Internacional durante una oportunidad de visualización? ¿Qué significan toda esta información?",
        answer15:
          "La aplicación Spot the Station proporciona una lista de “Avistamientos Próximos” si los usuarios tocan en la “Lista de Próximos Avistamientos” en la página de inicio.<br/>" +
          "<strong>Fecha y hora</strong> es cuando comenzará la oportunidad de visualización en la zona horaria local. Todos los pasos ocurrirán dentro de unas pocas horas antes o después del amanecer o el atardecer. Este es el período de visualización óptimo, ya que el Sol se refleja en la Estación Espacial Internacional y contrasta con el cielo más oscuro.<br/>" +
          "<strong>Sobre el horizonte</strong> es el período máximo de tiempo en que la estación es visible antes de cruzar de nuevo por debajo del horizonte.<br/>" +
          "<strong>Altura máxima</strong> se mide en grados (también conocido como elevación). Representa la altura de la estación desde el horizonte en el cielo nocturno. El horizonte está a cero grados, y directamente sobre la cabeza está a 90 grados. Si los usuarios sostienen su puño a la longitud del brazo y lo colocan descansando en el horizonte, la parte superior será de aproximadamente 10 grados de elevación.<br/>" +
          "<strong>Aparece</strong> es la ubicación en el cielo donde la estación será visible por primera vez. Este valor, al igual que la altura máxima, también se mide en grados desde el horizonte. Las letras representan direcciones de la brújula: N es norte, WNW es oeste-noroeste, y así sucesivamente.<br/>" +
          "<strong>Desaparece</strong> representa dónde en el cielo nocturno la estación dejará el campo de visión." +
          "<img src='https://sts-app-resources.s3.us-east-1.amazonaws.com/astro_horizon.png' />",

        question16:
          "16. El horario de sobrevuelo indica que la Estación Espacial Internacional aparece y desaparece desde la misma dirección, ¿cómo es eso posible?",
        answer16:
          "El software Spot the Station redondea las direcciones a las direcciones cardinales e intercardinales más cercanas. Esto puede resultar en que parezca que la Estación Espacial Internacional aparecerá y desaparecerá en la misma dirección, aunque esté viajando por el cielo. Esto ocurre típicamente en sobrevuelos con una ventana de visibilidad corta porque la estación se mueve rápidamente hacia (o fuera de) la sombra oscura de la Tierra donde, desde la ubicación del usuario en el suelo, no se puede observar un paso completo por el cielo.",

        question17:
          "17. ¿Puedo ver un mapa en vivo de la ubicación de la Estación Espacial Internacional?",
        answer17:
          "Sí, la aplicación Spot the Station incluye un mapa en tiempo real que muestra la posición actual de la Estación Espacial Internacional mientras orbita la Tierra, brindando a los usuarios una referencia visual para rastrear su progreso.",

        question18:
          "18. ¿Qué es la función de realidad aumentada en la aplicación Spot the Station?",
        answer18:
          "La función de realidad aumentada en la aplicación Spot the Station permite a los usuarios ver una superposición virtual de la trayectoria de la Estación Espacial Internacional en el cielo. Esta función ayuda a los usuarios a localizar la estación con mayor precisión al alinear su dispositivo con la posición en tiempo real de la estación.",

        question19:
          "19. ¿Cómo accedo a la función de realidad aumentada en la aplicación Spot the Station?",
        answer19:
          "Para acceder a la función de realidad aumentada, abra la aplicación Spot the Station y navegue a la opción “Vista AR” en el menú inferior. Siga las indicaciones en pantalla para alinear la cámara del dispositivo con el cielo, donde la aplicación mostrará una superposición virtual que indica la posición y trayectoria de la Estación Espacial Internacional.",

        question20:
          "20. ¿Necesito un dispositivo o software específico para usar la función de realidad aumentada?",
        answer20:
          "La función de realidad aumentada de Spot the Station requiere un dispositivo que pueda determinar su orientación en el espacio 3D. Requiere soporte de hardware específico, como un giroscopio o coprocesador de movimiento. Los dispositivos más antiguos o económicos pueden no admitir esta funcionalidad.",

        question21: "21. ¿Cómo funciona la función de realidad aumentada?",
        answer21:
          "Usando la cámara y los sensores del dispositivo, la función de realidad aumentada de Spot the Station superpone la ubicación de la Estación Espacial Internacional en el cielo en la pantalla, ajustándose en tiempo real a medida que el usuario mueve el dispositivo. La aplicación guía a los usuarios para apuntar la cámara del dispositivo en la dirección correcta y muestra dónde aparecerá y desaparecerá la estación.",

        question22: "22. ¿Puedo usar la función de realidad aumentada tanto de día como de noche?",
        answer22:
          "Sí, la función de realidad aumentada dentro de la aplicación Spot the Station está disponible tanto de día como de noche; sin embargo, la mejor experiencia de visualización es típicamente durante el crepúsculo o la noche cuando la Estación Espacial Internacional es visible a simple vista. La superposición de realidad aumentada funcionará independientemente de las condiciones de luz, pero las oportunidades de visualización reales dependen de la visibilidad.",

        question23:
          "23. ¿Es precisa la superposición de realidad aumentada para todas las ubicaciones?",
        answer23:
          "Sí, la función de realidad aumentada dentro de la aplicación Spot the Station está diseñada para proporcionar información de posición precisa basada en la ubicación GPS del dispositivo. Sin embargo, la precisión puede variar ligeramente dependiendo de la calibración de la brújula y los sensores del dispositivo. Si los usuarios notan discrepancias, recalibre la brújula del dispositivo a través de la configuración.",

        question24:
          "24. ¿Puede la función de realidad aumentada ayudar con los tiempos de avistamiento exactos?",
        answer24:
          "La función de realidad aumentada dentro de la aplicación Spot the Station guía visualmente a los usuarios para localizar la Estación Espacial Internacional en el momento preciso en que aparece en el cielo. Junto con las alertas de la aplicación, mejora la capacidad de ver la estación al proporcionar una dirección visual en vivo e indicador de altura para rastrearla con precisión.",

        question25: "25. ¿Hay consejos para optimizar mi experiencia de realidad aumentada?",
        answer25:
          "Para la mejor experiencia de realidad aumentada en la aplicación Spot the Station, use la función en un área abierta con una vista clara del cielo. Evite obstrucciones como edificios altos o árboles, ya que pueden bloquear la visibilidad. Calibre la brújula del dispositivo y asegúrese de que los servicios de ubicación y los permisos de la cámara estén habilitados para un funcionamiento fluido.",

        question26:
          "26. ¿Está disponible la función de realidad aumentada en dispositivos iOS y Android?",
        answer26:
          "Sí, la función de realidad aumentada de la aplicación Spot the Station está disponible en dispositivos móviles y tabletas iOS y Android, siempre que su dispositivo cumpla con los requisitos de hardware.",

        question27: "27. ¿Funciona la aplicación Spot the Station sin conexión?",
        answer27:
          "Algunas funciones básicas, como acceder a horarios de oportunidades de visualización previamente descargados o recibir notificaciones programadas, pueden funcionar sin conexión. Sin embargo, las funciones que requieren datos en tiempo real, como el seguimiento, requieren servicio celular o una conexión a Internet.",

        question28: "28. ¿Hay requisitos especiales para usar la aplicación Spot the Station?",
        answer28:
          "La aplicación Spot the Station requiere servicio celular activo o una conexión a Internet para el seguimiento en tiempo real y las alertas. Además, para obtener información específica de la ubicación, asegúrese de que los servicios de ubicación del dispositivo estén habilitados para la aplicación.",

        question29: "29. ¿Es gratuita la aplicación Spot the Station?",
        answer29:
          "Sí, la aplicación Spot the Station es gratuita para descargar y usar, sin compras dentro de la aplicación ni suscripciones.",

        question30:
          "30. ¿A quién puedo contactar para obtener soporte de la aplicación Spot the Station?",
        answer30:
          "Para obtener soporte con la aplicación Spot the Station, comuníquese a través de la opción de comentarios de la aplicación o <a href='mailto:hq-spotthestation@mail.nasa.gov'>envíe un correo electrónico al equipo de Spot the Station</a>.",
      },
    },
    astronauts: {
      title: "¿Quién está en la Estación ahora?",
      number: "Número de personas:",
    },
    live: {
      title: "Transmisión en Vivo",
      description:
        "Actualmente, se está transmitiendo un video en vivo de la Tierra desde una cámara HD externa montada en la ISS. La cámara está mirando hacia la Tierra con un panel solar ocasional pasando por la vista.",
    },
    tour: {
      title: "Tour Virtual",
    },
    videos: {
      title: "Videos de la Estación",
    },
    gallery: {
      title: "Galería",
    },
    earthScience: { title: "Recursos de Datos de Ciencias de la Tierra" },
  },
}

export default es
export type Translations = typeof es
