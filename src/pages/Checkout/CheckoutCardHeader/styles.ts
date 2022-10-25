import styled from "styled-components";

const ICONS_COLOR = {
  yellow: "yellow-dark",
  purple: "purple",
} as const;

export type TIconsColor = keyof typeof ICONS_COLOR;

interface ICardHeaderContainerStyledProps {
  color: TIconsColor;
}

export const CardHeaderContainer = styled.div<ICardHeaderContainerStyledProps>`
  display: flex;
  flex-direction: row;
  align-items: center;

  svg {
    margin-bottom: 16px;

    color: ${({ theme, color }) => theme[ICONS_COLOR[color]]};
  }
`;

export const CardHeaderTextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  margin-left: 8px;
`;

export const CardTitle = styled.h3`
  font-weight: 400;
  font-size: 1rem;
  line-height: 130%;

  color: ${({ theme }) => theme["base-subtitle"]};
`;

export const CardSubtitle = styled.h4`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 130%;

  color: ${({ theme }) => theme["base-text"]};
`;
