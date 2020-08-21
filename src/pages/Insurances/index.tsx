import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";

import InsuranceItem, {
  Insurance,
  InsurancesInfo,
  Deductible_type,
  Payment_method,
} from "../../components/InsuranceItem";
import { Insurer } from "../../components/InsurerItem";
import { Vehicle } from "../../components/VehicleItem";
import styles from "./styles";

import api from "../../services/api";
import PageHeader from "../../components/PageHeader";

const Insurances: React.FC = () => {
  const [insurances, setInsurances] = useState<Insurance[]>([]);
  const [insurancesInfo, setInsurancesInfo] = useState<InsurancesInfo>(
    {} as InsurancesInfo
  );

  useEffect(() => {
    async function loadInsurances() {
      const response = await api.get("/insurances");
      setInsurancesInfo({
        insurers: response.data.insurancesInfo.insurers as Insurer[],
        vehicles: response.data.insurancesInfo.vehicles as Vehicle[],
        deductible_types: response.data.insurancesInfo
          .deductible_types as Deductible_type[],
        payment_methods: response.data.insurancesInfo
          .payment_methods as Payment_method[],
      });
      setInsurances(response.data.insurances);
    }
    loadInsurances();
  }, []);

  return (
    <>
      <PageHeader title="Seguros" />
      <View style={styles.container}>
        <FlatList
          data={insurances}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item: insurance }) => (
            <InsuranceItem
              insurance={insurance}
              insurancesInfo={insurancesInfo}
            />
          )}
        />
      </View>
    </>
  );
};

export default Insurances;
