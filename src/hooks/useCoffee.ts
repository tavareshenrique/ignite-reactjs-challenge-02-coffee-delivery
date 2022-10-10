import { useContext } from "react";
import { CoffeeContext } from "../contexts/CoffeeContext";

export function useCoffee() {
  const context = useContext(CoffeeContext);

  return context;
}
