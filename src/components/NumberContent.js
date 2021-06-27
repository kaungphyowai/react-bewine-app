import React from 'react'
import { Grid, Typography } from '@material-ui/core'
const NumberContent = () => {
    return (
        <Grid item container direction="column" xs={12} sm={3} spacing={2} >
                        <Grid container item xs={12} justify="center">
                            <Typography variant="h1" color="secondary">
                                124
                            </Typography>
                        </Grid>
                        <Grid item container justify="center"> 
                            <Typography variant="h7" color="secondary" align="center">
                            ALIQUAM ERAT IPSUM
                            </Typography>
                        </Grid>
                        <Grid item container justify="center">
                            <Typography variant="h7" color="secondary" align="center">
                            Fusce ut velit laoreet, tempus arcu eu, molestie tortor. Nam vel justo cursus faucibus.
                            </Typography>
                        </Grid>
                    </Grid>
    )
}

export default NumberContent
