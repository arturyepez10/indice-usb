import { AcademicPeriod } from '@arturyepez10/indice-usb-node';

import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import MUITable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableFooter from '@mui/material/TableFooter';
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { Container } from '../container';
import { TableTitle } from './title';

interface TableProps {
  period: AcademicPeriod;
  deleteAction?: () => void;
  editAction?: () => void;
}

export default function Table({
  period,
  deleteAction,
  editAction
}: TableProps) {
  const { name, year, courses } = period;

  const fillerCourses = 5 - courses.length;

  return (
    <Container>
      <Stack spacing={1} width="100%">
        <Grid container>
          <TableTitle name={name} year={year} />
          <Grid item>
            <ButtonGroup style={{ marginBottom: "0.35em" }}>
              <IconButton onClick={editAction}>
                <EditIcon fontSize="small" />
              </IconButton>
              <IconButton onClick={deleteAction}>
                <DeleteIcon fontSize="small" />
              </IconButton>
            </ButtonGroup>
          </Grid>
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
              {fillerCourses > 0 ? (
                Array(fillerCourses).fill(0).map((_, index) => (
                  <TableRow key={index}>
                    <TableCell colSpan={5} />
                  </TableRow>
                  )
                )
              ) : null}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={5} padding="normal">
                  <Divider />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={2} align="center" padding="none">
                  Promedio Período: <strong>{period.period_grade}</strong>
                </TableCell>
                <TableCell colSpan={3} align="center" padding="none">
                  Promedio Acumulado: <strong>{period.accumulated_grade}</strong>
                </TableCell>
              </TableRow>
            </TableFooter>
          </MUITable>
        </TableContainer>
      </Stack>
    </Container>
  );
}