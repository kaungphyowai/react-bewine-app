import { Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: "#024126",
        flexGrow: 1,
    }
}))
const QuickContact = () => {
    const classes = useStyles();
    return (
        <Grid className={classes.root}>
            <Grid item xs={2.5} sm={2.5} />
            <Grid item container xs={7} sm={7}>
                <Typography >
                    Hello World
                </Typography>
            </Grid> 
            <Grid item xs={2.5} sm={2.5} /> 
        </Grid>
    )
}

export default QuickContact
