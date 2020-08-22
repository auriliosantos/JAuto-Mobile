import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";

import styles from "./styles";

const ButtonsBar: React.FC = () => {
  return (
    <View style={styles.buttonsBar}>
      <View>
        <TouchableOpacity style={styles.buttons} onPress={() => {}}>
          <SimpleLineIcons
            style={styles.icon}
            name="refresh"
            size={24}
            color="#C2E812"
          />
          <Text style={styles.buttonText}>Alterar</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.buttons} onPress={() => {}}>
          <SimpleLineIcons
            style={styles.icon}
            name="trash"
            size={20}
            color="#C2E812"
          />
          <Text style={styles.buttonText}>Apagar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ButtonsBar;
