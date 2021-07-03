import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import HomePage from "./components/Pages/HomePage";
import AboutUsPage from "./components/Pages/AboutUsPage";
import JoinNow from "./components/HomeComponent/JoinNow";
import Wines from "./components/Pages/Wines";
import ContactPage from "./components/Pages/ContactPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <NavBar></NavBar>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/about">
          <AboutUsPage />
        </Route>
        <Route exact path="/wines">
          <Wines />
        </Route>
        <Route exact path="/contact">
          <ContactPage />
        </Route>
      </Switch>

      <JoinNow />
      <Footer />
    </Router>
  );
};

export default App;
