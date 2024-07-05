import React from "react";
import style from "./Main.module.css";

const ShopInfo = [
  {
    id: 1,
    src: "/src/assets/id-1.jpg",
    name: "New tools wood cutter",
    price: "$ 345.50 USD",
  },
  {
    id: 2,
    src: "https://assets-global.website-files.com/65ba0e3e13e1be28866fc5db/65bb264addef44fc7b184e0e_product-image-14.jpg",
    name: "Gearo 15-inch plastic tool bag",
    price: "$ 1,865.00 USD",
  },
  {
    id: 3,
    src: "https://assets-global.website-files.com/65ba0e3e13e1be28866fc5db/65bb2617a7173f3127ebd274_product-image-13.jpg",
    name: "Electric rotary drill machine",
    price: "$ 750.00 USD",
  },
  {
    id: 4,
    src: "https://assets-global.website-files.com/65ba0e3e13e1be28866fc5db/65bb2beb06c3fca8dc29febf_product-image-01.jpg",
    name: "Ingco power tools",
    price: "$ 1,245.00 USD",
  },
  {
    id: 5,
    src: "https://assets-global.website-files.com/65ba0e3e13e1be28866fc5db/65bb2d2152f5fa819e54b7ca_product-image-02.jpg",
    name: "7-in-1 magnetized wrench",
    price: "$ 248.00 USD",
  },
  {
    id: 6,
    src: "https://assets-global.website-files.com/65ba0e3e13e1be28866fc5db/65bb2d2eb7d8f998712f6549_product-image-03.jpg",
    name: "Industrial pneumatic nailer with duo glide roller",
    price: "$ 1,865.00 USD",
  },
  {
    id: 7,
    src: "https://assets-global.website-files.com/65ba0e3e13e1be28866fc5db/65bb2d3b3420d5cb9f2ff48f_product-image-04.jpg",
    name: "Adjustable wrenches",
    price: "$ 750.00 USD",
  },
  {
    id: 8,
    src: "https://assets-global.website-files.com/65ba0e3e13e1be28866fc5db/65bb2d728b57c5aa2c5e29ae_product-image-05.jpg",
    name: "Truflex steel tape",
    price: "$ 102.00 USD",
  },
  {
    id: 9,
    src: "https://assets-global.website-files.com/65ba0e3e13e1be28866fc5db/65bb2d838d5c55a1458ff495_product-image-06.jpg",
    name: "Max flex angle grinder",
    price: "$ 1,500.00 USD",
  },
  {
    id: 10,
    src: "https://assets-global.website-files.com/65ba0e3e13e1be28866fc5db/65bb2d99d999a50c453d27bd_product-image-07.jpg",
    name: "Ratchet spanner and faced hammer",
    price: "$ 240.00 USD",
  },
  {
    id: 11,
    src: "https://assets-global.website-files.com/65ba0e3e13e1be28866fc5db/65bb2da918be901eecdd59b5_product-image-08.jpg",
    name: "YATO electrician motor cutter",
    price: "$ 1,209.00 USD",
  },
  {
    id: 12,
    src: "https://assets-global.website-files.com/65ba0e3e13e1be28866fc5db/65bb2db9669ac89ecd467415_product-image-09.jpg",
    name: "Ingco power tools and hand tools cordless",
    price: "$ 1,245.00 USD",
  },
];

