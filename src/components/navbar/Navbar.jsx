import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* SidKebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Ale Dev
        </motion.span>
        <div className="social">
          <a target="_blank" href="#">
            <img src="/github.png" alt="" />
          </a>
          <a target="_blank" href="#">
            <img src="/linkedin.png" alt="" />
          </a>
          <a target="_blank" href="https://www.facebook.com/alejandrosier29/">
            <img src="/facebook.png" alt="" />
          </a>
          <a target="_blank" href="https://bit.ly/3CPWW1j">
            <img src="/whatsapp.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
