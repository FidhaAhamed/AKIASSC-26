export default function Contact() {
  const contacts = [
    {
      name: "Pranav Vinoy",
      email: "pranavvinoy@ieee.org",
      phone: "+91 62381 40489",
    },
    {
      name: "Biju K",
      email: "bijuk@ieee.org",
      phone: "+91 94468 08243",
    },
  ];

  return (
    <section
      id="contact"
      className="
        min-h-screen
        px-6 pt-32 pb-24
        flex flex-col items-center
        text-center
      "
    >
      {/* Section Title */}
      <h2
        className="text-4xl md:text-5xl font-semibold mb-20"
        style={{ color: "#d4af37" }}
      >
        Contact Us
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl w-full">
        {contacts.map((person, index) => (
          <div
            key={index}
            className="
              rounded-3xl
              border
              border-[rgba(212,175,55,0.35)]
              bg-[linear-gradient(135deg,rgba(212,175,55,0.06),rgba(10,22,40,0.9))]
              px-10 py-12
              text-center
              min-h-[210px]
              flex flex-col justify-center
            "
          >
            <h3
              className="text-2xl font-semibold mb-6"
              style={{ color: "#d4af37" }}
            >
              {person.name}
            </h3>

            <p className="text-gray-300 mb-3">
              📧 <span className="ml-1">{person.email}</span>
            </p>

            <p className="text-gray-300">
              📞 <span className="ml-1">{person.phone}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
