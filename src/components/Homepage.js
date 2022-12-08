import React from "react";

import StartScreen from "./01-start-screen/StartScreen";
import SymptomsFeel from "./02-symtoms-feel/SymptomsFeel";
import SymptomsSee from "./03-symtoms-see/SymptomsSee";
import SymptomsSlow from "./04-symtoms-slow/SymptomsSlow";
import ResultsPatient from "./05-results-patient/ResultsPatient";
import ResultsDoctor from "./06-results-doctor/ResultsDoctor";
import ThankYou from "./07-thank-you/ThankYou";

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
