import {
  Children,
  cloneElement,
  forwardRef,
  InputHTMLAttributes,
  isValidElement,
  PropsWithChildren,
  ReactElement,
  ReactNode,
} from "react";
import {
  TextInputRootContainer,
  TextInputInputContainer,
  OptionalContainer,
  ITextInputRootContainerStyledProps,
  TextInputGroupContainer,
} from "./styles";

export interface ITextInputRootProps
  extends ITextInputRootContainerStyledProps {
  children: ReactNode;
  optional?: boolean;
  disabled?: boolean;
}

export interface ITextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean;
}

export interface ITextInputGroupProps {
  children: ReactNode;
}

function TextInputRoot({
  children,
  optional = false,
  fullWidth = false,
  withoutMarginTop = false,
  disabled = false,
}: ITextInputRootProps) {
  return (
    <TextInputRootContainer
      fullWidth={fullWidth}
      withoutMarginTop={withoutMarginTop}
      disabled={disabled}
    >
      {Children.map(children, (child) => {
        const item = child as ReactElement<
          PropsWithChildren<ITextInputInputProps>
        >;

        if (isValidElement(item)) {
          return cloneElement(item, {
            fullWidth,
          });
        }

        return item;
      })}

      {optional && <TextInputOptional />}
    </TextInputRootContainer>
  );
}

TextInputRoot.displayName = "TextInput.Root";

function TextInputOptional() {
  return <OptionalContainer>Opcional</OptionalContainer>;
}

function TextInputGroup({ children }: ITextInputGroupProps) {
  return <TextInputGroupContainer>{children}</TextInputGroupContainer>;
}

TextInputGroup.displayName = "TextInput.Group";

const TextInputInput = forwardRef<HTMLInputElement, ITextInputInputProps>(
  (props, ref) => {
    return <TextInputInputContainer ref={ref} {...props} />;
  }
);

TextInputInput.displayName = "TextInput.Input";

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  InputGroup: TextInputGroup,
};
