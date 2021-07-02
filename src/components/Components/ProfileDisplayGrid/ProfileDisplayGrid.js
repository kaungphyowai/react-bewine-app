import React from "react";
import { Grid, Typography, Box, Button, makeStyles } from "@material-ui/core";
import BusinessCard from "../../HomeComponent/BusinessCard";

const useStyles = makeStyles((theme) => ({
  subtitle: {
    color: "#ead4c0",
    fontWeight: "bold",
    fontSize: "small",
    marginBottom: "30px",
  },
  title: {
    color: "#fff",
    fontWeight: "bolder",
    textAlign: "center",
    fontSize: "250%",
    marginBottom: "30px",
    [theme.breakpoints.up("sm")]: {
      fontSize: "300%",
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
const ProfileDisplayGrid = ({
  mainTitle1,
  mainTitle2FirstLine,
  mainTitle2SecondLine,
  cardTitleFirstLine1,
  cardTitleSecondLine1,
  cardsubtitle1,
  cardimage1,
  carddescription1,
  cardTitleFirstLine2,
  cardTitleSecondLine2,
  cardsubtitle2,
  cardimage2,
  carddescription2,
  cardTitleFirstLine3,
  cardTitleSecondLine3,
  cardsubtitle3,
  cardimage3,
  carddescription3,
  buttonDisplay = true,
  checkedDisplay = true,
}) => {
  const classes = useStyles();
  return (
    <>
      <Box style={{ minWidth: "100%", backgroundColor: "#024126" }} pt={10}>
        <Grid container style={{ backgroundColor: "#024126" }}>
          {/* First Padding */}
          <Grid item xs={1} sm={3} />
          {/* Content */}
          <Grid item container xs={10} sm={6}>
            <Grid item container xs={12} sm={12} justify="center">
              <Typography className={classes.subtitle}>{mainTitle1}</Typography>
            </Grid>

            <Grid item container xs={12} sm={12} justify="center">
              <Typography className={classes.title}>
                {mainTitle2FirstLine}
                <span style={{ color: "#80a093", display: "block" }}>
                  {mainTitle2SecondLine}
                </span>
              </Typography>
            </Grid>
            <Grid item container spacing={3}>
              <BusinessCard
                titleFirstLine={cardTitleFirstLine1}
                titleSecondLine={cardTitleSecondLine1}
                subtitle={cardsubtitle1}
                image={cardimage1}
                description={carddescription1}
                checkedDisplay={checkedDisplay}
              />
              <BusinessCard
                titleFirstLine={cardTitleFirstLine2}
                titleSecondLine={cardTitleSecondLine2}
                subtitle={cardsubtitle2}
                image={cardimage2}
                description={carddescription2}
                checkedDisplay={checkedDisplay}
              />
              <BusinessCard
                titleFirstLine={cardTitleFirstLine3}
                titleSecondLine={cardTitleSecondLine3}
                subtitle={cardsubtitle3}
                image={cardimage3}
                description={carddescription3}
                checkedDisplay={checkedDisplay}
              />
            </Grid>
            {buttonDisplay ? (
              <Box pt={10} pb={10} style={{ minWidth: "100%" }}>
                <Grid container xs={12} sm={12} justify="center" spacing={1}>
                  <Grid item>
                    <Button
                      variant="contained"
                      className={classes.buttonStyle}
                      style={{ backgroundColor: "#62021D" }}
                    >
                      ABOUT US
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      className={classes.buttonStyle}
                      style={{ backgroundColor: "#80A094" }}
                    >
                      OUR WINES
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            ) : (
              <></>
            )}
          </Grid>
          {/* Last Padding */}
          <Grid item xs={1} sm={3} />
        </Grid>
      </Box>
      {/* Image */}
      <img
        src={process.env.PUBLIC_URL + "/assets/joint3.png"}
        style={{
          width: "100%",
          backgroundSize: "cover",
          backgroundColor: "#024126",
        }}
      />
    </>
  );
};

export default ProfileDisplayGrid;
