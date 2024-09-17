
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import DialogActions from '@mui/material/DialogActions';

import CookieIcon from '@mui/icons-material/Cookie';

import { useReduxStore } from '../use/redux-store';

export const CookiesDialog = () => {
  const {
    state: {
      settings: { cookies }
    },
    updateCookiesSettings,
    forceCookiesModal
  } = useReduxStore();

  const handleClose = (value: boolean) => {
    updateCookiesSettings(value);
    forceCookiesModal(false);
  };

  return (
    <Dialog
      open={cookies.accepted === null || cookies.forceOpen}
      onClose={() => forceCookiesModal(false)}
      PaperProps={{
        style: { backgroundColor: 'white', maxWidth: 500 }
      }}
    >
      <DialogTitle>
        <Grid container alignItems="center">
          <Grid item display="flex" alignItems="center">
            <CookieIcon />
          </Grid>
          <Grid item>
            <Typography variant="h6" style={{ marginLeft: 10 }}>
              Guardar contenido en tu navegador
            </Typography>
          </Grid>
        </Grid>
      </DialogTitle>
      <DialogContent>
        <Typography variant="body1" gutterBottom>
          Para mejorar tu experiencia de uso y permitirte usar la aplicación de una forma más eficiente, ofrecemos
          la opción de guardar el contenido de la aplicación en tu navegador.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Esta información no se comparte con terceros y es almacenada únicamente en tu dispositivo.
        </Typography>

        <Typography variant="body1">
          Puedes desactivar esta funcionalidad en cualquier momento desde la configuración de la aplicación.
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button
          variant="outlined"
          onClick={() => handleClose(false)}
          style={{ borderRadius: 5 }}
        >
          NO UTILIZAR
        </Button>
        <Button
          variant="contained"
          onClick={() => handleClose(true)}
          style={{ borderRadius: 5 }}  
        >
          ACEPTAR USO
        </Button>
      </DialogActions>
    </Dialog>
  )
};

export default CookiesDialog;