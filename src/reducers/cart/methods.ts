import produce from "immer";

import { IActionType, ICoffeeState } from "./reducer";

export function addCoffeeInCartMethod(
  state: ICoffeeState,
  action: IActionType
) {
  return produce(state, (draft) => {
    if (action.payload) {
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
