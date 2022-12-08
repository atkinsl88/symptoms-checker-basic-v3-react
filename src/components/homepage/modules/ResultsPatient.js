import React from "react";

const ResultsPatient = () => (
  <section className="contents-screen" id="results-patient">
    <div className="contents-screen-contents container">
      <div className="contents-text results">
        <h1>Find out how GSK can help</h1>
        <p>
          Recognising your symptoms is an important step in checking if you may
          have iron deficiency.
        </p>
        <p>
          If you chose one or more symptoms that could relate to you being low
          in iron, don’t worry, there’s plenty you can do to relieve iron
          deficiency and its impacts on your life.
        </p>
        <p>
          To get the most out of the appointment with your Doctor, submit your
          details to receive the results of your symptom selection and our free
          Patient Discussion guide.
        </p>
        <p>
          If you didn’t choose any symptoms but you’re still concerned that you,
          or someone you know, may be iron deficient, please speak to your
          doctor to request a dedicated blood test.
        </p>
      </div>
      <div className="contents-form-large">
        <h3>Enter your details</h3>
        <form action="/action_page.php">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <div>
            <input type="checkbox" />
            <label className="checkbox" for="xxx">
              I agree that by submitting this form, I accept the website’s terms
              of use.
            </label>
          </div>
          <div>
            <input type="checkbox" />
            <label className="checkbox" for="xxx">
              Sign up to GSK email newsletter.
            </label>
          </div>
          <a
            href="#thankyou"
            className="primary"
            onclick="xxx"
            id="feel-button"
          >
            Submit
          </a>
        </form>
      </div>
    </div>
  </section>
);

export default ResultsPatient;
