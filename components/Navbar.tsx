"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Solutions", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Programs", href: "#partners" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Partners", href: "#partners" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-cyan-500 flex items-center justify-center">
            <span className="text-white font-bold text-sm">A</span>
          </div>
          <span
            className={`font-bold text-lg tracking-tight transition-colors ${
              scrolled ? "text-gray-900" : "text-white"
            }`}
            style={{ fontFamily: "Sora, sans-serif" }}
          >
            Accredian <span className="text-indigo-400">Enterprise</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-sm font-medium transition-colors hover:text-indigo-400 ${
                scrolled ? "text-gray-600" : "text-white/80"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            className={`text-sm font-medium px-4 py-2 rounded-lg transition-colors ${
              scrolled ? "text-gray-600 hover:text-indigo-600" : "text-white/80 hover:text-white"
            }`}
          >
            Sign In
          </button>
          <a
            href="#lead-form"
            onClick={(e) => handleNavClick(e, "#lead-form")}
            className="text-sm font-semibold px-5 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-600/25"
          >
            Get a Demo
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`w-5 flex flex-col gap-1.5 ${scrolled ? "text-gray-900" : "text-white"}`}>
            <span className={`block h-0.5 bg-current transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 bg-current transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="flex flex-col px-4 py-4 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-gray-700 font-medium py-2 border-b border-gray-50"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#lead-form"
              onClick={(e) => handleNavClick(e, "#lead-form")}
              className="mt-2 text-center bg-indigo-600 text-white font-semibold py-3 rounded-lg"
            >
              Get a Demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
