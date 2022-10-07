import { CoffeeCard } from "./components/CoffeeCard";
import { Information } from "./components/Information";

import { coffes } from "./utils/json/coffees.json";

import coffeeDeliveryImg from "../../assets/img/coffee.svg";

import {
  Banner,
  BannerLeft,
  BannerRight,
  CoffeeSection,
  HomeContainer,
  MainSection,
} from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Banner>
        <BannerRight>
          <Information />
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
