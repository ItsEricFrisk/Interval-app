import { useEffect } from "react";
import arrow from "../../assets/arrow.svg";
import useStore from "../../store/store";
import { useShallow } from "zustand/shallow";

export default function SetTimer({}) {
  //   Zustand
  const { minutes, increaseMinutes, decreaseMinutes } = useStore(
    useShallow((state) => ({
      minutes: state.minutes,
      increaseMinutes: state.increaseMinutes,
      decreaseMinutes: state.decreaseMinutes,
      setMinutes: state.setMinutes,
    }))
  );

  // Handle left arrow
  const handleLeftArrow = () => {
    if (minutes <= 1) {
      useStore.getState().setMinutes(60);
    } else {
      decreaseMinutes();
    }
  };
  // Handle right arrow
  const handleRightArrow = () => {
    if (minutes >= 60) {
      useStore.getState().setMinutes(1);
    } else {
      increaseMinutes();
    }
  };

  // Felsökning
  // useEffect(() => {
  //   console.log("Minutes in SetTimer has changed:", minutes);
  // }, [minutes]);

  return (
    <div className="w-screen h-64 grid grid-rows-2 grid-cols-3 justify-items-center items-end self-end">
      <img
        src={arrow}
        alt="Left arrow"
        className="w-9 active:scale-90 cursor-pointer select-none"
        onClick={handleLeftArrow}
      />
      <p className="font-semibold text-6xl select-none">{minutes}</p>
      <img
        src={arrow}
        alt="Right arrow"
        className="w-9 rotate-180 active:scale-90 cursor-pointer select-none"
        onClick={handleRightArrow}
      />
      <p className="self-start col-span-3 text-sm text-gray-500 font-semibold">
        Minutes
      </p>
    </div>
  );
}
