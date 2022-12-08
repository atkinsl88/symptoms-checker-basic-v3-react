import React from "react";
import "./App.css";

import Navigation from "./components/common/Navigation";
import Footer from "./components/common/Footer";
import Homepage from "./components/Homepage";

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
