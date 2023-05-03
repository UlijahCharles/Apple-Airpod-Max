import React from "react";
import style from "../css/buy.module.css";
import whiteSelect from "../assets/white.svg";
import blackSelect from "../assets/black.svg";
import blueSelect from "../assets/blue.svg";
import redSelect from "../assets/red.svg";
import greenSelect from "../assets/green.svg";
import whiteHP from "../assets/buy_white.jpg";
import blackHP from "../assets/buy_black.jpg";
import blueHP from "../assets/buy_blue.jpg";
import redHP from "../assets/buy_red.jpg";
import greenHP from "../assets/buy_green.jpg";

const Buy = () => {
  return (
    <div className={style.buyContainer}>
      <div className="row">
        <div className="col-12 col-md-6">
          <p className={`h1 ${style.title}`}>Buy AirPods Max</p>
          <p className={style.colorName}>Colors:</p>
          <ul className={style.colorSelect}>
            <li>
              <button
                type="button"
                data-bs-target="#carouselFade2"
                data-bs-slide-to="0"
              >
                <img src={whiteSelect} alt="" />
              </button>
            </li>
            <li>
              <button
                type="button"
                data-bs-target="#carouselFade2"
                data-bs-slide-to="1"
              >
                <img src={blackSelect} alt="" />
              </button>
            </li>
            <li>
              <button
                type="button"
                data-bs-target="#carouselFade2"
                data-bs-slide-to="2"
              >
                <img src={blueSelect} alt="" />
              </button>
            </li>
            <li>
              <button
                type="button"
                data-bs-target="#carouselFade2"
                data-bs-slide-to="3"
              >
                <img src={redSelect} alt="" />
              </button>
            </li>
            <li>
              <button
                type="button"
                data-bs-target="#carouselFade2"
                data-bs-slide-to="4"
              >
                <img src={greenSelect} alt="" />
              </button>
            </li>
          </ul>
          <ul className={style.returnList}>
            <li>
              Get free delivery, or pick up available items at an Apple Store
            </li>
            <li>
              Get 6 months of Apple Music free with your AirPods MaxFootnote*
            </li>
            <li>Free and easy returns</li>
          </ul>
          <h1 className={style.price}>$549.00</h1>
          <button type="button" class="btn btn-light">
            Buy
          </button>
          <button type="button" class="btn btn-light">
            Add To Cart
          </button>
        </div>
        <div className="col-12 col-md-6">
          <div id="carouselFade2" className="carousel slide carousel-fade">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={whiteHP} alt="" className={style.buyImage} />
              </div>
              <div className="carousel-item ">
                <img src={blackHP} alt="" className={style.buyImage} />
              </div>
              <div className="carousel-item ">
                <img src={blueHP} alt="" className={style.buyImage} />
              </div>
              <div className="carousel-item ">
                <img src={redHP} alt="" className={style.buyImage} />
              </div>
              <div className="carousel-item ">
                <img src={greenHP} alt="" className={style.buyImage} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buy;
