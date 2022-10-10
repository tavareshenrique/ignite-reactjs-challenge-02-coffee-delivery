import { CoffeeType } from "./reducer";

export enum ActionTypes {
  ADD_COFFEE = "ADD_COFFEE",
}

interface IAddCoffeeAction {
  newCoffee: CoffeeType;
  quantity: number;
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
