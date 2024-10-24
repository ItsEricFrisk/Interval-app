import useStore from "../../store/store";

export default function TimerFinished() {
  // Zustand
  const { setStartTimer } = useStore();

  return (
    <div className="w-screen h-screen bg-darkBg flex flex-col items-center justify-center absolute top-0 left-0 z-50 text-white">
      <div className="w-80 h-80 bg-darkPuls1 rounded-full flex items-center justify-center animate-smooth-pulse">
        <div className="w-64 h-64 bg-darkPuls2 rounded-full flex items-center justify-center">
          <div className="w-44 h-44 bg-darkPuls3 rounded-full flex items-center justify-center"></div>
        </div>
      </div>
      <h2 className="absolute top-1/2 left-28 text-4xl">Times up!</h2>

      <button
        className="py-2 px-4 absolute bottom-28 border-2 border-gray-500 rounded-md shadow-xl select-none active:scale-95"
        onClick={() => setStartTimer(false)}
      >
        SET NEW TIMER
      </button>
    </div>
  );
}
