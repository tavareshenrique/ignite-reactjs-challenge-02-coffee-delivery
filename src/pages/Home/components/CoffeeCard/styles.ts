import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  margin-top: 54px;

  padding: 20px;

  height: 310px;
  width: 288px;

  background-color: ${(props) => props.theme["base-card"]};

  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;
`;

export const CoffeeCardHeader = styled.header`
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

export const CoffeeLabelContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  span {
    margin-left: 4px;
  }
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

  margin-right: 23px;

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
    margin-left: 8px;

    svg {
      color: ${(props) => props.theme["base-card"]};
    }
  }
`;
