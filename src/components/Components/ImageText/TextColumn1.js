import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
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
}));

const TextColumn1 = ({ whiteText, goldText1, goldText2, goldText3 }) => {
  const classes = useStyles();
  return (
    //   Text
    <Grid item container xs={10} sm={6} alignItems="center">
      {/* {First Text */}
      <Grid item container xs={12} sm={12}>
        <Typography variant="h5" className={classes.decriptionWhite}>
          {whiteText}
        </Typography>
      </Grid>
      {/* Second Text */}
      <Grid item container xs={12} sm={12}>
        <Typography className={classes.decriptionGold}>{goldText1}</Typography>
        <Typography className={classes.decriptionGold}>{goldText2}</Typography>
        <Typography className={classes.decriptionGold}>{goldText3}</Typography>
      </Grid>
    </Grid>
  );
};

export default TextColumn1;
