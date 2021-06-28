import React from "react";
import { Grid, Typography, Box, Button } from "@material-ui/core";
import BusinessCard from "./BusinessCard";
const MeetOurFamilyBusiness = () => {
  return (
    <>
      <Grid container style={{ backgroundColor: "#024126" }}>
        {/* First Padding */}
        <Grid item xs={1} sm={2} />
        {/* Content */}
        <Grid item container xs={10} sm={8}>
          <Grid item container xs={12} sm={12} justify="center">
            <Typography>BEWINE</Typography>
          </Grid>

          <Grid item container xs={12} sm={12} justify="center">
            <Typography>MEET OUR FAMILY BUSINESS</Typography>
          </Grid>
          <BusinessCard />
          <BusinessCard />
          <BusinessCard />

          <Box pt={10} pb={10} style={{ minWidth: "100%" }}>
            <Grid container xs={12} sm={12} justify="center" spacing={1}>
              <Grid item>
                <Button variant="contained" color="secondary">
                  ABOUT US
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" color="secondary">
                  OUR WINES
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        {/* Last Padding */}
        <Grid item xs={1} sm={2} />
      </Grid>
      {/* Image */}
      <img
        src={process.env.PUBLIC_URL + "/assets/joint3.png"}
        style={{
          width: "100%",
          backgroundSize: "cover",
          backgroundColor: "#024126",
        }}
      />
    </>
  );
};

export default MeetOurFamilyBusiness;
