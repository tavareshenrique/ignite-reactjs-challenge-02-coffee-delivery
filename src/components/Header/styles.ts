import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 2rem;

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
`;
