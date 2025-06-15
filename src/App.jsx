import React, { useEffect } from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Lenis from "lenis";

export default function App() {
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
      <Menu></Menu>
      <Header></Header>
      <Skills></Skills>
      <Services></Services>
      <Projects></Projects>
      <Footer></Footer>
    </>
  );
}
