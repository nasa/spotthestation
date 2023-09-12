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
      title: "国際宇宙ステーション（ISS）を見つけます",
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
      title: "国際宇宙ステーション - 詳細",
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
    },
  },
  settings: {
    header: "設定",
    locationSettings: "位置設定",
    notificationSettings: "通知設定",
    termsAndConditions: "規約と条件",
    contactUs: "お問い合わせ",
    language: "言語",
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
    localCalculations: "ローカル計算",
  },
  resources: {
    header: "リソース",
    searchPlaceholder: "記事、イベントなどを検索...",
    suggestions: "提案",
    searchResults: "の検索結果",
    tabs: {
      news: "ニュース",
      about: "ABOUT",
      details: "詳細",
    },
  },
}

export default ja
export type Translations = typeof ja
