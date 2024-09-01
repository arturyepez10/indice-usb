import { Grid, Box } from '@mui/material';

import Info from './info';
import ToggleColorMode from "../ToggleColorMode";
import FormDialog from '../form-dialog';

export const Sidebar = () => {

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
          justifyContent: 'space-between',
          width: '100%'
        }}
      >
        <ToggleColorMode />
        <FormDialog />
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
        <Info />
      </Box>
    </Grid>
  )
}

export default Sidebar;