import styled from "styled-components";

export const HomeContainer = styled.main`
  margin-top: 5rem;

  @media only screen and (max-width: 768px) {
    margin-top: 3rem;
  }
`;

export const Banner = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const BannerRight = styled.section`
  @media only screen and (max-width: 768px) {
    padding: 24px;
  }
`;

export const BannerLeft = styled.section`
  @media only screen and (max-width: 768px) {
    img {
      width: 100%;
    }
  }
`;

export const BannerTitle = styled.h1`
  font-family: "Baloo 2", cursive;
  font-size: 3rem;
  font-weight: 800;
  line-height: 130%;

  color: ${(props) => props.theme["base-title"]};

  @media only screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const BannerDescription = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 130%;

  color: ${(props) => props.theme["base-subtitle"]};

  margin-top: 1rem;

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ItemsContainer = styled.ul`
  margin-top: 5rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;

  @media only screen and (max-width: 768px) {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
  }
`;

const ICONS_COLOR = {
  yellowDark: "yellow-dark",
  baseText: "base-text",
  yellow: "yellow",
  purple: "purple",
} as const;

export type IconColorType = keyof typeof ICONS_COLOR;

interface IItemStyleProps {
  iconColor: IconColorType;
}

export const Item = styled.li<IItemStyleProps>`
  list-style: none;

  display: flex;
  flex-direction: row;
  align-items: center;

  svg {
    background: ${(props) => props.theme[ICONS_COLOR[props.iconColor]]};
    color: ${(props) => props.theme.white};

    height: 2rem;
    width: 2rem;
    padding: 8px;
    border-radius: 50%;
  }

  span {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 130%;

    margin-left: 12px;
  }
`;
