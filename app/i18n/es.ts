const es = {
  name: "Español",
  errorScreen: {
    title: "¡Algo salió mal!",
    friendlySubtitle:
      "Esta es la pantalla que sus usuarios verán en producción cuando se lanza un error.Querrá personalizar este mensaje (ubicado en `APP/I18N/EN.TS`) y probablemente también el diseño (` APP/PROPES/ERRORSCREEN`).Si desea eliminar esto por completo, verifique `app/app.tsx` para ver el componente <ErrorBoundary>.",
    reset: "Restablecer la aplicación",
  },
  snackBar: {
    ok: "DE ACUERDO",
    dismiss: "Despedir", // <-- "Descartar"
    sightingsSaved: "¡Avistamientos para la última ubicación guardada cargada!",
    defaultError: "Ocurrió algún error", // <-- "Ocurrió un error"
    locationSaved: "Ubicación guardada",
    locationExist: "¡La ubicación con este título ya existe!", // <-- "¡La ubicación con este nombre ya existe!"
    openSettingsError: "¡No se puede abrir la configuración!",
    shared: "¡Compartido con éxito!",
    savedToGallery: "Guardado en la galería",
  },
  permissionsModal: {
    close: "Cerca", // <-- "Cerrar"
    openSettings: "Configuración abierta", // <-- "Abrir Configuración."
    body: "Para usar esta función, debe otorgar permiso para acceder a la galería.",
  },
  permissionsAndroid: {
    title: "Permiso para guardar videos",
    message: "Esta aplicación necesita permiso para guardar videos en su dispositivo.",
    buttonNeutral: "Pregúntame Luego", // <-- "Preguntar después"
    buttonNegative: "Cancelar",
    buttonPositive: "DE ACUERDO",
  },
  thanksModal: {
    body: "Gracias por contactarnos.Hemos recibido su mensaje y procesaremos su solicitud. Esperamos incluir una resolución en lanzamientos futuros. Tenga en cuenta que esta aplicación no recopila datos del usuario, por lo que no podemos responder a todos los mensajes individualmente.",
    dismiss: "Despedir", // <-- "Descartar"
  },
  privacy: {
    title: "Usa tu ubicación",
    body: "Utilizamos datos de ubicación para calcular los próximos avistamientos en su ubicación actual.Otorgue permisos de ubicación para habilitar esta funcionalidad.",
    agree: "ACEPTAR",
    skip: "SALTAR",
    policy: "política de privacidad",
  },
  notifications: {
    push: {
      title: "¡Detecte la ISS ahora!",
      subTitle: "La ISS está pasando por encima de usted en",
    },
    before: {
      titleOne: "Detectar la ISS en",
      titleTwo: "¡minutos!",
      subTitleOne: "La ISS está pasando por encima de usted en",
      subTitleTwo: "intermediario",
    },
  },
  units: {
    minute: "mínimo",
    kilometer: "km",
    kilogram: "kg",
    month: "mes",
    metersPerSecond: "EM",
  },
  tabNavigator: {
    homeTab: "Hogar",
    issViewTab: "Vista de ISS",
    issNowTab: "ISS ahora",
    resourcesTab: "Recursos",
    settingsTab: "Ajustes",
  },
  onboarding: {
    splash: {
      title: "Detener la estación",
      subTitle: "Mira al cielo y vea la Estación Espacial Internacional (ISS)",
    },
    completeProfile: {
      notification: {
        title: "Configuración de las notificaciones",
        label: "Obtener alertas de notificación push",
        tip: "Obtenga alertas cuando la estación espacial se acerque a su ubicación.",
        nextButton: "Next", // <-- "Siguiente"
      },
      location: {
        title: "Tu ubicación",
        subtitle:
          "Permita que la aplicación detecte su ubicación automáticamente o proporcione su ubicación manualmente.",
        detectButton: "Detectar mi ubicación",
        orLabel: "o",
        selectLocation: "Ingresa tu ubicación",
        detecting: "Detección de ubicación ...",
        doneButton: "Hecho",
        serviceAlertTitle: "Servicios de ubicación discapacitados",
        serviceAlertBody: "Pense que sus servicios de ubicación continúen.", // <-- "Permita que sus servicios de ubicación continúen"
        permissionAlertTitle: "Permiso no otorgado",
        permissionAlertBody:
          "Utilizamos datos de ubicación para calcular los próximos avistamientos en su ubicación actual. Otorgue permisos de ubicación para habilitar esta funcionalidad.",
      },
    },
  },
  homeScreen: {
    initLoader: {
      message:
        "Los datos de ISS se están cargando ... Esto puede tardar un momento en completarse.",
      trajectoryError:
        "Los datos de trayectoria de ISS no están disponibles actualmente debido al mantenimiento del servidor. Por favor, vuelva más tarde.",
    },
    header: {
      firstTimeHead: "Siguiente avistamiento",
      secondTimeHead: "CUENTA REGRESIVA",
    },
    selectLocation: {
      title: "Seleccionar ubicación",
      inputPlaceholder: "Ubicación de búsqueda por ciudad, pin ...",
      current: "Ubicación actual",
      saved: "Ubicaciones guardadas",
      nearby: "Ubicaciones cercanas",
      search: "Resultados de la búsqueda",
      cta: "Personalizar notificaciones para esta ubicación",
      actionTitle: "Alerta",
    },
    selectSightings: {
      title: "Próximos avistamientos",
      sightings: "Avistamientos",
      selectMessage: "Seleccione Eventos para los cuales le gustaría ser notificado.",
      switch: "Notifíqueme para todos los próximos eventos en este lugar.",
      aboveHorizon: "Sobre el horizonte",
      today: "Hoy",
      tomorrow: "Mañana",
      coach: {
        title: "Iconos Descripción",
        moon: "Será nocturno en la ubicación seleccionada cuando la ISS esté por encima del horizonte.", // <-- "Será de noche en la ubicación seleccionada cuando la ISS esté por encima del horizonte."
        sunset:
          "Habrá crepúsculo en la ubicación seleccionada cuando la ISS esté por encima del horizonte.",
        sun: "Habrá luz diurna en la ubicación seleccionada cuando la ISS esté por encima del horizonte.",
      },
    },
    coachMarks: {
      skip: "Omitir recorrido", // <-- "Omitir tutorial."
      next: "Next",
      finish: "Finalizar",
      dismiss: "Despedir", // <-- "Descartar"
      locationTitle: "Cambiar locación", // <-- "Cambiar ubicación"
      locationData:
        "Puede seleccionar o cambiar su ubicación a una diferente directamente desde aquí.",
      sightingsTitle: "Siguiente avistamiento y cuenta regresiva",
      sightingsData:
        "Esta sección le muestra la fecha y un temporizador de cuenta regresiva para el próximo avistamiento de ISS cerca de su ubicación seleccionada.Puede tocar el siguiente cuadro de avistamiento para ver una lista completa de los próximos avistamientos.",
      globeTitle: "Tierra interactiva",
      globeData:
        "Puede ver la posición en tiempo real de la ISS deslizando en la pantalla.Esto le permite interactuar con la Tierra y rastrear la ubicación de la ISS en tiempo real.",
      mapTitle: "Vista de mapa 2d",
      mapData:
        "Esta sección muestra una representación 2D del camino completo de ISS contra las regiones nocturnas y de día en la tierra.",
      navigationTitle: "Navegación",
      navigationData:
        "Puede navegar a través de diferentes características de la aplicación desde el menú de navegación a continuación.",
    },
  },
  issView: {
    timeHeader: "cuenta regresiva",
    cameraPermissionText:
      "No ha permitido el uso de la cámara de su teléfono.Haga clic aquí para permitir.",
    issCaptured: "Capturar este momento",
    details: {
      title: "Estación espacial internacional - Detalles",
      distance: "Distancia",
      orbitalSpeed: "Velocidad orbital",
      longitude: "Longitud",
      latitude: "Latitud",
      altitude: "Altitud",
      crewOnboard: "Tripulación a bordo",
      launched: "La asamblea comenzó",
      launchedValue: "20 de noviembre de 1998",
      mass: "Masa estimada",
      dimensions: "Dimensiones estimadas",
      orbitalPeriod: "Periodo orbital",
      orbitsPerDay: "Órbitas/día",
      orbitalDecay: "Descomposición orbital",
      dimensionsValue: "109m de ancho x 73m de largo x 14m de alto",
    },
  },
  settings: {
    header: "Ajustes",
    locationSettings: "Configuración de ubicación",
    notificationSettings: "Configuración de las notificaciones",
    termsAndConditions: "Términos y condiciones",
    contactUs: "Contáctenos",
    termsAndConditionsData: {
      backButton: "Ajustes",
      ios: {
        title: "Acuerdo de uso de la solicitud con licencia",
        intro1:
          "El usuario final desea utilizar la siguiente aplicación con licencia desarrollada por el gobierno de los Estados Unidos representada por la Administración Nacional de Aeronáutica y Espacio, ubicada en 300 E Street SW, Washington, D.C. (en adelante NASA):",
        appData: {
          line1: "Aplicación con licencia:",
          line2: "Versión:",
          line3:
            "Número de tecnología de la NASA: MSC-27535-1 (en adelante aplicación con licencia)",
        },
        contactData: {
          line1: "Punto de contacto de la NASA:",
          line2: "Jacob Keaton",
          line3: "Sede de la NASA",
          line4: "300 E Street SW",
          line5: "Correo electrónico: spotthestation@hq.nasa.gov",
        },
        intro2:
          "La autoridad de la NASA para divulgar la solicitud con licencia es la Directiva de Política de la NASA (NPD) 2820.1C",
        intro3:
          "Ahora, por lo tanto, en consideración de la NASA que lanza la aplicación con licencia al usuario final y otorga a los usuarios finales el derecho no transferible de usar la aplicación con licencia como se especifica en este documento en cualquier iPhone o iPod Touch que el usuario final posee o los controles, según lo permitido por las reglas de uso establecidas en los términos de la tienda de aplicaciones y las condiciones para fines no comerciales, solo, el uso final está de acuerdo a continuación: Sigue: Sigue;",
        body: {
          line1:
            "1. La NASA y el usuario final reconocen que este acuerdo se concluye entre la NASA y el usuario final solamente, y no con Apple, este acuerdo no es transferible, y la NASA, no Apple, es el único responsable de la aplicación con licencia y el contenido de la misma.",
          line2:
            "2. La NASA y el usuario final reconocen y acuerdan que Apple, y las subsidiarias de Apple, son beneficiarios de terceros de este Acuerdo, y que, en la aceptación del usuario final de los Términos y condiciones de este Acuerdo, Apple tendrá el derecho (y se considerará haber aceptado el derecho) para hacer cumplir este Acuerdo contra el usuario final como un tercer beneficiario de este Acuerdo.",
          line3:
            "3. La solicitud con licencia sigue siendo propiedad de la NASA.El usuario final reconoce que no adquiere interés de propiedad en la solicitud con licencia bajo este Acuerdo.La solicitud con licencia no está en el dominio público y nada en este Acuerdo se interpretará como que la solicitud con licencia esté disponible para el público sin restricción.",
          line4:
            "4. No habrá liberación, distribución o publicación de la solicitud con licencia por el usuario final.",
          line5:
            "5. La NASA no será responsable ni responsable de ningún mantenimiento o actualización de la solicitud con licencia proporcionada, ni por la corrección de ningún error en la aplicación con licencia.La NASA y el usuario final reconocen que Apple no tiene ninguna obligación de proporcionar ningún servicio de mantenimiento y soporte con respecto a la aplicación con licencia.",
          line6:
            '6. El usuario final representa y garantiza que (i) él/ella no está ubicado en un país que está sujeto a un embargo del gobierno de los Estados Unidos, o que ha sido designado por el gobierno de los Estados Unidos como un país de "apoyo terrorista";y (ii) él/ella no figura en ninguna lista del gobierno de los EE. UU. De partes prohibidas o restringidas.',
          line7:
            '7. La solicitud con licencia se proporciona "tal cual" sin ninguna garantía de ningún tipo, ya sea expresada, implícita o legal, incluida, entre otros, cualquier garantía que la solicitud con licencia se ajuste a las especificaciones, cualquier garantía implícita de comerciabilidad, idoneidad para un propósito particular y libertad de infracción, o cualquier garantía que la solicitud con licencia esté libre de errores.En ningún caso será responsable de la NASA por daños por daños, incluidos, entre otros, daños directos, indirectos, especiales o consecuentes, derivados, resultantes o de alguna manera relacionados con la solicitud con licencia, ya sea que se basara o no en la garantía, el contrato, el agravio o de otro tipo, si las personas o no se han mantenido por las personas o la propiedad o de otra manera, y no se basaron en la garantía o la pérdida de la licencia de la licencia de la licencia.El usuario final acuerda renunciar a todas y cada una de las reclamaciones contra el gobierno de los EE. UU., Sus contratistas y sus subcontratistas, e indemnizará y impedirá inofensivos al gobierno de los EE. UU., Sus contratistas y sus subcontratistas por cualquier daño que el usuario final pueda incurrir en el uso del usuario final de la aplicación licenciada, incluidos los daños de los productos basados, o resultante de la aplicación licida.',
          line8:
            "8. En el caso de que cualquier falla de la solicitud con licencia se ajuste a cualquier garantía realizada por la ley, el usuario final puede notificar a Apple, y Apple reembolsará el precio de compra (si corresponde) para la aplicación con licencia al usuario final.En la medida máxima permitida por la ley aplicable, Apple no tendrá otras pérdidas, pasivos, daños, costos o gastos atribuibles a cualquier falla de la solicitud con licencia para cumplir con cualquier garantía.",
          line9:
            "9. La NASA y el usuario final reconocen que, en el caso de cualquier reclamo de terceros de que la solicitud con licencia o la posesión del usuario final y el uso de la aplicación con licencia infringen los derechos de propiedad intelectual, la NASA, no la Apple, será el único responsable de la investigación, defensa, asentamiento y descarga de dicha reclamo de infracción de propiedad intelectual, sujeto a la ley.",
          line10:
            "10. La NASA y el usuario final reconocen que la NASA, no Apple, es responsable de abordar cualquier reclamo de usuario final o tercero relacionado con la aplicación con licencia o la posesión del usuario final y /o el uso de la aplicación con licencia, incluidos, entre otros: (i) reclamos de responsabilidad del producto;(ii) cualquier reclamo de que la solicitud con licencia no se ajuste a ningún requisito legal o reglamentario aplicable, incluidas las garantías que sean aplicables por la ley;y (iii) reclamos que surgen bajo protección del consumidor o legislación similar.",
          line11:
            "11. Este Acuerdo se interpretará, y se determinarán las relaciones legales entre las partes, de acuerdo con la ley federal de los Estados Unidos para todos los fines.",
          line12:
            "12. Este Acuerdo constituye toda la comprensión y el acuerdo entre la NASA y el usuario final relacionado con la liberación de la solicitud con licencia y no puede ser reemplazada, modificada o enmendada.",
          line13:
            "13. Al aceptar y usar la solicitud con licencia bajo este Acuerdo, el usuario final acepta todos los términos y condiciones en este documento.",
        },
      },
      android: {
        title: "Acuerdo de uso de la solicitud con licencia",
        intro1:
          "El usuario final desea utilizar el siguiente producto desarrollado por el gobierno de los Estados Unidos, según lo representado por la Administración Nacional de Aeronáutica y Espacio, Ames Research Center, ubicado en Moffett Field, CA 94035 (en adelante NASA):",
        appData: {
          line1: "Software:",
          line2: "Versión:",
          line3: "Número de tecnología de la NASA: MSC-27535-1",
        },
        intro2:
          "La autoridad de la NASA para publicar la solicitud con licencia es la Directiva de Política de la NASA (NPD) 2820.1C.",
        intro3:
          "NOW THEREFORE, in consideration of NASA releasing the LICENSED APPLICATION to END-USER and granting END-USER the non-transferable right to use the LICENSED APPLICATION for personal, noncommercial use and as specified herein and as permitted by the Android Market Terms of Service on any Android-powered mobile device (“Device”) that END-USER owns or controls, END-USER agrees as follows:",
        body: {
          line1:
            "1. La solicitud con licencia sigue siendo propiedad de la NASA.El usuario final reconoce que no adquiere interés de propiedad en la solicitud con licencia bajo este Acuerdo.La solicitud con licencia no está en el dominio público y nada en este Acuerdo se interpretará como que la solicitud con licencia esté disponible para el público sin restricción.",
          line2:
            "2.\tThere shall be no release, distribution, or publication of the LICENSED APPLICATION by END-USER.",
          line3:
            "3. La NASA no será responsable ni responsable de ningún mantenimiento o actualización de la solicitud con licencia proporcionada, ni por la corrección de ningún error en la aplicación con licencia.",
          line4:
            '4. El usuario final representa y garantiza que (i) él/ella no está ubicado en un país que está sujeto a un embargo del gobierno de los Estados Unidos, o que ha sido designado por el gobierno de los Estados Unidos como un país de "apoyo terrorista";y (ii) él/ella no figura en ninguna lista del gobierno de los EE. UU. De partes prohibidas o restringidas.',
          line5:
            '5. La solicitud con licencia se proporciona "tal cual" sin ninguna garantía de ningún tipo, ya sea expresada, implícita o legal, incluida, entre otros, cualquier garantía que la solicitud con licencia se ajuste a las especificaciones, cualquier garantía implícita de comerciabilidad, idoneidad para un propósito particular y libertad de infracción, o cualquier garantía que la solicitud con licencia esté libre de errores.En ningún caso será responsable de la NASA por daños por daños, incluidos, entre otros, daños directos, indirectos, especiales o consecuentes, derivados, resultantes o de alguna manera relacionados con la solicitud con licencia, ya sea que se basara o no en la garantía, el contrato, el agravio o de otro tipo, si las personas o no se han mantenido por las personas o la propiedad o de otra manera, y no se basaron en la garantía o la pérdida de la licencia de la licencia de la licencia.El usuario final acuerda renunciar a todas y cada una de las reclamaciones contra el gobierno de los EE. UU., Sus contratistas y sus subcontratistas, e indemnizará y impedirá inofensivos al gobierno de los EE. UU., Sus contratistas y sus subcontratistas por cualquier daño que el usuario final pueda incurrir en el uso de la aplicación licenciada por el usuario final de la aplicación licenciada, incluidas las daños de las solicitudes licenciadas basadas, o el resultado de la aplicación licenada.',
          line6:
            "6. Este Acuerdo se interpretará, y se determinarán las relaciones legales entre las partes del presente, de conformidad con la ley federal de los Estados Unidos para todos los fines.",
          line7:
            "7. Este Acuerdo constituye toda la comprensión y el acuerdo entre la NASA y el usuario final relacionado con la liberación de la solicitud con licencia y no puede ser reemplazada, modificada o enmendada.",
          line8:
            "8. Al aceptar y usar la solicitud con licencia bajo este Acuerdo, el usuario final de la presente acepta todos los términos y condiciones en este documento.",
        },
      },
    },
    contactUsData: {
      backButton: "Ajustes",
      title: "Contáctenos",
      titlePlaceholder: "Elige el título",
      commentsPlaceholder: "Comentarios de entrada",
      sendButton: "Enviar",
      contactUsOptions: {
        reportAnIssue: "Reportar un problema",
        improvementIdeas: "Ideas de mejora",
        generalQuestions: "Preguntas generales",
        comments: "Comentario", // <-- "Conentarios"
      },
    },
    notificationSettingsData: {
      backButton: "Ajustes",
      notificationTitle: "Configuración de las notificaciones",
      privacyTitle: "La configuración de privacidad",
      upcomingLabel: "Próximos Eventos",
      customizeLabel: "Personalizar notificaciones",
      upcomingTip: "Apague para dejar de recibir notificaciones de eventos.",
      notifyMeBefore: "Notificarme antes",
      turnOffNotifications: "DESACTIVAR LAS NOTIFICACIONES",
      from: "De",
      until: "Hasta",
    },
    locationSettingsData: {
      backToSettings: "Ajustes",
      goBack: "Regresa",
      generalTitle: "Configuración de ubicación",
      cta: "Personalizar notificaciones para esta ubicación",
      locationPermission: "Permiso de ubicación de subvención",
      addNewLocation: {
        generalTitleAdd: "Agregar nueva ubicación",
        generalTitleEdit: "Ubicación de edición",
        confirnModalButton: "Confirmar",
        saveButton: "Guardar dirección",
        searchInputPlaceholder: "Ingrese a la ciudad, zip o dirección",
        nameInputPlaceholder: "Guardar el nombre de la ubicación",
      },
      removeLocation: {
        question: "¿Seguro que eliminará esta ubicación?", // <-- "¿Seguro que quiere eliminar esta ubicación?"
        cancelButton: "Cancelar",
        removeButton: "Borrar",
      },
    },
  },
  resources: {
    header: "Recursos",
    searchPlaceholder: "Artículos de búsqueda, eventos, etc.",
    suggestions: "Sugerencias",
    searchResults: "Resultados de la búsqueda",
    tabs: {
      news: "Noticias",
      about: "Acerca de",
      details: "Detalles",
    },
  },
}

export default es
export type Translations = typeof es
