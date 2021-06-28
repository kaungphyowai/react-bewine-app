import React from "react";
import NavBar from "./components/NavBar";
import Explore from "./components/Explore";
import QuickContact from "./components/QuickContact";
import { Grid, Box, Typography, rgbToHex } from "@material-ui/core";
import AboutUs from "./components/AboutUs";
import HowWeWork from "./components/HowWeWork";
import MeetOurFamilyBusiness from "./components/MeetOurFamilyBusiness";
import JoinNow from "./components/JoinNow";
const App = () => {
  return (
    <>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        <Grid item container>
          <NavBar></NavBar>
        </Grid>
        <Grid item container>
          <Explore />
        </Grid>
        <Grid item container>
          <QuickContact />
        </Grid>
        <Grid item container>
          <AboutUs />
        </Grid>
        <Grid item container>
          <HowWeWork />
        </Grid>
        <Grid item container>
          <MeetOurFamilyBusiness />
        </Grid>
        <Grid item container>
          <JoinNow />
        </Grid>
      </Grid>

      <Box
        style={{
          backgroundColor: "#f2e8df",
          borderTopWidth: "1",
          borderTopStyle: "solid",
          borderTopColor: "#d9d0c8",
        }}
        pt={4}
        pb={4}
      >
        <Grid container xs={12} justify="center">
          <Typography>
            © 2021 BeWine3 - Betheme. All Rights Reserved. Muffin group
          </Typography>
        </Grid>
      </Box>
    </>
  );
};

export default App;
