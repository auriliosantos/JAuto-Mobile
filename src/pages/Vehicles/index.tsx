import React, { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";

import VehicleItem, { Vehicle } from "../../components/VehicleItem";
import styles from "./styles";

import api from "../../services/api";
import PageHeader from "../../components/PageHeader";

const Vehicles: React.FC = () => {
  const [isMounting, setIsMounting] = useState(true);
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  useEffect(() => {
    async function loadVehicles() {
      const response = await api.get("/vehicles");
      setVehicles(response.data.vehicles);
      setIsMounting(false);
    }
    loadVehicles();
  }, []);

  return (
    <>
      <PageHeader title="Veículos" />
      <View style={styles.container}>
        {isMounting ? (
          <ActivityIndicator size="large" color="#023E8A" />
        ) : (
          <FlatList
            data={vehicles}
            keyExtractor={(item) => `${item.id}`}
            renderItem={({ item: vehicle }) => (
              <VehicleItem vehicle={vehicle} />
            )}
          />
        )}
      </View>
    </>
  );
};

export default Vehicles;
