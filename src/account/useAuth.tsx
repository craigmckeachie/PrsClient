import { useContext } from "react";
import { AuthContextType, authContext } from "./useAuthState";

export const useAuth = (): AuthContextType => {
  const context = useContext(authContext);
  if (!context) {
    throw new Error("useAuth must be used within a ProvideAuth");
  }
  return context;
};
