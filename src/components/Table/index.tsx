
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import MUITable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { Container } from '../container';
import { TableTitle } from './title';
import { AcademicPeriod } from '@arturyepez10/indice-usb-node';

interface TableProps {
  period: AcademicPeriod;
}

export default function Table({ period }: TableProps) {
  const { name, year, courses } = period;

  return (
    <Container>
      <Stack spacing={1} width="100%">
        <Grid container>
          <TableTitle name={name} year={year} />
        </Grid>
        <Divider />

        <TableContainer>
          <MUITable>
            <TableHead>
              <TableRow>
                <TableCell>Código</TableCell>
                <TableCell>Nombre</TableCell>
                <TableCell align="center">Creditos</TableCell>
                <TableCell align="center">Nota</TableCell>
                <TableCell>Observaciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {courses.map((row) => (
                <TableRow key={row.code}>
                  <TableCell component="th" scope="row">
                    {row.code}
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell align="center">{row.credits}</TableCell>
                  <TableCell align="center">{row.grade}</TableCell>
                  <TableCell>
                    {
                      (row.removed && 'Retirada') ||
                      (!row.has_effect && 'Sin Efecto') ||
                      ""
                    }
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </MUITable>
        </TableContainer>
      </Stack>
    </Container>
  );
}