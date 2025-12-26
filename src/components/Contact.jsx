export default function Contact() {
  const contacts = [
    {
      name: "Pranav Vinoy",
      designation: "Student Representative IEEE IA/IE/PELS Jt.Chapter Kerala",
      email: "pranavvinoy@ieee.org",
      phone: "+91 62381 40489",
    },
    {
      name: "Biju K",
      designation: "Chair IEEE IA/IE/PELS Jt.Chapter Kerala",
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

      {/* Single Card with Contacts and Map */}
      <div
        className="
          rounded-3xl
          border
          border-[rgba(212,175,55,0.35)]
          bg-[linear-gradient(135deg,rgba(212,175,55,0.06),rgba(10,22,40,0.9))]
          p-8 md:p-12
          max-w-6xl w-full
          grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12
        "
      >
        {/* Left Side - Contacts */}
        <div className="flex flex-col gap-8 justify-center">
          {contacts.map((person, index) => (
            <div
              key={index}
              className="text-left space-y-3"
            >
              <h3
                className="text-2xl md:text-3xl font-semibold"
                style={{ color: "#d4af37" }}
              >
                {person.name}
              </h3>
              
              <p className="text-gray-400 text-sm md:text-base italic">
                {person.designation}
              </p>

              <p className="text-gray-300 text-sm md:text-base">
                Email:<span className="ml-2">{person.email}</span>
              </p>

              <p className="text-gray-300 text-sm md:text-base">
                Contact:<span className="ml-2">{person.phone}</span>
              </p>
            </div>
          ))}

          {/* Location Address */}
          <div className="text-center pt-4 border-t border-[rgba(212,175,55,0.25)]">
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              <span className="ml-2">Mar Athanasius College of Engineering, College Junction Road, Kothamangalam, Kerala - 686666, India</span>
            </p>
          </div>
        </div>

        {/* Right Side - Map */}
        <div className="flex items-center justify-center">
          <div className="w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden border border-[rgba(212,175,55,0.25)]">
            <iframe
              src="https://www.google.com/maps?q=Mar+Athanasius+College+of+Engineering,+Kothamangalam,+Kerala&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mar Athanasius College of Engineering"
            />


          </div>
        </div>
      </div>
    </section>
  );
}