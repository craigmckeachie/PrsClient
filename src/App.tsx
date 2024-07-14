import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Outlet } from "react-router-dom";
import { createContext, useContext, useState } from "react";
import { IUser } from "./users/IUser";

export interface UserContextType {
  user: IUser | undefined;
  setUser: React.Dispatch<React.SetStateAction<IUser | undefined>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function useUserContext(): UserContextType {
  const userContext = useContext(UserContext);
  if (userContext === undefined) {
    throw new Error("context not found");
  }
  return userContext;
}

function App() {
  const [user, setUser] = useState<IUser | undefined>(undefined);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Outlet />
    </UserContext.Provider>
  );
}

export default App;
