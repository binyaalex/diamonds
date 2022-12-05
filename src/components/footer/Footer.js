import React from "react";
import styles from "./Footer.module.scss";

//Social Logo
import Facebook from "../../assets/images/facebook.svg";
import Twitter from "../../assets/images/twitter.svg";
import Linkedin from "../../assets/images/linkedin.svg";
import Instagram from "../../assets/images/instagram.svg";
import Github from "../../assets/images/github.svg";

function Footer() {
  return (
    <>
      <div className={styles.mainWrapper}>
        <div className={styles.fistDiv}>
          <div className="logo">first footer</div>
          <div className="fistMenu"></div>
          <div className="secondMenu"></div>
          <div className="thirdMenu"></div>
          <div className="forthMenu"></div>
        </div>
        <div className={styles.secondDiv}>
          <div className="copyright">
            {" "}
            Diamonds @ Copyright 2022, Inc. All rights reserved{" "}
          </div>
          <div className="socialLogo">
            <div>
              <img src={Facebook} />
            </div>
            <div>
              <img src={Twitter} />
            </div>
            <div>
              <img src={Linkedin} />
            </div>
            <div>
              <img src={Instagram} />
            </div>
            <div>
              <img src={Github} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
