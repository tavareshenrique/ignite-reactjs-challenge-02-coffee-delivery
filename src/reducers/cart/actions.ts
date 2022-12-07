import { TCoffeeType } from "./reducer";

export enum ActionTypes {
  ADD_COFFEE = "ADD_COFFEE",
  REMOVE_COFFEE = "REMOVE_COFFEE",
  REMOVE_ALL_COFFEES = "REMOVE_ALL_COFFEES",
}

interface IAddCoffeeAction {
  newCoffee: TCoffeeType;
  quantity: number;
}

interface IRemoveCoffeeAction {
  coffeeId: number;
}

export function addCoffeeAction({ newCoffee, quantity }: IAddCoffeeAction) {
  return {
    type: ActionTypes.ADD_COFFEE,
    payload: {
      newCoffee,
      quantity,
    },
  };
}

export function removeCoffeeAction({ coffeeId }: IRemoveCoffeeAction) {
  return {
    type: ActionTypes.REMOVE_COFFEE,
    payload: {
      coffeeId,
    },
  };
}

export function removeAllCoffeesAction() {
  return {
    type: ActionTypes.REMOVE_ALL_COFFEES,
    payload: {},
  };
}
