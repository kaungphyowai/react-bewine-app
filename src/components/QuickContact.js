import { Box, Grid, Typography } from '@material-ui/core'
import React from 'react'

const QuickContact = () => {
    return (
        <Box style={{minWidth: "100%" , backgroundColor: "#024126",}} pt={5}>

        <Grid container >
            {/* First Padding */}
            <Grid item xs={0} sm={3} justify="center"/>
            {/* Facebook */}
           <Grid item container xs={12} sm={1} justify="center">
               <Typography>
                   facebook
               </Typography>
           </Grid>
           {/* padding between facebook and enjoy */}
            <Grid item xs={0} sm= {1} />
            {/* Enjoy passion */}
           <Grid item container xs={12} sm={2} justify="center">
               <Typography>
               Enjoy your passion for wine with us
               </Typography>
           </Grid>
           <Grid item xs={0} sm={1} />
           <Grid item container xs={12} sm={1} justify="center">
               <Typography>
               play video
               </Typography>
           </Grid>
           {/* Last Padding */}
           <Grid item xs={0} sm={3}/>
        </Grid>
        </Box>
    )
}

export default QuickContact
