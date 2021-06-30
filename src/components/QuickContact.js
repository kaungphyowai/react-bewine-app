import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
const useStyles = makeStyles((theme) => ({
  firstcolor: {
    color: "#80a093",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "30px",
    [theme.breakpoints.up("sm")]: {
      marginBottom: "0px",
    },
  },
  secondcolor: {
    color: "#ead4c0",
    marginBottom: "30px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      marginBottom: "0px",
    },
  },
  thirdcolor: {
    color: "#80a093",
    alignItems: "center",
    justifyContent: "center",

    [theme.breakpoints.up("sm")]: {
      justifyContent: "flex-end",
    },
  },
  firstTextStyle: {
    fontFamily: "Josefin Sans",
    fontSize: "80%",
    fontWeight: "bold",
  },
  secondTextStyle: {
    fontFamily: "Josefin Sans",
    fontWeight: "bold",
  },
}));

const QuickContact = () => {
  const classes = useStyles();
  return (
    <Box style={{ minWidth: "100%", backgroundColor: "#024126" }} pt={5}>
      <Grid item container>
        {/* First Padding For Desktop*/}
        <Grid item xs={0} sm={3} />
        {/* Facebook */}

        <Grid item container xs={12} sm={1} className={classes.firstcolor}>
          <Grid item>
            <FacebookIcon className={classes.icon} />
          </Grid>
          <Grid item>
            <Typography className={classes.firstTextStyle}>FACEBOOK</Typography>
          </Grid>
        </Grid>
        {/* padding between facebook and enjoy for Desktop */}
        <Grid item xs={0} sm={1} />
        {/* Enjoy passion */}
        <Grid
          item
          container
          xs={12}
          sm={2}
          className={classes.secondcolor}
          justify="center"
        >
          <Typography className={classes.secondTextStyle}>
            Enjoy your passion for wine with us
          </Typography>
        </Grid>
        {/* padding between enjoy and video */}
        <Grid item xs={0} sm={1} />
        {/* Play Video */}
        <Grid item container xs={12} sm={1} className={classes.thirdcolor}>
          <Grid item>
            <Typography className={classes.firstTextStyle}>
              PLAY VIDEO
            </Typography>
          </Grid>
          <Grid item>
            <PlayArrowIcon />
          </Grid>
        </Grid>
        {/* Last Padding For Desktop */}
        <Grid item xs={0} sm={3} />
      </Grid>
    </Box>
  );
};

export default QuickContact;
