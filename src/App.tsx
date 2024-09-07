import { useSelector } from 'react-redux';
import { RootState } from './store';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import getTheme from './utils/theme';
import Home from './pages/home';

function App() {
  const mode = useSelector((state: RootState) => state.settings.mode);
  const customTheme = createTheme(getTheme(mode));

  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  )
}

export default App
