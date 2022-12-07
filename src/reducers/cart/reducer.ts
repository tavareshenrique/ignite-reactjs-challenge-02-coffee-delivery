import { ActionTypes } from "./actions";

import {
  addCoffeeInCartMethod,
  removeAllCoffeesMethod,
  removeCoffeeMethod,
} from "./methods";

export type TCoffeeType = {
  id: number;
  name: string;
  description: string;
  label: string[];
  price: number;
  image: string;
  quantity: number;
};

export interface ICoffeeState {
  coffeeList: TCoffeeType[];
}

export interface IActionType {
  type: ActionTypes;
  payload?: {
    coffeeId?: number;
    newCoffee?: TCoffeeType;
    quantity?: number;
  };
}

export function coffeeReducer(state: ICoffeeState, action: IActionType) {
  switch (action.type) {
    case ActionTypes.ADD_COFFEE:
      return addCoffeeInCartMethod(state, action);
    case ActionTypes.REMOVE_COFFEE:
      return removeCoffeeMethod(state, action);
    case ActionTypes.REMOVE_ALL_COFFEES:
      return removeAllCoffeesMethod(state);
    default:
      return state;
  }
}
