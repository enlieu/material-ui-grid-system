import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  // shadows: ['none'],
  // VVVV BUTTON OVERRIDES VVVV
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
    MuiButton: {
      disableElevation: true,
    },
  },
  overrides: {
    MuiButton: {
      root: {
        // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 4,
        color: 'white',
        height: 48,
        // padding: '0 30px',
        // marginRight: 32,
      },
    },
  },
  /// ^^^ BUTTON OVERRIDES ^^^
  typography: {
    h1: {
      color: '#60a262',
    },
    h2: {
      color: '#60a262',
    },
    h3: {
      fontWeight: 400,
    },
    h6: {
      fontWeight: 500,
    },
    subtitle1: {
      color: '#60a262',
      fontWeight: 500,
    },
    // CAPS BUTTON OFF
    button: {
      textTransform: 'none',
    },
  },
  palette: {
    primary: { main: '#3f51b5' },
    secondary: { main: '#f50057' },
    default: { main: '#000' },
    background: {
      paper: '#FEEAE6',
      default: '#fff',
    },
  },
});
