import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Landing from "../pages/Landing";
import CRUDTabs from "./CRUDTabs";

const { Navigator, Screen } = createStackNavigator();

function MainStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Landing" component={Landing} />
        <Screen name="CRUDTabs" component={CRUDTabs} />
      </Navigator>
    </NavigationContainer>
  );
}

export default MainStack;
