import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";
import { Client } from "../ClientItem";

export interface Vehicle {
  id: number;
  year: string;
  model: string;
  chassis: string;
  plate: string;
  usage_type_id: number;
  owner_id: number;
}

export interface VehiclesInfo {
  usage_types: Usage_types[];
  clients: Client[];
}

export interface Usage_types {
  id: number;
  name: string;
}

interface VehicleItemProps {
  vehicle: Vehicle;
  vehiclesInfo: VehiclesInfo;
}

const VehicleItem: React.FC<VehicleItemProps> = ({ vehicle, vehiclesInfo }) => {
  const utFind = vehiclesInfo.usage_types.find(
    (item) => item.id === vehicle.usage_type_id
  );
  const usage_type_name = utFind?.name;

  const ownerFind = vehiclesInfo.clients.find(
    (item) => item.id === vehicle.owner_id
  );
  const owner_name = ownerFind?.name;
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
          <Text style={styles.output}>{usage_type_name}</Text>
        </View>
        <View>
          <Text style={styles.label}>Dono:</Text>
          <Text style={styles.output}>{owner_name}</Text>
        </View>
      </View>
    </View>
  );
};

export default VehicleItem;
