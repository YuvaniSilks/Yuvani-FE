import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#8B0000',
      light: '#B22222',
      dark: '#5C0000',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#D4AF37',
      light: '#E6C556',
      dark: '#B8860B',
      contrastText: '#000000',
    },
    background: {
      default: '#FFFAF0',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1A1A1A',
      secondary: '#4A4A4A',
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h1: {
      fontFamily: "'Cormorant Garamond', serif",
      fontWeight: 600,
      fontSize: '3.5rem',
      lineHeight: 1.2,
    },
    h2: {
      fontFamily: "'Cormorant Garamond', serif",
      fontWeight: 600,
      fontSize: '2.5rem',
      lineHeight: 1.3,
    },
    h3: {
      fontFamily: "'Cormorant Garamond', serif",
      fontWeight: 500,
      fontSize: '2rem',
      lineHeight: 1.4,
    },
    h4: {
      fontFamily: "'Cormorant Garamond', serif",
      fontWeight: 500,
      fontSize: '1.5rem',
    },
    h5: {
      fontFamily: "'Cormorant Garamond', serif",
      fontWeight: 500,
      fontSize: '1.25rem',
    },
    h6: {
      fontFamily: "'Cormorant Garamond', serif",
      fontWeight: 500,
      fontSize: '1rem',
    },
    body1: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 400,
      fontSize: '1rem',
    },
    body2: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 300,
      fontSize: '0.875rem',
    },
    button: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 500,
      textTransform: 'none',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          padding: '12px 32px',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(139, 0, 0, 0.3)',
          },
        },
        outlined: {
          borderWidth: 2,
          '&:hover': {
            borderWidth: 2,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        },
      },
    },
  },
})

export default theme
