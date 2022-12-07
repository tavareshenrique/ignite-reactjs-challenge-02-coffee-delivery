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

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 185px;
    height: 100px;

    svg {
      width: 24px;
      height: 24px;
    }

    span {
      font-size: 0.5rem;
      line-height: 160%;

      margin: 8px 0 0 0;
    }
  }
`;
