import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    black: '#000',
    white: '#fff',
    primaryText: '#010101',
    secondaryText: '#757575',
    backgroundBody: '#eef4f0',
    accentColor: '#4bbed7',
  },
  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: {
    xs: '12px',
    s: '14px',
    m: '16px',
    l: '18px',
    xl: '32px',
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  borders: {
    none: 'none',
    normal: '1px solid #757575',
    bold: '2px solid #757575',
  },
  radii: {
    none: '0',
    normal: '4px',
    round: '50%',
  },
};
