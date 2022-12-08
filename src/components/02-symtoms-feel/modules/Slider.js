import React from "react";

const Slider = () => (
  <div className="contents-slider">
    <div className="slideshow-container">
      <div className="slidesFeel fade">
        <h4>Mental Fatigue</h4>
        <p>
          Everyone gets tired from time to time. If you have permanent brain
          fog, however, which doesn’t clear after a good night’s sleep, and
          you’re finding it hard to manage your mood, it could mean that you’re
          iron deficient.
        </p>
      </div>
      <div className="slidesFeel fade">
        <h4>Cravings</h4>
        <p>
          Regularly wanting to eat unusual things with no nutritional value such
          as clay, ash, soil or paper is a sign of being low in iron and you
          should speak to a doctor.
        </p>
      </div>
      <div className="slidesFeel fade">
        <h4>Cold Intolerance</h4>
        <p>
          Iron plays an important role in supporting your body’s ability to
          regulate its own temperature. Being low in iron can lead to poor
          circulation, particularly in your hands and feet, which results in
          cold intolerance.
        </p>
      </div>
      <div className="slidesFeel fade">
        <h4>Restless Legs</h4>
        <p>
          There’s a strong correlation between iron and the nervous system,
          relating to conditions such as restless legs syndrome. This makes you
          feel the need to ‘shake out’ your legs (or arms) to relieve throbbing,
          aching, itching, burning or cramping feelings. It can often happen at
          night and so affect your sleep.
        </p>
      </div>
      <div className="slidesFeel fade">
        <h4>Chewing Ice</h4>
        <p>
          Craving and chewing ice (pagophagia) is commonly associated with iron
          deficiency. People with pagophagia can eat large quantities of ice
          every day. This can damage the teeth and gums, so it’s important to
          seek treatment.
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
);

export default Slider;
