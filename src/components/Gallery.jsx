import { useState } from "react";

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Replace these placeholder paths with your actual image paths
  const images = [
    "/gallery1.jpeg",
    "/gallery2.jpeg",
    "/gallery3.jpeg",
    "/gallery4.jpeg",
    "/gallery5.jpeg",
    
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="gallery" className="min-h-screen px-6 pt-32 pb-24 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-semibold mb-20 text-center" style={{ color: "#d4af37" }}>
        AKIASSC'25 Moments
      </h2>

      <div className="relative w-full max-w-5xl mx-auto">
        {/* Main Carousel Container */}
        <div className="relative overflow-hidden rounded-3xl border-2 border-[#d4af37] bg-[linear-gradient(135deg,rgba(212,175,55,0.08),rgba(10,22,40,0.95))]">
          {/* Images */}
          <div className="relative aspect-video w-full">
            {images.map((img, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                {/* Text Shadow Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent">
                  <div className="absolute bottom-8 left-8 right-8">
                    <h3
                      className="text-3xl md:text-4xl font-bold"
                      style={{
                        color: "#d4af37",
                        textShadow: "0 0 20px rgba(0,0,0,0.8), 0 0 40px rgba(212,175,55,0.5)",
                      }}
                    >
                      
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[rgba(212,175,55,0.3)] hover:bg-[rgba(212,175,55,0.5)] border-2 border-[#d4af37] flex items-center justify-center transition-all"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" style={{ color: "#d4af37" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[rgba(212,175,55,0.3)] hover:bg-[rgba(212,175,55,0.5)] border-2 border-[#d4af37] flex items-center justify-center transition-all"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" style={{ color: "#d4af37" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Sidebar Buttons (Dots) */}
        <div className="flex justify-center gap-3 mt-8">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full border-2 transition-all ${
                index === currentIndex
                  ? "bg-[#d4af37] border-[#d4af37] w-10"
                  : "bg-transparent border-[#d4af37] hover:bg-[rgba(212,175,55,0.3)]"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}