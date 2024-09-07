import { useState } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';

import Info from './info';
import FormDialog from '../form-dialog';

export const MobileSidebar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (state: boolean) => () => {
    setOpen(state);
  };

  const DrawerList = (
    <Box sx={{ width: 'auto', px: 3, pb: 3, pt: 8 }} role="presentation">
      <IconButton
        onClick={toggleDrawer(false)}
        sx={{ position: 'absolute', right: 8, top: 8 }}
      >
        <CloseIcon />
      </IconButton>
      <Info />
    </Box>
  );

  return (
    <Card
      sx={{
        display: { xs: 'flex', md: 'none' },
        width: '100%',
        flexDirection: 'column',
        maxWidth: '100%',
        backgroundColor: { xs: 'transparent', sm: 'background.default' },
        alignItems: 'center',
        mt: { xs: 2, sm: 4 },
        mb: { xs: 0, sm: 4 },
        mx: { xs: 2, sm: 10 },
        gap: { xs: 4, md: 2 },
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-around',
          ':last-child': { pb: 2 },
        }}
      >
        <div>
          <FormDialog />
        </div>
        <div>
          <Button
            variant="text"
            endIcon={<ExpandMoreRoundedIcon />}
            onClick={toggleDrawer(true)}
          >
            Ver detalles
          </Button>
          <Drawer open={open} anchor="top" onClose={toggleDrawer(false)}>
            {DrawerList}
          </Drawer>
        </div>
      </CardContent>
    </Card>
  )
}

export default MobileSidebar;
