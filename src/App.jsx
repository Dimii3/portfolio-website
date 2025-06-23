import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Lenis from "lenis";
import Preloader from "./components/preloader";
import { preloadImages } from "./utils.js/preloadImages";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setIsFadingOut(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 600);
    };

    const crucialImages = ["/header-image-min.webp", "/logo.svg"];

    Promise.all([
      new Promise((resolve) => {
        if (document.readyState === "complete") {
          resolve();
        } else {
          window.addEventListener("load", resolve);
        }
      }),
      preloadImages(crucialImages),
    ])
      .then(() => {
        handleLoad();
      })
      .catch((err) => {
        console.error("Error during preloading of resources:", err);
        handleLoad();
      });
  }, []);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      {isLoading ? (
        <Preloader isFading={isFadingOut} />
      ) : (
        <>
          <Menu />
          <Header />
          <Skills />
          <Services />
          <Projects />
          <Footer />
        </>
      )}
    </>
  );
}
