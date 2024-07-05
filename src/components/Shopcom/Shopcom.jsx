import React, { createContext, useContext } from "react";
import style from "./Shopcom.module.css";
import { Link } from "react-router-dom";

const ShopContext = createContext();
const ShopInfo = [
  {
    id: 1,
    src: "https://assets-global.website-files.com/65ba0e3e13e1be28866fc5db/65bc9116a8707454567f1839_product-image-15.jpg",
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

const ShopProvider = ({ children }) => {
  return (
    <ShopContext.Provider value={ShopInfo}>{children}</ShopContext.Provider>
  );
};

const useShop = () => useContext(ShopContext);

function Shop() {
  const shop = useShop();

  return (
    <div>
      <div className={style.shop}>
        <h1>Shop</h1>
      </div>
      <div className={style.shops}>
        <div className={style.names}>
          {shop.map((item) => (
            <div className={style.cube} key={item.id}>
              <img className={style.image} src={item.src} alt={item.name} />
              <Link to={`/shop/items?item=${item.id}`}>
                <h3>{item.name}</h3>
              </Link>
              <p>{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ShopWithProvider() {
  return (
    <ShopProvider>
      <Shop />
    </ShopProvider>
  );
}
