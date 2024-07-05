import React from "react";
import style from "./Blogcom.module.css";
import Marquee from "react-fast-marquee";
const Blogcom = () => {
  return (
    <div>
      <h1 className={style.h1}>Join us in living life on the bright side</h1>
      <div className={style.photos}>
        <img src="https://assets-global.website-files.com/65b9cce908217ff5cd624b00/65c34cb1b65e7cc059adf232_about-hero-image-01.jpg" />
        <img src="https://assets-global.website-files.com/65b9cce908217ff5cd624b00/65c20bc41f9d000667a02989_about-hero-image-02.jpg" />
      </div>
      <div className={style.numbers}>
        <div>
          <h1>30</h1>
          <p>Total tools</p>
        </div>
        <div>
          <h1>350+</h1>
          <p>Happy customers</p>
        </div>
        <div>
          <h1>5K+</h1>
          <p>Total reviews</p>
        </div>
        <div>
          <h1>10+</h1>
          <p>Years of experience</p>
        </div>
      </div>
      <Marquee>
        <div>
          <ul>
            <li>Free shipping on orders over $150</li>
            <li>Free shipping on orders over $150</li>
            <li>Free shipping on orders over $150</li>
            <li>Free shipping on orders over $150</li>
          </ul>
        </div>
      </Marquee>
      <div className={style.content}>
        <p>
          At Gearo, we stand out as your ultimate destination for tools and
          accessories, offering a seamless and enriching experience for artisans
          and creators. we are your dedicated partner in the journey of
          creation.
        </p>
        <div className={style.content2}>
          <div>
            <h1>Mission</h1>
            <div className={style.div}>Commitments</div>
            <h1>Value</h1>
          </div>
          <div className={style.ptag}>
            <p>
              Our commitments are the foundation of our relationship with you,
              ensuring that you receive not only quality products but also
              unparalleled service and support.
            </p>
          </div>
          <div className={style.photo}>
            <img src="https://assets-global.website-files.com/65b9cce908217ff5cd624b00/65bcd5506dfe11d25edd8ace_about-image-04.jpg" />
          </div>
        </div>
      </div>
      <div className={style.shop}>
        <div className={style.free}>
          <img src="https://assets-global.website-files.com/65b9cce908217ff5cd624b00/65bc75d32835ea18c7fb6113_feature-icon-01.svg" />
          <h3>Free shipping</h3>
          <p>Enjoy the convenience of free shipment on all your orders.</p>
        </div>
        <div className={style.free}>
          <img src="https://assets-global.website-files.com/65b9cce908217ff5cd624b00/65bc75d3bad2415ae9f2704c_feature-icon-02.svg" />
          <h3>Easy refund</h3>
          <p>
            Shop with confidence that our easy refund policy has got you
            covered.
          </p>
        </div>
        <div className={style.free}>
          <img src="https://assets-global.website-files.com/65b9cce908217ff5cd624b00/65bc75d45eb9d1ccec2c4ee8_feature-icon-03.svg" />
          <h3>Online support</h3>
          <p>Our dedicated online support team is just a click away.</p>
        </div>
        <div className={style.free}>
          <img src="https://assets-global.website-files.com/65b9cce908217ff5cd624b00/65bc75d3f2df35ff7c2a08bd_feature-icon-04.svg" />
          <h3>Flexible payment</h3>
          <p>
            We understand that flexibility is key when it comes to payments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogcom;
