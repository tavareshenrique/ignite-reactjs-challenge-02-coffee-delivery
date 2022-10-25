import { MapPinLine, CurrencyDollar } from "phosphor-react";

import { useForm, FormProvider } from "react-hook-form";

import { CheckoutAddress } from "./CheckoutAddress";
import CheckoutCardHeader from "./CheckoutCardHeader";

import {
  CardContainer,
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
          <CheckoutCardHeader
            title="Endereço de entrega"
            subtitle="Informe seu endereço para que possamos entregar seu pedido"
            icon={{
              component: <MapPinLine size={24} />,
              color: "yellow",
            }}
          />

          <FormProvider {...methods}>
            <CheckoutAddress />
          </FormProvider>
        </CardContainer>

        <CardContainer>
          <CheckoutCardHeader
            title="Pagamento"
            subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
            icon={{
              component: <CurrencyDollar size={24} />,
              color: "purple",
            }}
          />
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
