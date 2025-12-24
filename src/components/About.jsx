import { useEffect, useState } from "react";

const slides = [
  {
    title: "About AKIASSC",
    img: "/akiassc'26-logo.png",
    text:
      "The All Kerala Industry Applications Society Student Conclave (AKIASSC'26) is a premier gathering of students, industry professionals, and academic leaders. This conclave serves as a platform to bridge the gap between academia and industry, fostering innovation, collaboration, and knowledge exchange. Join us for an extraordinary experience of learning, networking, and exploring cutting-edge technologies that shape the future of industrial applications."
  },
  {
    title: "About IEEE IA/IE/PELS Jt. Chapter",
    img: "/jt-chapterlogo.png",
    text:
      "The IEEE Industry Applications, Industrial Electronics, and Power Electronics Joint Chapter brings together professionals and students passionate about advancing technology in industrial sectors. Our chapter focuses on promoting research, development, and application of electrical and electronic technologies in industrial environments. Through technical meetings, workshops, and conferences, we strive to enhance professional development and foster collaboration among members across Kerala."
    },
  {
    title: "About MACE Kothamangalam",
    img: "/MACE.jpeg",
    text:
      "Established in 1989, the IEEE MACE Student Branch is one of Kerala’s oldest and most distinguished student branches. With one of the highest global memberships, it continues to uphold a legacy of excellence, innovation, and leadership.The branch is renowned for organizing impactful initiatives such as .hack();, CYBOSIUM, SPARC, and FUSION, providing students with opportunities to grow technically and professionally. Its consistent achievements, including multiple IEEE Regional Exemplary Student Branch Awards and the IEEE India Council Best Student Branch Award, stand as a testament to its commitment to fostering innovation and empowering future engineers."
  }
];

export default function About() {
  const [index, setIndex] = useState(0);

  /* Auto carousel */
  useEffect(() => {
    const id = setInterval(() => {
      setIndex(prev => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen px-6 pt-32 pb-24 flex flex-col items-center"
    >
      {/* Section title */}
      <h2
        className="text-4xl md:text-5xl font-semibold mb-20"
        style={{ color: "#d4af37" }}
      >
        About
      </h2>

      {/* Card viewport */}
      <div className="relative max-w-6xl w-full overflow-hidden">
        {/* Sliding container */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              className="min-w-full px-1 sm:px-6"
            >
              <div
              className="
                rounded-3xl
                border
                border-[rgba(212,175,55,0.35)]
                bg-[linear-gradient(135deg,rgba(212,175,55,0.06),rgba(10,22,40,0.85))]

                px-4 py-6
                sm:px-6
                md:p-14

                min-h-[560px]
                md:min-h-[600px]
              "
            >


                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  {/* Image */}
                  <img
                    src={slide.img}
                    alt={slide.title}
                    className="
                      w-full max-w-md
                      rounded-2xl
                      object-cover
                      mx-auto
                    "
                  />

                  {/* Text */}
                  <div className="text-left">
                    <h3
                      className="text-3xl md:text-4xl font-semibold mb-6 text-center md:text-left"
                      style={{ color: "#d4af37" }}
                    >
                      {slide.title}
                    </h3>
                    <p className="text-gray-200 text-lg leading-relaxed">
                      {slide.text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="mt-16 flex flex-col items-center gap-6">

        {/* Buttons */}
        <div className="flex items-center gap-10">
          <button
            onClick={() =>
              setIndex((index + slides.length - 1) % slides.length)
            }
            className="
              w-14 h-14
              rounded-full
              border-2 border-[#d4af37]
              text-[#d4af37]
              text-2xl
              flex items-center justify-center
              bg-[rgba(212,175,55,0.08)]
              hover:bg-[rgba(212,175,55,0.18)]
              transition
            "
          >
            ‹
          </button>

          <button
            onClick={() => setIndex((index + 1) % slides.length)}
            className="
              w-14 h-14
              rounded-full
              border-2 border-[#d4af37]
              text-[#d4af37]
              text-2xl
              flex items-center justify-center
              bg-[rgba(212,175,55,0.08)]
              hover:bg-[rgba(212,175,55,0.18)]
              transition
            "
          >
            ›
          </button>
        </div>

        {/* Dots BELOW */}
        <div className="flex gap-3">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`
                h-2 rounded-full transition-all
                ${i === index
                  ? "w-8 bg-[#d4af37]"
                  : "w-2 bg-[#d4af37]/40"}
              `}
            />
          ))}
        </div>
      </div>

    </section>
  );
}