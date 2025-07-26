import docCV from "../assets/Dawid_Marchewczyk_CV.pdf";
import Button from "./Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function Header() {
  useGSAP(() => {
    gsap.from(
      [
        ".header__heading",
        ".header__buttons",
        ".header__center",
        ".header__text",
        ".decoration-text__item",
      ],
      {
        duration: 0.6,
        y: 20,
        opacity: 0,
        filter: "blur(5px)",
        ease: "ease.out",
        stagger: 0.2,
      }
    );

    gsap.to(".header__center", {
      scrollTrigger: {
        trigger: ".header",
        start: "top top ",
        end: "bottom 30%",
        scrub: 0.5,
      },
      y: 250,
      scale: 1.2,
    });
  });

  return (
    <header className="container header header-container">
      <div className="header__left">
        <h1 className="header__heading">
          Front-End (<span>Precision</span>) Meets UI/UX Vision
        </h1>
        <div className="header__buttons">
          <Button href="#projects" className={"button--primary"}>
            {"(View My Work)"}
          </Button>
          <Button href={docCV} download className={"button--secondary"}>
            {"(Download CV)"}
          </Button>
        </div>
      </div>
      <div className="header__center">
        {/* <img
          src="header-image-min.webp"
          alt="Header Image"
          role="presentation"
          fetchPriority="high"
        /> */}
        <video src="bgc-pure.webm" autoPlay loop muted></video>
      </div>
      <div className="header__right">
        <p className="header__text section-text">
          Hi, I’m Dawid. For over 3 years, I’ve been building fast, responsive
          interfaces with modern front-end tools. Lately, I’ve added UI/UX
          design to my toolkit to deliver not just code but complete user
          experiences.
        </p>
      </div>

      <p className="decoration-text__item">[Always learning]</p>
      <p className="decoration-text__item">[Code meets creativity]</p>
    </header>
  );
}
