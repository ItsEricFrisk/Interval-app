import useTimer from "easytimer-react-hook";
import { useEffect, useState } from "react";
import useStore from "../../store/store";

export default function Pause() {
  const [isPauseVisible, setIsPauseVisible] = useState(true);

  // Zustand
  const { pause, setPause } = useStore();

  // Timer for the break
  const [restTimer, isTargetAchieved] = useTimer({
    startValues: { minutes: 5 },
    countdown: true,
    target: 0,
    updateWhenTargetAchieved: true,
  });

  const timeLeft = restTimer.getTimeValues().toString().slice(3, 8);

  // Start timer
  useEffect(() => {
    restTimer.start();
    return () => {
      restTimer.stop();
    };
  }, [pause]);

  // Set pause to false when timer is at 0
  useEffect(() => {
    if (isTargetAchieved) {
      setTimeout(() => {
        setPause(false);
      }, 0);
    }
  }, [isTargetAchieved]);

  const handlePauseBtn = () => {
    restTimer.stop();
    setIsPauseVisible(false);
    setTimeout(() => {
      setPause(false);
    }, 0);
  };

  return (
    <div
      className={`${
        isPauseVisible ? "block" : "hidden"
      } w-screen h-screen bg-darkBg flex flex-col items-center justify-center absolute top-0 left-0 z-50 text-white`}
    >
      <div className="w-80 h-80 bg-darkPuls1 rounded-full flex items-center justify-center animate-smooth-pulse">
        <div className="w-64 h-64 bg-darkPuls2 rounded-full flex items-center justify-center">
          <div className="w-44 h-44 bg-darkPuls3 rounded-full flex items-center justify-center"></div>
        </div>
      </div>
      <h2 className="absolute top-1/2 left-20 text-4xl">Pause & breath</h2>

      <p className="absolute bottom-52 text-xl text-gray-400">{timeLeft}</p>

      <button
        onClick={handlePauseBtn}
        className="py-2 px-4 absolute bottom-28 border-2 border-gray-500 rounded-md shadow-xl select-none active:scale-95"
      >
        NO PAUSE, GO ON!
      </button>
    </div>
  );
}
