import Grid from "@mui/material/Grid";
import { Sidebar } from "../components/sidebar";
import { MainContent } from "../components/main-content";


export const Home = () => {

  return (
    <Grid container sx={{ height: { xs: '100%', sm: '100dvh' } }}>
      <Sidebar />
      <MainContent />
    </Grid>
  )
}

export default Home;