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
    },
    forgotPassword: {
      title: "Forgot Password?",
      titleMailed: "Check Your Inbox",
      subtitle: "No worries, we’ll send you reset instructions",
      subtitleMailed: "We sent a password reset link to",
      resetButton: "Reset password",
      openEmailAppButton: "Open Email App",
      rememberQustion: "Remember your password?",
      loginLink: "Login",
      doNotReceiveQustion: "Don’t receive the email?",
      resend: "Resend",
    },
    resetPassword: {
      title: "Set New Password",
      subtitle: "Your new password must be different from previously used passwords.",
      resetButton: "Change password",
      password: "Password",
      confirmPassword: "Confirm Password",
      success: {
        title: "Password Changed",
        subtitle: "You have successuffly changed your passsword. Please go back to login screen.",
        button: "Back To Login",
      }
    },
    signUp: {
      title: "Sign Up",
      email: "Email Address",
      phone: "Mobile Number",
      password: "Confirm Password",
      button: "Sign Up",
      privacy: {
        first: "I agree to the",
        tos: "Terms of Services",
        second: "and",
        pp: "Privacy Policy",
      }
    },
    otp: {
      title: "Enter OTP",
      subtitle: "Please enter the OTP code sent to your mobile number",
      question: "Don’t receive any code?",
      resend: "Resend"
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
