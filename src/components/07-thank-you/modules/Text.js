import React from "react";
import qrImg from "../../../assets/qr_img.png";

const Text = () => (
  <div className="contents-text-center">
    <h1>Thank you...</h1>
    <p>You will be sent a free Patient Discussion guide shortly via email.</p>
    <div className="data-for-later">
      <p>
        Data for Later? Be sure to scan the QA code below for further reading on
        Iron Deficiency.
      </p>
      <img src={qrImg}></img>
    </div>
  </div>
);

export default Text;
