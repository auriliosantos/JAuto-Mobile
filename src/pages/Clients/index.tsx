import React, { useEffect, useState, useContext } from "react";
import { View, FlatList } from "react-native";

import ClientItem, { Client, ClientInfo } from "../../components/ClientItem";
import styles from "./styles";

import api from "../../services/api";
import PageHeader from "../../components/PageHeader";

const Clients: React.FC = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [clientsInfo, setClientsInfo] = useState<ClientInfo[]>([]);

  useEffect(() => {
    async function loadClients() {
      const response = await api.get("/clients");
      setClientsInfo(response.data.clientsInfo);
      setClients(response.data.clients);
    }
    loadClients();
  }, []);

  return (
    <>
      <PageHeader title="Clientes" />
      <View style={styles.container}>
        <FlatList
          data={clients}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item: client }) => (
            <ClientItem client={client} clientsInfo={clientsInfo} />
          )}
        />
      </View>
    </>
  );
};

export default Clients;
