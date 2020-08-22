import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";
import dateFormater from "../../utils/dateFormater";
import ButtonsBar from "../ButtonsBar";

export interface Client {
  id: number;
  name: string;
  address: string;
  birthday: string;
  marital_status: string;
}

interface ClientItemProps {
  client: Client;
}

const ClientItem: React.FC<ClientItemProps> = ({ client }) => {
  const formatedDate = dateFormater(client.birthday);
  return (
    <View>
      <View style={styles.container}>
        <View>
          <Text style={styles.label}>Nome:</Text>
          <Text style={styles.output}>{client.name}</Text>
        </View>
        <View>
          <Text style={styles.label}>Endereço:</Text>
          <Text style={styles.output}>{client.address}</Text>
        </View>
        <View>
          <Text style={styles.label}>Data de nascimento:</Text>
          <Text style={styles.output}>{formatedDate}</Text>
        </View>
        <View>
          <Text style={styles.label}>Estado Civil:</Text>
          <Text style={[styles.output, styles.lastItem]}>
            {client.marital_status}
          </Text>
        </View>
      </View>
      <ButtonsBar />
    </View>
  );
};

export default ClientItem;
