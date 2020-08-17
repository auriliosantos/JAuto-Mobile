import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

function Landing() {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Landing</Text>
      <Button title="Acessar" onPress={() => navigate("CRUDTabs")} />
    </View>
  );
}

export default Landing;
