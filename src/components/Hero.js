"use client";

import { useEffect, useRef, useState } from "react";

const floatingIcons = [
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    alt: "HTML5",
    className: "icon-html",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    alt: "CSS3",
    className: "icon-css",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    alt: "JavaScript",
    className: "icon-js",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    alt: "React",
    className: "icon-react",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    alt: "Node.js",
    className: "icon-node",
  },
];

const testimonialIcons = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
];

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    // Trigger entrance animation after mount
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="hero-section" ref={heroRef}>
      <div className="hero-card">
        {/* Background gradient glow effects */}
        <div className="hero-bg-glow glow-1"></div>
        <div className="hero-bg-glow glow-2"></div>
        <div className="hero-bg-glow glow-3"></div>

        {/* Decorative arcs / orbit rings */}
        <div className="hero-arc"></div>
        <div className="hero-arc arc-2"></div>

        {/* Orange 3D ribbon shapes like the Figma */}
        <div className="orange-ribbon ribbon-top-right"></div>
        <div className="orange-ribbon ribbon-mid-left"></div>
        <div className="orange-ribbon ribbon-bottom"></div>
        <div className="orange-ribbon ribbon-small-1"></div>
        <div className="orange-ribbon ribbon-small-2"></div>

        {/* Particle dots */}
        <div className="particle-dot dot-1"></div>
        <div className="particle-dot dot-2"></div>
        <div className="particle-dot dot-3"></div>
        <div className="particle-dot dot-4"></div>
        <div className="particle-dot dot-5"></div>
        <div className="particle-dot dot-6"></div>

        {/* Hero Content */}
        <div className="hero-content">
          <div className={`hero-text ${isVisible ? "animate-in" : ""}`}>
            <p className="hero-greeting">
              Hey, I am <span className="accent">Manumay</span>
            </p>
            <h1 className="hero-title">Full Stack Developer</h1>
            <p className="hero-description">
              Full Stack Developer with hands-on experience building
              production-grade web applications using React, Node.js, Express,
              and MongoDB. Passionate about crafting scalable, performant
              digital experiences.
            </p>
            <div className="hero-cta">
              <a href="#contact" className="btn-primary">
                Hire me
              </a>
              <a href="#contact" className="btn-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </a>
            </div>
          </div>

          <div className={`hero-visual ${isVisible ? "animate-in" : ""}`}>
            <div className="hero-image-wrapper">
              {/* Multiple glow layers behind avatar */}
              <div className="hero-glow"></div>
              <div className="hero-glow glow-secondary"></div>

              {/* Avatar with slide-up animation */}
              <div className={`hero-avatar-container ${isVisible ? "slide-up" : ""}`}>
                <img
                  src="/images/custom-3d-avatar.png"
                  alt="Manumay Raj Mishra - Full Stack Developer"
                  className="hero-avatar"
                />
              </div>

              {/* Floating tech icons */}
              {floatingIcons.map((icon, i) => (
                <div
                  key={icon.alt}
                  className={`floating-icon ${icon.className} ${
                    isVisible ? "pop-in" : ""
                  }`}
                  style={{ animationDelay: `${0.8 + i * 0.15}s` }}
                >
                  <img src={icon.src} alt={icon.alt} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats / Highlights instead of testimonial */}
        <div className={`testimonial-card ${isVisible ? "animate-in" : ""}`}>
          <div className="quote-icon">&#x275D;</div>
          <p className="testimonial-text">
            9 months of internship experience shipping production React and
            Node.js features. Solved 350+ DSA problems. Delivered scalable
            dashboards, real-time chat systems, and e-commerce platforms.
          </p>
          <div className="testimonial-author">
            <img
              src="/images/custom-3d-avatar.png"
              alt="Manumay Raj Mishra"
              className="author-avatar"
            />
            <div>
              <div className="author-name">Manumay Raj Mishra</div>
              <div className="author-role">Full Stack Developer</div>
            </div>
          </div>
          <div className="testimonial-icons">
            {testimonialIcons.map((src, i) => (
              <div key={i} className="t-icon">
                <img src={src} alt="tech" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
