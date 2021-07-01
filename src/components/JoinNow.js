import React from "react";
import { Typography, Button, Box, makeStyles, Grid } from "@material-ui/core";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
const useStyles = makeStyles((theme) => ({
  subtitle: {
    color: "#80a093",
    fontWeight: "bold",
    fontSize: "small",
  },
  title: {
    color: "#024126",
    fontWeight: "bolder",
    textAlign: "center",
    fontSize: "200%",
    [theme.breakpoints.up("sm")]: {
      fontSize: "300%",
    },
  },

  description: {
    color: "#776c62",
    fontSize: "small",
    fontFamily: "Tenor Sans",
    [theme.breakpoints.up("sm")]: {
      fontSize: "medium",
    },
  },

  buttonStyle: {
    color: "#fff",
    padding: "10px 15px",
    [theme.breakpoints.up("sm")]: {
      padding: "15px 30px",
    },
  },
  footerLogo: {
    margin: "50px 0px 20px 0px",
  },
  footerTextStyle: {
    color: "#776c62",
    fontSize: "small",
    fontFamily: "Tenor Sans",
    marginBottom: "65px",
    [theme.breakpoints.up("sm")]: {
      fontSize: "medium",
    },
  },
  phoneTextStyle: {
    fontSize: "medium",
    paddingLeft: "5px",
    fontWeight: "bold",
    color: "#776c62",
    marginBottom: "30px",

    [theme.breakpoints.up("sm")]: {
      fontSize: "x-large",
    },
  },
  iconColor: {
    color: "#d3ad7f",
    fontSize: "x-large",

    [theme.breakpoints.up("sm")]: {
      fontSize: "200% ",
    },
  },
  socialMedia: {
    marginBottom: "100px",
  },
  image: {
    minWidth: "60%",
    [theme.breakpoints.up("sm")]: {
      minWidth: "100%",
      objectFit: "scale-down",
    },
  },
}));
const JoinNow = () => {
  const classes = useStyles();
  return (
    <Box style={{ minWidth: "100%", backgroundColor: "#F2E8DF" }} pt={10}>
      <Grid container style={{ backgroundColor: "#f2e8df" }}>
        {/* First Padding */}
        <Grid item xs={1} sm={2} />
        <Grid item container xs={10} sm={8}>
          <Grid container direction="column" spacing={8}>
            <Grid item container>
              {/* First Image */}
              <Grid item container xs={12} sm={2} justify="center">
                <img
                  src={process.env.PUBLIC_URL + "/assets/grape5.png"}
                  className={classes.image}
                  alt="aa"
                />
              </Grid>
              <Grid item container xs={12} sm={8} justify="center">
                <Grid
                  item
                  container
                  direction="column"
                  xs={12}
                  sm={9}
                  justify="center"
                  alignItems="center"
                  spacing={3}
                  style={{ margin: "30px 0px" }}
                >
                  <Grid item xs={12}>
                    <Typography className={classes.subtitle}>
                      ABOUT US
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography align="center" className={classes.title}>
                      THE CLUB FOR{" "}
                      <span style={{ color: "#80a093" }}>CONNOISSEURS</span>
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography align="center" className={classes.description}>
                      Duis dignissim mi ut laoreet mollis. Nunc id tellus
                      finibus, eleifend mi vel, maximus justo. Maecenas mi
                      tortor, pellentesque aliquam.
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      className={classes.buttonStyle}
                      style={{ backgroundColor: "#62021D" }}
                    >
                      JOIN NOW
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              {/* Last Image */}
              <Grid item container xs={12} sm={2} justify="center">
                <img
                  src={process.env.PUBLIC_URL + "/assets/grape6.png"}
                  className={classes.image}
                  alt="aa"
                />
              </Grid>
            </Grid>
            <Grid item container>
              {/* Bewine Logo and description */}
              <Grid xs={12} sm={5}>
                <Grid item container xs={12} className={classes.footerLogo}>
                  <img
                    src={process.env.PUBLIC_URL + "/assets/footerLogo.png"}
                    alt="aa"
                  />
                </Grid>
                <Grid item container xs={12}>
                  <Typography className={classes.footerTextStyle}>
                    Lorem ipsum dolor sit amet enim. Etiam ullamcorper.
                    Suspendisse a pellentesque dui, non felis. Maecenas
                    malesuada.
                  </Typography>
                </Grid>
              </Grid>
              {/* Space Between Bewine Logo and Phone No For Desktop */}
              <Grid xs={0} sm={3} />
              {/* Phone No and Social Media */}
              <Grid xs={12} sm={4}>
                <Grid item container xs={12} justify="flex-end">
                  <PhoneIphoneIcon className={classes.iconColor} />
                  <Typography
                    component="span"
                    className={classes.phoneTextStyle}
                  >
                    +61 (0) 383 766 284
                  </Typography>
                </Grid>
                <Grid item container xs={12} className={classes.socialMedia}>
                  <Grid item xs={8} />
                  <Grid item container xs={4} justify="space-around">
                    <TwitterIcon className={classes.iconColor} />
                    <FacebookIcon className={classes.iconColor} />
                    <InstagramIcon className={classes.iconColor} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* Last Padding */}
        <Grid item xs={1} sm={2} />
      </Grid>
    </Box>
  );
};

export default JoinNow;
