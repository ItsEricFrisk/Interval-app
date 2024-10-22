import { AnimatePresence, motion } from "framer-motion";
import TextTimer from "../TextTimer/TextTimer";
import AnalogTimer from "../AnalogTimer/AnalogTimer";
import DigitalTimer from "../DigitalTimer/DigitalTimer";
import { useState } from "react";
import useStore from "../../store/store";

export default function Sidebar({ toggleSidebar }) {
  const { setActiveTimer } = useStore();

  // Get a smooth animation on toggle navbar
  const navAnimation = {
    hidden: {
      x: 400,
      transition: {
        duration: 0.7,
        ease: "easeIn",
        staggerChildren: 0.4,
        staggerDirection: -1,
      },
    },
    visible: {
      opacity: [0, 0.5, 0.9],
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeIn",
      },
    },
  };

  const staggerLinks = {
    hidden: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const liAnimation = {
    hidden: {
      y: 30,
      opacity: 0,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    open: {
      y: 0,
      opacity: 1,
      transition: { y: { stiffness: 1000, duration: 0.3 } },
    },
  };

  const links = [
    { component: AnalogTimer, names: "Analog timer" },
    { component: DigitalTimer, names: "Digital timer" },
    { component: TextTimer, names: "Text timer" },
  ];

  return (
    <AnimatePresence>
      {toggleSidebar && (
        <motion.nav
          className={`absolute top-0 left-0 w-screen h-screen bg-darkBg text-white flex flex-col items-center justify-center z-40`}
          initial="hidden"
          animate={toggleSidebar ? "visible" : "hidden"}
          variants={navAnimation}
          exit={"hidden"}
        >
          <motion.ul
            initial="hidden"
            animate={toggleSidebar ? "open" : "hidden"}
            variants={staggerLinks}
            exit={"hidden"}
          >
            {links.map((link, index) => (
              <motion.li
                key={index}
                className="my-5 text-2xl"
                variants={liAnimation}
              >
                <a
                  className=""
                  onClick={() => {
                    setActiveTimer(link.component);
                  }}
                >
                  {link.names}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
