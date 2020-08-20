import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ClientsStack from "./ClientsStack";
import InsurancesStack from "./InsurancesStack";
import InsurersStack from "./InsurersStack";
import VehiclesStack from "./VehiclesStack";

const { Navigator, Screen } = createBottomTabNavigator();

const AppRoutes: React.FC = () => {
  return (
    <Navigator
      tabBarOptions={{
        style: { elevation: 0, shadowOpacity: 0, height: 64 },
        tabStyle: {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        },
        iconStyle: { flex: 0, width: 20, height: 20 },
        labelStyle: {
          fontFamily: "Roboto_700Bold",
          fontSize: 13,
          marginLeft: 0,
        },
        inactiveBackgroundColor: "#023e8a",
        activeBackgroundColor: "#c2e812",
        inactiveTintColor: "#fff",
        activeTintColor: "#000",
      }}
    >
      <Screen
        options={{ tabBarLabel: "Clientes" }}
        name="Clients"
        component={ClientsStack}
      />
      <Screen
        options={{ tabBarLabel: "Carros" }}
        name="Vehicles"
        component={VehiclesStack}
      />
      <Screen
        options={{ tabBarLabel: "Seguradoras" }}
        name="Insurers"
        component={InsurersStack}
      />
      <Screen
        options={{ tabBarLabel: "Seguros" }}
        name="Insurances"
        component={InsurancesStack}
      />
    </Navigator>
  );
};

export default AppRoutes;
