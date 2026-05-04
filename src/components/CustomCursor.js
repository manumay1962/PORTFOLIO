"use client";
import { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    // Only run on desktop devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;

    let lastSparkleTime = 0;

    const createSparkle = (x, y) => {
      const sparkle = document.createElement("div");
      sparkle.className = "cursor-sparkle";
      document.body.appendChild(sparkle);

      const size = Math.random() * 5 + 3;
      
      // Rocket points top-left, so exhaust must shoot bottom-right!
      // Math.PI / 4 is 45 degrees (bottom-right). We add a small random spread to make it look like fire.
      const baseAngle = Math.PI / 4; 
      const angleSpread = (Math.random() - 0.5) * (Math.PI / 2.5);
      const angle = baseAngle + angleSpread;
      
      const velocity = Math.random() * 20 + 10; // Faster thrust
      const tx = Math.cos(angle) * velocity;
      const ty = Math.sin(angle) * velocity;

      // Add red to the mix for fire
      const colors = ['#ff6b2b', '#ffffff', '#ffb380', '#ff3300'];
      sparkle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      
      sparkle.style.width = `${size}px`;
      sparkle.style.height = `${size}px`;
      
      // Use purely hardware-accelerated transforms to completely eliminate layout reflow lag
      sparkle.style.transform = `translate3d(${x}px, ${y}px, 0) scale(1)`;

      requestAnimationFrame(() => {
        sparkle.style.transform = `translate3d(${x + tx}px, ${y + ty}px, 0) scale(0)`;
        sparkle.style.opacity = "0";
      });

      setTimeout(() => {
        if (sparkle.parentNode) sparkle.remove();
      }, 700);
    };

    const updatePosition = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      const now = performance.now();
      // Increase debounce slightly and only spawn 1 per frame to save CPU/GPU cycles
      if (now - lastSparkleTime > 30) {
        createSparkle(mouseX + 30, mouseY + 30);
        lastSparkleTime = now;
      }
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isClickable =
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button");

      setIsHovering(isClickable);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    document.documentElement.style.cursor = "none";
    document.body.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.documentElement.style.cursor = "auto";
      document.body.style.cursor = "auto";
    };
  }, []);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <div ref={dotRef} className="custom-cursor-wrapper">
      <div
        className={`custom-cursor-arrow ${isHovering ? "hover" : ""} ${
          isClicking ? "click" : ""
        }`}
      >
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: "scaleX(-1)" }} // Flip so it points top-left like a real cursor!
        >
          {/* Cartoonish Rocket Ship */}
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" fill="var(--accent)" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round"></path>
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" fill="var(--accent)" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round"></path>
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" fill="#ffb380" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round"></path>
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" fill="#ffb380" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round"></path>
          <circle cx="14" cy="10" r="2" fill="#fff"></circle>
        </svg>
      </div>
    </div>
  );
}
