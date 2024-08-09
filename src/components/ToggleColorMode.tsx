import Button from '@mui/material/Button';

import ModeNightRoundedIcon from '@mui/icons-material/ModeNightRounded';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import { useReduxStore } from '../use/redux-store';


function ToggleColorMode() {
  const { state, toggleColorMode } = useReduxStore();
  const { mode } = state.settings;

  return (
    <Button
      onClick={toggleColorMode}
      startIcon={
        mode === 'dark' 
          ? <WbSunnyRoundedIcon fontSize="small" />
          : <ModeNightRoundedIcon fontSize="small" />
      }
      color="primary"
      aria-label="Theme toggle button"
    >
      {mode === 'light' ? 'Light Mode' : 'Dark Mode'}
    </Button>
  );
}

export default ToggleColorMode;