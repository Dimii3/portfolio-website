export default function Preloader({ isFading }) {
  return (
    <div className={`preloader ${isFading ? "fade-out" : ""}`}>
      <div className="preloader__dot"></div>
      <div className="preloader__dot"></div>
      <div className="preloader__dot"></div>
    </div>
  );
}
