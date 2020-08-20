import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Animated,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import api from "../../services/api";
import AuthContext from "../../contexts/auth";
import logoImg from "../../assets/images/logo.png";
import styles from "./styles";

const Signin: React.FC = () => {
  const { signIn } = useContext(AuthContext);
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 95 }));
  const [opacity] = useState(new Animated.Value(0));
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  function handleSignIn() {
    signIn(name, password);
  }

  useEffect(() => {
    Animated.parallel([
      Animated.spring(offset.y, {
        useNativeDriver: true,
        toValue: 0,
        speed: 4,
        bounciness: 20,
      }),
      Animated.timing(opacity, {
        useNativeDriver: true,
        toValue: 1,
        duration: 800,
      }),
    ]).start();
  }, []);
  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Image source={logoImg} />
      </View>
      <Animated.View
        style={[
          styles.container,
          {
            opacity: opacity,
            transform: [{ translateY: offset.y }],
          },
        ]}
      >
        <TextInput
          style={styles.input}
          placeholder="Nome"
          autoCorrect={false}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          autoCorrect={false}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity style={styles.btnSubmit} onPress={handleSignIn}>
          <Text style={styles.submitText}>Acessar</Text>
        </TouchableOpacity>
      </Animated.View>
    </KeyboardAvoidingView>
  );
};

export default Signin;
