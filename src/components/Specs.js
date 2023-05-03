import React from "react";
import caseImg from "../assets/case.png";
import twentyImg from "../assets/20.png";
import style from "../css/specs.module.css";

const Specs = () => {
  return (
    <div className={style.specsContainer}>
      <div className="row">
        <div className="col-12 col-md-6">
          <img className={style.specsImg} src={caseImg} alt="" />
        </div>
        <div className="col-12 col-md-6">
          <img className={style.specsImg} src={twentyImg} alt="" />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6">
          <h1 className={style.title}>Tech Specs</h1>
        </div>
        <div className="col-12 col-md-6">
          <ul className={style.specsList}>
            <li>
              <hr />
              <div className="row">
                <div className={`col-6 ${style.specsTitle}`}>
                  <span>Size</span>
                </div>
                <div className="col-6">
                  <p className={style.specsDesc}>
                    6.64 inches × 3.28 inches × 7.37 inches
                  </p>
                </div>
              </div>
            </li>
            <li>
              <hr />
              <div className="row">
                <div className={`col-6 ${style.specsTitle}`}>
                  <span>AirPods Max Weight</span>
                </div>
                <div className="col-6">
                  <p className={style.specsDesc}>384.8 grams</p>
                </div>
              </div>
            </li>
            <li>
              <hr />
              <div className="row">
                <div className={`col-6 ${style.specsTitle}`}>
                  <span>Smart Case Weight</span>
                </div>
                <div className="col-6">
                  <p className={style.specsDesc}>134.5 grams</p>
                </div>
              </div>
            </li>
            <li>
              <hr />
              <div className="row">
                <div className={`col-6 ${style.specsTitle}`}>
                  <span>Battery</span>
                </div>
                <div className="col-6">
                  <p className={style.specsDesc}>Up to 20 hours</p>
                </div>
              </div>
            </li>
            <li>
              <hr />
              <div className="row">
                <div className={`col-6 ${style.specsTitle}`}>
                  <span>Microphones</span>
                </div>
                <div className="col-6">
                  <p className={style.specsDesc}>Nine microphones total</p>
                </div>
              </div>
            </li>
            <li>
              <hr />
              <div className="row">
                <div className={`col-6 ${style.specsTitle}`}>
                  <span>Chip</span>
                </div>
                <div className="col-6">
                  <p className={style.specsDesc}>
                    Apple H1 headphone chip (each ear cup)
                  </p>
                </div>
              </div>
            </li>
            <li>
              <hr />
              <div className="row">
                <div className={`col-6 ${style.specsTitle}`}>
                  <span>Controls</span>
                </div>
                <div className="col-6">
                  <p className={style.specsDesc}>
                    Digital Crown, Noise control button, Hey Siri
                  </p>
                </div>
              </div>
            </li>
            <li>
              <hr />
              <div className="row">
                <div className={`col-6 ${style.specsTitle}`}>
                  <span>Connectivity</span>
                </div>
                <div className="col-6">
                  <p className={style.specsDesc}>
                    Bluetooth 5.0 wireless technology
                  </p>
                </div>
              </div>
            </li>
            <li>
              <hr />
              <div className="row">
                <div className={`col-6 ${style.specsTitle}`}>
                  <span>In the Box</span>
                </div>
                <div className="col-6">
                  <p className={style.specsDesc}>
                    AirPods Max, Smart Case, Lightning to USB-C Cable
                  </p>
                </div>
              </div>
              <hr />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Specs;
