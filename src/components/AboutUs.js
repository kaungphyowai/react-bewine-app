import { makeStyles, Grid, Typography, Box, Button } from "@material-ui/core";
import React from "react";
import NumberContent from "./NumberContent";

const useStyles = makeStyles((theme) => ({
  subtitle: {
    color: "#ead4c0",
    fontWeight: "bold",
    fontSize: "small",
    marginBottom: "30px",
  },
  title: {
    color: "#fff",
    fontSize: "230%",
    fontWeight: "bolder",
    textAlign: "center",
    marginBottom: "30px",
  },
  decriptionWhite: {
    color: "#ffff",
    fontSize: "small",
    marginBottom: "30px",
    [theme.breakpoints.up("sm")]: {
      fontSize: "large",
    },
  },
  decriptionGold: {
    color: "#ead4c0",
    fontSize: "small",
    marginBottom: "30px",
    [theme.breakpoints.up("sm")]: {
      fontSize: "large",
    },
  },

  descriptionFaded: {
    color: "#80a093",
    fontSize: "small",
    marginBottom: "30px",
  },
  numberTitle: {
    color: "#d3ad7f",
    fontSize: "500%",
  },

  buttonStyle: {
    color: "#fff",
    padding: "10px 15px",
    [theme.breakpoints.up("sm")]: {
      padding: "15px 30px",
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
const AboutUs = () => {
  const classes = useStyles();
  return (
    <>
      <Box style={{ minWidth: "100%", backgroundColor: "#024126" }} pt={10}>
        <Grid container>
          {/* First Padding */}
          <Grid item xs={0} sm={2} />
          {/* Content */}
          <Grid item container xs={12} sm={8} justify="center">
            {/* About us */}
            <Grid item container xs={12} sm={12} justify="center">
              <Typography className={classes.subtitle}>ABOUT US</Typography>
            </Grid>
            {/* History and tradition of our vineyards */}
            <Grid item container xs={10} sm={12} justify="center">
              <Typography variant="h2" className={classes.title}>
                HISTORY AND TRADITION
                <span style={{ color: "#80a093", display: "block" }}>
                  OF OUR VINEYARDS
                </span>
              </Typography>
            </Grid>
            {/* Image and text */}
            <Grid container xs={12} sm={12} spacing={5}>
              {/* Image */}
              <Grid item container xs={12} sm={6} justify="flex-end">
                <img
                  src={process.env.PUBLIC_URL + "/assets/1897.jpg"}
                  style={{ width: "100%" }}
                />
              </Grid>
              <Box component={Grid} item xs={1} display={{ sm: "none" }} />
              {/* Text */}
              <Grid item container xs={10} sm={6} alignItems="center">
                {/* {First Text */}
                <Grid item container xs={12} sm={12}>
                  <Typography variant="h5" className={classes.decriptionWhite}>
                    Mauris rhoncus orci in imperdiet placerat. Vestibulum
                    euismod nisl suscipit ligula volutpat, a feugiat urna
                    maximus. Cras massa nibh, tincidunt.
                  </Typography>
                </Grid>
                {/* Second Text */}
                <Grid item container xs={12} sm={12}>
                  <Typography className={classes.decriptionGold}>
                    Donec et nibh maximus, congue est eu, mattis nunc. Praesent
                    ut quam quis quam venenatis fringilla. Morbi vestibulum id
                    tellus commodo mattis. Aliquam erat volutpat. Aenean
                    accumsan id mi nec semper. Lorem ipsum.
                  </Typography>
                  <Typography className={classes.decriptionGold}>
                    Duis ultricies malesuada leo vel aliquet. Curabitur rutrum
                    porta dui eget mollis. Nullam lacinia dictum auctor. Class
                    aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos. Orci varius natoque
                  </Typography>
                  <Typography className={classes.decriptionGold}>
                    Penatibus et magnis dis parturient montes.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            {/* Number Content */}
            <Box pt={5}>
              <Grid item container xs={12} sm={12} spacing={6} justify="center">
                <NumberContent
                  subtitleStyle={classes.subtitle}
                  descriptionFaded={classes.descriptionFaded}
                  numberTitle={classes.numberTitle}
                />
                <NumberContent
                  subtitleStyle={classes.subtitle}
                  descriptionFaded={classes.descriptionFaded}
                  numberTitle={classes.numberTitle}
                />
                <NumberContent
                  subtitleStyle={classes.subtitle}
                  descriptionFaded={classes.descriptionFaded}
                  numberTitle={classes.numberTitle}
                />
                <NumberContent
                  subtitleStyle={classes.subtitle}
                  descriptionFaded={classes.descriptionFaded}
                  numberTitle={classes.numberTitle}
                />
              </Grid>
            </Box>
            {/* Buttons */}
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
          <Grid item xs={0} sm={2} />
        </Grid>
      </Box>
      {/* Image */}
      <img
        src={process.env.PUBLIC_URL + "/assets/joint1.png"}
        style={{
          width: "100%",
          backgroundSize: "cover",
          backgroundColor: "#024126",
        }}
      />
    </>
  );
};

export default AboutUs;
