import Lottie from "lottie-react";

import smilingCoffeAnimation from "../../../../assets/lottie/smiling-coffe.json";

import { EmptyListContainer } from "./styles";

export function CheckoutEmptyList() {
  return (
    <EmptyListContainer>
      <Lottie animationData={smilingCoffeAnimation} loop={true} />
      <h1>
        Você ainda não adicionou nenhum produto no seu carrinho! <br /> <br />
        <a href="/"> Clique aqui</a> para escolher alguns de nossos deliciosos
        sabores.
      </h1>
    </EmptyListContainer>
  );
}
