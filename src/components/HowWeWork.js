import { Grid, makeStyles, Typography, Box, Button } from "@material-ui/core";

import React from "react";
import Ingredients from "./Ingredients";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/bg3.png"})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundColor: "#f2e8df",
    [theme.breakpoints.up("sm")]: {
      backgroundPosition: "top left",
    },
  },
  subtitle: {
    color: "#80a093",
    fontWeight: "bold",
    fontSize: "small",
    marginBottom: "30px",
  },
  title: {
    color: "#024126",
    fontSize: "225%",
    fontWeight: "bolder",
    textAlign: "center",
    marginBottom: "70px",
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
const HowWeWork = () => {
  const classes = useStyles();
  return (
    <>
      <Box pt={10} className={classes.root}>
        <Grid container>
          {/* First Padding */}
          <Grid item xs={1} sm={2} />
          {/* Content */}
          <Grid item container xs={10} sm={8}>
            <Grid item container xs={12} sm={12} justify="center">
              <Typography className={classes.subtitle}>HOW WE WORK</Typography>
            </Grid>
            <Grid item container xs={12} sm={12} justify="center">
              <Typography variant="h2" className={classes.title}>
                THE BEST INGREDIENTS
              </Typography>
            </Grid>
            <Grid container spacing={4} sm={12}>
              <Ingredients
                title="ELEIFEND JUSTO BIBENDUM"
                image="/assets/grape1.png"
                description="Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit amet elementum. Proin bibendum feugiat."
              />
              <Ingredients
                title="LECTUS FELIS ULTRICIES"
                image="/assets/grape2.png"
                description="Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit amet elementum. Proin bibendum feugiat."
              />
              <Ingredients
                title="INTEGER ULTRICES"
                image="/assets/grape3.png"
                description="Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit amet elementum. Proin bibendum feugiat."
              />
              <Ingredients
                title="ELEIFEND JUSTO BIBENDUM"
                image="/assets/grape4.png"
                description="Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit amet elementum. Proin bibendum feugiat."
              />
            </Grid>
            <Box pt={10} pb={10} style={{ minWidth: "100%" }}>
              <Grid container xs={12} sm={12} justify="center" spacing={1}>
                <Grid item>
                  <Button
                    variant="contained"
                    className={classes.buttonStyle}
                    style={{ backgroundColor: "#053C23" }}
                  >
                    SEE OUR VINEYARDS
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    className={classes.buttonStyle}
                    style={{ backgroundColor: "#779589" }}
                  >
                    OUR WINES
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          {/* Last Padding */}
          <Grid item xs={1} sm={2} />
        </Grid>
      </Box>
      {/* Image */}
      <img
        src={process.env.PUBLIC_URL + "/assets/joint2.png"}
        style={{
          width: "100%",
          backgroundSize: "cover",
          backgroundColor: "#024126",
        }}
      />
    </>
  );
};

export default HowWeWork;
