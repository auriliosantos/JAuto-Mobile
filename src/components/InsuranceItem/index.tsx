import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";
import { Insurer } from "../InsurerItem";
import { Vehicle } from "../VehicleItem";
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
  insurer_id: number;
  vehicle_id: number;
  deductible_type_id: number;
  payment_method_id: number;
}

export interface Deductible_type {
  id: number;
  name: string;
}

export interface Payment_method {
  id: number;
  name: string;
}

export interface InsurancesInfo {
  insurers: Insurer[];
  vehicles: Vehicle[];
  deductible_types: Deductible_type[];
  payment_methods: Payment_method[];
}

interface InsuranceItemProps {
  insurance: Insurance;
  insurancesInfo: InsurancesInfo;
}

const InsuranceItem: React.FC<InsuranceItemProps> = ({
  insurance,
  insurancesInfo,
}) => {
  const insurerFind = insurancesInfo.insurers.find(
    (item) => item.id === insurance.insurer_id
  );
  const insurer_name = insurerFind?.name;

  const vehicleFind = insurancesInfo.vehicles.find(
    (item) => item.id === insurance.vehicle_id
  );
  const vehicle_plate = vehicleFind?.plate;

  const deductibleFind = insurancesInfo.deductible_types.find(
    (item) => item.id === insurance.deductible_type_id
  );
  const deductible_name = deductibleFind?.name;

  const paymentFind = insurancesInfo.payment_methods.find(
    (item) => item.id === insurance.payment_method_id
  );
  const payment_name = paymentFind?.name;

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
          <Text style={styles.output}>{insurer_name}</Text>
        </View>
        <View>
          <Text style={styles.label}>Placa do veículo:</Text>
          <Text style={styles.output}>{vehicle_plate}</Text>
        </View>
        <View>
          <Text style={styles.label}>Tipo de franquia:</Text>
          <Text style={styles.output}>{deductible_name}</Text>
        </View>
        <View>
          <Text style={styles.label}>Método de pagamento:</Text>
          <Text style={styles.output}>{payment_name}</Text>
        </View>
      </View>
    </View>
  );
};

export default InsuranceItem;
