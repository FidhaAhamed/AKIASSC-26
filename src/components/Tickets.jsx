export default function Tickets() {
  const tickets = [
    {
      title: "IAS Members",
      price: "₹1400",
      type: "IEEE IAS Member Rate",
    },
    {
      title: "Non-IAS Members",
      price: "₹1500",
      type: "IEEE Member Rate",
    },
    {
      title: "Non-IEEE Members",
      price: "₹1750",
      type: "General Rate",
    },
  ];

  return (
    <section
      id="register"
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
        Early Bird Tickets
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl w-full">
        {tickets.map((ticket, index) => (
          <div
            key={index}
            className="
              relative
              rounded-3xl
              border-2
              border-[#d4af37]
              bg-[linear-gradient(135deg,rgba(212,175,55,0.08),rgba(10,22,40,0.95))]
              px-8 py-14
              flex flex-col items-center
              min-h-[420px]
            "
          >
            {/* Top notch */}
            <span
              className="
                absolute
                -top-4 left-1/2 -translate-x-1/2
                w-8 h-8
                rounded-full
                bg-[#0a1628]
                border-2 border-[#d4af37]
              "
            />

            {/* Bottom notch */}
            <span
              className="
                absolute
                -bottom-4 left-1/2 -translate-x-1/2
                w-8 h-8
                rounded-full
                bg-[#0a1628]
                border-2 border-[#d4af37]
              "
            />

            {/* Content */}
            <h3
              className="text-2xl font-semibold mb-10"
              style={{ color: "#d4af37" }}
            >
              {ticket.title}
            </h3>

            <p
              className="text-4xl font-bold mb-6"
              style={{ color: "#d4af37" }}
            >
              {ticket.price}
            </p>

            <p className="text-gray-300 mb-10">
              {ticket.type}
            </p>

            <button
              className="
                mt-auto
                px-10 py-3
                rounded-full
                font-bold
                text-[#0a1628]
                bg-gradient-to-r from-[#d4af37] to-[#f4e5a0]
                hover:opacity-90
                transition
              "
            >
              Register Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
