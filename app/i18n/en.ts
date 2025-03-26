const en = {
  name: "English",
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
  outdatedModal: {
    title: "Update Available",
    body: "New version of the app is available! Download new version on",
    buttonNegative: "Cancel",
    buttonPositive: "Download",
  },
  permissionsModal: {
    close: "Close",
    openSettings: "Open settings",
    body: "To use this feature, you need to grant permission to access the gallery.",
  },
  fontSizeModal: {
    title: "Font Size Too Large",
    body1:
      "It looks like your device's font size is set too high. This may cause some essential information to be cropped or displayed incorrectly in the app.",
    bodyAndroid:
      "To adjust your font size, go to Settings → Display → Font size and style → Adjust the slider to a smaller size.",
    bodyIOS:
      "To adjust your font size, go to Settings → Accessibility → Display & Text Size → Larger Text → Adjust the slider to a smaller size.",
    cancel: "Cancel",
    settings: "Go to Settings",
  },
  permissionsAndroid: {
    title: "Permission to save videos",
    message: "This app needs permission to save videos to your device.",
    buttonNeutral: "Ask Me Later",
    buttonNegative: "Cancel",
    buttonPositive: "OK",
    alarmPermissionTitle: "Permission required",
    alarmPermissionMessage:
      "Please grant alarms and reminders permission on the next screen in order to receive notifications about upcoming sightings.",
  },
  thanksModal: {
    body: "Thank you for contacting us. We have received your message and will process your request. Please note that this application does not collect user data, so we cannot respond to all messages individually.",
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
      title: "Spot the Station now!",
      subTitle: "The Station is passing above you at",
    },
    before: {
      titleOne: "Spot the Station in",
      titleTwo: "minutes!",
      subTitleOne: "The Station is passing above you in",
      subTitleTwo: "minutes at",
    },
  },
  units: {
    minute: "min",
    kilometer: "km",
    kilogram: "kg",
    month: "month",
    metersPerSecond: "M/S",
    time: "T",
  },
  tabNavigator: {
    homeTab: "Home",
    issViewTab: "AR View",
    issNowTab: "Tracker",
    resourcesTab: "Resources",
    settingsTab: "Settings",
  },
  onboarding: {
    splash: {
      title: "Spot the\nStation",
      subTitle: "Gaze up into the sky and view the International Space Station",
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
      message: "Station data is loading… This may take a moment to complete.",
      trajectoryError:
        "The Station trajectory data is currently unavailable due to server maintenance. Please check back again later.",
      noNetwork:
        "The Station trajectory data is currently unavailable due to no connection. Please check back again later.",
    },
    header: {
      firstTimeHead: "NEXT SIGHTING(S) LIST",
      secondTimeHead: "COUNTDOWN",
      timezone: "Time Zone",
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
      maxHeight: "Max height of",
      today: "Today",
      tomorrow: "Tomorrow",
      appears: "Appears",
      disappears: "Disappears",
      all: "All",
      timeOfDay: "Time of day",
      night: "Night",
      twilight: "Twilight",
      duration: "Duration",
      shorterThan2: "shorter than 2 minutes",
      longerThan2: "2 minutes and longer",
      empty:
        "There are no potential Station sightings for this location from {{start}} through {{end}}.",
      shareTitle: "The Station is passing above {{location}} on {{date}}",
      shareLink: "To explore more and track the station via augmented reality, download the app at",
      coach: {
        title: "Icons Description",
        moon: "It will be nighttime at the selected location when the Station is above the horizon.",
        sunset:
          "There will be twilight at the selected location when the Station is above the horizon.",
      },
      cloudCover: {
        title: "Cloud Cover",
        any: "Any",
        low: "Low (<25%)",
        medium: "Medium (25-50%)",
      },
      pastSightings: "Past Sightings",
      compass: {
        N: "N",
        NNE: "NNE",
        NE: "NE",
        ENE: "ENE",
        E: "E",
        ESE: "ESE",
        SE: "SE",
        SSE: "SSE",
        S: "S",
        SSW: "SSW",
        SW: "SW",
        WSW: "WSW",
        W: "W",
        WNW: "WNW",
        NW: "NW",
        NNW: "NNW",
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
        "This section shows you the date and a countdown timer for the next upcoming Station sighting near your selected location. You can tap on the Next Sighting box to see a complete list of the upcoming sightings.",
      globeTitle: "Interactive Earth",
      globeData:
        "You can view the real-time position of the Station by swiping on the screen. This allows you to interact with the Earth and track the location of the ISS in real-time.",
      mapTitle: "2D Map View",
      mapData:
        "This section shows a 2D representation of the full path of Station against the night and day regions across the earth.",
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
      title: "Information",
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
      dateTime: "Date and Time",
      maxHeight: "Max Height",
      duration: "Duration Above Horizon",
      appears: "Appears",
      disappears: "Disappears",
      distance: "Distance",
      nextSighting: "Next Sighting",
    },
    arNotSupported: "AR is not supported on this device",
    noOrientationSensor: "Orientation sensor is not available",
    noMagnetometerSensor: "Magnetometer is not available",
    screenshotError: "Unable to capture screenshot",
    coachMarks: {
      circleTitle: "Spot the Station",
      circleData:
        "To spot the station, move your phone in the direction of the arrow outside the circle. As you get closer, the color of the circle will change to green.",
      compassTitle: "Compass",
      compassData:
        "This compass shows you the direction that you are looking at, and the relative direction in which you can spot the station.",
      infoTitle: "Information",
      infoData:
        "This toggle opens or closes the window with detailed information about the current or next upcoming sighting and live information about the station.",
      trajectoryTitle: "Station Trajectory",
      trajectoryData:
        "This toggle turns the station trajectory on or off the screen. The solid line shows the past and the dotted line shows the future trajectory of the station.",
      arTitle: "AR View",
      arData: "This toggle switches between the full screen and partial AR views.",
      shareTitle: "Share",
      shareData:
        "This button allows you to share a screenshot of the AR view via text message, email, or social media.",
      screenshotTitle: "Screen Capture",
      screenshotData:
        "This button allows you to capture a screenshot of the AR view to save in your photo gallery.",
      videoTitle: "Video Recording",
      videoData:
        "This button allows you to record a video of the AR view to capture the moments that you spot the station.",
    },
    safetyReminder: {
      title: "Attention: Safety Reminder",
      subtitle1: "Parental Supervision Advised:",
      body1:
        "Please remember the importance of parental supervision when engaging with AR screen in this app. Children should use this feature under the guidance of a responsible adult to ensure a safe and appropriate experience.",
      subtitle2: "Stay Alert to Your Surroundings:",
      body2:
        "As you enjoy the augmented reality experience, always remain aware of your physical surroundings. Watch out for obstacles, uneven terrain, or other hazards that may pose a risk to your safety. Your safety is paramount, so please exercise caution and mindfulness at all times.",
      home: "Back to Home",
      ok: "I Understand",
    },
  },
  settings: {
    header: "Settings",
    locationSettings: "Location Settings",
    notificationSettings: "Notification Settings",
    termsAndConditions: "Terms and Conditions",
    contactUs: "Contact Us",
    language: "Language",
    calibrateCompass: "Compass Calibration",
    calibrateCompassData: {
      instructions:
        "To calibrate the compass, rotate your device several times in a figure 8 pattern.",
      accuracy: "Sensor Accuracy:",
      low: "Low",
      medium: "Medium",
      high: "High",
    },
    tutorials: "Tutorials",
    tutorialsData: {
      description:
        "Do you want to see the step-by-step tutorials for the Home and AR View pages one more time?",
      homePage: "Home Page",
      arPage: "AR View",
    },
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
      rangeInputPlaceholder: "Choose between 1 to 120 minutes",
      customOption: "Custom",
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
    share: "Share",
    shareLink:
      "To track the International Space Station via augmented reality, download the NASA Spot The Station Mobile app at",
    localCalculations: "Local calculations",
  },
  resources: {
    header: "Resources",
    goBack: "Go Back",
    news: {
      title: "Station News",
      searchPlaceholder: "Search articles, events, etc...",
      suggestions: "SUGGESTIONS",
      searchResults: "Search Results",
    },
    spotTheStation: {
      title: "How Do I Spot the Station?",
    },
    about: {
      title: "About the Station",
    },
    details: {
      title: "Station Details",
    },
    faq: {
      title: "Frequently Asked Questions",
      questions: {
        question1: "1. Why is the International Space Station up there?",
        answer1:
          "The International Space Station is a convergence of science, technology, and human innovation that enables research not possible on Earth for the benefit of humanity. For more than 24 years, NASA has supported a continuous U.S. human presence aboard the station, through which astronauts have learned to live and work in space for extended periods of time.<br/>" +
          "The space station – which involves the United States, Russia, Canada, Japan, and the ESA (European Space Agency) participating countries – is one of the most complex, interdependent international collaborations ever attempted. It brings together international flight crews and multiple space transportation providers, as well as globally distributed support teams, facilities, communications networks, and the worldwide scientific community.<br/>" +
          "Over the past 24 years, the space station has transformed into an orbiting laboratory with research capabilities that enable scientists from over 109 nations to conduct over 4,000 groundbreaking experiments in an extreme and unique spaceflight environment.<br/>" +
          "The space station serves as a springboard for developing a low Earth economy and NASA’s next great leaps in exploration, including missions to the Moon under Artemis and, ultimately, human exploration of Mars.<br/>" +
          "Learn more about the International Space Station, its research, and its crew, at:<br/>" +
          "<a href='https://www.nasa.gov/station'>https://www.nasa.gov/station</a>",
        question2: "2. How fast is the International Space Station traveling?",
        answer2:
          "The International Space Station orbits the Earth once every 90 minutes. It travels at about 17,500 mph (28,000 kilometers per hour), which allows the crew onboard to see 16 sunrises and sunsets every day. Crews have occupied the space station continuously since November 2000. In that time, 280 people from 23 countries have visited the orbital outpost, and the station has circumnavigated the Earth hundreds of thousands of times.",
        question3: "3. How often can I expect to see the International Space Station?",
        answer3:
          "The International Space Station is visible because it reflects sunlight – the same reason we can see the Moon. However, unlike the Moon, the space station is not bright enough to see during the day. Viewing opportunities can range from one a month to several a week as the light from the Sun reflects off station as it passes overhead at dawn and dusk at your location.",
        question4: "4. What is the Spot the Station app?",
        answer4:
          "The Spot the Station mobile app is an official NASA app that helps users track and receive notifications for International Space Station viewings as it passes over their respective location. It also provides real-time tracking, flyover schedules, and alerts.",
        question5: "5. How do I download the Spot the Station mobile app?",
        answer5:
          "The Spot the Station mobile app is available on iOS and Android mobile and tablet devices.",
        question6:
          "6. How does the Spot the Station app notify me of upcoming International Space Station viewing opportunities?",
        answer6:
          "The Spot the Station app sends push notifications to alert users of upcoming International Space Station passes. Users should ensure app notification permissions are enabled on their device’s settings.",
        question7: "7. Can I customize notifications in the Spot the Station app?",
        answer7:
          "The Spot the Station app has the capability for personalized alert settings in order to receive push notifications specific to a user’s preferred location and timing of alerts. The Notification Settings can be found on the Settings page of the app, where users can turn on the notifications for all upcoming events, or customize notifications for the currently selected location. Users can customize notifications for other locations through the Location Settings.",
        question8: "8. What should I do if I am not receiving notifications?",
        answer8:
          "Users should check the notification preferences on the Spot the Station app (Notification Settings on the Settings page) to confirm the device is set up for alerts on a preferred location and timing. If users are still not receiving alerts, they should ensure notifications are enabled on their device’s settings.",
        question9: "9. Does the Spot the Station app work internationally?",
        answer9:
          "The Spot the Station app is available worldwide and in multiple languages including English, Dutch, French, German, Hindi, Italian, Japanese, Polish, Portuguese (Brazil), Russian, Spanish, Turkish, and Ukrainian. The app provides viewing information for most inhabited locations, making it easy to view the International Space Station as it passes overhead from almost anywhere.",
        question10: "10. Why are there not viewing opportunities for my location?",
        answer10:
          "It needs to be dark with good visibility at your location and the space station needs to be overhead to see it. Since the space station's orbit takes it all around the globe, it can pass overhead at times when it will not be visible – either in the middle of the day or the middle of the night. Spot The Station will send out notifications only when there are opportunities to see the International Space Station in your location, not every time it will be overhead.",
        question11: "11. Do I need a telescope to see the International Space Station?",
        answer11:
          "No, users can view the International Space Station with their bare eyes, no additional equipment is required.",
        question12:
          "12. Does the International Space Station appear and then disappear because of the light of the Moon?",
        answer12:
          "The International Space Station is visible because it is reflecting sunlight. This is the same reason that the Moon appears to shine. Even when the Moon hasn't risen, users can see the station.",
        question13: "13. What time zone is used for alert notifications?",
        answer13:
          "All content within the Spot the Station app is listed in the local time zone for the user’s selected location. The app automatically adjusts for daylight savings time.",
        question14: "14. What information does the Spot the Station app provide for each sighting?",
        answer14:
          "For each sighting, the Spot the Station app displays the time, visibility duration, maximum height above horizon, and directions where the International Space Station will appear and disappear, helping users locate it accurately in the sky.",
        question15:
          "15. How do I spot the International Space Station during a viewing opportunity? What does all this information mean? ",
        answer15:
          "The Spot the Station app provides a list of “Upcoming Sightings” if users tap on the “Next Sighting(s) List” on the home page.<br/>" +
          "<strong>Date and time</strong> is when the viewing opportunity will begin in the local time zone. All passes will occur within a few hours before or after sunrise or sunset. This is the optimum viewing period as the Sun reflects off the International Space Station and contrasts against the darker sky.<br/>" +
          "<strong>Above the horizon</strong> is the maximum time period the station is visible before crossing back below the horizon.<br/>" +
          "<strong>Max height</strong> is measured in degrees (also known as elevation). It represents the height of the station from the horizon in the night sky. The horizon is at zero degrees, and directly overhead is 90 degrees. If users hold their fist at arm's length and place it resting on the horizon, the top will be about 10 degrees of elevation.<br/>" +
          "<strong>Appears</strong> is the location in the sky where the station will be visible first. This value, like maximum height, also is measured in degrees from the horizon. The letters represent compass directions — N is north, WNW is west by northwest, and so on.<br/>" +
          "<strong>Disappears</strong> represents where in the night sky the station will leave the field of view." +
          "<img src='https://spotthestation.nasa.gov/images/astro_horizon.png' />",
        question16:
          "16. The flyover schedule indicates the International Space Station is both appearing and disappearing from the same direction, how is that possible?",
        answer16:
          "The Spot the Station software rounds off directions to the nearest cardinal and intracardinal directions. This can result in it seeming as though the International Space Station will be appearing and disappearing in the same direction even though it is traveling across the sky. This typically happens on flyovers with a short window of visibility because the station is quickly moving into (or out of) the Earth's dark shadow where, from the user’s location on the ground, a full pass across the sky cannot be observed.",
        question17: "17. Can I view a live map of the International Space Station’s location?",
        answer17:
          "Yes, the Spot the Station app includes a real-time map showing the current position of the International Space Station as it orbits Earth, giving users a visual reference to track its progress.",
        question18: "18. What is the augmented reality feature in the Spot the Station app?",
        answer18:
          "The augmented reality feature in the Spot the Station app allows users to view a virtual overlay of the International Space Station’s path in the sky. This feature helps users locate the station more accurately by aligning their device with the real-time position of the station.",
        question19:
          "19. How do I access the augmented reality feature in the Spot the Station app?",
        answer19:
          "To access the augmented reality feature, open the Spot the Station app and navigate to the “AR View” option in the bottom menu. Follow on-screen prompts to align the device’s camera with the sky, where the app will display a virtual overlay indicating the International Space Station’s position and trajectory.",
        question20:
          "20. Do I need a specific device or software to use the augmented reality feature?",
        answer20:
          "The Spot the Station augmented reality feature requires a device that can determine its orientation in 3D space. It requires specific hardware support, such as a gyroscope or motion co-processor. Older or budget devices may not support this functionality.",
        question21: "21. How does the augmented reality feature work?",
        answer21:
          "Using the device's camera and sensors, the Spot the Station augmented reality feature superimposes the location of the International Space Station in the sky onto the screen, adjusting in real time as the user moves the device. The app guides users to point the device’s camera in the correct direction and shows where the station will appear and disappear.",
        question22: "22. Can I use the augmented reality feature during both day and night?",
        answer22:
          "Yes, the augmented reality feature within the Spot the Station app is available during both day and night; however, the best viewing experience is typically during twilight or nighttime when the International Space Station is visible to the naked eye. The augmented reality overlay will work regardless of the light conditions, but actual viewing opportunities depend on visibility.",
        question23: "23. Is the augmented reality overlay accurate for all locations?",
        answer23:
          "Yes, the augmented reality feature within the Spot the Station app is designed to provide accurate position information based on the device’s GPS location. However, accuracy may vary slightly depending on the device’s compass and sensor calibration. If users notice discrepancies, recalibrate the device’s compass through settings.",
        question24: "24. Can the augmented reality feature help with exact sighting times?",
        answer24:
          "The augmented reality feature within the Spot the Station app visually guides users to locate the International Space Station at the precise time it appears in the sky. Coupled with the app’s alerts, it enhances the ability to see the station by providing a live, visual direction and height indicator to precisely track it.",
        question25: "25. Are there tips for optimizing my augmented reality experience?",
        answer25:
          "For the best augmented reality experience in the Spot the Station app, use the feature in an open area with a clear view of the sky. Avoid obstructions like tall buildings or trees, as these can block visibility. Calibrate the device’s compass and ensure location services and camera permissions are enabled for smooth functioning.",
        question26:
          "26. Is the augmented reality feature available on both iOS and Android devices?",
        answer26:
          "Yes, the Spot the Station app augmented reality feature is available on both iOS and Android mobile and tablet devices, as long as your device meets hardware requirements.",
        question27: "27. Does the Spot the Station app work offline?",
        answer27:
          "Some basic functionality, like accessing previously downloaded viewing opportunity schedules or receiving scheduled notifications, may work offline. However, features requiring real-time data, such as tracking, require cellular service or an internet connection.",
        question28: "28. Are there any special requirements for using the Spot the Station app?",
        answer28:
          "The Spot the Station app requires active cellular service or an internet connection for real-time tracking and alerts. Additionally, for location-specific information, ensure the device’s location services are enabled for the app.",
        question29: "29. Is the Spot the Station app free to use?",
        answer29:
          "Yes, the Spot the Station app is free to download and use, with no in-app purchases or subscriptions.",
        question30: "30. Who can I contact for Spot the Station app support?",
        answer30:
          "For support with the Spot the Station app, reach out through the app’s feedback option or <a href='mailto:hq-spotthestation@mail.nasa.gov'>email Spot the Station team</a>.",
      },
    },
    astronauts: {
      title: "Who is on Station Now?",
      number: "Number of people:",
    },
    live: {
      title: "Live Stream",
      description:
        "Currently, live video of Earth is streaming from an external HD camera mounted on the ISS. The camera is looking toward Earth with an occasional solar panel passing through the view.",
    },
    tour: {
      title: "Virtual Tour",
    },
    videos: {
      title: "Station Videos",
    },
    gallery: {
      title: "Gallery",
    },
    earthScience: {
      title: "Earth Science Data Resources",
    },
  },
}

export default en
export type Translations = typeof en
