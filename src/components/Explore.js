import { Button, makeStyles, Grid, Typography, Box } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "70vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/bg1.jpg"})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 50%",
    [theme.breakpoints.up("sm")]: {
      minHeight: "100vh",
      backgroundSize: "cover",
      backgroundPosition: "50% 50%",
      position: "relative",
      width: "100%",
      height: "100%",
    },
  },
  titleStyle: {
    fontFamily: "Josefin Sans",
    fontWeight: "bolder",
    textAlign: "center",
    fontSize: "250%",
    color: "#fff",
    lineHeight: "100%",
    [theme.breakpoints.up("sm")]: {
      textAlign: "start",
      fontSize: "450%",
      fontWeight: "bolder",
    },
  },
  buttonStyle: {
    color: "#fff",
    fontFamily: "Josefin Sans",
    padding: "10px 15px",
    [theme.breakpoints.up("sm")]: {
      padding: "15px 30px",
    },
  },
}));
const Explore = () => {
  const classes = useStyles();
  return (
    <Box pt={4} style={{ backgroundColor: "#064125", minWidth: "100%" }}>
      <Grid container className={classes.root} alignContent="center">
        {/* first padding */}
        <Grid item xs={3} sm={2} />
        {/* Content */}
        <Grid item container xs={8} sm={4} spacing={5}>
          {/* Text */}
          <Grid item container xs={12} sm={12}>
            <Typography variant="h3" className={classes.titleStyle}>
              EXPLORE OUR WIDE VARIETY OF WINES
            </Typography>
          </Grid>
          {/* Button */}
          <Grid item container xs={12} sm={12} justify="center">
            <Grid item container xs={12} sm={8}>
              <Grid item container xs={6} sm={6}>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#62021D" }}
                  className={classes.buttonStyle}
                >
                  Book A Tour
                </Button>
              </Grid>
              <Grid item container xs={6} sm={6}>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#80A094" }}
                  className={classes.buttonStyle}
                >
                  Our Wines
                </Button>
              </Grid>
            </Grid>
            {/* Button left padding */}
            <Grid item xs={2} sm={4} />
          </Grid>
        </Grid>
        {/* last padding */}
        <Grid item xs={1} sm={6} />
      </Grid>
    </Box>
  );
};

export default Explore;
