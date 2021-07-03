import React from "react";
import { Box, Grid } from "@material-ui/core";
import ImageText from "../Components/ImageText/ImageText";
import TextColumn2 from "../Components/ImageText/TextColumn2";
const WineCategories = () => {
  return (
    <>
      <Box style={{ minWidth: "100%", backgroundColor: "#024126" }} pt={10}>
        <Grid container>
          {/* First Padding */}
          <Grid item xs={0} sm={2} />
          {/* Content */}
          <Grid item container xs={12} sm={8} justify="center">
            {/* Image and text */}
            <ImageText
              imgSrc="/assets/bottle1.jpg"
              textColumn={
                <TextColumn2
                  smallTitle="NULLAM WISI"
                  LargeTitleWhiteLine="DAPIBUS"
                  LargeTItleFadedLine="RISUS"
                  whiteText1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris dolor, gravida a varius blandit, auctor eget purus penatibus et magnis dis parturien."
                  whiteText2="Nullam lacinia dictum auctor. Class aptent taciti sociosqu ad litora torquent per conubia."
                />
              }
              imgRight={false}
            />
            <ImageText
              imgSrc="/assets/bottle2.jpg"
              textColumn={
                <TextColumn2
                  smallTitle="ANTE SODALES"
                  LargeTitleWhiteLine="ACCUMSAN"
                  LargeTItleFadedLine="CONGUE"
                  whiteText1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris dolor, gravida a varius blandit, auctor eget purus penatibus et magnis dis parturien."
                  whiteText2="Nullam lacinia dictum auctor. Class aptent taciti sociosqu ad litora torquent per conubia."
                />
              }
            />
            <ImageText
              imgSrc="/assets/bottle3.jpg"
              textColumn={
                <TextColumn2
                  smallTitle="CUBILIA CURAE"
                  LargeTitleWhiteLine="PORTTITOR"
                  LargeTItleFadedLine="EROS"
                  whiteText1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris dolor, gravida a varius blandit, auctor eget purus penatibus et magnis dis parturien."
                  whiteText2="Nullam lacinia dictum auctor. Class aptent taciti sociosqu ad litora torquent per conubia."
                />
              }
              imgRight={false}
            />
          </Grid>
          {/* Last Padding */}
          <Grid item xs={0} sm={2} />
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

export default WineCategories;
