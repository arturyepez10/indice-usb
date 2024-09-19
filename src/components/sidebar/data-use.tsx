
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import FileDownloadIcon from '@mui/icons-material/FileDownload';
import FileUploadIcon from '@mui/icons-material/FileUpload';

import { useFileParser } from '../../use/file-parser';

export const DataUse = () => {
  const { exportJSON } = useFileParser();

  return (
    <Grid container spacing={2} style={{ marginTop: "4em" }}>
      <Grid item xs={12}>
        <Typography variant="body1" color="text.secondary">
          Uso de Datos
        </Typography>
      </Grid>
      <Grid item container xs={12}>
        <Grid item container justifyContent="center" xs={12} md={6}>
          <Button
            variant="text"
            startIcon={<FileDownloadIcon />}
            onClick={exportJSON}
          >
            Exportar
          </Button>
        </Grid>
        <Grid item container justifyContent="center" xs={12} md={6}>
          <Button
            variant="text"
            startIcon={<FileUploadIcon />}
          >
            Importar
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DataUse;