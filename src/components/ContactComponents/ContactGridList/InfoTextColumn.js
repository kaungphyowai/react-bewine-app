import React from "react";

import { Grid, Box, Typography, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: "30px",
    textAlign: "start",
    alignItems: "flex-start ",
  },
  title: {
    fontSize: "x-large",
    color: "#fff",
    fontWeight: "bold",
    textAlign: "start",
    marginBottom: "20px",
  },
  description: {
    fontSize: "13px",
    color: "#ead4c0",
    marginBottom: "20px",
    fontWeight: "bold",
  },
  phoneNo: {
    color: "#80a093",
    fontSize: "small",
    fontFamily: "Tenor Sans",
  },
}));

const InfoTextColumn = ({ title, subtitle, contactInfo }) => {
  const classes = useStyles();
  return (
    <Grid xs={12} sm={3} item container className={classes.root}>
      <Grid item container xs={12} justify="flex-start" alignItems="flex-start">
        <Typography variant="h3" className={classes.title}>
          {title}
        </Typography>
      </Grid>
      <Grid item container xs={12}>
        <Typography variant="h6" className={classes.description}>
          {subtitle}
        </Typography>
      </Grid>

      <Grid item container xs={12}>
        <Typography variant="p" className={classes.phoneNo}>
          {contactInfo}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default InfoTextColumn;
