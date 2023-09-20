const theme = {
  // Colors
  colors: {
    primary: {
      light: '#7df2fa',  // Light shade of primary
      main: '#43ecf5',  // Primary color
      dark: '#0ca1d8',  // Darker shade of primary
    },
    secondary: {
      light: '#f59495',  // Light shade of the accent color
      main: '#f56867',  // Accent color
      dark: '#c43e45',  // Darker shade of the accent color
    },
    tertiary: {
      light: '#b3f6fa',
      main: '#80f3f9',
      dark: '#00c0c6',
    },
    white: '#FFFFFF',
    black: '#000000',
    grey: {
      light: '#F5F5F5',
      main: '#666666',
      dark: '#333333',
    },
    error: '#D32F2F',
    warning: '#FBC02D',
    info: '#1976D2',
    success: '#388E3C',
  },

  // Typography
  typography: {
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#212121',
    },
    subHeader: {
      fontSize: 20,
      fontWeight: '500',
      color: '#212121',
    },
    body: {
      fontSize: 16,
      fontWeight: '400',
      color: '#757575',
    },
    caption: {
      fontSize: 12,
      fontWeight: '300',
      color: '#9E9E9E',
    },
  },

  // Spacing
  spacing: {
    xsmall: 4,
    small: 8,
    medium: 16,
    large: 32,
    xlarge: 64,
  },

  // Border Radius
  borderRadius: {
    small: 4,
    medium: 8,
    large: 16,
  },
};

export default theme;
