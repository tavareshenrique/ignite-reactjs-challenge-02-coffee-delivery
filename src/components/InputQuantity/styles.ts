import styled from "styled-components";

export const InputQuantityContainer = styled.div`
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
