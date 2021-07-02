import React from "react";
import { Grid, Box } from "@material-ui/core";
import ImageText from "../Components/ImageText/ImageText";
const History = () => {
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
              imgSrc="/assets/1923.jpg"
              whiteText="Mauris rhoncus orci in imperdiet placerat. Vestibulum euismod nisl
              suscipit ligula volutpat, a feugiat urna maximus. Cras massa nibh,
              tincidunt."
              goldText1="Donec et nibh maximus, congue est eu, mattis nunc. Praesent ut quam
              quis quam venenatis fringilla. Morbi vestibulum id tellus commodo
              mattis. Aliquam erat volutpat. Aenean accumsan id mi nec semper.
              Lorem ipsum."
              goldText2="Duis ultricies malesuada leo vel aliquet. Curabitur rutrum porta dui
              eget mollis. Nullam lacinia dictum auctor. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Orci varius natoque"
              goldText3="Penatibus et magnis dis parturient montes."
            />
            <ImageText
              imgSrc="/assets/1897.jpg"
              whiteText="Mauris rhoncus orci in imperdiet placerat. Vestibulum euismod nisl
              suscipit ligula volutpat, a feugiat urna maximus. Cras massa nibh,
              tincidunt."
              goldText1="Donec et nibh maximus, congue est eu, mattis nunc. Praesent ut quam
              quis quam venenatis fringilla. Morbi vestibulum id tellus commodo
              mattis. Aliquam erat volutpat. Aenean accumsan id mi nec semper.
              Lorem ipsum."
              goldText2="Duis ultricies malesuada leo vel aliquet. Curabitur rutrum porta dui
              eget mollis. Nullam lacinia dictum auctor. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Orci varius natoque"
              goldText3="Penatibus et magnis dis parturient montes."
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

export default History;
