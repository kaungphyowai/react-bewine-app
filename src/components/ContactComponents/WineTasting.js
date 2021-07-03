import React from "react";
import { Grid, Typography, Box, Button, makeStyles } from "@material-ui/core";
import SectionTitle from "../Components/SectionTitle/SectionTitle";
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
  image: {
    minWidth: "100%",
    marginBottom: "30px",
    [theme.breakpoints.up("sm")]: {
      minWidth: "100%",
    },
  },
}));
const WineTasting = () => {
  const classes = useStyles();
  return (
    <>
      <Box style={{ minWidth: "100%", backgroundColor: "#024126" }} pt={10}>
        <Grid container style={{ backgroundColor: "#024126" }}>
          {/* First Padding */}
          <Grid item xs={1} sm={3} />
          {/* Content */}
          <Grid item container xs={10} sm={6}>
            <SectionTitle
              firstTitle="WINE TASTING"
              LargeWhiteTitle="VISIT OUR VINEYARD & TASTE"
              LargeFadedTitle="OUR WINE"
            />
            <Grid item container xs={12} sm={4}>
              <img
                src={process.env.PUBLIC_URL + "/assets/bottle1.jpg"}
                alt="aa"
                className={classes.image}
              />
            </Grid>
            <Grid item container xs={12} sm={4}>
              <img
                src={process.env.PUBLIC_URL + "/assets/bottle2.jpg"}
                alt="aa"
                className={classes.image}
              />
            </Grid>
            <Grid item container xs={12} sm={4}>
              <img
                src={process.env.PUBLIC_URL + "/assets/bottle3.jpg"}
                alt="aa"
                className={classes.image}
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
                    BOOK NOW
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

export default WineTasting;
