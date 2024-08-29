import Box from '@mui/material/Box';

import { useReduxStore } from '../use/redux-store';
import Table from './Table';

export const TableList = () => {
  const {
    state: {
      academics
    },
    deleteAcademicPeriod,
    editAcademicPeriod
  } = useReduxStore();

  const deleteItem = (index: number) => {
    deleteAcademicPeriod(index);
  }

  const editItem = (index: number) => {
    editAcademicPeriod(index);
  }

  return (
    <Box maxWidth="100%">
      {academics.periods.map((period, index) => (
        <Box marginY={3} key={index}>
          <Table
            period={period}
            deleteAction={() => deleteItem(index)}
            editAction={() => editItem(index)}
          />
        </Box>
      ))}
    </Box>
  )
};

export default TableList;