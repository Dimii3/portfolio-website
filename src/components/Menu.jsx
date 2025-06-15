import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const menuItems = [
  { name: "(About)", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#projects" },
  { name: "[Contact]", href: "#footer" },
];

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      gsap.from(".menu", {
        duration: 0.6,
        y: -20,
        opacity: 0,
        filter: "blur(5px)",
        ease: "ease.out",
      });
    });
  });
  return (
    <>
      <button
        className={`menu__btn ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className="menu__btn-line"></div>
        <div className="menu__btn-line"></div>
        <div className="menu__btn-line"></div>
      </button>

      <a href="#" className="menu__logo menu__logo--mobile">
        <img src="logo.svg" alt="Logo" />
      </a>
      <nav className={`menu ${menuOpen ? "active" : ""}`}>
        <div className="menu-container">
          <a href="#" className="menu__logo">
            <img src="logo.svg" alt="Logo" />
          </a>
          <ul className="menu__list">
            {menuItems.map((item) => (
              <li
                onClick={() => setMenuOpen(false)}
                key={item.name}
                className="menu__item"
              >
                <a href={item.href} className="menu__link">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
