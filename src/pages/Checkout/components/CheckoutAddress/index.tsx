import { forwardRef, useCallback, useEffect, useState } from "react";

import { useFormContext, Controller } from "react-hook-form";

import axios from "axios";

import useDebounce from "../../../../utils/useDebounce";

import { TextInput } from "../../../../components/TextInput";

import { TFormData } from "../..";

import { AddressContainer } from "./styles";

const CheckoutAddress = forwardRef<HTMLInputElement>((_, ref) => {
  const { control, watch, setValue } = useFormContext<TFormData>();

  const [disabledStreet, setDisabledStreet] = useState(false);
  const [disabledNeighborhood, setDisabledNeighborhood] = useState(false);
  const [disabledCity, setDisabledCity] = useState(false);
  const [disabledUf, setDisabledUf] = useState(false);

  const [allFieldIsDisabled, setAllFieldIsDisabled] = useState(false);

  const cep = useDebounce(watch("cep"), 500);

  const toggleFields = useCallback((isEnabled: boolean) => {
    setDisabledStreet(isEnabled);
    setDisabledNeighborhood(isEnabled);
    setDisabledCity(isEnabled);
    setDisabledUf(isEnabled);

    setAllFieldIsDisabled(isEnabled);
  }, []);

  useEffect(() => {
    async function getAddress() {
      if (cep) {
        const { data } = await axios.get(
          `https://viacep.com.br/ws/${cep}/json/`
        );

        if (data.erro) {
          return;
        }

        setValue("rua", data.logradouro);
        setValue("bairro", data.bairro);
        setValue("cidade", data.localidade);
        setValue("uf", data.uf);

        toggleFields(true);
      }
    }

    getAddress();
  }, [cep, setValue, toggleFields]);

  useEffect(() => {
    if (!cep) {
      toggleFields(false);
    }
  }, [cep, toggleFields]);

  return (
    <AddressContainer>
      <Controller
        name="cep"
        defaultValue=""
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <TextInput.Root withoutMarginTop>
            <TextInput.Input placeholder="CEP" {...field} />
          </TextInput.Root>
        )}
      />

      <Controller
        name="rua"
        defaultValue=""
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <TextInput.Root fullWidth disabled={allFieldIsDisabled}>
            <TextInput.Input
              placeholder="RUA"
              disabled={disabledStreet}
              {...field}
            />
          </TextInput.Root>
        )}
      />

      <TextInput.InputGroup>
        <Controller
          name="numero"
          defaultValue=""
          control={control}
          rules={{ required: true, pattern: /^[0-9]+$/ }}
          render={({ field }) => (
            <TextInput.Root>
              <TextInput.Input placeholder="NÚMERO" {...field} />
            </TextInput.Root>
          )}
        />

        <Controller
          name="complemento"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <TextInput.Root fullWidth optional>
              <TextInput.Input placeholder="COMPLEMENTO" {...field} />
            </TextInput.Root>
          )}
        />
      </TextInput.InputGroup>

      <TextInput.InputGroup>
        <Controller
          name="bairro"
          defaultValue=""
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextInput.Root disabled={allFieldIsDisabled}>
              <TextInput.Input
                placeholder="BAIRRO"
                disabled={disabledNeighborhood}
                {...field}
              />
            </TextInput.Root>
          )}
        />

        <Controller
          name="cidade"
          defaultValue=""
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextInput.Root fullWidth disabled={allFieldIsDisabled}>
              <TextInput.Input
                placeholder="CIDADE"
                disabled={disabledCity}
                {...field}
              />
            </TextInput.Root>
          )}
        />

        <Controller
          name="uf"
          defaultValue=""
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextInput.Root disabled={allFieldIsDisabled}>
              <TextInput.Input
                placeholder="UF"
                disabled={disabledUf}
                {...field}
              />
            </TextInput.Root>
          )}
        />
      </TextInput.InputGroup>
    </AddressContainer>
  );
});

CheckoutAddress.displayName = "CheckoutAddress";

export { CheckoutAddress };
