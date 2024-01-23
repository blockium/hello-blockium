# Blockium Hello World

This demonstrates how to create a fully featured web app using Blockium.

## Requirements

- A Firebase project configured with:
  - Authentication, and Google Sign-in enabled
  - A Web App
- NPM version 18+
- A Code Editor (e.g. Visual Studio Code)

## Steps

### 1. Create the project

```bash
npm create vite@latest

✔ Project name: … hello-blockium
✔ Select a framework: › React
✔ Select a variant: › TypeScript

Scaffolding project in /Users/marcos/Dev/js/blockium/hello-blockium...

Done. Now run:

  cd vite-project
  npm install
  npm run dev
```

### 2. Remove unused files

```bash
rm src/assets/react.svg
rm src/App.css src/App.tsx src/index.css
```

### 3. Install the @blockium/appbase

```bash
npm i @blockium/appbase
```

### 4. Create the Blockium Hello App

```jsx
// src/App.tsx

import { AppBase, AuthConfig, RouteElement } from "@blockium/appbase";

export default function App() {
  // 1. Configure Authentication
  // The web app config should be obtained from your Firebase project:
  const firebaseConfig = {
    apiKey: "[API_KEY]",
    authDomain: "[AUTH_DOMAIN]",
    projectId: "[PROJECT_ID]",
    storageBucket: "[STORAGE_BUCKET]",
    messagingSenderId: "[MESSAGING_SENDER_ID]",
    appId: "[APP_ID]",
    localEmulator: false, // If not using the Firebase emulator
  };
  const authConfig: AuthConfig = {
    config: firebaseConfig,
  };

  // 2. Create the home page component
  const HomePage = () => {
    return <div>Hello Blockium</div>;
  };

  // 3. Define the routes - in this case we have only the <HomePage />
  const routeElements: RouteElement[] = [{ path: "/", element: <HomePage /> }];

  // 4. Pass the config and the route elements to AppBase and return it
  return <AppBase authConfig={authConfig} routeElements={routeElements} />;
}
```

### 5. Run it

```bash
npm run dev
```
