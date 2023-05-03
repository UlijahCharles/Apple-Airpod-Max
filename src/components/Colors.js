import React from "react";
import style from "../css/colors.module.css";
import whiteSelect from "../assets/white.svg";
import blackSelect from "../assets/black.svg";
import blueSelect from "../assets/blue.svg";
import redSelect from "../assets/red.svg";
import greenSelect from "../assets/green.svg";
import whiteSideHP from "../assets/white_side_hp.jpg";
import blackSideHP from "../assets/black_side_hp.jpg";
import blueSideHP from "../assets/blue_side_hp.jpg";
import redSideHP from "../assets/red_side_hp.jpg";
import greenSideHP from "../assets/green_side_hp.jpg";
import whiteHP from "../assets/white_hp.jpg";
import blackHP from "../assets/black_hp.jpg";
import blueHP from "../assets/blue_hp.jpg";
import redHP from "../assets/red_hp.jpg";
import greenHP from "../assets/green_hp.jpg";

const Colors = () => {
  return (
    <React.Fragment>
      <div className={style.colorsContainer}>
        <p className={style.featureText}>Colors (2)</p>
        <div className="row">
          <div className="col-12 col-md-8">
            <p className={`h1 ${style.title}`}>
              Five colors. Anything but monotone.
            </p>
          </div>
          <div className="col-12 col-md-4">
            <ul className={style.colorSelect}>
              <li>
                <button
                  type="button"
                  data-bs-target="#carouselFade"
                  data-bs-slide-to="0"
                >
                  <img src={whiteSelect} alt="" />
                </button>
              </li>
              <li>
                <button
                  type="button"
                  data-bs-target="#carouselFade"
                  data-bs-slide-to="1"
                >
                  <img src={blackSelect} alt="" />
                </button>
              </li>
              <li>
                <button
                  type="button"
                  data-bs-target="#carouselFade"
                  data-bs-slide-to="2"
                >
                  <img src={blueSelect} alt="" />
                </button>
              </li>
              <li>
                <button
                  type="button"
                  data-bs-target="#carouselFade"
                  data-bs-slide-to="3"
                >
                  <img src={redSelect} alt="" />
                </button>
              </li>
              <li>
                <button
                  type="button"
                  data-bs-target="#carouselFade"
                  data-bs-slide-to="4"
                >
                  <img src={greenSelect} alt="" />
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div id="carouselFade" className="carousel slide carousel-fade">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-4 ">
                      <img
                        src={whiteSideHP}
                        className={style.colorHpLeft}
                        alt="..."
                      />
                    </div>
                    <div className="col-8">
                      <img
                        src={whiteHP}
                        className={style.colorHpRight}
                        alt="..."
                      />
                    </div>
                  </div>
                </div>

                <div className="carousel-item ">
                  <div className="row">
                    <div className="col-4">
                      <img src={blackSideHP} className=" w-100" alt="..." />
                    </div>
                    <div className="col-8">
                      <img
                        src={blackHP}
                        className={style.colorHpRight}
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
                <div className="carousel-item ">
                  <div className="row">
                    <div className="col-4">
                      <img src={blueSideHP} className=" w-100" alt="..." />
                    </div>
                    <div className="col-8">
                      <img
                        src={blueHP}
                        className={style.colorHpRight}
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
                <div className="carousel-item ">
                  <div className="row">
                    <div className="col-4">
                      <img src={redSideHP} className=" w-100" alt="..." />
                    </div>
                    <div className="col-8">
                      <img
                        src={redHP}
                        className={style.colorHpRight}
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
                <div className="carousel-item ">
                  <div className="row">
                    <div className="col-4">
                      <img src={greenSideHP} className=" w-100" alt="..." />
                    </div>
                    <div className="col-8">
                      <img
                        src={greenHP}
                        className={style.colorHpRight}
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Colors;
