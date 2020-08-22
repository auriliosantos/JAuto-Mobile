import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";
import dateFormater from "../../utils/dateFormater";
import ButtonsBar from "../ButtonsBar";

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

export interface InsuranceItemProps {
  insurance: Insurance;
  loadInsurances(): void;
}

const InsuranceItem: React.FC<InsuranceItemProps> = ({
  insurance,
  loadInsurances,
}) => {
  const startFormated = dateFormater(insurance.validity_start);
  const endFormated = dateFormater(insurance.validity_end);
  return (
    <View>
      <View style={styles.container}>
        <View>
          <Text style={styles.label}>Número da proposta:</Text>
          <Text style={styles.output}>{insurance.proposal_number}</Text>
        </View>
        <View>
          <Text style={styles.label}>Apólice:</Text>
          <Text style={styles.output}>{insurance.policy}</Text>
        </View>
        <View>
          <Text style={styles.label}>Vigência inicial:</Text>
          <Text style={styles.output}>{startFormated}</Text>
        </View>
        <View>
          <Text style={styles.label}>Vigência final:</Text>
          <Text style={styles.output}>{endFormated}</Text>
        </View>
        <View>
          <Text style={styles.label}>Parcelamento:</Text>
          <Text style={styles.output}>{insurance.installments}</Text>
        </View>
        <View>
          <Text style={styles.label}>Classe de bônus:</Text>
          <Text style={styles.output}>{insurance.bonus_class}</Text>
        </View>
        <View>
          <Text style={styles.label}>Prêmio total:</Text>
          <Text style={styles.output}>{insurance.total_premium}</Text>
        </View>
        <View>
          <Text style={styles.label}>Observações:</Text>
          <Text style={styles.output}>{insurance.observations}</Text>
        </View>
        <View>
          <Text style={styles.label}>Seguradora:</Text>
          <Text style={styles.output}>{insurance.insurer}</Text>
        </View>
        <View>
          <Text style={styles.label}>Placa do veículo:</Text>
          <Text style={styles.output}>{insurance.vehicle_plate}</Text>
        </View>
        <View>
          <Text style={styles.label}>Chassi do veículo:</Text>
          <Text style={styles.output}>{insurance.vehicle_chassis}</Text>
        </View>
        <View>
          <Text style={styles.label}>Tipo de franquia:</Text>
          <Text style={styles.output}>{insurance.deductible_type}</Text>
        </View>
        <View>
          <Text style={styles.label}>Método de pagamento:</Text>
          <Text style={styles.output}>{insurance.payment_method}</Text>
        </View>
        <View>
          <Text style={styles.label}>Cliente:</Text>
          <Text style={styles.output}>{insurance.client}</Text>
        </View>
      </View>
      <ButtonsBar
        id={insurance.id}
        entity="Insurances"
        item={insurance}
        loadFunc={loadInsurances}
      />
    </View>
  );
};

export default InsuranceItem;
