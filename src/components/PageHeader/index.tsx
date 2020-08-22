import React, { ReactNode, useContext } from "react";
import { View, Image, Text } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

import { SimpleLineIcons } from "@expo/vector-icons";
import authContext from "../../contexts/auth";
import logoImg from "../../assets/images/tinyLogo.png";

import styles from "./styles";

interface PageHeaderProps {
  title: string;
  headerRight?: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  headerRight,
  children,
}) => {
  const { signOut } = useContext(authContext);

  function handleSignOut() {
    signOut();
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={handleSignOut}>
          <SimpleLineIcons name="arrow-left-circle" size={32} color="#C2E812" />
        </BorderlessButton>

        <Image source={logoImg} resizeMode="contain" />
      </View>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {headerRight}
      </View>
      <View style={styles.buttonBar}>
        <BorderlessButton onPress={() => {}}>
          <SimpleLineIcons name="plus" size={32} color="#C2E812" />
        </BorderlessButton>
        <BorderlessButton onPress={() => {}}>
          <SimpleLineIcons name="magnifier" size={32} color="#C2E812" />
        </BorderlessButton>
      </View>

      {children}
    </View>
  );
};

export default PageHeader;
