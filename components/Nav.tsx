"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Builds",      href: "#builds" },
  { label: "Client Work", href: "#client-work" },
  { label: "Building",    href: "#building" },
  { label: "Experience",  href: "#experience" },
  { label: "Skills",      href: "#skills" },
];

function GitHubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? "border-b border-border backdrop-blur-md" : ""
      }`}
      style={scrolled ? { background: "rgba(10,10,10,0.88)" } : { background: "transparent" }}
    >
      <nav
        className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#top"
          className="flex items-center gap-2.5 group"
          aria-label="Go to top"
        >
          <div className="relative w-8 h-8 rounded-full overflow-hidden ring-1 ring-border-bright group-hover:ring-coral transition-all duration-150 flex-shrink-0">
            <Image
              src="/assets/display-picture.png"
              alt="Aaryan Chhabra"
              fill
              sizes="32px"
              className="object-cover object-top scale-125"
            />
          </div>
          <span className="font-display font-bold text-sm tracking-widest uppercase text-[#e8e6e0] group-hover:text-coral transition-colors duration-150">
            AARYAN CHHABRA
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm font-medium text-[#b8b5ae] hover:text-coral transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-5">
          <div className="flex items-center gap-2">
            <span
              className="w-2.5 h-2.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: "var(--mint)", boxShadow: "0 0 8px var(--mint)" }}
              aria-hidden="true"
            />
            <span className="font-body text-xs font-medium text-[#b8b5ae]">
              Open to work
            </span>
          </div>
          <a
            href="https://github.com/Kur00o"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#b8b5ae] hover:text-coral transition-colors duration-150"
            aria-label="GitHub profile"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/aaryan-chhabra/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#b8b5ae] hover:text-coral transition-colors duration-150"
            aria-label="LinkedIn profile"
          >
            <LinkedInIcon />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className={`block h-0.5 w-6 bg-ink transition-transform duration-150 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 bg-ink transition-opacity duration-150 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-ink transition-transform duration-150 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          className="md:hidden border-t border-border px-6 py-6 flex flex-col gap-5"
          style={{ background: "rgba(10,10,10,0.97)" }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-base font-medium text-[#e8e6e0] hover:text-coral transition-colors duration-150"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-4 pt-2 border-t border-border">
            <div className="flex items-center gap-2">
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: "var(--mint)", boxShadow: "0 0 8px var(--mint)" }}
                aria-hidden="true"
              />
              <span className="font-body text-xs font-medium text-[#b8b5ae]">Open to work</span>
            </div>
            <a href="https://github.com/Kur00o" target="_blank" rel="noopener noreferrer" className="text-[#b8b5ae] hover:text-coral transition-colors duration-150" aria-label="GitHub">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/aaryan-chhabra/" target="_blank" rel="noopener noreferrer" className="text-[#b8b5ae] hover:text-coral transition-colors duration-150" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
