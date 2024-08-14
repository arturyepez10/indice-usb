
import Box from '@mui/material/Box';

interface ContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        p: 3,
        height: { xs: 300, sm: 350, md: 375 },
        width: '100%',
        borderRadius: '20px',
        border: '1px solid ',
        borderColor: 'divider',
        backgroundColor: 'background.paper',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.05)',
      }}
    >
      {children}
    </Box>
  )
}