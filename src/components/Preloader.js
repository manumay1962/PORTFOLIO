"use client";

export default function Preloader({ loading }) {
  return (
    <div className={`preloader ${!loading ? "loaded" : ""}`}>
      <div className="preloader-content">
        <div className="preloader-logo">
          manumay<span>.</span>
        </div>
        <div className="preloader-bar"></div>
      </div>
    </div>
  );
}
