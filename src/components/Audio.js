import React from "react";
import audioImage from "../assets/audio_quality_user.jpg";
import style from "../css/audio.module.css";

const Audio = () => {
  return (
    <React.Fragment>
      <div className={style.audioContainer}>
        <p className={style.featureText}>Audio Quality (3)</p>

        <div className="row">
          <div className="col-12 col-md-6">
            <p className={`h1 ${style.title}`}>Sounds like an epiphany.</p>
          </div>
          <div className="col-12 col-md-6">
            <p className={style.audioDescription}>
              AirPods Max combine high-fidelity audio with industry-leading
              Active Noise Cancellation to deliver an unparalleled listening
              experience. Each part of their custom-built driver works to
              produce sound with ultra-low distortion across the audible range.
              From deep, rich bass to accurate mids and crisp, clean highs,
              you’ll hear every note with a new sense of clarity.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            <img className={style.audioImage} src={audioImage} alt="" />
          </div>
          <div className="col-12 col-md-6">
            <div className="row">
              <div className="col-12 col-md-6" id={style["one"]}>
                <p className={style.audioListCount}>1</p>
                <p className={`h5 ${style.audioListTitle}`}>
                  Immersive listening
                </p>
                <p className={style.audioListDesc}>
                  To cancel unwanted external sound, AirPods Max use a total of
                  six outward-facing microphones to detect noise in your
                  environment, and two inward-facing microphones to measure what
                  you’re hearing.
                </p>
              </div>
              <div className="col-12 col-md-6" id={style["two"]}>
                <p className={style.audioListCount}>2</p>
                <p className={`h5 ${style.audioListTitle}`}>
                  Hear every detail
                </p>
                <p className={style.audioListDesc}>
                  The Apple-designed dynamic driver produces a wide frequency
                  range that uncovers the rich details of every sound —
                  delivering your favourite songs with previously unheard
                  texture and accuracy.
                </p>
              </div>
            </div>
            <div className={`row ${style.audioListRow}`}>
              <div className="col-12 col-md-6" id={style["three"]}>
                <p className={style.audioListCount}>3</p>
                <p className={`h5 ${style.audioListTitle}`}>
                  Distortionless playback
                </p>
                <p className={style.audioListDesc}>
                  Modeled after those in high-end floor-standing speakers, the
                  driver’s dual-neodymium ring magnet motor minimizes total
                  harmonic distortion across the entire audible range. The
                  result is consistently clear playback, even at full volume.
                </p>
              </div>
              <div className="col-12 col-md-6" id={style["four"]}>
                <p className={style.audioListCount}>4</p>
                <p className={`h5 ${style.audioListTitle}`}>Adaptive EQ</p>
                <p className={style.audioListDesc}>
                  Adaptive EQ tailors sound to the bespoke fit and seal created
                  by the ear cushions. Inward-facing microphones measure what
                  you’re hearing, then adjust the frequencies of your music to
                  deliver a rich experience.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6" id={style["five"]}>
                <p className={style.audioListCount}>5</p>
                <p className={`h5 ${style.audioListTitle}`}>
                  Active Noise Cancellation
                </p>
                <p className={style.audioListDesc}>
                  Industry‑leading Active Noise Cancellation counters external
                  sound with equal anti‑noise, allowing you to immerse yourself
                  in what you’re listening to.
                </p>

                <p className={style.audioNote}>
                  Personalized Spatial Audio with dynamic head tracking gives
                  you a theater‑like experience for movies and shows, with sound
                  that surrounds you.
                </p>
              </div>
              <div className="col-12 col-md-6" id={style["six"]}>
                <p className={style.audioListCount}>6</p>
                <p className={`h5 ${style.audioListTitle}`}>
                  Transparency mode
                </p>
                <p className={style.audioListDesc}>
                  Press the noise control button to switch to Transparency mode,
                  which lets outside sound in so you can interact naturally with
                  your surroundings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Audio;
