import "./About.css";

export default function About() {
  return (
    <section id="about" className="about-dev">

      {/* ================= TOP ABOUT ================= */}
      <div className="about-dev-container">

        {/* LEFT SIDE */}
        <div className="about-dev-left">

          <p className="code-label">// About Me</p>

          <h2 className="about-dev-title">
            Hi, I'm <span>Sahil Kumar</span>
          </h2>

          <p className="about-dev-text">
            I'm a Computer Science Engineering student and Full Stack Developer
            passionate about building modern web applications and smooth
            digital experiences.
          </p>

          <p className="about-dev-text">
            I enjoy working across the entire stack — from crafting clean,
            responsive UIs to designing reliable backend systems and APIs.
          </p>

          <p className="about-dev-text">
            My goal is to write meaningful code that solves real problems
            and delivers great user experiences.
          </p>

        </div>

        {/* RIGHT SIDE STATS */}
        <div className="about-dev-right">

          <div className="about-stat-card">
            <span className="code-icon">&lt;/&gt;</span>
            <h3>2+</h3>
            <p>Years Learning</p>
          </div>

          <div className="about-stat-card">
            <h3>5+</h3>
            <p>Projects Built</p>
          </div>

          <div className="about-stat-card">
            <h3>Full Stack</h3>
            <p>React · Node · Spring Boot</p>
          </div>

          <div className="about-stat-card">
            <h3>5+</h3>
            <p>Technologies</p>
          </div>

        </div>
      </div>

      {/* ================= EDUCATION ================= */}
      <div className="education-section">

        <div className="edu-header">
          <p className="code-label">// Education</p>
          <h3 className="education-title">My Academic Journey</h3>
        </div>

        <div className="edu-cards">

          {/* BTECH */}
          <div className="edu-card">
            <div className="edu-card-left">
              <div className="edu-step">01</div>
              <div className="edu-line" />
            </div>
            <div className="edu-card-body">
              <span className="edu-tag">Ongoing</span>
              <h4>B.Tech — Computer Science & Engineering</h4>
              <p className="edu-school">Lovely Professional University, Punjab</p>
              <span className="edu-year">2024 — Present</span>
            </div>
          </div>

          {/* DIPLOMA */}
          <div className="edu-card">
            <div className="edu-card-left">
              <div className="edu-step">02</div>
              <div className="edu-line" />
            </div>
            <div className="edu-card-body">
              <span className="edu-tag">76%</span>
              <h4>Diploma in Engineering</h4>
              <p className="edu-school">Lovely Professional University</p>
              <span className="edu-year">2021 — 2024</span>
            </div>
          </div>

          {/* 10TH */}
          <div className="edu-card last">
            <div className="edu-card-left">
              <div className="edu-step">03</div>
            </div>
            <div className="edu-card-body">
              <span className="edu-tag">89%</span>
              <h4>Matriculation (10th Standard)</h4>
              <p className="edu-school">St.John's Academy, Patna</p>
              <span className="edu-year">2018 — 2020</span>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}