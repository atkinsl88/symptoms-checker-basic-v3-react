import React from "react";

import Slider from "../../02-symtoms-feel/modules/Slider";

const Text = () => (
  <div className="contents-text">
    <p className="steps">Step 1 of 3</p>
    <h1 className="title">Select the symptoms you feel</h1>
    <p className="intro">
      Is iron deficiency affecting the way you feel? Select all the symptoms
      relevant to you.
    </p>
    <p className="apply">Select all that apply:</p>
    <div className="contents-form">
      <form action="xxx">
        <div className="contents-form-fields">
          <div className="form-field">
            <input type="checkbox" id="xxx" name="xxx" value="Mental Fatigue" />
            <label for="xxx">Mental Fatigue</label>
          </div>
          <div className="form-field">
            <input
              type="checkbox"
              id="xxx"
              name="xxx"
              value="Cold Intolerance"
            />
            <label for="xxx">Cold Intolerance</label>
          </div>
          <div className="form-field">
            <input type="checkbox" id="xxx" name="xxx" value="Chewing Ice" />
            <label for="xxx">Chewing Ice</label>
          </div>
          <div className="form-field">
            <input type="checkbox" id="xxx" name="xxx" value="Cravings" />
            <label for="xxx">Cravings</label>
          </div>
          <div className="form-field">
            <input type="checkbox" id="xxx" name="xxx" value="Restless Legs" />
            <label for="xxx">Restless Legs</label>
          </div>
        </div>
        <div className="contents-text-button">
          <a
            href="#symptoms-you-see"
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
