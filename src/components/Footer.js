import React from "react";
import { Box, Grid, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  textStyle: {
    color: "#776c62",
    fontFamily: "Tenor Sans",
    fontSize: "small",
    [theme.breakpoints.up("sm")]: {
      fontSize: "medium",
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Box
      style={{
        backgroundColor: "#f2e8df",
        borderTopWidth: "1",
        borderTopStyle: "solid",
        borderTopColor: "#d9d0c8",
      }}
      pt={4}
      pb={4}
    >
      <Grid container xs={12} justify="center">
        <Typography className={classes.textStyle}>
          © 2021 BeWine3 - Betheme. All Rights Reserved.{" "}
          <a style={{ color: "#ae8757", textDecoration: "underline" }} herf="#">
            Muffin group
          </a>
        </Typography>
      </Grid>
    </Box>
  );
};

export default Footer;
