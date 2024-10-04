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
