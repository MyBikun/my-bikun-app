import { createContext, useState } from "react";

export const AuthContext = createContext(undefined);

export const AuthContextProvider = (props) => {
  const [role, setRole] = useState(null);

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
