import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Clients from "../pages/Clients";
import ClientsPersist from "../pages/ClientsPersist";

const { Navigator, Screen } = createStackNavigator();

function ClientsStack() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Clients" component={Clients} />
      <Screen name="ClientsPersist" component={ClientsPersist} />
    </Navigator>
  );
}

export default ClientsStack;
