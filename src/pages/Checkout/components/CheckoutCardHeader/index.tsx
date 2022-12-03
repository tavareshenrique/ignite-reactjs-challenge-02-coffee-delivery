import { ReactNode } from "react";

import {
  CardHeaderContainer,
  CardHeaderTextContent,
  CardSubtitle,
  CardTitle,
  TIconsColor,
} from "./styles";

type TIcon = {
  component: ReactNode;
  color: TIconsColor;
};

interface ICheckoutCardHeaderProps {
  icon: TIcon;
  title: string;
  subtitle: string;
}

export function CheckoutCardHeader({
  title,
  subtitle,
  icon,
}: ICheckoutCardHeaderProps) {
  const { color = "yellow", component: iconComponent } = icon;

  return (
    <CardHeaderContainer color={color}>
      {iconComponent}
      <CardHeaderTextContent>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>
      </CardHeaderTextContent>
    </CardHeaderContainer>
  );
}
