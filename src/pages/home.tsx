import { useState } from "react";

import Grid from "@mui/material/Grid";
import { Sidebar } from "../components/sidebar";
import { MainContent } from "../components/main-content";


export const Home = () => {
  const [activeStep] = useState(0);

  return (
    <Grid container sx={{ height: { xs: '100%', sm: '100dvh' } }}>
      <Sidebar
        activeStep={activeStep}
      />
      <MainContent />
    </Grid>
  )
}

export default Home;