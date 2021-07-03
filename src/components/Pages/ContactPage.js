import React from "react";
import ContactPoster from "../ContactComponents/ContactPoster";
import { Grid } from "@material-ui/core";
import ContactGridList from "../ContactComponents/ContactGridList/ContactGridList";
import ContactForm from "../ContactComponents/ContactForm";
import WineTasting from "../ContactComponents/WineTasting";
const ContactPage = () => {
  return (
    <>
      <Grid container direction="column">
        <Grid item container>
          <ContactPoster />
        </Grid>
        <Grid item container>
          <ContactGridList />
        </Grid>
        <Grid item container>
          <ContactForm />
        </Grid>
        <Grid item container>
          <WineTasting />
        </Grid>
      </Grid>
    </>
  );
};

export default ContactPage;
