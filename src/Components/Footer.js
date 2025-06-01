import React from "react";
import facebookIcon from "../Images/5393427829770810030.png";
import instagramIcon from "../Images/4922972.png";

const Footer = () => {
  return (
    <footer className="container">
      <div>
        <h3>Наші контакти</h3>
        <div></div>
        <div></div>
        <div></div>
        <div>
          <a href="https://www.facebook.com/profile.php?id=100019099424233&rdid=L6qyUZUpCfmba8IF&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1D97LFafR1%2F//" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} width="64" height="64" alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/alesyakalinichenko?igsh=bWtya3U3em82c2I5//" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} width="64" height="64" alt="Instagram" />
          </a>
        </div>
      </div>
      <div>Записатись на заняття</div>
    </footer>
  );
};

export default Footer;