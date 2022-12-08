import React from "react";

const Form = () => (
  <div className="contents-form-large">
    <h3>Enter your details</h3>
    <form action="/action_page.php">
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Email" />
      <div>
        <input type="checkbox" />
        <label className="checkbox" for="xxx">
          I agree that by submitting this form, I accept the website’s terms of
          use.
        </label>
      </div>
      <div>
        <input type="checkbox" />
        <label className="checkbox" for="xxx">
          Sign up to GSK email newsletter.
        </label>
      </div>
      <a href="#thankyou" className="primary" onclick="xxx" id="feel-button">
        Submit
      </a>
    </form>
  </div>
);

export default Form;
