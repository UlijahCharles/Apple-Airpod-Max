import React from "react";
import style from "../css/design.module.css";
import hp_design_1 from "../assets/Group_6.jpg";
import hp_design_2 from "../assets/Group_62.jpg";
import hp_design_3 from "../assets/Group_64.jpg";
import hp_design_4 from "../assets/Group_63.jpg";
import hp_design_5 from "../assets/Group_61.jpg";

const Design = () => {
  return (
    <React.Fragment>
      <div className={style.designContainer}>
        <p className={style.featureText}>Design (1)</p>
        <p className={`h1 ${style.title}`}>A radically original composition.</p>

        <div className="row">
          <div className="col-6 col-lg-3">
            <img className={style.designImage} src={hp_design_1} alt="" />
            <p className={style.designDescription}>
              The over-ear headphone has been{" "}
              <span className={style.spanDescription}>
                completely reimagined.
              </span>
              From cushion to canopy, AirPods Max are designed for an
              uncompromising fit.
            </p>
          </div>
          <div className="col-6 col-lg-3"></div>
          <div className="col-6 col-lg-3">
            <img className={style.designImage} src={hp_design_2} alt="" />
            <p className={style.designDescription}>
              <span className={style.spanDescription}>The canopy</span> spanning
              the headband is made from a breathable knit mesh, distributing
              weight to reduce on‑head pressure.
            </p>
          </div>
          <div className="col-6 col-lg-3">
            <img className={style.designImage} src={hp_design_3} alt="" />
            <p className={style.designDescription}>
              <span className={style.spanDescription}>
                The stainless steel frame
              </span>{" "}
              is wrapped with a soft-to-the-touch material for a remarkable
              combination of strength, flexibility, and comfort.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-6 col-lg-3"></div>
          <div className="col-6 col-lg-3">
            <img className={style.designImage} src={hp_design_4} alt="" />
            <p className={style.designDescription}>
              <span className={style.spanDescription}>
                The beautifully anodized aluminum cups
              </span>{" "}
              feature a revolutionary mechanism that allows each cup to rotate
              independently.
            </p>
          </div>
          <div className="col-6 col-lg-3"></div>
          <div className="col-6 col-lg-3">
            <img className={style.designImage} src={hp_design_5} alt="" />
            <p className={style.designDescription}>
              <span className={style.spanDescription}>Telescoping arms</span>{" "}
              smoothly extend and stay where you set them, for a consistent fit
              and seal.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Design;
