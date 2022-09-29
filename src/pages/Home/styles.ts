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

export const MainSection = styled.section`
  display: flex;
  flex-direction: column;

  margin-top: 108px;

  h1 {
    font-family: "Baloo 2", cursive;
    font-size: 2rem;
    font-weight: 800;
    line-height: 130%;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  @media only screen and (max-width: 768px) {
    padding: 0 32px;
  }
`;

export const CoffeeSection = styled.main`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const CoffeeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  margin-top: 54px;

  padding: 20px;

  height: 310px;
  width: 256px;

  background-color: ${(props) => props.theme["base-card"]};

  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;
`;

export const CoffeeCardHeader = styled.head`
  position: relative;
  top: -4em;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* @media only screen and (max-width: 768px) {
    top: 1080px;
  } */
`;

export const CoffeeLabel = styled.span`
  margin-top: 12px;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 0.625rem;
  font-weight: 130%;

  text-transform: uppercase;

  background-color: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};

  padding: 8px;

  border-radius: 50px;
`;

export const CoffeeBody = styled.div`
  position: relative;
  top: -2em;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CoffeeTitle = styled.h2`
  font-family: "Baloo 2", cursive;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 130%;
`;

export const CoffeeDescription = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 130%;

  text-align: center;

  margin-top: 8px;

  color: ${(props) => props.theme["base-label"]};
`;

export const CoffeeFooter = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  pre {
    font-family: "Roboto", sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme["base-text"]};
  }

  span {
    font-family: "Baloo 2", cursive;
    font-size: 1.5rem;
    font-weight: 800;
    line-height: 130%;
    color: ${(props) => props.theme["base-text"]};
  }
`;
export const PurchaseContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  .purchase__button {
    margin-left: 16px;

    svg {
      color: ${(props) => props.theme["base-card"]};
    }
  }
`;

export const QuantityContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme["base-button"]};
  border-radius: 6px;

  width: 72px;
  height: 38px;
`;

export const QuantityInput = styled.span`
  margin: 0 8px;

  color: ${(props) => props.theme["base-title"]};

  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 130%;
`;

export const QuantityButton = styled.button`
  width: 64px;
  height: 38px;

  background-color: ${(props) => props.theme["base-button"]};
  color: ${(props) => props.theme.purple};

  border-radius: 6px;
  border: 0;
`;
