import { create } from "zustand";
import AnalogTimer from "../components/AnalogTimer/AnalogTimer";
import DigitalTimer from "../components/DigitalTimer/DigitalTimer";
import TextTimer from "../components/TextTimer/TextTimer";

const useStore = create((set) => ({
  // Set minutes
  minutes: 10,
  increaseMinutes: () => set((state) => ({ minutes: state.minutes + 1 })),
  decreaseMinutes: () => set((state) => ({ minutes: state.minutes - 1 })),
  // setMinutes: (newMinutes) => set({ minutes: newMinutes }),
  setMinutes: (newMinutes) => {
    console.log("Setting minutes to:", newMinutes);
    set({ minutes: newMinutes });
  },

  // Store what timer to show
  timer: AnalogTimer,
  setActiveTimer: (newTimer) => set((state) => ({ timer: newTimer })),
}));

export default useStore;
