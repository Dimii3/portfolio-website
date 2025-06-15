import { useRef } from "react";

export default function Button({
  children,
  href = "#",
  className = "",
  ...props
}) {
  const btnRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    btnRef.current.style.setProperty("--cursor-x", `${x}px`);
    btnRef.current.style.setProperty("--cursor-y", `${y}px`);
  };

  return (
    <a
      className={`button ${className ? className : ""}`}
      href={href}
      onMouseMove={handleMouseMove}
      ref={btnRef}
      {...props}
    >
      {children}
    </a>
  );
}
