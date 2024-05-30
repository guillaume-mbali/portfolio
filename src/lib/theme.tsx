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

const fonts = {
  heading: "Lato, sans-serif",
  body: "Lato, sans-serif",
};

const theme = extendTheme({ config, styles, fonts });

export default theme;
