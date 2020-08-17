import { StatusBar } from "expo-status-bar";
import React from "react";
import { AppLoading } from "expo";
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";

import MainStack from "./src/routes/MainStack";

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <MainStack />
        <StatusBar style="light" />
      </>
    );
  }
}