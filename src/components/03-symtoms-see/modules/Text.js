import React from "react";

import Slider from "../../03-symtoms-see/modules/Slider";

const Text = () => (
  <div className="contents-text">
    <p className="steps">Step 2 of 3</p>
    <h1 className="title">Select the symptoms you see</h1>
    <p className="intro">Is your body showing you that you’re low in iron?</p>
    <p className="apply">Select all that apply:</p>
    <div className="contents-form">
      <form action="/action_page.php">
        <div className="contents-form-fields">
          <div className="form-field">
            <input type="checkbox" id="xxx" name="xxx" value="Hair Loss<" />
            <label for="xxx">Hair Loss</label>
          </div>
          <div className="form-field">
            <input type="checkbox" id="xxx" name="xxx" value="Paleness" />
            <label for="xxx">Paleness</label>
          </div>
          <div className="form-field">
            <input type="checkbox" id="xxx" name="xxx" value="Easy Bruising" />
            <label for="xxx">Easy Bruising</label>
          </div>
          <div className="form-field">
            <input type="checkbox" id="xxx" name="xxx" value="Ulcers" />
            <label for="xxx">Ulcers</label>
          </div>
          <div className="form-field">
            <input type="checkbox" id="xxx" name="xxx" value="Brittle Nails" />
            <label for="xxx">Brittle Nails</label>
          </div>
        </div>
        <div className="contents-text-button">
          <a
            href="#symptoms-slowing-you"
            className="primary"
            onclick="xxx"
            id="feel-button"
          >
            Submit
          </a>
        </div>
      </form>
    </div>
    <Slider />
  </div>
);

export default Text;
