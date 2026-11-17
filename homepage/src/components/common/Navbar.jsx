
import { useState } from "react";

const navLinks = [
  { name: "Programs", href: "#programs" },
  { name: "Success Stories", href: "#success-stories" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#6C4CF1] text-lg font-bold text-white">
            T
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-900">
            Tactyqal<span className="text-[#6C4CF1]"> Labs</span>
          </span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-[#6C4CF1]"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden rounded-lg bg-[#6C4CF1] px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-[#5938DB] lg:inline-flex"
        >
          Book a Free Consultation
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 lg:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="border-t border-gray-100 bg-white px-5 py-5 lg:hidden">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-gray-700 hover:text-[#6C4CF1]"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-lg bg-[#6C4CF1] px-5 py-3 text-center text-sm font-semibold text-white hover:bg-[#5938DB]"
            >
              Book a Free Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
