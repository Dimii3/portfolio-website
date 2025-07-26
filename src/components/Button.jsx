// import { useRef } from "react";

// export default function Button({
//   children,
//   href = "#",
//   className = "",
//   ...props
// }) {
//   const btnRef = useRef(null);

//   const handleMouseMove = (e) => {
//     const rect = btnRef.current.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;

//     btnRef.current.style.setProperty("--cursor-x", `${x}px`);
//     btnRef.current.style.setProperty("--cursor-y", `${y}px`);
//   };

//   return (
//     <a
//       className={`button ${className ? className : ""}`}
//       href={href}
//       onMouseMove={handleMouseMove}
//       ref={btnRef}
//       {...props}
//     >
//       {children}
//     </a>
//   );
// }
import { useRef } from "react";
import { stagger, useAnimate } from "framer-motion";

export default function Button({
  children = "Motion",
  href = "#",
  className = "",
  ...props
}) {
  const btnRef = useRef(null);
  const [scope, animate] = useAnimate();

  const handleMouseMove = (e) => {
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    btnRef.current.style.setProperty("--cursor-x", `${x}px`);
    btnRef.current.style.setProperty("--cursor-y", `${y}px`);
  };

  const handleMouseEnter = () => {
    animate(".letter", { y: -24 }, { duration: 0.3, delay: stagger(0.05) });
  };
  const handleMouseLeave = () => {
    animate(".letter", { y: 0 }, { duration: 0.3, delay: stagger(0.05) });
  };

  const text = typeof children === "string" ? children : "";

  return (
    <a
      className={`button${className ? " " + className : ""}`}
      href={href}
      ref={btnRef}
      onMouseMove={handleMouseMove}
      {...props}
    >
      <span
        ref={scope}
        className="button-inner"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span className="sr-only">{text}</span>
        <span className="letters" aria-hidden>
          {text.split("").map((letter, i) => (
            <span
              className={letter === " " ? "letter space" : "letter"}
              data-letter={letter}
              key={`${letter}_${i}`}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </span>
      </span>
    </a>
  );
}
