import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
const BusinessCard = () => {
  return (
    <Box pt={5}>
      <Grid container xs={12} sm={12} spacing={5}>
        <Grid item container xs={12} sm={6} justify="flex-end">
          <img
            src={process.env.PUBLIC_URL + "/assets/home1.jpg"}
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid item container xs={12} sm={6} justify="center">
          <Grid item container xs={12} justify="center">
            <Typography variant="h4" align="center" display="block">
              VISIT
            </Typography>
          </Grid>
          <Grid item container xs={12} justify="center">
            <Typography variant="h4" align="center" display="block">
              A VINEYARD
            </Typography>
          </Grid>
          <Grid item xs={12} justify="center">
            <Typography align="center">59 €</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography align="center">
              Curabitur sed iaculis dolor, non congue ligula. Maecenas imperdiet
              ante eget hendrerit posuere urna libero.
            </Typography>
          </Grid>
          <Grid item container xs={12} justify="center">
            <CheckIcon />
            <Typography component="span">Aliquam fringilla aliquam</Typography>
          </Grid>
          <Grid item container xs={12} justify="center">
            <CheckIcon />
            <Typography component="span">Proin bibendum feugiat</Typography>
          </Grid>
          <Grid item container xs={12} justify="center">
            <CheckIcon />
            <Typography component="span">Curabitur ut egestas</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BusinessCard;
