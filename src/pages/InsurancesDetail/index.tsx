import React from "react";
import { View } from "react-native";

import styles from "./styles";
import InsuranceItem from "../../components/InsuranceItem";

const InsurancesDetail: React.FC = ({ route }: any) => {
  const { insurance, loadInsurances } = route.params;

  return (
    <View style={styles.container}>
      <InsuranceItem insurance={insurance} loadInsurances={loadInsurances} />
    </View>
  );
};

export default InsurancesDetail;
