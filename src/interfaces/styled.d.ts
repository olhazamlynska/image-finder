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
      body: 1.5;
      heading: 1.125;
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
