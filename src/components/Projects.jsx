import React from "react";
import Button from "./Button";
import { image } from "motion/react-client";

const projects = [
  {
    id: 6,
    title: "[Nexora]",
    description:
      "A comprehensive web interface designed in Figma for Nexora, a company delivering AI-powered marketing automation solutions for businesses. The project leverages the latest trend web design practices, focusing on exceptional UI/UX and a strong brand identity. Custom visual elements and modern image treatments were crafted to enhance Nexora’s innovative presence, while the entire layout was built with RWD design principles to ensure seamless user experience across all devices.",
    designPreviewLink:
      "https://www.behance.net/gallery/229306381/Website-Logo-design-Nexora",
    imageUrl: "project-image-7.webp",
  },
  {
    id: 7,
    title: "[1Flowww]",
    description:
      "A modern subpage redesign for a marketing agency, crafted in Figma with a strong focus on trend web design and advanced UI/UX principles. The project enhances the agency’s brand identity through custom visuals and carefully selected color palettes, while the entire layout follows RWD design standards to ensure an optimal experience across all devices. The updated subpage not only elevates visual appeal but also improves user engagement and conversion rates.",
    designPreviewLink:
      "https://www.behance.net/gallery/230010001/Web-design-redesign-subpage",
    imageUrl: "project-image-6.webp",
  },
  {
    id: 1,
    title: "[Tripper]",
    description:
      "A fully responsive web page brought to life from a Figma design, using React with TypeScript, animated with Framer Motion and GSAP, and styled with Sass.",
    demoLink: "https://tripper-website.netlify.app/",
    sourceCodeLink: "https://github.com/Dimii3/Tripper-web",
    designPreviewLink:
      "https://www.behance.net/gallery/221134975/Web-design-Tripper",
    imageUrl: "project-image-1.webp",
  },
  {
    id: 4,
    title: "[Amora]",
    description:
      "A full web interface designed in Figma, with custom visual elements and image treatments created in Adobe Photoshop to enhance branding and visual impact.",
    designPreviewLink:
      "https://www.behance.net/gallery/228469683/Web-design-old-fashioned-Amora",
    imageUrl: "project-image-4.webp",
  },
  {
    id: 2,
    title: "[Formique]",
    description:
      "A fully responsive web page brought to life from a Figma design, using React with TypeScript, animated with Framer Motion and GSAP, and styled with Sass.",
    demoLink: "https://formique.netlify.app/ ",
    sourceCodeLink: "https://github.com/Dimii3/Formique-website-react",
    designPreviewLink:
      "https://www.behance.net/gallery/224398957/Web-design-Formique",
    imageUrl: "project-image-2.webp",
  },
  {
    id: 3,
    title: "[Soomia]",
    description:
      "A full web interface designed in Figma, with custom visual elements and image treatments created in Adobe Photoshop to enhance branding and visual impact.",
    designPreviewLink:
      "https://www.behance.net/gallery/225007741/Web-design-soomia-beds",
    imageUrl: "project-image-3.webp",
  },

  {
    id: 5,
    title: "[Cinebase Full stack]",
    description:
      "Cinebase is a responsive, full-stack web application built for discovering, searching, and saving your favorite movies. The project utilizes a modern tech stack based on React (frontend) and Node.js/Express (backend) with a MongoDB database.",
    demoLink: "https://cinebase-stack.netlify.app/",
    sourceCodeLink: "https://github.com/Dimii3/Cinebase-full-stack-app",
    imageUrl: "project-image-5.webp",
  },
];

const otherProjects = [
  {
    id: 1,
    title: "[Other Project 1]",
    imageUrl: "other-project-1.webp",
  },
  {
    id: 2,
    title: "[Other Project 2]",
    imageUrl: "other-project-2.webp",
  },

  {
    id: 3,
    title: "[Other Project 3]",
    imageUrl: "other-project-3.webp",
  },

  {
    id: 4,
    title: "[Other Project 4]",
    imageUrl: "other-project-4.webp",
  },
  {
    id: 5,
    title: "[Other Project 5]",
    imageUrl: "other-project-5.webp",
  },
  {
    id: 6,
    title: "[Other Project 6]",
    imageUrl: "other-project-6.webp",
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="projects-top">
          <h2 className="section-heading projects__heading">
            (Things I’ve Built)
          </h2>
          <p className="section-text projects__text">
            Here are some of the projects I’ve worked on — combining development
            and design to solve real problems and deliver value to users. Each
            project reflects my growth as a front-end developer and my evolving
            UI/UX thinking.
          </p>
        </div>
        <div className="projects-bottom">
          {projects.map((project) => (
            <div key={project.id} className="project-item">
              <div className="project-left">
                <h3 className="project__title">{project.title}</h3>
                <div className="project-item__bottom">
                  <div className="project-item__buttons">
                    {project.demoLink && (
                      <Button
                        target="_blank"
                        href={project.demoLink}
                        className="button"
                      >
                        (get a demo)
                      </Button>
                    )}
                    {project.sourceCodeLink && (
                      <Button
                        target="_blank"
                        href={project.sourceCodeLink}
                        className="button"
                      >
                        (source code)
                      </Button>
                    )}
                    {project.designPreviewLink && (
                      <Button
                        target="_blank"
                        href={project.designPreviewLink}
                        className="button"
                      >
                        (design preview)
                      </Button>
                    )}
                  </div>
                  <p className="project__text section-text">
                    {project.description}
                  </p>
                </div>
              </div>
              <div className="project-right">
                <img
                  loading="lazy"
                  src={project.imageUrl}
                  alt="Project Screenshot"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="other-projects">
          <h3 className="section-heading-3 other-projects__heading">
            (Other works)
          </h3>
          <div className="other-projects-container">
            {otherProjects.map((project) => (
              <div key={project.id} className="other-projects__item">
                <img
                  loading="lazy"
                  src={project.imageUrl}
                  alt={project.title}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
