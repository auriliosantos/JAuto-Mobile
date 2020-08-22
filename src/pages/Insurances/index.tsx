import React, { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";

import { Insurance } from "../../components/InsuranceItem";
import styles from "./styles";

import api from "../../services/api";
import PageHeader from "../../components/PageHeader";
import InsuranceBrief from "../../components/InsuranceBrief";

const Insurances: React.FC = () => {
  const [isMounting, setIsMounting] = useState(true);
  const [insurances, setInsurances] = useState<Insurance[]>([]);

  async function loadInsurances() {
    setIsMounting(true);
    const response = await api.get("/insurances");
    setInsurances(response.data.insurances);
    setIsMounting(false);
  }

  useEffect(() => {
    loadInsurances();
  }, []);

  return (
    <>
      <PageHeader title="Seguros" />
      <View style={styles.container}>
        {isMounting ? (
          <ActivityIndicator size="large" color="#023E8A" />
        ) : (
          <FlatList
            data={insurances}
            keyExtractor={(item) => `${item.id}`}
            renderItem={({ item: insurance }) => (
              <InsuranceBrief
                insurance={insurance}
                loadInsurances={loadInsurances}
              />
            )}
          />
        )}
      </View>
    </>
  );
};

export default Insurances;