const Main = () => {
  const slicedItems = ShopInfo.slice(2, 8);
  return (
    <div className={style.tools}>
      <h1>POWER TOOL</h1>
      <div className={style.image}>
        <img
          src="https://assets-global.website-files.com/65ba0e3e13e1be28866fc5db/65bb4a0b7405c939dd944b35_02-p-1600.png"
          alt="tool"
        />
      </div>
      <div className={style.main}>
        <div className={style.ingco}>
          <h2>Ingco power tools and hand tools cordless</h2>
          <h2>$ 1,245.00 USD</h2>
          <button className={style.buton}>Add to Cart</button>
        </div>

        <div className={style.ingco}>
          <h3>
            Explore the art of creation with confidence, equipped with the
            finest tools and accessories handpicked for the.
          </h3>
          <p>Product type: Rotary drill</p>
          <p>Chuck Capacity: 0-6.5mm</p>
          <p>Power Output: 450 W</p>
          <button className={style.buton2}>View more detail</button>
        </div>
      </div>
      <div className={style.butons}>
        <button className={style.explore}>Explore Categories</button>
        <button>Carpenter tool</button>
        <button>Painting tool</button>
        <button>Power tool</button>
        <button>Hand tool</button>
        <button>Plumbing tool</button>
      </div>
      <div className={style.arrival}>
        <h1>New Arrival products</h1>
      </div>
      <div>
        <div className={style.grid}>
          {slicedItems.map((item) => (
            <div key={item.id} className={style.card}>
              <img src={item.src} />
              <h2>{item.name} </h2>
              <p>{item.price}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={style.more}>
        <div>
          <img src="https://assets-global.website-files.com/65b9cce908217ff5cd624b00/65bb8d4ee081d228a8f4f3dd_about-image-01.jpg" />
        </div>
        <div className={style.gearo}>
          <h2>Our craftsmanship journey</h2>
          <p>
            At Gearo, we embark on a relentless pursuit of excellence, driven by
            a passion for craftsmanship and innovation. Our story is woven with
            a commitment to providing artisans.
          </p>
          <button>Know more about us</button>
          <div className={style.numbers}>
            <div>
              <div className={style.number}>300</div>
              <h4>Total tools</h4>
            </div>
            <div>
              <div className={style.number}>350+</div>
              <h4>Happy customers</h4>
            </div>
          </div>
        </div>
      </div>
      <div className={style.global}>
        <p className={style.play}>Play</p>
      </div>
      <div className={style.clients}>
        <p className={style.tag}>What our client say</p>
        <div className={style.all}>
          <div className={style.partner}>
            <div className={style.first}>
              <img src="https://assets-global.website-files.com/65b9cce908217ff5cd624b00/65bc862c887641cbcbbcfe14_testimonial-image-04.png" />
              <div>
                <h2>Samuel bishop</h2>
                <p>CEO of blogzine</p>
              </div>
            </div>
            <p>
              Our partnership with Gearo has been a key factor in our growth.
              Their commitment to excellence aligns perfectly with our values,
              and it reflects in the success.
            </p>
          </div>
          <div className={style.partner}>
            <div className={style.first}>
              <img src="https://assets-global.website-files.com/65b9cce908217ff5cd624b00/65bc862c49e267ad2b58d858_testimonial-image-01.png" />
              <div>
                <h2>Samuel bishop</h2>
                <p>CEO of blogzine</p>
              </div>
            </div>
            <p>
              Our partnership with Gearo has been a key factor in our growth.
              Their commitment to excellence aligns perfectly with our values,
              and it reflects in the success.
            </p>
          </div>
          <div className={style.partner}>
            <div className={style.first}>
              <img src="https://assets-global.website-files.com/65b9cce908217ff5cd624b00/65bc862c49e267ad2b58d858_testimonial-image-01.png" />
              <div>
                <h2>Samuel bishop</h2>
                <p>CEO of blogzine</p>
              </div>
            </div>
            <p>
              Our partnership with Gearo has been a key factor in our growth.
              Their commitment to excellence aligns perfectly with our values,
              and it reflects in the success.
            </p>
          </div>
          <div className={style.partner}>
            <div className={style.first}>
              <img src="https://assets-global.website-files.com/65b9cce908217ff5cd624b00/65bc862cd2fcedb8b2a0a72d_testimonial-image-03.png" />
              <div>
                <h2>Jacqueline miller</h2>
                <p>Director</p>
              </div>
            </div>
            <p>
              Our partnership with Gearo has been a key factor in our growth.
              Their commitment to excellence aligns perfectly with our values,
              and it reflects in the success.
            </p>
          </div>
          <div className={style.partner}>
            <div className={style.first}>
              <img src="https://assets-global.website-files.com/65b9cce908217ff5cd624b00/65fe8249ce9ca62b68f0a7fa_testimonial-image-05.png" />
              <div>
                <h2>Carolyn Ortiz</h2>
                <p>CEO</p>
              </div>
            </div>
            <p>
              Our partnership with Gearo has been a key factor in our growth.
              Their commitment to excellence aligns perfectly with our values,
              and it reflects in the success.
            </p>
          </div>
          <div className={style.partner}>
            <div className={style.first}>
              <img src="https://assets-global.website-files.com/65b9cce908217ff5cd624b00/65fe822961e9120bf5429053_testimonial-image-06.png" />
              <div>
                <h2>Lori Stevens</h2>
                <p>Manager</p>
              </div>
            </div>
            <p>
              Our partnership with Gearo has been a key factor in our growth.
              Their commitment to excellence aligns perfectly with our values,
              and it reflects in the success.
            </p>
          </div>
        </div>
      </div>
      <div className={style.sale}>
        <div className={style.sale1}>
          <p>BIG SALE</p>
          <h1 className={style.spring}>Spring into savings: shop our sale!</h1>
          <p>From: 20% off to 50% off</p>
          <button>Sale products</button>
        </div>
        <div className={style.flat}>
          <p>Flat 40% off on the first order</p>
          <h4>GEARO bars tool</h4>
          <button>Shop now</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
