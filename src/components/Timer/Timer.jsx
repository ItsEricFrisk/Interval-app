import { useEffect, useState } from "react";
import useTimer from "easytimer-react-hook";
import useStore from "../../store/store";

export default function Timer({ intervalCheckbox, breakCheckbox }) {
  const [targetAchieved, setTargetAchieved] = useState(false);

  // Zustand
  const startTime = useStore((state) => state.minutes); // Get minutes
  const TimerComponent = useStore((state) => state.timer); // Retrieve which timer to display

  const startValues = {
    minutes: startTime,
    // seconds: 0,
  };

  // EasyTimer
  const [timer, isTargetAchieved] = useTimer({
    startValues,
    countdown: true,
    target: 0,
    // updateWhenTargetAchieved: true,
    // precision: "seconds",
    // getTimeValues: "minutes",
  });

  useEffect(() => {
    timer.start();
    return () => {
      timer.stop();
    };
  }, [timer]);

  const currentTime = timer.getTimeValues().toString().slice(3, 8); //   Get current value from timer

  //   FUNGERAR INTE
  //   useEffect(() => {
  //     if (isTargetAchieved) {
  //       setTargetAchieved(true);
  //     }
  //   }, [isTargetAchieved]);

  return <TimerComponent currentTime={currentTime} />;
}
