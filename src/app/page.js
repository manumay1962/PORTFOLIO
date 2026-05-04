"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading) return;

    // Scroll reveal
    const reveals = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right, .reveal-scale"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    reveals.forEach((el) => observer.observe(el));

    // Skill bar animation
    const skillBars = document.querySelectorAll(".skill-bar-fill");
    const skillObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const width = entry.target.getAttribute("data-width");
            entry.target.style.width = width;
          }
        });
      },
      { threshold: 0.3 }
    );

    skillBars.forEach((bar) => skillObserver.observe(bar));

    return () => {
      observer.disconnect();
      skillObserver.disconnect();
    };
  }, [loading]);

  return (
    <>
      <Preloader loading={loading} />
      {!loading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
          </main>
          <Footer />
          <BackToTop />
        </>
      )}
    </>
  );
}
