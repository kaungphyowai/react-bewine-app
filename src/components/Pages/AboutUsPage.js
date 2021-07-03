import React from "react";
import AboutUsPoster from "../AboutUsComponents/AboutUsPoster";
import { Grid } from "@material-ui/core";
import History from "../AboutUsComponents/History";
import Badge from "../AboutUsComponents/Badge";
import Profile from "../AboutUsComponents/Profile";
const AboutUsPage = () => {
  return (
    <Grid container direction="column">
      <Grid item container>
        <AboutUsPoster />
      </Grid>
      <Grid item container>
        <History />
      </Grid>
      <Grid item container>
        <Badge />
      </Grid>
      <Grid item container>
        <Profile />
      </Grid>
    </Grid>
  );
};

export default AboutUsPage;
