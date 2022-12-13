const en = {
  common: {
    ok: "OK!",
    cancel: "Cancel",
    back: "Back",
  },
  errorScreen: {
    title: "Something went wrong!",
    friendlySubtitle:
      "This is the screen that your users will see in production when an error is thrown. You'll want to customize this message (located in `app/i18n/en.ts`) and probably the layout as well (`app/screens/ErrorScreen`). If you want to remove this entirely, check `app/app.tsx` for the <ErrorBoundary> component.",
    reset: "RESET APP",
    traceTitle: "Error from %{name} stack",
  },
  errors: {
    invalidEmail: "Invalid email address.",
  },
  tabNavigator: {
    homeTab: "Home",
    skyViewTab: "Sky View",
    issNowTab: "ISS Now",
    resourcesTab: "Resources",
    accountTab: "Account",
  },
  onboarding: {
    splash: {
      title: "Spot the Station",
      subTitle: "Gaze up into the sky and view the International Space Station (ISS)",
    },
    login: {
      title: "Login to\nyour account",
      loginError: "Try again!\nIncorrect Credentials",
      placeholder: {
        email: "Email Address",
        password: "Password",
      },
      forgotPassword: "Forgot Password?",
      loginButton: "Login",
      loginWith: "or login with",
      haveAccountQustion: "Don’t have an account?",
      signUpLink: "Sign Up",
    }
  },
  issNowTab: {
    details: {
      latitude: "Lat.",
      longitude: "Long.",
      altitude: "Altitude",
      speed: "Speed",
      switchLabel: "Metric/Imperial"
    }
  }
}

export default en
export type Translations = typeof en
