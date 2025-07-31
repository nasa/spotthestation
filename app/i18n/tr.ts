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
    bodyGallery: "Bu özelliği kullanmak için galeriye erişim izni vermeniz gerekiyor.",
    bodyCalendar: "Bu özelliği kullanmak için takvime erişim izni vermeniz gerekir.",
  },
  fontSizeModal: {
    title: "Yazı Tipi Boyutu Çok Büyük",
    body1:
      "Cihazınızın yazı tipi boyutunun çok yüksek ayarlandığı görünüyor. Bu, uygulamada bazı önemli bilgilerin kesilmesine veya yanlış görüntülenmesine neden olabilir.",
    bodyAndroid:
      "Yazı tipi boyutunu ayarlamak için Ayarlar → Ekran → Yazı tipi boyutu ve stili → Kaydırıcıyı daha küçük bir boyuta ayarlayın.",
    bodyIOS:
      "Yazı tipi boyutunu ayarlamak için Ayarlar → Erişilebilirlik → Ekran ve Metin Boyutu → Daha Büyük Metin → Kaydırıcıyı daha küçük bir boyuta ayarlayın.",
    cancel: "İptal",
    settings: "Ayarlar'a Git",
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
    body: "Bizimle iletişime geçtiğiniz için teşekkür ederiz. Mesajınızı aldık ve talebinizi işleme alacağız. Bu uygulamanın kullanıcı verilerini toplamadığını lütfen unutmayın, bu nedenle tüm mesajlara bireysel olarak yanıt veremeyiz. Sorunuza bir yanıt olup olmadığını görmek için lütfen Sıkça Sorulan Sorular sayfasını ziyaret edin.",
    dismiss: "Kapat",
    faq: "SSS",
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
      subTitleIos: "İstasyon üzerinizden geçiyor",
      subTitleAndroid: "İstasyon şu anda üzerinizden geçiyor ({{time}}) de",
    },
    before: {
      title: "{{amount}} {{units}} içinde İstasyonu gözlemle!",
      subTitleIos: "İstasyon {{amount}} {{units}} içinde {{location}} üzerinden geçecek",
      subTitleAndroid:
        "İstasyon {{amount}} {{units}} ({{time}}) içinde {{location}} üzerinden geçecek",
      minutes: "dakika",
      hours: "saat",
    },
    timeLeft: "KALAN ZAMAN",
  },
  units: {
    minute: "dak",
    kilometer: "km",
    kilogram: "kg",
    month: "ay",
    metersPerSecond: "M/S",
    time: "Z",
    hour: "sa",
    mile: "mi",
    foot: "ft",
    meter: "m",
    pound: "lbs",
    milesPerHour: "mph",
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
      title: "İstasyonu\nGözlemle",
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
      between2And4: "2 ile 4 dakika arasında",
      longerThan4: "4 dakika ve daha uzun",
      empty: "{{start}} ile {{end}} arasında bu konum için potansiyel İstasyon gözlemi yok.",
      shareTitle: "İstasyon {{location}} üzerinde {{date}} tarihinde geçiyor",
      shareLink:
        "Daha fazla keşfetmek ve istasyonu artırılmış gerçeklik ile izlemek için uygulamayı indirin",
      calendarEventTitle: "{{location}}'da İstasyonu Görün!",
      calendarSuccess: "Takvim etkinliği başarıyla oluşturuldu",
      calendarError: "Takvim etkinliği oluşturulamadı",
      coach: {
        title: "Simgelerin Açıklaması",
        moon: "İstasyon ufkun üzerinde olduğunda seçilen konumda gece olacak.",
        sunset: "İstasyon ufkun üzerinde olduğunda seçilen konumda alacakaranlık olacak.",
      },
      cloudCover: {
        title: "Bulut Örtüsü",
        any: "Herhangi",
        low: "Düşük (<25%)",
        medium: "Orta (25-50%)",
      },
      pastSightings: "Geçmiş Gözlemler",
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
      dimensionsValue: "{{width}} genişliğinde x {{length}} uzunluğunda x {{height}} yüksekliğinde",
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
    timeFormat: "Zaman Formatı",
    unitsOfMeasurement: "Birimler",
    metric: "Metrik",
    imperial: "İmparatorluk (ABD)",
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
      questions: {
        question1: "1. Uluslararası Uzay İstasyonu neden orada?",
        answer1:
          "Uluslararası Uzay İstasyonu, insanlık yararına Dünya'da mümkün olmayan araştırmaları mümkün kılan bilim, teknoloji ve insan yeniliğinin bir birleşimidir. NASA, 24 yılı aşkın süredir astronotların uzun süreler boyunca uzayda yaşamayı ve çalışmayı öğrendiği istasyonda sürekli bir ABD insan varlığını desteklemektedir.<br/>" +
          "Amerika Birleşik Devletleri, Rusya, Kanada, Japonya ve ESA (Avrupa Uzay Ajansı) katılımcı ülkelerini içeren uzay istasyonu, şimdiye kadar denenen en karmaşık, birbirine bağımlı uluslararası işbirliklerinden biridir. Uluslararası uçuş ekiplerini ve birden fazla uzay taşımacılığı sağlayıcısını, ayrıca küresel olarak dağıtılmış destek ekiplerini, tesisleri, iletişim ağlarını ve dünya çapındaki bilim camiasını bir araya getirir.<br/>" +
          "Son 24 yılda, uzay istasyonu, 109'dan fazla ülkeden bilim insanlarının aşırı ve benzersiz bir uzay uçuşu ortamında 4.000'den fazla çığır açan deney yapmalarını sağlayan araştırma yeteneklerine sahip bir yörünge laboratuvarına dönüştü.<br/>" +
          "Uzay istasyonu, Artemis altında Ay'a yapılacak görevler ve nihayetinde Mars'ın insanlı keşfi de dahil olmak üzere, düşük Dünya yörüngesi ekonomisinin geliştirilmesi ve NASA'nın keşifteki bir sonraki büyük adımları için bir sıçrama tahtası görevi görür.<br/>" +
          "Uluslararası Uzay İstasyonu, araştırmaları ve mürettebatı hakkında daha fazla bilgi edinin:<br/>" +
          "<a href='https://www.nasa.gov/station'>https://www.nasa.gov/station</a>",

        question2: "2. Uluslararası Uzay İstasyonu ne kadar hızlı seyahat ediyor?",
        answer2:
          "Uluslararası Uzay İstasyonu, her 90 dakikada bir Dünya'nın etrafında döner. Yaklaşık 28.000 kilometre/saat hızla seyahat eder, bu da mürettebatın her gün 16 gün doğumu ve gün batımı görmesini sağlar. Kasım 2000'den bu yana uzay istasyonu sürekli olarak işgal edilmiştir. Bu süre zarfında, 23 ülkeden 280 kişi bu yörünge karakolunu ziyaret etti ve istasyon Dünya'nın etrafında yüz binlerce kez döndü.",

        question3: "3. Uluslararası Uzay İstasyonu'nu ne sıklıkla görebilirim?",
        answer3:
          "Uluslararası Uzay İstasyonu, güneş ışığını yansıttığı için görünür – Ay'ı görebilmemizin aynı nedeni. Ancak, Ay'ın aksine, uzay istasyonu gündüzleri görmek için yeterince parlak değildir. Gözlem fırsatları, Güneş ışığının istasyondan yansıdığı ve konumunuzun üzerinde şafak ve alacakaranlıkta geçtiği için ayda bir kezden haftada birkaç kez değişebilir.",

        question4: "4. Spot the Station uygulaması nedir?",
        answer4:
          "Spot the Station mobil uygulaması, kullanıcıların Uluslararası Uzay İstasyonu'nun kendi konumları üzerinden geçerken izlemelerine ve bildirim almalarına yardımcı olan resmi bir NASA uygulamasıdır. Ayrıca gerçek zamanlı izleme, uçuş programları ve uyarılar sağlar.",

        question5: "5. Spot the Station mobil uygulamasını nasıl indiririm?",
        answer5:
          "Spot the Station mobil uygulaması, iOS ve Android mobil ve tablet cihazlarda mevcuttur.",

        question6:
          "6. Spot the Station uygulaması, Uluslararası Uzay İstasyonu'nun yaklaşan gözlem fırsatları hakkında beni nasıl bilgilendirir?",
        answer6:
          "Spot the Station uygulaması, Uluslararası Uzay İstasyonu'nun yaklaşan geçişleri hakkında kullanıcıları uyarmak için push bildirimleri gönderir. Kullanıcılar, cihazlarının ayarlarında uygulama bildirim izinlerinin etkin olduğundan emin olmalıdır.",

        question7: "7. Spot the Station uygulamasında bildirimleri özelleştirebilir miyim?",
        answer7:
          "Spot the Station uygulaması, kullanıcının tercih ettiği konum ve zamanlamaya özel push bildirimleri almak için kişiselleştirilmiş uyarı ayarlarını yapılandırma yeteneğine sahiptir. Bildirim ayarları, kullanıcıların tüm yaklaşan etkinlikler için bildirimleri açabileceği veya şu anda seçili konum için bildirimleri özelleştirebileceği uygulamanın ayarlar sayfasında bulunabilir. Kullanıcılar, Konum Ayarları aracılığıyla diğer konumlar için bildirimleri özelleştirebilir.",

        question8: "8. Bildirim almıyorsam ne yapmalıyım?",
        answer8:
          "Kullanıcılar, cihazın tercih edilen bir konum ve zamanda uyarılar için ayarlandığını doğrulamak için Spot the Station uygulamasındaki bildirim tercihlerini (Ayarlar sayfasındaki Bildirim Ayarları) kontrol etmelidir. Kullanıcılar hala uyarı almıyorsa, cihazlarının ayarlarında bildirimlerin etkin olduğundan emin olmalıdır.",

        question9: "9. Spot the Station uygulaması uluslararası düzeyde çalışıyor mu?",
        answer9:
          "Spot the Station uygulaması, İngilizce, Hollandaca, Fransızca, Almanca, Hintçe, İtalyanca, Japonca, Lehçe, Portekizce (Brezilya), Rusça, İspanyolca, Türkçe ve Ukraynaca dahil olmak üzere birçok dilde ve dünya genelinde mevcuttur. Uygulama, çoğu yerleşim yeri için gözlem bilgileri sağlar, bu da Uluslararası Uzay İstasyonu'nun neredeyse her yerden geçerken görülmesini kolaylaştırır.",

        question10: "10. Konumum için neden gözlem fırsatları yok?",
        answer10:
          "Konumunuzda karanlık ve iyi bir görüş olmalı ve uzay istasyonu görmek için üzerinizde olmalıdır. Uzay istasyonunun yörüngesi onu dünya çapında dolaştırdığı için, gün ortasında veya gece yarısında görünmeyeceği zamanlarda üzerinizden geçebilir. Spot The Station, yalnızca konumunuzda Uluslararası Uzay İstasyonu'nu görme fırsatları olduğunda bildirim gönderir, her seferinde üzerinizde olduğunda değil.",

        question11: "11. Uluslararası Uzay İstasyonu'nu görmek için teleskopa ihtiyacım var mı?",
        answer11:
          "Hayır, kullanıcılar Uluslararası Uzay İstasyonu'nu çıplak gözle görebilir, ek ekipman gerekmez.",

        question12: "12. Uluslararası Uzay İstasyonu, Ay'ın ışığı nedeniyle mi görünüp kayboluyor?",
        answer12:
          "Uluslararası Uzay İstasyonu, güneş ışığını yansıttığı için görünür. Bu, Ay'ın parlıyor gibi görünmesinin aynı nedenidir. Ay henüz doğmamış olsa bile, kullanıcılar istasyonu görebilir.",

        question13: "13. Uyarı bildirimleri için hangi saat dilimi kullanılıyor?",
        answer13:
          "Spot the Station uygulamasındaki tüm içerik, kullanıcının seçtiği konum için yerel saat diliminde listelenmiştir. Uygulama, yaz saati uygulamasına otomatik olarak ayarlanır.",

        question14: "14. Spot the Station uygulaması her gözlem için hangi bilgileri sağlar?",
        answer14:
          "Her gözlem için Spot the Station uygulaması, zamanı, görünürlük süresini, ufuk üzerindeki maksimum yüksekliği ve Uluslararası Uzay İstasyonu'nun görünüp kaybolacağı yönleri gösterir, bu da kullanıcıların onu gökyüzünde doğru bir şekilde bulmasına yardımcı olur.",

        question15:
          "15. Bir gözlem fırsatı sırasında Uluslararası Uzay İstasyonu'nu nasıl bulabilirim? Tüm bu bilgiler ne anlama geliyor?",
        answer15:
          'Spot the Station uygulaması, kullanıcılar ana sayfadaki "Sonraki Gözlem Listesi"ne dokunursa "Yaklaşan Gözlemler" listesini sağlar.<br/>' +
          "<strong>Tarih ve saat</strong>, yerel saat diliminde gözlem fırsatının başlayacağı zamandır. Tüm geçişler, gün doğumundan veya gün batımından birkaç saat önce veya sonra gerçekleşecektir. Bu, Güneş'in Uluslararası Uzay İstasyonu'ndan yansıdığı ve daha karanlık gökyüzüne karşı kontrast oluşturduğu için en uygun gözlem dönemidir.<br/>" +
          "<strong>Ufuk üzerinde</strong>, istasyonun ufkun altına geri dönmeden önce görülebileceği maksimum süreyi ifade eder.<br/>" +
          "<strong>Maksimum yükseklik</strong>, derece cinsinden ölçülür (aynı zamanda yükseklik olarak da bilinir). Bu, gece gökyüzünde ufuktan istasyonun yüksekliğini temsil eder. Ufuk sıfır derecedir ve doğrudan yukarıda 90 derecedir. Kullanıcılar yumruklarını kol mesafesinde tutup ufka yerleştirirse, üst kısmı yaklaşık 10 derece yükseklikte olacaktır.<br/>" +
          "<strong>Görünür</strong>, istasyonun ilk olarak görüneceği gökyüzündeki konumdur. Bu değer, maksimum yükseklik gibi, ufuktan derece cinsinden de ölçülür. Harfler pusula yönlerini temsil eder – N kuzeydir, WNW batı-kuzeybatıdır ve bu şekilde devam eder.<br/>" +
          "<strong>Kaybolur</strong>, istasyonun gece gökyüzünde görüş alanından çıkacağı yeri temsil eder." +
          "<img src='https://sts-app-resources.s3.us-east-1.amazonaws.com/astro_horizon.png' />",

        question16:
          "16. Uçuş programı, Uluslararası Uzay İstasyonu'nun aynı yönden görünüp kaybolduğunu belirtiyor, bu nasıl mümkün olabilir?",
        answer16:
          "Spot the Station yazılımı, yönleri en yakın ana ve ara yönlere yuvarlar. Bu, Uluslararası Uzay İstasyonu'nun gökyüzünde hareket etmesine rağmen aynı yönde görünüp kaybolacakmış gibi görünmesine neden olabilir. Bu genellikle kısa bir görünürlük penceresi olan uçuşlarda meydana gelir, çünkü istasyon hızla Dünya'nın karanlık gölgesine girip çıkmaktadır, bu da kullanıcının yerdeki konumundan gökyüzünde tam bir geçişin gözlemlenemeyeceği anlamına gelir.",

        question17:
          "17. Uluslararası Uzay İstasyonu'nun konumunu gösteren canlı bir harita görebilir miyim?",
        answer17:
          "Evet, Spot the Station uygulaması, Uluslararası Uzay İstasyonu'nun Dünya etrafında dönerken mevcut konumunu gösteren bir gerçek zamanlı harita içerir ve kullanıcılara ilerlemesini izlemek için görsel bir referans sağlar.",

        question18: "18. Spot the Station uygulamasındaki artırılmış gerçeklik özelliği nedir?",
        answer18:
          "Spot the Station uygulamasındaki artırılmış gerçeklik özelliği, kullanıcılara gökyüzünde Uluslararası Uzay İstasyonu'nun yolunun sanal bir örtüsünü görme imkanı tanır. Bu özellik, kullanıcıların cihazlarını istasyonun gerçek zamanlı konumuyla hizalayarak istasyonu daha doğru bir şekilde bulmalarına yardımcı olur.",

        question19:
          "19. Spot the Station uygulamasında artırılmış gerçeklik özelliğine nasıl erişebilirim?",
        answer19:
          'Artırılmış gerçeklik özelliğine erişmek için Spot the Station uygulamasını açın ve alt menüdeki "AR Görünümü" seçeneğine gidin. Cihazın kamerasını gökyüzüyle hizalamak için ekrandaki talimatları izleyin, burada uygulama Uluslararası Uzay İstasyonu\'nun konumunu ve yörüngesini gösteren sanal bir örtü gösterecektir.',

        question20:
          "20. Artırılmış gerçeklik özelliğini kullanmak için belirli bir cihaza veya yazılıma ihtiyacım var mı?",
        answer20:
          "Spot the Station'ın artırılmış gerçeklik özelliği, 3D uzayda yönünü belirleyebilen bir cihaz gerektirir. Jiroskop veya hareket yardımcı işlemcisi gibi belirli donanım desteği gerektirir. Daha eski veya bütçe dostu cihazlar bu işlevselliği desteklemeyebilir.",

        question21: "21. Artırılmış gerçeklik özelliği nasıl çalışır?",
        answer21:
          "Cihazın kamerasını ve sensörlerini kullanarak, Spot the Station'ın artırılmış gerçeklik özelliği, Uluslararası Uzay İstasyonu'nun konumunu gökyüzünde ekrana bindirir ve kullanıcı cihazı hareket ettirdikçe gerçek zamanlı olarak ayarlanır. Uygulama, kullanıcıları cihazın kamerasını doğru yöne yönlendirmeleri için yönlendirir ve istasyonun nerede görünüp kaybolacağını gösterir.",

        question22:
          "22. Artırılmış gerçeklik özelliğini hem gündüz hem de gece kullanabilir miyim?",
        answer22:
          "Evet, Spot the Station uygulamasındaki artırılmış gerçeklik özelliği hem gündüz hem de gece kullanılabilir; ancak, en iyi izleme deneyimi genellikle Uluslararası Uzay İstasyonu'nun çıplak gözle görülebildiği alacakaranlık veya gece saatlerinde olur. Artırılmış gerçeklik örtüsü, ışık koşullarından bağımsız olarak çalışacaktır, ancak gerçek izleme fırsatları görünürlüğe bağlıdır.",

        question23: "23. Artırılmış gerçeklik örtüsü tüm konumlar için doğru mu?",
        answer23:
          "Evet, Spot the Station uygulamasındaki artırılmış gerçeklik özelliği, cihazın GPS konumuna dayalı olarak doğru konum bilgileri sağlamak üzere tasarlanmıştır. Ancak, cihazın pusula ve sensör kalibrasyonuna bağlı olarak doğruluk biraz değişebilir. Kullanıcılar tutarsızlık fark ederse, cihazın pusulasını ayarlar üzerinden yeniden kalibre edin.",

        question24:
          "24. Artırılmış gerçeklik özelliği, kesin gözlem zamanlarına yardımcı olabilir mi?",
        answer24:
          "Spot the Station uygulamasındaki artırılmış gerçeklik özelliği, kullanıcıları Uluslararası Uzay İstasyonu'nun gökyüzünde göründüğü kesin zamanda bulmaları için görsel olarak yönlendirir. Uygulamanın uyarılarıyla birlikte, istasyonu görme yeteneğini artırır ve onu doğru bir şekilde izlemek için canlı, görsel bir yön ve yükseklik göstergesi sağlar.",

        question25: "25. Artırılmış gerçeklik deneyimimi optimize etmek için ipuçları var mı?",
        answer25:
          "Spot the Station uygulamasında en iyi artırılmış gerçeklik deneyimi için, özelliği gökyüzünün net bir şekilde görülebildiği açık bir alanda kullanın. Yüksek binalar veya ağaçlar gibi engellerden kaçının, çünkü bunlar görünürlüğü engelleyebilir. Cihazın pusulasını kalibre edin ve konum hizmetlerinin ve kamera izinlerinin sorunsuz çalışması için etkin olduğundan emin olun.",

        question26:
          "26. Artırılmış gerçeklik özelliği hem iOS hem de Android cihazlarda mevcut mu?",
        answer26:
          "Evet, Spot the Station uygulamasının artırılmış gerçeklik özelliği, cihazınız donanım gereksinimlerini karşıladığı sürece hem iOS hem de Android mobil ve tablet cihazlarda mevcuttur.",

        question27: "27. Spot the Station uygulaması çevrimdışı çalışıyor mu?",
        answer27:
          "Önceden indirilen gözlem fırsatı programlarına erişim veya planlanmış bildirimlerin alınması gibi bazı temel işlevler çevrimdışı çalışabilir. Ancak, izleme gibi gerçek zamanlı veri gerektiren işlevler, hücresel hizmet veya internet bağlantısı gerektirir.",

        question28: "28. Spot the Station uygulamasını kullanmak için özel gereksinimler var mı?",
        answer28:
          "Spot the Station uygulaması, gerçek zamanlı izleme ve uyarılar için aktif hücresel hizmet veya internet bağlantısı gerektirir. Ayrıca, konuma özel bilgiler için, cihazın konum hizmetlerinin uygulama için etkin olduğundan emin olun.",

        question29: "29. Spot the Station uygulaması ücretsiz mi?",
        answer29:
          "Evet, Spot the Station uygulaması indirmek ve kullanmak için ücretsizdir, uygulama içi satın alımlar veya abonelikler yoktur.",

        question30: "30. Spot the Station uygulaması desteği için kiminle iletişime geçebilirim?",
        answer30:
          "Spot the Station uygulaması desteği için, uygulamanın geri bildirim seçeneği aracılığıyla iletişime geçin veya <a href='mailto:hq-spotthestation@mail.nasa.gov'>Spot the Station ekibine e-posta gönderin</a>.",
      },
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
    earthScience: { title: "Jordvetenskapsdataresurser" },
  },
}

export default tr
export type Translations = typeof tr
