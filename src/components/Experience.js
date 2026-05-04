"use client";

const timeline = [
  {
    date: "Dec 2025 - Feb 2026",
    title: "Full Stack Developer Intern",
    company: "Quant-Data",
    description:
      "Engineered React TypeScript dashboards with KPI cards, graphs, and tables powered by a unified backend API. Developed Node.js/Express REST APIs with server-side caching, improving dashboard load time by 40%. Consolidated 3+ separate endpoints into a single optimized API, reducing frontend network calls by 60%.",
    tags: ["React", "TypeScript", "Node.js", "Express", "REST APIs"],
  },
  {
    date: "Jan 2025 - Jun 2025",
    title: "Frontend Developer Intern",
    company: "Plasmid",
    description:
      "Built responsive UI components in React.js for an ed-tech platform with 500+ users, reducing bounce rate by 20%. Optimized frontend performance, reducing initial page load time by 30%. Integrated REST APIs and managed state across 15+ React components using Context API and custom hooks.",
    tags: ["React.js", "REST APIs", "Context API", "JavaScript"],
  },
  {
    date: "Nov 2021 - May 2025",
    title: "B.E. in Electrical and Electronics",
    company: "Bangalore Institute of Technology",
    description:
      "Graduated with a CGPA of 7.08/10. Focused on web development alongside core engineering, building multiple full-stack projects and solving 350+ DSA problems across competitive coding platforms.",
    tags: ["DSA", "Web Dev", "C++", "Problem Solving"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="section-container">
        <div className="section-header reveal">
          <div className="section-label">
            <span>🚀</span> My Journey
          </div>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            From classroom to production-grade applications — every step has
            been about learning, building, and shipping real features.
          </p>
        </div>

        <div className="timeline">
          {timeline.map((item, index) => (
            <div
              key={index}
              className={`timeline-item ${
                index % 2 === 0 ? "reveal-left" : "reveal-right"
              } delay-${(index % 4) + 1}`}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <div className="timeline-date">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  {item.date}
                </div>
                <h3 className="timeline-title">{item.title}</h3>
                <div className="timeline-company">{item.company}</div>
                <p className="timeline-description">{item.description}</p>
                <div className="timeline-tags">
                  {item.tags.map((tag) => (
                    <span key={tag} className="timeline-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
