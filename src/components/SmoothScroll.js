"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    // Initialize Lenis for buttery smooth momentum scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing for premium feel
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Handle anchor links natively with Lenis
    const handleAnchorClick = (e) => {
      const target = e.currentTarget;
      const href = target.getAttribute("href");
      
      if (href && href.startsWith("#")) {
        e.preventDefault();
        lenis.scrollTo(href);
      }
    };

    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
      link.addEventListener("click", handleAnchorClick);
    });

    return () => {
      lenis.destroy();
      anchorLinks.forEach(link => {
        link.removeEventListener("click", handleAnchorClick);
      });
    };
  }, []);

  return <>{children}</>;
}
