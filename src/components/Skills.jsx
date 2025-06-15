import React from "react";
import Button from "./Button";

const skillsData = [
  "JavaScript",
  "HTML",
  "CSS/SASS",
  "Tailwind",
  "React",
  "Testing",
  "Webflow",
  "Framer",
  "Git/Github",
  "SEO",
];

const uiUxSkillsData = ["Figma", "Photoshop", "Illustrator"];

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container skills-container">
        <div className="skills__left">
          <div className="skills__left-top">
            <h3 className="heading-3 skills__heading-3">(Skills)</h3>
            <h4 className="heading-4">[Frontend]</h4>
          </div>

          <div className="skills__left-bottom">
            <ul className="skills__list">
              {skillsData.map((skill, index) => (
                <li
                  key={skill}
                  className={`skills__list-item ${
                    skill === "React" ? "skills__list-item--secondary" : ""
                  }`}
                >
                  {skill}
                </li>
              ))}
            </ul>
            <h4 className="heading-4 skills__heading-4">[UI/UX]</h4>
            <ul className="skills__list">
              {uiUxSkillsData.map((skill) => (
                <li
                  key={skill}
                  className={`skills__list-item ${
                    skill === "Figma" ? "skills__list-item--secondary" : ""
                  }`}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="skills__right">
          <h2 className="section-heading skills__section-heading">
            Designing Interfaces. Developing Ideas.
          </h2>
          <p className="skills__text section-text">
            I'm Dawid, a 25-year-old front-end developer based in Kraków,
            Poland. Since 2020, I’ve been passionate about building websites —
            from writing clean, responsive code to optimizing user interactions.
            In the past six months, I’ve expanded my focus to include UI/UX
            design, aiming to create digital experiences that are not only
            visually appealing but also intuitive and practical.
          </p>
          <Button href="#footer" className={"skills__button"}>
            {"(Let’s Connect)"}
          </Button>
        </div>
      </div>
    </section>
  );
}
