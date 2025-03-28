const ja = {
  name: "日本語",
  errorScreen: {
    title: "正常に動作しませんでした！",
    friendlySubtitle:
      "これはエラーが投げられた時にユーザーに表示される画面です。このメッセージ（ `app/i18n/en.ts`）及び恐らくレイアウト（` app/screens/errorscreen`）をカスタマイズしたいかと思います。これを完全に削除する場合は、<ErrorBoundary>コンポーネントに対しては「app/app.tsx`」をご確認ください。",
    reset: "アプリをリセットします",
  },
  snackBar: {
    ok: "OK",
    dismiss: "終了",
    sightingsSaved: "最後に保存された位置情報に対する発見情報がロードされました！",
    defaultError: "いくつかエラーが発生しました",
    locationSaved: "位置情報が保存されています",
    locationExist: "このタイトルのある位置情報はすでに存在しています！",
    openSettingsError: "設定を開くことができません！",
    shared: "正常に共有されました！",
    savedToGallery: "ギャラリーに保存されます",
  },
  outdatedModal: {
    title: "アップデート利用可能",
    body: "新しいバージョンのアプリが利用可能です！新しいバージョンをダウンロードしてください",
    buttonNegative: "キャンセル",
    buttonPositive: "ダウンロード",
  },
  permissionsModal: {
    close: "閉じる",
    openSettings: "設定を開く",
    body: "この機能を使用するには、ギャラリーにアクセスする許可を付与する必要があります。",
  },
  fontSizeModal: {
    title: "フォントサイズが大きすぎます",
    body1:
      "お使いのデバイスのフォントサイズが大きすぎるようです。これにより、アプリ内の重要な情報が切り取られたり、正しく表示されない可能性があります。",
    bodyAndroid:
      "フォントサイズを調整するには、設定 → ディスプレイ → フォントサイズとスタイル → スライダーを小さいサイズに調整します。",
    bodyIOS:
      "フォントサイズを調整するには、設定 → アクセシビリティ → 表示とテキストサイズ → 大きな文字 → スライダーを小さいサイズに調整します。",
    cancel: "キャンセル",
    settings: "設定に移動",
  },
  permissionsAndroid: {
    title: "ビデオを保存する許可",
    message: "このアプリは、ビデオをデバイスに保存する許可が必要です。",
    buttonNeutral: "後ほど質問してください",
    buttonNegative: "キャンセル",
    buttonPositive: "OK",
    alarmPermissionTitle: "許可が必要です",
    alarmPermissionMessage:
      "次の画面でアラームとリマインダーの許可を付与してください。これにより、今後の観測に関する通知を受け取ることができます。",
  },
  thanksModal: {
    body: "ご連絡いただきありがとうございます。 メッセージを受信し、リクエストを処理させていただきます。 このアプリケーションはユーザーデータを収集しないため、すべてのメッセージに個別に返信することはできないことにご注意ください。",
    dismiss: "終了",
  },
  privacy: {
    title: "あなたの位置情報を使用してください",
    body: "位置情報データを使用して、現在地での今後の発見情報を計算します。この機能を有効にするには、位置情報の許可を与えてください。",
    agree: "同意",
    skip: "スキップ",
    policy: "プライバシーポリシー",
  },
  notifications: {
    push: {
      title: "今すぐステーションを見つけてください!",
      subTitleIos: "駅があなたの上を通り過ぎていきます",
      subTitleAndroid: "ステーションが現在あなたの上を通過しています ({{time}}) に",
    },
    before: {
      titleOne: "駅を見つける",
      titleTwo: "数分以内に！",
      subTitleOne: "駅があなたの上を通り過ぎていきます",
      subTitleTwoIos: "数分の間",
      subTitleTwoAndroid: "分 ({{time}}) に",
    },
  },
  units: {
    minute: "分",
    kilometer: "km",
    kilogram: "kg",
    month: "月",
    metersPerSecond: "MS",
    time: "T",
    hour: "時間",
    mile: "mi",
    pound: "lbs",
    milesPerHour: "mph",
  },
  tabNavigator: {
    homeTab: "家",
    issViewTab: "ARビュー",
    issNowTab: "トラッカー",
    resourcesTab: "リソース",
    settingsTab: "設定",
  },
  onboarding: {
    splash: {
      title: "国際宇宙ステーション\nISS）を見つけます",
      subTitle: "空を見上げてください。国際宇宙ステーション が見えます。",
    },
    completeProfile: {
      notification: {
        title: "通知設定",
        label: "プッシュ通知アラートを取得します",
        tip: "国際宇宙ステーション（ISS）があなたの位置に近づいている時にアラートを取得します。",
        nextButton: "次",
      },
      location: {
        title: "あなたの位置",
        subtitle:
          "アプリがあなたの位置を自動的に検出するか、あなたの位置を手動で提供することを許可してください。",
        detectButton: "私の位置を検出します",
        orLabel: "あるいは",
        selectLocation: "あなたの位置を入力してください",
        detecting: "位置の検出...",
        doneButton: "終わり",
        serviceAlertTitle: "位置サービスが無効になっています",
        serviceAlertBody: "位置サービスを継続できるようにしてください。",
        permissionAlertTitle: "許可が付与されていません",
        permissionAlertBody:
          "位置情報データを使用して、現在の位置で今後の発見を計算します。この機能を有効にするために、位置情報の許可を有効にしてください。",
      },
    },
  },
  homeScreen: {
    initLoader: {
      message: "ISSデータは読み込まれています...これには完了するまでに時間がかかる場合があります。",
      trajectoryError:
        "ISS軌道データは、サーバーのメンテナンスにより現在利用できません。後でもう一度確認してください。",
      noNetwork:
        "現在、接続がありませんので、駅の軌道データは利用できません。後でもう一度確認してください。",
    },
    header: {
      firstTimeHead: "次の目撃情報リスト",
      secondTimeHead: "カウントダウン",
      timezone: "タイムゾーン",
    },
    selectLocation: {
      title: "[位置]を選択します",
      inputPlaceholder: "都市ごとの検索、ピン...",
      current: "現在位置",
      saved: "保存された位置",
      nearby: "近くの位置",
      search: "検索結果",
      cta: "この位置の通知をカスタマイズします",
      actionTitle: "アラート",
      refresh: "リフレッシュ",
    },
    selectSightings: {
      title: "今後の発見情報",
      sightings: "発見情報",
      selectMessage: "通知したいイベントを選択します。",
      switch: "この位置での今後の全てのイベントについて私に通知してください。",
      aboveHorizon: "地平線の上",
      maxHeight: "の最大高さ",
      today: "今日",
      tomorrow: "明日",
      appears: "登場",
      disappears: "消える",
      all: "全て",
      timeOfDay: "時刻",
      night: "夜",
      twilight: "トワイライト",
      duration: "間隔",
      shorterThan2: "2分未満",
      longerThan2: "2分以上",
      empty: "{{start}} から {{end}} まで、この場所で ISS が目撃される可能性はありません。",
      shareTitle: "ステーションは{{date}}に{{location}}の上空を通過しています",
      shareLink:
        "さらに探索し、拡張現実でステーションを追跡するには、アプリをダウンロードしてください",
      calendarEventTitle: "{{location}}でステーションを見つけよう！",
      calendarSuccess: "カレンダーイベントが正常に作成されました",
      calendarError: "カレンダーイベントを作成できません",
      coach: {
        title: "アイコンの説明",
        moon: "ISSが地平線の上にある場合、選択した位置で夜間になります。",
        sunset: "ISSが地平線の上にある場合、選択した位置で黄昏時になります。",
      },
      cloudCover: {
        title: "雲の覆い",
        any: "任意",
        low: "低い (<25%)",
        medium: "中程度 (25-50%)",
      },
      pastSightings: "過去の目撃情報",
      compass: {
        N: "北",
        NNE: "北北東",
        NE: "北東",
        ENE: "東北東",
        E: "東",
        ESE: "東東南",
        SE: "東南",
        SSE: "南東南",
        S: "南",
        SSW: "南南西",
        SW: "南西",
        WSW: "西南西",
        W: "西",
        WNW: "西北西",
        NW: "西北",
        NNW: "北北西",
      },
    },
    coachMarks: {
      skip: "ツアーをスキップします",
      next: "次",
      finish: "終了",
      dismiss: "終了",
      locationTitle: "位置を変更",
      locationData: "ここから直接別の位置に選択または変更できます。",
      sightingsTitle: "次の発見とカウントダウン",
      sightingsData:
        "このセクションでは、選択した位置の近くで次にISSが発見される日付とカウントダウンタイマーを表示します。次回の発見情報ボックスをタップすると、次回の発見情報の完全なリストを見ることができます。",
      globeTitle: "インタラクティブな地球",
      globeData:
        "画面上でスワイプしてISSのリアルタイム位置を表示できます。これにより、地球側と双方向に通信し、ISSの位置をリアルタイムで追跡できます。",
      mapTitle: "2次元マップビュー",
      mapData:
        "このセクションでは、地球全体の夜及び昼地域に対するISSの総飛程の2次元表現を表示しています。",
      navigationTitle: "ナビゲーション",
      navigationData: "以下のナビゲーションメニューからアプリのさまざまな機能を参照できます。",
    },
  },
  issView: {
    timeHeader: "カウントダウン",
    cameraPermissionText:
      "携帯電話のカメラの使用は許可されていません。許可するにはここをクリックしてください。",
    issCaptured: "この瞬間をキャプチャします",
    details: {
      title: "情報",
      orbitalSpeed: "軌道速度",
      longitude: "経度",
      latitude: "緯度",
      altitude: "高度",
      crewOnboard: "一般的な乗組員数",
      launched: "組み立てが始まりました",
      launchedValue: "1998年11月20日",
      mass: "推定質量",
      dimensions: "推定寸法",
      orbitalPeriod: "軌道期間",
      orbitsPerDay: "軌道/日",
      dimensionsValue: "幅109m x長さ73m x高さ14m",
      dateTime: "日付と時刻",
      maxHeight: "最大高度",
      duration: "地平線上の持続時間",
      appears: "出現",
      disappears: "消滅",
      distance: "距離",
      nextSighting: "次の観測",
    },
    arNotSupported: "このデバイスではARはサポートされていません",
    noOrientationSensor: "方向センサーは利用できません",
    noMagnetometerSensor: "磁力計は利用できません",
    screenshotError: "スクリーンショットのキャプチャができません",
    coachMarks: {
      circleTitle: "ステーションを見つける",
      circleData:
        "ステーションを見つけるには、円の外側の矢印の方向にスマートフォンを動かしてください。近づくにつれて、円の色が緑色に変わります。",
      compassTitle: "コンパス",
      compassData:
        "このコンパスは、あなたが見ている方向と、ステーションを見つけるための相対的な方向を示しています。",
      infoTitle: "情報",
      infoData:
        "このトグルは、現在または次のステーションの観測とステーションのライブ情報に関する詳細情報を開いたり閉じたりします。",
      trajectoryTitle: "ステーションの軌道",
      trajectoryData:
        "このトグルは、ステーションの軌道を画面に表示するかどうかを切り替えます。実線は過去を示し、点線は将来の軌道を示します。",
      arTitle: "ARビュー",
      arData: "このトグルは、全画面と部分的なARビューの間を切り替えます。",
      shareTitle: "共有",
      shareData:
        "このボタンを使用して、ARビューのスクリーンショットをテキストメッセージ、メール、またはソーシャルメディアで共有できます。",
      screenshotTitle: "スクリーンキャプチャ",
      screenshotData:
        "このボタンを使用して、ARビューのスクリーンショットを撮影して写真ギャラリーに保存できます。",
      videoTitle: "ビデオ録画",
      videoData:
        "このボタンを使用して、ステーションを見つける瞬間をキャプチャするARビューのビデオを録画できます。",
    },
    safetyReminder: {
      title: "注意：安全リマインダー",
      subtitle1: "親の監督が推奨されます：",
      body1:
        "このアプリでAR画面を操作する際の親の監督の重要性をお忘れなく。安全で適切な体験を確保するために、子供は責任ある大人の指導のもとでこの機能を使用する必要があります。",
      subtitle2: "周囲に注意を払ってください：",
      body2:
        "拡張現実の体験を楽しむ際は、常に周囲の環境に注意を払ってください。障害物、起伏のある地形、またはその他の危険に注意してください。常に慎重で注意深い行動をお願いします。",
      home: "ホームに戻る",
      ok: "了解",
    },
  },
  settings: {
    header: "設定",
    locationSettings: "位置設定",
    notificationSettings: "通知設定",
    termsAndConditions: "規約と条件",
    contactUs: "お問い合わせ",
    language: "言語",
    timeFormat: "時間形式",
    unitsOfMeasurement: "単位",
    metric: "メートル法",
    imperial: "インペリアル（米国）",
    calibrateCompass: "コンパスのキャリブレーション",
    calibrateCompassData: {
      instructions:
        "コンパスをキャリブレーションするには、デバイスを8の字のパターンで複数回回転させてください。",
      accuracy: "センサー精度:",
      low: "低",
      medium: "中",
      high: "高",
    },
    tutorials: "チュートリアル",
    tutorialsData: {
      description:
        "ホームページとARビューページのステップバイステップチュートリアルをもう一度見たいですか？",
      homePage: "ホームページ",
      arPage: "ARビュー",
    },
    termsAndConditionsData: {
      backButton: "設定",
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
      backButton: "設定",
      title: "お問い合わせ",
      titlePlaceholder: "タイトルを選択します",
      commentsPlaceholder: "入力コメント",
      sendButton: "送信",
      contactUsOptions: {
        reportAnIssue: "問題を報告する",
        improvementIdeas: "改善のアイデア",
        generalQuestions: "一般的な質問",
        comments: "コメント",
      },
    },
    notificationSettingsData: {
      backButton: "設定",
      notificationTitle: "通知設定",
      privacyTitle: "プライバシー設定",
      upcomingLabel: "今後のイベント",
      customizeLabel: "通知をカスタマイズします",
      upcomingTip: "イベント通知の受信を停止するには、オフになります。",
      notifyMeBefore: "前に私に通知してください",
      turnOffNotifications: "通知をオフにします",
      rangeInputPlaceholder: "1から120分の間を選択してください",
      customOption: "カスタム",
      from: "から",
      until: "それまで",
    },
    locationSettingsData: {
      backToSettings: "設定",
      goBack: "戻る",
      generalTitle: "位置設定",
      cta: "この位置の通知をカスタマイズします",
      locationPermission: "位置の許可を付与します",
      addNewLocation: {
        generalTitleAdd: "新しい位置を追加します",
        generalTitleEdit: "位置を編集します",
        confirnModalButton: "確認",
        saveButton: "位置を保存",
        searchInputPlaceholder: "都市、郵便番号、または住所を入力します",
        nameInputPlaceholder: "位置名を保存します",
      },
      removeLocation: {
        question: "この位置を必ず削除しますか？",
        cancelButton: "キャンセル",
        removeButton: "消去",
      },
    },
    share: "共有",
    shareLink:
      "拡張現実を通じて国際宇宙ステーションを追跡するには、NASA Spot The Stationモバイルアプリをダウンロードしてください",
    localCalculations: "ローカル計算",
  },
  resources: {
    header: "リソース",
    goBack: "戻る",
    news: {
      title: "ステーションニュース",
      searchPlaceholder: "記事、イベントなどを検索...",
      suggestions: "提案",
      searchResults: "検索結果",
    },
    spotTheStation: {
      title: "ステーションを見つける方法",
    },
    about: {
      title: "ステーションについて",
    },
    details: {
      title: "ステーションの詳細",
    },
    faq: {
      title: "よくある質問",
      questions: {
        question1: "1. なぜ国際宇宙ステーションはそこにあるのですか？",
        answer1:
          "国際宇宙ステーションは、科学、技術、人間の革新の融合であり、人類の利益のために地球上では不可能な研究を可能にします。24年以上にわたり、NASAはステーション上での継続的な米国の人間の存在をサポートしており、宇宙飛行士は長期間宇宙で生活し働く方法を学んできました。<br/>" +
          "国際宇宙ステーションは、アメリカ、ロシア、カナダ、日本、ESA（欧州宇宙機関）の参加国が関与する、これまでに試みられた中で最も複雑で相互依存的な国際協力の1つです。国際的な飛行クルーや複数の宇宙輸送プロバイダー、世界中に分散したサポートチーム、施設、通信ネットワーク、そして世界的な科学コミュニティを結びつけます。<br/>" +
          "過去24年間で、宇宙ステーションは軌道上の研究所に変わり、109以上の国の科学者が4,000以上の画期的な実験を極端でユニークな宇宙飛行環境で行うことを可能にしました。<br/>" +
          "宇宙ステーションは、低地球経済の発展や、アルテミスの下での月へのミッション、最終的には火星の人間探査を含むNASAの次の大きな探査の飛躍のための踏み台として機能します。<br/>" +
          "国際宇宙ステーション、その研究、クルーについての詳細はこちら:<br/>" +
          "<a href='https://www.nasa.gov/station'>https://www.nasa.gov/station</a>",

        question2: "2. 国際宇宙ステーションはどのくらいの速さで移動していますか？",
        answer2:
          "国際宇宙ステーションは90分ごとに地球を周回します。約28,000キロメートル毎時の速度で移動し、乗組員は毎日16回の日の出と日没を見ることができます。2000年11月以来、宇宙ステーションは継続的に占有されています。その間に、23か国から280人がこの軌道上の前哨基地を訪れ、ステーションは地球を何十万回も周回しました。",

        question3: "3. 国際宇宙ステーションをどのくらいの頻度で見ることができますか？",
        answer3:
          "国際宇宙ステーションは太陽光を反射するために見えます。これは月が見える理由と同じです。しかし、月とは異なり、宇宙ステーションは昼間に見るには十分な明るさではありません。観測の機会は、月に1回から週に数回まで変わることがあります。これは、太陽の光がステーションに反射し、あなたの場所で夜明けと夕暮れに上空を通過するためです。",

        question4: "4. Spot the Stationアプリとは何ですか？",
        answer4:
          "Spot the Stationモバイルアプリは、ユーザーが国際宇宙ステーションの観測を追跡し、各自の位置を通過する際に通知を受け取るのを助ける公式のNASAアプリです。リアルタイムの追跡、フライオーバースケジュール、アラートも提供します。",

        question5: "5. Spot the Stationモバイルアプリをどのようにダウンロードしますか？",
        answer5:
          "Spot the Stationモバイルアプリは、iOSおよびAndroidのモバイルおよびタブレットデバイスで利用可能です。",

        question6:
          "6. Spot the Stationアプリはどのようにして国際宇宙ステーションの観測機会を通知しますか？",
        answer6:
          "Spot the Stationアプリは、国際宇宙ステーションの次の通過についてユーザーに通知するためにプッシュ通知を送信します。ユーザーは、デバイスの設定でアプリの通知許可が有効になっていることを確認する必要があります。",

        question7: "7. Spot the Stationアプリで通知をカスタマイズできますか？",
        answer7:
          "Spot the Stationアプリには、ユーザーの好みの場所とアラートのタイミングに特化したプッシュ通知を受け取るための個別のアラート設定機能があります。通知設定はアプリの設定ページにあり、ユーザーはすべての今後のイベントの通知をオンにするか、現在選択されている場所の通知をカスタマイズできます。ユーザーは、場所設定を通じて他の場所の通知をカスタマイズできます。",

        question8: "8. 通知を受け取らない場合はどうすればよいですか？",
        answer8:
          "ユーザーは、Spot the Stationアプリの通知設定（設定ページの通知設定）を確認して、デバイスが好みの場所とタイミングでアラートを受け取るように設定されていることを確認する必要があります。ユーザーがまだアラートを受け取らない場合は、デバイスの設定で通知が有効になっていることを確認する必要があります。",

        question9: "9. Spot the Stationアプリは国際的に機能しますか？",
        answer9:
          "Spot the Stationアプリは、英語、オランダ語、フランス語、ドイツ語、ヒンディー語、イタリア語、日本語、ポーランド語、ポルトガル語（ブラジル）、ロシア語、スペイン語、トルコ語、ウクライナ語を含む複数の言語で世界中で利用可能です。アプリは、ほとんどの居住地での観測情報を提供し、ほぼどこからでも国際宇宙ステーションを観測するのを容易にします。",

        question10: "10. 私の場所で観測の機会がないのはなぜですか？",
        answer10:
          "あなたの場所で暗くて良好な視界が必要であり、宇宙ステーションが上空にある必要があります。宇宙ステーションの軌道は地球全体を回るため、昼間や夜中に見えない時間に上空を通過することがあります。Spot The Stationは、あなたの場所で国際宇宙ステーションを観測する機会があるときにのみ通知を送信し、毎回上空を通過するたびに通知を送信するわけではありません。",

        question11: "11. 国際宇宙ステーションを見るために望遠鏡が必要ですか？",
        answer11:
          "いいえ、ユーザーは肉眼で国際宇宙ステーションを見ることができ、追加の機器は必要ありません。",

        question12: "12. 国際宇宙ステーションは月の光のために現れたり消えたりするのですか？",
        answer12:
          "国際宇宙ステーションは太陽光を反射するために見えます。これは月が輝いて見える理由と同じです。月が昇っていないときでも、ユーザーはステーションを見ることができます。",

        question13: "13. アラート通知にはどのタイムゾーンが使用されますか？",
        answer13:
          "Spot the Stationアプリ内のすべてのコンテンツは、ユーザーが選択した場所の現地時間で表示されます。アプリは夏時間に自動的に調整されます。",

        question14: "14. Spot the Stationアプリは各観測にどのような情報を提供しますか？",
        answer14:
          "各観測について、Spot the Stationアプリは時間、視認性の持続時間、地平線上の最大高度、および国際宇宙ステーションが現れたり消えたりする方向を表示し、ユーザーが空で正確に位置を特定するのを助けます。",

        question15:
          "15. 観測の機会に国際宇宙ステーションをどのように見つけますか？これらの情報は何を意味しますか？",
        answer15:
          "Spot the Stationアプリは、ホームページで「次の観測リスト」をタップすると「今後の観測」のリストを提供します。<br/>" +
          "<strong>日付と時間</strong>は、現地時間で観測の機会が始まる時間です。すべての通過は日の出または日没の数時間前後に発生します。これは、太陽が国際宇宙ステーションに反射し、暗い空に対してコントラストを成すため、最適な観測期間です。<br/>" +
          "<strong>地平線上</strong>は、ステーションが地平線の下に戻る前に見える最大の時間です。<br/>" +
          "<strong>最大高度</strong>は度で測定されます（高度とも呼ばれます）。これは、夜空での地平線からのステーションの高さを表します。地平線は0度で、真上は90度です。ユーザーが腕を伸ばして拳を持ち、地平線に置くと、上部は約10度の高度になります。<br/>" +
          "<strong>現れる</strong>は、ステーションが最初に見える空の位置です。この値は、最大高度と同様に、地平線からの度で測定されます。文字はコンパスの方向を表します – Nは北、WNWは西北西などです。<br/>" +
          "<strong>消える</strong>は、夜空でステーションが視界から消える場所を表します。" +
          "<img src='https://spotthestation.nasa.gov/images/astro_horizon.png' />",

        question16:
          "16. フライオーバースケジュールは、国際宇宙ステーションが同じ方向から現れ、消えると示していますが、どうして可能ですか？",
        answer16:
          "Spot the Stationソフトウェアは、方向を最も近い基本方位と中間方位に丸めます。これにより、国際宇宙ステーションが空を横切って移動しているにもかかわらず、同じ方向に現れたり消えたりするように見えることがあります。これは通常、短い視認性のウィンドウを持つフライオーバーで発生します。ステーションが地球の暗い影に迅速に移動しているため、地上のユーザーの位置からは、空を横切る完全な通過が観察できません。",

        question17: "17. 国際宇宙ステーションの位置のライブマップを見ることができますか？",
        answer17:
          "はい、Spot the Stationアプリには、地球を周回する国際宇宙ステーションの現在の位置を示すリアルタイムマップが含まれており、ユーザーがその進行を追跡するための視覚的な参考になります。",

        question18: "18. Spot the Stationアプリの拡張現実機能とは何ですか？",
        answer18:
          "Spot the Stationアプリの拡張現実機能は、ユーザーが空における国際宇宙ステーションの経路の仮想オーバーレイを表示できるようにします。この機能は、ユーザーがデバイスをステーションのリアルタイムの位置に合わせることで、ステーションをより正確に見つけるのを助けます。",

        question19:
          "19. Spot the Stationアプリで拡張現実機能にアクセスするにはどうすればよいですか？",
        answer19:
          "拡張現実機能にアクセスするには、Spot the Stationアプリを開き、下部メニューの「ARビュー」オプションに移動します。デバイスのカメラを空に合わせるための画面上の指示に従ってください。アプリは、国際宇宙ステーションの位置と軌道を示す仮想オーバーレイを表示します。",

        question20: "20. 拡張現実機能を使用するために特定のデバイスやソフトウェアが必要ですか？",
        answer20:
          "Spot the Stationの拡張現実機能には、3D空間での向きを判断できるデバイスが必要です。ジャイロスコープやモーションコプロセッサなどの特定のハードウェアサポートが必要です。古いまたは低価格のデバイスは、この機能をサポートしていない場合があります。",

        question21: "21. 拡張現実機能はどのように機能しますか？",
        answer21:
          "デバイスのカメラとセンサーを使用して、Spot the Stationの拡張現実機能は、国際宇宙ステーションの位置を空に重ね合わせ、ユーザーがデバイスを動かすとリアルタイムで調整します。アプリは、デバイスのカメラを正しい方向に向けるようにユーザーをガイドし、ステーションがどこに現れ、消えるかを示します。",

        question22: "22. 拡張現実機能は昼夜を問わず使用できますか？",
        answer22:
          "はい、Spot the Stationアプリ内の拡張現実機能は昼夜を問わず利用可能です。ただし、最適な観測体験は通常、国際宇宙ステーションが肉眼で見える夕暮れや夜間です。拡張現実オーバーレイは光の条件に関係なく機能しますが、実際の観測機会は視認性に依存します。",

        question23: "23. 拡張現実オーバーレイはすべての場所で正確ですか？",
        answer23:
          "はい、Spot the Stationアプリ内の拡張現実機能は、デバイスのGPS位置に基づいて正確な位置情報を提供するように設計されています。ただし、デバイスのコンパスとセンサーのキャリブレーションに応じて、精度がわずかに異なる場合があります。ユーザーが不一致を感じた場合は、設定を通じてデバイスのコンパスを再キャリブレーションしてください。",

        question24: "24. 拡張現実機能は正確な観測時間に役立ちますか？",
        answer24:
          "Spot the Stationアプリ内の拡張現実機能は、ユーザーが空に現れる正確な時間に国際宇宙ステーションを見つけるための視覚的なガイドを提供します。アプリのアラートと組み合わせて、ステーションを正確に追跡するためのライブの視覚的な方向と高さのインジケーターを提供することで、ステーションを見る能力を向上させます。",

        question25: "25. 拡張現実体験を最適化するためのヒントはありますか？",
        answer25:
          "Spot the Stationアプリでの最適な拡張現実体験のために、空がよく見える開けた場所で機能を使用してください。高い建物や木などの障害物を避けてください。これらは視認性を妨げる可能性があります。デバイスのコンパスをキャリブレーションし、位置情報サービスとカメラの許可がスムーズな動作のために有効になっていることを確認してください。",

        question26: "26. 拡張現実機能はiOSとAndroidデバイスの両方で利用できますか？",
        answer26:
          "はい、Spot the Stationアプリの拡張現実機能は、デバイスがハードウェア要件を満たしている限り、iOSおよびAndroidのモバイルおよびタブレットデバイスで利用可能です。",

        question27: "27. Spot the Stationアプリはオフラインで動作しますか？",
        answer27:
          "以前にダウンロードした観測機会のスケジュールにアクセスしたり、スケジュールされた通知を受け取ったりするなどの基本的な機能の一部はオフラインで動作する場合があります。ただし、追跡などのリアルタイムデータを必要とする機能には、セルラーサービスまたはインターネット接続が必要です。",

        question28: "28. Spot the Stationアプリを使用するための特別な要件はありますか？",
        answer28:
          "Spot the Stationアプリには、リアルタイムの追跡とアラートのためにアクティブなセルラーサービスまたはインターネット接続が必要です。さらに、場所に特化した情報を得るために、デバイスの位置情報サービスがアプリのために有効になっていることを確認してください。",

        question29: "29. Spot the Stationアプリは無料で使用できますか？",
        answer29:
          "はい、Spot the Stationアプリは無料でダウンロードして使用でき、アプリ内購入やサブスクリプションはありません。",

        question30: "30. Spot the Stationアプリのサポートについて誰に連絡できますか？",
        answer30:
          "Spot the Stationアプリのサポートについては、アプリのフィードバックオプションを通じて連絡するか、<a href='mailto:hq-spotthestation@mail.nasa.gov'>Spot the Stationチームにメールを送信</a>してください。",
      },
    },
    astronauts: {
      title: "今ステーションにいるのは誰",
      number: "人数：",
    },
    live: {
      title: "ライブストリーム",
      description:
        "現在、ISSに取り付けられた外部HDカメラから地球のライブ映像がストリーミングされています。カメラは地球を見ており、時折ソーラーパネルが視界を通過します。",
    },
    tour: {
      title: "バーチャルツアー",
    },
    videos: {
      title: "ステーションビデオ",
    },
    gallery: {
      title: "ギャラリー",
    },
    earthScience: { title: "地球科学データリソース" },
  },
}

export default ja
export type Translations = typeof ja
