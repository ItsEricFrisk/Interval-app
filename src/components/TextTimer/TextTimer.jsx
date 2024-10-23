import { useState } from "react";

useState;
export default function TextTimer({ currentTime }) {
  const [minutes, setMinutes] = useState("SEVEN");
  const [seconds, setSeconds] = useState("FOUR");

  return (
    <section className="w-screen h-64 flex flex-col items-center justify-center">
      {/* <div className="flex flex-col items-start">
        <p className="text-4xl font-semibold">{`${minutes} MINUTES`}</p>
        <p className="text-3xl font-semibold">{`${seconds} SECONDS`}</p>
      </div> */}
      <p>{currentTime}</p>
    </section>
  );
}
