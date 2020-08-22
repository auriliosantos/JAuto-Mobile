import React from "react";
import { View, TouchableOpacity, Text, Alert } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import api from "../../services/api";

export interface ButtonsBarProps {
  id: number;
  entity: string;
  item: object;
  loadFunc(): void;
}

const ButtonsBar: React.FC<ButtonsBarProps> = ({
  id,
  entity,
  item,
  loadFunc,
}) => {
  const { navigate } = useNavigation();
  function handleChangeBTN() {
    navigate(`${entity}Persist`, item);
  }
  function handleDeleteBTN() {
    Alert.alert("Atenção", "Deseja realmente apagar? (ação irreversível)", [
      {
        text: "Ok",
        onPress: del,
      },
      {
        text: "Cancelar",
        style: "cancel",
      },
    ]);
  }
  async function del() {
    await api.delete(`/${entity.toLowerCase()}/${id}`);
    loadFunc();
  }
  return (
    <View style={styles.buttonsBar}>
      <View>
        <TouchableOpacity style={styles.buttons} onPress={handleChangeBTN}>
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
        <TouchableOpacity style={styles.buttons} onPress={handleDeleteBTN}>
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
