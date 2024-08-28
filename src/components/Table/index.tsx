
import { useEffect, useState } from 'react';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import MUITable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { AcademicPeriod, Course } from '@arturyepez10/indice-usb-node';

import { Container } from '../container';
import { TableTitle } from './title';
import { AcademicPeriodData } from '../../store/academics';

interface TableProps {
  period: AcademicPeriodData;
}

export default function Table({ period: academicPeriod }: TableProps) {
  const [period, setPeriod] = useState(new AcademicPeriod());
  const { name, year, courses } = period;
  
  useEffect(() => {
    const initPeriod = new AcademicPeriod(
      academicPeriod.name,
      academicPeriod.year ?? undefined
    );

    academicPeriod.courses.forEach((course) => {
      initPeriod.add_course(
        new Course(
          course.code,
          course.name,
          course.credits!, // Value will always be defined (because of data validation)
          course.grade ?? "R",
          course.removed,
          course.has_effect
        )
      )
    });

    setPeriod(initPeriod);
  }, [academicPeriod]);

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