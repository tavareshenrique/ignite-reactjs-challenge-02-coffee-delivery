import { MapPinLine } from "phosphor-react";

import { useForm, FormProvider } from "react-hook-form";

import { CheckoutAddress } from "./CheckoutAddress";

import {
  CardContainer,
  CardHeader,
  CardHeaderTextContent,
  CardSubtitle,
  CardTitle,
  CheckoutContainer,
  CoffeeCardContainer,
  LeftSection,
  RightSection,
  Title,
} from "./styles";

export type TFormData = {
  cep: string;
  rua: string;
  numero: string;
  complemento?: string;
  bairro: string;
  cidade: string;
  uf: string;
};

export function Checkout() {
  const methods = useForm<TFormData>();

  const { handleSubmit } = methods;

  function onSubmit(data: any) {
    console.log(data);
  }

  return (
    <CheckoutContainer onSubmit={handleSubmit(onSubmit)}>
      <RightSection>
        <Title>Complete seu pedido</Title>

        <CardContainer>
          <CardHeader>
            <MapPinLine size={24} />
            <CardHeaderTextContent>
              <CardTitle>Endereço de Entrega</CardTitle>
              <CardSubtitle>
                Informe o endereço onde deseja receber seu pedido
              </CardSubtitle>
            </CardHeaderTextContent>
          </CardHeader>

          <FormProvider {...methods}>
            <CheckoutAddress />
          </FormProvider>
        </CardContainer>

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
