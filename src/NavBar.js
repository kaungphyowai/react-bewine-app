import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link, BrowserRouter as Router } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  linkStyle: {
    color: "#f5e8dc",
  },
  paper: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
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
          <Link to="/react-bewine-app/">
            <Button className={classes.linkStyle}>HOME</Button>
          </Link>
          <Link to="/react-bewine-app/about">
            <Button className={classes.linkStyle}>ABOUT US</Button>
          </Link>
          <Link to="/react-bewine-app/wines">
            <Button className={classes.linkStyle}>WINES</Button>
          </Link>
          <Link to="/react-bewine-app/contact">
            <Button className={classes.linkStyle}>CONTACT</Button>
          </Link>
          <Link to="/react-bewine-app/firebase">
            <Button className={classes.linkStyle}>FIREBASE</Button>
          </Link>
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
    </>
  );
};

export default NavBar;
