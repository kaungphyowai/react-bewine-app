import React from "react";
import { Grid, Box, Typography, makeStyles } from "@material-ui/core";
import TextColumn1 from "./TextColumn1";
const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: "40px",
  },
}));

const ImageText = ({
  imgSrc,
  whiteText,
  goldText1,
  goldText2,
  goldText3,
  imgRight = true,
  textColumn,
}) => {
  const classes = useStyles();
  return (
    <Grid container xs={12} sm={12} spacing={5} className={classes.root}>
      {imgRight ? (
        <>
          <Grid item container xs={12} sm={6} justify="flex-end">
            <img
              src={process.env.PUBLIC_URL + imgSrc}
              style={{ width: "100%" }}
            />
          </Grid>
          <Box component={Grid} item xs={1} display={{ sm: "none" }} />
          {textColumn}
        </>
      ) : (
        <>
          <Box component={Grid} item xs={1} display={{ sm: "none" }} />
          {textColumn}
          <Grid item container xs={12} sm={6} justify="flex-end">
            <img
              src={process.env.PUBLIC_URL + imgSrc}
              style={{ width: "100%" }}
            />
          </Grid>
        </>
      )}
      {/* Image */}
    </Grid>
  );
};

export default ImageText;
