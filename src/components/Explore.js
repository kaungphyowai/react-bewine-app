import { Button ,makeStyles, Grid, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(theme => (
    {
        root: {
            minHeight: "100vh",
            backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/bg1.jpg"})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "50% 50%",
            [theme.breakpoints.up("sm")]:{
              minHeight: "100",
              backgroundSize: "cover",
              backgroundPosition: "50% 50%",
              position: "relative",
              width: "100%",
              height: "100%",
            }
        },
    }
))
const Explore = () => {
    const classes = useStyles();
    return (
       <>
        <Grid container className={classes.root} alignContent="center" >
          {/* first padding */}
          <Grid item xs={2} sm={2} />
          {/* Content */}
          <Grid  item container xs={8} sm={4} spacing={5}>
            {/* Text */}
            <Grid item container xs={12} sm={12}>
            
            <Typography  color="secondary" variant="h3">
                    Explore our wide variety of wine
            </Typography>
            </Grid>
            {/* Button */}
            <Grid  item container xs ={12} sm={12}>
              <Grid item container xs={12} sm={7}>
                <Grid item container xs={6} sm={6}>
                <Button variant="contained" >Book A Tour</Button>
                  </Grid>
                  <Grid item container xs={6} sm={6}>
                <Button variant="contained">Our Wines</Button> 
                  </Grid>
              </Grid>
              {/* Button left padding */}
              <Grid item xs={2} sm={5} />
            </Grid>
          </Grid>
          {/* last padding */}
          <Grid item xs={2} sm={6} />
        </Grid>
       </>
    )
}

export default Explore
