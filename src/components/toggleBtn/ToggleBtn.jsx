import { useState } from "react";
import { motion } from "framer-motion";
import Sidebar from "../../components/Sidebar/Sidebar";

export default function ToggleBtn() {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  const handleSidebar = () => {
    setToggleSidebar(!toggleSidebar);
  };
  return (
    <>
      <div
        className={`absolute flex flex-col w-10 h-6 justify-between top-4 right-4  z-50`}
        onClick={handleSidebar}
      >
        {/* ---------- */}
        <motion.div
          initial={{ y: 0 }}
          animate={toggleSidebar ? { y: 10, rotate: 45 } : {}}
          transition={
            toggleSidebar ? { duration: 0.2, delay: 1.2 } : { delay: 0.5 }
          }
          className={`w-full h-1  origin-center ${
            toggleSidebar ? "bg-white" : "bg-black"
          } rounded-full`}
        ></motion.div>
        {/* ---------- */}
        <motion.div
          initial={{ scale: 1, opacity: 1 }}
          animate={
            toggleSidebar ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }
          }
          transition={toggleSidebar ? { delay: 0.5 } : { delay: 1 }}
          className={`w-full h-1 ${
            toggleSidebar ? "bg-white" : "bg-black"
          } rounded-xl`}
        ></motion.div>
        {/* ---------- */}
        <motion.div
          initial={{ y: 0 }}
          animate={toggleSidebar ? { y: -10, rotate: -45 } : {}}
          transition={
            toggleSidebar ? { duration: 0.2, delay: 1.2 } : { delay: 0.5 }
          }
          className={`w-full h-1  origin-center ${
            toggleSidebar ? "bg-white" : "bg-black"
          } rounded-xl`}
        ></motion.div>
      </div>

      {/* Sidebar */}
      <Sidebar toggleSidebar={toggleSidebar} />
    </>
  );
}
