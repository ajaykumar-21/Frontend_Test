import React from "react";
import "./Cards.css";
import Research from "../assets/Research.png";
import Services from "../assets/Services.png";
import Graphic from "../assets/Graphic.png";
import Analytics from "../assets/Analytics.png";
import Data from "../assets/Data.png";
import Audio from "../assets/Audio.png";

function Cards() {
  return (
    <div>
      <div className="box-container">
        <div>
          <div className="design-box">
            <div className="sub-container">
              <div className="box-img">
                <img src={Research} alt="research_Image" />
              </div>
              <div className="box-heading">Presentation Design</div>
            </div>
            <div className="box-summary">
              Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem
              ipsum dolor sit amet
            </div>
          </div>
        </div>
        <div>
          <div className="design-box">
            <div className="sub-container">
              <div className="box-img">
                <img src={Audio} alt="Audio_Image" />
              </div>
              <div className="box-heading">Audio - Visual Production</div>
            </div>
            <div className="box-summary">
              Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem
              ipsum dolor sit amet
            </div>
          </div>
        </div>
        <div>
          <div className="design-box">
            <div className="sub-container">
              <div className="box-img">
                <img src={Services} alt="Service_Image" />
              </div>
              <div className="box-heading">Translation Services</div>
            </div>
            <div className="box-summary">
              Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem
              ipsum dolor sit amet
            </div>
          </div>
        </div>
        <div>
          <div className="design-box">
            <div className="sub-container">
              <div className="box-img">
                <img src={Graphic} alt="Graphic_Image" />
              </div>
              <div className="box-heading">Graphic Design</div>
            </div>
            <div className="box-summary">
              Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem
              ipsum dolor sit amet
            </div>
          </div>
        </div>
        <div>
          <div className="design-box">
            <div className="sub-container">
              <div className="box-img">
                <img src={Analytics} alt="Research_Image" />
              </div>
              <div className="box-heading">Research & Analytics</div>
            </div>
            <div className="box-summary">
              Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem
              ipsum dolor sit amet
            </div>
          </div>
        </div>
        <div>
          <div className="design-box">
            <div className="sub-container">
              <div className="box-img">
                <img src={Data} alt="Data_Image" />
              </div>
              <div className="box-heading">Data Processing</div>
            </div>
            <div className="box-summary">
              Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem
              ipsum dolor sit amet
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
