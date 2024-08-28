
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { useReduxStore } from '../use/redux-store';
import Header from './header';
import { TableList } from "./table-list";
import { EmptyTable } from './empty';

export const MainContent = () => {
  const {
    state: {
      academics
    }
  } = useReduxStore();

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
        alignItems: 'center',
        pt: { xs: 2, sm: 4 },
        px: { xs: 2, sm: 10 },
        gap: { xs: 4, md: 2 },
      }}
    >
      <Header />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          width: '100%',
          maxWidth: { sm: '100%', md: 700 },
          gap: { xs: 5, md: 'none' },
        }}
      >
        {
          !academics.periods.length
            ? <EmptyTable />
            : <TableList />
        }
      </Box>
    </Grid>
  )
}