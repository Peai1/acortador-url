import { Navigate } from "react-router-dom";
import { useAuth } from "./contextApi/AuthContext";

export default function PrivateRoute( { children, publicPage} : { 
  children: React.ReactNode, publicPage: boolean }) {
    const { token } = useAuth();

    if (publicPage) {
      return token ? <Navigate to="/dashboard" /> : children;
    }

    return !token ? <Navigate to="/login" /> : children;
  }