export default function DigitalTimer({ currentTime }) {
  return (
    <section className="w-screen h-64 flex items-center justify-center">
      <p className="text-6xl font-semibold">{currentTime}</p>
    </section>
  );
}
