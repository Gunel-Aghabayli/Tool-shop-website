import React from "react";
import style from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.gear}>
        <div className={style.image}>
          <img
            src="https://assets-global.website-files.com/65b9cce908217ff5cd624b00/65bc9d1bf0d88e12d9cc0fe5_gearo-light-logo.svg"
            alt="gear"
          />
        </div>
        <div className={style.location}>
          <i class="fa-solid fa-location-dot"></i>
          <span>Our location</span>
          <p>1421 Coburn Hollow Road Metamora, Center Point, IL 61548.</p>
        </div>
        <div className={style.location}>
          <i class="fa-regular fa-envelope"></i>
          <span>Email address</span>
          <p>hello@gmail.com</p>
        </div>
        <div className={style.location}>
          <i class="fa-solid fa-phone"></i>
          <span>Contact number</span>
          <p>+124 555 666, +99 548 666</p>
        </div>
      </div>
      <hr />

      <div className={style.footer2}>
        <div className={style.about}>
          <h2>About us</h2>
          <p>
            At Gearo, we embark on a relentless pursuit of excellence, driven by
            a passion for craftsmanship and innovation. Our story is woven with
            a commitment to providing artisans.
          </p>
        </div>
        <div>
          <h2>Pages</h2>
          <p>Home</p>
          <p>Home 2</p>
          <p>About Us</p>
          <p>Shop</p>
          <p>FAQs</p>
          <p>Blog</p>
          <p>Contact Us</p>
          <p>Privacy Policy</p>
        </div>
        <div>
        <h2>Utility pages</h2>
        <p>Style guide</p>
        <p>Instructions</p>
        <p>Licenses</p>
        <p>Changelog</p>
        <p>Error 404</p>
        <p>Password Protected</p>
        <p>Link in Bio</p>
        <p>Coming Soon</p>
      </div>
      <div>
      <div className={style.input}>
      <h2>Join our newsletter now</h2>
      <input placeholder="Enter Your Email"/>
      <button>Subscribe</button>
      </div>
      <div>
      <h2>Follow us on</h2>
      <div className={style.icons}>
      <span><img src="https://assets-global.website-files.com/65b9cce908217ff5cd624b00/65b9fcfbf3805ab420ff71d9_facebook.svg"/></span>
      <span><img src="https://assets-global.website-files.com/65b9cce908217ff5cd624b00/65b9fcfbaceb6d42c018174b_instagram.svg"/></span>
      <span><img src="https://assets-global.website-files.com/65b9cce908217ff5cd624b00/65b9fcfba0964771cf9a8444_twitter-x.svg"/></span>
      <span><img src="https://assets-global.website-files.com/65b9cce908217ff5cd624b00/65b9fcfba29cfef6210b8048_linkedin.svg"/></span>
      <span><img src="https://assets-global.website-files.com/65b9cce908217ff5cd624b00/65b9fcfb7121e75f874b5348_dribble.svg"/></span>
      </div>
      </div>
      </div>
      <div className={style.hammer}>
      <img src="https://assets-global.website-files.com/65b9cce908217ff5cd624b00/65bcb42c6cc543edf858ed83_footer-vector.png"/>
      </div>
      </div>
      <hr/>
      <div className={style.last}>
      <center>Designed by Webestica, Powered by Webflow</center>
      </div>
    </div>
  );
};

export default Footer;
