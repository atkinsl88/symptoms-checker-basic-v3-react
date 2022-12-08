import React from "react";

const Text = () => (
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
);

export default Text;
