import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
const useStyles = makeStyles(theme => ({
    title: {
        flexGrow: 1,
        textAlign: 'center',
    },
    paper: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(16),
            height: theme.spacing(16),
        },

    },
    wrap: {
        display: "block",
    },
    offset: theme.mixins.toolbar,
}));


const NavBar = () => {
    const classes = useStyles();
    return (
        <>
            <AppBar position="fixed">
            <Toolbar>

                <Typography variant="h6" className={classes.title}>
                        Bewine
                    </Typography>
                    <Button >Login</Button>
            </Toolbar>
            </AppBar>
            <div className={classes.offset} />
        </>
    );
}

export default NavBar
