import { render, RenderOptions } from "@testing-library/react";
import React, { PropsWithChildren } from "react";
import { ThemeProvider } from "@emotion/react";
import theme from './MuiTheme'
import { Provider } from 'react-redux'
import store from '../store';


// Add in any providers here if necessary:
// (ReduxProvider, ThemeProvider, etc)
const Providers: React.FunctionComponent<PropsWithChildren> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      {children}
    </Provider>
  </ThemeProvider>
);


const customRender = (ui: React.ReactElement, options: RenderOptions = {}) =>
  render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };