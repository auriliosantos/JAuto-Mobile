import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Animated,
  Keyboard,
} from "react-native";

import AuthContext from "../../contexts/auth";
import logoImg from "../../assets/images/logo.png";
import styles from "./styles";

const Signin: React.FC = () => {
  const { signIn } = useContext(AuthContext);
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 95 }));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({ x: 216, y: 258 }));
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  function handleSignIn() {
    signIn(name, password);
  }

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      keyboardDidShow
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      keyboardDidHide
    );

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
  function keyboardDidShow() {
    Animated.parallel([
      Animated.timing(logo.x, {
        useNativeDriver: false,
        toValue: 108,
        duration: 200,
      }),
      Animated.timing(logo.y, {
        useNativeDriver: false,
        toValue: 129,
        duration: 200,
      }),
    ]).start();
  }
  function keyboardDidHide() {
    Animated.parallel([
      Animated.timing(logo.x, {
        useNativeDriver: false,
        toValue: 219,
        duration: 200,
      }),
      Animated.timing(logo.y, {
        useNativeDriver: false,
        toValue: 258,
        duration: 200,
      }),
    ]).start();
  }

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Animated.Image
          style={{ width: logo.x, height: logo.y }}
          source={logoImg}
        />
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
