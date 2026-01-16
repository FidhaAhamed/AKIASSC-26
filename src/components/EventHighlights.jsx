import { useState, useEffect } from "react";

export default function EventHighlights() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4);

  const events = [
    {
      title: "Industrial Visit – Idamalayar Power Generation Unit",
      emoji: "🏭",
      description:
        "Explore large-scale hydroelectric power generation and witness real-time operations at one of Kerala’s major power facilities."
    },
    {
      title: "Industrial Visit – Lower Periyar Hydroelectric Power Plant",
      emoji: "🌊",
      description:
        "Understand how flowing water is converted into sustainable energy through hydropower systems and plant operations."
    },
    {
      title: "Innovation Challenge",
      emoji: "💡",
      description:
        "A platform for students to present innovative, feasible, and impactful solutions to real-world problems."
    },
    {
      title: "Technical Talk – Electrical System Modeling (Revit MEP)",
      emoji: "⚡",
      description:
        "Learn how electrical systems are planned and visualized using industry-relevant design tools and workflows."
    },
    {
      title: "Technical Talk – Robotics",
      emoji: "🤖",
      description:
        "Explore the fundamentals of robotics, automation, and intelligent systems used across modern industries."
    },
    {
      title: "Workshop – Embedded Systems",
      emoji: "🔧",
      description:
        "Hands-on introduction to microcontrollers, interfacing, and embedded system design for real-world applications."
    },
    {
      title: "Workshop – Artificial Intelligence / Machine Learning",
      emoji: "🧠",
      description:
        "An introductory session on AI & ML concepts, data-driven systems, and their applications in engineering."
    },
    {
      title: "Distinguished Lecturer Programs",
      emoji: "🎓",
      description:
        "Expert-led talks offering insights into emerging technologies, research trends, and industry practices."
    },
    {
      title: "Cultural Performances (MMC & MADC)",
      emoji: "🎭",
      description:
        "Enjoy vibrant music and dance performances showcasing creative student expressions and campus culture."
    }
  ];

  /* Responsive cards per view */
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1024) setCardsPerView(4);
      else if (window.innerWidth >= 768) setCardsPerView(3);
      else if (window.innerWidth >= 640) setCardsPerView(2);
      else setCardsPerView(1);
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  useEffect(() => {
    setCurrentIndex(0);
  }, [cardsPerView]);

  const totalPages = Math.ceil(events.length / cardsPerView);

  const nextSlide = () => {
    setCurrentIndex(prev =>
      prev + cardsPerView >= events.length ? 0 : prev + cardsPerView
    );
  };

  const prevSlide = () => {
    setCurrentIndex(prev =>
      prev - cardsPerView < 0
        ? Math.floor((events.length - 1) / cardsPerView) * cardsPerView
        : prev - cardsPerView
    );
  };

  const getVisibleEvents = () =>
    events.slice(currentIndex, currentIndex + cardsPerView);

  const getCurrentPage = () =>
    Math.floor(currentIndex / cardsPerView);

  return (
    <section
      id="events"
      className="min-h-screen px-6 pt-32 pb-24 flex flex-col items-center text-center"
    >
      <h2
        className="text-4xl md:text-5xl font-semibold mb-20"
        style={{ color: "#d4af37" }}
      >
        Event Highlights
      </h2>

      <div className="relative w-full max-w-7xl mx-auto">
        {/* Carousel Container */}
        <div className="relative overflow-hidden px-4 sm:px-10 lg:px-16">
          <div
            className={`grid gap-6 ${
              cardsPerView === 4
                ? "grid-cols-4"
                : cardsPerView === 3
                ? "grid-cols-3"
                : cardsPerView === 2
                ? "grid-cols-2"
                : "grid-cols-1"
            }`}
          >
            {getVisibleEvents().map((event, index) => (
              <div
                key={`${currentIndex}-${index}`}
                className="
                  relative
                  rounded-2xl
                  border-2 border-[#d4af37]
                  bg-[linear-gradient(135deg,rgba(212,175,55,0.08),rgba(10,22,40,0.95))]
                  p-8
                  flex flex-col items-center
                  min-h-[320px]
                  animate-fadeIn
                  hover:scale-105
                  transition-transform duration-300
                "
              >
                <div
                  className="text-6xl mb-6"
                  style={{
                    filter:
                      "drop-shadow(0 0 10px rgba(212,175,55,0.5))"
                  }}
                >
                  {event.emoji}
                </div>

                <h3
                  className="text-lg font-bold mb-4"
                  style={{ color: "#d4af37" }}
                >
                  {event.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {event.description}
                </p>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[rgba(212,175,55,0.3)] border-2 border-[#d4af37] flex items-center justify-center z-10"
          >
            ‹
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[rgba(212,175,55,0.3)] border-2 border-[#d4af37] flex items-center justify-center z-10"
          >
            ›
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i * cardsPerView)}
              className={`h-2 rounded-full border-2 border-[#d4af37] transition-all ${
                i === getCurrentPage()
                  ? "w-8 bg-[#d4af37]"
                  : "w-2 bg-transparent"
              }`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </section>
  );
}
