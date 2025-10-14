const ptBR = {
  name: "Português (Brasil)",
  errorScreen: {
    title: "Algo errado aconteceu!",
    friendlySubtitle:
      "Esta é a tela que seus usuários verão em produção quando ocorrer um erro. Você vai querer personalizar esta mensagem (localizada em `app/i18n/en.ts`) e provavelmente o layout também (`app/screens/ErrorScreen`). Se você quiser remover isso completamente, verifique o componente <ErrorBoundary> em `app/app.tsx` para .",
    reset: "REINICIAR APLICATIVO",
  },
  snackBar: {
    ok: "OK",
    dismiss: "Dispensar",
    sightingsSaved: "Avistamentos para a última localização salva foram carregados!",
    defaultError: "Ocorreu um erro",
    locationSaved: "Localização salva",
    locationExist: "Localização com este título já existe!",
    openSettingsError: "Não é possível abrir as configurações!",
    shared: "Compartilhado com sucesso!",
    savedToGallery: "Salvo na galeria",
  },
  outdatedModal: {
    title: "Atualização disponível",
    body: "Nova versão do aplicativo disponível! Baixe a nova versão em",
    buttonNegative: "Cancelar",
    buttonPositive: "Baixar",
  },
  permissionsModal: {
    close: "Fechar",
    openSettings: "Abrir configurações",
    bodyGallery: "Para usar este recurso, você precisa conceder permissão para acessar a galeria.",
    bodyCalendar:
      "Para usar este recurso, você precisa conceder permissão para acessar o calendário.",
  },
  fontSizeModal: {
    title: "Tamanho da fonte muito grande",
    body1:
      "Parece que o tamanho da fonte do seu dispositivo está configurado muito alto. Isso pode fazer com que algumas informações essenciais sejam cortadas ou exibidas incorretamente no aplicativo.",
    bodyAndroid:
      "Para ajustar o tamanho da fonte, vá para Configurações → Tela → Tamanho e estilo da fonte → Ajuste o controle deslizante para um tamanho menor.",
    bodyIOS:
      "Para ajustar o tamanho da fonte, vá para Configurações → Acessibilidade → Tela e Tamanho do Texto → Texto Maior → Ajuste o controle deslizante para um tamanho menor.",
    cancel: "Cancelar",
    settings: "Ir para Configurações",
  },
  permissionsAndroid: {
    title: "Permissão para salvar vídeos",
    message: "Este aplicativo precisa de permissão para salvar vídeos no seu dispositivo.",
    buttonNeutral: "Perguntar-me depois",
    buttonNegative: "Cancelar",
    buttonPositive: "OK",
    alarmPermissionTitle: "Permissão requerida",
    alarmPermissionMessage:
      "Por favor, conceda permissão para alarmes e lembretes na próxima tela para receber notificações sobre os próximos avistamentos.",
  },
  thanksModal: {
    body: "Obrigado por nos contatar. Recebemos sua mensagem e processaremos sua solicitação. Observe que este aplicativo não coleta dados do usuário, então não podemos responder a todas as mensagens individualmente. Por favor, visite a página de Perguntas Frequentes para ver se há uma resposta para sua pergunta.",
    dismiss: "Dispensar",
    faq: "Perguntas Frequentes",
  },
  privacy: {
    title: "Use sua localização",
    body: "Usamos dados de localização para calcular os próximos avistamentos na sua localização atual. NÃO requeremos acesso aos dados de localização quando o aplicativo não está em uso. Por favor, conceda permissões de localização para habilitar esta funcionalidade",
    agree: "CONCORDO",
    skip: "PULAR",
    policy: "Política de Privacidade",
  },
  notifications: {
    push: {
      title: "Veja a Estação agora!",
      subTitleIos: "A Estação está passando acima de você em",
      subTitleAndroid: "A Estação está passando acima de você ({{time}}) em",
    },
    before: {
      title: "Veja a Estação em {{amount}} {{units}}!",
      subTitleIos: "A Estação passará sobre você em {{amount}} {{units}} em {{location}}",
      subTitleAndroid:
        "A Estação passará sobre você em {{amount}} {{units}} ({{time}}) em {{location}}",
      minutes: "minutos",
      hours: "horas",
    },
    timeLeft: "TEMPO RESTANTE",
  },
  units: {
    minute: "min",
    kilometer: "km",
    kilogram: "kg",
    month: "mês",
    metersPerSecond: "M/S",
    time: "T",
    hour: "h",
    mile: "mi",
    foot: "ft",
    meter: "m",
    pound: "lbs",
    milesPerHour: "mph",
  },
  tabNavigator: {
    homeTab: "Início",
    issViewTab: "Visão AR",
    issNowTab: "Rastreador",
    resourcesTab: "Recursos",
    settingsTab: "Configurações",
  },
  onboarding: {
    splash: {
      title: "Veja\na Estação",
      subTitle: "Olhe para o céu e veja a Estação Espacial Internacional",
    },
    completeProfile: {
      notification: {
        title: "Configurações de Notificação",
        label: "Receber Alertas de Notificação Push",
        tip: "Receba alertas quando a estação espacial estiver se aproximando da sua localização.",
        nextButton: "Próximo",
      },
      location: {
        title: "Sua Localização",
        subtitle:
          "Por favor, permita que o aplicativo detecte sua localização automaticamente ou forneça sua localização manualmente.",
        detectButton: "Detectar Minha Localização",
        orLabel: "ou",
        selectLocation: "Insira sua localização",
        detecting: "Detectando localização...",
        doneButton: "Concluído",
        serviceAlertTitle: "Serviços de Localização desativados",
        serviceAlertBody: "Por favor, ative seus serviços de localização para continuar.",
        permissionAlertTitle: "Permissão não concedida",
        permissionAlertBody:
          "Usamos dados de localização para calcular os próximos avistamentos na sua localização atual. Por favor, conceda permissões de localização para habilitar esta funcionalidade.",
      },
    },
  },
  homeScreen: {
    initLoader: {
      message: "Carregando dados da Estação… Isso pode levar um tempo para completar.",
      trajectoryError:
        "Os dados de trajetória da Estação estão atualmente indisponíveis devido à manutenção do servidor. Por favor, verifique novamente mais tarde.",
      noNetwork:
        "Os dados de trajetória da Estação estão atualmente indisponíveis devido à falta de conexão. Por favor, verifique novamente mais tarde.",
    },
    header: {
      firstTimeHead: "PRÓXIMO AVISTAMENTO",
      secondTimeHead: "CONTAGEM REGRESSIVA",
      timezone: "Fuso Horário",
      opportunities: "Oportunidades de avistamento",
    },
    selectLocation: {
      title: "Selecionar Localização",
      inputPlaceholder: "Pesquisar localização por cidade, pin...",
      current: "Localização atual",
      saved: "Localizações salvas",
      nearby: "Localizações próximas",
      search: "Resultados da pesquisa",
      cta: "Personalizar notificações para esta localização",
      actionTitle: "Alerta",
      refresh: "Atualizar",
    },
    selectSightings: {
      upcomingSightings: "Próximos Avistamentos",
      pastSightings: "Avistamentos Passados",
      selectMessage: "Selecione os eventos para os quais você gostaria de ser notificado.",
      switch: "Notificar-me para todos os próximos eventos nesta localização.",
      aboveHorizon: "Acima do horizonte",
      maxHeight: "Altura máxima de",
      today: "Hoje",
      tomorrow: "Amanhã",
      appears: "Aparece",
      disappears: "Desaparece",
      all: "Todos",
      timeOfDay: "Hora do dia",
      night: "Noite",
      twilight: "Crepúsculo",
      duration: "Duração",
      shorterThan2: "menor que 2 minutos",
      between2And4: "entre 2 e 4 minutos",
      longerThan4: "4 minutos ou mais",
      empty:
        "Não há avistamentos potenciais da Estação para esta localização de {{start}} até {{end}}.",
      shareTitle: "A Estação está passando acima de {{location}} em {{date}}",
      shareAllTitle: "A Estação Espacial está passando sobre {{location}}:",
      shareLink:
        "Para explorar mais e rastrear a estação via realidade aumentada, baixe o aplicativo em",
      calendarEventTitle: "Veja a estação em {{location}}!",
      calendarSuccess: "Evento de calendário criado com sucesso",
      calendarError: "Não foi possível criar o evento de calendário",
      coach: {
        title: "Descrição dos Ícones",
        moon: "Será noite na localização selecionada quando a Estação estiver acima do horizonte.",
        sunset:
          "Haverá crepúsculo na localização selecionada quando a Estação estiver acima do horizonte.",
      },
      cloudCover: {
        title: "Cobertura de nuvens",
        any: "Qualquer",
        low: "Baixo (<25%)",
        medium: "Médio (25-50%)",
      },
      shareAll: "Compartilhar lista de avistamentos",
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
      skip: "Pular tour",
      next: "Próximo",
      finish: "Concluir",
      dismiss: "Dispensar",
      locationTitle: "Alterar Localização",
      locationData:
        "Você pode selecionar ou alterar sua localização para uma diferente diretamente daqui.",
      sightingsTitle: "Próximo Avistamento & Contagem Regressiva",
      sightingsData:
        "Esta seção mostra a data e um cronômetro para o próximo avistamento da Estação próximo à sua localização selecionada. Você pode tocar na caixa Próximo Avistamento para ver uma lista completa dos próximos avistamentos.",
      globeTitle: "Terra Interativa",
      globeData:
        "Você pode visualizar a posição em tempo real da Estação deslizando na tela. Isso permite que você interaja com a Terra e rastreie a localização da ISS em tempo real.",
      mapTitle: "Vista de Mapa 2D",
      mapData:
        "Esta seção mostra uma representação 2D do caminho completo da Estação contra as regiões de noite e dia na Terra.",
      navigationTitle: "Navegação",
      navigationData:
        "Você pode navegar por diferentes recursos do aplicativo no menu de navegação abaixo.",
    },
  },
  issView: {
    timeHeader: "Contagem Regressiva",
    cameraPermissionText:
      "Você não permitiu o uso da câmera do seu telefone. Clique aqui para permitir.",
    issCaptured: "Capture este momento",
    details: {
      title: "Informações",
      orbitalSpeed: "Velocidade orbital",
      longitude: "Longitude",
      latitude: "Latitude",
      altitude: "Altitude",
      crewOnboard: "Número típico de tripulantes a bordo",
      launched: "Montagem Iniciada",
      launchedValue: "20 de novembro de 1998",
      mass: "Massa Estimada",
      dimensions: "Dimensões Estimadas",
      orbitalPeriod: "Período Orbital",
      orbitsPerDay: "Órbitas/Dia",
      dimensionsValue: "{{width}} de largura x {{length}} de comprimento x {{height}} de altura",
      dateTime: "Data e Hora",
      maxHeight: "Altura Máxima",
      duration: "Duração Acima do Horizonte",
      appears: "Aparece",
      disappears: "Desaparece",
      distance: "Distância",
      nextSighting: "Próximo Avistamento",
    },
    arNotSupported: "AR não é suportado neste dispositivo",
    noOrientationSensor: "Sensor de orientação não disponível",
    noMagnetometerSensor: "Magnetômetro não disponível",
    screenshotError: "Não foi possível capturar a captura de tela",
    coachMarks: {
      circleTitle: "Veja a Estação",
      circleData:
        "Para ver a estação, mova seu telefone na direção da seta fora do círculo. À medida que você se aproxima, a cor do círculo mudará para verde.",
      compassTitle: "Bússola",
      compassData:
        "Esta bússola mostra a direção que você está olhando e a direção relativa em que você pode ver a estação.",
      infoTitle: "Informações",
      infoData:
        "Este botão abre ou fecha a janela com informações detalhadas sobre o avistamento atual ou próximo e informações ao vivo sobre a estação.",
      trajectoryTitle: "Trajetória da Estação",
      trajectoryData:
        "Este botão liga ou desliga a trajetória da estação na tela. A linha sólida mostra o passado e a linha pontilhada mostra a trajetória futura da estação.",
      arTitle: "Visão AR",
      arData: "Este botão alterna entre as visões AR de tela cheia e parcial.",
      shareTitle: "Compartilhar",
      shareData:
        "Este botão permite que você compartilhe uma captura de tela da visão AR via mensagem de texto, e-mail ou redes sociais.",
      screenshotTitle: "Captura de Tela",
      screenshotData:
        "Este botão permite que você capture uma captura de tela da visão AR para salvar na sua galeria de fotos.",
      videoTitle: "Gravação de Vídeo",
      videoData:
        "Este botão permite que você grave um vídeo da visão AR para capturar os momentos em que você vê a estação.",
    },
    safetyReminder: {
      title: "Atenção: Lembrete de Segurança",
      subtitle1: "Supervisão Parental Aconselhada:",
      body1:
        "Por favor, lembre-se da importância da supervisão parental ao usar a tela AR neste aplicativo. As crianças devem usar este recurso sob a orientação de um adulto responsável para garantir uma experiência segura e apropriada.",
      subtitle2: "Fique Atento ao Seu Entorno:",
      body2:
        "Enquanto você aproveita a experiência de realidade aumentada, sempre permaneça ciente do seu entorno físico. Fique atento a obstáculos, terrenos irregulares ou outros perigos que possam representar um risco à sua segurança. Sua segurança é primordial, então, por favor, exerça cautela e atenção em todos os momentos.",
      home: "Voltar para Início",
      ok: "Entendi",
    },
  },
  settings: {
    header: "Configurações",
    locationSettings: "Configurações de Localização",
    notificationSettings: "Configurações de Notificação",
    termsAndConditions: "Termos e Condições",
    contactUs: "Fale Conosco",
    language: "Idioma",
    timeFormat: "Formato de hora",
    unitsOfMeasurement: "Unidades",
    metric: "Métrico",
    imperial: "Imperial (EUA)",
    calibrateCompass: "Calibração da Bússola",
    calibrateCompassData: {
      instructions:
        "Para calibrar a bússola, gire seu dispositivo várias vezes em um padrão de figura 8.",
      accuracy: "Precisão do Sensor:",
      low: "Baixa",
      medium: "Média",
      high: "Alta",
    },
    tutorials: "Tutoriais",
    tutorialsData: {
      description:
        "Você quer ver os tutoriais passo a passo para as páginas Início e Visão AR mais uma vez?",
      homePage: "Página Inicial",
      arPage: "Visão AR",
    },
    termsAndConditionsData: {
      backButton: "Configurações",
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
      backButton: "Configurações",
      title: "Fale Conosco",
      titlePlaceholder: "Escolha o título",
      commentsPlaceholder: "Insira comentários",
      sendButton: "Enviar",
      contactUsOptions: {
        reportAnIssue: "Relatar um Problema",
        improvementIdeas: "Ideias de Melhoria",
        generalQuestions: "Perguntas Gerais",
        comments: "Comentários",
      },
    },
    notificationSettingsData: {
      backButton: "Configurações",
      notificationTitle: "Configurações de Notificação",
      privacyTitle: "Configurações de Privacidade",
      upcomingLabel: "Próximos Eventos",
      customizeLabel: "Personalizar Notificações",
      upcomingTip: "Desligue para parar de receber notificações de eventos.",
      notifyMeBefore: "NOTIFICAR-ME ANTES",
      turnOffNotifications: "DESLIGAR NOTIFICAÇÕES",
      rangeInputPlaceholder: "Escolha entre 1 a 120 minutos",
      customOption: "Personalizado",
      from: "De",
      until: "Até",
    },
    locationSettingsData: {
      backToSettings: "Configurações",
      goBack: "Voltar",
      generalTitle: "Configurações de Localização",
      cta: "Personalizar notificações para esta localização",
      locationPermission: "Conceder permissão de localização",
      addNewLocation: {
        generalTitleAdd: "Adicionar Nova Localização",
        generalTitleEdit: "Editar Localização",
        confirnModalButton: "Confirmar",
        saveButton: "Salvar Localização",
        searchInputPlaceholder: "Insira cidade, CEP ou endereço",
        nameInputPlaceholder: "Salvar Nome da Localização",
      },
      removeLocation: {
        question: "Tem certeza de que deseja excluir esta localização?",
        cancelButton: "Cancelar",
        removeButton: "Excluir",
      },
    },
    share: "Compartilhar",
    shareLink:
      "Para rastrear a Estação Espacial Internacional via realidade aumentada, baixe o aplicativo móvel NASA Spot The Station em",
    localCalculations: "Cálculos locais",
  },
  resources: {
    header: "Recursos",
    goBack: "Voltar",
    sightings: {
      title: "Próximos Avistamentos",
    },
    news: {
      title: "Notícias da Estação",
      searchPlaceholder: "Pesquisar artigos, eventos, etc...",
      suggestions: "SUGESTÕES",
      searchResults: "Resultados da Pesquisa",
    },
    spotTheStation: {
      title: "Como posso ver a estação?",
    },
    about: {
      title: "Sobre a Estação",
    },
    details: {
      title: "Detalhes da Estação",
    },
    faq: {
      title: "Perguntas Frequentes",
      questions: {
        question1: "1. Por que a Estação Espacial Internacional está lá em cima?",
        answer1:
          "A Estação Espacial Internacional é uma convergência de ciência, tecnologia e inovação humana que permite pesquisas impossíveis na Terra para o benefício da humanidade. Por mais de 24 anos, a NASA tem apoiado uma presença humana contínua dos EUA a bordo da estação, através da qual os astronautas aprenderam a viver e trabalhar no espaço por longos períodos.<br/>" +
          "A estação espacial – que envolve os Estados Unidos, Rússia, Canadá, Japão e os países participantes da ESA (Agência Espacial Europeia) – é uma das colaborações internacionais mais complexas e interdependentes já tentadas. Ela reúne tripulações de voo internacionais e múltiplos provedores de transporte espacial, bem como equipes de suporte distribuídas globalmente, instalações, redes de comunicação e a comunidade científica mundial.<br/>" +
          "Nos últimos 24 anos, a estação espacial se transformou em um laboratório em órbita com capacidades de pesquisa que permitem a cientistas de mais de 109 nações conduzir mais de 4.000 experimentos inovadores em um ambiente de voo espacial extremo e único.<br/>" +
          "A estação espacial serve como um trampolim para o desenvolvimento de uma economia em órbita baixa e os próximos grandes saltos da NASA na exploração, incluindo missões à Lua sob o programa Artemis e, finalmente, a exploração humana de Marte.<br/>" +
          "Saiba mais sobre a Estação Espacial Internacional, suas pesquisas e sua tripulação em:<br/>" +
          "<a href='https://www.nasa.gov/station'>https://www.nasa.gov/station</a>",

        question2: "2. A que velocidade a Estação Espacial Internacional está viajando?",
        answer2:
          "A Estação Espacial Internacional orbita a Terra a cada 90 minutos. Ela viaja a cerca de 28.000 quilômetros por hora, o que permite à tripulação a bordo ver 16 nasceres e pores do sol todos os dias. As tripulações têm ocupado a estação espacial continuamente desde novembro de 2000. Nesse tempo, 280 pessoas de 23 países visitaram o posto orbital, e a estação já circundou a Terra centenas de milhares de vezes.",

        question3: "3. Com que frequência posso esperar ver a Estação Espacial Internacional?",
        answer3:
          "A Estação Espacial Internacional é visível porque reflete a luz solar – pelo mesmo motivo que podemos ver a Lua. No entanto, ao contrário da Lua, a estação espacial não é brilhante o suficiente para ser vista durante o dia. As oportunidades de visualização podem variar de uma vez por mês a várias vezes por semana, à medida que a luz do Sol reflete na estação enquanto ela passa sobre sua localização ao amanhecer e ao anoitecer.",

        question4: "4. O que é o aplicativo Spot the Station?",
        answer4:
          "O aplicativo móvel Spot the Station é um aplicativo oficial da NASA que ajuda os usuários a rastrear e receber notificações para visualizações da Estação Espacial Internacional à medida que ela passa sobre sua respectiva localização. Ele também fornece rastreamento em tempo real, horários de sobrevoo e alertas.",

        question5: "5. Como faço para baixar o aplicativo móvel Spot the Station?",
        answer5:
          "O aplicativo móvel Spot the Station está disponível em dispositivos móveis e tablets iOS e Android.",

        question6:
          "6. Como o aplicativo Spot the Station me notifica sobre as próximas oportunidades de visualização da Estação Espacial Internacional?",
        answer6:
          "O aplicativo Spot the Station envia notificações push para alertar os usuários sobre as próximas passagens da Estação Espacial Internacional. Os usuários devem garantir que as permissões de notificação do aplicativo estejam ativadas nas configurações de seu dispositivo.",

        question7: "7. Posso personalizar as notificações no aplicativo Spot the Station?",
        answer7:
          "O aplicativo Spot the Station tem a capacidade de configurar configurações de alerta personalizadas para receber notificações push específicas para a localização e o horário preferido do usuário. As configurações de notificação podem ser encontradas na página de configurações do aplicativo, onde os usuários podem ativar as notificações para todos os eventos futuros ou personalizar as notificações para a localização atualmente selecionada. Os usuários podem personalizar as notificações para outras localizações através das Configurações de Localização.",

        question8: "8. O que devo fazer se não estiver recebendo notificações?",
        answer8:
          "Os usuários devem verificar as preferências de notificação no aplicativo Spot the Station (Configurações de Notificação na página de configurações) para confirmar que o dispositivo está configurado para alertas em uma localização e horário preferidos. Se os usuários ainda não estiverem recebendo alertas, devem garantir que as notificações estejam ativadas nas configurações de seu dispositivo.",

        question9: "9. O aplicativo Spot the Station funciona internacionalmente?",
        answer9:
          "O aplicativo Spot the Station está disponível mundialmente e em vários idiomas, incluindo inglês, holandês, francês, alemão, hindi, italiano, japonês, polonês, português (Brasil), russo, espanhol, turco e ucraniano. O aplicativo fornece informações de visualização para a maioria das localidades habitadas, facilitando a visualização da Estação Espacial Internacional enquanto ela passa sobre quase qualquer lugar.",

        question10: "10. Por que não há oportunidades de visualização para minha localização?",
        answer10:
          "Precisa estar escuro com boa visibilidade em sua localização e a estação espacial precisa estar acima de você para vê-la. Como a órbita da estação espacial a leva ao redor do globo, ela pode passar acima em momentos em que não será visível – seja no meio do dia ou no meio da noite. Spot The Station enviará notificações apenas quando houver oportunidades de ver a Estação Espacial Internacional em sua localização, não toda vez que ela estiver acima.",

        question11: "11. Preciso de um telescópio para ver a Estação Espacial Internacional?",
        answer11:
          "Não, os usuários podem ver a Estação Espacial Internacional a olho nu, não é necessário equipamento adicional.",

        question12:
          "12. A Estação Espacial Internacional aparece e depois desaparece por causa da luz da Lua?",
        answer12:
          "A Estação Espacial Internacional é visível porque reflete a luz solar. Este é o mesmo motivo pelo qual a Lua parece brilhar. Mesmo quando a Lua não está visível, os usuários podem ver a estação.",

        question13: "13. Qual fuso horário é usado para notificações de alerta?",
        answer13:
          "Todo o conteúdo dentro do aplicativo Spot the Station é listado no fuso horário local para a localização selecionada pelo usuário. O aplicativo se ajusta automaticamente ao horário de verão.",

        question14:
          "14. Que informações o aplicativo Spot the Station fornece para cada avistamento?",
        answer14:
          "Para cada avistamento, o aplicativo Spot the Station exibe o horário, a duração da visibilidade, a altura máxima acima do horizonte e as direções onde a Estação Espacial Internacional aparecerá e desaparecerá, ajudando os usuários a localizá-la com precisão no céu.",

        question15:
          "15. Como posso localizar a Estação Espacial Internacional durante uma oportunidade de visualização? O que significam todas essas informações?",
        answer15:
          'O aplicativo Spot the Station fornece uma lista de "Próximos Avistamentos" se os usuários tocarem na "Lista de Próximos Avistamentos" na página inicial.<br/>' +
          "<strong>Data e hora</strong> é quando a oportunidade de visualização começará no fuso horário local. Todas as passagens ocorrerão dentro de algumas horas antes ou depois do nascer ou do pôr do sol. Este é o período de visualização ideal, pois o Sol reflete na Estação Espacial Internacional e contrasta com o céu mais escuro.<br/>" +
          "<strong>Acima do horizonte</strong> é o período máximo de tempo em que a estação é visível antes de cruzar novamente abaixo do horizonte.<br/>" +
          "<strong>Altura máxima</strong> é medida em graus (também conhecida como elevação). Representa a altura da estação em relação ao horizonte no céu noturno. O horizonte está a zero graus, e diretamente acima está a 90 graus. Se os usuários segurarem o punho à distância do braço e o colocarem no horizonte, a parte superior terá cerca de 10 graus de elevação.<br/>" +
          "<strong>Aparece</strong> é a localização no céu onde a estação será visível pela primeira vez. Este valor, assim como a altura máxima, também é medido em graus a partir do horizonte. As letras representam direções da bússola – N é norte, WNW é oeste-noroeste, e assim por diante.<br/>" +
          "<strong>Desaparece</strong> representa onde no céu noturno a estação sairá do campo de visão." +
          "<img src='https://sts-app-resources.s3.us-east-1.amazonaws.com/astro_horizon.png' />",

        question16:
          "16. O cronograma de sobrevoo indica que a Estação Espacial Internacional está aparecendo e desaparecendo da mesma direção, como isso é possível?",
        answer16:
          "O software Spot the Station arredonda direções para as direções cardeais e intercardeais mais próximas. Isso pode resultar em parecer que a Estação Espacial Internacional aparecerá e desaparecerá na mesma direção, mesmo que esteja viajando pelo céu. Isso geralmente acontece em sobrevoos com uma janela de visibilidade curta porque a estação está se movendo rapidamente para dentro (ou para fora) da sombra escura da Terra, onde, da localização do usuário no solo, uma passagem completa pelo céu não pode ser observada.",

        question17:
          "17. Posso ver um mapa ao vivo da localização da Estação Espacial Internacional?",
        answer17:
          "Sim, o aplicativo Spot the Station inclui um mapa em tempo real que mostra a posição atual da Estação Espacial Internacional enquanto ela orbita a Terra, dando aos usuários uma referência visual para acompanhar seu progresso.",

        question18: "18. O que é o recurso de realidade aumentada no aplicativo Spot the Station?",
        answer18:
          "O recurso de realidade aumentada no aplicativo Spot the Station permite que os usuários vejam uma sobreposição virtual do caminho da Estação Espacial Internacional no céu. Este recurso ajuda os usuários a localizar a estação com mais precisão, alinhando seu dispositivo com a posição em tempo real da estação.",

        question19:
          "19. Como acesso o recurso de realidade aumentada no aplicativo Spot the Station?",
        answer19:
          'Para acessar o recurso de realidade aumentada, abra o aplicativo Spot the Station e navegue até a opção "Visualização AR" no menu inferior. Siga as instruções na tela para alinhar a câmera do dispositivo com o céu, onde o aplicativo exibirá uma sobreposição virtual indicando a posição e a trajetória da Estação Espacial Internacional.',

        question20:
          "20. Preciso de um dispositivo ou software específico para usar o recurso de realidade aumentada?",
        answer20:
          "O recurso de realidade aumentada do Spot the Station requer um dispositivo que possa determinar sua orientação no espaço 3D. Ele requer suporte de hardware específico, como um giroscópio ou coprocessador de movimento. Dispositivos mais antigos ou de baixo custo podem não suportar essa funcionalidade.",

        question21: "21. Como funciona o recurso de realidade aumentada?",
        answer21:
          "Usando a câmera e os sensores do dispositivo, o recurso de realidade aumentada do Spot the Station sobrepõe a localização da Estação Espacial Internacional no céu na tela, ajustando-se em tempo real à medida que o usuário move o dispositivo. O aplicativo guia os usuários a apontar a câmera do dispositivo na direção correta e mostra onde a estação aparecerá e desaparecerá.",

        question22: "22. Posso usar o recurso de realidade aumentada durante o dia e a noite?",
        answer22:
          "Sim, o recurso de realidade aumentada dentro do aplicativo Spot the Station está disponível durante o dia e a noite; no entanto, a melhor experiência de visualização é geralmente durante o crepúsculo ou à noite, quando a Estação Espacial Internacional é visível a olho nu. A sobreposição de realidade aumentada funcionará independentemente das condições de luz, mas as oportunidades de visualização reais dependem da visibilidade.",

        question23:
          "23. A sobreposição de realidade aumentada é precisa para todas as localizações?",
        answer23:
          "Sim, o recurso de realidade aumentada dentro do aplicativo Spot the Station é projetado para fornecer informações de posição precisas com base na localização GPS do dispositivo. No entanto, a precisão pode variar ligeiramente dependendo da calibração da bússola e dos sensores do dispositivo. Se os usuários notarem discrepâncias, recalibre a bússola do dispositivo através das configurações.",

        question24:
          "24. O recurso de realidade aumentada pode ajudar com tempos de avistamento exatos?",
        answer24:
          "O recurso de realidade aumentada dentro do aplicativo Spot the Station guia visualmente os usuários para localizar a Estação Espacial Internacional no momento exato em que ela aparece no céu. Juntamente com os alertas do aplicativo, ele melhora a capacidade de ver a estação, fornecendo uma direção visual ao vivo e um indicador de altura para rastreá-la com precisão.",

        question25: "25. Há dicas para otimizar minha experiência de realidade aumentada?",
        answer25:
          "Para a melhor experiência de realidade aumentada no aplicativo Spot the Station, use o recurso em uma área aberta com uma visão clara do céu. Evite obstruções como prédios altos ou árvores, pois podem bloquear a visibilidade. Calibre a bússola do dispositivo e certifique-se de que os serviços de localização e permissões da câmera estejam ativados para um funcionamento suave.",

        question26:
          "26. O recurso de realidade aumentada está disponível em dispositivos iOS e Android?",
        answer26:
          "Sim, o recurso de realidade aumentada do aplicativo Spot the Station está disponível em dispositivos móveis e tablets iOS e Android, desde que seu dispositivo atenda aos requisitos de hardware.",

        question27: "27. O aplicativo Spot the Station funciona offline?",
        answer27:
          "Algumas funcionalidades básicas, como acessar horários de oportunidades de visualização previamente baixados ou receber notificações agendadas, podem funcionar offline. No entanto, recursos que exigem dados em tempo real, como rastreamento, requerem serviço celular ou conexão com a internet.",

        question28: "28. Há requisitos especiais para usar o aplicativo Spot the Station?",
        answer28:
          "O aplicativo Spot the Station requer serviço celular ativo ou conexão com a internet para rastreamento em tempo real e alertas. Além disso, para informações específicas de localização, certifique-se de que os serviços de localização do dispositivo estejam ativados para o aplicativo.",

        question29: "29. O aplicativo Spot the Station é gratuito para usar?",
        answer29:
          "Sim, o aplicativo Spot the Station é gratuito para baixar e usar, sem compras dentro do aplicativo ou assinaturas.",

        question30:
          "30. Com quem posso entrar em contato para suporte ao aplicativo Spot the Station?",
        answer30:
          "Para suporte com o aplicativo Spot the Station, entre em contato através da opção de feedback do aplicativo ou <a href='mailto:hq-spotthestation@mail.nasa.gov'>envie um e-mail para a equipe Spot the Station</a>.",
      },
    },
    astronauts: {
      title: "Quem está na Estação agora?",
      number: "Número de pessoas:",
    },
    live: {
      title: "Transmissão ao Vivo",
      description:
        "Atualmente, um vídeo ao vivo da Terra está sendo transmitido de uma câmera HD externa montada na ISS. A câmera está voltada para a Terra, com um painel solar ocasional passando pela visão.",
    },
    tour: {
      title: "Tour Virtual",
    },
    videos: {
      title: "Vídeos da Estação",
    },
    gallery: {
      title: "Galeria",
    },
    earthScience: { title: "Recursos de Dados de Ciências da Terra" },
  },
}

export default ptBR
export type Translations = typeof ptBR
