import { Button } from "../../../../components/Button";
import { useCoffee } from "../../../../hooks/useCoffee";

import { CheckoutCoffeeCard } from "../CheckoutCoffeeCard";

import {
  CheckoutTotalPriceContent,
  CheckoutValuePrice,
  CheckoutValuesContent,
  CheckoutValueTitle,
  CheckoutValueTotalPrice,
  CheckoutValueTotalTitle,
} from "./styles";

export function CheckoutDetails() {
  const { coffeeList, subtotal, deliveryPrice, totalPrice } = useCoffee();

  return (
    <>
      {coffeeList.map((coffee) => (
        <CheckoutCoffeeCard key={coffee.id} coffee={coffee} />
      ))}

      <CheckoutTotalPriceContent>
        <CheckoutValuesContent>
          <CheckoutValueTitle>Total de itens</CheckoutValueTitle>
          <CheckoutValuePrice>{subtotal}</CheckoutValuePrice>
        </CheckoutValuesContent>

        <CheckoutValuesContent>
          <CheckoutValueTitle>Entrega</CheckoutValueTitle>
          <CheckoutValuePrice>{deliveryPrice}</CheckoutValuePrice>
        </CheckoutValuesContent>

        <CheckoutValuesContent>
          <CheckoutValueTotalTitle>Total</CheckoutValueTotalTitle>
          <CheckoutValueTotalPrice>{totalPrice}</CheckoutValueTotalPrice>
        </CheckoutValuesContent>

        <Button type="submit" color="yellow">
          CONFIRMAR PEDIDO
        </Button>
      </CheckoutTotalPriceContent>
    </>
  );
}
