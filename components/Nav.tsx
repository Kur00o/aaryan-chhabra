"use client";

import { useEffect, useRef, useState } from "react";

const LINKS = [
  { label: "The loop", href: "#loop" },
  { label: "Builds", href: "#builds" },
  { label: "Clients", href: "#work" },
  { label: "Now", href: "#now" },
  { label: "Wins", href: "#wins" },
];

export default function Nav() {
  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  /* Solid bar after the hero top; hide on scroll down, return on scroll up. */
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setSolid(y > 40);
      if (Math.abs(y - last) > 6) {
        setHidden(y > last && y > 240);
        last = y;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Menu overlay: Escape closes, focus stays inside, page doesn't scroll. */
  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    root.classList.add("menu-open");
    window.__lenis?.stop();
    const first = menuRef.current?.querySelector<HTMLElement>("a, button");
    first?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
      if (e.key === "Tab" && menuRef.current) {
        const items = Array.from(menuRef.current.querySelectorAll<HTMLElement>("a, button"));
        const i = items.indexOf(document.activeElement as HTMLElement);
        if (e.shiftKey && i <= 0) {
          e.preventDefault();
          items[items.length - 1].focus();
        } else if (!e.shiftKey && i === items.length - 1) {
          e.preventDefault();
          items[0].focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      root.classList.remove("menu-open");
      window.__lenis?.start();
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className={`nav ${solid ? "is-solid" : ""} ${hidden && !open ? "is-hidden" : ""}`}>
      <nav className="nav__bar" aria-label="Main">
        <a href="#top" className="logo" aria-label="Aaryan Chhabra, back to top">
          <span className="logo__a">Aaryan</span>
          <span className="logo__b">Chhabra</span>
        </a>

        <ul className="nav__links">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="pill">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="btn-outline nav__cta">
          <span className="roll" data-text="Say hi">
            Say hi
          </span>
        </a>

        <button
          ref={toggleRef}
          className="pill nav__toggle"
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      <div
        id="menu"
        ref={menuRef}
        className={`menu ${open ? "is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        hidden={!open}
      >
        <button className="pill menu__close" onClick={() => setOpen(false)}>
          Close
        </button>
        <ul className="menu__links">
          {[...LINKS, { label: "Say hi", href: "#contact" }].map((l, i) => (
            <li key={l.href} style={{ ["--i" as string]: i }}>
              <a href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="menu__foot">
          <span className="dot" aria-hidden="true" /> Open to work
        </p>
      </div>
    </header>
  );
}
