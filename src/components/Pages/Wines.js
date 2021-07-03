import React from "react";
import { Grid } from "@material-ui/core";
import WineCollectionPoster from "../WineComponents/WineCollectionPoster";
import WineCategories from "../WineComponents/WineCategories";
import HowWeWork from "../HomeComponent/HowWeWork";
import ContactUs from "../WineComponents/ContactUs";
const Wines = () => {
  return (
    <Grid container direction="column">
      <Grid item container>
        <WineCollectionPoster />
      </Grid>
      <Grid item container>
        <WineCategories />
      </Grid>
      <Grid item container>
        <HowWeWork />
      </Grid>
      <Grid item container>
        <ContactUs />
      </Grid>
    </Grid>
  );
};

export default Wines;
