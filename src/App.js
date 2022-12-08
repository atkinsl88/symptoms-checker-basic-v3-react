import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Navigation from "./components/common/Navigation";
import Footer from "./components/common/Footer";
import Homepage from "./components/homepage/Homepage";

function App() {
  return (
    <>
      <Navigation />
        <Homepage />
      <Footer />
    </>
  );
}

export default App;
