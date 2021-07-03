import React from "react";
import { makeStyles, Grid, Typography, Box, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  subtitle: {
    color: "#80a093",
    fontWeight: "bold",
    fontSize: "small",
    marginBottom: "30px",
  },
  title: {
    color: "#fff",
    fontSize: "230%",
    fontWeight: "bolder",
    marginBottom: "30px",
  },
  decriptionWhite: {
    color: "#ffff",
    fontSize: "small",
    marginBottom: "30px",
    [theme.breakpoints.up("sm")]: {
      fontSize: "large",
    },
  },
  buttonStyle: {
    color: "#fff",
    padding: "10px 15px",
    [theme.breakpoints.up("sm")]: {
      padding: "15px 30px",
    },
  },
}));
const TextColumn2 = ({
  smallTitle,
  LargeTitleWhiteLine,
  LargeTItleFadedLine,
  whiteText1,
  whiteText2,
}) => {
  const classes = useStyles();
  return (
    //   Text
    <Grid item container xs={10} sm={6} alignContent="center">
      {/* small title */}
      <Grid item container xs={12} sm={12}>
        <Typography className={classes.subtitle}>{smallTitle}</Typography>
      </Grid>
      {/* Large title */}
      <Grid item container xs={12} sm={12}>
        {/* First Large white title */}
        <Typography variant="h2" className={classes.title}>
          {/* Second Large faded title */}
          {LargeTitleWhiteLine}
          <span style={{ color: "#80a093", display: "block" }}>
            {LargeTItleFadedLine}
          </span>
        </Typography>
      </Grid>
      <Grid item container xs={12} sm={12}>
        <Typography variant="h5" className={classes.decriptionWhite}>
          {whiteText1}
        </Typography>
      </Grid>
      <Grid item container xs={12} sm={12}>
        <Typography variant="h5" className={classes.decriptionWhite}>
          {whiteText2}
        </Typography>
      </Grid>
      <Box pt={10} pb={10} style={{ minWidth: "100%" }}>
        <Grid container xs={12} sm={12}>
          <Grid item>
            <Button
              variant="contained"
              className={classes.buttonStyle}
              style={{ backgroundColor: "#62021D" }}
            >
              READ MORE
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default TextColumn2;
