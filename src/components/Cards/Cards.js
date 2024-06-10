import React from "react";
import "./Cards.css";
import Research from "../assets/Research.png";
import Services from "../assets/Services.png";
import Graphic from "../assets/Graphic.png";
import Analytics from "../assets/Analytics.png";
import Data from "../assets/Data.png";
import Audio from "../assets/Audio.png";

const services = [
  {
    image: Research,
    title: "Presentation Design",
    summary:
      "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Loremipsum dolor sit amet",
  },
  {
    image: Audio,
    title: "Audio - Visual Production",
    summary:
      "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Loremipsum dolor sit amet",
  },
  {
    image: Services,
    title: "Translation Services",
    summary:
      "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Loremipsum dolor sit amet",
  },
  {
    image: Graphic,
    title: "Graphic Design",
    summary:
      "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Loremipsum dolor sit amet",
  },
  {
    image: Analytics,
    title: "Research & Analytics",
    summary:
      "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Loremipsum dolor sit amet",
  },
  {
    image: Data,
    title: "Data Processing",
    summary:
      "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Loremipsum dolor sit amet",
  },
];

function Cards() {
  return (
    <div className="box-container">
      {services.map((service, index) => (
        <div key={service.title}>
          <div className="design-box">
            <div className="card-wrapper">
              <div className="box-img">
                <img src={service.image} alt="research_Image" />
              </div>
              <div className="box-heading">{service.title}</div>
            </div>
            <div className="box-summary">{service.summary}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
