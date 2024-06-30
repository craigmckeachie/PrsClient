import { ReactNode } from "react";
import { authContext, useAuthState } from "./useAuthState";

interface ProvideAuthProps {
  children: ReactNode;
}

export function ProvideAuth({ children }: ProvideAuthProps) {
  const auth = useAuthState();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
