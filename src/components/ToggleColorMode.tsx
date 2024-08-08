import { PaletteMode } from '@mui/material';
import Button from '@mui/material/Button';

import ModeNightRoundedIcon from '@mui/icons-material/ModeNightRounded';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';

interface ToggleColorModeProps {
  mode: PaletteMode;
  toggleColorMode: () => void;
}

function ToggleColorMode({ mode, toggleColorMode }: ToggleColorModeProps) {
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