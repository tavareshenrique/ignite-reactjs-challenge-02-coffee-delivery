import { useState } from "react";

import {
  Package,
  Coffee,
  Timer,
  ShoppingCart,
  Minus,
  Plus,
} from "phosphor-react";

import { Button } from "../../components/Button";

import { items } from "./utils/json/items.json";

import coffeeDeliveryImg from "../../assets/img/coffee.svg";
import traditionalEspressoImg from "../../assets/img/coffee-menu/traditional-espresso.svg";

import {
  Banner,
  BannerDescription,
  BannerLeft,
  BannerRight,
  BannerTitle,
  CoffeeBody,
  CoffeeCard,
  CoffeeCardHeader,
  CoffeeDescription,
  CoffeeFooter,
  CoffeeLabel,
  CoffeeSection,
  CoffeeTitle,
  HomeContainer,
  IconColorType,
  Item,
  ItemsContainer,
  MainSection,
  PriceContainer,
  PurchaseContainer,
  QuantityButton,
  QuantityContainer,
  QuantityInput,
} from "./styles";

type OperationType = "add" | "remove";

export function Home() {
  const [quantity, setQuantity] = useState(1);

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

  function handleQuantity(type: OperationType) {
    if (type === "remove") {
      if (quantity > 1) {
        setQuantity((oldQuantityState) => oldQuantityState - 1);
      }

      return;
    }

    setQuantity((oldQuantityState) => oldQuantityState + 1);
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
          {Array.from({ length: 4 }).map((_, index) => (
            <CoffeeCard key={index}>
              <CoffeeCardHeader>
                <img
                  src={traditionalEspressoImg}
                  alt="Cafézinho da Discordia"
                />
                <CoffeeLabel>tradicional</CoffeeLabel>
              </CoffeeCardHeader>
              <CoffeeBody>
                <CoffeeTitle>Expresso Tradicional</CoffeeTitle>
                <CoffeeDescription>
                  O tradicional café feito com água quente e grãos moídos.
                </CoffeeDescription>
              </CoffeeBody>
              <CoffeeFooter>
                <PriceContainer>
                  <pre>R$ </pre>
                  <span>5,00</span>
                </PriceContainer>
                <PurchaseContainer>
                  <QuantityContainer>
                    <QuantityButton onClick={() => handleQuantity("remove")}>
                      <Minus size={14} weight="bold" />
                    </QuantityButton>
                    <QuantityInput>{quantity}</QuantityInput>
                    <QuantityButton onClick={() => handleQuantity("add")}>
                      <Plus size={14} weight="bold" />
                    </QuantityButton>
                  </QuantityContainer>
                  <Button
                    type="button"
                    color="purple-dark"
                    className="purchase__button"
                  >
                    <ShoppingCart size={24} weight="fill" />
                  </Button>
                </PurchaseContainer>
              </CoffeeFooter>
            </CoffeeCard>
          ))}
        </CoffeeSection>
      </MainSection>
    </HomeContainer>
  );
}
