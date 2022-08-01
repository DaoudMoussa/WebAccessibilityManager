import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@emotion/react'
import theme from '../app/configs/MuiTheme'
import { Provider } from 'react-redux'
import store from '../app/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  )
}

export default MyApp
