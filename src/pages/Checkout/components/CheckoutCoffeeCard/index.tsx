import { useEffect, useMemo, useState } from "react";

import { Trash } from "phosphor-react";

import { useCoffee } from "../../../../hooks/useCoffee";

import { Button } from "../../../../components/Button";
import { InputQuantity } from "../../../../components/InputQuantity";

import {
  CheckoutCoffeeContainer,
  CoffeeDetails,
  CoffeeInformations,
  CoffeeTitle,
  CoffeePrice,
  CoffeeActionsContent,
} from "./styles";
import { TCoffeeType } from "../../../../reducers/cart/reducer";

interface ICheckoutCoffeeCardProps {
  coffee: TCoffeeType;
}

export function CheckoutCoffeeCard({ coffee }: ICheckoutCoffeeCardProps) {
  const { addNewCoffee, removeCoffee } = useCoffee();

  const [quantity, setQuantity] = useState(coffee.quantity);
  const [removeCoffe, setRemoveCoffe] = useState(false);

  const formattedPrice = useMemo(() => {
    const priceQuantity = coffee.price * quantity;

    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(priceQuantity);
  }, [coffee, quantity]);

  useEffect(() => {
    function handleAddNewCoffeeQuantity() {
      addNewCoffee({
        coffeeData: {
          ...coffee,
          quantity,
        },
        quantity,
      });
    }

    handleAddNewCoffeeQuantity();
  }, [addNewCoffee, coffee, quantity]);

  function handleRemoveCoffee() {
    setRemoveCoffe(true);

    const time = setTimeout(() => {
      removeCoffee({
        coffeeId: coffee.id,
      });

      setRemoveCoffe(false);
    }, 1100);

    return () => clearTimeout(time);
  }

  return (
    <CheckoutCoffeeContainer className={removeCoffe ? "remove-coffee" : "ola"}>
      <img src={coffee.image} alt={coffee.name} height={64} width={64} />

      <CoffeeDetails>
        <CoffeeInformations>
          <CoffeeTitle>{coffee.name}</CoffeeTitle>
          <CoffeePrice>{formattedPrice}</CoffeePrice>
        </CoffeeInformations>

        <CoffeeActionsContent>
          <InputQuantity quantity={quantity} onQuantityChange={setQuantity} />

          <Button
            type="button"
            color="base-button"
            onClick={handleRemoveCoffee}
          >
            <Trash size={16} />
            REMOVER
          </Button>
        </CoffeeActionsContent>
      </CoffeeDetails>
    </CheckoutCoffeeContainer>
  );
}
