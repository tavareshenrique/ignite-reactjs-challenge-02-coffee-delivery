import styled, { keyframes } from "styled-components";

const fadeOutLeft = keyframes`
  0% {  opacity: 1; transform: translateX(0); }
  100% { opacity: 0.2; transform: translateX(-50px); }
`;

export const CheckoutCoffeeContainer = styled.div`
  display: flex;
  flex-direction: row;

  gap: 1rem;

  padding-bottom: 1.5rem;

  border-bottom: 1px solid ${(props) => props.theme["base-button"]};

  margin-bottom: 1.5rem;

  &.remove-coffee {
    animation: ${fadeOutLeft} 1s linear forwards;
  }
`;

export const CoffeeDetails = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

export const CoffeeInformations = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CoffeeTitle = styled.span`
  font-size: 1rem;
  font-weight: 400;
  line-height: 130%;

  color: ${(props) => props.theme["base-subtitle"]};
`;

export const CoffeePrice = styled.span`
  font-size: 1rem;
  font-weight: 700;
  line-height: 130%;

  color: ${(props) => props.theme["base-text"]};
`;

export const CoffeeActionsContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 50%;

  margin-top: 0.5rem;

  > button {
    margin-left: 1rem;

    font-size: 0.75rem;
    font-weight: 400;
    line-height: 160%;
    color: ${(props) => props.theme["base-text"]};

    svg {
      color: ${(props) => props.theme.purple};
      margin-right: 0.25rem;
    }
  }
`;
