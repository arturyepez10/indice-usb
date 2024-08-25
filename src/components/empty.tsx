import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { FormDialog } from './form-dialog';

export const EmptyTable = () => {

  return (
    <Box display="flex" maxWidth="100%" alignContent="center" justifyContent="center" flexDirection="column">
      <Box>
        <Typography variant="h6" align="center" fontWeight={400}>
          No se ha agregado ningún periodo académico al sistema.
        </Typography>
        <Typography variant="h6" align="center" fontWeight={400}>
          Por favor agregue un periodo para continuar.
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center">
        <FormDialog />
      </Box>
    </Box>
  )
};

export default EmptyTable;