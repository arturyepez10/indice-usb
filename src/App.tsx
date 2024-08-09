import { useSelector } from 'react-redux';
import { RootState } from './store';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import Checkout from './checkout-template/Checkout';
import getTheme from './utils/theme';

function App() {
  const mode = useSelector((state: RootState) => state.settings.mode);
  const customTheme = createTheme(getTheme(mode));

  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Checkout />
    </ThemeProvider>
  )
}

export default App
