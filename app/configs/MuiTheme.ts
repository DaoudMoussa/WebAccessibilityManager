import { createTheme } from "@mui/system";
import variables from '../../styles/variables.module.scss'

export const lightPalette = {
  primary: {
    main: variables['color-white']
  },
  secondary: {
    main: variables['color-blue']
  },
  error: {
    main: variables['color-red']
  },
  warning: {
    main: variables['color-yellow']
  },
  info: {
    main: variables['color-pink']
  },
};

const theme = createTheme({
  palette: lightPalette,
  breakpoints: {
    keys: ['xs', 'sm', 'md'],
    unit: 'rem',
    values: {
      xs: parseInt(variables['breakpoint-xs']),
      sm: parseInt(variables['breakpoint-sm']),
      md: parseInt(variables['breakpoint-md']),
      lg: 0,
      xl: 0,
    }
  },
})

export default theme;