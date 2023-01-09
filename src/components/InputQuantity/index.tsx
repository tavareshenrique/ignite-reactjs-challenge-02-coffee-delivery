import { useRef, useState } from "react";

import { Minus, Plus } from "phosphor-react";

import {
  InputQuantityContainer,
  QuantityButton,
  QuantityInput,
} from "./styles";

type TOperationType = "add" | "remove";

interface IInputQuantityProps {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
}

export function InputQuantity({
  quantity,
  onQuantityChange,
}: IInputQuantityProps) {
  function handleQuantity(type: TOperationType) {
    if (type === "remove") {
      if (quantity > 1) {
        onQuantityChange(quantity - 1);
      }

      return;
    }

    onQuantityChange(quantity + 1);
  }

  return (
    <InputQuantityContainer>
      <QuantityButton type="button" onClick={() => handleQuantity("remove")}>
        <Minus size={14} weight="bold" />
      </QuantityButton>
      <QuantityInput>{quantity}</QuantityInput>
      <QuantityButton type="button" onClick={() => handleQuantity("add")}>
        <Plus size={14} weight="bold" />
      </QuantityButton>
    </InputQuantityContainer>
  );
}
