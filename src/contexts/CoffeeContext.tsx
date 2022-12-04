import { createContext, ReactNode, useMemo, useReducer } from "react";

import { COFFEES_UF_STORAGE_KEY } from "../hooks/useLocation";

import { TCoffeeType, coffeeReducer } from "../reducers/cart/reducer";

import { addCoffeeAction, removeCoffeeAction } from "../reducers/cart/actions";

import DeliveryPriceByStateJSON from "../data/delivery-price-by-state.json";

interface IAddNewCoffee {
  coffeeData: TCoffeeType;
  quantity: number;
}

interface IRemoveCoffee {
  coffeeId: number;
}

interface ICoffeesContextType {
  coffeeList: TCoffeeType[];
  coffeeQuantity: number;
  subtotal: string;
  deliveryPrice: string;
  totalPrice: string;
  addNewCoffee: ({ coffeeData, quantity }: IAddNewCoffee) => void;
  removeCoffee: ({ coffeeId }: IRemoveCoffee) => void;
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

  const subtotal = useMemo(() => {
    return coffeeList.reduce((acc, coffee) => {
      const coffeePrice = coffee.price * coffee.quantity;

      return acc + coffeePrice;
    }, 0);
  }, [coffeeList]);

  const subtotalFormatted = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(subtotal);

  const deliveryPrice = useMemo(() => {
    const UF = localStorage.getItem(COFFEES_UF_STORAGE_KEY);

    if (UF) {
      const deliveryValue =
        DeliveryPriceByStateJSON[UF as keyof typeof DeliveryPriceByStateJSON];

      return deliveryValue;
    }

    return 0;
  }, []);

  const deliveryPriceFormatted = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(deliveryPrice);

  const totalPrice = useMemo(() => {
    return subtotal + deliveryPrice;
  }, [deliveryPrice, subtotal]);

  const totalPriceFormatted = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(totalPrice);

  function addNewCoffee({ coffeeData, quantity }: IAddNewCoffee) {
    dispatch(
      addCoffeeAction({
        newCoffee: coffeeData,
        quantity,
      })
    );

    localStorage.setItem(
      COFFEES_STATE_STORAGE_KEY,
      JSON.stringify(coffeesState)
    );
  }

  function removeCoffee({ coffeeId }: IRemoveCoffee) {
    dispatch(
      removeCoffeeAction({
        coffeeId,
      })
    );
  }

  const coffeeQuantity = coffeeList ? coffeeList.length : 0;

  return (
    <CoffeeContext.Provider
      value={{
        coffeeList,
        coffeeQuantity,
        subtotal: subtotalFormatted,
        deliveryPrice: deliveryPriceFormatted,
        totalPrice: totalPriceFormatted,
        addNewCoffee,
        removeCoffee,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
}
