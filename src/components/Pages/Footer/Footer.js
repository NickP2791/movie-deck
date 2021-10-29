import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className='footer'>
      <strong>
        <p>Made with love by Nicolas Pauletto</p>
      </strong>
      <div className='attribute'>
        <p>Powered with</p>
        <img
          src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg'
          alt='TMDB logo'
        />
      </div>
    </div>
  );
};

export default Footer;
