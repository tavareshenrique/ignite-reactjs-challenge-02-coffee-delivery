import { createContext, ReactNode, useReducer } from "react";

import { CoffeeType, coffeeReducer } from "../reducers/cart/reducer";

import { addCoffeeAction } from "../reducers/cart/actions";

interface IAddNewCoffee {
  coffeeData: CoffeeType;
  quantity: number;
}

interface ICoffeesContextType {
  coffeeList: CoffeeType[];
  coffeeQuantity: number;
  addNewCoffee: ({ coffeeData, quantity }: IAddNewCoffee) => void;
}

interface ICoffeesContextProviderProps {
  children: ReactNode;
}

export const CoffeeContext = createContext({} as ICoffeesContextType);

export const COFFEES_STATE_STORAGE_KEY =
  "@coffee-delivery:coffess-cart-state-1.0.0";

export function CoffeesContextProvider({
  children,
}: ICoffeesContextProviderProps) {
  const [coffeesState, dispatch] = useReducer(
    coffeeReducer,
    { coffeeList: [] },
    (state) => {
      const storedStateAsJSON = localStorage.getItem(COFFEES_STATE_STORAGE_KEY);

      if (storedStateAsJSON) {
        const storedState = JSON.parse(storedStateAsJSON);

        return storedState;
      }

      return state;
    }
  );

  const { coffeeList } = coffeesState;

  function addNewCoffee({ coffeeData, quantity }: IAddNewCoffee) {
    dispatch(
      addCoffeeAction({
        newCoffee: coffeeData,
        quantity,
      })
    );

    // localStorage.setItem(
    //   COFFEES_STATE_STORAGE_KEY,
    //   JSON.stringify(coffeesState)
    // );
  }

  const coffeeQuantity = coffeeList ? coffeeList.length : 0;

  return (
    <CoffeeContext.Provider
      value={{
        coffeeList,
        coffeeQuantity,
        addNewCoffee,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
}
