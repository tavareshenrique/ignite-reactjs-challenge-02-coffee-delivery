import { Bank, CreditCard, CurrencyDollar } from "phosphor-react";

import { PaymentSelectContainer } from "./styles";

export type TSelectPayment = "credit" | "debit" | "money";

interface IPaymentSelectProps {
  isSelected?: boolean;
  onSelect: (type: TSelectPayment) => void;
  type: TSelectPayment;
}

export function PaymentSelect({
  isSelected,
  type,
  onSelect,
}: IPaymentSelectProps) {
  function handleSelect() {
    onSelect(type);
  }

  function renderSelect() {
    switch (type) {
      case "credit":
        return (
          <>
            <CreditCard size={16} />
            <span>CARTÃO DE CRÉDITO</span>
          </>
        );
      case "debit":
        return (
          <>
            <Bank size={16} />
            <span>CARTÃO DE DÉBITO</span>
          </>
        );
      default:
        return (
          <>
            <CurrencyDollar size={16} />
            <span>DINHEIRO</span>
          </>
        );
    }
  }

  return (
    <PaymentSelectContainer
      type="button"
      onClick={handleSelect}
      className={`${isSelected && "selected"}`}
    >
      {renderSelect()}
    </PaymentSelectContainer>
  );
}
