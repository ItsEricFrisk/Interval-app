import { useState } from "react";
import SetTimer from "../../components/SetTimer/SetTimer";
import Timer from "../../components/Timer/Timer";
import ToggleBtn from "../../components/toggleBtn/ToggleBtn";
import useStore from "../../store/store";

export default function Main() {
  const [intervalCheckbox, setIntervalCheckbox] = useState(false);
  const [restCheckbox, setRestCheckbox] = useState(false);
  const [pauseStatus, setPauseStatus] = useState(false);

  // Zustand
  const { startTimer, setStartTimer } = useStore();

  // Checkbox Interval
  const handleIntervalCheckbox = () => {
    setIntervalCheckbox((prev) => !prev);
  };

  // Checkbox Rest
  const handleRestCheckbox = () => {
    setRestCheckbox((prev) => !prev);
  };

  // Handle Pause button
  const handleRestBtn = () => {
    setPauseStatus(!pauseStatus);
  };

  // Handle start button
  const handleStartBtn = () => {
    setStartTimer(!startTimer);
  };

  return (
    <main className="grid items-center justify-items-center w-screen h-full grid-cols-1 grid-rows-5 py-3 bg-antiFlashWhite">
      {startTimer ? <ToggleBtn /> : ""}
      <h1 className="self-start text-2xl font-semibold row-span-1">INTERVAL</h1>

      {/* Timer */}
      <div className="row-span-2 justify-self-center">
        {startTimer ? (
          <Timer
            intervalCheckbox={intervalCheckbox}
            restCheckbox={restCheckbox}
            pauseStatus={pauseStatus}
          />
        ) : (
          <SetTimer />
        )}
      </div>

      {/* Checkboxes */}
      <div
        className={`${
          startTimer
            ? "hidden"
            : "w-2/3 h-20  px-7 flex flex-col justify-between self-end row-span-1"
        }`}
      >
        <div
          className={`flex items-center transition-all duration-500 ${
            intervalCheckbox ? "-translate-y-0" : "translate-y-16 delay-300"
          }`}
        >
          <input
            type="checkbox"
            name="intervalCheckbox"
            id="intervalCheckbox"
            className="mr-2 w-7 h-7"
            checked={intervalCheckbox}
            onChange={handleIntervalCheckbox}
          />
          <label htmlFor="intervalCheckbox" className="text-lg font-medium">
            intervals
          </label>
        </div>
        <div
          className={`${
            intervalCheckbox ? "opacity-100 delay-300" : "opacity-0 invisible"
          } flex items-center transition-all duration-500`}
        >
          <input
            type="checkbox"
            name="restCheckbox"
            id="restCheckbox"
            className="mr-2 w-7 h-7"
            checked={restCheckbox}
            onChange={handleRestCheckbox}
          />
          <label htmlFor="restCheckbox" className="text-lg font-medium">
            5 min break
          </label>
        </div>
      </div>

      {/* Pause */}
      <button
        className={` ${
          startTimer ? "block" : "hidden"
        } px-20 py-2 text-lg border-2 row-start-4 self-end border-gray-900 rounded-md shadow-xl select-none active:scale-95`}
        onClick={handleRestBtn}
      >
        {pauseStatus ? "Resume" : "Pause"}
      </button>

      {/* Start */}
      <button
        className="px-12 py-2 text-lg border-2 row-start-5 border-gray-900 rounded-md shadow-xl select-none active:scale-95"
        onClick={handleStartBtn}
      >
        {!startTimer ? "START TIMER" : "ABORT TIMER"}
      </button>
    </main>
  );
}
