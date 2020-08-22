import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Insurers from "../pages/Insurers";
import InsurersPersist from "../pages/InsurersPersist";

const { Navigator, Screen } = createStackNavigator();

function InsurersStack() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Insurers" component={Insurers} />
      <Screen name="InsurersPersist" component={InsurersPersist} />
    </Navigator>
  );
}

export default InsurersStack;
