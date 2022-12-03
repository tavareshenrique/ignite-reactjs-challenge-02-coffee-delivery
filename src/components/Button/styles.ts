import styled from "styled-components";
import { darken } from "polished";

import { ColorType } from "../../styles/themes/colors";

interface IButtonContainerStyleProps {
  color: ColorType;
}

export const ButtonContainer = styled.button<IButtonContainerStyleProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  height: 40px;
  padding: 10px;

  background: ${(props) => props.theme[props.color]};
  border: 0;
  border-radius: 6px;

  &:hover {
    background: ${(props) => darken(0.1, props.theme[props.color])};
  }
`;
