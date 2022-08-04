import { render, RenderOptions } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React, { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import store from '../store';

// Add in any providers here if necessary:
// (ReduxProvider, ThemeProvider, etc)
const Providers: React.FunctionComponent<PropsWithChildren> = ({
  children,
}) => (
  <Provider store={store}>{children}</Provider>
);

const customRender = (ui: React.ReactElement, options: RenderOptions = {}) =>
  render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from '@testing-library/react';
export * from '@testing-library/user-event';
// override render method
export { customRender as render };
export const user = userEvent.setup();