import React, { useEffect, useState, useContext } from "react";
import { View, Text, FlatList } from "react-native";

import ClientItem, { Client, ClientInfo } from "../../components/ClientItem";
import AuthContext from "../../contexts/auth";
import styles from "./styles";

import api from "../../services/api";

const Clients: React.FC = () => {
  const { signed } = useContext(AuthContext);
  const [clients, setClients] = useState<Client[]>([]);
  const [clientsInfo, setClientsInfo] = useState<ClientInfo[]>([]);

  useEffect(() => {
    async function loadClients() {
      const response = await api.get("/clients");
      setClients(response.data.clients);
      setClientsInfo(response.data.clientsInfo);
    }
    loadClients();
  }, [signed]);

  return (
    <View style={styles.container}>
      <Text>Clients</Text>

      <FlatList
        data={clients}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item: client }) => (
          <ClientItem client={client} clientsInfo={clientsInfo} />
        )}
      />
    </View>
  );
};

export default Clients;
