import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  return (
    <div className="parallax">
      <motion.h1>
        {type === "services" ? "What We Do?" : "What We Did?"}
      </motion.h1>
    </div>
  );
};

export default Parallax;
