/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from '@mui/material/Button';
import MUIDialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import AddIcon from '@mui/icons-material/Add';

interface DialogProps {
  buttonIcon?: any;
  buttonTitle?: string;
  modalTitle?: string;
  openModal?: boolean;
  toggleModalOpen: (open: boolean) => void;
  children?: React.ReactNode;
}

export const Dialog = (
  {
    children,
    buttonIcon: ButtonIcon = AddIcon,
    buttonTitle,
    modalTitle,
    openModal,
    toggleModalOpen
  }: DialogProps
) => {
  
  return (
    <>
      <Button
        variant="text"
        startIcon={<ButtonIcon />}
        onClick={() => toggleModalOpen(true)}
        sx={{
          width: { xs: '100%', sm: 'fit-content' },
        }}
      >
        {buttonTitle}
      </Button>
      <MUIDialog
        open={!!openModal}
        onClose={() => toggleModalOpen(false)}
        PaperProps={{
          style: { backgroundColor: 'white', maxWidth: 750 }
        }}
      >
        <DialogTitle>{modalTitle}</DialogTitle>
        <DialogContent>
          {children}
        </DialogContent>
      </MUIDialog>
    </>
  )
}

export default Dialog;