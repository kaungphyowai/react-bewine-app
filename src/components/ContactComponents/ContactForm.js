import React from "react";
import { Grid, makeStyles, Box, Button, TextField } from "@material-ui/core";

import SectionTitle2 from "../Components/SectionTitle/SectionTitle2";
const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: "100%",
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
  inputStyle: {
    color: "#000",
    width: "100%",
    padding: "10px 10px",
    border: "none",
    [theme.breakpoints.up("sm")]: {
      marginRight: "20px",
    },
  },
  textField: {
    marginBottom: "30px",
    [theme.breakpoints.up("sm")]: {
      marginBottom: "10px",
    },
  },
}));
const ContactForm = () => {
  const classes = useStyles();
  return (
    <>
      <Box pt={10} className={classes.root}>
        <Grid container item xs={12}>
          {/* First Padding */}
          <Grid item xs={1} sm={2} />
          {/* Content */}
          <Grid item container xs={10} sm={8}>
            <SectionTitle2
              title="CONTACT FORM"
              LargeTitle="DO YOU HAVE A QUESTION?"
            />
            {/* Your First Name */}
            <Grid item container xs={12} sm={6} className={classes.textField}>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your name"
                className={classes.inputStyle}
              />
            </Grid>
            <Grid item container xs={12} sm={6} className={classes.textField}>
              <input
                type="text"
                id="femail"
                name="email"
                placeholder="Your email"
                className={classes.inputStyle}
              />
            </Grid>
            <Grid item container xs={12} sm={12} className={classes.textField}>
              <input
                type="Subject"
                id="fsubject"
                name="Subject"
                placeholder="Subject"
                className={classes.inputStyle}
              />
            </Grid>
            <Grid item container xs={12} sm={12}>
              <textarea
                id="Message"
                name="Message"
                placeholder="Message"
                className={classes.inputStyle}
                style={{ height: "10vh" }}
              />
            </Grid>
            <Box pt={10} pb={10} style={{ minWidth: "100%" }}>
              <Grid container xs={12} sm={12} justify="center" spacing={1}>
                <Grid item>
                  <Button
                    variant="contained"
                    className={classes.buttonStyle}
                    style={{ backgroundColor: "#62021D" }}
                  >
                    Send a message
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

export default ContactForm;
