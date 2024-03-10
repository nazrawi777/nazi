import { useState } from "react";
import Links from "./links/Links";
import { motion } from "framer-motion";
import "./sidebar.scss";
import ToggleButton from "./toggleButton/ToggleButton";

const variants = {
  open: {
    opacity: 1,
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    opacity: 0,
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Sidebar = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <motion.div className="sidebar z-50" animate={open ? "open" : "closed"}>
      <motion.div className="background" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} open={open} />
    </motion.div>
  )
}

export default Sidebar;