import Box from "@mui/material/Box"
import ToggleColorMode from "./ToggleColorMode"
import Typography from "@mui/material/Typography"

export const Header = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: { sm: 'space-between', md: 'center' },
        alignItems: 'center',
        width: '100%',
        maxWidth: { sm: '100%', md: 600 },
      }}
    >
      {/* Mobile view: Toggle color mode */}
      <Box
        sx={{
          display: { sm: 'flex', md: 'none' },
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <ToggleColorMode />
      </Box>

      {/* Main Title */}
      <Typography variant="h4" minWidth="fit-content">Informe Academico</Typography>
    </Box>
  )
}

export default Header;
