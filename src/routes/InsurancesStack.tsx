import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Insurances from "../pages/Insurances";
import InsurancesDetail from "../pages/InsurancesDetail";
import InsurancesPersist from "../pages/InsurancesPersist";

const { Navigator, Screen } = createStackNavigator();

function InsurancesStack() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Insurances" component={Insurances} />
      <Screen name="InsurancesDetail" component={InsurancesDetail} />
      <Screen name="InsurancesPersist" component={InsurancesPersist} />
    </Navigator>
  );
}

export default InsurancesStack;
