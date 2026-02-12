"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <a
          href="#"
          className={`font-heading text-2xl font-normal tracking-wide ${
            scrolled ? "text-secondary" : "text-white"
          }`}
        >
          Panto
        </a>

        {/* Desktop Nav - centered */}
        <ul className="hidden items-center gap-10 md:flex">
          {[
            { label: "Furniture", href: "#products" },
            { label: "Shop", href: "#products" },
            { label: "About Us", href: "#experiences" },
            { label: "Contact", href: "#footer" },
          ].map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  scrolled ? "text-secondary" : "text-white"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          {/* Shopping bag icon */}
          <button
            aria-label="Shopping bag"
            className={`transition-colors ${
              scrolled ? "text-secondary" : "text-white"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </button>

          {/* Mobile hamburger */}
          <button
            aria-label="Toggle menu"
            className={`md:hidden ${scrolled ? "text-secondary" : "text-white"}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="bg-white px-6 pb-4 shadow-md md:hidden">
          <ul className="flex flex-col gap-4">
            {[
              { label: "Furniture", href: "#products" },
              { label: "Shop", href: "#products" },
              { label: "About Us", href: "#experiences" },
              { label: "Contact", href: "#footer" },
            ].map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-secondary transition-colors hover:text-primary"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
