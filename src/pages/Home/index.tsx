import coffeeDeliveryImg from "../../assets/img/coffee.svg";

import {
  Banner,
  BannerDescription,
  BannerLeft,
  BannerRight,
  BannerTitle,
  HomeContainer,
} from "./styles";

export function Home() {
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
          </div>
        </BannerRight>
        <BannerLeft>
          <img
            src={coffeeDeliveryImg}
            alt="Um copo de Café escrito Coffee Delivery"
          />
        </BannerLeft>
      </Banner>
    </HomeContainer>
  );
}
