import React from "react";
import Poster from "../AboutUsComponents/Poster";
import { Grid } from "@material-ui/core";
import History from "../AboutUsComponents/History";
import Badge from "../AboutUsComponents/Badge";
const AboutUsPage = () => {
  return (
    <Grid container direction="column">
      <Grid item container>
        <Poster />
        <History />
        <Badge />
      </Grid>
    </Grid>
  );
};

export default AboutUsPage;
