import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { CoffeesContextProvider } from "./contexts/CoffeeContext";

import { Router } from "./Router";

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeesContextProvider>
          <Router />
        </CoffeesContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  );
}
