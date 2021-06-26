import { makeStyles, Grid, Typography } from '@material-ui/core'
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
        </Grid>
    )
}

export default AboutUs
