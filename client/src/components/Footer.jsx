import React from "react";
import { InstagramLogo, WhatsappLogo } from "phosphor-react";
import "../css/footer.css";

const Footer = () => {
  return (
    <div className="footer-cont">
      <div className="left-footer">
        <h1 className="footer-logo">Logo</h1>
      </div>
      <div className="mid-footer">
        Welcome to HK, we deliver good quality products for you in a short time.
      </div>
      <div className="right-footer">
        <b>
          <p className="phone-num">+961 71 941 248</p>
        </b>
        <WhatsappLogo size={32} />
        <a href="https://www.instagram.com/hk_clothings.lb">
          <InstagramLogo size={32} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
