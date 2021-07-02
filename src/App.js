import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import HomePage from "./components/Pages/HomePage";
import AboutUsPage from "./components/Pages/AboutUsPage";
const App = () => {
  return (
    <>
      <NavBar></NavBar>
      <HomePage />
      <AboutUsPage />
      {/* <Footer /> */}
    </>
  );
};

export default App;
