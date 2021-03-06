import React from "react";
import { Grid, Typography } from "@material-ui/core";
import CountUp from "react-countup";

const NumberContent = ({ subtitleStyle, descriptionFaded, numberTitle }) => {
  return (
    <Grid item container direction="column" xs={12} sm={3} spacing={1}>
      <Grid container item xs={12} justify="center">
        <Typography className={numberTitle}>
          <CountUp start={0} end={126} duration={4} />
        </Typography>
      </Grid>
      <Grid item container justify="center">
        <Typography
          variant="h7"
          color="secondary"
          align="center"
          className={subtitleStyle}
        >
          ALIQUAM ERAT IPSUM
        </Typography>
      </Grid>
      <Grid item container justify="center" style={{ paddingLeft: "10px" }}>
        <Typography variant="h7" align="center" className={descriptionFaded}>
          Fusce ut velit laoreet, tempus arcu eu, molestie tortor. Nam vel justo
          cursus faucibus.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default NumberContent;
