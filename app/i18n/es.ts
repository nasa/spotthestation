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
  permissionsModal: {
    close: "Cerrar", // <-- "Cerrar"
    openSettings: "Abrir ajustes", // <-- "Abrir Configuración."
    body: "Para usar esta función, debes dar permiso para acceder a la galería.",
  },
  permissionsAndroid: {
    title: "Permiso para guardar los videos",
    message: "Esta aplicación necesita permiso para guardar videos en tu dispositivo.",
    buttonNeutral: "Pregúntame después", // <-- "Preguntar después"
    buttonNegative: "Cancelar",
    buttonPositive: "De acuerdo",
  },
  thanksModal: {
    body: "Gracias por ponerte en contacto con nosotros. Hemos recibido tu mensaje y procesaremos tu solicitud. Ten en cuenta que esta aplicación no recopila datos de los usarios, por lo que no podemos responder a todos los mensajes individualmente.",
    dismiss: "Descartar", // <-- "Descartar"
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
      subTitle: "La estación va a pasar por encima tuyo a las",
    },
    before: {
      titleOne: "¡Avista la estación en",
      titleTwo: "minutos!",
      subTitleOne: "La estación va a pasar por encima tuyo en",
      subTitleTwo: "minutos a las",
    },
  },
  units: {
    minute: "minutos",
    kilometer: "km",
    kilogram: "kg",
    month: "mes",
    metersPerSecond: "m/s",
    time: "H",
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
      title: "Avista la estación",
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
    },
    header: {
      firstTimeHead: "Lista de próximos avistamientos",
      secondTimeHead: "Cuenta regresiva",
      timezone: "Zona horaria",
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
      title: "Próximos avistamientos",
      sightings: "Avistamientos",
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
      longerThan2: "2 minutos y más",
      empty:
        "No hay posibles avistamientos de la estación para esta ubicación desde el {{start}} hasta el {{end}}.",
      coach: {
        title: "Descripción de los iconos",
        moon: "Será de noche en la ubicación seleccionada cuando la estación esté por encima del horizonte.",
        sunset:
          "Habrá crepúsculo en la ubicación seleccionada cuando la estación esté por encima del horizonte.",
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
      title: "Estación Espacial Internacional - Detalles",
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
      dimensionsValue: "109m de ancho x 73m de largo x 14m de alto",
    },
    arNotSupported: "La realidad aumentada (RA) no es compatible con este dispositivo",
    noOrientationSensor: "El sensor de orientación no está disponible",
    noMagnetometerSensor: "El magnetómetro no está disponible",
    screenshotError: "No se puede capturar la captura de pantalla",
  },
  settings: {
    header: "Ajustes",
    locationSettings: "Ajustes de ubicación",
    notificationSettings: "Ajustes de notificacion",
    termsAndConditions: "Términos y condiciones",
    contactUs: "Contáctanos",
    language: "Idioma",
    calibrateCompass: "Calibración de la brújula",
    calibrateCompassData: {
      instructions:
        "Para calibrar la brújula, gira tu dispositivo varias veces siguiendo un patrón de ocho.",
      accuracy: "Precisión del sensor:",
      low: "Baja",
      medium: "Media",
      high: "Alta",
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
    localCalculations: "Cálculos de ubicaciones",
  },
  resources: {
    header: "Recursos",
    searchPlaceholder: "Búsqueda de artículos, eventos, etc.",
    suggestions: "Sugerencias",
    searchResults: "Resultados de la búsqueda",
    liveTitle: "Video de transmisión en vivo de alta definición de la Tierra",
    liveDescription:
      "Actualmente, se está transmitiendo un video en vivo de la Tierra desde una cámara HD externa montada en la ISS. La cámara está mirando hacia la Tierra con un panel solar ocasional pasando por la vista. Para ver esta transmisión en vivo, visite",
    liveLink: "esta página web de la NASA",
    tabs: {
      news: "Noticias",
      about: "Acerca de la estación",
      details: "Detalles",
      live: "Transmisión en vivo",
    },
  },
}

export default es
export type Translations = typeof es
