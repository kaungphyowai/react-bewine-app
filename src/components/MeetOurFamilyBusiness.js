import React from "react";
import { Grid, Typography, Box, Button, makeStyles } from "@material-ui/core";
import BusinessCard from "./BusinessCard";

const useStyles = makeStyles((theme) => ({
  subtitle: {
    color: "#ead4c0",
    fontWeight: "bold",
    fontSize: "small",
    marginBottom: "30px",
  },
  title: {
    color: "#fff",
    fontWeight: "bolder",
    textAlign: "center",
    fontSize: "250%",
    marginBottom: "30px",
    [theme.breakpoints.up("sm")]: {
      fontSize: "300%",
    },
  },
  buttonStyle: {
    color: "#fff",
    padding: "10px 15px",
    [theme.breakpoints.up("sm")]: {
      padding: "15px 30px",
    },
  },
}));
const MeetOurFamilyBusiness = () => {
  const classes = useStyles();
  return (
    <>
      <Box style={{ minWidth: "100%", backgroundColor: "#024126" }} pt={10}>
        <Grid container style={{ backgroundColor: "#024126" }}>
          {/* First Padding */}
          <Grid item xs={1} sm={3} />
          {/* Content */}
          <Grid item container xs={10} sm={6}>
            <Grid item container xs={12} sm={12} justify="center">
              <Typography className={classes.subtitle}>BEWINE</Typography>
            </Grid>

            <Grid item container xs={12} sm={12} justify="center">
              <Typography className={classes.title}>
                MEET OUR
                <span style={{ color: "#80a093", display: "block" }}>
                  FAMILY BUSINESS
                </span>
              </Typography>
            </Grid>
            <Grid item container spacing={3}>
              <BusinessCard
                titleFirstLine="VISIT"
                titleSecondLine="A VINEYARD"
                price="59"
                image="/assets/home1.jpg"
                description="Curabitur sed iaculis dolor, non congue ligula. Maecenas imperdiet ante eget hendrerit posuere urna libero."
              />
              <BusinessCard
                titleFirstLine="WINE"
                titleSecondLine="TASTING"
                price="129"
                image="/assets/home2.jpg"
                description="Curabitur sed iaculis dolor, non congue ligula. Maecenas imperdiet ante eget hendrerit posuere urna libero."
              />
              <BusinessCard
                titleFirstLine="DINNER"
                titleSecondLine="WITH FRIENDS"
                price="229"
                image="/assets/home3.jpg"
                description="Curabitur sed iaculis dolor, non congue ligula. Maecenas imperdiet ante eget hendrerit posuere urna libero."
              />
            </Grid>

            <Box pt={10} pb={10} style={{ minWidth: "100%" }}>
              <Grid container xs={12} sm={12} justify="center" spacing={1}>
                <Grid item>
                  <Button
                    variant="contained"
                    className={classes.buttonStyle}
                    style={{ backgroundColor: "#62021D" }}
                  >
                    ABOUT US
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    className={classes.buttonStyle}
                    style={{ backgroundColor: "#80A094" }}
                  >
                    OUR WINES
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          {/* Last Padding */}
          <Grid item xs={1} sm={3} />
        </Grid>
      </Box>
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
