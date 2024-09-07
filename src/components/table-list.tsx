import Box from '@mui/material/Box';

import { useReduxStore } from '../use/redux-store';
import { useAcademicSummary } from '../use/use-summary';
import Table from './Table';

export const TableList = () => {
  const {
    state: {
      academics
    },
    deleteAcademicPeriod,
    editAcademicPeriod
  } = useReduxStore();

  const { parseAcademicPeriod } = useAcademicSummary();

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
            period={parseAcademicPeriod(period)}
            deleteAction={() => deleteItem(index)}
            editAction={() => editItem(index)}
          />
        </Box>
      ))}
    </Box>
  )
};

export default TableList;