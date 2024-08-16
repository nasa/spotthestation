const tr = {
  name: "Türkçe",
  errorScreen: {
    title: "Bir şeyler yanlış gitti!",
    friendlySubtitle:
      "Bir hata oluştuğunda kullanıcılarınızın üretimde göreceği ekran budur. Bu mesajı (`app/i18n/en.ts` içinde bulunur) ve muhtemelen düzeni de (`app/screens/ErrorScreen`) özelleştirmek isteyeceksiniz. Bunu tamamen kaldırmak isterseniz, `app/app.tsx` içindeki <ErrorBoundary> bileşenine bakın.",
    reset: "UYGULAMAYI SIFIRLA",
  },
  snackBar: {
    ok: "TAMAM",
    dismiss: "Kapat",
    sightingsSaved: "Son kaydedilen konum için gözlemler yüklendi!",
    defaultError: "Bir hata oluştu",
    locationSaved: "Konum kaydedildi",
    locationExist: "Bu başlıkla bir konum zaten var!",
    openSettingsError: "Ayarlar açılamıyor!",
    shared: "Başarıyla paylaşıldı!",
    savedToGallery: "Galeride kaydedildi",
  },
  outdatedModal: {
    title: "Güncelleme Mevcut",
    body: "Uygulamanın yeni sürümü mevcut! Yeni sürümü indir",
    buttonNegative: "İptal",
    buttonPositive: "İndir",
  },
  permissionsModal: {
    close: "Kapat",
    openSettings: "Ayarları aç",
    body: "Bu özelliği kullanmak için galeriye erişim izni vermeniz gerekiyor.",
  },
  permissionsAndroid: {
    title: "Videoları kaydetme izni",
    message: "Bu uygulamanın cihazınıza video kaydetme iznine ihtiyacı var.",
    buttonNeutral: "Daha Sonra Sor",
    buttonNegative: "İptal",
    buttonPositive: "TAMAM",
    alarmPermissionTitle: "İzin gerekli",
    alarmPermissionMessage:
      "Yaklaşan gözlemler hakkında bildirim almak için bir sonraki ekranda alarm ve hatırlatıcı izni verin.",
  },
  thanksModal: {
    body: "Bizimle iletişime geçtiğiniz için teşekkür ederiz. Mesajınızı aldık ve talebinizi işleme alacağız. Bu uygulamanın kullanıcı verilerini toplamadığını lütfen unutmayın, bu nedenle tüm mesajlara bireysel olarak yanıt veremeyiz.",
    dismiss: "Kapat",
  },
  privacy: {
    title: "Konumunuzu kullanın",
    body: "Mevcut konumunuzdaki yaklaşan gözlemleri hesaplamak için konum verilerini kullanıyoruz. Uygulama kullanılmadığında konum verilerine erişim gerekmemektedir. Bu işlevselliği etkinleştirmek için lütfen konum izinlerini verin.",
    agree: "KABUL ET",
    skip: "GEÇ",
    policy: "Gizlilik Politikası",
  },
  notifications: {
    push: {
      title: "İstasyonu şimdi gözlemleyin!",
      subTitle: "İstasyon üzerinizden geçiyor",
    },
    before: {
      titleOne: "İstasyonu gözlemleyin",
      titleTwo: "dakika içinde!",
      subTitleOne: "İstasyon üzerinizden geçiyor",
      subTitleTwo: "dakika içinde",
    },
  },
  units: {
    minute: "dak",
    kilometer: "km",
    kilogram: "kg",
    month: "ay",
    metersPerSecond: "M/S",
    time: "Z",
  },
  tabNavigator: {
    homeTab: "Ana Sayfa",
    issViewTab: "AR Görünüm",
    issNowTab: "İzleyici",
    resourcesTab: "Kaynaklar",
    settingsTab: "Ayarlar",
  },
  onboarding: {
    splash: {
      title: "İstasyonu Gözlemle",
      subTitle: "Gökyüzüne bakın ve Uluslararası Uzay İstasyonu'nu görün",
    },
    completeProfile: {
      notification: {
        title: "Bildirim Ayarları",
        label: "Anlık Bildirim Uyarıları Al",
        tip: "Uzay istasyonu konumunuza yaklaştığında uyarılar alın.",
        nextButton: "İleri",
      },
      location: {
        title: "Konumunuz",
        subtitle:
          "Uygulamanın konumunuzu otomatik olarak algılamasına izin verin veya konumunuzu manuel olarak sağlayın.",
        detectButton: "Konumumu Algıla",
        orLabel: "veya",
        selectLocation: "Konumunuzu girin",
        detecting: "Konum algılanıyor...",
        doneButton: "Tamam",
        serviceAlertTitle: "Konum Hizmetleri devre dışı",
        serviceAlertBody: "Devam etmek için lütfen konum hizmetlerinizi etkinleştirin.",
        permissionAlertTitle: "İzin verilmedi",
        permissionAlertBody:
          "Mevcut konumunuzdaki yaklaşan gözlemleri hesaplamak için konum verilerini kullanıyoruz. Bu işlevselliği etkinleştirmek için lütfen konum izinlerini verin.",
      },
    },
  },
  homeScreen: {
    initLoader: {
      message: "İstasyon verileri yükleniyor… Bu biraz zaman alabilir.",
      trajectoryError:
        "İstasyon yörünge verileri şu anda sunucu bakımı nedeniyle kullanılamıyor. Lütfen daha sonra tekrar kontrol edin.",
      noNetwork:
        "İstasyon yörünge verileri bağlantı olmadığı için şu anda kullanılamıyor. Lütfen daha sonra tekrar kontrol edin.",
    },
    header: {
      firstTimeHead: "SONRAKİ GÖZLEMLER LİSTESİ",
      secondTimeHead: "GERİ SAYIM",
      timezone: "Saat Dilimi",
    },
    selectLocation: {
      title: "Konum Seç",
      inputPlaceholder: "Şehir, pin ile konum ara...",
      current: "Mevcut konum",
      saved: "Kaydedilen konumlar",
      nearby: "Yakındaki konumlar",
      search: "Arama sonuçları",
      cta: "Bu konum için bildirimleri özelleştir",
      actionTitle: "Uyarı",
      refresh: "Yenile",
    },
    selectSightings: {
      title: "Yaklaşan Gözlemler",
      sightings: "Gözlemler",
      selectMessage: "Bildirim almak istediğiniz etkinlikleri seçin.",
      switch: "Bu konumdaki tüm yaklaşan etkinlikler için beni bilgilendir.",
      aboveHorizon: "Ufkun üzerinde",
      maxHeight: "Maksimum yükseklik",
      today: "Bugün",
      tomorrow: "Yarın",
      appears: "Görünüyor",
      disappears: "Kayboluyor",
      all: "Hepsi",
      timeOfDay: "Günün saati",
      night: "Gece",
      twilight: "Alacakaranlık",
      duration: "Süre",
      shorterThan2: "2 dakikadan kısa",
      longerThan2: "2 dakika ve daha uzun",
      empty: "{{start}} ile {{end}} arasında bu konum için potansiyel İstasyon gözlemi yok.",
      shareTitle: "İstasyon {{location}} üzerinde {{date}} tarihinde geçiyor",
      shareLink:
        "Daha fazla keşfetmek ve istasyonu artırılmış gerçeklik ile izlemek için uygulamayı indirin",
      coach: {
        title: "Simgelerin Açıklaması",
        moon: "İstasyon ufkun üzerinde olduğunda seçilen konumda gece olacak.",
        sunset: "İstasyon ufkun üzerinde olduğunda seçilen konumda alacakaranlık olacak.",
      },
      compass: {
        N: "K",
        NNE: "KKB",
        NE: "KB",
        ENE: "DKB",
        E: "D",
        ESE: "DGD",
        SE: "GD",
        SSE: "GKD",
        S: "G",
        SSW: "GGB",
        SW: "GB",
        WSW: "BGB",
        W: "B",
        WNW: "BKB",
        NW: "KB",
        NNW: "KKB",
      },
    },
    coachMarks: {
      skip: "Turu atla",
      next: "İleri",
      finish: "Bitir",
      dismiss: "Kapat",
      locationTitle: "Konumu Değiştir",
      locationData: "Buradan konumunuzu seçebilir veya değiştirebilirsiniz.",
      sightingsTitle: "Sonraki Gözlem ve Geri Sayım",
      sightingsData:
        "Bu bölüm, seçilen konumunuzun yakınındaki bir sonraki İstasyon gözlemi için tarihi ve geri sayım sayacını gösterir. Yaklaşan gözlemlerin tam listesini görmek için Sonraki Gözlem kutusuna dokunabilirsiniz.",
      globeTitle: "Etkileşimli Dünya",
      globeData:
        "Ekranda kaydırarak İstasyonun gerçek zamanlı konumunu görebilirsiniz. Bu, Dünya ile etkileşime girmenizi ve ISS'nin konumunu gerçek zamanlı olarak takip etmenizi sağlar.",
      mapTitle: "2D Harita Görünümü",
      mapData:
        "Bu bölüm, İstasyonun tam yolunu gece ve gündüz bölgelerine karşı 2D bir temsilini gösterir.",
      navigationTitle: "Gezinme",
      navigationData:
        "Aşağıdaki gezinme menüsünden uygulamanın farklı özelliklerine göz atabilirsiniz.",
    },
  },
  issView: {
    timeHeader: "Geri Sayım",
    cameraPermissionText:
      "Telefonunuzun kamerasının kullanımına izin vermediniz. İzin vermek için buraya tıklayın.",
    issCaptured: "Bu anı yakala",
    details: {
      title: "Bilgi",
      orbitalSpeed: "Yörünge hızı",
      longitude: "Boylam",
      latitude: "Enlem",
      altitude: "Yükseklik",
      crewOnboard: "Tipik Mürettebat Sayısı",
      launched: "Montaj Başladı",
      launchedValue: "20 Kasım 1998",
      mass: "Tahmini Kütle",
      dimensions: "Tahmini Boyutlar",
      orbitalPeriod: "Yörünge Dönemi",
      orbitsPerDay: "Günlük Yörüngeler",
      dimensionsValue: "109m genişliğinde x 73m uzunluğunda x 14m yüksekliğinde",
      dateTime: "Tarih ve Saat",
      maxHeight: "Maksimum Yükseklik",
      duration: "Ufkun Üzerinde Kalma Süresi",
      appears: "Görünüyor",
      disappears: "Kayboluyor",
      distance: "Mesafe",
      nextSighting: "Sonraki Gözlem",
    },
    arNotSupported: "AR bu cihazda desteklenmiyor",
    noOrientationSensor: "Yön sensörü mevcut değil",
    noMagnetometerSensor: "Manyetometre mevcut değil",
    screenshotError: "Ekran görüntüsü alınamıyor",
    coachMarks: {
      circleTitle: "İstasyonu Gözlemle",
      circleData:
        "İstasyonu gözlemlemek için telefonunuzu dairenin dışındaki ok yönünde hareket ettirin. Yaklaştıkça dairenin rengi yeşile dönecektir.",
      compassTitle: "Pusula",
      compassData:
        "Bu pusula, baktığınız yönü ve istasyonu gözlemleyebileceğiniz göreceli yönü gösterir.",
      infoTitle: "Bilgi",
      infoData:
        "Bu geçiş, mevcut veya bir sonraki yaklaşan gözlem hakkında ayrıntılı bilgi ve istasyon hakkında canlı bilgi içeren pencereyi açar veya kapatır.",
      trajectoryTitle: "İstasyon Yörüngesi",
      trajectoryData:
        "Bu geçiş, istasyon yörüngesini ekranda açar veya kapatır. Kesik çizgi gelecekteki yörüngeyi, düz çizgi ise geçmiş yörüngeyi gösterir.",
      arTitle: "AR Görünüm",
      arData: "Bu geçiş, tam ekran ve kısmi AR görünümleri arasında geçiş yapar.",
      shareTitle: "Paylaş",
      shareData:
        "Bu düğme, AR görünümünün ekran görüntüsünü metin mesajı, e-posta veya sosyal medya aracılığıyla paylaşmanıza olanak tanır.",
      screenshotTitle: "Ekran Görüntüsü",
      screenshotData:
        "Bu düğme, AR görünümünün ekran görüntüsünü fotoğraf galerinizde kaydetmenize olanak tanır.",
      videoTitle: "Video Kaydı",
      videoData:
        "Bu düğme, istasyonu gözlemlediğiniz anları yakalamak için AR görünümünün videosunu kaydetmenize olanak tanır.",
    },
    safetyReminder: {
      title: "Dikkat: Güvenlik Hatırlatması",
      subtitle1: "Ebeveyn Gözetimi Önerilir:",
      body1:
        "Bu uygulamadaki AR ekranıyla etkileşimde bulunurken ebeveyn gözetiminin önemini unutmayın. Çocuklar, güvenli ve uygun bir deneyim sağlamak için bu özelliği sorumlu bir yetişkinin rehberliğinde kullanmalıdır.",
      subtitle2: "Çevrenize Dikkat Edin:",
      body2:
        "Artırılmış gerçeklik deneyiminin tadını çıkarırken, fiziksel çevrenizin farkında olun. Engeller, düzensiz zemin veya diğer tehlikeler gibi güvenliğinizi riske atabilecek unsurlara dikkat edin. Güvenliğiniz her şeyden önemlidir, bu yüzden her zaman dikkatli ve bilinçli olun.",
      home: "Ana Sayfaya Dön",
      ok: "Anladım",
    },
  },
  settings: {
    header: "Ayarlar",
    locationSettings: "Konum Ayarları",
    notificationSettings: "Bildirim Ayarları",
    termsAndConditions: "Şartlar ve Koşullar",
    contactUs: "Bize Ulaşın",
    language: "Dil",
    calibrateCompass: "Pusula Kalibrasyonu",
    calibrateCompassData: {
      instructions:
        "Pusulayı kalibre etmek için cihazınızı birkaç kez sekiz şekli çizerek döndürün.",
      accuracy: "Sensör Doğruluğu:",
      low: "Düşük",
      medium: "Orta",
      high: "Yüksek",
    },
    tutorials: "Eğitimler",
    tutorialsData: {
      description:
        "Ana Sayfa ve AR Görünüm sayfaları için adım adım eğitimleri bir kez daha görmek ister misiniz?",
      homePage: "Ana Sayfa",
      arPage: "AR Görünüm",
    },
    termsAndConditionsData: {
      backButton: "Ayarlar",
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
      backButton: "Ayarlar",
      title: "Bize Ulaşın",
      titlePlaceholder: "Başlık seçin",
      commentsPlaceholder: "Yorumları girin",
      sendButton: "Gönder",
      contactUsOptions: {
        reportAnIssue: "Bir Sorunu Bildir",
        improvementIdeas: "Geliştirme Fikirleri",
        generalQuestions: "Genel Sorular",
        comments: "Yorumlar",
      },
    },
    notificationSettingsData: {
      backButton: "Ayarlar",
      notificationTitle: "Bildirim Ayarları",
      privacyTitle: "Gizlilik Ayarları",
      upcomingLabel: "Yaklaşan Etkinlikler",
      customizeLabel: "Bildirimleri Özelleştir",
      upcomingTip: "Etkinlik bildirimlerini almak istemiyorsanız kapatın.",
      notifyMeBefore: "ÖNCEDEN BİLDİR",
      turnOffNotifications: "BİLDİRİMLERİ KAPAT",
      rangeInputPlaceholder: "1 ile 120 dakika arasında seçin",
      customOption: "Özel",
      from: "Başlangıç",
      until: "Bitiş",
    },
    locationSettingsData: {
      backToSettings: "Ayarlar",
      goBack: "Geri Dön",
      generalTitle: "Konum Ayarları",
      cta: "Bu konum için bildirimleri özelleştir",
      locationPermission: "Konum izni ver",
      addNewLocation: {
        generalTitleAdd: "Yeni Konum Ekle",
        generalTitleEdit: "Konumu Düzenle",
        confirnModalButton: "Onayla",
        saveButton: "Konumu Kaydet",
        searchInputPlaceholder: "Şehir, posta kodu veya adres girin",
        nameInputPlaceholder: "Konum Adını Kaydet",
      },
      removeLocation: {
        question: "Bu konumu silmek istediğinizden emin misiniz?",
        cancelButton: "İptal",
        removeButton: "Sil",
      },
    },
    shareTitle: "Paylaş",
    shareLink:
      "Uluslararası Uzay İstasyonu'nu artırılmış gerçeklik ile takip etmek için, NASA Spot The Station mobil uygulamasını indirin",
    localCalculations: "Yerel hesaplamalar",
  },
  resources: {
    header: "Kaynaklar",
    goBack: "Geri Dön",
    news: {
      title: "İstasyon Haberleri",
      searchPlaceholder: "Makaleler, etkinlikler vb. ara...",
      suggestions: "ÖNERİLER",
      searchResults: "Arama Sonuçları",
    },
    spotTheStation: {
      title: "İstasyonu Nasıl Görürüm?",
    },
    about: {
      title: "İstasyon Hakkında",
    },
    details: {
      title: "İstasyon Detayları",
    },
    faq: {
      title: "Sıkça Sorulan Sorular",
    },
    astronauts: {
      title: "Şu Anda İstasyonda Kim Var?",
      number: "Kişi sayısı:",
    },
    live: {
      title: "Canlı Yayın",
      description:
        "Şu anda, ISS'ye monte edilmiş bir harici HD kameradan Dünya'nın canlı videosu yayınlanıyor. Kamera Dünya'ya bakıyor ve ara sıra bir güneş paneli görüş alanından geçiyor.",
    },
    tour: {
      title: "Sanal Tur",
    },
    videos: {
      title: "İstasyon Videoları",
    },
    gallery: {
      title: "Galeri",
    },
  },
}

export default tr
export type Translations = typeof tr
