import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("home");
      if (!heroSection) return;

      const heroTop = heroSection.offsetTop;
      setVisible(window.scrollY >= heroTop - 80);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 inset-x-0 z-50
        bg-[#0a1628]/80 backdrop-blur-xl
        border-b border-[#d4af37]/25
        transition-all duration-500 ease-out
        ${visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-full pointer-events-none"
        }
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/akiassc'26-logo.png"
            alt="AKIASSC Logo"
            className="
              h-14 md:h-16
              drop-shadow-[0_0_15px_rgba(212,175,55,0.45)]
            "
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-sm uppercase tracking-wide">
          {["Home", "About", "Events", "Schedule", "Gallery", "Contact"].map(item => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="
                  relative
                  text-[#d4af37]/90
                  hover:text-[#d4af37]
                  transition
                  after:absolute after:left-0 after:-bottom-1
                  after:h-[2px] after:w-0
                  after:bg-[#d4af37]
                  after:transition-all
                  hover:after:w-full
                "
              >
                {item}
              </a>
            </li>
          ))}

          {/* CTA */}
          <a
            href="#register"
            className="
    relative ml-6
    min-w-[160px]
    h-[44px]
    flex items-center justify-center

    text-sm font-extrabold uppercase tracking-wide
    text-[#0a1628]

    rounded-full
    bg-gradient-to-r from-[#d4af37] to-[#f4e5a0]

    hover:scale-105
    hover:shadow-[0_16px_45px_rgba(212,175,55,0.7)]
    transition-all duration-300
  "
          >
            Register Now

          </a>

        </ul>

        {/* Mobile Toggle */}
        <button
          className="
            md:hidden
            text-[#d4af37] text-3xl
            hover:scale-110
            transition
          "
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className="
            md:hidden
            bg-[#0a1628]/95 backdrop-blur-xl
            border-t border-[#d4af37]/20
            px-6 py-6
            space-y-4
            text-center
          "
        >
          {["Home", "About", "Events", "Schedule", "Gallery", "Contact"].map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="
                block py-3
                text-[#d4af37] text-lg font-medium
                hover:bg-[rgba(212,175,55,0.12)]
                rounded-lg
                transition
              "
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}

          <a
            href="#register"
            className="
    relative mt-6
    min-w-[220px]
    h-[56px]
    mx-auto
    flex items-center justify-center

    text-base font-extrabold uppercase tracking-wide
    text-[#0a1628]

    rounded-full
    bg-gradient-to-r from-[#d4af37] to-[#f4e5a0]

    hover:scale-105
    transition-all duration-300
  "
          >
            Register Now

          </a>

        </div>
      )}
    </nav>
  );
}
