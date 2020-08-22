import React, { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";

import ClientItem, { Client } from "../../components/ClientItem";
import styles from "./styles";

import api from "../../services/api";
import PageHeader from "../../components/PageHeader";

const Clients: React.FC = () => {
  const [isMounting, setIsMounting] = useState(true);
  const [clients, setClients] = useState<Client[]>([]);

  async function loadClients() {
    setIsMounting(true);
    const response = await api.get("/clients");
    setClients(response.data.clients);
    setIsMounting(false);
  }

  useEffect(() => {
    loadClients();
  }, []);

  return (
    <>
      <PageHeader title="Clientes" />
      <View style={styles.container}>
        {isMounting ? (
          <ActivityIndicator size="large" color="#023E8A" />
        ) : (
          <FlatList
            data={clients}
            keyExtractor={(item) => `${item.id}`}
            renderItem={({ item: client }) => (
              <ClientItem client={client} loadClients={loadClients} />
            )}
          />
        )}
      </View>
    </>
  );
};

export default Clients;
