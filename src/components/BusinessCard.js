import React from "react";
import { Grid, Typography, Box, makeStyles } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
const useStyle = makeStyles((theme) => ({
  image: {
    maxWidth: "100%",
    marginBottom: "30px",
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#fff",
    [theme.breakpoints.up("sm")]: {
      fontSize: "x-large",
    },
  },
  subtitle: {
    color: "#d3ad7f",
    fontSize: "14px",
    [theme.breakpoints.up("sm")]: {
      fontSize: "large",
    },
  },
  description: {
    color: "#fff",
    fontSize: "small",
    fontFamily: "Tenor Sans",
    [theme.breakpoints.up("sm")]: {
      fontSize: "medium",
    },
  },
  checked: {
    color: "#80a093",
    fontFamily: "Tenor Sans",
    fontSize: "small",
    paddingLeft: "5px",
    [theme.breakpoints.up("sm")]: {
      fontSize: "medium",
    },
  },
  textColumn: {
    marginBottom: "30px",
  },
  CheckIcon: {
    color: "#d3ad7f",
    fontSize: "small",
    [theme.breakpoints.up("sm")]: {
      fontSize: "medium",
    },
  },
}));
const BusinessCard = ({
  titleFirstLine,
  titleSecondLine,
  image,
  price,
  description,
}) => {
  const classes = useStyle();
  return (
    <Grid item container xs={12} sm={4}>
      <Grid item container xs={12} sm={12}>
        <img src={process.env.PUBLIC_URL + image} className={classes.image} />
      </Grid>
      <Grid
        item
        container
        xs={12}
        direction="column"
        spacing={2}
        className={classes.textColumn}
      >
        <Grid item container xs={12} justify="center">
          <Typography variant="h4" align="center" className={classes.title}>
            {titleFirstLine}
            <span style={{ display: "block" }}> {titleSecondLine}</span>
          </Typography>
        </Grid>
        <Grid item container xs={12} justify="center">
          <Typography align="center" className={classes.subtitle}>
            {price} €
          </Typography>
        </Grid>
        <Grid item container xs={12}>
          <Typography align="center" className={classes.description}>
            {description}
          </Typography>
        </Grid>
      </Grid>
      <Grid xs={12} className={classes.textColumn}>
        <Grid item container xs={12} justify="center" alignItems="center">
          <CheckIcon className={classes.CheckIcon} />
          <Typography component="span" className={classes.checked}>
            Aliquam fringilla aliquam
          </Typography>
        </Grid>
        <Grid item container xs={12} justify="center" alignItems="center">
          <CheckIcon className={classes.CheckIcon} />
          <Typography component="span" className={classes.checked}>
            Proin bibendum feugiat
          </Typography>
        </Grid>
        <Grid item container xs={12} justify="center" alignItems="center">
          <CheckIcon className={classes.CheckIcon} />
          <Typography component="span" className={classes.checked}>
            Curabitur ut egestas
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BusinessCard;
