import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

interface TableTitleProps {
  name?: string;
  year?: number;
}

export const TableTitle = ({ name, year }: TableTitleProps) => (
  <Grid container item xs={10} alignItems="center">
    <Grid item xs={9}>
      <Typography variant="h6" gutterBottom paddingLeft={2}>
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