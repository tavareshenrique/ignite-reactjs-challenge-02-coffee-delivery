import { defaultTheme } from "./default";

export type ColorType = keyof typeof defaultTheme;

export const colors = {
  ...defaultTheme,
};
