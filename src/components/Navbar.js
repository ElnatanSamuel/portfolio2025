import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-dark/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-16 px-4 border-b border-red-500/20">
          {/* Logo with glitch effect */}
          <a href="#" className="relative group">
            <div className="absolute inset-0 bg-red-500/20 blur group-hover:blur-md transition-all" />
            <span className="font-mono text-2xl font-bold text-red-500 group-hover:animate-glitchText relative">
              ES
            </span>
          </a>

          {/* Navigation links */}
          <div className="hidden md:flex gap-8">
            {[
              { name: "FEATURED_MISSIONS", href: "#projects" },
              { name: "INVENTORY", href: "#skills" },
              { name: "ACTIVITY_LOG", href: "#experience" },
              { name: "CONTACT", href: "#contact" },
            ].map((item) => (
              <a key={item.name} href={item.href} className="relative group">
                <span className="font-mono text-sm tracking-wider text-gray-500 hover:text-red-500 transition-colors group-hover:animate-glitchText">
                  {item.name}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Hamburger menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative group p-2"
          >
            <div className="absolute inset-0 bg-red-500/20 blur group-hover:blur-md transition-all" />
            <div className="relative space-y-2">
              <span
                className={`block w-8 h-0.5 bg-red-500 transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-2.5" : ""
                }`}
              />
              <span
                className={`block w-8 h-0.5 bg-red-500 transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-8 h-0.5 bg-red-500 transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-2.5" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-300 ${
            isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden bg-dark/95 border-b border-red-500/20`}
        >
          <div className="px-4 py-2 space-y-4">
            {[
              { name: "MISSIONS", href: "#projects" },
              { name: "ARSENAL", href: "#skills" },
              { name: "BATTLE_LOG", href: "#experience" },
              { name: "SUMMON", href: "#contact" },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block font-mono text-sm tracking-wider text-gray-500 hover:text-red-500 transition-colors group"
              >
                <span className="group-hover:animate-glitchText">
                  ► {item.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
