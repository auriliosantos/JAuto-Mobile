import { StatusBar } from "expo-status-bar";
import React from "react";
import { AppLoading } from "expo";
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import { NavigationContainer } from "@react-navigation/native";

import { AuthProvider } from "./src/contexts/auth";
import Routes from "./src/Routes";

const App: React.FC = () => {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <NavigationContainer>
          <AuthProvider>
            <Routes />
          </AuthProvider>
        </NavigationContainer>
        <StatusBar style="light" />
      </>
    );
  }
};

export default App;
