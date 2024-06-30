import { useState, createContext } from "react";
import jwt_decode from "jwt-decode";
import { userAPI } from "../users/UserAPI";

export interface AuthContextType {
  token: string | null;
  getUser: () => User | null;
  signin: (email: string, password: string) => Promise<boolean>;
  signout: () => void;
}

interface User {
  // Define the user properties based on your JWT payload structure
  exp: number;
  iat: number;
  // Add other properties as per your JWT payload
}

export const authContext = createContext<AuthContextType | undefined>(
  undefined
);

export function useAuthState(): AuthContextType {
  const getToken = (): string | null => {
    return localStorage.getItem("auth_token");
  };

  const [token, setToken] = useState<string | null>(getToken());

  const saveToken = (token: string): void => {
    localStorage.setItem("auth_token", token);
    setToken(token);
  };

  const removeToken = (): void => {
    localStorage.removeItem("auth_token");
    setToken(null);
  };

  const getUser = (): User | null => {
    return token ? jwt_decode<User>(token) : null;
  };

  const signin = async (email: string, password: string): Promise<boolean> => {
    try {
      const user = await userAPI.find(1); //TODO: change this to pass email and password

      //TODO: build up JWT to hold this info as string
      const accessToken = {
        user: user,
        token: "xyzdef",
      };

      saveToken(accessToken);

      return Boolean(user);
    } catch (error) {
      console.error("Error:", error);
      throw new Error("The email or password you have entered is invalid.");
    }
  };

  const signout = (): void => {
    removeToken();
  };

  return {
    token,
    getUser,
    signin,
    signout,
  };
}
