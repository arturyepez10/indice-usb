import { Dispatch } from "react";
import { Grid, Box, Button } from '@mui/material';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

import Info from '../checkout-template/Info';
import { logoStyle } from "../utils/constants";

export const Sidebar = (props: {
  activeStep: number;
  setActiveStep: Dispatch<number>;
}) => {
  const { activeStep } = props;
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
          alignItems: 'end',
          height: 150,
        }}
      >
        <Button
          startIcon={<ArrowBackRoundedIcon />}
          component="a"
          href="/material-ui/getting-started/templates/landing-page/"
          sx={{ ml: '-8px' }}
        >
          Back to
          <img
            src={
              'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e6faf73568658154dae_SitemarkDefault.svg'
            }
            style={logoStyle}
            alt="Sitemark's logo"
          />
        </Button>
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