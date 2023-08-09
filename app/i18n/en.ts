const en = {
  errorScreen: {
    title: "Something went wrong!",
    friendlySubtitle:
      "This is the screen that your users will see in production when an error is thrown. You'll want to customize this message (located in `app/i18n/en.ts`) and probably the layout as well (`app/screens/ErrorScreen`). If you want to remove this entirely, check `app/app.tsx` for the <ErrorBoundary> component.",
    reset: "RESET APP",
  },
  snackBar: {
    ok: "OK",
    dismiss: "Dismiss",
    sightingsSaved: "Sightings for the last saved location loaded!",
    defaultError: "Some error occurred",
    locationSaved: "Location saved",
    locationExist: "Location with this title already exists!",
    openSettingsError: "Cannot open settings!",
    shared: "Successfully shared!",
    savedToGallery: "Saved to gallery",
  },
  permissionsModal: {
    close: "Close",
    openSettings: "Open settings",
    body: "To use this feature, you need to grant permission to access the gallery.",
  },
  permissionsAndroid: {
    title: "Permission to save videos",
    message: "This app needs permission to save videos to your device.",
    buttonNeutral: "Ask Me Later",
    buttonNegative: "Cancel",
    buttonPositive: "OK",
  },
  thanksModal: {
    body: "Thank you for contacting us. We have received your message and will process your request. We hope to include a resolution in future releases. Please note that this application does not collect user data, so we cannot respond to all messages individually.",
    dismiss: "Dismiss",
  },
  privacy: {
    title: "Use your location",
    body: "We use location data to calculate the upcoming sightings in your current location. We DO NOT require access to the location data when the app is not in use. Please grant location permissions to enable this functionality",
    agree: "AGREE",
    skip: "SKIP",
    policy: "Privacy Policy",
  },
  notifications: {
    push: {
      title: "Spot the ISS now!",
      subTitle: "The ISS is passing above you at",
    },
    before: {
      titleOne: "Spot the ISS in",
      titleTwo: "minutes!",
      subTitleOne: "The ISS is passing above you in",
      subTitleTwo: "minutes at",
    },
  },
  units: {
    minute: "min",
    kilometer: "km",
    kilogram: "kg",
    month: "month",
    metersPerSecond: "M/S",
  },
  tabNavigator: {
    homeTab: "Home",
    issViewTab: "ISS View",
    issNowTab: "ISS Now",
    resourcesTab: "Resources",
    settingsTab: "Settings",
  },
  onboarding: {
    splash: {
      title: "Spot the Station",
      subTitle: "Gaze up into the sky and view the International Space Station (ISS)",
    },
    completeProfile: {
      notification: {
        title: "Notification Settings",
        label: "Get Push Notification Alerts",
        tip: "Get alerts when the space station is approaching your location.",
        nextButton: "Next",
      },
      location: {
        title: "Your Location",
        subtitle:
          "Please allow the app to detect your location automatically, or provide your location manually.",
        detectButton: "Detect My Location",
        orLabel: "or",
        selectLocation: "Enter your location",
        detecting: "Detecting location...",
        doneButton: "Done",
        serviceAlertTitle: "Location Services disabled",
        serviceAlertBody: "Please enable your location services to continue.",
        permissionAlertTitle: "Permission not granted",
        permissionAlertBody:
          "We use location data to calculate the upcoming sightings in your current location. Please grant location permissions to enable this functionality.",
      },
    },
  },
  homeScreen: {
    initLoader: {
      message: "ISS data is loading… This may take a moment to complete.",
      trajectoryError:
        "The ISS trajectory data is currently unavailable due to server maintenance. Please check back again later.",
    },
    header: {
      firstTimeHead: "NEXT SIGHTING",
      secondTimeHead: "COUNTDOWN",
    },
    selectLocation: {
      title: "Select Location",
      inputPlaceholder: "Search location by city, pin...",
      current: "Current location",
      saved: "Saved locations",
      nearby: "Nearby locations",
      search: "Search results",
      cta: "Customize notifications for this location",
      actionTitle: "Alert",
      refresh: "Refresh",
    },
    selectSightings: {
      title: "Upcoming Sightings",
      sightings: "Sightings",
      selectMessage: "Select events for which you would like to be notified.",
      switch: "Notify me for all upcoming events at this location.",
      aboveHorizon: "Above the horizon",
      today: "Today",
      tomorrow: "Tomorrow",
      appears: "Appears",
      disappears: "Disappears",
      empty:
        "There are no potential ISS sightings for this location from {{start}} through {{end}}.",
      coach: {
        title: "Icons Description",
        moon: "It will be nighttime at the selected location when the ISS is above the horizon.",
        sunset:
          "There will be twilight at the selected location when the ISS is above the horizon.",
        sun: "There will be daylight at the selected location when the ISS is above the horizon.",
      },
    },
    coachMarks: {
      skip: "Skip tour",
      next: "Next",
      finish: "Finish",
      dismiss: "Dismiss",
      locationTitle: "Change Location",
      locationData: "You can select or change your location to a different one directly from here.",
      sightingsTitle: "Next Sighting & Countdown",
      sightingsData:
        "This section shows you the date and a countdown timer for the next upcoming ISS sighting near your selected location. You can tap on the Next Sighting box to see a complete list of the upcoming sightings.",
      globeTitle: "Interactive Earth",
      globeData:
        "You can view the real-time position of the ISS by swiping on the screen. This allows you to interact with the Earth and track the location of the ISS in real-time.",
      mapTitle: "2D Map View",
      mapData:
        "This section shows a 2D representation of the full path of ISS against the night and day regions across the earth.",
      navigationTitle: "Navigation",
      navigationData:
        "You can browse through different features of the app from the navigation menu below.",
    },
  },
  issView: {
    timeHeader: "Countdown",
    cameraPermissionText:
      "You have not allowed the use of your phone's camera. Click here to allow.",
    issCaptured: "Capture this moment",
    details: {
      title: "International Space Station - Details",
      orbitalSpeed: "Orbital speed",
      longitude: "Longitude",
      latitude: "Latitude",
      altitude: "Altitude",
      crewOnboard: "Typical No. of Crew Onboard",
      launched: "Assembly Began",
      launchedValue: "20 November 1998",
      mass: "Estimated Mass",
      dimensions: "Estimated Dimensions",
      orbitalPeriod: "Orbital Period",
      orbitsPerDay: "Orbits/Day",
      dimensionsValue: "109m wide x 73m long x 14m tall",
    },
  },
  settings: {
    header: "Settings",
    locationSettings: "Location Settings",
    notificationSettings: "Notification Settings",
    termsAndConditions: "Terms and Conditions",
    contactUs: "Contact Us",
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
      backButton: "Settings",
      title: "Contact Us",
      titlePlaceholder: "Choose title",
      commentsPlaceholder: "Input comments",
      sendButton: "Send",
      contactUsOptions: {
        reportAnIssue: "Report an Issue",
        improvementIdeas: "Improvement Ideas",
        generalQuestions: "General Questions",
        comments: "Comments",
      },
    },
    notificationSettingsData: {
      backButton: "Settings",
      notificationTitle: "Notification Settings",
      privacyTitle: "Privacy Settings",
      upcomingLabel: "Upcoming Events",
      customizeLabel: "Customize Notifications",
      upcomingTip: "Turn off to stop receiving event notifications.",
      notifyMeBefore: "NOTIFY ME BEFORE",
      turnOffNotifications: "TURN OFF NOTIFICATIONS",
      from: "From",
      until: "Until",
    },
    locationSettingsData: {
      backToSettings: "Settings",
      goBack: "Go Back",
      generalTitle: "Location Settings",
      cta: "Customize notifications for this location",
      locationPermission: "Grant location permission",
      addNewLocation: {
        generalTitleAdd: "Add New Location",
        generalTitleEdit: "Edit Location",
        confirnModalButton: "Confirm",
        saveButton: "Save Location",
        searchInputPlaceholder: "Enter city, ZIP or address",
        nameInputPlaceholder: "Save Location Name",
      },
      removeLocation: {
        question: "Are you sure to delete this location?",
        cancelButton: "Cancel",
        removeButton: "Delete",
      },
    },
    localCalculations: "Local calculations",
  },
  resources: {
    header: "Resources",
    searchPlaceholder: "Search articles, events, etc...",
    suggestions: "SUGGESTIONS",
    searchResults: "Search Results",
    tabs: {
      news: "News",
      about: "About",
      details: "Details",
    },
  },
}

export default en
export type Translations = typeof en
