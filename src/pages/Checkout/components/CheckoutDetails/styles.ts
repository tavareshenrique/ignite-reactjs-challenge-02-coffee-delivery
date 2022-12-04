import styled from "styled-components";

export const CheckoutTotalPriceContent = styled.div`
  display: flex;
  flex-direction: column;

  button {
    margin-top: 24px;
    height: 48px;
    font-weight: 700;
    color: ${(props) => props.theme.white};
  }
`;

export const CheckoutValuesContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & + & {
    margin-top: 0.75rem;
  }
`;

export const CheckoutValueTitle = styled.span`
  font-size: 0.875rem;
  line-height: 130%;
  color: ${({ theme }) => theme["base-text"]};
`;

export const CheckoutValuePrice = styled.span`
  font-size: 1rem;
  line-height: 130%;
  color: ${({ theme }) => theme["base-text"]};
`;

export const CheckoutValueTotalTitle = styled.span`
  font-size: 1.25rem;
  line-height: 130%;
  font-weight: 700;
  color: ${({ theme }) => theme["base-subtitle"]};
`;

export const CheckoutValueTotalPrice = styled.span`
  font-size: 1rem;
  line-height: 130%;
  font-weight: 700;
  color: ${({ theme }) => theme["base-subtitle"]};
`;
