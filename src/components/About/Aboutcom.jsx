import React from "react";
import style from "./Aboutcom.module.css";

const Aboutcom = () => {
  return (
    <div>
      <div className={style.about}>
        <h1>Blog</h1>
      </div>
      <div className={style.photos}>
        <div className={style.photo}>
        <button>Feb 5, 2024</button>
          <img src="https://assets-global.website-files.com/65ba0e3e13e1be28866fc5db/65c0be21797a98a093862fcb_blog-image-01.jpg" />
          <p>The latest innovations in craftsmanship</p>
        </div>
        <div className={style.photo}>
        <button>Feb 5, 2024</button>
          <img src="https://assets-global.website-files.com/65ba0e3e13e1be28866fc5db/65c0bdc58f88e08e2ae4bff5_blog-image-02.jpg" />
          <p>Navigating common artisan challenges</p>
        </div>
        <div className={style.photo}>
        <button>Feb 5, 2024</button>
          <img src="https://assets-global.website-files.com/65ba0e3e13e1be28866fc5db/65c0bdc58f88e08e2ae4bff5_blog-image-02.jpg" />
          <p>Navigating common artisan challenges</p>
        </div>
        <div className={style.photo}>
        <button>Feb 5, 2024</button>
          <img src="https://assets-global.website-files.com/65ba0e3e13e1be28866fc5db/65c0bd6c36f7722ebba8ceda_blog-image-03.jpg" />
          <p>Creating irresistible product descriptions</p>
        </div>
        <div className={style.photo}>
        <button>Feb 5, 2024</button>
          <img src="https://assets-global.website-files.com/65ba0e3e13e1be28866fc5db/65c0bc4a4dcf667a14edaacb_blog-image-05.jpg" />
          <p>The art of upselling and cross-selling</p>
        </div>
        <div className={style.photo}>
        <button>Feb 5, 2024</button>
          <img src="https://assets-global.website-files.com/65ba0e3e13e1be28866fc5db/65c0bbbaa377a85c93730b39_blog-image-06.jpg" />
          <p>Unleashing the power of social commerce</p>
        </div>
      </div>
    </div>
  );
};

export default Aboutcom;
