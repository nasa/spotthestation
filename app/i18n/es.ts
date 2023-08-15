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
    body: "Thank you for contacting us. We have received your message and will process your request. Please note that this application does not collect user data, so we cannot respond to all messages individually.",
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
      firstTimeHead: "LISTA DE PRÓXIMOS OBSERVACIONES",
      secondTimeHead: "CUENTA REGRESIVA",
      timezone: "Zona horaria",
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
      refresh: "Actualizar",
    },
    selectSightings: {
      title: "Próximos avistamientos",
      sightings: "Avistamientos",
      selectMessage: "Seleccione Eventos para los cuales le gustaría ser notificado.",
      switch: "Notifíqueme para todos los próximos eventos en este lugar.",
      aboveHorizon: "Sobre el horizonte",
      today: "Hoy",
      tomorrow: "Mañana",
      appears: "Aparece",
      disappears: "Desaparece",
      empty:
        "No hay posibles avistamientos de ISS para esta ubicación desde el {{start}} hasta el {{end}}.",
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
      orbitalSpeed: "Velocidad orbital",
      longitude: "Longitud",
      latitude: "Latitud",
      altitude: "Altitud",
      crewOnboard: "Número típico de tripulación a bordo",
      launched: "La asamblea comenzó",
      launchedValue: "20 de noviembre de 1998",
      mass: "Masa estimada",
      dimensions: "Dimensiones estimadas",
      orbitalPeriod: "Periodo orbital",
      orbitsPerDay: "Órbitas/día",
      dimensionsValue: "109m de ancho x 73m de largo x 14m de alto",
    },
  },
  settings: {
    header: "Ajustes",
    locationSettings: "Configuración de ubicación",
    notificationSettings: "Configuración de las notificaciones",
    termsAndConditions: "Términos y condiciones",
    contactUs: "Contáctenos",
    language: "Idioma",
    termsAndConditionsData: {
      backButton: "Settings",
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
    localCalculations: "Cálculos locales",
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
