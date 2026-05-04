"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          manumay<span>.</span>
        </div>
        <div className="footer-text">
          © {currentYear} Manumay Raj Mishra. Crafted with passion and precision.
        </div>
        <div className="footer-links">
          <a href="#home" className="footer-link">
            Home
          </a>
          <a href="#skills" className="footer-link">
            Skills
          </a>
          <a href="#experience" className="footer-link">
            Experience
          </a>
          <a href="#projects" className="footer-link">
            Projects
          </a>
          <a href="#contact" className="footer-link">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
