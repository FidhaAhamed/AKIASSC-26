import { useEffect, useRef, useState } from "react";

function ScrollBlock({ children }) {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate visibility progress (0 → 1)
      const visible =
        1 - Math.min(Math.max(rect.top / windowHeight, 0), 1);

      setProgress(visible);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scale = 0.6 + progress * 0.4; // from 0.6 → 1
  const opacity = Math.min(progress * 1.2, 1);

  return (
    <section
      ref={ref}
      className="
        min-h-screen
        flex items-center justify-center
        overflow-hidden
        transition-transform duration-300
        will-change-transform
      "

      style={{
        transform: `scale(${scale})`,
        opacity,
      }}
    >
      {children}
    </section>
  );
}

export default function ScrollSections() {
  return (
    <>
      {/* Tagline */}
      <ScrollBlock>
        <h1
          className="text-[rgb(212,175,55)] text-4xl md:text-6xl font-bold text-center max-w-5xl"
          style={{
            textShadow: "0 0 20px rgba(212,175,55,0.5)",
          }}
        >
          All Kerala Industry Applications Society Student Conclave
        </h1>
      </ScrollBlock>

      {/* Location */}
      <ScrollBlock>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 px-4 sm:px-6 max-w-6xl">

          {/* Text Side */}
          <div className="text-center md:text-left max-w-[320px] sm:max-w-none">
  <h2
    className="
      text-[rgb(212,175,55)]
      text-3xl sm:text-4xl md:text-5xl
      font-bold
      leading-tight
      break-words
    "
    style={{ textShadow: "0 0 25px rgba(212,175,55,0.45)" }}
  >
    At Mar Athanasius<br />
    College of Engineering,<br className="hidden sm:block" />
    <span className="block sm:inline">Kothamangalam</span>
  </h2>
</div>


          {/* Image Side */}
          <div className="relative">
            {/* Glow */}
            <div className="
              absolute inset-0 rounded-2xl
              bg-[rgba(212,175,55,0.25)]
              blur-2xl
            " />

            <img
              src="/MACE.jpeg"
              alt="MACE Kothamangalam"
              className="
                relative w-full max-w-[320px] sm:max-w-[360px] md:max-w-[420px]
                rounded-2xl
                border border-[rgba(212,175,55,0.45)]
                shadow-[0_20px_50px_rgba(212,175,55,0.35)]
              "
            />
          </div>

        </div>
      </ScrollBlock>

      {/* Event Dates */}
      <ScrollBlock>
        <div className="text-center px-6">
          <p
            className="text-[rgb(212,175,55)] text-4xl md:text-6xl font-bold tracking-wide"
            style={{
              textShadow: "0 0 18px rgba(212,175,55,0.45)",
            }}
          >
            30–31 January & 1 February 2026
          </p>
        </div>
      </ScrollBlock>


      {/* Mission */}
      <ScrollBlock>
        <p
          className="text-[rgb(212,175,55)] text-3xl md:text-5xl text-center max-w-4xl"
          style={{
            textShadow: "0 0 20px rgba(212,175,55,0.5)",
          }}
        >
          Join us to learn, innovate, and lead the future!
        </p>
      </ScrollBlock>
    </>
  );
}
