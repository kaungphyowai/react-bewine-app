import React from "react";
import { Button, Grid } from "@material-ui/core";
import { IfFirebaseAuthed, IfFirebaseUnAuthed } from "@react-firebase/auth";
import firebase from "firebase";
const FirebaseSignInAnonymously = () => {
  return (
    <Grid container xs={12}>
      <Grid item xs={6}>
        <Button
          onClick={() => {
            firebase.auth().signInAnonymously();
          }}
        >
          Sign In Anonymously
        </Button>
      </Grid>
      <IfFirebaseAuthed>
        {() => {
          return (
            <Grid item xs={6}>
              <p>You are authed</p>
            </Grid>
          );
        }}
      </IfFirebaseAuthed>
      <IfFirebaseUnAuthed>
        {() => {
          return (
            <Grid item xs={6}>
              <p>You are sign out</p>
            </Grid>
          );
        }}
      </IfFirebaseUnAuthed>
      <Grid item xs={6}>
        <Button
          onClick={() => {
            firebase.auth().signOut();
          }}
        >
          Sign Out
        </Button>
      </Grid>
    </Grid>
  );
};

export default FirebaseSignInAnonymously;
