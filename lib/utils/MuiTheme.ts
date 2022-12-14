import { createTheme } from '@mui/material/styles';
import variables from '@styles/variables.module.scss';

export const lightPalette = {
  primary: {
    main: variables['color-blue'],
  },
  secondary: {
    main: variables['color-white'],
  },
  error: {
    main: variables['color-red'],
  },
  warning: {
    main: variables['color-yellow'],
  },
  info: {
    main: variables['color-pink'],
  },
};

// console.log(lightPalette);
// console.log(variables);

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
    },
  },
});

export default theme;
