import { Grid, makeStyles, Typography, Box, Button } from "@material-ui/core";
import SectionTitle2 from "../SectionTitle/SectionTitle2";
import React from "react";
import ProductColumn from "./ProductColumn";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/bg3.png"})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundColor: "#f2e8df",
    [theme.breakpoints.up("sm")]: {
      backgroundPosition: "top left",
    },
  },
  subtitle: {
    color: "#80a093",
    fontWeight: "bold",
    fontSize: "small",
    marginBottom: "30px",
  },
  title: {
    color: "#024126",
    fontSize: "225%",
    fontWeight: "bolder",
    textAlign: "center",
    marginBottom: "70px",
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
const ProductDisplayGridLayout = ({
  imgSrc1,
  imgSrc2,
  imgSrc3,
  imgSrc4,
  title1,
  title2,
  title3,
  title4,
  subtitle1,
  subtitle2,
  subtitle3,
  subtitle4,
}) => {
  const classes = useStyles();
  return (
    <>
      <Box pt={10} className={classes.root}>
        <Grid container>
          {/* First Padding */}
          <Grid item xs={1} sm={2} />
          {/* Content */}
          <Grid item container xs={10} sm={8}>
            <SectionTitle2
              title="HOW WE WORK"
              LargeTitle="THE BEST INGREDIENTS"
            />
            <Grid container spacing={4} sm={12}>
              <ProductColumn
                title={title1}
                image={imgSrc1}
                description={subtitle1}
              />
              <ProductColumn
                title={title2}
                image={imgSrc2}
                description={subtitle2}
              />
              <ProductColumn
                title={title3}
                image={imgSrc3}
                description={subtitle3}
              />
              <ProductColumn
                title={title4}
                image={imgSrc4}
                description={subtitle4}
              />
            </Grid>
            <Box pt={10} pb={10} style={{ minWidth: "100%" }}>
              <Grid container xs={12} sm={12} justify="center" spacing={1}>
                <Grid item>
                  <Button
                    variant="contained"
                    className={classes.buttonStyle}
                    style={{ backgroundColor: "#053C23" }}
                  >
                    SEE OUR VINEYARDS
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    className={classes.buttonStyle}
                    style={{ backgroundColor: "#779589" }}
                  >
                    OUR WINES
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          {/* Last Padding */}
          <Grid item xs={1} sm={2} />
        </Grid>
      </Box>
      {/* Image */}
      <img
        src={process.env.PUBLIC_URL + "/assets/joint2.png"}
        style={{
          width: "100%",
          backgroundSize: "cover",
          backgroundColor: "#024126",
        }}
      />
    </>
  );
};

export default ProductDisplayGridLayout;
