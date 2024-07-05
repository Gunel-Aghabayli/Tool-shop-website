import React from "react";
import style from "./Contactcom.module.css";

const Contactcom = () => {
  return (
    <div className={style.contact}>
      <h1>Contact us</h1>
      <p>
        Have questions or need assistance? Our team is here to help! Please feel
        free to reach out to us for expert guidance, support, or questions.
      </p>
      <div className={style.inputs}>
      <label>Name</label>
      <input placeholder="Your name"/>
      <label>Email</label>
      <input placeholder="Your email"/>
      <label>Phone</label>
      <input placeholder="Your phone number"/>
      <label>Message</label>
      <textarea rows="10" cols="50" placeholder="Tell us more about"/>
      </div>
      <button className={style.button}>Submit</button>
    </div>
  );
};

export default Contactcom;
