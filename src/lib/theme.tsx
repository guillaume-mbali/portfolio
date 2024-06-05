// theme.ts
import { extendTheme, ThemeConfig, StyleFunctionProps } from '@chakra-ui/react';
import "@fontsource/lato";

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      backgroundColor: props.colorMode === 'dark' ? 'rgb(26, 32, 44)' : 'rgb(163, 173, 194)',
    },
  }),
};
const breakpoints = {
  xs: '300px',   // Small Smartphones
  sm: '450px',   // Smartphones
  md: '768px',   // Tablettes
  lg: '1024px',  // Petits écrans de bureau
  xl: '1280px',  // Écrans de bureau normaux (par exemple, 13 pouces)
  '2xl': '1536px', // Grands écrans de bureau (par exemple, 24 pouces)
};

const fonts = {
  heading: "Lato, sans-serif",
  body: "Lato, sans-serif",
};

const theme = extendTheme({ config, styles, fonts, breakpoints });

export default theme;
