import React, { useState } from "react";
import { View, Image, Text, Linking } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import heartOutlineIcon from "../../assets/images/icons/heart-outline.png";
import unfavoriteIcon from "../../assets/images/icons/unfavorite.png";
import whatsappIcon from "../../assets/images/icons/whatsapp.png";

import styles from "./styles";

export interface Client {
  id: number;
  name: string;
  address: string;
  birthday: number;
  marital_status_id: number;
}

export interface ClientInfo {
  id: number;
  name: string;
}

interface ClientItemProps {
  client: Client;
  clientsInfo: ClientInfo[];
}

const ClientItem: React.FC<ClientItemProps> = ({ client, clientsInfo }) => {
  const find = clientsInfo.find((item) => item.id === client.marital_status_id);
  const marital_status_name = find?.name;
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <View style={styles.profileInfo}>
          <Text style={styles.name}>{client.name}</Text>
          <Text style={styles.address}>{client.address}</Text>
          <Text style={styles.birthday}>{client.birthday}</Text>
          <Text style={styles.marital_status_id}>{marital_status_name}</Text>
        </View>
      </View>
    </View>
  );
};

export default ClientItem;
