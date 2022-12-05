import styled from "styled-components";

import { ICONS_COLOR } from ".";

export type IconColorType = keyof typeof ICONS_COLOR;

interface IIconContainerStyleProps {
  iconColor: IconColorType;
}

export const IconContainer = styled.div<IIconContainerStyleProps>`
  background: ${(props) => props.theme[ICONS_COLOR[props.iconColor]]};
  color: ${(props) => props.theme.white};

  height: 2rem;
  width: 2rem;
  padding: 8px;
  border-radius: 50%;
`;
