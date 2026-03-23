import "./Achievements.css";

export default function Achievements() {

  const certificates = [
    { img: "/certificates/cert1.png", name: "NPTEL Online Certification" },
    { img: "/certificates/cert2.jpeg", name: "Tranning in DSA using C++" },
    { img: "/certificates/cert3.jpeg", name: "Infosys GPT prompt Certificate" },
    { img: "/certificates/cert4.jpeg", name: "Infosys Computational Theory Certificate" },
    { img: "/certificates/cert5.jpeg", name: "Built Generative & AI Certificate" }
  ];

  return (
    <section className="achievements">

      <div className="achievements-container">

        <p className="achievements-label">// Achievements</p>

        <h2 className="achievements-title">
          Featured <span>Certifications</span>
        </h2>

        <div className="carousel">

          <div className="carousel-track">

            {[...certificates, ...certificates].map((cert, index) => (
              
              <div className="cert-card" key={index}>

                <a href={cert.img} download>
                  <img src={cert.img} alt={cert.name} />
                </a>

                <p className="cert-name">{cert.name}</p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}