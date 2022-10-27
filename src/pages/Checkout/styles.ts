import styled from "styled-components";

export const CheckoutContainer = styled.form`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`;

export const RightSection = styled.section`
  flex: 2;
`;

export const LeftSection = styled.section`
  flex: 1;
`;

export const Title = styled.h2`
  font-family: "Baloo 2", cursive;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 130%;

  color: ${({ theme }) => theme["base-subtitle"]};
`;

export const CardContainer = styled.div`
  background-color: ${({ theme }) => theme["base-card"]};
  border-radius: 6px;

  width: 800px;
  height: auto;

  padding: 40px;
  margin-top: 16px;
`;

export const CoffeeCardContainer = styled.div`
  width: 448px;
  height: auto;

  padding: 40px;
  margin-top: 16px;

  background-color: ${(props) => props.theme["base-card"]};

  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;
`;

export const PaymentSelectContent = styled.div`
  margin-top: 32px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  button + button {
    margin-left: 12px;
  }
`;
