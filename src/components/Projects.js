"use client";
import { useRef } from "react";

const projects = [
  {
    title: "Shoppora",
    description:
      "A full-stack MERN e-commerce platform with authentication, product catalog, order management, digital wallet system, and Cloudinary CDN integration for optimized image delivery.",
    tech: ["MongoDB", "React", "Express", "Node.js", "Cloudinary"],
    thumbnail: "/images/shoppora-thumb.png",
    github: "https://github.com/manumay1962/SHOPPORA",
    live: "https://shoppora-1.onrender.com/",
  },
  {
    title: "TrailerX",
    description:
      "A modern movie and TV show trailer browsing platform built with React and Redux. Explore trending, popular, and upcoming titles with cast info, trailers, and a smooth OTT-like experience powered by TMDB API.",
    tech: ["React", "Redux", "TMDB API", "Tailwind CSS"],
    thumbnail: "/images/trailerx-thumb.png",
    github: "https://github.com/manumay1962/TrailerX",
    live: "https://trailer-x.vercel.app/",
  },
  {
    title: "Chat App",
    description:
      "A real-time chat application using Socket.IO with JWT authentication, persistent sessions, MongoDB schemas with indexing, and Cloudinary media integration for profile images.",
    tech: ["MongoDB", "React", "WebSocket", "Express", "Cloudinary"],
    thumbnail: "/images/chatapp-thumb.png",
    github: "https://github.com/manumay1962/CHAT-APP",
    live: "https://chat-app-frontend-lyart-mu.vercel.app/",
  },
  {
    title: "Refokus Agency Clone",
    description:
      "A pixel-perfect, dark-mode heavy clone of the award-winning Refokus agency website. Features complex scroll animations and a sleek typography-driven design.",
    tech: ["React", "Framer Motion", "Tailwind CSS", "GSAP"],
    thumbnail: "/images/refokus-thumb.png",
    github: "https://github.com/manumay1962",
    live: "#",
  },
  {
    title: "GTA VI Landing Page",
    description:
      "A stunning, vibrant Miami Vice-inspired landing page UI clone for the highly anticipated Grand Theft Auto VI, featuring modern glassmorphism and neon aesthetics.",
    tech: ["React", "CSS Modules", "Vite", "Figma"],
    thumbnail: "/images/gta-thumb.jpg",
    github: "https://github.com/manumay1962",
    live: "#",
  }
];

export default function Projects() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.querySelector('.project-card').offsetWidth + 22;
      sliderRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.querySelector('.project-card').offsetWidth + 22;
      sliderRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <div className="section-header reveal">
          <div className="section-header-top">
            <div>
              <div className="section-label">
                <span>🔥</span> Featured Work
              </div>
              <h2 className="section-title">Projects</h2>
              <p className="section-subtitle">
                A selection of projects that showcase my skills in building
                full-stack applications with modern technologies.
              </p>
            </div>
            
            <div className="slider-controls">
              <button onClick={scrollLeft} className="slider-btn" aria-label="Previous project">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button onClick={scrollRight} className="slider-btn" aria-label="Next project">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="projects-slider-wrapper">
          <div className="projects-slider" ref={sliderRef}>
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`project-card reveal delay-${index + 1}`}
              >
                <div className="project-image">
                  <img
                    src={project.thumbnail}
                    alt={`${project.title} screenshot`}
                    className="project-thumbnail"
                  />
                  <div className="project-overlay"></div>
                </div>
                <div className="project-body">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((t) => (
                      <span key={t} className="project-tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a
                      href={project.github}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                      Code
                    </a>
                    <a
                      href={project.live}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      Live
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
