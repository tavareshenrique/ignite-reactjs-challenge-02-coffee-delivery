import produce from "immer";
import { COFFEES_STATE_STORAGE_KEY } from "../../contexts/CoffeeContext";

import { IActionType, ICoffeeState } from "./reducer";

export function addCoffeeInCartMethod(
  state: ICoffeeState,
  action: IActionType
) {
  return produce(state, (draft) => {
    if (action.payload && action.payload.newCoffee && action.payload.quantity) {
      const { newCoffee, quantity } = action.payload;

      const coffeeIndex = draft.coffeeList.findIndex(
        (coffee) => coffee.id === newCoffee.id
      );

      if (coffeeIndex >= 0) {
        draft.coffeeList[coffeeIndex].quantity = quantity;
      } else {
        draft.coffeeList.push({
          ...newCoffee,
          quantity,
        });
      }
    }
  });
}

export function removeCoffeeMethod(state: ICoffeeState, action: IActionType) {
  return produce(state, (draft) => {
    if (action.payload && action.payload.coffeeId) {
      const { coffeeId } = action.payload;

      const newCoffeeList = draft.coffeeList.filter(
        (coffee) => coffee.id !== coffeeId
      );

      draft.coffeeList = newCoffeeList;

      if (newCoffeeList.length === 0) {
        localStorage.removeItem(COFFEES_STATE_STORAGE_KEY);

        return;
      }

      localStorage.setItem(
        COFFEES_STATE_STORAGE_KEY,
        JSON.stringify(newCoffeeList)
      );
    }
  });
}

export function removeAllCoffeesMethod(state: ICoffeeState) {
  return produce(state, (draft) => {
    draft.coffeeList = [];

    localStorage.removeItem(COFFEES_STATE_STORAGE_KEY);
  });
}
