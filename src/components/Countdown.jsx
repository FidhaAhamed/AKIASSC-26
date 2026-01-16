import { useEffect, useState } from "react";

export default function Countdown() {
  const eventDate = new Date("2026-01-31T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = eventDate - now;

      if (diff <= 0) return;

      setTimeLeft({
        days: String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, "0"),
        hours: String(
          Math.floor((diff / (1000 * 60 * 60)) % 24)
        ).padStart(2, "0"),
        minutes: String(
          Math.floor((diff / (1000 * 60)) % 60)
        ).padStart(2, "0"),
        seconds: String(
          Math.floor((diff / 1000) % 60)
        ).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [eventDate]);

  return (
    <section
      id="countdown"
      className="
        min-h-screen
        px-6 pt-32 pb-24
        flex flex-col items-center
        text-center
      "
    >
      {/* Section title */}
      <h2
        className="text-4xl md:text-5xl font-semibold mb-20"
        style={{ color: "#d4af37" }}
      >
        Event Countdown
      </h2>

      {/* Countdown boxes - 2x2 grid on mobile, 4 columns on desktop */}
      <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-6 md:gap-10 max-w-6xl">
        {Object.entries(timeLeft).map(([label, value]) => (
          <div
            key={label}
            className="
              min-w-[140px]
              md:min-w-[220px]
              min-h-[140px]
              md:min-h-[220px]

              rounded-3xl
              border-2
              border-[rgba(212,175,55,0.35)]
              bg-[linear-gradient(135deg,rgba(212,175,55,0.08),rgba(10,22,40,0.95))]

              flex flex-col items-center justify-center
              
              transition-transform duration-500 ease-in-out
              hover:scale-110
              hover:animate-pulse
            "
            style={{
              boxShadow: "0 0 20px rgba(212,175,55,0.4), 0 0 40px rgba(212,175,55,0.2)"
            }}
          >
            {/* Number */}
            <p
              className="text-4xl md:text-6xl font-bold"
              style={{ 
                color: "#d4af37"
              }}
            >
              {value}
            </p>

            {/* Label */}
            <p 
              className="uppercase text-xs md:text-base text-gray-300 mt-2 md:mt-4 tracking-wide"
            >
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}