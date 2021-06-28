import React from "react";
import { Divider, Grid } from "@material-ui/core";
import { Typography, Button, Box } from "@material-ui/core";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
const JoinNow = () => {
  return (
    <Grid container style={{ backgroundColor: "#f2e8df" }}>
      {/* First Padding */}
      <Grid item xs={1} />
      <Grid item container xs={10}>
        {/* First Image */}
        <Grid item container xs={12} justify="center">
          <img
            src={process.env.PUBLIC_URL + "/assets/grape5.png"}
            style={{ width: "60%" }}
            alt="aa"
          />
        </Grid>
        <Box pb={5} pt={5}>
          <Grid
            item
            container
            direction="column"
            xs={12}
            justify="center"
            alignItems="center"
            spacing={3}
          >
            <Grid item xs={12}>
              <Typography>ABOUT US</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography align="center">THE CLUB FOR CONNOISSEURS</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography align="center">
                Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus,
                eleifend mi vel, maximus justo. Maecenas mi tortor, pellentesque
                aliquam.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained">JOIN NOW</Button>
            </Grid>
          </Grid>
        </Box>
        {/* Last Image */}
        <Grid item container xs={12} justify="center">
          <img
            src={process.env.PUBLIC_URL + "/assets/grape6.png"}
            style={{ width: "60%" }}
            alt="aa"
          />
        </Grid>
        <Grid item container xs={12}>
          <img
            src={process.env.PUBLIC_URL + "/assets/footerLogo.png"}
            alt="aa"
          />
        </Grid>
        <Grid item container xs={12}>
          <Typography>
            Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a
            pellentesque dui, non felis. Maecenas malesuada.
          </Typography>
        </Grid>
        <Grid item container xs={12} justify="flex-end">
          <PhoneIphoneIcon />
          <Typography component="span">+61 (0) 383 766 284</Typography>
        </Grid>
        <Grid item container xs={12}>
          <Grid item xs={8} />
          <Grid item container xs={4} justify="space-around">
            <TwitterIcon />
            <FacebookIcon />
            <InstagramIcon />
          </Grid>
        </Grid>
      </Grid>
      {/* Last Padding */}
      <Grid item xs={1} />
    </Grid>
  );
};

export default JoinNow;
