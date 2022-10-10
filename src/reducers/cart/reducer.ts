import { ActionTypes } from "./actions";

import { addCoffeeInCartMethod } from "./methods";

export type CoffeeType = {
  id: number;
  name: string;
  description: string;
  label: string[];
  price: number;
  image: string;
  quantity: number;
};

export interface ICoffeeState {
  coffeeList: CoffeeType[];
}

export interface IActionType {
  type: ActionTypes;
  payload?: {
    newCoffee: CoffeeType;
    quantity: number;
  };
}

export function coffeeReducer(state: ICoffeeState, action: IActionType) {
  switch (action.type) {
    case ActionTypes.ADD_COFFEE:
      return addCoffeeInCartMethod(state, action);

    default:
      return state;
  }
}
