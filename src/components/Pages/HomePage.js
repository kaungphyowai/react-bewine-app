import React from "react";
import { Grid } from "@material-ui/core";
import Explore from "../HomeComponent/Explore";
import QuickContact from "../HomeComponent/QuickContact";
import AboutUs from "../HomeComponent/AboutUs";
import HowWeWork from "../HomeComponent/HowWeWork";
import MeetOurFamilyBusiness from "../HomeComponent/MeetOurFamilyBusiness";
import JoinNow from "../HomeComponent/JoinNow";
const HomePage = () => {
  return (
    <Grid container direction="column">
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
  );
};

export default HomePage;
