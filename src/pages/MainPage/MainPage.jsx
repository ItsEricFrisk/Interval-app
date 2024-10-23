import { useState } from "react";
import SetTimer from "../../components/SetTimer/SetTimer";
import useStore from "../../store/store";
import Timer from "../../components/Timer/Timer";

export default function Main() {
  const [intervalCheckbox, setIntervalCheckbox] = useState(false);
  const [breakCheckbox, setBreakCheckbox] = useState(false);
  const [startTimer, setStartTimer] = useState(false);

  // Checkbox Interval
  const handleIntervalCheckbox = () => {
    setIntervalCheckbox((prev) => !prev);
  };

  // Checkbox Break
  const handleBreakCheckbox = () => {
    setBreakCheckbox((prev) => !prev);
  };

  // Start timer button. Checks if any checkbox is filled, otherwise start timer
  const handleStartBtn = () => {
    if (intervalCheckbox) {
      console.log(intervalCheckbox);
    }

    if (breakCheckbox) {
      console.log(breakCheckbox);
    }

    // Start timer
    setStartTimer(!startTimer);
  };

  return (
    <main className="grid items-center justify-items-center w-screen h-full grid-cols-1 grid-rows-6 py-3 bg-antiFlashWhite">
      <h1 className="self-start text-2xl font-semibold row-span-1">INTERVAL</h1>

      {/* Timer */}
      <div className="row-span-2 justify-self-center">
        {startTimer ? (
          <Timer interval={intervalCheckbox} break={breakCheckbox} />
        ) : (
          <SetTimer />
        )}
      </div>

      {/* Checkboxes */}
      <div
        className={`${
          startTimer
            ? "invisible"
            : "w-2/3 h-20  px-7 flex flex-col justify-between self-end row-span-1"
        }`}
      >
        <div className="flex items-center row-span-9">
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
        <div className="flex items-center">
          <input
            type="checkbox"
            name="breakCheckbox"
            id="breakCheckbox"
            className="mr-2 w-7 h-7"
            checked={breakCheckbox}
            onChange={handleBreakCheckbox}
          />
          <label htmlFor="breakCheckbox" className="text-lg font-medium">
            5 min break
          </label>
        </div>
      </div>

      {/* Start */}
      <button
        className="px-12 py-2 text-lg border-2 row-span-1 border-gray-900 rounded-md shadow-xl select-none active:scale-95"
        onClick={handleStartBtn}
      >
        {!startTimer ? "START TIMER" : "ABORT TIMER"}
      </button>
    </main>
  );
}
