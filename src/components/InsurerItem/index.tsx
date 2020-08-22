import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";
import ButtonsBar from "../ButtonsBar";

export interface Insurer {
  id: number;
  name: string;
  support_phone: string;
}

interface InsurerItemProps {
  insurer: Insurer;
  loadInsurers(): void;
}

const InsurerItem: React.FC<InsurerItemProps> = ({ insurer, loadInsurers }) => {
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <View>
          <Text style={styles.label}>Nome:</Text>
          <Text style={styles.output}>{insurer.name}</Text>
        </View>
        <View>
          <Text style={styles.label}>Asistência 24hrs:</Text>
          <Text style={styles.output}>{insurer.support_phone}</Text>
        </View>
      </View>
      <ButtonsBar
        id={insurer.id}
        entity="Insurers"
        item={insurer}
        loadFunc={loadInsurers}
      />
    </View>
  );
};

export default InsurerItem;
