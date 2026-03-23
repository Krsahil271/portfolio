import "./Hero.css";
import profile from "../assets/profile1.webp";
import resume from "../assets/Sahil_Resume.pdf";

export default function Hero() {
  return (
    <section id="home" className="hero">

      {/* Background decorations */}
      <div className="hero-bg-grid" />
      <div className="hero-bg-glow" />

      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-left">

          <div className="hero-badge">
            <span className="badge-dot" />
            Available for work
          </div>

          <h1 className="hero-title">
            <span className="hero-title-line line-1">Fullstack</span>
            <span className="hero-title-line line-2">
              Devel<span className="outline-text">oper</span>
            </span>
          </h1>

          <div className="hero-meta">
            <span className="hero-name">Sahil</span>
            <span className="hero-divider">—</span>
            <span className="hero-tag">React · Node · TypeScript</span>
          </div>

          <p className="hero-desc">
            I build fast, thoughtful web applications with clean code
            and experiences people actually enjoy using.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">
              <span>View Projects</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href={resume} download className="btn-secondary">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M7.5 1v9M4 7l3.5 3.5L11 7M2 13h11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Resume
            </a>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-right">
          <div className="image-frame">
            <div className="image-frame-inner">
              <img src={profile} alt="Sahil" />
            </div>
            <div className="frame-corner corner-tl" />
            <div className="frame-corner corner-br" />
            <div className="image-tag">
              <span className="tag-dot" />
              Full Stack Dev
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}