import { makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(theme => (
    {
        root: {
            minHeight: "100vh",
            backgroundSize: "cover",
            backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/bg1.jpg"})`,
            backgroundSize: "cover",
            repeat: "repeat",
        }
    }
))
const Explore = () => {
    const classes = useStyles();
    return (
       <>
        <div className={classes.root}>
            jsadlfjlasjf;lsajf;sajf;sajf;ldsaj
        </div>
        <div className={classes.root}>
            jsadlfjlasjf;lsajf;sajf;sajf;ldsaj
        </div>
       </>
    )
}

export default Explore
