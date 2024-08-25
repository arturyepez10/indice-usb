import Box from '@mui/material/Box';

import { useReduxStore } from '../use/redux-store';
import Table from './Table';

export const TableList = () => {
  const {
    state: {
      academics
    }
  } = useReduxStore();

  return (
    <Box maxWidth="100%">
      {academics.periods.map((period, index) => (
        <Table key={index} period={period} />
      ))}
    </Box>
  )
};

export default TableList;