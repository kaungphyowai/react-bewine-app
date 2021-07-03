import { makeStyles, Grid, Typography, Box, Button } from "@material-ui/core";
import React from "react";
import NumberContent from "./NumberContent";
import ImageText from "../Components/ImageText/ImageText";
import TextColumn1 from "../Components/ImageText/TextColumn1";
import SectionTitle from "../Components/SectionTitle/SectionTitle";
const useStyles = makeStyles((theme) => ({
  subtitle: {
    color: "#ead4c0",
    fontWeight: "bold",
    fontSize: "small",
    marginBottom: "30px",
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
            <SectionTitle
              firstTitle="ABOUT US"
              LargeWhiteTitle="HISTORY AND TRADITION"
              LargeFadedTitle="OF OUR VINEYARDS"
            />
            {/* Image and text */}
            <ImageText
              imgSrc="/assets/1897.jpg"
              textColumn={
                <TextColumn1
                  whiteText="Mauris rhoncus orci in imperdiet placerat. Vestibulum euismod nisl
                  suscipit ligula volutpat, a feugiat urna maximus. Cras massa nibh,
                  tincidunt."
                  goldText1="Donec et nibh maximus, congue est eu, mattis nunc. Praesent ut quam
                  quis quam venenatis fringilla. Morbi vestibulum id tellus commodo
                  mattis. Aliquam erat volutpat. Aenean accumsan id mi nec semper.
                  Lorem ipsum."
                  goldText2="Duis ultricies malesuada leo vel aliquet. Curabitur rutrum porta dui
                  eget mollis. Nullam lacinia dictum auctor. Class aptent taciti
                  sociosqu ad litora torquent per conubia nostra, per inceptos
                  himenaeos. Orci varius natoque"
                  goldText3="Penatibus et magnis dis parturient montes."
                />
              }
            />
            {/* Number Content */}
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
