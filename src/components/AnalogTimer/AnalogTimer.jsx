import analogTimer from "../../assets/analogTimer.svg";
import { motion } from "framer-motion";
import useStore from "../../store/store";

export default function AnalogTimer({ currentTime }) {
  // Zustand
  const startTime = useStore((state) => state.minutes);

  const getDuration = startTime * 60;
  // console.log(currentTime, startTime, getDuration);

  return (
    <section className="w-screen h-64 flex flex-col items-center justify-center">
      <img src={analogTimer} alt="SVG Seconds" />
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: getDuration, ease: "linear", delay: 1 }}
        className="w-1 h-[90px] rounded-full bg-black absolute top-[178px] origin-bottom"
      ></motion.div>
      <p className="text-gray-300 text-sm absolute top-72 -z-10 ">
        {currentTime}
      </p>
    </section>
  );
}
