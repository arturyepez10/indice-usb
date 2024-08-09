import { Dispatch } from "react";
import { Grid, Box } from '@mui/material';

import Info from '../checkout-template/Info';
import ToggleColorMode from "./ToggleColorMode";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../utils/store";
import { setMode } from "../utils/store/settings";

export const Sidebar = (props: {
  activeStep: number;
  setActiveStep: Dispatch<number>;
}) => {
  const { activeStep } = props;
  const mode = useSelector((state: RootState) => state.settings.mode);
  const dispatch = useDispatch();

  const toggleColorMode = () => {
    dispatch(setMode(mode === 'dark' ? 'light' : 'dark'));
  };

  return (
    <Grid
      item
      xs={12}
      sm={5}
      lg={4}
      sx={{
        display: { xs: 'none', md: 'flex' },
        flexDirection: 'column',
        backgroundColor: 'background.paper',
        borderRight: { sm: 'none', md: '1px solid' },
        borderColor: { sm: 'none', md: 'divider' },
        alignItems: 'start',
        pt: 4,
        px: 10,
        gap: 4,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'start',
        }}
      >
        <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          width: '100%',
          maxWidth: 500,
        }}
      >
        <Info totalPrice={activeStep >= 2 ? '$144.97' : '$134.98'} />
      </Box>
    </Grid>
  )
}