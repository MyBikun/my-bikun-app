import * as SecureStorage from "expo-secure-store";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(undefined);

export const AuthContextProvider = (props) => {
  const [role, setRole] = useState(null);

  const setRoleOnSecureStorage = (role) => {
    setRole(role);
    SecureStorage.setItemAsync("role", role);
  };

  useEffect(() => {
    const getRoleFromSecureStorage = async () => {
      const role = await SecureStorage.getItemAsync("role");
      setRole(role);
    };
    getRoleFromSecureStorage();
  }, []);

  const AuthContextObject = {
    role,
    setRole,
  };

  return (
    <AuthContext.Provider value={AuthContextObject}>
      {props.children}
    </AuthContext.Provider>
  );
};
