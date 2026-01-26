export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative min-h-screen
        pt-20 sm:pt-24 md:pt-28
        flex flex-col items-center justify-center
        text-center px-4 sm:px-6
        overflow-hidden
      "
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none" />

      {/* Logo */}
      <img
        src={`${import.meta.env.BASE_URL}akiassc'26-logo.png`}
        alt="AKIASSC"
        className="
          w-[200px] sm:w-[240px] md:w-[300px] lg:w-[340px]
          mb-12 sm:mb-16 md:mb-20
          drop-shadow-[0_0_35px_rgba(212,175,55,0.45)]
          animate-zoom-in
        "
      />

      {/* Content */}
       <div className="flex flex-col items-center gap-6 sm:gap-8 max-w-3xl md:max-w-4xl w-full">
        {/* Tagline */}
        <p
          className="
          text-[rgb(212,175,55)]
         text-base sm:text-lg md:text-2xl
         font-bold
         tracking-wide
         animate-slide-down delay-1-2s  // ← CHANGED from: animate-fade-in delay-1s
         px-2
"
          style={{ textShadow: "0 0 18px rgba(212,175,55,0.45)" }}
        >
          All Kerala Industry Applications Society Student Conclave
        </p>

        {/* Heading */}
        <h2
          className="
             text-3xl sm:text-4xl md:text-6xl
    font-extrabold
    text-[rgb(212,175,55)]
    tracking-tight
    animate-fade-in delay-1-4s 
          "
          style={{
            textShadow:
              "0 0 30px rgba(212,175,55,0.65), 0 0 60px rgba(212,175,55,0.35)",
          }}
        >
          We Are Live Now
        </h2>

        {/* Event Details */}
        <p
          className="
              text-[rgb(212,175,55)]
              text-base sm:text-lg md:text-2xl
              tracking-wide
              animate-fade-in   
              px-2 delay-3s
          "
          style={{ textShadow: "0 0 18px rgba(212,175,55,0.45)" }}
        >
          Join us to learn, innovate, and lead the future <br className="hidden sm:block" />
          at MACE Kothamangalam on March 06, 07 & 08
        </p>

        {/* CTA */}
        
<div className="mt-10 sm:mt-14 md:mt-16 flex justify-center animate-zoom-in delay-1-8s">

          <a
            href="#register"
            className="
              min-w-[160px] sm:min-w-[180px] md:min-w-[220px]
              h-[44px] sm:h-[50px] md:h-[60px]
              flex items-center justify-center
              text-base sm:text-lg md:text-xl
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
