import { useState } from "react";
import { profile } from "../data/profile";
import "./styles/Navbar.css";

const LINKS = [
  { href: "#about", label: "about" },
  { href: "#work", label: "work" },
  { href: "#stack", label: "stack" },
  { href: "#contact", label: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#top" className="navbar-logo" onClick={() => setOpen(false)}>
          <span className="navbar-logo-mark">{profile.initials}</span>
          <span className="navbar-logo-cursor" aria-hidden="true" />
        </a>

        <nav className={`navbar-links ${open ? "is-open" : ""}`}>
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-btn-solid"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href={`mailto:${profile.email}`} className="nav-btn-solid navbar-cta">
            say hello
          </a>
        </nav>

        <button
          className="navbar-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}