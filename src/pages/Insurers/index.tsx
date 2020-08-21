import React, { useEffect, useState, useContext } from "react";
import { View, FlatList } from "react-native";

import InsurerItem, { Insurer } from "../../components/InsurerItem";
import styles from "./styles";

import api from "../../services/api";
import PageHeader from "../../components/PageHeader";

const Insurers: React.FC = () => {
  const [insurers, setInsurers] = useState<Insurer[]>([]);

  useEffect(() => {
    async function loadInsurers() {
      const response = await api.get("/insurers");
      setInsurers(response.data.insurers);
    }
    loadInsurers();
  }, []);

  return (
    <>
      <PageHeader title="Seguradoras" />
      <View style={styles.container}>
        <FlatList
          data={insurers}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item: insurer }) => <InsurerItem insurer={insurer} />}
        />
      </View>
    </>
  );
};

export default Insurers;
