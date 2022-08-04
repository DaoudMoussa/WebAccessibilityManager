import { ThemeProvider } from '@mui/material/styles';
import { DecoratorFn, Parameters } from '@storybook/react';
import theme from '@utils/MuiTheme';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../lib/store';

export const parameters: Parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators: DecoratorFn[] = [
  (Story) => (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Story />
        </Provider>
      </ThemeProvider>
    </React.StrictMode>
  ),
];
