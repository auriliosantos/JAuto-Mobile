import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";
import dateFormater from "../../utils/dateFormater";

export interface Client {
  id: number;
  name: string;
  address: string;
  birthday: string;
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

  const formatedDate = dateFormater(client.birthday);
  return (
    <View>
      <View style={styles.container}>
        <View>
          <Text style={styles.label}>Nome:</Text>
          <Text style={styles.output}>{client.name}</Text>
        </View>
        <View>
          <Text style={styles.label}>Endereço: </Text>
          <Text style={styles.output}>{client.address}</Text>
        </View>
        <View>
          <Text style={styles.label}>Data de nascimento:</Text>
          <Text style={styles.output}>{formatedDate}</Text>
        </View>
        <View>
          <Text style={styles.label}>Estado Civil</Text>
          <Text style={[styles.output, styles.lastItem]}>
            {marital_status_name}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ClientItem;
