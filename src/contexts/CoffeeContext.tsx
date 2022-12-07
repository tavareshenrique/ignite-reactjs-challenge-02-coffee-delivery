import { createContext, ReactNode, useMemo, useReducer, useState } from "react";

import { COFFEES_UF_STORAGE_KEY } from "../hooks/useLocation";

import { TCoffeeType, coffeeReducer } from "../reducers/cart/reducer";

import {
  addCoffeeAction,
  removeAllCoffeesAction,
  removeCoffeeAction,
} from "../reducers/cart/actions";

import deliveryPriceByStateJSON from "../data/delivery-price-by-state.json";

import { TAddress } from "../pages/Checkout";
import { TSelectPayment } from "../components/PaymentSelect";

type TPaymentName = "Cartão de Crédito" | "Cartão de Débito" | "Dinheiro";

interface IAddNewCoffee {
  coffeeData: TCoffeeType;
  quantity: number;
}

interface IRemoveCoffee {
  coffeeId: number;
}

interface ICoffeesContextProviderProps {
  children: ReactNode;
}

interface ICheckoutData {
  address: TAddress;
  paymentMethod: TPaymentName;
  coffees: TCoffeeType[];
}

interface IHandleCheckout {
  address: TAddress;
  paymentMethod: TSelectPayment;
}

interface ICoffeesContextType {
  coffeeList: TCoffeeType[];
  coffeeQuantity: number;
  subtotal: string;
  deliveryPrice: string;
  totalPrice: string;
  checkoutData: ICheckoutData | null;
  handleCheckout: ({ address, paymentMethod }: IHandleCheckout) => void;
  addNewCoffee: ({ coffeeData, quantity }: IAddNewCoffee) => void;
  removeCoffee: ({ coffeeId }: IRemoveCoffee) => void;
}

export const CoffeeContext = createContext({} as ICoffeesContextType);

export const COFFEES_STATE_STORAGE_KEY =
  "@coffee-delivery:coffess-cart-state-1.0.0";

export function CoffeesContextProvider({
  children,
}: ICoffeesContextProviderProps) {
  const [checkoutData, setCheckoutData] = useState<ICheckoutData | null>(null);

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

  const coffeeQuantity = coffeeList ? coffeeList.length : 0;

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
        deliveryPriceByStateJSON[UF as keyof typeof deliveryPriceByStateJSON];

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

  function handleCheckout({ address, paymentMethod }: IHandleCheckout) {
    let payment: TPaymentName;

    switch (paymentMethod) {
      case "credit":
        payment = "Cartão de Crédito" as TPaymentName;
        break;
      case "debit":
        payment = "Cartão de Débito" as TPaymentName;
        break;
      default:
        payment = "Dinheiro" as TPaymentName;
        break;
    }

    setCheckoutData({ address, paymentMethod: payment, coffees: coffeeList });

    dispatch(removeAllCoffeesAction());
  }

  return (
    <CoffeeContext.Provider
      value={{
        coffeeList,
        coffeeQuantity,
        subtotal: subtotalFormatted,
        deliveryPrice: deliveryPriceFormatted,
        totalPrice: totalPriceFormatted,
        checkoutData,
        handleCheckout,
        addNewCoffee,
        removeCoffee,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
}
