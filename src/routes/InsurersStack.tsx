import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Insurers from "../pages/Insurers";
import InsurersDetail from "../pages/InsurersDetail";
import InsurersPersist from "../pages/InsurersPersist";

const { Navigator, Screen } = createStackNavigator();

function InsurersStack() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Insurers" component={Insurers} />
      <Screen name="InsurersDetail" component={InsurersDetail} />
      <Screen name="InsurersPersist" component={InsurersPersist} />
    </Navigator>
  );
}

export default InsurersStack;
