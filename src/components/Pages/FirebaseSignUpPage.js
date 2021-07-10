import React, { useState } from "react";
import { Grid, makeStyles, TextField, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: "100vh",
    padding: "40vh 0vh",
  },
  buttonStyle: {
    marginTop: "5vh",
  },
}));
const FirebaseSignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className={classes.root} onSubmit={(e) => handleSubmit(e)}>
      <Grid container>
        <Grid container item xs={12} justify="center">
          <TextField
            id="standard-basic"
            label="Email"
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Grid>
        <Grid container item xs={12} justify="center">
          <TextField
            id="standard-basic"
            type="password"
            label="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Grid>
        <Grid container item xs={12} justify="center">
          <TextField id="standard-basic" label="Confirm Password" />
        </Grid>
        <Grid container item xs={12} justify="center">
          <Button
            variant="contained"
            type="submit"
            className={classes.buttonStyle}
          >
            Sign Up
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default FirebaseSignUpPage;
