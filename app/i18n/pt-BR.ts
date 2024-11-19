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
    body: "Para usar este recurso, você precisa conceder permissão para acessar a galeria.",
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
    body: "Obrigado por nos contatar. Recebemos sua mensagem e processaremos sua solicitação. Observe que este aplicativo não coleta dados do usuário, então não podemos responder a todas as mensagens individualmente.",
    dismiss: "Dispensar",
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
      subTitle: "A Estação está passando acima de você em",
    },
    before: {
      titleOne: "Veja a Estação em",
      titleTwo: "minutos!",
      subTitleOne: "A Estação está passando acima de você em",
      subTitleTwo: "minutos às",
    },
  },
  units: {
    minute: "min",
    kilometer: "km",
    kilogram: "kg",
    month: "mês",
    metersPerSecond: "M/S",
    time: "T",
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
      firstTimeHead: "LISTA DE PRÓXIMOS AVISTAMENTOS",
      secondTimeHead: "CONTAGEM REGRESSIVA",
      timezone: "Fuso Horário",
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
      title: "Próximos Avistamentos",
      sightings: "Avistamentos",
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
      longerThan2: "2 minutos ou mais",
      empty:
        "Não há avistamentos potenciais da Estação para esta localização de {{start}} até {{end}}.",
      shareTitle: "A Estação está passando acima de {{location}} em {{date}}",
      shareLink:
        "Para explorar mais e rastrear a estação via realidade aumentada, baixe o aplicativo em",
      coach: {
        title: "Descrição dos Ícones",
        moon: "Será noite na localização selecionada quando a Estação estiver acima do horizonte.",
        sunset:
          "Haverá crepúsculo na localização selecionada quando a Estação estiver acima do horizonte.",
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
      dimensionsValue: "109m de largura x 73m de comprimento x 14m de altura",
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
        question1: "1. Por que a Estação Espacial está lá em cima?",
        answer1:
          "A Estação Espacial Internacional é o único laboratório de microgravidade da Terra. Esta plataforma do tamanho de um campo de futebol abriga uma infinidade de experimentos científicos e tecnológicos que são continuamente conduzidos por membros da tripulação ou são automatizados. A pesquisa a bordo do laboratório orbital traz benefícios para a vida na Terra, bem como para a futura exploração espacial. A Estação Espacial serve como um campo de testes para tecnologias e nos permite estudar os impactos dos voos espaciais de longa duração nos seres humanos, apoiando a missão da NASA de expandir a presença humana no espaço. Para saber mais sobre a pesquisa que acontece na Estação Espacial e oportunidades de conduzir sua ciência lá, por favor <a href='https://www.nasa.gov/international-space-station/'>clique aqui</a>.",
        question2: "2. Quão rápido a Estação Espacial está viajando?",
        answer2:
          "A Estação orbita a Terra a cada 90 minutos. Ela viaja a cerca de 17.500 milhas (28.000 km) por hora, o que dá à tripulação 16 nasceres e pores do sol todos os dias. Nos mais de 15 anos em que as pessoas têm vivido a bordo, a Estação já circundou a Terra dezenas de milhares de vezes. Você pode ver mais fatos sobre a Estação nesta <a href='https://www.nasa.gov/international-space-station/space-station-facts-and-figures/'>página da web</a>.",
        question3: "3. Com que frequência posso esperar ver a Estação Espacial?",
        answer3:
          "A Estação Espacial é visível porque reflete a luz do Sol - pelo mesmo motivo que podemos ver a Lua. No entanto, ao contrário da Lua, a Estação Espacial não é brilhante o suficiente para ser vista durante o dia. Ela só pode ser vista quando é amanhecer ou anoitecer na sua localização. Assim, pode variar de uma oportunidade de avistamento por mês a várias por semana, já que precisa estar escuro onde você está, e a Estação Espacial precisa estar passando por cima.",
        question4: "4. O que é o aplicativo móvel Spot the Station?",
        answer4:
          "O aplicativo móvel Spot the Station é um aplicativo oficial da NASA que ajuda os usuários a rastrear e receber notificações de avistamentos da Estação Espacial Internacional enquanto ela passa sobre sua localização. Ele fornece rastreamento em tempo real, horários de avistamento e alertas.",
        question5: "5. Como faço para baixar o aplicativo móvel Spot the Station?",
        answer5:
          "Você pode baixar o aplicativo tanto na Apple App Store <a href='https://apps.apple.com/us/app/spot-the-station/id6449235044'>aqui</a> quanto na Google Play Store <a href='https://play.google.com/store/apps/details?id=gov.nasa.hq.SpotTheStation&hl=en_US&pli=1'>aqui</a>.",
        question6: "6. Como o aplicativo me notifica sobre avistamentos futuros da Estação?",
        answer6:
          "O aplicativo envia notificações push para alertá-lo sobre avistamentos futuros da Estação, incluindo a data, hora, duração e condições de visibilidade específicas para sua localização. Certifique-se de que você ativou as permissões de notificações para este aplicativo nas configurações do seu telefone.",
        question7: "7. Posso personalizar as notificações no aplicativo?",
        answer7:
          "Sim, você pode personalizar as configurações de alerta no aplicativo para receber notificações com base na sua localização preferida, condições de avistamento e até mesmo horários específicos que funcionem melhor para você.",
        question8: "8. O que devo fazer se não estiver recebendo notificações?",
        answer8:
          "Se você não estiver recebendo alertas, certifique-se de que as notificações estão ativadas nas configurações do seu dispositivo. Além disso, verifique as preferências de notificação do aplicativo para confirmar que você configurou alertas para sua localização escolhida e horário preferido.",
        question9: "9. O aplicativo funciona internacionalmente?",
        answer9:
          "Sim, o aplicativo Spot the Station está disponível em todo o mundo e fornece informações de avistamento para a maioria das localidades habitadas, facilitando a visualização da Estação de quase qualquer lugar.",
        question10: "10. Por que não há oportunidades de avistamento para minha localização?",
        answer10:
          "Precisa estar escuro onde você está e a Estação Espacial precisa estar acima para que você possa vê-la. Como a órbita da Estação Espacial a leva ao redor do globo, ela pode passar por você em momentos em que não será visível - seja no meio do dia ou no meio da noite. Spot The Station enviará notificações apenas quando você tiver uma oportunidade de ver a Estação Espacial, não toda vez que ela estiver acima.",
        question11: "11. Preciso de um telescópio para ver a Estação Espacial?",
        answer11:
          "Não, você pode ver a Estação Espacial a olho nu, sem necessidade de equipamentos.",
        question12: "12. A Estação aparece e depois desaparece por causa da luz da Lua?",
        answer12:
          "A Estação Espacial é visível porque está refletindo a luz do Sol. Este é o mesmo motivo pelo qual a Lua parece brilhar. Mesmo quando a Lua ainda não nasceu, você ainda poderá ver a Estação Espacial.",
        question13: "13. Qual fuso horário é usado para notificações de alerta?",
        answer13:
          "Todas as informações do Spot The Station são listadas no fuso horário local para a localização selecionada. Spot The Station ajusta-se automaticamente para o horário de verão.",
        question14: "14. Que informações o aplicativo fornece para cada avistamento?",
        answer14:
          "Para cada avistamento, o aplicativo exibe o horário, a duração da visibilidade, a altura máxima e as direções onde a Estação aparecerá e desaparecerá, ajudando você a localizá-la com precisão no céu.",
        question15:
          "15. Como posso avistar a Estação durante cada avistamento? O que significam todas essas informações de avistamento?",
        answer15:
          "O aplicativo fornece uma lista de Avistamentos Futuros se você tocar na Lista de Próximos Avistamentos na página inicial.<br/><strong>Data e hora</strong> é quando a oportunidade de avistamento começará no seu fuso horário local. Todos os avistamentos ocorrerão dentro de algumas horas antes ou depois do nascer ou pôr do sol. Este é o período de visualização ideal, pois o sol reflete na Estação Espacial e contrasta com o céu mais escuro.<br/><strong>Acima do horizonte</strong> é o período máximo de tempo em que a Estação Espacial é visível antes de cruzar novamente abaixo do horizonte.<br/><strong>Altura máxima</strong> é medida em graus (também conhecida como elevação). Representa a altura da Estação Espacial a partir do horizonte no céu noturno. O horizonte está a zero graus, e diretamente acima está a noventa graus. Se você segurar o punho à distância do braço e colocar o punho no horizonte, a parte superior estará a cerca de 10 graus.<br/><strong>Aparece</strong> é a localização no céu onde a Estação será visível pela primeira vez. Este valor, assim como a altura máxima, também é medido em graus a partir do horizonte. As letras representam direções de bússola - N é norte, WNW é oeste-noroeste, e assim por diante.<br/><strong>Desaparece</strong> representa onde no céu noturno a Estação Espacial Internacional sairá do seu campo de visão.<img src='https://spotthestation.nasa.gov/images/astro_horizon.png' />",
        question16:
          "16. O cronograma de sobrevoo indica que a Estação Espacial está aparecendo e desaparecendo na mesma direção, como isso é possível? Ex.: - Hora: Seg 15 Jul 11:57 PM, Visível: 2 min, Altura Máxima: 51°, Aparece: 51° acima de ENE, Desaparece: 11° acima de ENE",
        answer16:
          "O software Spot the Station arredonda direções para as direções cardeais e intercardeais mais próximas. Isso pode resultar em parecer que a Estação aparecerá e desaparecerá na mesma direção, mesmo que esteja se movendo pelo céu. Isso geralmente acontece em sobrevoos com uma janela de visibilidade curta porque a Estação está se movendo rapidamente para dentro (ou para fora) da sombra escura da Terra, onde, de nossa localização no solo, não podemos observar sua passagem completa pelo céu.",
        question17: "17. Posso ver um mapa ao vivo da localização da Estação?",
        answer17:
          "Sim, o aplicativo inclui um mapa em tempo real mostrando a posição atual da Estação enquanto ela orbita a Terra, dando a você uma referência visual para rastrear seu progresso.",
        question18: "18. O que é o recurso AR no aplicativo Spot the Station?",
        answer18:
          "O recurso de Realidade Aumentada (AR) no aplicativo Spot the Station permite que os usuários visualizem uma sobreposição virtual do caminho da Estação Espacial Internacional no céu. Este recurso ajuda os usuários a localizar a Estação com mais precisão, alinhando seu dispositivo com a posição em tempo real da Estação.",
        question19: "19. Como acesso o recurso AR no aplicativo?",
        answer19:
          "Para acessar o recurso AR, abra o aplicativo e navegue até a opção AR View no menu inferior. Siga as instruções na tela para alinhar a câmera do seu dispositivo com o céu, onde o aplicativo exibirá uma sobreposição virtual indicando a posição e a trajetória da Estação.",
        question20: "20. Preciso de um dispositivo ou software específico para usar o recurso AR?",
        answer20:
          "O recurso AR requer um dispositivo que possa determinar sua orientação no espaço 3D. Ele requer suporte de hardware específico, como um giroscópio ou coprocessador de movimento. Dispositivos mais antigos ou de baixo custo podem não suportar essa funcionalidade.",
        question21: "21. Como funciona o recurso AR?",
        answer21:
          "Usando a câmera e os sensores do seu dispositivo, o recurso AR sobrepõe a localização da Estação no céu na sua tela, ajustando-se em tempo real à medida que você move seu dispositivo. O aplicativo guia você para apontar a câmera na direção correta e mostra onde a Estação aparecerá e desaparecerá.",
        question22: "22. Posso usar o recurso AR tanto de dia quanto à noite?",
        answer22:
          "Sim, você pode usar o recurso AR tanto de dia quanto à noite; no entanto, a melhor experiência é geralmente durante o crepúsculo ou à noite, quando a Estação é visível a olho nu. A sobreposição AR funcionará independentemente das condições de luz, mas avistamentos reais dependem da visibilidade.",
        question23: "23. A sobreposição AR é precisa para todas as localizações?",
        answer23:
          "Sim, o recurso AR é projetado para fornecer informações de posição precisas com base na sua localização GPS. No entanto, a precisão pode variar ligeiramente dependendo da calibração da bússola e dos sensores do seu dispositivo. Se você notar discrepâncias, recalibre a bússola do seu dispositivo através das Configurações.",
        question24: "24. O recurso AR pode ajudar com horários exatos de avistamento?",
        answer24:
          "O recurso AR guia visualmente você para localizar a Estação no momento exato em que ela aparece no céu. Juntamente com os alertas de avistamento do aplicativo, ele melhora sua capacidade de ver a Estação, fornecendo uma direção visual ao vivo e um indicador de altura para rastreá-la com precisão.",
        question25: "25. Existem dicas para otimizar minha experiência com AR?",
        answer25:
          "Para a melhor experiência com AR, use o recurso em uma área aberta com uma visão clara do céu. Evite obstruções como prédios altos ou árvores, pois podem bloquear a visibilidade. Calibre a bússola do seu dispositivo e certifique-se de que os serviços de localização e permissões de câmera estão ativados para um funcionamento suave.",
        question26: "26. O recurso AR está disponível tanto no Android quanto no iOS?",
        answer26:
          "Sim, o recurso AR está disponível nas versões iOS e Android do aplicativo, desde que seu dispositivo atenda aos requisitos de hardware.",
        question27: "27. O aplicativo funciona offline?",
        answer27:
          "Algumas funcionalidades básicas, como acessar horários de avistamento previamente baixados ou receber notificações agendadas, podem funcionar offline. No entanto, recursos que exigem dados em tempo real, como rastreamento, exigem uma conexão com a internet.",
        question28: "28. Existem requisitos especiais para usar o aplicativo?",
        answer28:
          "O aplicativo requer uma conexão ativa com a internet para rastreamento em tempo real e alertas. Além disso, para informações específicas de localização, certifique-se de que os serviços de localização do seu dispositivo estão ativados para o aplicativo.",
        question29: "29. O aplicativo é gratuito para usar?",
        answer29:
          "Sim, o aplicativo Spot the Station é gratuito para baixar e usar, sem compras no aplicativo ou assinaturas.",
        question30: "30. Com quem posso entrar em contato para suporte ao aplicativo?",
        answer30:
          "Para suporte com o aplicativo Spot the Station, visite a página de suporte da NASA ou entre em contato através da opção de feedback dentro do aplicativo.",
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
  },
}

export default ptBR
export type Translations = typeof ptBR
