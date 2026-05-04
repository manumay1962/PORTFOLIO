"use client";

import dynamic from "next/dynamic";

const InteractiveBalls = dynamic(() => import("./InteractiveBalls"), {
  ssr: false,
});

const skills = [
  {
    name: "JavaScript",
    level: 90,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    label: "Advanced",
  },
  {
    name: "TypeScript",
    level: 78,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    label: "Proficient",
  },
  {
    name: "React.js",
    level: 88,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    label: "Advanced",
  },
  {
    name: "Next.js",
    level: 75,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    label: "Proficient",
  },
  {
    name: "Node.js",
    level: 85,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    label: "Advanced",
  },
  {
    name: "Express.js",
    level: 82,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    label: "Proficient",
  },
  {
    name: "MongoDB",
    level: 80,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    label: "Proficient",
  },
  {
    name: "C++",
    level: 82,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    label: "Proficient",
  },
  {
    name: "Redux",
    level: 80,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    label: "Proficient",
  },
  {
    name: "CSS3",
    level: 90,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    label: "Advanced",
  },
  {
    name: "Git",
    level: 85,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    label: "Advanced",
  },
  {
    name: "Docker",
    level: 60,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    label: "Intermediate",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      {/* Interactive 3D Balls Background */}
      <div className="skills-balls-container">
        <InteractiveBalls />
      </div>

      <div className="section-container">
        <div className="section-header reveal">
          <div className="section-label">
            <span>💡</span> What I Do
          </div>
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle">
            A curated toolkit of technologies I use to build production-grade
            web applications. Always learning, always improving.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`skill-card reveal delay-${(index % 4) + 1}`}
            >
              <div className="skill-icon-wrapper">
                <img src={skill.icon} alt={skill.name} />
              </div>
              <div className="skill-name">{skill.name}</div>
              <div className="skill-level">{skill.label}</div>
              <div className="skill-bar-bg">
                <div
                  className="skill-bar-fill"
                  data-width={`${skill.level}%`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
