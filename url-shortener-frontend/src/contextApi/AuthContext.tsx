import { createContext, ReactNode, useContext, useState } from "react";

type AuthContextType = {
  token: any;
  setToken: React.Dispatch<any>;
};

type Props = { children: ReactNode };

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: Props) => {
  const getToken = localStorage.getItem("JWT_TOKEN")
    ? JSON.parse(localStorage.getItem("JWT_TOKEN") as string)
    : null;

  const [token, setToken] = useState(getToken);

  const sendData = {
    token,
    setToken,
  };

  return (
    <AuthContext.Provider value={sendData}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used inside an AuthProvider');
  }
  return context;
};
