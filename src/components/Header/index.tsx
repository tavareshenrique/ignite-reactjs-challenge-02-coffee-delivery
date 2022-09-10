import { MapPin, ShoppingCart } from "phosphor-react";

import { Button } from "../../components/Button";

import { HeaderContainer, HeaderContent } from "./styles";

import coffeeDeliveryLogo from "../../../public/logo.svg";
import { useEffect } from "react";

export function Header() {
  return (
    <HeaderContainer>
      <img
        src={coffeeDeliveryLogo}
        alt="Imagem de um copo de café roxo com um simbolo de um foguete e ao lado escrito Coffee Delivery"
        width={84}
        height={40}
      />

      <HeaderContent>
        <Button color="purple-light">
          <MapPin size={22} weight="fill" className="header__map-pin_icon" />
          <span>Três Rios, RJ</span>
        </Button>
        <Button color="yellow-light">
          <ShoppingCart
            size={22}
            weight="fill"
            className="header__shopping-cart_icon"
          />
        </Button>
      </HeaderContent>
    </HeaderContainer>
  );
}
