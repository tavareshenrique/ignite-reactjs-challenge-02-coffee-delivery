import styled, { css } from "styled-components";

type TInputShared = {
  fullWidth?: boolean;
};

export interface ITextInputRootContainerStyledProps extends TInputShared {
  withoutMarginTop?: boolean;
  disabled?: boolean;
}

interface ITextInputInputContainerStyledProps extends TInputShared {
  disabled?: boolean;
}

export const TextInputRootContainer = styled.div<ITextInputRootContainerStyledProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  height: 42px;

  background-color: ${({ theme }) => theme.white};

  border: 1px solid ${({ theme }) => theme["base-button"]};
  border-radius: 4px;

  padding: 0 12px;
  margin-top: ${({ withoutMarginTop }) => (withoutMarginTop ? "0" : "24px")};

  :focus-within {
    border: 1px solid ${({ theme }) => theme["yellow-dark"]};
  }

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${({ theme }) => theme["base-input"]};
    `}
`;

export const TextInputInputContainer = styled.input<ITextInputInputContainerStyledProps>`
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  height: 35px;

  border: 0;

  background-color: ${({ theme }) => theme.white};

  color: ${({ theme }) => theme["base-text"]};

  ${({ disabled }) => disabled && "cursor: not-allowed;"}

  &::placeholder {
    color: ${({ theme }) => theme["base-label"]};
  }

  &:disabled {
    background-color: ${({ theme }) => theme["base-input"]};
  }
`;

export const OptionalContainer = styled.span`
  font-size: 0.75rem;
  font-style: italic;
  line-height: 130%;

  color: ${({ theme }) => theme["base-label"]};

  margin-left: 4px;
`;

export const TextInputGroupContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  div + div {
    margin-left: 12px;
  }

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    div + div {
      margin-left: 0;
    }
  }
`;
