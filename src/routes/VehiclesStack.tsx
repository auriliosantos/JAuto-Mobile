import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Vehicles from "../pages/Vehicles";
import VehiclesPersist from "../pages/VehiclesPersist";

const { Navigator, Screen } = createStackNavigator();

function VehiclesStack() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Vehicles" component={Vehicles} />
      <Screen name="VehiclesPersist" component={VehiclesPersist} />
    </Navigator>
  );
}

export default VehiclesStack;
