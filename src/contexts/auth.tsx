import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-community/async-storage";

import api from "../services/api";

interface AuthContextData {
  signed: boolean;
  loading: boolean;
  signIn(name: string, password: string): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [signed, setSigned] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadStorageData() {
      const storagedToken = await AsyncStorage.getItem("@JAuto:token");

      setLoading(false);
      api.defaults.headers["Authorization"] = `Bearer ${storagedToken}`;
    }

    loadStorageData();
  }, []);

  async function signIn(name: string, password: string) {
    try {
      const response = await api.post("/auth/login", {
        name,
        password,
      });

      setSigned(true);

      api.defaults.headers["Authorization"] = `Bearer ${response.data.token}`;

      await AsyncStorage.setItem("@JAuto:token", response.data.token);
    } catch (err) {
      /* Alert.alert("Erro no login", "Nome ou senha incorretos, tente novamente"); */
    }
  }

  async function signOut() {
    setSigned(false);
  }

  return (
    <AuthContext.Provider value={{ signed, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
