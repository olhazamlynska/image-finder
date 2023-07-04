import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string;
      white: string;
      primaryText: string;
      secondaryText: string;
      backgroundBody: string;
      accentColor: string;
    };
    space: number[];
    fonts: {
      body: string;
      heading: string;
      monospace: string;
    };
    fontSizes: {
      xs: string;
      s: string;
      m: string;
      l: string;
      xl: string;
    };
    fontWeights: {
      normal: number;
      medium: number;
      bold: number;
    };
    lineHeights: {
      body: number;
      heading: number;
    };
    borders: {
      none: string;
      normal: string;
      bold: string;
    };
    radii: {
      none: string;
      normal: string;
      round: string;
    };
  }
}
