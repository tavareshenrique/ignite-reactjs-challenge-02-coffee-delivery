import { useNavigate } from "react-router-dom";

import { MapPin, ShoppingCart } from "phosphor-react";

import { useCoffee } from "../../hooks/useCoffee";

import { Button } from "../../components/Button";

import { CoffeQuantity, HeaderContainer, HeaderContent } from "./styles";

import coffeeDeliveryLogo from "../../assets/img/logo.svg";

export function Header() {
  const { coffeeQuantity } = useCoffee();

  const navigate = useNavigate();

  const handleGoToCheckout = () => {
    navigate("/checkout");
  };

  const handleGoToHome = () => {
    navigate("/");
  };

  return (
    <HeaderContainer>
      <button type="button" onClick={handleGoToHome}>
        <img
          src={coffeeDeliveryLogo}
          alt="Imagem de um copo de café roxo com um simbolo de um foguete e ao lado escrito Coffee Delivery"
          width={84}
          height={40}
        />
      </button>

      <HeaderContent>
        <Button color="purple-light">
          <MapPin size={22} weight="fill" className="header__map-pin_icon" />
          <span>Três Rios, RJ</span>
        </Button>
        <Button
          color="yellow-light"
          className="cart__button"
          onClick={handleGoToCheckout}
        >
          <ShoppingCart
            size={22}
            weight="fill"
            className="header__shopping-cart_icon"
          />
          <CoffeQuantity>
            <span>{coffeeQuantity}</span>
          </CoffeQuantity>
        </Button>
      </HeaderContent>
    </HeaderContainer>
  );
}
