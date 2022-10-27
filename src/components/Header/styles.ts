import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 2rem;

  > button {
    all: unset;

    cursor: pointer;
  }

  @media only screen and (max-width: 768px) {
    padding: 0 32px;

    margin-bottom: 0;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  button + button {
    margin-left: 20px;
  }

  .header__map-pin_icon {
    color: ${(props) => props.theme.purple};
  }

  .header__shopping-cart_icon {
    color: ${(props) => props.theme["yellow-dark"]};
  }

  .cart__button {
    position: relative;
  }
`;

export const CoffeQuantity = styled.div`
  position: absolute;
  top: -8px;
  right: -8px;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 20px;
  width: 20px;
  border-radius: 50%;

  padding: 2px;

  background-color: ${(props) => props.theme["yellow-dark"]};

  span {
    font-family: "Roboto", sans-serif;
    font-size: 12px;
    font-weight: 700;
    line-height: 130%;
    color: ${(props) => props.theme.white};
  }
`;
