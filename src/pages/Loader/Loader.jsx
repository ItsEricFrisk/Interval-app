import { animate, motion } from "framer-motion";
import { useEffect, useState } from "react";

const Loader = () => {
  // handles the rendering
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    // Animation for updating the number
    animate(currentValue, 100, {
      duration: 5,
      onUpdate: (latest) => setCurrentValue(Math.floor(latest)),
    });
  }, []);

  // Animation for INTERVAL
  const drawSvg = {
    hidden: { opacity: 0 },
    // i = paths index
    visible: (i) => {
      return {
        opacity: 1,
        x: i * 35,
        transition: {
          // Delaying every letter and sets duration
          opacity: { delay: 1 + i * 0.4, duration: 0.5 },
        },
      };
    },
  };

  // SVG paths
  const paths = [
    "M20.94318 0.727272V24H15.0227273V0.727272H4" /* I */,
    "M19.4886 0.727272V24H15.2386L5.11364 9.35227H4.94318V24H0.0227273V0.727272H4.34091L14.3864 15.3636H14.5909V0.727272H19.4886Z" /* N */,
    "M0.136364 4.78409V0.727272H19.25V4.78409H12.125V24H7.26136V4.78409H0.136364Z" /* T */,
    "M0.0227273 24V0.727272H15.7045V4.78409H4.94318V10.3295H14.8977V14.3864H4.94318V19.9432H15.75V24H0.0227273Z" /* E */,
    "M0.0227273 24V0.727272H9.20455C10.9621 0.727272 12.4621 1.04167 13.7045 1.67045C14.9545 2.29167 15.9053 3.17424 16.5568 4.31818C17.2159 5.45454 17.5455 6.79167 17.5455 8.32955C17.5455 9.875 17.2121 11.2045 16.5455 12.3182C15.8788 13.4242 14.9129 14.2727 13.6477 14.8636C12.3902 15.4545 10.8674 15.75 9.07955 15.75H2.93182V11.7955H8.28409C9.22348 11.7955 10.0038 11.6667 10.625 11.4091C11.2462 11.1515 11.7083 10.7652 12.0114 10.25C12.322 9.73485 12.4773 9.0947 12.4773 8.32955C12.4773 7.55682 12.322 6.9053 12.0114 6.375C11.7083 5.8447 11.2424 5.44318 10.6136 5.17045C9.99242 4.89015 9.20833 4.75 8.26136 4.75H4.94318V24H0.0227273ZM12.5909 13.4091L18.375 24H12.9432L7.28409 13.4091H12.5909Z" /* R */,
    "M6.22727 0.727272L11.8523 18.4091H12.0682L17.7045 0.727272H23.1591L15.1364 24H8.79545L0.761364 0.727272H6.22727Z" /* V */,
    "M6.03409 24H0.761364L8.79545 0.727272H15.1364L23.1591 24H17.8864L12.0568 6.04545H11.875L6.03409 24ZM5.70455 14.8523H18.1591V18.6932H5.70455V14.8523Z" /* A */,
    "M0.0227273 24V0.727272H4.94318V19.9432H14.9205V24H0.0227273Z" /* L */,
  ];

  return (
    <section className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden text-white bg-darkBg">
      {/* SVG */}
      <motion.svg
        width="300"
        height="30"
        viewBox="-20 0 300 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial="hidden"
        animate="visible"
      >
        {/* Mapping out INTERVAL */}
        {paths.map((path, i) => (
          <motion.path
            key={i}
            variants={drawSvg}
            custom={i}
            d={path}
            // fill="#F2F2F2"
            fill={"#6A7B76"}
          />
        ))}
      </motion.svg>

      {/* p-tag*/}
      <motion.p
        className="text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: [1] }}
        transition={{ delay: 4, duration: 1 }}
      >
        For all your timing needs
      </motion.p>
      {/* Loading animation */}
      <motion.p className="mt-2 text-xl">{currentValue}%</motion.p>
    </section>
  );
};

export default Loader;
