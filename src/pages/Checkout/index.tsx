import {
  CardContainer,
  CheckoutContainer,
  CoffeeCardContainer,
  LeftSection,
  RightSection,
  Title,
} from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer>
      <RightSection>
        <Title>Complete seu pedido</Title>

        <CardContainer>
          <h1>ola</h1>
        </CardContainer>
      </RightSection>

      <LeftSection>
        <Title>Cafés selecionados</Title>

        <CoffeeCardContainer>
          <h1>Ola</h1>
        </CoffeeCardContainer>
      </LeftSection>
    </CheckoutContainer>
  );
}
