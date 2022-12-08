import React from "react";

const Slider = () => (
  <div className="contents-slider">
  <div className="slideshow-container">
    <div className="slidesSlow fade">
      <h4>Short Breath</h4>
      <p>
        Iron is essential for the movement of oxygen around your body. If
        you get out of breath walking up stairs and can’t exercise as much
        as you’d like, you may be iron deficient.
      </p>
    </div>
    <div className="slidesSlow fade">
      <h4>Headaches</h4>
      <p>
        If you’re getting worse headaches than usual and they’re becoming
        more frequent, speak to your doctor and ask to have your iron levels
        checked.
      </p>
    </div>
    <div className="slidesSlow fade">
      <h4>Loss of Energy</h4>
      <p>
        Feeling tired all the time and not having the energy to do simple
        day-to-day tasks is referred to as fatigue. It’s different to the
        temporary exhaustion you feel from overdoing it. Unexplained and
        persistent fatigue is one of the most common symptoms of iron
        deficiency.
      </p>
    </div>
    <div className="slidesSlow fade">
      <h4>Loss of Libido</h4>
      <p>
        Being low in iron can lead to erectile dysfunction or a lack of
        interest in sex. It’s worth talking to a healthcare professional if
        you’re experiencing an unexplained loss of libido.
      </p>
    </div>
    <div className="slidesSlow fade">
      <h4>Irritability</h4>
      <p>
        Constantly struggling against physical and mental exhaustion and
        mood swings from low iron levels feels frustrating and can make you
        more irritable than usual.
      </p>
    </div>
    <a className="prev" onclick="plusSlidesSlow(-1)">
      &#10094;
    </a>
    <a className="next" onclick="plusSlidesSlow(1)">
      &#10095;
    </a>
  </div>
</div>
);

export default Slider;
