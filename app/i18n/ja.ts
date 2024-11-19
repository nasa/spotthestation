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
      subTitle: "駅があなたの上を通り過ぎていきます",
    },
    before: {
      titleOne: "駅を見つける",
      titleTwo: "数分以内に！",
      subTitleOne: "駅があなたの上を通り過ぎていきます",
      subTitleTwo: "数分の間",
    },
  },
  units: {
    minute: "分",
    kilometer: "km",
    kilogram: "kg",
    month: "月",
    metersPerSecond: "MS",
    time: "T",
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
      coach: {
        title: "アイコンの説明",
        moon: "ISSが地平線の上にある場合、選択した位置で夜間になります。",
        sunset: "ISSが地平線の上にある場合、選択した位置で黄昏時になります。",
      },
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
        question1: "1. なぜ宇宙ステーションはそこにあるのですか？",
        answer1:
          "国際宇宙ステーションは、地球唯一の微小重力実験室です。このサッカー場サイズのプラットフォームは、クルーメンバーによって継続的に行われている、または自動化されている科学技術実験の数々をホストしています。軌道上の実験室での研究は、地球上の生活に利益をもたらすだけでなく、将来の宇宙探査にも役立ちます。宇宙ステーションは技術の試験場として機能し、人間の長期宇宙飛行の影響を研究することを可能にし、NASAの人類の存在を宇宙にさらに押し進めるという使命をサポートしています。宇宙ステーションで行われている研究や、そこで科学を行う機会について詳しく知りたい場合は、<a href='https://www.nasa.gov/international-space-station/'>こちらをクリック</a>してください。",
        question2: "2. 宇宙ステーションはどれくらいの速さで移動していますか？",
        answer2:
          "ステーションは90分ごとに地球を周回します。時速約17,500マイル（28,000 km）で移動し、クルーは毎日16回の日の出と日没を迎えます。人々が乗船してから15年以上の間に、ステーションは地球を何万回も周回しました。ステーションに関する詳細な情報は、<a href='https://www.nasa.gov/international-space-station/space-station-facts-and-figures/'>このウェブページ</a>で見ることができます。",
        question3: "3. 宇宙ステーションをどのくらいの頻度で見ることができますか？",
        answer3:
          "宇宙ステーションは太陽の光を反射するために見えます。これは月が見える理由と同じです。しかし、月とは異なり、宇宙ステーションは昼間に見えるほど明るくはありません。あなたの場所で夜明けや夕暮れのときにのみ見ることができます。そのため、月に1回の観測機会から週に数回まで変動する可能性があります。あなたの場所が暗く、宇宙ステーションが頭上を通過する必要があります。",
        question4: "4. Spot the Stationモバイルアプリとは何ですか？",
        answer4:
          "Spot the Stationモバイルアプリは、国際宇宙ステーションが自分の位置を通過する際の観測を追跡し、通知を受け取るのを助ける公式のNASAアプリです。リアルタイムの追跡、観測スケジュール、アラートを提供します。",
        question5: "5. Spot the Stationモバイルアプリをどのようにダウンロードしますか？",
        answer5:
          "アプリはApple App Storeから<a href='https://apps.apple.com/us/app/spot-the-station/id6449235044'>こちら</a>、Google Play Storeから<a href='https://play.google.com/store/apps/details?id=gov.nasa.hq.SpotTheStation&hl=en_US&pli=1'>こちら</a>からダウンロードできます。",
        question6: "6. アプリはどのようにしてステーションの観測を通知しますか？",
        answer6:
          "アプリはプッシュ通知を送信して、ステーションの観測が近づいていることを知らせます。これには、日付、時間、期間、およびあなたの場所に特有の視認条件が含まれます。このアプリの通知権限が電話の設定で有効になっていることを確認してください。",
        question7: "7. アプリで通知をカスタマイズできますか？",
        answer7:
          "はい、アプリ内でアラート設定を個別に設定し、希望する場所、観測条件、さらには自分に最適な特定の時間に基づいて通知を受け取ることができます。",
        question8: "8. 通知を受け取っていない場合はどうすればよいですか？",
        answer8:
          "通知を受け取っていない場合は、デバイスの設定で通知が有効になっていることを確認してください。また、アプリの通知設定を確認して、選択した場所と希望のタイミングでアラートが設定されていることを確認してください。",
        question9: "9. アプリは国際的に利用できますか？",
        answer9:
          "はい、Spot the Stationアプリは世界中で利用可能で、ほとんどの居住地での観測情報を提供し、ほぼどこからでもステーションを見ることができます。",
        question10: "10. 私の場所で観測の機会がないのはなぜですか？",
        answer10:
          "あなたの場所が暗く、宇宙ステーションが頭上にある必要があります。宇宙ステーションの軌道は地球全体を回るため、昼間や夜中など、見えない時間にあなたの上を通過することがあります。Spot The Stationは、宇宙ステーションを見る機会があるときにのみ通知を送信し、頭上を通過するたびに通知を送信するわけではありません。",
        question11: "11. 宇宙ステーションを見るのに望遠鏡が必要ですか？",
        answer11: "いいえ、宇宙ステーションは肉眼で見ることができ、特別な機器は必要ありません。",
        question12: "12. ステーションが現れて消えるのは月の光のせいですか？",
        answer12:
          "宇宙ステーションは太陽の光を反射しているために見えます。これは月が輝いて見えるのと同じ理由です。月が昇っていないときでも、宇宙ステーションを見ることができます。",
        question13: "13. アラート通知にはどのタイムゾーンが使用されますか？",
        answer13:
          "Spot The Stationのすべての情報は、選択した場所の現地時間で表示されます。Spot The Stationは自動的に夏時間に調整されます。",
        question14: "14. アプリは各観測にどのような情報を提供しますか？",
        answer14:
          "各観測について、アプリは時間、視認期間、最大高度、およびステーションが現れたり消えたりする方向を表示し、空で正確に位置を特定するのに役立ちます。",
        question15:
          "15. 各観測中にステーションをどのように見つけますか？これらの観測情報は何を意味しますか？",
        answer15:
          "アプリは、ホームページの次の観測リストをタップすると、今後の観測のリストを提供します。<br/><strong>日付と時間</strong>は、観測の機会が現地時間で始まるときです。すべての観測は日の出または日没の数時間前後に発生します。これは、太陽が宇宙ステーションに反射し、暗い空と対比するため、最適な観測期間です。<br/><strong>地平線上</strong>は、宇宙ステーションが地平線下に戻る前に見える最大の時間です。<br/><strong>最大高度</strong>は度で測定されます（高度とも呼ばれます）。これは、夜空の地平線からの宇宙ステーションの高さを表します。地平線は0度で、真上は90度です。腕を伸ばして拳を地平線に置くと、上部は約10度になります。<br/><strong>現れる</strong>は、ステーションが最初に見える空の位置です。この値も、最大高度と同様に、地平線からの度で測定されます。文字は方位を表します。Nは北、WNWは西北西などです。<br/><strong>消える</strong>は、国際宇宙ステーションが視界から消える夜空の場所を表します。<img src='https://spotthestation.nasa.gov/images/astro_horizon.png' />",
        question16:
          "16. フライオーバースケジュールには、宇宙ステーションが同じ方向から現れたり消えたりすると記載されていますが、どうしてですか？例: - 時間: 7月15日（月）11:57 PM、視認: 2分、最大高度: 51°、現れる: ENEの上51°、消える: ENEの上11°",
        answer16:
          "Spot the Stationソフトウェアは、方向を最も近い方位と中間方位に丸めます。これにより、ステーションが空を横切って移動しているにもかかわらず、同じ方向に現れたり消えたりするように見えることがあります。これは通常、視認の短いウィンドウを持つフライオーバーで発生します。ステーションが地球の暗い影に急速に移動しているため、地上からは空を完全に通過する様子を観察できません。",
        question17: "17. ステーションの位置をリアルタイムで見ることができますか？",
        answer17:
          "はい、アプリには、地球を周回するステーションの現在の位置を示すリアルタイムの地図が含まれており、その進行を追跡するための視覚的な参考になります。",
        question18: "18. Spot the StationアプリのAR機能とは何ですか？",
        answer18:
          "Spot the Stationアプリの拡張現実（AR）機能は、ユーザーが空における国際宇宙ステーションの経路の仮想オーバーレイを表示できるようにします。この機能は、デバイスをステーションのリアルタイムの位置に合わせることで、ステーションをより正確に見つけるのに役立ちます。",
        question19: "19. アプリでAR機能にアクセスするにはどうすればよいですか？",
        answer19:
          "AR機能にアクセスするには、アプリを開き、下部メニューのAR Viewオプションに移動します。画面上の指示に従って、デバイスのカメラを空に合わせると、アプリがステーションの位置と軌道を示す仮想オーバーレイを表示します。",
        question20: "20. AR機能を使用するために特定のデバイスやソフトウェアが必要ですか？",
        answer20:
          "AR機能は、3D空間での向きを判断できるデバイスを必要とします。ジャイロスコープやモーションコプロセッサなどの特定のハードウェアサポートが必要です。古いデバイスや低価格のデバイスでは、この機能がサポートされていない場合があります。",
        question21: "21. AR機能はどのように動作しますか？",
        answer21:
          "デバイスのカメラとセンサーを使用して、AR機能は空におけるステーションの位置を画面上に重ね合わせ、デバイスを動かすとリアルタイムで調整します。アプリはカメラを正しい方向に向けるようにガイドし、ステーションが現れたり消えたりする場所を示します。",
        question22: "22. AR機能は昼夜を問わず使用できますか？",
        answer22:
          "はい、AR機能は昼夜を問わず使用できます。ただし、ステーションが肉眼で見えるとき、通常は夕暮れや夜間が最適な体験です。ARオーバーレイは光の条件に関係なく動作しますが、実際の観測は視認性に依存します。",
        question23: "23. ARオーバーレイはすべての場所で正確ですか？",
        answer23:
          "はい、AR機能はGPS位置に基づいて正確な位置情報を提供するように設計されています。ただし、デバイスのコンパスとセンサーのキャリブレーションによって、精度がわずかに異なる場合があります。差異がある場合は、設定を通じてデバイスのコンパスを再調整してください。",
        question24: "24. AR機能は正確な観測時間を助けますか？",
        answer24:
          "AR機能は、ステーションが空に現れる正確な時間に見つけるための視覚的なガイドを提供します。アプリの観測アラートと組み合わせることで、ステーションを正確に追跡するためのライブの視覚的な方向と高さの指標を提供し、観測能力を向上させます。",
        question25: "25. AR体験を最適化するためのヒントはありますか？",
        answer25:
          "最良のAR体験を得るために、空がよく見える開けた場所で機能を使用してください。高い建物や木などの障害物を避けてください。これらは視認性を妨げる可能性があります。デバイスのコンパスを調整し、位置情報サービスとカメラの権限がスムーズに機能するように有効にしてください。",
        question26: "26. AR機能はAndroidとiOSの両方で利用できますか？",
        answer26:
          "はい、AR機能は、デバイスがハードウェア要件を満たしている限り、iOSとAndroidの両方のバージョンのアプリで利用できます。",
        question27: "27. アプリはオフラインで動作しますか？",
        answer27:
          "以前にダウンロードした観測スケジュールにアクセスしたり、スケジュールされた通知を受け取ったりするなどの基本的な機能の一部はオフラインで動作する場合があります。ただし、リアルタイムデータを必要とする機能（追跡など）はインターネット接続が必要です。",
        question28: "28. アプリを使用するための特別な要件はありますか？",
        answer28:
          "アプリはリアルタイムの追跡とアラートのためにアクティブなインターネット接続を必要とします。さらに、位置情報に特化した情報を得るために、デバイスの位置情報サービスがアプリのために有効になっていることを確認してください。",
        question29: "29. アプリは無料で使用できますか？",
        answer29:
          "はい、Spot the Stationアプリは無料でダウンロードして使用でき、アプリ内購入やサブスクリプションはありません。",
        question30: "30. アプリのサポートについて誰に連絡できますか？",
        answer30:
          "Spot the Stationアプリのサポートについては、NASAのサポートページを訪問するか、アプリ内のフィードバックオプションを通じてお問い合わせください。",
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
  },
}

export default ja
export type Translations = typeof ja
