import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  subtitle: {
    color: "#ead4c0",
    fontWeight: "bold",
    fontSize: "small",
    marginBottom: "30px",
  },
  title: {
    color: "#fff",
    fontSize: "230%",
    fontWeight: "bolder",
    textAlign: "center",
    marginBottom: "30px",
  },
}));
const SectionTitle = ({ firstTitle, LargeWhiteTitle, LargeFadedTitle }) => {
  const classes = useStyles();
  return (
    <>
      {/* About us */}
      <Grid item container xs={12} sm={12} justify="center">
        <Typography className={classes.subtitle}>{firstTitle}</Typography>
      </Grid>
      {/* History and tradition of our vineyards */}
      <Grid item container xs={12} sm={12} justify="center">
        <Typography variant="h2" className={classes.title}>
          {LargeWhiteTitle}
          <span style={{ color: "#80a093", display: "block" }}>
            {LargeFadedTitle}
          </span>
        </Typography>
      </Grid>
    </>
  );
};

export default SectionTitle;
