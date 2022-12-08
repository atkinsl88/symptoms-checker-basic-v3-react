import React from "react";
import startImg from "../../../assets/start-screen-image.png";

const StartScreen = () => (
  <section className="contents-screen">
    <div className="contents-screen-contents container">
      <div className="contents-text">
        <h1>Symptom checker</h1>
        <p>
          Iron deficiency is more common than you think, but symptoms are often
          ignored or overlooked.
        </p>
        <div className="contents-text-button">
          <a
            href="#symptoms-you-feel"
            className="primary"
            onclick="xxx"
            id="patientButton"
          >
            I'm a Patient
          </a>
          <a
            href="#symptoms-you-feel"
            className="secondary doctor-btn"
            onclick="xxx"
            id="doctorButton"
          >
            I'm a Doctor
          </a>
        </div>
      </div>
      <div className="contents-image">
        <img src={startImg}></img>
      </div>
    </div>
  </section>
);

export default StartScreen;
