import { useEffect, useState } from "react";

export default function LogoHero() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Control zoom intensity
      const zoomSpeed = 0.0015;

      // Calculate scale
      const newScale = 1 + scrollY * zoomSpeed;

      // Clamp scale (important)
      setScale(Math.min(newScale, 2.5));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src="/akiassc'26-logo.png"
        alt="AKIASSC"
        style={{
          transform: `scale(${scale})`,
        }}
        className="
          w-[300px] md:w-[450px]
          transition-transform duration-200 ease-out
          will-change-transform
        "
      />
    </section>
  );
}
