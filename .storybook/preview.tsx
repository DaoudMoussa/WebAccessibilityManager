import React from 'react';
import { ThemeProvider } from '@mui/material/styles'
import theme from '../utils/MuiTheme'
import { Provider } from 'react-redux'
import store from '../store';
import { DecoratorFn, Parameters } from '@storybook/react';

export const parameters: Parameters  = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

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
]