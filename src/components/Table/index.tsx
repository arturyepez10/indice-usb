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
            </TableBody>
          </MUITable>
        </TableContainer>
      </Stack>
    </Container>
  );
}