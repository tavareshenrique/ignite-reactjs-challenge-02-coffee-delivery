import { ReactNode } from "react";

import { IconContainer } from "./styles";

export const ICONS_COLOR = {
  yellowDark: "yellow-dark",
  baseText: "base-text",
  yellow: "yellow",
  purple: "purple",
} as const;

export type TIconColor = keyof typeof ICONS_COLOR;

interface IconProps {
  color: TIconColor;
  icon: ReactNode;
}

export function Icon({ color, icon }: IconProps) {
  return <IconContainer iconColor={color}>{icon}</IconContainer>;
}
