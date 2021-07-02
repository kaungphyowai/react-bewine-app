import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  image: {
    width: "60%",
    marginBottom: "30px",
    [theme.breakpoints.up("sm")]: {
      width: "75%",
    },
  },
  title: {
    color: "#024126",
    textAlign: "center",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "30px",
    [theme.breakpoints.up("sm")]: {
      fontSize: "x-large",
    },
  },
  description: {
    color: "#776c62",
    fontFamily: "Tenor Sans",
  },
}));
const ProductColumn = ({ title, description, image }) => {
  const classes = useStyles();
  return (
    <Grid item container xs={12} sm={3}>
      <Grid item container xs={12} sm={12} justify="center">
        <img
          src={process.env.PUBLIC_URL + image}
          alt="aa"
          className={classes.image}
        />
      </Grid>
      <Grid item container xs={12} sm={12} justify="center">
        <Typography className={classes.title}>{title}</Typography>
      </Grid>
      <Grid item container xs={12} sm={12}>
        <Typography align="center" className={classes.description}>
          {description}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ProductColumn;
