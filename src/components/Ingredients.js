import React from 'react'
import {Grid, Typography} from '@material-ui/core'
const Ingredients = () => {
    return (
        <Grid item container xs={12} sm={3}>
            <Grid item container xs={12} sm={12} justify="center">
                    <img src={process.env.PUBLIC_URL + "/assets/grape1.png"} style={{width: "70%"} } alt="aa"/>
            </Grid>
            <Grid item container xs={12} sm={12} justify="center">
                    <Typography>
                    ELEIFEND JUSTO BIBENDUM
                    </Typography>
            </Grid>
            <Grid item container xs={12} sm={12}>
                <Typography align="center">
                    Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit amet elementum. Proin bibendum feugiat.
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Ingredients
