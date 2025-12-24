export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative min-h-screen
        flex flex-col items-center justify-center
        text-center px-6
        overflow-hidden
      "
    >
      {/* Background glow */}
      <div
        className="
          absolute inset-0
          pointer-events-none
        "
      />

      {/* Logo */}
      <img
        src="/akiassc'26-logo.png"
        alt="AKIASSC"
        className="
          w-[260px] md:w-[340px]
          mb-20
          drop-shadow-[0_0_35px_rgba(212,175,55,0.45)]
        "
      />

      {/* Content Group */}
      <div className="flex flex-col items-center gap-8 max-w-3xl">
        {/* Tagline */}
        <p
          className="
            text-[rgb(212,175,55)]
            text-lg md:text-2xl
            tracking-wide
          "
          style={{
            textShadow: "0 0 18px rgba(212,175,55,0.45)",
          }}
        >
          All Kerala Industry Applications Society Student Conclave
        </p>

        {/* Live Heading */}
        <h2
          className="
            text-4xl md:text-6xl
            font-extrabold
            text-[rgb(212,175,55)]
            tracking-tight
          "
          style={{
            textShadow:
              "0 0 30px rgba(212,175,55,0.65), 0 0 60px rgba(212,175,55,0.35)",
          }}
        >
          We Are Live Now
        </h2>

        {/* CTA */}
       <div className="mt-16 flex justify-center">
  <a
    href="#register"
    className="
      relative
      min-w-[160px] md:min-w-[220px]
      h-[48px] md:h-[60px]
      flex items-center justify-center

      text-lg md:text-xl
      font-extrabold
      text-black

      rounded-full
      bg-gradient-to-r from-[rgb(212,175,55)] to-[rgb(244,229,160)]

      hover:scale-105
      transition-all duration-300
    "
  >
    Buy Tickets

  </a>
</div>
      </div>
    </section>
  );
}
