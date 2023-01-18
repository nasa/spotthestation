// This is the entry point if you run `yarn expo:start`
// If you run `yarn ios` or `yarn android`, it'll use ./index.js instead.
import App from "./app/app.tsx"
import React from "react"
import { registerRootComponent } from "expo"

function IgniteApp() {
  return <App />
}

registerRootComponent(IgniteApp)
export default IgniteApp
