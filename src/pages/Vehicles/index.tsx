import React, { useEffect, useState, useContext } from "react";
import { View, FlatList } from "react-native";

import VehicleItem, {
  Vehicle,
  VehiclesInfo,
  Usage_types,
} from "../../components/VehicleItem";
import { Client } from "../../components/ClientItem";
import styles from "./styles";

import api from "../../services/api";
import PageHeader from "../../components/PageHeader";

const Vehicles: React.FC = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [vehiclesInfo, setVehiclesInfo] = useState<VehiclesInfo>(
    {} as VehiclesInfo
  );

  useEffect(() => {
    async function loadVehicles() {
      const response = await api.get("/vehicles");
      setVehiclesInfo({
        usage_types: response.data.vehiclesInfo.usage_types as Usage_types[],
        clients: response.data.vehiclesInfo.clients as Client[],
      });
      setVehicles(response.data.vehicles);
    }
    loadVehicles();
  }, []);

  return (
    <>
      <PageHeader title="Veículos" />
      <View style={styles.container}>
        <FlatList
          data={vehicles}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item: vehicle }) => (
            <VehicleItem vehicle={vehicle} vehiclesInfo={vehiclesInfo} />
          )}
        />
      </View>
    </>
  );
};

export default Vehicles;
