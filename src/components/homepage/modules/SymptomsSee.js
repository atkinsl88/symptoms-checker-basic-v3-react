import React from "react";
import seeImg from "../../../assets/you-see-screen-image.png";

const SymptomsSee = () => (
  <section className="contents-screen" id="symptoms-you-see">
    <div className="contents-screen-contents container">
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
                <input
                  type="checkbox"
                  id="xxx"
                  name="xxx"
                  value="Easy Bruising"
                />
                <label for="xxx">Easy Bruising</label>
              </div>
              <div className="form-field">
                <input type="checkbox" id="xxx" name="xxx" value="Ulcers" />
                <label for="xxx">Ulcers</label>
              </div>
              <div className="form-field">
                <input
                  type="checkbox"
                  id="xxx"
                  name="xxx"
                  value="Brittle Nails"
                />
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
        <div className="contents-slider">
          <div className="slideshow-container">
            <div className="slidesSee fade">
              <h4>Hair Loss</h4>
              <p>
                You need iron for a healthy head of hair. Losing hair in clumps
                or noticing more falling out than usual when you’re washing or
                combing your hair could be an indication of iron deficiency.
              </p>
            </div>
            <div className="slidesSee fade">
              <h4>Paleness</h4>
              <p>
                Looking very pale is a sign of iron deficiency and you may
                notice this in your face, in your nails, inside your mouth, or
                in the lining of your eyes. A handy test is to pull your lower
                eyelid down: if it’s pale peach or yellow in colour, this may
                indicate iron deficiency anaemia.
              </p>
            </div>
            <div className="slidesSee fade">
              <h4>Easy Bruising</h4>
              <p>
                Bruising is caused by damage to the blood vessels beneath the
                skin by a knock or other injury. Do you bruise easily? This has
                long been associated with iron deficiency.
              </p>
            </div>
            <div className="slidesSee fade">
              <h4>Ulcers</h4>
              <p>
                You can get mouth ulcers for many reasons, including stress,
                feeling run-down, and being low in iron.
              </p>
            </div>
            <div className="slidesSee fade">
              <h4>Brittle Nails</h4>
              <p>
                Nails with a dip in the middle, like a spoon, are a sign of iron
                deficiency anaemia. If your nails are brittle or you notice
                other changes in colour or shape, increasing your iron levels
                could help.
              </p>
            </div>
            <a className="prev" onclick="plusSlidesSee(-1)">
              &#10094;
            </a>
            <a className="next" onclick="plusSlidesSee(1)">
              &#10095;
            </a>
          </div>
        </div>
      </div>
      <div className="contents-image">
        <img src={seeImg}></img>
      </div>
    </div>
  </section>
);

export default SymptomsSee;
