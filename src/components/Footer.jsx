import React from "react";
import Button from "./Button";

const footerButtons = [
  {
    href: "https://www.linkedin.com/in/dawid-marchewczyk-b25695204/",
    text: "LinkedIn",
    target: "_blank",
  },
  { href: "", text: "Download CV" },
  { href: "https://github.com/Dimii3", text: "GitHub", target: "_blank" },
  { href: "https://www.behance.net/dimii", text: "Behance", target: "_blank" },
];

export default function Footer() {
  return (
    <footer id="footer" className="container footer-container">
      <div className="footer-top">
        <h2 className="section-heading">(All Info in One Place)</h2>
        <p className="footer__text section-text">
          Based in Kraków, available remotely. Let’s create something great
          together.
        </p>
      </div>
      <div className="footer-bottom">
        {footerButtons.map((button) => (
          <Button
            className="footer-bottom__button"
            key={button.text}
            href={button.href}
            target={button.target}
          >
            {button.text}
          </Button>
        ))}
        <div className="footer-decoration">
          <img
            src="footer-arrows.svg"
            alt="arrows decoration"
            role="presentation"
            className="footer-decoration__img"
          />
          <p className="footer-decoration__text">[check out my more works]</p>
        </div>
      </div>
    </footer>
  );
}
