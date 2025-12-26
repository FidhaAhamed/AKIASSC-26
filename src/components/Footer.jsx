export default function Footer() {
  return (
    <footer
      className="
        border-t
        border-[#d4af3740]
        bg-[#0a1628]
        px-6 py-14
      "
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
{/* Logo */}
<img
  src={`${import.meta.env.BASE_URL}akiassc'26-logo.png`}
  alt="AKIASSC Logo"
  className="h-20"
/>

        {/* Links */}
        <div className="text-center md:text-right">
          <h3
            className="text-lg font-semibold mb-4"
            style={{ color: "#d4af37" }}
          >
            Useful Links
          </h3>

          <p className="mb-2">
            <a
              href="https://ia.ie.pels.ieeekerala.org/"
              target="_blank"
              rel="noreferrer"
              className="
                text-[#d4af37]/90
                hover:text-[#f4e5a0]
                transition
              "
            >
              IEEE IA/IE/PELS Jt. Chapter Kerala
            </a>
          </p>

          <p>
            <a
              href="https://www.ieeemace.org/"
              target="_blank"
              rel="noreferrer"
              className="
                text-[#d4af37]/90
                hover:text-[#f4e5a0]
                transition
              "
            >
              IEEE MACE SB
            </a>
          </p>

          
        </div>
       
      </div>
       <p className="text-sm text-gray-400 text-center mt-12">
  © 2026 AKIASSC | Powered by IEEE IA/IE/PELS Jt. Chapter Kerala
</p>
    </footer>
  );
}