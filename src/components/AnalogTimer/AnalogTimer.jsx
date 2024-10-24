import analogTimer from "../../assets/analogTimer.svg";
import { motion } from "framer-motion";
import useStore from "../../store/store";
import { useEffect, useState } from "react";

function currentTimeToNumber(currentTime) {
  const [minutes, seconds] = currentTime.split(":").map(Number);
  return minutes * 60 + seconds;
}

export default function AnalogTimer({ currentTime, pauseStatus, interval }) {
  const [runIndicator, setRunIndicator] = useState(false);

  // Zustand
  const startTime = useStore((state) => state.minutes);

  const getDuration = startTime * 60;

  let currentSeconds = currentTimeToNumber(currentTime);

  // Remaining time
  const secondsElapsed = getDuration - currentSeconds;

  // Calculate rotation angle (from 0 degrees)
  const initialRotation = (secondsElapsed / getDuration) * 360;

  // Set remaining time as duration
  const remainingDuration = currentSeconds > 0 ? currentSeconds : 1;

  // Pause/resume indicator
  useEffect(() => {
    if (pauseStatus) {
      setRunIndicator(false);
    } else {
      setRunIndicator(true);
    }
  }, [pauseStatus]);

  // Handle indicator run when intervalCount changes
  useEffect(() => {
    if (interval) {
      setRunIndicator(true);
    }
  }, [interval]);

  return (
    <section className="w-screen h-64 flex flex-col items-center justify-center">
      <img src={analogTimer} alt="SVG Seconds" />
      <motion.span
        initial={{ rotate: initialRotation }}
        animate={{ rotate: runIndicator ? 360 : initialRotation }}
        transition={{
          duration: remainingDuration,
          ease: "linear",
          repeat: runIndicator ? Infinity : 0,
        }}
        className="w-1 h-[90px] rounded-full bg-black absolute top-[178px] origin-bottom"
      ></motion.span>
      <p className="text-gray-300 text-sm absolute top-72 -z-10 ">
        {currentTime}
      </p>
    </section>
  );
}
