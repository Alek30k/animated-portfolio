import { useRef, useState } from "react";
import "./contact.scss";
import { motion, useInView } from "framer-motion";
// import emailjs from "@emailjs/browser";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  return (
    <div className="contact">
      <div className="textContainer">
        <h1>Let’s work together</h1>
        <div className="item">
          <h2>Mail</h2> <span>alemank23k@gmail.com</span>
        </div>
        <div className="item">
          <h2>Address</h2>{" "}
          <span>Argentina, Formosa, General Manuel Belgrano</span>
        </div>
        <div className="item">
          <h2>Phone</h2> <span>+54 3704-678598</span>
        </div>
      </div>
      <div className="formContainer">
        <form>
          <input type="text" required placeholder="Name" />
          <input type="email" required placeholder="Email" />
          <textarea rows={8} placeholder="Message" />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
