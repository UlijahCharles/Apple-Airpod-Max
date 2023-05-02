import React from "react";
import style from "../css/magical.module.css";
import tapImage from "../assets/one_tap.jpg";
import seamlessImage from "../assets/seamless.jpg";
import sharingImage from "../assets/sharing.jpg";

const Magical = () => {
  return (
    <div className={style.magicalContainer}>
      <p className={style.featureText}>Magical experience (4)</p>
      <div className="row">
        <div className="col-11">
          <p className={`h1 ${style.title}`}>Elaborately simple.</p>
        </div>
        <div className="col-1">
          <p className={style.sideNote}>More magic to play with.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-11">
          <p className={style.magicalDescription}>
            AirPods Max inherit all of the wireless, effortless magic of the
            AirPods family. From setup to Siri commands, they make the listening
            experience completely fluid — day to day, device to device.
          </p>
        </div>
        <div className="col-1">
          <p className={style.sideNote}>
            On-head detection / Announce Notifications / Always-on Siri
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <div className="card" style={{ width: "18rem" }}>
            <img src={tapImage} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">
                <span className={style.cardCount}>1</span>One-tap setup
              </h5>
              <p className="card-text">
                AirPods Max connect immediately to your iPhone or iPad. To pair,
                simply place AirPods Max near your device and tap Connect on
                your screen.1
              </p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card" style={{ width: "18rem" }}>
            <img src={seamlessImage} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">
                <span className={style.cardCount}>2</span>Seamless switching
              </h5>
              <p className="card-text">
                Seamlessly move between your iPhone, iPad, Mac, and Apple TV.1
                If you’re playing music on your Mac and take a call on your
                iPhone, AirPods Max will automatically switch over.
              </p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card" style={{ width: "18rem" }}>
            <img src={sharingImage} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">
                {" "}
                <span className={style.cardCount}>3</span>Audio Sharing
              </h5>
              <p className="card-text">
                Easily share an audio stream between two sets of AirPods on your
                iPhone, iPad, iPod touch, or Apple TV. Bring any AirPods near
                the device you’re listening to and connect in a tap.2
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Magical;
