import React from "react";
import style from "../css/header.module.css";
import hpImage from "../assets/air-max.png";
import "../../node_modules/video-react/dist/video-react.css"; // import css
import { Player, ControlBar } from "video-react";

const Header = (props) => {
  return (
    <React.Fragment>
      <nav
        className={`navbar navbar-expand-lg bg-body-tertiary ${style.navBar}`}
      >
        <div className="container-fluid">
          <a className={`navbar-brand ${style.navBrand}`} href="#">
            AirPods Max&reg;
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className={`navbar-nav ${style.mainMenu}`}>
              <li className="nav-item ">
                <a
                  className={`nav-link ${style.navLink}`}
                  aria-current="page"
                  href="#"
                >
                  Overview
                </a>
              </li>
              <li className="nav-item ">
                <a className={`nav-link ${style.navLink}`} href="#">
                  Tech Specs
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ">
              <li className="nav-item">
                <a className={`nav-link ${style.navLink}`} href="#">
                  Buy ( 0 )
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header>
        <div className={style.headerContainer}>
          <div className="row">
            <div className="col-12">
              <p className={`h1 ${style.title}`}>AirPods Max&reg;</p>
            </div>
          </div>

          <div className="row">
            <div className="col-3">
              <p className="audioListCount">1</p>{" "}
              <p className={style.featureText}>
                Active Noise Cancellation with Transparency mode
              </p>
              <p className="audioListCount">3</p>{" "}
              <p className={style.featureText}>
                Stunning design with an exceptional fit
              </p>
            </div>
            <div className="col-3">
              <p className="audioListCount">2</p>{" "}
              <p className={style.featureText}>
                Personalized Spatial Audio for theater‑like sound that surrounds
                you
              </p>
              <p className="audioListCount">4</p>{" "}
              <p className={style.featureText}>High-fidelity audio</p>
            </div>
            <div className="col-6">
              <img src={hpImage} alt="" className={style.headphoneImage} />
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <p className={style.subTitle}>Introducing AirPods Max</p>
              <p className={style.subText}>
                A perfect balance of exhilarating high-fidelity audio and the
                effortless magic of AirPods. The ultimate personal listening
                experience is here.
              </p>
            </div>
          </div>
        </div>

        <Player
          autoPlay
          muted
          loop
          src="https://www.dl.dropboxusercontent.com/s/n9w3gcmmvt5cl0d/large.mp4?dl=0#t=0.001"
        >
          <ControlBar disableCompletely={true} className="my-class" />
        </Player>
      </header>
    </React.Fragment>
  );
};

export default Header;
