import { useState, useEffect } from "react";

export default function EventHighlights() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4);

  const events = [
    { 
      title: "Industrial Visits",
      emoji: "🏭",
      description: "Explore cutting-edge facilities and gain real-world industry insights."
    },
    { 
      title: "Technical Workshops",
      emoji: "🔧",
      description: "Hands-on sessions to enhance your technical skills and expertise."
    },
    { 
      title: "Innovation Challenge",
      emoji: "💡",
      description: "Compete with innovative ideas and showcase your problem-solving abilities."
    },
    { 
      title: "Cultural Night",
      emoji: "🎭",
      description: "An evening of vibrant performances, music, and cultural celebrations."
    },
    { 
      title: "Open Mic/Jamming",
      emoji: "🎤",
      description: "Express your creativity through music, poetry, and open performances."
    },
    { 
      title: "Social Mixer/Tech Meet and Greet",
      emoji: "🤝",
      description: "Network with peers and professionals in a relaxed, friendly atmosphere."
    },
    { 
      title: "Industry/Entrepreneurship Sessions",
      emoji: "💼",
      description: "Learn from industry leaders about business strategies and startup culture."
    },
    { 
      title: "Distinguished Lecturers Program",
      emoji: "🎓",
      description: "Inspiring talks from renowned speakers and thought leaders."
    },
  ];

  // Update cards per view based on screen size
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(4); // Desktop: 4 cards
      } else if (window.innerWidth >= 768) {
        setCardsPerView(3); // Tablet landscape: 3 cards
      } else if (window.innerWidth >= 640) {
        setCardsPerView(2); // Tablet portrait: 2 cards
      } else {
        setCardsPerView(1); // Mobile: 1 card
      }
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  // Reset to first page when cardsPerView changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [cardsPerView]);

  const totalPages = Math.ceil(events.length / cardsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const nextIndex = prev + cardsPerView;
      return nextIndex >= events.length ? 0 : nextIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const prevIndex = prev - cardsPerView;
      return prevIndex < 0 ? Math.floor((events.length - 1) / cardsPerView) * cardsPerView : prevIndex;
    });
  };

  const goToSlide = (pageIndex) => {
    setCurrentIndex(pageIndex * cardsPerView);
  };

  const getVisibleEvents = () => {
    return events.slice(currentIndex, currentIndex + cardsPerView);
  };

  const getCurrentPage = () => Math.floor(currentIndex / cardsPerView);

  return (
    <section id="events" className="min-h-screen px-6 pt-32 pb-24 flex flex-col items-center text-center">
      <h2 className="text-4xl md:text-5xl font-semibold mb-20" style={{ color: "#d4af37" }}>
        Event Highlights
      </h2>

      <div className="relative w-full max-w-7xl mx-auto">
        {/* Carousel Container */}
        <div className="relative overflow-hidden px-16">
          <div className={`grid gap-6 ${
            cardsPerView === 4 ? 'grid-cols-4' :
            cardsPerView === 3 ? 'grid-cols-3' :
            cardsPerView === 2 ? 'grid-cols-2' :
            'grid-cols-1'
          }`}>
            {getVisibleEvents().map((event, index) => (
              <div
                key={`${currentIndex}-${index}`}
                className="relative rounded-2xl border-2 border-[#d4af37] bg-[linear-gradient(135deg,rgba(212,175,55,0.08),rgba(10,22,40,0.95))] p-8 flex flex-col items-center justify-start min-h-[320px] animate-fadeIn hover:scale-105 transition-transform duration-300"
              >
                {/* Emoji */}
                <div className="text-6xl mb-6" style={{ filter: "drop-shadow(0 0 10px rgba(212,175,55,0.5))" }}>
                  {event.emoji}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-4" style={{ color: "#d4af37" }}>
                  {event.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed">
                  {event.description}
                </p>
              </div>
            ))}
          </div>

          {/* Side Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[rgba(212,175,55,0.3)] hover:bg-[rgba(212,175,55,0.5)] border-2 border-[#d4af37] flex items-center justify-center transition-all z-10"
            aria-label="Previous events"
          >
            <svg className="w-6 h-6" style={{ color: "#d4af37" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[rgba(212,175,55,0.3)] hover:bg-[rgba(212,175,55,0.5)] border-2 border-[#d4af37] flex items-center justify-center transition-all z-10"
            aria-label="Next events"
          >
            <svg className="w-6 h-6" style={{ color: "#d4af37" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <button
              key={pageIndex}
              onClick={() => goToSlide(pageIndex)}
              className={`w-2 h-2 rounded-full border-2 transition-all ${
                pageIndex === getCurrentPage()
                  ? "bg-[#d4af37] border-[#d4af37] w-8"
                  : "bg-transparent border-[#d4af37] hover:bg-[rgba(212,175,55,0.3)]"
              }`}
              aria-label={`Go to page ${pageIndex + 1}`}
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