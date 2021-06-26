import { Box, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(theme => (
    {
    root: {
        paddingTop: "40",
        justifyContent: "center",
        width: "70%",
        marginLeft: "auto",
        marginRight: "auto"
        // [theme.breakpoints.up("sm")]:{
        //     backgroundSize: "cover",
        //     backgroundPosition: "50% 50%",
        //     position: "relative",
        //     width: "100%",
        //     height: "100%",
        //   }
    },
}))
const QuickContact = () => {
    const classes = useStyles();
    return (
        <Box style={{minWidth: "100%" , backgroundColor: "#024126",}} pt={5}>

        <Grid container xs={12} className={classes.root}>
            {/* First Padding */}
            <Grid item xs={0} sm={2.5}/>
            {/* Facebook */}
           <Grid item container xs={12} sm={1} justify="center">
               <Typography>
                   facebook
               </Typography>
           </Grid>
           {/* padding between facebook and enjoy */}
            <Grid item xs={0} sm= {1.5} />
            {/* Enjoy passion */}
           <Grid item container xs={12} sm={2} justify="center">
               <Typography>
               Enjoy your passion for wine with us
               </Typography>
           </Grid>
           <Grid item xs={0} sm={1.5} />
           <Grid item container xs={12} sm={1} justify="center">
               <Typography>
               play video
               </Typography>
           </Grid>
           {/* Last Padding */}
           <Grid item xs={0} sm={2.5}/>
        </Grid>
        </Box>
    )
}

export default QuickContact
