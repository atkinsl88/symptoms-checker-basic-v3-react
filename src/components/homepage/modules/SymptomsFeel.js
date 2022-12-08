import React from "react";
import feelImg from "../../../assets/you-feel-screen-image.png";

const SymptomsFeel = () => (
  <section className="contents-screen" id="symptoms-you-feel">
    <div className="contents-screen-contents container">
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
                <input
                  type="checkbox"
                  id="xxx"
                  name="xxx"
                  value="Mental Fatigue"
                />
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
                <input
                  type="checkbox"
                  id="xxx"
                  name="xxx"
                  value="Chewing Ice"
                />
                <label for="xxx">Chewing Ice</label>
              </div>
              <div className="form-field">
                <input type="checkbox" id="xxx" name="xxx" value="Cravings" />
                <label for="xxx">Cravings</label>
              </div>
              <div className="form-field">
                <input
                  type="checkbox"
                  id="xxx"
                  name="xxx"
                  value="Restless Legs"
                />
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
        <div className="contents-slider">
          <div className="slideshow-container">
            <div className="slidesFeel fade">
              <h4>Mental Fatigue</h4>
              <p>
                Everyone gets tired from time to time. If you have permanent
                brain fog, however, which doesn’t clear after a good night’s
                sleep, and you’re finding it hard to manage your mood, it could
                mean that you’re iron deficient.
              </p>
            </div>
            <div className="slidesFeel fade">
              <h4>Cravings</h4>
              <p>
                Regularly wanting to eat unusual things with no nutritional
                value such as clay, ash, soil or paper is a sign of being low in
                iron and you should speak to a doctor.
              </p>
            </div>
            <div className="slidesFeel fade">
              <h4>Cold Intolerance</h4>
              <p>
                Iron plays an important role in supporting your body’s ability
                to regulate its own temperature. Being low in iron can lead to
                poor circulation, particularly in your hands and feet, which
                results in cold intolerance.
              </p>
            </div>
            <div className="slidesFeel fade">
              <h4>Restless Legs</h4>
              <p>
                There’s a strong correlation between iron and the nervous
                system, relating to conditions such as restless legs syndrome.
                This makes you feel the need to ‘shake out’ your legs (or arms)
                to relieve throbbing, aching, itching, burning or cramping
                feelings. It can often happen at night and so affect your sleep.
              </p>
            </div>
            <div className="slidesFeel fade">
              <h4>Chewing Ice</h4>
              <p>
                Craving and chewing ice (pagophagia) is commonly associated with
                iron deficiency. People with pagophagia can eat large quantities
                of ice every day. This can damage the teeth and gums, so it’s
                important to seek treatment.
              </p>
            </div>
            <a className="prev" onclick="plusSlides(-1)">
              &#10094;
            </a>
            <a className="next" onclick="plusSlides(1)">
              &#10095;
            </a>
          </div>
        </div>
      </div>
      <div className="contents-image">
        <img src={feelImg}></img>
      </div>
    </div>
  </section>
);

export default SymptomsFeel;
