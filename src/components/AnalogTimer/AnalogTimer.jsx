import analogTimer from "../../assets/analogTimer.svg";
import { motion } from "framer-motion";

export default function AnalogTimer() {
  return (
    <section className="w-screen h-64 flex items-center justify-center">
      <img src={analogTimer} alt="SVG Seconds" />
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 10 }}
        className="w-1 h-[90px] rounded-full bg-black absolute top-[178px]  origin-bottom"
      ></motion.div>
    </section>
  );
}
