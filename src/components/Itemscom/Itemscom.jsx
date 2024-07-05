import React from "react";
import { useSearchParams } from "react-router-dom";
import style from "./Itemscom.module.css";
const ShopInfo = [
  {
    id: 1,
    src: "/src/assets/id-1.jpg",
    name: "New tools wood cutter",
    price: "$ 345.50 USD",
    content:
      "A versatile power tool used for straight cuts in wood. It's handheld and can be equipped with various blades for different materials.",
  },
  {
    id: 2,
    src: "https://assets-global.website-files.com/65ba0e3e13e1be28866fc5db/65bb264addef44fc7b184e0e_product-image-14.jpg",
    name: "Gearo 15-inch plastic tool bag",
    price: "$ 1,865.00 USD",
    content:
      "The chuck is the part of the drill that holds and secures the drill bit. It is often adjustable to accommodate different sizes of drill bits.",
  },
  {
    id: 3,
    src: "https://assets-global.website-files.com/65ba0e3e13e1be28866fc5db/65bb2617a7173f3127ebd274_product-image-13.jpg",
    name: "Electric rotary drill machine",
    price: "$ 750.00 USD",
    content:
      "The chuck is the part of the drill that holds and secures the drill bit. It is often adjustable to accommodate different sizes of drill bits.",
  },
  {
    id: 4,
    src: "https://assets-global.website-files.com/65ba0e3e13e1be28866fc5db/65bb2beb06c3fca8dc29febf_product-image-01.jpg",
    name: "Ingco power tools",
    price: "$ 1,245.00 USD",
    content:
      "Some Ingco cordless tools may share batteries across their range, allowing users to interchange batteries between tools.",
  },
  {
    id: 5,
    src: "https://assets-global.website-files.com/65ba0e3e13e1be28866fc5db/65bb2d2152f5fa819e54b7ca_product-image-02.jpg",
    name: "7-in-1 magnetized wrench",
    price: "$ 248.00 USD",
    content:
      "The wrench may have various sizes or configurations on each end, providing flexibility for different nuts and bolts.",
  },
  {
    id: 6,
    src: "https://assets-global.website-files.com/65ba0e3e13e1be28866fc5db/65bb2d2eb7d8f998712f6549_product-image-03.jpg",
    name: "Industrial pneumatic nailer with duo glide roller",
    price: "$ 1,865.00 USD",
    content:
      "Allows users to control the depth to which the nails are driven, providing flexibility for different materials and applications.",
  },
  {
    id: 7,
    src: "https://assets-global.website-files.com/65ba0e3e13e1be28866fc5db/65bb2d3b3420d5cb9f2ff48f_product-image-04.jpg",
    name: "Adjustable wrenches",
    price: "$ 750.00 USD",
    content:
      "Adjustable wrenches typically have a worm gear mechanism that allows for smooth and precise adjustment of the jaw width.",
  },
  {
    id: 8,
    src: "https://assets-global.website-files.com/65ba0e3e13e1be28866fc5db/65bb2d728b57c5aa2c5e29ae_product-image-05.jpg",
    name: "Truflex steel tape",
    price: "$ 102.00 USD",
    content:
      "If it is associated with a specific industry or application, you may also find relevant information by consulting industry publications or forums.",
  },
  {
    id: 9,
    src: "https://assets-global.website-files.com/65ba0e3e13e1be28866fc5db/65bb2d838d5c55a1458ff495_product-image-06.jpg",
    name: "Max flex angle grinder",
    price: "$ 1,500.00 USD",
    content:
      "The wrench may have various sizes or configurations on each end, providing flexibility for different nuts and bolts.",
  },
  {
    id: 10,
    src: "https://assets-global.website-files.com/65ba0e3e13e1be28866fc5db/65bb2d99d999a50c453d27bd_product-image-07.jpg",
    name: "Ratchet spanner and faced hammer",
    price: "$ 240.00 USD",
    content:
      "Allows users to control the depth to which the nails are driven, providing flexibility for different materials and applications.",
  },
  {
    id: 11,
    src: "https://assets-global.website-files.com/65ba0e3e13e1be28866fc5db/65bb2da918be901eecdd59b5_product-image-08.jpg",
    name: "YATO electrician motor cutter",
    price: "$ 1,209.00 USD",
    content:
      "Adjustable wrenches typically have a worm gear mechanism that allows for smooth and precise adjustment of the jaw width.",
  },
  {
    id: 12,
    src: "https://assets-global.website-files.com/65ba0e3e13e1be28866fc5db/65bb2db9669ac89ecd467415_product-image-09.jpg",
    name: "Ingco power tools and hand tools cordless",
    price: "$ 1,245.00 USD",
    content:
      "Depending on the model, faced hammers come with changeable faces of different hardness or materials for tasks.",
  },
];

const Items = () => {
  let [searchParam, setSearchParam] = useSearchParams();
  const selectedItemID = searchParam.get("item");
  const newArr = ShopInfo.filter((data) => data.id === +selectedItemID);
  console.log(newArr);
  return (
    <div className={style.image}>
      {newArr.map((item) => (
        <img src="item.src" />
      ))}
      <div className={style.items}>
        <div className={style.name}>{newArr.map((item) => item.name)}</div>
        <div className={style.price}>{newArr.map((item) => item.price)}</div>
        <div className={style.content}>{newArr.map((item) => item.content)}</div>
      </div>
    </div>
  );
};

export default Items;
