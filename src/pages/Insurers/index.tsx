import React, { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";

import InsurerItem, { Insurer } from "../../components/InsurerItem";
import styles from "./styles";

import api from "../../services/api";
import PageHeader from "../../components/PageHeader";

const Insurers: React.FC = () => {
  const [isMounting, setIsMounting] = useState(true);
  const [insurers, setInsurers] = useState<Insurer[]>([]);

  useEffect(() => {
    async function loadInsurers() {
      const response = await api.get("/insurers");
      setInsurers(response.data.insurers);
      setIsMounting(false);
    }
    loadInsurers();
  }, []);

  return (
    <>
      <PageHeader title="Seguradoras" />
      <View style={styles.container}>
        {isMounting ? (
          <ActivityIndicator size="large" color="#023E8A" />
        ) : (
          <FlatList
            data={insurers}
            keyExtractor={(item) => `${item.id}`}
            renderItem={({ item: insurer }) => (
              <InsurerItem insurer={insurer} />
            )}
          />
        )}
      </View>
    </>
  );
};

export default Insurers;
