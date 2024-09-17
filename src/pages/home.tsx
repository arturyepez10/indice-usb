import Grid from "@mui/material/Grid";
import { Sidebar } from "../components/sidebar";
import { MainContent } from "../components/main-content";
import { CookiesDialog } from "../components/cookies-dialog";

export const Home = () => {

  return (
    <>
      <CookiesDialog />
      <Grid container sx={{ height: { xs: '100%', sm: '100dvh' } }}>
        <Sidebar />
        <MainContent />
      </Grid>
    </>
  )
}

export default Home;