import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import HomePage from "./components/Pages/HomePage";
import AboutUsPage from "./components/Pages/AboutUsPage";
import JoinNow from "./components/HomeComponent/JoinNow";
import Wines from "./components/Pages/Wines";
import ContactPage from "./components/Pages/ContactPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FirebaseSignInAnonymously from "./components/Pages/FirebaseSignInAnonymously";
import firebase from "firebase/app";
import "firebase/auth";
import { FirebaseAuthProvider } from "@react-firebase/auth";
import config from "./firebaseCredential";
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
        <Route exact path="/react-bewine-app/firebase">
          <FirebaseAuthProvider firebase={firebase} {...config}>
            <FirebaseSignInAnonymously />
          </FirebaseAuthProvider>
        </Route>
      </Switch>

      {/* <JoinNow />
      <Footer /> */}
    </Router>
  );
};

export default App;
