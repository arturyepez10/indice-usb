import { useState } from 'react'

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, PaletteMode } from '@mui/material';

import Checkout from './checkout-template/Checkout';
import getTheme from './utils/theme';

function App() {
  const [mode, setMode] = useState<PaletteMode>('light');
  const customTheme = createTheme(getTheme(mode));

  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Checkout mode={mode} setMode={setMode} />
    </ThemeProvider>
  )
}

export default App
