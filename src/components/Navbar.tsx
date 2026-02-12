"use client";

import { useState, useEffect } from "react";
import Cart from "./Cart";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <a
          href="#"
          className={`font-heading text-2xl font-normal tracking-wide ${scrolled ? "text-secondary" : "text-white"
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
                className={`text-sm font-medium transition-colors hover:text-primary ${scrolled ? "text-secondary" : "text-white"
                  }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          {/* Shopping Cart */}
          <Cart scrolled={scrolled} />

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
