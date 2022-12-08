import React from "react";

const Form = () => (
  <div className="contents-form-large">
    <h3>Schedule an onsite appointment</h3>
    <form action="/action_page.php">
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Email" />
      <label for="session">Date:</label>
      <input type="date" id="session" name="session" />
      <label for="appt">Time:</label>
      <input type="time" id="appt" name="appt" />
      <div>
        <input type="checkbox" />
        <label className="checkbox" for="xxx">
          I agree that by submitting this form, I accept the website’s terms of
          use on the patients behalf.
        </label>
      </div>
      <a href="#thankyou" className="primary" onclick="xxx" id="feel-button">
        Submit
      </a>
    </form>
  </div>
);

export default Form;
