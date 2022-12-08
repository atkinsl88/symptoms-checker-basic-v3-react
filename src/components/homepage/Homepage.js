import React from "react";

import StartScreen from "./modules/StartScreen";
import SymptomsFeel from "./modules/SymptomsFeel";
import SymptomsSee from "./modules/SymptomsSee";
import SymptomsSlow from "./modules/SymptomsSlow";
import ResultsPatient from "./modules/ResultsPatient";
import ResultsDoctor from "./modules/ResultsDoctor";
import ThankYou from "./modules/ThankYou";

const Home = () => {
  return (
    <>
      <StartScreen />
      <SymptomsFeel />
      <SymptomsSee />
      <SymptomsSlow />
      <ResultsPatient />
      <ResultsDoctor />
      <ThankYou />
    </>
  );
};

export default Home;
