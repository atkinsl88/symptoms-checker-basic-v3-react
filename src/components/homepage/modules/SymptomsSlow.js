import React from "react";
import slowImg from "../../../assets/slowing-you-screen-image.png";

const SymptomsSee = () => (
  <section className="contents-screen" id="symptoms-slowing-you">
  <div className="contents-screen-contents container">
    <div className="contents-text">
      <p className="steps">Step 3 of 3</p>
      <h1 className="title">Select the symptoms slowing you down</h1>
      <p className="intro">
        Do you feel constantly worn out, with a series of additional,
        seemingly unrelated, symptoms?
      </p>
      <p className="apply">Select all that apply:</p>
      <div className="contents-form">
        <form action="/action_page.php">
          <div className="contents-form-fields">
            <div className="form-field">
              <input
                type="checkbox"
                id="xxx"
                name="xxx"
                value="Short Breath"
              />
              <label for="xxx">Short Breath</label>
            </div>
            <div className="form-field">
              <input
                type="checkbox"
                id="xxx"
                name="xxx"
                value="Headaches"
              />
              <label for="xxx">Headaches</label>
            </div>
            <div className="form-field">
              <input
                type="checkbox"
                id="xxx"
                name="xxx"
                value="Loss of Energy"
              />
              <label for="xxx">Loss of Energy</label>
            </div>
            <div className="form-field">
              <input
                type="checkbox"
                id="xxx"
                name="xxx"
                value="Loss of Libido"
              />
              <label for="xxx">Loss of Libido</label>
            </div>
            <div className="form-field">
              <input
                type="checkbox"
                id="xxx"
                name="xxx"
                value="Irritability"
              />
              <label for="xxx">Irritability</label>
            </div>
          </div>
          <div className="contents-text-button">
            <a
              href="#"
              className="primary"
              onclick="getMychoice()"
              id="myChoice"
              >Submit</a
            >
          </div>
        </form>
      </div>
      <div className="contents-slider">
        <div className="slideshow-container">
          <div className="slidesSlow fade">
            <h4>Short Breath</h4>
            <p>
              Iron is essential for the movement of oxygen around your body.
              If you get out of breath walking up stairs and can’t exercise
              as much as you’d like, you may be iron deficient.
            </p>
          </div>
          <div className="slidesSlow fade">
            <h4>Headaches</h4>
            <p>
              If you’re getting worse headaches than usual and they’re
              becoming more frequent, speak to your doctor and ask to have
              your iron levels checked.
            </p>
          </div>
          <div className="slidesSlow fade">
            <h4>Loss of Energy</h4>
            <p>
              Feeling tired all the time and not having the energy to do
              simple day-to-day tasks is referred to as fatigue. It’s
              different to the temporary exhaustion you feel from overdoing
              it. Unexplained and persistent fatigue is one of the most
              common symptoms of iron deficiency.
            </p>
          </div>
          <div className="slidesSlow fade">
            <h4>Loss of Libido</h4>
            <p>
              Being low in iron can lead to erectile dysfunction or a lack
              of interest in sex. It’s worth talking to a healthcare
              professional if you’re experiencing an unexplained loss of
              libido.
            </p>
          </div>
          <div className="slidesSlow fade">
            <h4>Irritability</h4>
            <p>
              Constantly struggling against physical and mental exhaustion
              and mood swings from low iron levels feels frustrating and can
              make you more irritable than usual.
            </p>
          </div>
          <a className="prev" onclick="plusSlidesSlow(-1)">&#10094;</a>
          <a className="next" onclick="plusSlidesSlow(1)">&#10095;</a>
        </div>
      </div>
    </div>
    <div className="contents-image">
      <img src={slowImg}></img>
    </div>
  </div>
</section>
);

export default SymptomsSee;
