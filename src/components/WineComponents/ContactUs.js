import React from "react";
import SectionTitle from "../Components/SectionTitle/SectionTitle";
import { Box, Grid, Button, makeStyles } from "@material-ui/core";
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
const ContactUs = () => {
  const classes = useStyles();
  return (
    <>
      <Box style={{ minWidth: "100%", backgroundColor: "#024126" }} pt={5}>
        <Grid container>
          {/* First Padding */}
          <Grid item xs={0} sm={2} />
          {/* Content */}
          <Grid item container xs={12} sm={8} justify="center">
            <SectionTitle
              firstTitle="BEWINE"
              LargeWhiteTitle="INTERESTED IN"
              LargeFadedTitle="OUR PRODUCTS?"
            />
            {/* Buttons */}
            <Box pb={5} style={{ minWidth: "100%" }}>
              <Grid container xs={12} sm={12} justify="center" spacing={1}>
                <Grid item>
                  <Button
                    variant="contained"
                    className={classes.buttonStyle}
                    style={{ backgroundColor: "#62021D" }}
                  >
                    CONTACT US
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

export default ContactUs;
