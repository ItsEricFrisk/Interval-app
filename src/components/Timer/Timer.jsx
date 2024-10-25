import { useEffect, useState } from "react";
import useTimer from "easytimer-react-hook";
import useStore from "../../store/store";
import Pause from "../Pause/Pause";
import TimerFinished from "../TimerFinished/TimerFinished";

export default function Timer({ intervalCheckbox, restCheckbox, pauseStatus }) {
  const [finish, setFinish] = useState(false);
  const [interval, setInterval] = useState(false);

  // Zustand
  const startTime = useStore((state) => state.minutes); // Get minutes
  const TimerComponent = useStore((state) => state.timer); // Retrieve which timer to display
  const { pause, setPause } = useStore();

  // EasyTimer
  const [timer, isTargetAchieved] = useTimer({
    startValues: { minutes: startTime },
    countdown: true,
    target: 0,
    updateWhenTargetAchieved: true,
  });

  const currentTime = timer.getTimeValues().toString().slice(3, 8); //   Get current value from timer

  // Handle timer at start
  useEffect(() => {
    timer.start();
    return () => {
      timer.stop();
    };
  }, [timer, pause]);

  // Handle pause/resume timer
  useEffect(() => {
    if (pauseStatus || pause) {
      timer.pause();
    } else {
      timer.start();
    }
  }, [pauseStatus, pause]);

  // When the timer is at 0 check conditions and set pause to true if needed, else set finish to true or start interval
  useEffect(() => {
    if (isTargetAchieved && intervalCheckbox) {
      setInterval(true);
      timer.reset();
      timer.start({ startValues: { minutes: startTime } });
    }

    if (isTargetAchieved && intervalCheckbox && restCheckbox) {
      setPause(true);
      setInterval(true);
    } else if (isTargetAchieved && !intervalCheckbox) {
      setFinish(true);
      setPause(false);
    }
  }, [isTargetAchieved, intervalCheckbox, restCheckbox]);

  return (
    <>
      {pause ? (
        <Pause />
      ) : finish ? (
        <TimerFinished />
      ) : (
        <TimerComponent
          currentTime={currentTime}
          interval={interval}
          pauseStatus={pauseStatus}
        />
      )}
    </>
  );
}
