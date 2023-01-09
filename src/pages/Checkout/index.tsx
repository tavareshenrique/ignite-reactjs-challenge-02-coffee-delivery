import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useForm, FormProvider } from "react-hook-form";

import { MapPinLine, CurrencyDollar } from "phosphor-react";

import { useCoffee } from "../../hooks/useCoffee";

import { PaymentSelect, TSelectPayment } from "../../components/PaymentSelect";

import {
  CheckoutAddress,
  CheckoutCardHeader,
  CheckoutEmptyList,
  CheckoutDetails,
} from "./components";

import {
  CardContainer,
  CheckoutContainer,
  CoffeeCardContainer,
  LeftSection,
  RightSection,
  PaymentSelectContent,
  Title,
} from "./styles";

export type TAddress = {
  cep: string;
  rua: string;
  numero: string;
  complemento?: string;
  bairro: string;
  cidade: string;
  uf: string;
};

export type TFormData = TAddress;

export function Checkout() {
  const navigate = useNavigate();

  const { coffeeList, handleCheckout } = useCoffee();

  const [selectedPayment, setSelectedPayment] = useState<TSelectPayment | null>(
    null
  );

  const coffeeListIsEmpty = coffeeList && coffeeList.length > 0;

  const methods = useForm<TFormData>();

  const { handleSubmit } = methods;

  function handleSelectPayment(paymentType: TSelectPayment) {
    setSelectedPayment(paymentType);
  }

  function validateAddress(data: TAddress) {
    console.log("entrou");
    const errors: Partial<TAddress> = {};

    if (!data.cep) {
      errors.cep = "CEP obrigatório";
    }

    if (!data.rua) {
      errors.rua = "Rua obrigatória";
    }

    if (!data.numero) {
      errors.numero = "Número obrigatório";
    }

    if (!data.bairro) {
      errors.bairro = "Bairro obrigatório";
    }

    if (!data.cidade) {
      errors.cidade = "Cidade obrigatória";
    }

    if (!data.uf) {
      errors.uf = "UF obrigatório";
    }

    return errors;
  }

  function onSubmit(data: TAddress) {
    console.log("entrou 1");

    const errors = validateAddress(data);

    if (Object.keys(errors).length > 0) {
      alert("Preencha todos os campos do endereço");

      return;
    }

    if (!selectedPayment) {
      alert("Selecione uma forma de pagamento");

      return;
    }

    handleCheckout({
      address: data,
      paymentMethod: selectedPayment,
    });

    navigate("/success");
  }

  const creditSelected = selectedPayment === "credit";
  const debitSelected = selectedPayment === "debit";
  const moneySelected = selectedPayment === "money";

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

          <PaymentSelectContent>
            <PaymentSelect
              type="credit"
              onSelect={handleSelectPayment}
              isSelected={creditSelected}
            />
            <PaymentSelect
              type="debit"
              onSelect={handleSelectPayment}
              isSelected={debitSelected}
            />
            <PaymentSelect
              type="money"
              onSelect={handleSelectPayment}
              isSelected={moneySelected}
            />
          </PaymentSelectContent>
        </CardContainer>
      </RightSection>

      <LeftSection>
        <Title>Cafés selecionados</Title>

        <CoffeeCardContainer>
          {coffeeListIsEmpty ? <CheckoutDetails /> : <CheckoutEmptyList />}
        </CoffeeCardContainer>
      </LeftSection>
    </CheckoutContainer>
  );
}
