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
      title: "अब आईएसएस को स्पॉट करें!",
      subTitle: "आईएसएस आपके ऊपर से गुजर रहा है",
    },
    before: {
      titleOne: "आईएसएस को स्पॉट करें",
      titleTwo: "मिनट!",
      subTitleOne: "आईएसएस आपके ऊपर से गुजर रहा है",
      subTitleTwo: "मिनटों में",
    },
  },
  units: {
    minute: "मिन",
    kilometer: "किमी",
    kilogram: "किलोग्राम",
    month: "महीना",
    metersPerSecond: "एम/एस",
  },
  tabNavigator: {
    homeTab: "घर",
    issViewTab: "इस दृश्य को देखें",
    issNowTab: "अब आईएसएस",
    resourcesTab: "संसाधन",
    settingsTab: "समायोजन",
  },
  onboarding: {
    splash: {
      title: "स्टेशन को स्पॉट करें",
      subTitle: "आकाश में टकटकी लगाएं और अंतर्राष्ट्रीय अंतरिक्ष स्टेशन (आईएसएस) देखें",
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
      today: "आज",
      tomorrow: "आने वाला कल",
      appears: "प्रकट होता है",
      disappears: "गायब",
      empty: "इस स्थान पर {{start}} से {{end}} तक आईएसएस देखे जाने की कोई संभावना नहीं है।",
      coach: {
        title: "प्रतीक विवरण",
        moon: "यह चयनित स्थान पर रात का समय होगा जब आईएसएस क्षितिज से ऊपर होगा।",
        sunset: "चयनित स्थान पर गोधूलि होगा जब आईएसएस क्षितिज से ऊपर होगा।",
        sun: "चयनित स्थान पर दिन के उजाले होंगे जब आईएसएस क्षितिज से ऊपर होगा।",
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
      title: "अंतर्राष्ट्रीय अंतरिक्ष स्टेशन - विवरण",
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
    },
  },
  settings: {
    header: "समायोजन",
    locationSettings: "स्थान सेटिंग्स",
    notificationSettings: "अधिसूचना सेटिंग्स",
    termsAndConditions: "नियम और शर्तें",
    contactUs: "संपर्क करें",
    language: "भाषा",
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
    localCalculations: "स्थानीय गणना",
  },
  resources: {
    header: "संसाधन",
    searchPlaceholder: "खोज लेख, घटनाएँ, आदि ...",
    suggestions: "सुझाव",
    searchResults: "खोज के परिणाम",
    tabs: {
      news: "समाचार",
      about: "के बारे में",
      details: "विवरण",
    },
  },
}

export default hi
export type Translations = typeof hi
