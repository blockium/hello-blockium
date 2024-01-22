import { AppBase, AuthConfig, RouteElement } from "@blockium/appbase";

export default function App() {
  // 1. Configure Authentication
  // The web app config should be obtained from your Firebase project:
  const firebaseConfig = {
    apiKey: "AIzaSyC-uQwpo2NV99ATkKuKfyTEsRUDGgp-0Kk",
    authDomain: "blockiumjs.firebaseapp.com",
    projectId: "blockiumjs",
    storageBucket: "blockiumjs.appspot.com",
    messagingSenderId: "61328530945",
    appId: "1:61328530945:web:c5c5592a3a3f019d222a00",
    localEmulator: false, // As we are not using the Firebase emulator
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
