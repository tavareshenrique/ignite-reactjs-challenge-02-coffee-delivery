import { Package, Coffee, Timer, ShoppingCart } from "phosphor-react";

import { CoffeeCard } from "./components/CoffeeCard";

import { items } from "./utils/json/items.json";
import { coffes } from "./utils/json/coffees.json";

import coffeeDeliveryImg from "../../assets/img/coffee.svg";

import {
  Banner,
  BannerDescription,
  BannerLeft,
  BannerRight,
  BannerTitle,
  CoffeeSection,
  HomeContainer,
  IconColorType,
  Item,
  ItemsContainer,
  MainSection,
} from "./styles";

export function Home() {
  function createIcon(iconName: string) {
    switch (iconName) {
      case "Package":
        return <Package weight="fill" size={16} />;
      case "Coffee":
        return <Coffee weight="fill" size={16} />;
      case "Timer":
        return <Timer weight="fill" size={16} />;
      default:
        return <ShoppingCart weight="fill" size={16} />;
    }
  }

  return (
    <HomeContainer>
      <Banner>
        <BannerRight>
          <div>
            <BannerTitle>
              Encontre o café perfeito <br />
              para qualquer hora do dia.
            </BannerTitle>
            <BannerDescription>
              Com o Coffee Delivery você recebe seu café onde estiver, a <br />
              qualquer hora
            </BannerDescription>
            <ItemsContainer>
              {items.map((item) => {
                return (
                  <Item key={item.id} iconColor={item.color as IconColorType}>
                    {createIcon(item.text)}
                    <span>{item.text}</span>
                  </Item>
                );
              })}
            </ItemsContainer>
          </div>
        </BannerRight>
        <BannerLeft>
          <img
            src={coffeeDeliveryImg}
            alt="Um copo de Café escrito Coffee Delivery"
          />
        </BannerLeft>
      </Banner>
      <MainSection>
        <h1>Nossos cafés</h1>

        <CoffeeSection>
          {coffes.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </CoffeeSection>
      </MainSection>
    </HomeContainer>
  );
}
