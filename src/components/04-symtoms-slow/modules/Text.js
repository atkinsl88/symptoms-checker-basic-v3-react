import React from "react";

import Slider from "../modules/Slider";

const Text = () => (
  <div className="contents-text">
    <p className="steps">Step 3 of 3</p>
    <h1 className="title">Select the symptoms slowing you down</h1>
    <p className="intro">
      Do you feel constantly worn out, with a series of additional, seemingly
      unrelated, symptoms?
    </p>
    <p className="apply">Select all that apply:</p>
    <div className="contents-form">
      <form action="/action_page.php">
        <div className="contents-form-fields">
          <div className="form-field">
            <input type="checkbox" id="xxx" name="xxx" value="Short Breath" />
            <label for="xxx">Short Breath</label>
          </div>
          <div className="form-field">
            <input type="checkbox" id="xxx" name="xxx" value="Headaches" />
            <label for="xxx">Headaches</label>
          </div>
          <div className="form-field">
            <input type="checkbox" id="xxx" name="xxx" value="Loss of Energy" />
            <label for="xxx">Loss of Energy</label>
          </div>
          <div className="form-field">
            <input type="checkbox" id="xxx" name="xxx" value="Loss of Libido" />
            <label for="xxx">Loss of Libido</label>
          </div>
          <div className="form-field">
            <input type="checkbox" id="xxx" name="xxx" value="Irritability" />
            <label for="xxx">Irritability</label>
          </div>
        </div>
        <div className="contents-text-button">
          <a href="#" className="primary" onclick="getMychoice()" id="myChoice">
            Submit
          </a>
        </div>
      </form>
    </div>
    <Slider />
  </div>
);

export default Text;
