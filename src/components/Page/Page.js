import React from "react";
import "./Page.css";
import Form from "../Form/Form";
import EZImage from "../assets/EZImage.png";

function Page() {
  return (
    <div className="page-container">
      <div className="image-box">
        <img src={EZImage} alt="EZImage" />
      </div>
      <div className="sub-heading">A Suite of Business Support Services</div>
      <div className="summary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt...Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed.
      </div>
      <div className="form-container">
        <Form />
      </div>
    </div>
  );
}

export default Page;
