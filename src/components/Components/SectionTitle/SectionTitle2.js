import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
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
}));
const SectionTitle2 = ({ title, LargeTitle }) => {
  const classes = useStyles();
  return (
    <>
      <Grid item container xs={12} sm={12} justify="center">
        <Typography className={classes.subtitle}>{title}</Typography>
      </Grid>
      <Grid item container xs={12} sm={12} justify="center">
        <Typography variant="h2" className={classes.title}>
          {LargeTitle}
        </Typography>
      </Grid>
    </>
  );
};

export default SectionTitle2;
