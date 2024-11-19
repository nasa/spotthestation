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
    body: "इस सुविधा का उपयोग करने के लिए, आपको गैलरी तक पहुंचने के लिए अनुमति देने की आवश्यकता है।",
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
    body: "हमसे संपर्क करने के लिए धन्यवाद। हमें आपका संदेश प्राप्त हो गया है और हम आपके अनुरोध पर कार्रवाई करेंगे। कृपया ध्यान दें कि यह एप्लिकेशन उपयोगकर्ता डेटा एकत्र नहीं करता है, इसलिए हम सभी संदेशों का व्यक्तिगत रूप से जवाब नहीं दे सकते हैं।",
    dismiss: "नकार देना",
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
      subTitle: "स्टेशन आपके ऊपर से गुजर रहा है",
    },
    before: {
      titleOne: "स्टेशन को स्पॉट करें",
      titleTwo: "मिनट!",
      subTitleOne: "स्टेशन आपके ऊपर से गुजर रहा है",
      subTitleTwo: "मिनटों में",
    },
  },
  units: {
    minute: "मिन",
    kilometer: "किमी",
    kilogram: "किलोग्राम",
    month: "महीना",
    metersPerSecond: "एम/एस",
    time: "T",
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
      firstTimeHead: "अगली नजर(ओं) की सूची",
      secondTimeHead: "उल्टी गिनती",
      timezone: "समय क्षेत्र",
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
      title: "आगामी दृष्टि",
      sightings: "साइटिंग्स",
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
      longerThan2: "2 मिनट और अधिक",
      empty: "इस स्थान पर {{start}} से {{end}} तक आईएसएस देखे जाने की कोई संभावना नहीं है।",
      shareTitle: "{{date}} को {{location}} के ऊपर से स्टेशन गुजर रहा है",
      shareLink:
        "और अधिक जानने और संवर्धित वास्तविकता के माध्यम से स्टेशन को ट्रैक करने के लिए, ऐप डाउनलोड करें",
      coach: {
        title: "प्रतीक विवरण",
        moon: "यह चयनित स्थान पर रात का समय होगा जब आईएसएस क्षितिज से ऊपर होगा।",
        sunset: "चयनित स्थान पर गोधूलि होगा जब आईएसएस क्षितिज से ऊपर होगा।",
      },
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
      dimensionsValue: "109 मीटर चौड़ा x 73 मीटर लंबा x 14 मीटर ऊँचा",
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
        question1: "1. अंतरिक्ष स्टेशन वहां क्यों है?",
        answer1:
          "अंतर्राष्ट्रीय अंतरिक्ष स्टेशन पृथ्वी की एकमात्र सूक्ष्मगुरुत्वाकर्षण प्रयोगशाला है। यह फुटबॉल मैदान के आकार का प्लेटफॉर्म विज्ञान और प्रौद्योगिकी के कई प्रयोगों की मेजबानी करता है, जो लगातार क्रू सदस्यों द्वारा किए जाते हैं या स्वचालित होते हैं। कक्षा में स्थित इस प्रयोगशाला में अनुसंधान पृथ्वी पर जीवन के लिए लाभ प्रदान करता है, साथ ही भविष्य की अंतरिक्ष अन्वेषण के लिए भी। अंतरिक्ष स्टेशन प्रौद्योगिकियों के लिए एक परीक्षण स्थल के रूप में कार्य करता है और हमें मानव पर दीर्घकालिक अंतरिक्ष यात्रा के प्रभावों का अध्ययन करने की अनुमति देता है, जो नासा के मिशन का समर्थन करता है कि मानव उपस्थिति को अंतरिक्ष में और आगे बढ़ाया जाए। अंतरिक्ष स्टेशन पर हो रहे अनुसंधान के बारे में अधिक जानने के लिए, और वहां अपने विज्ञान को संचालित करने के अवसरों के लिए, कृपया <a href='https://www.nasa.gov/international-space-station/'>यहां क्लिक करें</a>।",
        question2: "2. अंतरिक्ष स्टेशन कितनी तेजी से यात्रा कर रहा है?",
        answer2:
          "स्टेशन हर 90 मिनट में पृथ्वी का चक्कर लगाता है। यह लगभग 17,500 मील (28,000 किमी) प्रति घंटे की गति से यात्रा करता है, जो क्रू को हर दिन 16 सूर्योदय और सूर्यास्त देता है। उन 15 से अधिक वर्षों में जब लोग बोर्ड पर रह रहे हैं, स्टेशन ने पृथ्वी के चारों ओर हजारों बार चक्कर लगाया है। आप स्टेशन के बारे में अधिक तथ्य <a href='https://www.nasa.gov/international-space-station/space-station-facts-and-figures/'>इस वेबपेज</a> पर देख सकते हैं।",
        question3: "3. मैं कितनी बार अंतरिक्ष स्टेशन को देख सकता हूँ?",
        answer3:
          "अंतरिक्ष स्टेशन दिखाई देता है क्योंकि यह सूर्य की रोशनी को प्रतिबिंबित करता है - वही कारण जिससे हम चंद्रमा को देख सकते हैं। हालांकि, चंद्रमा के विपरीत, अंतरिक्ष स्टेशन दिन के समय में देखने के लिए पर्याप्त उज्ज्वल नहीं है। इसे केवल तब देखा जा सकता है जब आपके स्थान पर सुबह या शाम हो। इस प्रकार, यह एक महीने में एक बार से लेकर एक सप्ताह में कई बार देखने के अवसर तक हो सकता है, क्योंकि यह आपके स्थान पर अंधेरा होना चाहिए, और अंतरिक्ष स्टेशन को आपके ऊपर से गुजरना चाहिए।",
        question4: "4. Spot the Station मोबाइल ऐप क्या है?",
        answer4:
          "Spot the Station मोबाइल ऐप एक आधिकारिक नासा ऐप है जो उपयोगकर्ताओं को अंतर्राष्ट्रीय अंतरिक्ष स्टेशन के उनके स्थान के ऊपर से गुजरने के दौरान ट्रैक करने और सूचनाएं प्राप्त करने में मदद करता है। यह वास्तविक समय ट्रैकिंग, अवलोकन शेड्यूल और अलर्ट प्रदान करता है।",
        question5: "5. Spot the Station मोबाइल ऐप कैसे डाउनलोड करें?",
        answer5:
          "आप ऐप को Apple App Store <a href='https://apps.apple.com/us/app/spot-the-station/id6449235044'>यहां</a> और Google Play Store <a href='https://play.google.com/store/apps/details?id=gov.nasa.hq.SpotTheStation&hl=en_US&pli=1'>यहां</a> से डाउनलोड कर सकते हैं।",
        question6: "6. ऐप मुझे आगामी स्टेशन अवलोकनों के बारे में कैसे सूचित करता है?",
        answer6:
          "ऐप आपको आगामी स्टेशन अवलोकनों के बारे में सूचित करने के लिए पुश सूचनाएं भेजता है, जिसमें आपके स्थान के लिए विशिष्ट तिथि, समय, अवधि और दृश्यता की स्थिति शामिल होती है। कृपया सुनिश्चित करें कि आपने अपने फोन की सेटिंग्स में इस ऐप के लिए सूचनाएं सक्षम की हैं।",
        question7: "7. क्या मैं ऐप में सूचनाएं अनुकूलित कर सकता हूँ?",
        answer7:
          "हाँ, आप ऐप में अलर्ट सेटिंग्स को व्यक्तिगत बना सकते हैं ताकि आप अपनी पसंदीदा स्थान, अवलोकन की स्थिति और यहां तक कि आपके लिए सबसे अच्छा काम करने वाले विशिष्ट समय के आधार पर सूचनाएं प्राप्त कर सकें।",
        question8: "8. अगर मुझे सूचनाएं नहीं मिल रही हैं तो मुझे क्या करना चाहिए?",
        answer8:
          "यदि आपको अलर्ट नहीं मिल रहे हैं, तो सुनिश्चित करें कि आपके डिवाइस की सेटिंग्स में सूचनाएं सक्षम हैं। ऐप की अधिसूचना प्राथमिकताओं की भी जांच करें ताकि यह सुनिश्चित हो सके कि आपने अपने चुने हुए स्थान और पसंदीदा समय के लिए अलर्ट सेट किए हैं।",
        question9: "9. क्या ऐप अंतरराष्ट्रीय स्तर पर काम करता है?",
        answer9:
          "हाँ, Spot the Station ऐप दुनिया भर में उपलब्ध है और अधिकांश आबादी वाले स्थानों के लिए अवलोकन जानकारी प्रदान करता है, जिससे इसे लगभग कहीं से भी देखना आसान हो जाता है।",
        question10: "10. मेरे स्थान के लिए कोई अवलोकन अवसर क्यों नहीं हैं?",
        answer10:
          "आपके स्थान पर अंधेरा होना चाहिए और अंतरिक्ष स्टेशन को आपके ऊपर होना चाहिए ताकि आप इसे देख सकें। चूंकि अंतरिक्ष स्टेशन की कक्षा इसे पूरे विश्व में ले जाती है, यह आपके ऊपर ऐसे समय में गुजर सकता है जब यह दिखाई नहीं देगा - या तो दिन के बीच में या रात के बीच में। Spot The Station केवल तभी सूचनाएं भेजेगा जब आपके पास अंतरिक्ष स्टेशन को देखने का अवसर होगा, न कि हर बार जब यह आपके ऊपर होगा।",
        question11: "11. क्या मुझे अंतरिक्ष स्टेशन को देखने के लिए दूरबीन की आवश्यकता है?",
        answer11:
          "नहीं, आप अंतरिक्ष स्टेशन को अपनी नंगी आंखों से देख सकते हैं, किसी उपकरण की आवश्यकता नहीं है।",
        question12:
          "12. क्या स्टेशन चंद्रमा की रोशनी के कारण दिखाई देता है और फिर गायब हो जाता है?",
        answer12:
          "अंतरिक्ष स्टेशन दिखाई देता है क्योंकि यह सूर्य की रोशनी को प्रतिबिंबित करता है। यह वही कारण है जिससे चंद्रमा चमकता हुआ प्रतीत होता है। भले ही चंद्रमा नहीं उगा हो, आप फिर भी अंतरिक्ष स्टेशन को देख पाएंगे।",
        question13: "13. अलर्ट सूचनाओं के लिए कौन सा समय क्षेत्र उपयोग किया जाता है?",
        answer13:
          "Spot The Station की सभी जानकारी चयनित स्थान के लिए स्थानीय समय क्षेत्र में सूचीबद्ध है। Spot The Station स्वचालित रूप से डेलाइट सेविंग टाइम के लिए समायोजित होता है।",
        question14: "14. ऐप प्रत्येक अवलोकन के लिए क्या जानकारी प्रदान करता है?",
        answer14:
          "प्रत्येक अवलोकन के लिए, ऐप समय, दृश्यता की अवधि, अधिकतम ऊंचाई और दिशाएं दिखाता है जहां स्टेशन दिखाई देगा और गायब हो जाएगा, जिससे आपको इसे आकाश में सटीक रूप से ढूंढने में मदद मिलती है।",
        question15:
          "15. मैं प्रत्येक अवलोकन के दौरान स्टेशन को कैसे देखूं? इस अवलोकन जानकारी का क्या मतलब है?",
        answer15:
          "ऐप आगामी अवलोकनों की एक सूची प्रदान करता है यदि आप होम पेज पर अगली अवलोकन सूची पर टैप करते हैं।<br/><strong>तारीख और समय</strong> वह है जब आपके स्थानीय समय क्षेत्र में अवलोकन का अवसर शुरू होगा। सभी अवलोकन सूर्योदय या सूर्यास्त से कुछ घंटे पहले या बाद में होंगे। यह देखने की इष्टतम अवधि है क्योंकि सूर्य अंतरिक्ष स्टेशन से परावर्तित होता है और गहरे आकाश के खिलाफ विपरीत होता है।<br/><strong>क्षितिज के ऊपर</strong> वह अधिकतम समय अवधि है जब अंतरिक्ष स्टेशन क्षितिज के नीचे वापस जाने से पहले दिखाई देता है।<br/><strong>अधिकतम ऊंचाई</strong> डिग्री में मापी जाती है (जिसे ऊंचाई भी कहा जाता है)। यह रात के आकाश में क्षितिज से अंतरिक्ष स्टेशन की ऊंचाई का प्रतिनिधित्व करता है। क्षितिज शून्य डिग्री पर है, और सीधे ऊपर नब्बे डिग्री है। यदि आप अपनी मुट्ठी को हाथ की लंबाई पर रखते हैं और अपनी मुट्ठी को क्षितिज पर रखते हैं, तो शीर्ष लगभग 10 डिग्री होगा।<br/><strong>प्रकट होता है</strong> वह स्थान है जहां स्टेशन पहले दिखाई देगा। यह मान, अधिकतम ऊंचाई की तरह, क्षितिज से डिग्री में भी मापा जाता है। अक्षर कम्पास दिशाओं का प्रतिनिधित्व करते हैं - N उत्तर है, WNW पश्चिम से उत्तर-पश्चिम है, और इसी तरह।<br/><strong>गायब होता है</strong> वह स्थान है जहां अंतर्राष्ट्रीय अंतरिक्ष स्टेशन आपके दृश्य क्षेत्र को छोड़ देगा।<img src='https://spotthestation.nasa.gov/images/astro_horizon.png' />",
        question16:
          "16. उड़ान कार्यक्रम इंगित करता है कि अंतरिक्ष स्टेशन एक ही दिशा से प्रकट हो रहा है और गायब हो रहा है, यह कैसे संभव है? उदाहरण - समय: सोम जुलाई 15 11:57 PM, दृश्य: 2 मिनट, अधिकतम ऊंचाई: 51°, प्रकट होता है: 51° ENE के ऊपर, गायब होता है: 11° ENE के ऊपर",
        answer16:
          "Spot the Station सॉफ़्टवेयर दिशाओं को निकटतम कार्डिनल और इंटरकार्डिनल दिशाओं तक गोल कर देता है। इससे ऐसा लग सकता है कि स्टेशन एक ही दिशा में प्रकट होगा और गायब होगा, भले ही यह आकाश में यात्रा कर रहा हो। यह आमतौर पर उन उड़ानों पर होता है जिनकी दृश्यता की खिड़की छोटी होती है क्योंकि स्टेशन तेजी से पृथ्वी की अंधेरी छाया में प्रवेश कर रहा है (या बाहर निकल रहा है) जहां, जमीन पर हमारे स्थान से, हम आकाश में इसके पूर्ण मार्ग को नहीं देख सकते।",
        question17: "17. क्या मैं स्टेशन के स्थान का लाइव मानचित्र देख सकता हूँ?",
        answer17:
          "हाँ, ऐप में एक वास्तविक समय का मानचित्र शामिल है जो स्टेशन की वर्तमान स्थिति को दिखाता है क्योंकि यह पृथ्वी की परिक्रमा करता है, जिससे आपको इसकी प्रगति को ट्रैक करने के लिए एक दृश्य संदर्भ मिलता है।",
        question18: "18. Spot the Station ऐप में AR फीचर क्या है?",
        answer18:
          "Spot the Station ऐप में ऑगमेंटेड रियलिटी (AR) फीचर उपयोगकर्ताओं को आकाश में अंतर्राष्ट्रीय अंतरिक्ष स्टेशन के पथ का एक आभासी ओवरले देखने की अनुमति देता है। यह फीचर उपयोगकर्ताओं को अपने डिवाइस को स्टेशन की वास्तविक समय की स्थिति के साथ संरेखित करके स्टेशन को अधिक सटीक रूप से खोजने में मदद करता है।",
        question19: "19. ऐप में AR फीचर का उपयोग कैसे करें?",
        answer19:
          "AR फीचर का उपयोग करने के लिए, ऐप खोलें और नीचे मेनू में AR व्यू विकल्प पर जाएं। अपने डिवाइस के कैमरे को आकाश के साथ संरेखित करने के लिए ऑन-स्क्रीन संकेतों का पालन करें, जहां ऐप स्टेशन की स्थिति और प्रक्षेपवक्र को इंगित करने वाला एक आभासी ओवरले प्रदर्शित करेगा।",
        question20:
          "20. क्या AR फीचर का उपयोग करने के लिए मुझे एक विशिष्ट डिवाइस या सॉफ़्टवेयर की आवश्यकता है?",
        answer20:
          "AR फीचर के लिए एक डिवाइस की आवश्यकता होती है जो 3D स्पेस में अपनी अभिविन्यास निर्धारित कर सके। इसके लिए विशिष्ट हार्डवेयर समर्थन की आवश्यकता होती है, जैसे कि एक जाइरोस्कोप या मोशन को-प्रोसेसर। पुराने या बजट डिवाइस इस कार्यक्षमता का समर्थन नहीं कर सकते हैं।",
        question21: "21. AR फीचर कैसे काम करता है?",
        answer21:
          "आपके डिवाइस के कैमरे और सेंसर का उपयोग करके, AR फीचर आपके स्क्रीन पर आकाश में स्टेशन की स्थिति को सुपरइम्पोज़ करता है, जैसे ही आप अपने डिवाइस को हिलाते हैं, वास्तविक समय में समायोजित होता है। ऐप आपको अपने कैमरे को सही दिशा में इंगित करने के लिए मार्गदर्शन करता है और आपको दिखाता है कि स्टेशन कहां दिखाई देगा और गायब होगा।",
        question22: "22. क्या मैं दिन और रात दोनों के दौरान AR फीचर का उपयोग कर सकता हूँ?",
        answer22:
          "हाँ, आप दिन और रात दोनों के दौरान AR फीचर का उपयोग कर सकते हैं; हालांकि, सबसे अच्छा अनुभव आमतौर पर गोधूलि या रात के समय होता है जब स्टेशन नग्न आंखों से दिखाई देता है। AR ओवरले प्रकाश की स्थिति की परवाह किए बिना काम करेगा, लेकिन वास्तविक अवलोकन दृश्यता पर निर्भर करते हैं।",
        question23: "23. क्या सभी स्थानों के लिए AR ओवरले सटीक है?",
        answer23:
          "हाँ, AR फीचर आपके GPS स्थान के आधार पर सटीक स्थिति जानकारी प्रदान करने के लिए डिज़ाइन किया गया है। हालांकि, आपके डिवाइस के कम्पास और सेंसर कैलिब्रेशन के आधार पर सटीकता थोड़ी भिन्न हो सकती है। यदि आप विसंगतियां देखते हैं, तो सेटिंग्स के माध्यम से अपने डिवाइस के कम्पास को पुनः कैलिब्रेट करें।",
        question24: "24. क्या AR फीचर सटीक अवलोकन समय में मदद कर सकता है?",
        answer24:
          "AR फीचर आपको आकाश में स्टेशन के प्रकट होने के सटीक समय पर इसे खोजने के लिए दृश्य रूप से मार्गदर्शन करता है। ऐप की अवलोकन अलर्ट के साथ मिलकर, यह आपको स्टेशन को देखने की आपकी क्षमता को बढ़ाता है, जिससे आपको इसे सटीक रूप से ट्रैक करने के लिए एक लाइव, दृश्य दिशा और ऊंचाई संकेतक मिलता है।",
        question25: "25. मेरी AR अनुभव को अनुकूलित करने के लिए क्या सुझाव हैं?",
        answer25:
          "सर्वश्रेष्ठ AR अनुभव के लिए, खुले क्षेत्र में इस फीचर का उपयोग करें जहां आकाश का स्पष्ट दृश्य हो। ऊंची इमारतों या पेड़ों जैसी बाधाओं से बचें, क्योंकि ये दृश्यता को अवरुद्ध कर सकते हैं। अपने डिवाइस के कम्पास को कैलिब्रेट करें और सुनिश्चित करें कि स्थान सेवाएं और कैमरा अनुमतियां सुचारू कार्य के लिए सक्षम हैं।",
        question26: "26. क्या AR फीचर Android और iOS दोनों पर उपलब्ध है?",
        answer26:
          "हाँ, AR फीचर ऐप के iOS और Android दोनों संस्करणों पर उपलब्ध है, जब तक कि आपका डिवाइस हार्डवेयर आवश्यकताओं को पूरा करता है।",
        question27: "27. क्या ऐप ऑफलाइन काम करता है?",
        answer27:
          "कुछ बुनियादी कार्यक्षमता, जैसे पहले से डाउनलोड किए गए अवलोकन शेड्यूल तक पहुंचना या अनुसूचित सूचनाएं प्राप्त करना, ऑफलाइन काम कर सकती हैं। हालांकि, वास्तविक समय के डेटा की आवश्यकता वाली सुविधाओं, जैसे ट्रैकिंग, के लिए इंटरनेट कनेक्शन की आवश्यकता होती है।",
        question28: "28. ऐप का उपयोग करने के लिए कोई विशेष आवश्यकताएं हैं?",
        answer28:
          "ऐप को वास्तविक समय ट्रैकिंग और अलर्ट के लिए एक सक्रिय इंटरनेट कनेक्शन की आवश्यकता होती है। इसके अलावा, स्थान-विशिष्ट जानकारी के लिए, सुनिश्चित करें कि आपके डिवाइस की स्थान सेवाएं ऐप के लिए सक्षम हैं।",
        question29: "29. क्या ऐप मुफ्त में उपयोग करने के लिए है?",
        answer29:
          "हाँ, Spot the Station ऐप डाउनलोड और उपयोग करने के लिए मुफ्त है, बिना इन-ऐप खरीदारी या सदस्यता के।",
        question30: "30. ऐप समर्थन के लिए मैं किससे संपर्क कर सकता हूँ?",
        answer30:
          "Spot the Station ऐप के समर्थन के लिए, NASA के समर्थन पृष्ठ पर जाएं या ऐप के भीतर प्रतिक्रिया विकल्प के माध्यम से संपर्क करें।",
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
  },
}

export default hi
export type Translations = typeof hi
