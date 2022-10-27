import styled from "styled-components";

export const PaymentSelectContainer = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  width: 185px;
  height: 50px;

  background-color: ${({ theme }) => theme["base-button"]};
  border: 0;
  border-radius: 6px;

  padding: 16px;

  span {
    font-size: 0.75rem;
    line-height: 160%;

    margin-left: 16px;
  }

  svg {
    color: ${({ theme }) => theme.purple};
  }

  &:hover {
    background-color: ${({ theme }) => theme["base-hover"]};
  }

  &.selected {
    background-color: ${({ theme }) => theme["purple-light"]};
    border: 1px solid ${({ theme }) => theme.purple};
  }
`;
