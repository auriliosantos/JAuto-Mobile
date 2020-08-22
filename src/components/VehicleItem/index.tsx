import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";
import ButtonsBar from "../ButtonsBar";

export interface Vehicle {
  id: number;
  year: string;
  model: string;
  chassis: string;
  plate: string;
  usage_type: string;
  owner: string;
}

interface VehicleItemProps {
  vehicle: Vehicle;
  loadVehicles(): void;
}

const VehicleItem: React.FC<VehicleItemProps> = ({ vehicle, loadVehicles }) => {
  return (
    <View>
      <View style={styles.container}>
        <View>
          <Text style={styles.label}>Ano:</Text>
          <Text style={styles.output}>{vehicle.year}</Text>
        </View>
        <View>
          <Text style={styles.label}>Modelo:</Text>
          <Text style={styles.output}>{vehicle.model}</Text>
        </View>
        <View>
          <Text style={styles.label}>Chassi:</Text>
          <Text style={styles.output}>{vehicle.chassis}</Text>
        </View>
        <View>
          <Text style={styles.label}>Placa:</Text>
          <Text style={styles.output}>{vehicle.plate}</Text>
        </View>
        <View>
          <Text style={styles.label}>Tipo de uso:</Text>
          <Text style={styles.output}>{vehicle.usage_type}</Text>
        </View>
        <View>
          <Text style={styles.label}>Dono(a):</Text>
          <Text style={styles.output}>{vehicle.owner}</Text>
        </View>
      </View>
      <ButtonsBar
        id={vehicle.id}
        entity="Vehicles"
        item={vehicle}
        loadFunc={loadVehicles}
      />
    </View>
  );
};

export default VehicleItem;
