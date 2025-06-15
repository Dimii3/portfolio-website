import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
gsap.registerPlugin(SplitText, ScrollTrigger);

const servicesData = [
  {
    title: "Web developer",
    description:
      "(React, Javascript, HTML, CSS/SASS, GSAP, Framer Motion, Webflow, Framer)",
  },
  {
    title: "Graphic Designer",
    description: "(Figma, Photoshop, Illustrator)",
  },
  {
    title: "SEO & Ads",
    description: "(best practices for seo, Facebook ads, GA4)",
  },
];

export default function Services() {
  const [dotActive, setDotActive] = useState(false);
  const [dotIsVisible, setDotIsVisible] = useState(false);
  const sectionServiceRef = useRef(null);

  useGSAP(() => {
    let splitHeading = SplitText.create(".services__heading", {
      type: "chars",
      linesClass: "services__heading-line",
    });

    gsap.from(splitHeading.chars, {
      scrollTrigger: {
        trigger: ".services",
        start: "top 75%",
        end: "bottom bottom",
        scrub: 1,
      },
      duration: 1,
      y: 15,
      filter: "blur(5px) grayscale(100%)  contrast(0.75)",
      opacity: 0,
      ease: "power4.out",
      stagger: 0.1,
    });

    gsap.from(".services__text", {
      scrollTrigger: {
        trigger: ".services",
        start: "top 30%",
        end: "bottom bottom",
        scrub: 1,
        delay: 0.2,
      },
      duration: 1,
      y: 15,
      filter: "blur(5px)",
      opacity: 0,
      ease: "power4.out",
      stagger: 0.3,
    });
  });

  const handleMouseMove = (e) => {
    const rect = sectionServiceRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    sectionServiceRef.current.style.setProperty("--cursor-x", `${x}px`);
    sectionServiceRef.current.style.setProperty("--cursor-y", `${y}px`);
  };

  const handleMouseEnter = () => {
    setDotActive(true);
  };
  const handleMouseLeave = () => {
    setDotActive(false);
  };

  return (
    <section
      className="services"
      id="services"
      ref={sectionServiceRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setDotIsVisible(true)}
      onMouseLeave={() => setDotIsVisible(false)}
    >
      <div className="container services-container">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="services__item"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <h3 className="services__heading">{service.title}</h3>
            <p className="services__text">{service.description}</p>
          </div>
        ))}
      </div>
      <div
        className={`services__dot-cursor ${dotActive ? "active" : ""} ${
          dotIsVisible ? "visible" : ""
        }`}
      ></div>
    </section>
  );
}
