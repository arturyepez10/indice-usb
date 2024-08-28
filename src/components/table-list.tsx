import Box from '@mui/material/Box';

import { useReduxStore } from '../use/redux-store';
import Table from './Table';

export const TableList = () => {
  const {
    state: {
      academics
    }
  } = useReduxStore();

  const deleteItem = (index: number) => {
    console.log("deleting item with index -> ", index);
  }

  const editItem = (index: number) => {
    console.log("editing item with index -> ", index);
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