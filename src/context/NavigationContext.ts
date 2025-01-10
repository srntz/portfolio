import {createContext, useContext} from "react";
import {INavigationContext} from "@/interfaces/INavigationContext";

export const NavigationContext = createContext<INavigationContext | undefined>(undefined);

export function useNavigationContext() {
  const context = useContext(NavigationContext);

  if(!context) {
    throw new Error("Navigation context value is undefined");
  }

  return context;
}
