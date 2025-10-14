const hi = {
  name: "हिन्दी",
  errorScreen: {
    title: "कुछ गलत हो गया!",
    friendlySubtitle:
      "यह वह स्क्रीन है जिसे आपके उपयोगकर्ता उत्पादन में देखेंगे जब कोई त्रुटि फेंक दी जाती है।आप इस संदेश को अनुकूलित करना चाहते हैं (`ऐप/i18n/en.ts`` में स्थित) और शायद लेआउट के साथ -साथ (` ऐप/स्क्रीन/एरर्सस्क्रीन`)।यदि आप इसे पूरी तरह से हटाना चाहते हैं, तो <ErrorBoundary> घटक के लिए `app/app.tsx` की जाँच करें।",
    reset: "रीसेट ऐप",
  },
  snackBar: {
    ok: "ठीक",
    dismiss: "नकार देना",
    sightingsSaved: "अंतिम सहेजे गए स्थान के लिए दृष्टि भरी हुई!",
    defaultError: "कुछ त्रुटि हुई",
    locationSaved: "स्थान बचाया",
    locationExist: "इस शीर्षक के साथ स्थान पहले से मौजूद है!",
    openSettingsError: "सेटिंग्स नहीं खोल सकते!",
    shared: "सफलतापूर्वक साझा किया!",
    savedToGallery: "गैलरी के लिए बचाया",
  },
  outdatedModal: {
    title: "अपडेट उपलब्ध है",
    body: "ऐप का नया संस्करण उपलब्ध है! नया संस्करण डाउनलोड करें",
    buttonNegative: "रद्द करें",
    buttonPositive: "डाउनलोड करें",
  },
  permissionsModal: {
    close: "बंद करना",
    openSettings: "खुली सेटिंग",
    bodyGallery:
      "इस सुविधा का उपयोग करने के लिए, आपको गैलरी तक पहुंचने के लिए अनुमति देने की आवश्यकता है।",
    bodyCalendar: "इस सुविधा का उपयोग करने के लिए, आपको कैलेंडर तक पहुँच की अनुमति देनी होगी।",
  },
  fontSizeModal: {
    title: "फ़ॉन्ट आकार बहुत बड़ा है",
    body1:
      "ऐसा लगता है कि आपके डिवाइस का फ़ॉन्ट आकार बहुत बड़ा सेट है। इससे ऐप में कुछ आवश्यक जानकारी कट सकती है या गलत तरीके से प्रदर्शित हो सकती है।",
    bodyAndroid:
      "अपने फ़ॉन्ट आकार को समायोजित करने के लिए, सेटिंग्स → डिस्प्ले → फ़ॉन्ट आकार और शैली → स्लाइडर को छोटे आकार में समायोजित करें।",
    bodyIOS:
      "अपने फ़ॉन्ट आकार को समायोजित करने के लिए, सेटिंग्स → एक्सेसिबिलिटी → डिस्प्ले और टेक्स्ट साइज → बड़ा टेक्स्ट → स्लाइडर को छोटे आकार में समायोजित करें।",
    cancel: "रद्द करें",
    settings: "सेटिंग्स पर जाएं",
  },
  permissionsAndroid: {
    title: "वीडियो सहेजने की अनुमति",
    message: "इस ऐप को आपके डिवाइस पर वीडियो सहेजने की अनुमति की आवश्यकता है।",
    buttonNeutral: "मुझसे बाद में पूछें",
    buttonNegative: "रद्द करना",
    buttonPositive: "ठीक",
    alarmPermissionTitle: "अनुमति आवश्यक",
    alarmPermissionMessage:
      "कृपया आगामी दृश्यों के बारे में सूचनाएँ प्राप्त करने के लिए अगले स्क्रीन पर अलार्म और अनुस्मारक अनुमति प्रदान करें।",
  },
  thanksModal: {
    body: "हमसे संपर्क करने के लिए धन्यवाद। हमें आपका संदेश प्राप्त हो गया है और हम आपके अनुरोध पर कार्रवाई करेंगे। कृपया ध्यान दें कि यह एप्लिकेशन उपयोगकर्ता डेटा एकत्र नहीं करता है, इसलिए हम सभी संदेशों का व्यक्तिगत रूप से जवाब नहीं दे सकते हैं। कृपया अक्सर पूछे जाने वाले प्रश्न पृष्ठ पर जाएं यह देखने के लिए कि आपके प्रश्न का उत्तर है या नहीं।",
    dismiss: "नकार देना",
    faq: "अक्सर पूछे जाने वाले प्रश्न",
  },
  privacy: {
    title: "अपने स्थान का उपयोग करें",
    body: "हम आपके वर्तमान स्थान में आगामी दृष्टि की गणना करने के लिए स्थान डेटा का उपयोग करते हैं।कृपया इस कार्यक्षमता को सक्षम करने के लिए स्थान अनुमतियाँ प्रदान करें।",
    agree: "सहमत",
    skip: "छोडना",
    policy: "गोपनीयता नीति",
  },
  notifications: {
    push: {
      title: "अब स्टेशन को स्पॉट करें!",
      subTitleIos: "स्टेशन आपके ऊपर से गुजर रहा है",
      subTitleAndroid: "स्टेशन अब आपके ऊपर से गुजर रहा है ({{time}}) पर",
    },
    before: {
      title: "{{amount}} {{units}} में स्टेशन को देखें!",
      subTitleIos: "स्टेशन {{amount}} {{units}} में आपके ऊपर से गुजरेगा {{location}} पर",
      subTitleAndroid:
        "स्टेशन {{amount}} {{units}} ({{time}}) में आपके ऊपर से गुजरेगा {{location}} पर",
      minutes: "मिनटों",
      hours: "घंटों",
    },
    timeLeft: "शेष समय",
  },
  units: {
    minute: "मिन",
    kilometer: "किमी",
    kilogram: "किलोग्राम",
    month: "महीना",
    metersPerSecond: "एम/एस",
    time: "T",
    hour: "घंटा",
    mile: "mi",
    foot: "ft",
    meter: "m",
    pound: "lbs",
    milesPerHour: "mph",
  },
  tabNavigator: {
    homeTab: "घर",
    issViewTab: "एआर व्यू",
    issNowTab: "ट्रैकर",
    resourcesTab: "संसाधन",
    settingsTab: "समायोजन",
  },
  onboarding: {
    splash: {
      title: "स्टेशन को\nस्पॉट करें",
      subTitle: "आकाश में टकटकी लगाएं और अंतर्राष्ट्रीय अंतरिक्ष स्टेशन देखें",
    },
    completeProfile: {
      notification: {
        title: "अधिसूचना सेटिंग्स",
        label: "पुश नोटिफिकेशन अलर्ट प्राप्त करें",
        tip: "जब अंतरिक्ष स्टेशन आपके स्थान पर आ रहा है तो अलर्ट प्राप्त करें।",
        nextButton: "अगला",
      },
      location: {
        title: "आपका स्थान",
        subtitle:
          "कृपया ऐप को अपने स्थान का स्वचालित रूप से पता लगाने की अनुमति दें, या अपना स्थान मैन्युअल रूप से प्रदान करें।",
        detectButton: "मेरे स्थान का पता लगाएं",
        orLabel: "या",
        selectLocation: "अपनी स्थिति दर्ज़ करें",
        detecting: "स्थान का पता लगाना ...",
        doneButton: "पूर्ण",
        serviceAlertTitle: "स्थान सेवाएँ अक्षम",
        serviceAlertBody: "कृपया जारी रखने के लिए अपनी स्थान सेवाओं को सक्षम करें।",
        permissionAlertTitle: "अनुमति नहीं दी गई",
        permissionAlertBody:
          "हम आपके वर्तमान स्थान में आगामी दृष्टि की गणना करने के लिए स्थान डेटा का उपयोग करते हैं।कृपया इस कार्यक्षमता को सक्षम करने के लिए स्थान अनुमतियाँ प्रदान करें।",
      },
    },
  },
  homeScreen: {
    initLoader: {
      message: "आईएसएस डेटा लोड हो रहा है ... इसे पूरा होने में एक क्षण लग सकता है।",
      trajectoryError:
        "आईएसएस प्रक्षेपवक्र डेटा वर्तमान में सर्वर रखरखाव के कारण अनुपलब्ध है।कृपया कुछ देर बाद फिर से जांच करें।",
      noNetwork:
        "स्टेशन का त्राजेक्टरी डेटा वर्तमान में किसी भी कनेक्शन के कारण उपलब्ध नहीं है।कृपया कुछ देर बाद फिर से जांच करें।",
    },
    header: {
      firstTimeHead: "अगली नजर",
      secondTimeHead: "उल्टी गिनती",
      timezone: "समय क्षेत्र",
      opportunities: "नजर के अवसर",
    },
    selectLocation: {
      title: "स्थान चुनें",
      inputPlaceholder: "शहर, पिन द्वारा खोज स्थान ...",
      current: "वर्तमान स्थान",
      saved: "बचाए गए स्थान",
      nearby: "आस -पास के स्थान",
      search: "खोज के परिणाम",
      cta: "इस स्थान के लिए सूचनाएं अनुकूलित करें",
      actionTitle: "चेतावनी",
      refresh: "ताज़ा करना",
    },
    selectSightings: {
      upcomingSightings: "आगामी दृष्टि",
      pastSightings: "पिछले दर्शन",
      selectMessage: "उन घटनाओं का चयन करें जिनके लिए आप अधिसूचित होना चाहते हैं।",
      switch: "इस स्थान पर सभी आगामी घटनाओं के लिए मुझे सूचित करें।",
      aboveHorizon: "क्षितिज के ऊपर",
      maxHeight: "की अधिकतम ऊचाई",
      today: "आज",
      tomorrow: "आने वाला कल",
      appears: "प्रकट होता है",
      disappears: "गायब",
      all: "सभी",
      timeOfDay: "अपना समय",
      night: "रात",
      twilight: "सांझ",
      duration: "अवधि",
      shorterThan2: "2 मिनट से कम",
      between2And4: "2 से 4 मिनट के बीच",
      longerThan4: "4 मिनट और अधिक",
      empty: "इस स्थान पर {{start}} से {{end}} तक आईएसएस देखे जाने की कोई संभावना नहीं है।",
      shareTitle: "{{date}} को {{location}} के ऊपर से स्टेशन गुजर रहा है",
      shareAllTitle: "{{location}} के ऊपर से स्टेशन गुजर रही है:",
      shareLink:
        "और अधिक जानने और संवर्धित वास्तविकता के माध्यम से स्टेशन को ट्रैक करने के लिए, ऐप डाउनलोड करें",
      calendarEventTitle: "{{location}} में स्टेशन को देखें!",
      calendarSuccess: "कैलेंडर इवेंट सफलतापूर्वक बनाया गया",
      calendarError: "कैलेंडर इवेंट बनाने में असमर्थ",
      coach: {
        title: "प्रतीक विवरण",
        moon: "यह चयनित स्थान पर रात का समय होगा जब आईएसएस क्षितिज से ऊपर होगा।",
        sunset: "चयनित स्थान पर गोधूलि होगा जब आईएसएस क्षितिज से ऊपर होगा।",
      },
      cloudCover: {
        title: "बादल आवरण",
        any: "कोई भी",
        low: "कम (<25%)",
        medium: "मध्यम (25-50%)",
      },
      shareAll: "दृश्य सूची साझा करें",
      compass: {
        N: "उ",
        NNE: "उपू",
        NE: "पूउ",
        ENE: "पूपू",
        E: "पू",
        ESE: "पूदपू",
        SE: "दपू",
        SSE: "ददपू",
        S: "द",
        SSW: "दपद",
        SW: "पदपू",
        WSW: "पपद",
        W: "प",
        WNW: "पउप",
        NW: "उप",
        NNW: "उउप",
      },
    },
    coachMarks: {
      skip: "दौरे को छोड़ें",
      next: "अगला",
      finish: "खत्म करना",
      dismiss: "नकार देना",
      locationTitle: "स्थान बदलें",
      locationData: "आप यहां से सीधे अपने स्थान को एक अलग एक में चुन सकते हैं या बदल सकते हैं।",
      sightingsTitle: "अगली दृष्टि और उलटी गिनती",
      sightingsData:
        "यह खंड आपको अपने चयनित स्थान के पास अगले आगामी आईएसएस के लिए तारीख और एक उलटी गिनती टाइमर दिखाता है।आप आगामी दृश्य की पूरी सूची देखने के लिए अगले दृश्य बॉक्स पर टैप कर सकते हैं।",
      globeTitle: "इंटरएक्टिव अर्थ",
      globeData:
        "आप स्क्रीन पर स्वाइप करके आईएसएस की वास्तविक समय की स्थिति देख सकते हैं।यह आपको पृथ्वी के साथ बातचीत करने और वास्तविक समय में आईएसएस के स्थान को ट्रैक करने की अनुमति देता है।",
      mapTitle: "2 डी मैप व्यू",
      mapData:
        "यह खंड पृथ्वी में रात और दिन के क्षेत्रों के खिलाफ आईएसएस के पूर्ण मार्ग का 2 डी प्रतिनिधित्व दिखाता है।",
      navigationTitle: "मार्गदर्शन",
      navigationData:
        "आप नीचे नेविगेशन मेनू से ऐप की विभिन्न विशेषताओं के माध्यम से ब्राउज़ कर सकते हैं।",
    },
  },
  issView: {
    timeHeader: "उलटी गिनती",
    cameraPermissionText:
      "आपने अपने फोन के कैमरे के उपयोग की अनुमति नहीं दी है।अनुमति देने के लिए यहां क्लिक करें।",
    issCaptured: "इस पल को पकड़ो",
    details: {
      title: "सूचना",
      orbitalSpeed: "परिक्रमा",
      longitude: "देशान्तर",
      latitude: "अक्षांश",
      altitude: "ऊंचाई",
      crewOnboard: "जहाज पर चालक दल की विशिष्ट संख्या",
      launched: "विधानसभा शुरू हुई",
      launchedValue: "20 नवंबर 1998",
      mass: "अनुमानित द्रव्यमान",
      dimensions: "अनुमानित आयाम",
      orbitalPeriod: "कक्षीय अवधि",
      orbitsPerDay: "कक्षाओं/दिन",
      dimensionsValue: "{{width}} चौड़ा x {{length}} लंबा x {{height}} ऊँचा",
      dateTime: "तारीख और समय",
      maxHeight: "अधिकतम ऊँचाई",
      duration: "काल रेखा के ऊपर की अवधि",
      appears: "प्रकट होता है",
      disappears: "गायब होता है",
      distance: "दूरी",
      nextSighting: "अगली दृश्यता",
    },
    arNotSupported: "इस उपकरण पर AR का समर्थन नहीं है",
    noOrientationSensor: "ओरिएंटेशन सेंसर उपलब्ध नहीं है",
    noMagnetometerSensor: "मैग्नेटोमीटर उपलब्ध नहीं है",
    screenshotError: "स्क्रीनशॉट कैप्चर करने में असमर्थ",
    coachMarks: {
      circleTitle: "स्टेशन का पता लगाएं",
      circleData:
        "स्टेशन को पहचानने के लिए, वृत्त के बाहरी तीर की दिशा में अपना फोन ले जाएं। जैसे ही आप उसके पास आते हैं, वृत्त का रंग हरा हो जाएगा।",
      compassTitle: "कंपास",
      compassData:
        "यह कंपास आपको दिखाता है कि आप किस दिशा में देख रहे हैं, और जिस दिशा में आप स्टेशन को पहचान सकते हैं, उसकी सापेक्ष दिशा।",
      infoTitle: "जानकारी",
      infoData:
        "यह टॉगल विंडो को खोलता या बंद करता है जिसमें वर्तमान या अगले आगामी दिखाई देने वाली दृश्यता और स्टेशन के बारे में लाइव जानकारी होती है।",
      trajectoryTitle: "स्टेशन की प्रक्षेपयात्रा",
      trajectoryData:
        "यह टॉगल स्क्रीन पर स्टेशन की प्रक्षेपयात्रा को चालू या बंद करता है। स्थिर रेखा पिछले को दिखाती है और डॉट रेखा भविष्य की प्रक्षेपयात्रा दिखाती है।",
      arTitle: "एआर दृश्य",
      arData: "यह टॉगल पूर्ण स्क्रीन और आंशिक एआर दृश्य के बीच स्विच करता है।",
      shareTitle: "शेयर",
      shareData:
        "इस बटन की सहायता से आप एआर दृश्य की एक स्क्रीनशॉट को टेक्स्ट संदेश, ईमेल या सोशल मीडिया के माध्यम से साझा कर सकते हैं।",
      screenshotTitle: "स्क्रीन कैप्चर",
      screenshotData:
        "इस बटन की सहायता से आप अपनी फोटो गैलरी में सहेजने के लिए एआर दृश्य की एक स्क्रीनशॉट को कैप्चर कर सकते हैं।",
      videoTitle: "वीडियो रिकॉर्डिंग",
      videoData:
        "इस बटन की सहायता से आप एआर दृश्य में स्टेशन को पहचानने के लम्हों को कैप्चर करने के लिए वीडियो रिकॉर्ड कर सकते हैं।",
    },
    safetyReminder: {
      title: "ध्यान दें: सुरक्षा याद दिलाने वाला संदेश",
      subtitle1: "माता-पिता की निगरानी सिफारिश की जाती है:",
      body1:
        "कृपया इस ऐप में एआर स्क्रीन के साथ जुड़ने पर माता-पिता की निगरानी की महत्वता को याद रखें। बच्चों को एक सुरक्षित और उपयुक्त अनुभव सुनिश्चित करने के लिए जिम्मेदार वयस्क के मार्गदर्शन में इस सुविधा का उपयोग करना चाहिए।",
      subtitle2: "अपने आस-पास की चेतावनी रहें:",
      body2:
        "जब आप वृद्धि की वास्तविकता का अनुभव करते हैं, तो हमेशा अपने भौतिक आस-पास के वातावरण के बारे में जागरूक रहें। अवरोधों, अनियमित भूमि या अन्य खतरों के लिए सावधान रहें, जो आपकी सुरक्षा का खतरा प्रस्तुत कर सकते हैं। आपकी सुरक्षा महत्वपूर्ण है, इसलिए कृपया हमेशा सतर्कता और सावधानी बरतें।",
      home: "होम पर वापस जाएं",
      ok: "मैं समझता हूँ",
    },
  },
  settings: {
    header: "समायोजन",
    locationSettings: "स्थान सेटिंग्स",
    notificationSettings: "अधिसूचना सेटिंग्स",
    termsAndConditions: "नियम और शर्तें",
    contactUs: "संपर्क करें",
    language: "भाषा",
    timeFormat: "समय प्रारूप",
    unitsOfMeasurement: "माप की इकाइयाँ",
    metric: "मीट्रिक",
    imperial: "इम्पीरियल (यूएस)",
    calibrateCompass: "कंपास कैलिब्रेशन",
    calibrateCompassData: {
      instructions: "कंपास को कैलिब्रेट करने के लिए, अपने उपकरण को कई बार आठ के पैटर्न में घुमाएं।",
      accuracy: "सेंसर शौध्रता:",
      low: "कम",
      medium: "मध्यम",
      high: "उच्च",
    },
    tutorials: "ट्यूटोरियल्स",
    tutorialsData: {
      description:
        "क्या आप घर की पेज और एआर दृश्य पेज के कदम से कदम ट्यूटोरियल को एक और बार देखना चाहते हैं?",
      homePage: "होम पेज",
      arPage: "एआर दृश्य",
    },
    termsAndConditionsData: {
      backButton: "समायोजन",
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
      backButton: "समायोजन",
      title: "संपर्क करें",
      titlePlaceholder: "शीर्षक चुनें",
      commentsPlaceholder: "इनपुट टिप्पणियाँ",
      sendButton: "भेजना",
      contactUsOptions: {
        reportAnIssue: "मामले की रिपोर्ट करें",
        improvementIdeas: "सुधार विचार",
        generalQuestions: "सामान्य सवाल",
        comments: "टिप्पणियाँ",
      },
    },
    notificationSettingsData: {
      backButton: "समायोजन",
      notificationTitle: "अधिसूचना सेटिंग्स",
      privacyTitle: "गोपनीय सेटिंग",
      upcomingLabel: "आगामी कार्यक्रम",
      customizeLabel: "सूचनाएँ अनुकूलित करें",
      upcomingTip: "घटना सूचना प्राप्त करने से रोकने के लिए बंद करें।",
      notifyMeBefore: "मुझे पहले सूचित करें",
      turnOffNotifications: "सूचनाएं बंद करो",
      rangeInputPlaceholder: "1 से 120 मिनट के बीच चुनें",
      customOption: "कस्टम",
      from: "से",
      until: "जब तक",
    },
    locationSettingsData: {
      backToSettings: "समायोजन",
      goBack: "वापस जाओ",
      generalTitle: "स्थान सेटिंग्स",
      cta: "इस स्थान के लिए सूचनाएं अनुकूलित करें",
      locationPermission: "अनुदान स्थान अनुमति",
      addNewLocation: {
        generalTitleAdd: "नया स्थान जोड़ें",
        generalTitleEdit: "स्थान संपादित करें",
        confirnModalButton: "पुष्टि करना",
        saveButton: "स्थान सहेजें",
        searchInputPlaceholder: "शहर, ज़िप या पता दर्ज करें",
        nameInputPlaceholder: "स्थान का नाम सहेजें",
      },
      removeLocation: {
        question: "क्या आप इस स्थान को हटाना सुनिश्चित कर रहे हैं?",
        cancelButton: "रद्द करना",
        removeButton: "मिटाना",
      },
    },
    share: "साझा करें",
    shareLink:
      "ऑगमेंटेड रियलिटी के माध्यम से अंतर्राष्ट्रीय अंतरिक्ष स्टेशन को ट्रैक करने के लिए, NASA स्पॉट द स्टेशन मोबाइल ऐप डाउनलोड करें",
    localCalculations: "स्थानीय गणना",
  },
  resources: {
    header: "संसाधन",
    goBack: "वापस जाओ",
    sightings: {
      title: "आगामी दृष्टि",
    },
    news: {
      title: "स्टेशन समाचार",
      searchPlaceholder: "लेख, घटनाएँ आदि खोजें...",
      suggestions: "सुझाव",
      searchResults: "खोज परिणाम",
    },
    spotTheStation: {
      title: "स्टेशन को कैसे देखें?",
    },
    about: {
      title: "स्टेशन के बारे में",
    },
    details: {
      title: "स्टेशन विवरण",
    },
    faq: {
      title: "अक्सर पूछे जाने वाले प्रश्न",
      questions: {
        question1: "1. अंतर्राष्ट्रीय अंतरिक्ष स्टेशन वहां क्यों है?",
        answer1:
          "अंतर्राष्ट्रीय अंतरिक्ष स्टेशन विज्ञान, प्रौद्योगिकी और मानव नवाचार का एक संगम है जो मानवता के लाभ के लिए पृथ्वी पर असंभव अनुसंधान को सक्षम बनाता है। 24 से अधिक वर्षों से, नासा ने स्टेशन पर एक निरंतर अमेरिकी मानव उपस्थिति का समर्थन किया है, जिसके माध्यम से अंतरिक्ष यात्री लंबे समय तक अंतरिक्ष में रहने और काम करने का तरीका सीख चुके हैं।<br/>" +
          "अंतरिक्ष स्टेशन – जिसमें संयुक्त राज्य अमेरिका, रूस, कनाडा, जापान और ईएसए (यूरोपीय अंतरिक्ष एजेंसी) के भाग लेने वाले देश शामिल हैं – अब तक के सबसे जटिल, परस्पर निर्भर अंतरराष्ट्रीय सहयोगों में से एक है। यह अंतरराष्ट्रीय उड़ान दलों और कई अंतरिक्ष परिवहन प्रदाताओं के साथ-साथ वैश्विक रूप से वितरित समर्थन टीमों, सुविधाओं, संचार नेटवर्क और विश्वव्यापी वैज्ञानिक समुदाय को एक साथ लाता है।<br/>" +
          "पिछले 24 वर्षों में, अंतरिक्ष स्टेशन एक परिक्रमा प्रयोगशाला में बदल गया है जिसमें अनुसंधान क्षमताएं हैं जो 109 से अधिक देशों के वैज्ञानिकों को एक चरम और अद्वितीय अंतरिक्ष उड़ान वातावरण में 4,000 से अधिक अग्रणी प्रयोग करने में सक्षम बनाती हैं।<br/>" +
          "अंतरिक्ष स्टेशन एक निम्न पृथ्वी अर्थव्यवस्था और नासा की अन्वेषण में अगले महान छलांगों के विकास के लिए एक स्प्रिंगबोर्ड के रूप में कार्य करता है, जिसमें आर्टेमिस के तहत चंद्रमा के मिशन और अंततः मंगल की मानव अन्वेषण शामिल है।<br/>" +
          "अंतर्राष्ट्रीय अंतरिक्ष स्टेशन, इसके अनुसंधान और इसके दल के बारे में अधिक जानें:<br/>" +
          "<a href='https://www.nasa.gov/station'>https://www.nasa.gov/station</a>",

        question2: "2. अंतर्राष्ट्रीय अंतरिक्ष स्टेशन कितनी तेजी से यात्रा कर रहा है?",
        answer2:
          "अंतर्राष्ट्रीय अंतरिक्ष स्टेशन हर 90 मिनट में पृथ्वी की परिक्रमा करता है। यह लगभग 28,000 किलोमीटर प्रति घंटे की गति से यात्रा करता है, जिससे बोर्ड पर मौजूद दल को हर दिन 16 सूर्योदय और सूर्यास्त देखने को मिलते हैं। नवंबर 2000 से अंतरिक्ष स्टेशन लगातार आबाद है। इस समय में, 23 देशों के 280 लोग इस कक्षीय चौकी का दौरा कर चुके हैं, और स्टेशन ने पृथ्वी के चारों ओर सैकड़ों हजारों बार परिक्रमा की है।",

        question3: "3. मैं कितनी बार अंतर्राष्ट्रीय अंतरिक्ष स्टेशन को देख सकता हूँ?",
        answer3:
          "अंतर्राष्ट्रीय अंतरिक्ष स्टेशन दिखाई देता है क्योंकि यह सूर्य के प्रकाश को प्रतिबिंबित करता है – यही कारण है कि हम चंद्रमा को देख सकते हैं। हालांकि, चंद्रमा के विपरीत, अंतरिक्ष स्टेशन दिन के दौरान देखने के लिए पर्याप्त उज्ज्वल नहीं है। देखने के अवसर एक महीने में एक बार से लेकर एक सप्ताह में कई बार तक हो सकते हैं क्योंकि सूर्य का प्रकाश स्टेशन से परावर्तित होता है जब यह आपके स्थान पर भोर और सांझ के समय ऊपर से गुजरता है।",

        question4: "4. Spot the Station ऐप क्या है?",
        answer4:
          "Spot the Station मोबाइल ऐप एक आधिकारिक नासा ऐप है जो उपयोगकर्ताओं को उनके संबंधित स्थान पर गुजरते समय अंतर्राष्ट्रीय अंतरिक्ष स्टेशन के दृश्य ट्रैक करने और सूचनाएं प्राप्त करने में मदद करता है। यह वास्तविक समय ट्रैकिंग, फ्लाईओवर शेड्यूल और अलर्ट भी प्रदान करता है।",

        question5: "5. मैं Spot the Station मोबाइल ऐप कैसे डाउनलोड करूं?",
        answer5: "Spot the Station मोबाइल ऐप iOS और Android मोबाइल और टैबलेट उपकरणों पर उपलब्ध है।",

        question6:
          "6. Spot the Station ऐप मुझे अंतर्राष्ट्रीय अंतरिक्ष स्टेशन के आगामी दृश्य अवसरों के बारे में कैसे सूचित करता है?",
        answer6:
          "Spot the Station ऐप अंतर्राष्ट्रीय अंतरिक्ष स्टेशन के आगामी पास के बारे में उपयोगकर्ताओं को सूचित करने के लिए पुश सूचनाएं भेजता है। उपयोगकर्ताओं को यह सुनिश्चित करना चाहिए कि उनके डिवाइस की सेटिंग्स में ऐप अधिसूचना अनुमतियां सक्षम हैं।",

        question7: "7. क्या मैं Spot the Station ऐप में सूचनाओं को अनुकूलित कर सकता हूँ?",
        answer7:
          "Spot the Station ऐप में व्यक्तिगत अलर्ट सेटिंग्स की क्षमता है ताकि उपयोगकर्ता की पसंदीदा स्थान और अलर्ट के समय के लिए विशिष्ट पुश सूचनाएं प्राप्त की जा सकें। अधिसूचना सेटिंग्स ऐप के सेटिंग पृष्ठ पर पाई जा सकती हैं, जहां उपयोगकर्ता सभी आगामी घटनाओं के लिए सूचनाएं चालू कर सकते हैं, या वर्तमान में चयनित स्थान के लिए सूचनाओं को अनुकूलित कर सकते हैं। उपयोगकर्ता स्थान सेटिंग्स के माध्यम से अन्य स्थानों के लिए सूचनाओं को अनुकूलित कर सकते हैं।",

        question8: "8. अगर मुझे सूचनाएं नहीं मिल रही हैं तो मुझे क्या करना चाहिए?",
        answer8:
          "उपयोगकर्ताओं को Spot the Station ऐप में अधिसूचना प्राथमिकताएं (सेटिंग पृष्ठ पर अधिसूचना सेटिंग्स) की जांच करनी चाहिए ताकि यह पुष्टि हो सके कि डिवाइस पसंदीदा स्थान और समय पर अलर्ट के लिए सेट है। यदि उपयोगकर्ताओं को अभी भी अलर्ट नहीं मिल रहे हैं, तो उन्हें यह सुनिश्चित करना चाहिए कि उनके डिवाइस की सेटिंग्स में सूचनाएं सक्षम हैं।",

        question9: "9. क्या Spot the Station ऐप अंतरराष्ट्रीय स्तर पर काम करता है?",
        answer9:
          "Spot the Station ऐप दुनिया भर में और कई भाषाओं में उपलब्ध है, जिसमें अंग्रेजी, डच, फ्रेंच, जर्मन, हिंदी, इतालवी, जापानी, पोलिश, पुर्तगाली (ब्राजील), रूसी, स्पेनिश, तुर्की और यूक्रेनी शामिल हैं। ऐप अधिकांश आबादी वाले स्थानों के लिए देखने की जानकारी प्रदान करता है, जिससे यह लगभग कहीं से भी ऊपर से गुजरते समय अंतर्राष्ट्रीय अंतरिक्ष स्टेशन को देखना आसान हो जाता है।",

        question10: "10. मेरे स्थान के लिए देखने के अवसर क्यों नहीं हैं?",
        answer10:
          "आपके स्थान पर अंधेरा होना चाहिए और अच्छी दृश्यता होनी चाहिए और अंतरिक्ष स्टेशन को देखने के लिए आपके ऊपर होना चाहिए। चूंकि अंतरिक्ष स्टेशन की कक्षा इसे पूरे विश्व में ले जाती है, यह ऐसे समय में ऊपर से गुजर सकता है जब यह दिखाई नहीं देगा – या तो दिन के बीच में या रात के बीच में। Spot The Station केवल तभी सूचनाएं भेजेगा जब आपके स्थान पर अंतर्राष्ट्रीय अंतरिक्ष स्टेशन को देखने के अवसर होंगे, हर बार जब यह ऊपर होगा तब नहीं।",

        question11:
          "11. क्या मुझे अंतर्राष्ट्रीय अंतरिक्ष स्टेशन को देखने के लिए दूरबीन की आवश्यकता है?",
        answer11:
          "नहीं, उपयोगकर्ता बिना किसी अतिरिक्त उपकरण के अपनी नंगी आंखों से अंतर्राष्ट्रीय अंतरिक्ष स्टेशन देख सकते हैं।",

        question12:
          "12. क्या अंतर्राष्ट्रीय अंतरिक्ष स्टेशन चंद्रमा की रोशनी के कारण दिखाई देता और गायब होता है?",
        answer12:
          "अंतर्राष्ट्रीय अंतरिक्ष स्टेशन दिखाई देता है क्योंकि यह सूर्य के प्रकाश को प्रतिबिंबित करता है। यही कारण है कि चंद्रमा चमकता हुआ प्रतीत होता है। यहां तक कि जब चंद्रमा नहीं उगा होता है, तब भी उपयोगकर्ता स्टेशन को देख सकते हैं।",

        question13: "13. अलर्ट सूचनाओं के लिए कौन सा समय क्षेत्र उपयोग किया जाता है?",
        answer13:
          "Spot the Station ऐप के भीतर सभी सामग्री उपयोगकर्ता के चयनित स्थान के लिए स्थानीय समय क्षेत्र में सूचीबद्ध है। ऐप स्वचालित रूप से डेलाइट सेविंग टाइम के लिए समायोजित हो जाता है।",

        question14: "14. Spot the Station ऐप प्रत्येक दृश्य के लिए कौन सी जानकारी प्रदान करता है?",
        answer14:
          "प्रत्येक दृश्य के लिए, Spot the Station ऐप समय, दृश्यता की अवधि, क्षितिज के ऊपर अधिकतम ऊंचाई और दिशाएं प्रदर्शित करता है जहां अंतर्राष्ट्रीय अंतरिक्ष स्टेशन दिखाई देगा और गायब हो जाएगा, जिससे उपयोगकर्ताओं को इसे आकाश में सटीक रूप से खोजने में मदद मिलती है।",

        question15:
          "15. देखने के अवसर के दौरान मैं अंतर्राष्ट्रीय अंतरिक्ष स्टेशन को कैसे देखूं? इस सारी जानकारी का क्या मतलब है?",
        answer15:
          'Spot the Station ऐप "आगामी दृश्य" की एक सूची प्रदान करता है यदि उपयोगकर्ता होम पेज पर "अगली दृश्य सूची" पर टैप करते हैं।<br/>' +
          "<strong>तारीख और समय</strong> वह समय है जब स्थानीय समय क्षेत्र में देखने का अवसर शुरू होगा। सभी पास सूर्योदय या सूर्यास्त से कुछ घंटे पहले या बाद में होंगे। यह देखने की इष्टतम अवधि है क्योंकि सूर्य अंतर्राष्ट्रीय अंतरिक्ष स्टेशन से परावर्तित होता है और गहरे आकाश के खिलाफ विपरीत होता है।<br/>" +
          "<strong>क्षितिज के ऊपर</strong> वह अधिकतम समय अवधि है जब स्टेशन क्षितिज के नीचे वापस पार करने से पहले दिखाई देता है।<br/>" +
          "<strong>अधिकतम ऊंचाई</strong> डिग्री में मापी जाती है (जिसे ऊंचाई भी कहा जाता है)। यह रात के आकाश में क्षितिज से स्टेशन की ऊंचाई का प्रतिनिधित्व करता है। क्षितिज शून्य डिग्री पर है, और सीधे ऊपर 90 डिग्री है। यदि उपयोगकर्ता अपनी मुट्ठी को हाथ की लंबाई पर रखते हैं और इसे क्षितिज पर रखते हैं, तो शीर्ष लगभग 10 डिग्री की ऊंचाई होगी।<br/>" +
          "<strong>प्रकट होता है</strong> आकाश में वह स्थान है जहां स्टेशन पहले दिखाई देगा। यह मान, अधिकतम ऊंचाई की तरह, क्षितिज से डिग्री में भी मापा जाता है। अक्षर कम्पास दिशाओं का प्रतिनिधित्व करते हैं – N उत्तर है, WNW पश्चिम से उत्तर-पश्चिम है, और इसी तरह।<br/>" +
          "<strong>गायब होता है</strong> वह स्थान है जहां रात के आकाश में स्टेशन दृश्य क्षेत्र को छोड़ देगा।" +
          "<img src='https://sts-app-resources.s3.us-east-1.amazonaws.com/astro_horizon.png' />",

        question16:
          "16. फ्लाईओवर शेड्यूल इंगित करता है कि अंतर्राष्ट्रीय अंतरिक्ष स्टेशन एक ही दिशा से प्रकट हो रहा है और गायब हो रहा है, यह कैसे संभव है?",
        answer16:
          "Spot the Station सॉफ़्टवेयर दिशाओं को निकटतम कार्डिनल और इंटरकार्डिनल दिशाओं में राउंड ऑफ करता है। इससे ऐसा लग सकता है कि अंतर्राष्ट्रीय अंतरिक्ष स्टेशन एक ही दिशा में प्रकट होगा और गायब हो जाएगा, भले ही यह आकाश में यात्रा कर रहा हो। यह आमतौर पर कम दृश्यता वाली खिड़की वाले फ्लाईओवर पर होता है क्योंकि स्टेशन तेजी से पृथ्वी की अंधेरी छाया में (या बाहर) जा रहा है जहां, जमीन पर उपयोगकर्ता के स्थान से, आकाश में एक पूर्ण पास का अवलोकन नहीं किया जा सकता है।",

        question17:
          "17. क्या मैं अंतर्राष्ट्रीय अंतरिक्ष स्टेशन के स्थान का लाइव मानचित्र देख सकता हूँ?",
        answer17:
          "हाँ, Spot the Station ऐप में एक वास्तविक समय का मानचित्र शामिल है जो पृथ्वी की परिक्रमा करते समय अंतर्राष्ट्रीय अंतरिक्ष स्टेशन की वर्तमान स्थिति दिखाता है, जिससे उपयोगकर्ताओं को इसकी प्रगति को ट्रैक करने के लिए एक दृश्य संदर्भ मिलता है।",

        question18: "18. Spot the Station ऐप में संवर्धित वास्तविकता सुविधा क्या है?",
        answer18:
          "Spot the Station ऐप में संवर्धित वास्तविकता सुविधा उपयोगकर्ताओं को आकाश में अंतर्राष्ट्रीय अंतरिक्ष स्टेशन के पथ का एक आभासी ओवरले देखने की अनुमति देती है। यह सुविधा उपयोगकर्ताओं को स्टेशन की वास्तविक समय की स्थिति के साथ अपने डिवाइस को संरेखित करके स्टेशन को अधिक सटीक रूप से खोजने में मदद करती है।",

        question19: "19. Spot the Station ऐप में संवर्धित वास्तविकता सुविधा का उपयोग कैसे करें?",
        answer19:
          'संवर्धित वास्तविकता सुविधा का उपयोग करने के लिए, Spot the Station ऐप खोलें और निचले मेनू में "AR व्यू" विकल्प पर जाएं। डिवाइस के कैमरे को आकाश के साथ संरेखित करने के लिए ऑन-स्क्रीन संकेतों का पालन करें, जहां ऐप एक आभासी ओवरले प्रदर्शित करेगा जो अंतर्राष्ट्रीय अंतरिक्ष स्टेशन की स्थिति और प्रक्षेपवक्र को इंगित करता है।',

        question20:
          "20. क्या संवर्धित वास्तविकता सुविधा का उपयोग करने के लिए मुझे एक विशिष्ट डिवाइस या सॉफ़्टवेयर की आवश्यकता है?",
        answer20:
          "Spot the Station की संवर्धित वास्तविकता सुविधा के लिए एक डिवाइस की आवश्यकता होती है जो 3D स्पेस में अपनी अभिविन्यास निर्धारित कर सके। इसके लिए विशिष्ट हार्डवेयर समर्थन की आवश्यकता होती है, जैसे कि एक जाइरोस्कोप या मोशन को-प्रोसेसर। पुराने या बजट डिवाइस इस कार्यक्षमता का समर्थन नहीं कर सकते हैं।",

        question21: "21. संवर्धित वास्तविकता सुविधा कैसे काम करती है?",
        answer21:
          "डिवाइस के कैमरे और सेंसर का उपयोग करके, Spot the Station की संवर्धित वास्तविकता सुविधा आकाश में अंतर्राष्ट्रीय अंतरिक्ष स्टेशन की स्थिति को स्क्रीन पर सुपरइम्पोज़ करती है, जो उपयोगकर्ता के डिवाइस को हिलाने पर वास्तविक समय में समायोजित होती है। ऐप उपयोगकर्ताओं को डिवाइस के कैमरे को सही दिशा में इंगित करने के लिए मार्गदर्शन करता है और दिखाता है कि स्टेशन कहां दिखाई देगा और गायब हो जाएगा।",

        question22:
          "22. क्या मैं दिन और रात दोनों के दौरान संवर्धित वास्तविकता सुविधा का उपयोग कर सकता हूँ?",
        answer22:
          "हाँ, Spot the Station ऐप के भीतर संवर्धित वास्तविकता सुविधा दिन और रात दोनों के दौरान उपलब्ध है; हालांकि, सबसे अच्छा देखने का अनुभव आमतौर पर गोधूलि या रात के समय होता है जब अंतर्राष्ट्रीय अंतरिक्ष स्टेशन नग्न आंखों से दिखाई देता है। संवर्धित वास्तविकता ओवरले प्रकाश की स्थिति की परवाह किए बिना काम करेगा, लेकिन वास्तविक देखने के अवसर दृश्यता पर निर्भर करते हैं।",

        question23: "23. क्या सभी स्थानों के लिए संवर्धित वास्तविकता ओवरले सटीक है?",
        answer23:
          "हाँ, Spot the Station ऐप के भीतर संवर्धित वास्तविकता सुविधा डिवाइस के जीपीएस स्थान के आधार पर सटीक स्थिति जानकारी प्रदान करने के लिए डिज़ाइन की गई है। हालाँकि, डिवाइस के कम्पास और सेंसर कैलिब्रेशन के आधार पर सटीकता थोड़ी भिन्न हो सकती है। यदि उपयोगकर्ता विसंगतियों को नोटिस करते हैं, तो सेटिंग्स के माध्यम से डिवाइस के कम्पास को पुनः कैलिब्रेट करें।",

        question24: "24. क्या संवर्धित वास्तविकता सुविधा सटीक दृश्य समय में मदद कर सकती है?",
        answer24:
          "Spot the Station ऐप के भीतर संवर्धित वास्तविकता सुविधा उपयोगकर्ताओं को आकाश में दिखाई देने पर अंतर्राष्ट्रीय अंतरिक्ष स्टेशन को खोजने के लिए दृश्य रूप से मार्गदर्शन करती है। ऐप की अलर्ट के साथ मिलकर, यह स्टेशन को देखने की क्षमता को बढ़ाता है, जिससे इसे सटीक रूप से ट्रैक करने के लिए एक लाइव, दृश्य दिशा और ऊंचाई संकेतक प्रदान किया जाता है।",

        question25: "25. मेरी संवर्धित वास्तविकता अनुभव को अनुकूलित करने के लिए क्या सुझाव हैं?",
        answer25:
          "Spot the Station ऐप में सबसे अच्छा संवर्धित वास्तविकता अनुभव के लिए, खुले क्षेत्र में सुविधा का उपयोग करें जहां आकाश का स्पष्ट दृश्य हो। ऊंची इमारतों या पेड़ों जैसी बाधाओं से बचें, क्योंकि ये दृश्यता को अवरुद्ध कर सकते हैं। डिवाइस के कम्पास को कैलिब्रेट करें और सुनिश्चित करें कि स्थान सेवाएं और कैमरा अनुमतियां सुचारू कार्य के लिए सक्षम हैं।",

        question26: "26. क्या संवर्धित वास्तविकता सुविधा iOS और Android उपकरणों पर उपलब्ध है?",
        answer26:
          "हाँ, Spot the Station ऐप की संवर्धित वास्तविकता सुविधा iOS और Android मोबाइल और टैबलेट उपकरणों पर उपलब्ध है, जब तक कि आपका डिवाइस हार्डवेयर आवश्यकताओं को पूरा करता है।",

        question27: "27. क्या Spot the Station ऐप ऑफलाइन काम करता है?",
        answer27:
          "कुछ बुनियादी कार्यक्षमता, जैसे पहले से डाउनलोड किए गए देखने के अवसर शेड्यूल तक पहुंचना या अनुसूचित सूचनाएं प्राप्त करना, ऑफ़लाइन काम कर सकते हैं। हालाँकि, वास्तविक समय डेटा की आवश्यकता वाली सुविधाओं, जैसे ट्रैकिंग, के लिए सेलुलर सेवा या इंटरनेट कनेक्शन की आवश्यकता होती है।",

        question28: "28. Spot the Station ऐप का उपयोग करने के लिए कोई विशेष आवश्यकताएं हैं?",
        answer28:
          "Spot the Station ऐप के लिए वास्तविक समय ट्रैकिंग और अलर्ट के लिए सक्रिय सेलुलर सेवा या इंटरनेट कनेक्शन की आवश्यकता होती है। इसके अलावा, स्थान-विशिष्ट जानकारी के लिए, सुनिश्चित करें कि डिवाइस की स्थान सेवाएं ऐप के लिए सक्षम हैं।",

        question29: "29. क्या Spot the Station ऐप का उपयोग मुफ्त है?",
        answer29:
          "हाँ, Spot the Station ऐप को डाउनलोड और उपयोग करने के लिए मुफ्त है, बिना इन-ऐप खरीदारी या सदस्यता के।",

        question30: "30. Spot the Station ऐप समर्थन के लिए मैं किससे संपर्क कर सकता हूँ?",
        answer30:
          "Spot the Station ऐप के समर्थन के लिए, ऐप की प्रतिक्रिया विकल्प के माध्यम से संपर्क करें या <a href='mailto:hq-spotthestation@mail.nasa.gov'>Spot the Station टीम को ईमेल करें</a>।",
      },
    },
    astronauts: {
      title: "अब स्टेशन में कौन है?",
      number: "लोगों की संख्या:",
    },
    live: {
      title: "लाइव स्ट्रीम",
      description:
        "वर्तमान में, आईएसएस पर लगे एक बाहरी एचडी कैमरे से पृथ्वी का लाइव वीडियो स्ट्रीम किया जा रहा है। कैमरा पृथ्वी की ओर देख रहा है और कभी-कभी सोलर पैनल दृश्य में आ जाता है।",
    },
    tour: {
      title: "वर्चुअल टूर",
    },
    videos: {
      title: "स्टेशन वीडियो",
    },
    gallery: {
      title: "गैलरी",
    },
    earthScience: { title: "पृथ्वी विज्ञान डेटा संसाधन" },
  },
}

export default hi
export type Translations = typeof hi
