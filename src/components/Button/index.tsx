import { ButtonHTMLAttributes, ReactNode } from "react";

import { ColorType } from "../../styles/themes/colors";

import { ButtonContainer } from "./styles";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  color?: ColorType;
}

export function Button({ children, color = "purple", ...rest }: IButtonProps) {
  return (
    <ButtonContainer color={color} {...rest}>
      {children}
    </ButtonContainer>
  );
}
