import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import dateFormater from "../../utils/dateFormater";

export interface Insurance {
  id: number;
  proposal_number: string;
  policy: string;
  validity_start: string;
  validity_end: string;
  installments: string;
  bonus_class: string;
  total_premium: string;
  observations: string;
  insurer: string;
  vehicle_plate: string;
  vehicle_chassis: string;
  deductible_type: string;
  payment_method: string;
  client: string;
}

interface InsuranceBriefProps {
  insurance: Insurance;
  loadInsurances(): void;
}

const InsuranceBrief: React.FC<InsuranceBriefProps> = ({
  insurance,
  loadInsurances,
}) => {
  const [plateExists, setPlateExists] = useState(true);
  const { navigate } = useNavigation();
  const endFormated = dateFormater(insurance.validity_end);

  if (insurance.vehicle_plate.length <= 0) setPlateExists(false);

  function handleDetailsBTN() {
    navigate("InsurancesDetail", { insurance, loadInsurances });
  }
  return (
    <View>
      <View style={styles.container}>
        <View>
          <Text style={styles.label}>Cliente:</Text>
          <Text style={styles.output}>{insurance.client}</Text>
        </View>
        {plateExists ? (
          <View>
            <Text style={styles.label}>Placa do veículo:</Text>
            <Text style={styles.output}>{insurance.vehicle_plate}</Text>
          </View>
        ) : (
          <View>
            <Text style={styles.label}>Chassi do veículo:</Text>
            <Text style={styles.output}>{insurance.vehicle_chassis}</Text>
          </View>
        )}
        <View>
          <Text style={styles.label}>Vigência final:</Text>
          <Text style={styles.output}>{endFormated}</Text>
        </View>
      </View>
      <View style={styles.buttonsBar}>
        <View>
          <TouchableOpacity style={styles.buttons} onPress={handleDetailsBTN}>
            <SimpleLineIcons
              style={styles.icon}
              name="options"
              size={20}
              color="#C2E812"
            />
            <Text style={styles.buttonText}>Detalhes</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default InsuranceBrief;
