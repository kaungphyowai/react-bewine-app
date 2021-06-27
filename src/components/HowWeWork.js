import { Grid, makeStyles, Typography, Box, Button } from '@material-ui/core'

import React from 'react'
import Ingredients from './Ingredients';
const useStyles = makeStyles(theme => (
    {
        root: {
            minHeight: "100vh",
            backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/bg3.png"})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundColor: "#f2e8df"
        },
    }
))
const HowWeWork = () => {
    const classes = useStyles();
    return (
        <>
        <Grid container className={classes.root}>
            {/* First Padding */}
            <Grid item xs={1} sm={2}/>
            {/* Content */}
            <Grid item container xs={10} sm={8}>
                <Grid item container xs={12} sm={12} justify="center">
                    <Typography>
                        HOW WE WORK
                    </Typography>
                </Grid>
                <Grid item container xs={12} sm={12} justify="center">
                    <Typography>
                        THE BEST INGREDIENTS
                    </Typography>
                </Grid>
                <Grid container spacing={4} sm={12}>
               <Ingredients /> 
               <Ingredients /> 
               <Ingredients /> 
               <Ingredients /> 
                </Grid>
               <Box pt={10} pb={10} style={{minWidth: "100%"}}>
                    <Grid container xs={12} sm={12}  justify="center" spacing={1}>
                        <Grid item>
                            <Button variant="contained" color="secondary">
                            SEE OUR VINEYARDS
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
            <Grid item xs={1} sm={2}/>
        </Grid>
          {/* Image */}
    <img src={process.env.PUBLIC_URL + "/assets/joint2.png"} style={{width: "100%", backgroundSize: "cover", backgroundColor: "#024126"}}/>
    </>
    )
}

export default HowWeWork
