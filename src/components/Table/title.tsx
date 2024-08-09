import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

interface TableTitleProps {
  name?: string;
  year?: number;
}

export const TableTitle = ({ name, year }: TableTitleProps) => (
  <Grid container>
    <Grid item xs={9}>
      <Typography variant="h6" gutterBottom>
        {name}
      </Typography>
    </Grid>
    <Grid item xs={3}>
      <Typography variant="h6" gutterBottom align="center">
        {year}
      </Typography>
    </Grid>
  </Grid>
);