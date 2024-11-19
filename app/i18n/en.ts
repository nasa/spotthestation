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
        question1: "1. Why is the Space Station up there?",
        answer1:
          "The International Space Station is Earth's only microgravity laboratory. This football field-sized platform hosts a plethora of science and technology experiments that are continuously being conducted by crew members, or are automated. Research aboard the orbiting laboratory holds benefits for life back on Earth, as well as for future space exploration. The Space Station serves as a testbed for technologies and allows us to study the impacts of long-term spaceflight to humans, supporting NASA's mission to push human presence farther into space. To learn more about the research happening on the Space Station, and opportunities to conduct your science there, please <a href='https://www.nasa.gov/international-space-station/'>click here</a>.",
        question2: "2. How fast is the Space Station traveling?",
        answer2:
          "The Station circles the Earth every 90 minutes. It travels at about 17,500 miles (28,000 km) per hour, which gives the crew 16 sunrises and sunsets every day. In the more than 15 years that people have been living onboard, the Station has circumnavigated the Earth tens of thousands of times. You can see more facts about the Station on <a href='https://www.nasa.gov/international-space-station/space-station-facts-and-figures/'>this webpage</a>.",
        question3: "3. How often can I expect to see the Space Station?",
        answer3:
          "The Space Station is visible because it reflects the light of the Sun – the same reason we can see the Moon. However, unlike the Moon, the Space Station isn't bright enough to see during the day. It can only be seen when it is dawn or dusk at your location. As such, it can range from one sighting opportunity a month to several a week, since it has to be both dark where you are, and the Space Station has to happen to be going overhead.",
        question4: "4. What is the Spot the Station mobile app?",
        answer4:
          "The Spot the Station mobile app is an official NASA app that helps users track and receive notifications for sightings of the International Space Station as it passes over their location. It provides real-time tracking, sighting schedules, and alerts.",
        question5: "5. How do I download the Spot the Station mobile app?",
        answer5:
          "You can download the app from both the Apple App Store <a href='https://apps.apple.com/us/app/spot-the-station/id6449235044'>here</a> and Google Play Store <a href='https://play.google.com/store/apps/details?id=gov.nasa.hq.SpotTheStation&hl=en_US&pli=1'>here</a>.",
        question6: "6. How does the app notify me of upcoming Station sightings?",
        answer6:
          "The app sends push notifications to alert you of upcoming Station sightings, including the date, time, duration, and visibility conditions specific to your location. Please make sure that you have enabled notifications permissions for this app in your phone’s settings.",
        question7: "7. Can I customize notifications in the app?",
        answer7:
          "Yes, you can personalize alert settings in the app to receive notifications based on your preferred location, sighting conditions, and even specific times that work best for you.",
        question8: "8. What should I do if I’m not receiving notifications?",
        answer8:
          "If you’re not receiving alerts, make sure notifications are enabled in your device settings. Also, check the app’s notification preferences to confirm you’ve set up alerts for your chosen location and preferred timing.",
        question9: "9. Does the app work internationally?",
        answer9:
          "Yes, the Spot the Station app is available worldwide and provides sighting information for most inhabited locations, making it easy to view the Station from almost anywhere.",
        question10: "10. Why aren't there any sighting opportunities for my location?",
        answer10:
          "It needs to be dark where you are and the Space Station needs to be overhead in order for you to see it. Since the space Station's orbit takes it all around the globe, it can pass over you at times when it will not be visible- either in the middle of the day or the middle of the night. Spot The Station will only send out notifications when you will have an opportunity to see the Space Station, not every time it will be overhead.",
        question11: "11. Do I need a telescope to see the Space Station?",
        answer11: "No, you can see the Space Station with your bare eyes, no equipment required.",
        question12:
          "12. Does the Station appear and then disappear because of the light of the Moon?",
        answer12:
          "The Space Station is visible because it is reflecting light from the Sun. This is the same reason that the Moon appears to shine. Even when the Moon hasn't risen, you'll still be able to see the Space Station.",
        question13: "13. What time zone is used for alert notifications?",
        answer13:
          "All of the Spot The Station information is listed in the local time zone for the selected location. Spot The Station automatically adjusts for Daylight Savings Time.",
        question14: "14. What information does the app provide for each sighting?",
        answer14:
          "For each sighting, the app displays the time, visibility duration, maximum height, and directions where the Station will appear and disappear, helping you locate it accurately in the sky.",
        question15:
          "15. How do I spot the Station during each sighting? What does all this sighting information mean?",
        answer15:
          "The app provides a list of Upcoming Sightings if you tap on the Next Sightings List on the Home page.<br/><strong>Date and time</strong> is when the sighting opportunity will begin in your local time zone. All sightings will occur within a few hours before or after sunrise or sunset. This is the optimum viewing period as the sun reflects off the Space Station and contrasts against the darker sky.<br/><strong>Above the horizon</strong> is the maximum time period the Space Station is visible before crossing back below the horizon.<br/><strong>Max height</strong> is measured in degrees (also known as elevation). It represents the height of the Space Station from the horizon in the night sky. The horizon is at zero degrees, and directly overhead is ninety degrees. If you hold your fist at arm's length and place your fist resting on the horizon, the top will be about 10 degrees.<br/><strong>Appears</strong> is the location in the sky where the Station will be visible first. This value, like maximum height, also is measured in degrees from the horizon. The letters represent compass directions -- N is north, WNW is west by northwest, and so on.<br/><strong>Disappears</strong> represents where in the night sky the International Space Station will leave your field of view.<img src='https://spotthestation.nasa.gov/images/astro_horizon.png' />",
        question16:
          "16. The flyover schedule indicates the Space Station is both appearing and disappearing from the same direction, how is that possible? E.g. - Time: Mon Jul 15 11:57 PM, Visible: 2 min, Max Height: 51°, Appears: 51° above ENE, Disappears: 11° above ENE",
        answer16:
          "The Spot the Station software rounds off directions to the nearest cardinal and intracardinal directions. This can result in it seeming as though the Station will be appearing and disappearing in the same direction even though it is traveling across the sky. This typically happens on flyovers with a short window of visibility because the Station is quickly moving into (or out of) the Earth's dark shadow where, from our location on the ground, we can't observe its full pass across the sky.",
        question17: "17. Can I view a live map of the Station’s location?",
        answer17:
          "Yes, the app includes a real-time map showing the current position of the Station as it orbits Earth, giving you a visual reference to track its progress.",
        question18: "18. What is the AR feature in the Spot the Station app?",
        answer18:
          "The Augmented Reality (AR) feature in the Spot the Station app allows users to view a virtual overlay of the International Space Station’s path in the sky. This feature helps users locate the Station more accurately by aligning their device with the real-time position of the Station.",
        question19: "19. How do I access the AR feature in the app?",
        answer19:
          "To access the AR feature, open the app and navigate to the AR View option in the bottom menu. Follow on-screen prompts to align your device’s camera with the sky, where the app will display a virtual overlay indicating the Station’s position and trajectory.",
        question20: "20. Do I need a specific device or software to use the AR feature?",
        answer20:
          "The AR feature requires a device that can determine its orientation in 3D space. It requires specific hardware support, such as a gyroscope or motion co-processor. Older or budget devices may not support this functionality.",
        question21: "21. How does the AR feature work?",
        answer21:
          "Using your device's camera and sensors, the AR feature superimposes the Station’s location in the sky onto your screen, adjusting in real time as you move your device. The app guides you to point your camera in the correct direction and shows you where the Station will appear and disappear.",
        question22: "22. Can I use the AR feature during both day and night?",
        answer22:
          "Yes, you can use the AR feature during both day and night; however, the best experience is typically during twilight or nighttime when the Station is visible to the naked eye. The AR overlay will work regardless of the light conditions, but actual sightings depend on visibility.",
        question23: "23. Is the AR overlay accurate for all locations?",
        answer23:
          "Yes, the AR feature is designed to provide accurate position information based on your GPS location. However, accuracy may vary slightly depending on your device’s compass and sensor calibration. If you notice discrepancies, recalibrate your device’s compass through Settings.",
        question24: "24. Can the AR feature help with exact sighting times?",
        answer24:
          "The AR feature visually guides you to locate the Station at the precise time it appears in the sky. Coupled with the app’s sighting alerts, it enhances your ability to see the Station by giving you a live, visual direction and height indicator to track it precisely.",
        question25: "25. Are there tips for optimizing my AR experience?",
        answer25:
          "For the best AR experience, use the feature in an open area with a clear view of the sky. Avoid obstructions like tall buildings or trees, as these can block visibility. Calibrate your device’s compass and ensure location services and camera permissions are enabled for smooth functioning.",
        question26: "26. Is the AR feature available on both Android and iOS?",
        answer26:
          "Yes, the AR feature is available on both iOS and Android versions of the app, as long as your device meets hardware requirements.",
        question27: "27. Does the app work offline?",
        answer27:
          "Some basic functionality, like accessing previously downloaded sighting schedules or receiving scheduled notifications, may work offline. However, features requiring real-time data, such as tracking, require an internet connection.",
        question28: "28. Are there any special requirements for using the app?",
        answer28:
          "The app requires an active internet connection for real-time tracking and alerts. Additionally, for location-specific information, ensure your device’s location services are enabled for the app.",
        question29: "29. Is the app free to use?",
        answer29:
          "Yes, the Spot the Station app is free to download and use, with no in-app purchases or subscriptions.",
        question30: "30. Who can I contact for app support?",
        answer30:
          "For support with the Spot the Station app, visit NASA’s support page or reach out through the feedback option within the app.",
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
  },
}

export default en
export type Translations = typeof en
