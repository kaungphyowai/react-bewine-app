import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import HomePage from "./components/Pages/HomePage";
import AboutUsPage from "./components/Pages/AboutUsPage";
import JoinNow from "./components/HomeComponent/JoinNow";
import Wines from "./components/Pages/Wines";
const App = () => {
  return (
    <>
      <NavBar></NavBar>
      {/* <HomePage /> */}
      {/* <AboutUsPage /> */}
      <Wines />
      <JoinNow />
      <Footer />
    </>
  );
};

export default App;
