
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Header from './header';
import { FormDialog } from './form-dialog';

export const MainContent = () => {

  return (
    <Grid
      item
      sm={12}
      md={7}
      lg={8}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '100%',
        width: '100%',
        backgroundColor: { xs: 'transparent', sm: 'background.default' },
        alignItems: 'start',
        pt: { xs: 2, sm: 4 },
        px: { xs: 2, sm: 10 },
        gap: { xs: 4, md: 8 },
      }}
    >
      <Header />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          width: '100%',
          maxWidth: { sm: '100%', md: 600 },
          maxHeight: '720px',
          gap: { xs: 5, md: 'none' },
        }}
      >
        <FormDialog />
      </Box>
    </Grid>
  )
}