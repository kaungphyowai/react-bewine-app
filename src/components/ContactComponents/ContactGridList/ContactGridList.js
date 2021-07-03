import React from "react";
import InfoTextColumn from "./InfoTextColumn";
import { Grid, Box } from "@material-ui/core";
const ContactGridList = () => {
  return (
    <>
      <Box style={{ minWidth: "100%", backgroundColor: "#024126" }} pt={10}>
        <Grid container>
          {/* First Padding */}
          <Grid item xs={1} sm={2} />
          {/* Content */}

          <Grid item container xs={10} sm={8} spacing={10}>
            <InfoTextColumn
              title="PHONE"
              subtitle="OUR HELP DESK IS AVAILABLE MON TO SAT 08:00 AM - 10:00 PM"
              contactInfo="+61 (0) 383 766 284"
            />
            <InfoTextColumn
              title="E-MAIL"
              subtitle="CUSTOMER SERVICE AND ONLINE ORDERS"
              contactInfo="noreply@envato.com"
            />
            <InfoTextColumn
              title="ADDRESS"
              subtitle="VISITS ARE POSSIBLE ONLY AFTER RESERVATION"
              contactInfo="Level 13, 2 Elizabeth St,
              Melbourne, Victoria 3000,
              Australia"
            />
            <InfoTextColumn
              title="MEDIA"
              subtitle="OUR PROFILES IN SOCIAL MEDIA"
              contactInfo="Facebook
              YouTube"
            />
          </Grid>
          {/* Last Padding */}
          <Grid item xs={1} sm={2} />
        </Grid>
      </Box>
      {/* Image */}
      <img
        src={process.env.PUBLIC_URL + "/assets/joint1.png"}
        style={{
          width: "100%",
          backgroundSize: "cover",
          backgroundColor: "#024126",
        }}
      />
    </>
  );
};

export default ContactGridList;
