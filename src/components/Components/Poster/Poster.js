import React from "react";
import { Grid, makeStyles, Box, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "60vh",
    backgroundSize: "cover",
    backgroundColor: "#064125",
    backgroundPosition: "center top",
    minWidth: "100%",
  },
  gridRoot: {
    minHeight: "70%",
  },
  textStyle: {
    color: "#fff",
    textAlign: "center",
    fontSize: "xx-large",
    fontWeight: "bold",
    [theme.breakpoints.up("sm")]: {
      fontSize: "48px",
    },
  },
}));

const Poster = ({ imgSrc, textwhite, textGoldInline, textGoldBlock }) => {
  const classes = useStyles();
  return (
    <Box
      className={classes.root}
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + imgSrc})`,
      }}
    >
      <img
        src={process.env.PUBLIC_URL + "/assets/joint4.png"}
        style={{
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          height: "15%",
        }}
      />
      <Grid
        container
        item
        x={12}
        className={classes.gridRoot}
        alignContent="center"
        justify="center"
      >
        <Typography className={classes.textStyle}>
          {textwhite} <span style={{ color: "#d3ad7f" }}>{textGoldInline}</span>
          <span style={{ color: "#d3ad7f", display: "block" }}>
            {textGoldBlock}
          </span>
        </Typography>
      </Grid>
      <img
        src={process.env.PUBLIC_URL + "/assets/joint5.png"}
        style={{
          width: "100%",
          height: "15%",
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
        }}
      />
    </Box>
  );
};

export default Poster;
