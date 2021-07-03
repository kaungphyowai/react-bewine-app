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
        <Route exact path="/react-bewine-app/">
          <HomePage />
        </Route>
        <Route exact path="/react-bewine-app/about">
          <AboutUsPage />
        </Route>
        <Route exact path="/react-bewine-app/wines">
          <Wines />
        </Route>
        <Route exact path="/react-bewine-app/contact">
          <ContactPage />
        </Route>
      </Switch>

      <JoinNow />
      <Footer />
    </Router>
  );
};

export default App;
