import React from "react";
import style from "../css/footer.module.css";

const Footer = () => {
  return (
    <div className={style.footerContainer}>
      <div className="row">
        <div className="col-6">
          <h1 className={style.title}>AirPods Max&reg;</h1>
        </div>
        <div className="col-6">
          <p className={style.footerDesc}>
            A perfect balance of exhilarating high-fidelity audio and the
            effortless magic
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <ol className={style.footerList}>
            <li className={style.footerItem}>
              <p>
                Requires an iCloud account and a compatible Apple device running
                the latest operating system software.
              </p>
            </li>
            <li className={style.footerItem}>
              <p>
                Works with iPhone 8 or later and iPod touch (7th generation)
                with the latest version of iOS; and 12.9-inch iPad Pro (2nd
                generation or later), 11-inch iPad Pro, 10.5-inch iPad Pro, iPad
                (5th generation or later), iPad Air (3rd generation or later),
                and iPad mini (5th generation or later) with the latest version
                of iPadOS.
              </p>
            </li>
          </ol>
        </div>
        <div className="col-6">
          <ol className={style.footerList}>
            <li className={style.footerItem}>
              <p>
                Testing conducted by Apple in November 2020 using preproduction
                AirPods Max and software paired with iPhone 12 Pro Max units and
                prerelease software. Testing consisted of full AirPods Max
                battery discharge while playing one of the following: a music
                playlist consisting of 358 unique audio tracks purchased from
                the iTunes Store (256-Kbps AAC encoding), a cellular phone call,
                or a 2-hour 23-minute movie purchased from the iTunes Store
                until the AirPods Max stopped playback. Volume was set to 50%,
                Active Noise Cancellation on, and Spatial Audio on and active
                only during movie playback. Battery life depends on device
                settings, environment, usage, and many other factors
              </p>
            </li>
            <li className={style.footerItem}>
              <p>
                Testing conducted by Apple in November 2020 using preproduction
                AirPods Max and software paired with iPhone 12 Pro Max units and
                prerelease software. The playlist consisted of 358 unique audio
                tracks purchased from the iTunes Store (256-Kbps AAC encoding).
                Volume was set to 50%, Active Noise Cancellation on, and Spatial
                Audio on but not active. 5-Minute charge testing conducted with
                drained AirPods Max that were charged for 5 minutes, then audio
                playback was started until the AirPods Max stopped playback.
                Battery life depends on device settings, environment, usage, and
                many other factors.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Footer;
