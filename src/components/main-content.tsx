
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

import Header from './header';
import Box from '@mui/material/Box';

export const MainContent = () => {

  const openDialog = () => {}

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
        <Button
          variant="text"
          startIcon={<AddIcon />}
          onClick={openDialog}
          sx={{
            width: { xs: '100%', sm: 'fit-content' },
          }}
        >
          Agregar Trimestre
        </Button>
      </Box>
    </Grid>
  )
}