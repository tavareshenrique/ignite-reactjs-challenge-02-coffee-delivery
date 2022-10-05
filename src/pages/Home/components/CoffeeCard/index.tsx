import { useState } from "react";

import { ShoppingCart, Minus, Plus } from "phosphor-react";

import { Button } from "../../../../components/Button";

import traditionalEspressoImg from "../../../../assets/img/coffee-menu/american-espresso.svg";

import {
  CoffeeBody,
  CoffeeCardContainer,
  CoffeeCardHeader,
  CoffeeDescription,
  CoffeeFooter,
  CoffeeLabelContent,
  CoffeeLabel,
  CoffeeTitle,
  PriceContainer,
  PurchaseContainer,
  QuantityButton,
  QuantityContainer,
  QuantityInput,
} from "./styles";

type OperationType = "add" | "remove";

type CoffeeType = {
  id: number;
  name: string;
  description: string;
  label: string[];
  price: number;
  image: string;
};

interface ICoffeeCardProps {
  coffee: CoffeeType;
}

export function CoffeeCard({ coffee }: ICoffeeCardProps) {
  const [quantity, setQuantity] = useState(1);

  const priceFormatted = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(coffee.price);

  function handleQuantity(type: OperationType) {
    if (type === "remove") {
      if (quantity > 1) {
        setQuantity((oldQuantityState) => oldQuantityState - 1);
      }

      return;
    }

    setQuantity((oldQuantityState) => oldQuantityState + 1);
  }

  return (
    <CoffeeCardContainer>
      <CoffeeCardHeader>
        <img src={coffee.image} alt={coffee.name} />
        <CoffeeLabelContent>
          {coffee.label.map((label) => (
            <CoffeeLabel key={label}>{label}</CoffeeLabel>
          ))}
        </CoffeeLabelContent>
      </CoffeeCardHeader>
      <CoffeeBody>
        <CoffeeTitle>{coffee.name}</CoffeeTitle>
        <CoffeeDescription>{coffee.description}</CoffeeDescription>
      </CoffeeBody>
      <CoffeeFooter>
        <PriceContainer>
          <pre>R$ </pre>
          <span>{priceFormatted}</span>
        </PriceContainer>
        <PurchaseContainer>
          <QuantityContainer>
            <QuantityButton onClick={() => handleQuantity("remove")}>
              <Minus size={14} weight="bold" />
            </QuantityButton>
            <QuantityInput>{quantity}</QuantityInput>
            <QuantityButton onClick={() => handleQuantity("add")}>
              <Plus size={14} weight="bold" />
            </QuantityButton>
          </QuantityContainer>
          <Button
            type="button"
            color="purple-dark"
            className="purchase__button"
          >
            <ShoppingCart size={24} weight="fill" />
          </Button>
        </PurchaseContainer>
      </CoffeeFooter>
    </CoffeeCardContainer>
  );
}
