import React from "react";
import { Grid, Typography, Box, Button } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
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
            <Grid container xs={12} sm={12} spacing={5}>
              <Grid item container xs={12} sm={6} justify="flex-end">
                <img
                  src={process.env.PUBLIC_URL + "/assets/home1.jpg"}
                  style={{ width: "100%" }}
                />
              </Grid>
              <Grid item container xs={12} sm={6} justify="center">
                <Grid item container xs={12} justify="center">
                  <Typography variant="h4" align="center" display="block">
                    VISIT
                  </Typography>
                </Grid>
                <Grid item container xs={12} justify="center">
                  <Typography variant="h4" align="center" display="block">
                    A VINEYARD
                  </Typography>
                </Grid>
                <Grid item xs={12} justify="center">
                  <Typography align="center">59 €</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography align="center">
                    Curabitur sed iaculis dolor, non congue ligula. Maecenas
                    imperdiet ante eget hendrerit posuere urna libero.
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography align="center">
                    Curabitur sed iaculis dolor, non congue ligula. Maecenas
                    imperdiet ante eget hendrerit posuere urna libero.
                  </Typography>
                </Grid>
                <Grid xs={12}>
                  <CheckIcon>Aliquam fringilla aliquam</CheckIcon>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Box pt={10} pb={10} style={{ minWidth: "100%" }}>
            <Grid container xs={12} sm={12} justify="center" spacing={1}>
              <Grid item>
                <Button variant="contained" color="secondary">
                  SEE OUR VINEYARDS
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
