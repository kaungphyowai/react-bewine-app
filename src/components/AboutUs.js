import { makeStyles, Grid, Typography, Box, Button } from '@material-ui/core'
import React from 'react'
import NumberContent from './NumberContent';


const AboutUs = () => {
    return (
        <>
    <Box style={{minWidth: "100%" , backgroundColor: "#024126",}} pt={10}>
        <Grid container>
            {/* First Padding */}
            <Grid item xs={0}  sm={3} />
            {/* Content */}
            <Grid item container xs={12} sm={6} justify="center"> 
                <Grid item container xs={12} sm={12}  justify="center">
                    <Typography>
                        About Us
                    </Typography>
                </Grid>
                <Grid item container xs={12} sm={12}  justify="center">
                    <Typography>
                    HISTORY AND TRADITION OF OUR VINEYARDS
                    </Typography>
                </Grid>
                {/* Image and text */}
                <Grid container xs={12} sm={12}  spacing={5}>
                    <Grid item container xs={12}  sm={6} justify="flex-end">
                        <img src={process.env.PUBLIC_URL + "/assets/1897.jpg"} style={{width: "100%"}}/>
                    </Grid>
                    <Grid item container xs={12}  sm={6} justify="flex-start">
                        <Typography>
                        Mauris rhoncus orci in imperdiet placerat. Vestibulum euismod nisl suscipit ligula volutpat, a feugiat urna maximus. Cras massa nibh, tincidunt.
                        </Typography>
                        <Typography>
                        Donec et nibh maximus, congue est eu, mattis nunc. Praesent ut quam quis quam venenatis fringilla. Morbi vestibulum id tellus commodo mattis. Aliquam erat volutpat. Aenean accumsan id mi nec semper. Lorem ipsum.
                        </Typography>
                        <Typography>
                        Duis ultricies malesuada leo vel aliquet. Curabitur rutrum porta dui eget mollis. Nullam lacinia dictum auctor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque
                        </Typography>
                        <Typography>
                        Penatibus et magnis dis parturient montes.
                        </Typography>
                    </Grid>
                </Grid>
                {/* Number Content */}
                <Box pt={5}>
                    <Grid item container xs={12} sm={12}  spacing={6} justify="center">
                        <NumberContent/>
                        <NumberContent/>
                        <NumberContent/>
                        <NumberContent/>
                    </Grid>
                </Box>
                {/* Buttons */}
                <Box pt={10} pb={10} style={{minWidth: "100%"}}>
                    <Grid container xs={12} sm={12}  justify="center" spacing={1}>
                        <Grid item>
                            <Button variant="contained" color="secondary">
                            ABOUT US
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color="secondary">
                            OUR WINES
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
            {/* Last Padding */}
            <Grid item xs={0}  sm={3} />
        </Grid>
    </Box>
        {/* Image */}
    <img src={process.env.PUBLIC_URL + "/assets/joint1.png"} style={{width: "100%", backgroundSize: "cover", backgroundColor: "#024126"}}/>
        </>
    )
}

export default AboutUs