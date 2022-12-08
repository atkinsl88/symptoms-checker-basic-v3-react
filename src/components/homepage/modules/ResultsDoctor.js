import React from "react";

const ResultsDoctor = () => (
  <section className="contents-screen" id="results-doctor">
    <div className="contents-screen-contents container">
      <div className="contents-text results">
        <h1>For Doctors...</h1>
        <p>
          Recognising your patients symptoms is an important step in checking if
          you may have iron deficiency.
        </p>
        <p>
          If you chose one or more symptoms that could relate to you being low
          in iron, don’t worry, there’s plenty you can do to relieve iron
          deficiency and its impacts on your life.
        </p>
        <p>
          To get the most out of the appointment with your Patient, submit their
          details to receive the results of your symptom selection and a free
          Patient Discussion guide.
        </p>
        <p>
          If you didn’t choose any symptoms but you’re still concerned that your
          patient may be iron deficient, please look to advise a dedicated blood
          test.
        </p>
      </div>
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
              I agree that by submitting this form, I accept the website’s terms
              of use on the patients behalf.
            </label>
          </div>
          <a href="#thankyou" className="primary" onclick="xxx" id="feel-button">
            Submit
          </a>
        </form>
      </div>
    </div>
  </section>
);

export default ResultsDoctor;
