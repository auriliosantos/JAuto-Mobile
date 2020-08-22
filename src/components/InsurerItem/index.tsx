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
}

const InsurerItem: React.FC<InsurerItemProps> = ({ insurer }) => {
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
      <ButtonsBar />
    </View>
  );
};

export default InsurerItem;
