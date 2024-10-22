import { motion } from "framer-motion";

export default function DigitalTimer() {
  return (
    <section className="w-screen h-64 flex items-center justify-center">
      <p className="text-6xl font-semibold">{10}</p>
      <p className="text-6xl font-semibold">{":"}</p>
      <p className="text-6xl font-semibold">{"00"}</p>
    </section>
  );
}
