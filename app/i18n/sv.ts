const sv = {
  name: "Svenska",
  errorScreen: {
    title: "Något gick fel!",
    friendlySubtitle:
      "Det här är skärmen som dina användare kommer att se i produktionen när ett fel kuppstår.Du vill anpassa det här meddelandet (beläget i `App/i18n/en.ts ') och förmodligen också layouten (` app/skärmar/felaktigheter).Om du vill ta bort detta helt, kontrollera `app/app.tSx` för <felboundary> -komponenten.",
    reset: "Återställ app",
  },
  snackBar: {
    ok: "OK",
    dismiss: "Avvisa",
    sightingsSaved: "Observationer för den senast sparade platsen laddad!",
    defaultError: "Något fel inträffade",
    locationSaved: "Plats sparad",
    locationExist: "Plats med den här titeln finns redan!",
    openSettingsError: "Kan inte öppna inställningar!",
    shared: "Framgångsrikt delad!",
    savedToGallery: "Sparad till galleri",
  },
  permissionsModal: {
    close: "Stänga",
    openSettings: "Öppna Inställningar",
    body: "För att använda den här funktionen måste du ge tillstånd att komma åt galleriet.",
  },
  permissionsAndroid: {
    title: "Tillstånd att spara videor",
    message: "Den här appen behöver tillåtelse för att spara videor på din enhet.",
    buttonNeutral: "Fråga mig senare",
    buttonNegative: "Avbryt",
    buttonPositive: "OK",
  },
  thanksModal: {
    body: "Tack för att du kontaktar oss. Vi har tagit emot ditt meddelande och kommer att behandla din förfrågan. Observera att denna applikation inte samlar in användardata, så vi kan inte svara på alla meddelanden individuellt.",
    dismiss: "Avfärda",
  },
  privacy: {
    title: "Använd din plats",
    body: "Vi använder platsdata för att beräkna de kommande observationerna på din nuvarande plats.Vänligen ange platsbehörigheter för att aktivera denna funktionalitet.",
    agree: "Godkänn",
    skip: "Hoppa över",
    policy: "Integritetspolicy",
  },
  notifications: {
    push: {
      title: "Hitta stationen nu!",
      subTitle: "Stationen passerar ovanför dig vid",
    },
    before: {
      titleOne: "Hitta stationen i",
      titleTwo: "minuter!",
      subTitleOne: "Stationen passerar ovanför dig",
      subTitleTwo: "protokoll vid",
    },
  },
  units: {
    minute: "min",
    kilometer: "km",
    kilogram: "kg",
    month: "månad",
    metersPerSecond: "m/s",
    time: "T",
  },
  tabNavigator: {
    homeTab: "Hem",
    issViewTab: "AR-vy",
    issNowTab: "Spårare",
    resourcesTab: "Resurser",
    settingsTab: "inställningar",
  },
  onboarding: {
    splash: {
      title: "Hitta stationen",
      subTitle: "Titta upp i skyn och se Internationella rymdstationen",
    },
    completeProfile: {
      notification: {
        title: "Notis inställningar",
        label: "Få pushnotiser",
        tip: "Få pushnotiser när Internationella rymdstationen närmar sig din plats.",
        nextButton: "Nästa",
      },
      location: {
        title: "Din plats",
        subtitle: "Låt appen upptäcka din plats automatiskt eller ange din plats manuellt.",
        detectButton: "Dela min plats",
        orLabel: "eller",
        selectLocation: "Ange din plats",
        detecting: "Delar plats ...",
        doneButton: "Klart",
        serviceAlertTitle: "Platstjänster inaktiverade",
        serviceAlertBody: "Låt dina platstjänster fortsätta.",
        permissionAlertTitle: "Tillstånd ej beviljat",
        permissionAlertBody:
          "Vi använder platsdata för att beräkna de kommande observationerna på din nuvarande plats.Vänligen ange platsbehörigheter för att aktivera denna funktionalitet.",
      },
    },
  },
  homeScreen: {
    initLoader: {
      message: "Stationen data laddas ... det kan ta en stund att slutföra.",
      trajectoryError:
        "Stationen -banan är för närvarande inte tillgänglig på grund av serverunderhåll. Kom tillbaka igen senare.",
    },
    header: {
      firstTimeHead: "NÄSTA IAKTTAGELSE(ER) LISTA",
      secondTimeHead: "NEDRÄKNING",
      timezone: "Tidszon",
    },
    selectLocation: {
      title: "Välj plats",
      inputPlaceholder: "Sök plats efter stad, kartnål...",
      current: "Nuvarande position",
      saved: "Sparade platser",
      nearby: "Närliggande platser",
      search: "Sökresultat",
      cta: "Anpassa aviseringar för den här platsen",
      actionTitle: "Varna",
      refresh: "Uppdatera",
    },
    selectSightings: {
      title: "Kommande observationer",
      sightings: "Observationer",
      selectMessage: "Välj händelser som du vill bli meddelad för.",
      switch: "Meddela mig för alla kommande händelser på den här platsen.",
      aboveHorizon: "Ovanför horisonten",
      today: "Idag",
      tomorrow: "Imorgon",
      appears: "Visas",
      disappears: "Försvinner",
      all: "Allt",
      timeOfDay: "Tidpunkt på dygnet",
      night: "Natt",
      twilight: "Skymning",
      duration: "Varaktighet",
      shorterThan2: "kortare än 2 minuter",
      longerThan2: "2 minuter och längre",
      empty:
        "Det finns inga potentiella Stationen-observationer för den här platsen från {{start}} till {{end}}.",
      coach: {
        title: "Ikoner Beskrivning",
        moon: "Det kommer att vara natt på den valda platsen när Stationen är över horisonten.",
        sunset: "Det kommer vara skymning vid den valda platsen när Stationen passerar horisonten",
      },
      compass: {
        N: "N",
        NNE: "NNO",
        NE: "NO",
        ENE: "ONO",
        E: "O",
        ESE: "OSO",
        SE: "SO",
        SSE: "SSO",
        S: "S",
        SSW: "SSV",
        SW: "SV",
        WSW: "VSV",
        W: "V",
        WNW: "VNV",
        NW: "NV",
        NNW: "NNV",
      },
    },
    coachMarks: {
      skip: "Hoppa över rundtur",
      next: "Nästa",
      finish: "Avsluta",
      dismiss: "Avvisa",
      locationTitle: "Ändra plats",
      locationData: "Du kan välja eller ändra din plats till en annan direkt härifrån.",
      sightingsTitle: "Nästa observation och nedräkning",
      sightingsData:
        "Det här avsnittet visar dig datumet och en nedräkningstimer för nästa kommande Stationen -observation nära din valda plats.Du kan trycka på nästa observationsruta för att se en komplett lista över de kommande observationerna.",
      globeTitle: "Interaktiva jorden",
      globeData:
        "Du kan se Stationen i realtid genom att svepa på skärmen.Detta gör att du kan interagera med jorden och spåra platsen för Stationen i realtid.",
      mapTitle: "2d Map View",
      mapData:
        "Detta avsnitt visar en 2D -representation av den fullständiga vägen för Stationen mot natt- och dagregionerna över jorden.",
      navigationTitle: "Navigering",
      navigationData: "Du kan bläddra igenom olika funktioner i appen från navigationsmenyn nedan.",
    },
  },
  issView: {
    timeHeader: "Nedräkning",
    cameraPermissionText:
      "Du har inte beviljat tillgång till telefonens kamera, klicka här för att bevilja åtkomst till telefonens kameror.",
    issCaptured: "Fånga detta ögonblick",
    details: {
      title: "Internationella rymdstationen - Detaljer",
      orbitalSpeed: "Omloppshastighet",
      longitude: "Longitud",
      latitude: "Latitud",
      altitude: "Höjd över havet",
      crewOnboard: "Typiskt antal besättningar ombord",
      launched: "Montering började",
      launchedValue: "20 november 1998",
      mass: "Uppskattad massa",
      dimensions: "Uppskattade dimensioner",
      orbitalPeriod: "Omloppsperiod",
      orbitsPerDay: "Omlopp/dag",
      dimensionsValue: "109 m bred x 73 m lång x 14 m lång",
    },
    arNotSupported: "AR stöds inte på den här enheten",
    noOrientationSensor: "Orienteringssensor är inte tillgänglig",
    noMagnetometerSensor: "Magnetometern är inte tillgänglig",
    screenshotError: "Kan inte ta skärmbild",
  },
  settings: {
    header: "inställningar",
    locationSettings: "Platsinställningar",
    notificationSettings: "Notisinställningar",
    termsAndConditions: "Villkor",
    contactUs: "Kontakta oss",
    language: "Språk",
    calibrateCompass: "Kalibrera kompassen",
    calibrateCompassData: {
      instructions: "För att kalibrera kompassen, rotera din enhet flera gånger i ett åttamönster.",
      accuracy: "Sensornoggrannhet:",
      low: "Låg",
      medium: "Medium",
      high: "Hög",
    },
    termsAndConditionsData: {
      backButton: "inställningar",
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
      backButton: "inställningar",
      title: "Kontakta oss",
      titlePlaceholder: "Välj titel",
      commentsPlaceholder: "Ge synpunkter",
      sendButton: "Skicka",
      contactUsOptions: {
        reportAnIssue: "Rapportera ett problem",
        improvementIdeas: "Förbättringsidéer",
        generalQuestions: "Generella frågor",
        comments: "Kommentarer",
      },
    },
    notificationSettingsData: {
      backButton: "inställningar",
      notificationTitle: "Notisinställningar",
      privacyTitle: "Sekretessinställningar",
      upcomingLabel: "Kommande händelser",
      customizeLabel: "Anpassa notiser",
      upcomingTip: "Stäng av för att sluta ta emot notiser om händelser.",
      notifyMeBefore: "Meddela mig innan",
      turnOffNotifications: "Stäng av notiser",
      from: "Från",
      until: "Fram tills",
    },
    locationSettingsData: {
      backToSettings: "inställningar",
      goBack: "Gå tillbaka",
      generalTitle: "Platsinställningar",
      cta: "Anpassa aviseringar för den här platsen",
      locationPermission: "Bevilja platstillstånd",
      addNewLocation: {
        generalTitleAdd: "Lägg till en ny plats",
        generalTitleEdit: "Redigera plats",
        confirnModalButton: "Bekräfta",
        saveButton: "Spara plats",
        searchInputPlaceholder: "Ange stad, postnummer eller adress",
        nameInputPlaceholder: "Spara platsnamn",
      },
      removeLocation: {
        question: "Är du säker på att ta bort den här platsen?",
        cancelButton: "Avbryt",
        removeButton: "Radera",
      },
    },
    localCalculations: "Lokala beräkningar",
  },
  resources: {
    header: "Resurser",
    searchPlaceholder: "Sökartiklar, händelser osv ...",
    suggestions: "FÖRSLAG",
    searchResults: "sökresultat",
    tabs: {
      news: "Nyheter",
      about: "Om",
      details: "Information",
    },
  },
}

export default sv
export type Translations = typeof sv
