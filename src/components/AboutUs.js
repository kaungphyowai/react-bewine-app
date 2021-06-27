import { makeStyles, Grid, Typography, Box } from '@material-ui/core'
import React from 'react'


const useStyles = makeStyles(theme => ({
    root: {
       
        backgroundColor: "#024126",
        marginTop: "40"
    },
    container: {
      paddingLeft: "20",  
    }
}))
const AboutUs = () => {
    const classes = useStyles();
    return (
        <Box style={{minWidth: "100%" , backgroundColor: "#024126",}} pt={10}>

        <Grid container className={classes.root} >
            <Grid item container xs={12} justify="center">
                <Typography>
                    About Us
                </Typography>
            </Grid>
            <Grid item container xs={12} justify="center">
                <Typography>
                HISTORY AND TRADITION OF OUR VINEYARDS
                </Typography>
            </Grid>

            <Grid item xs={6}>
                <Box pl={100}>
                <img src={process.env.PUBLIC_URL + "/assets/1897.jpg"} />

                </Box>
            </Grid>
        </Grid>
        </Box>
    )
}

export default AboutUs
