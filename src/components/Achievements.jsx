import "./Achievements.css";

export default function Achievements() {

  const certificates = [
    { img: "/certificates/ChatGPT.png", name: "Udemy ChatGpt" },
    { img: "/certificates/Training_cert.png", name: "Training in OOPS using C++" },
    { img: "/certificates/Google_BitsandBytes.png", name: "Google Bits and Bytes certificate" },
    { img: "/certificates/infosys_computational.png", name: "Infosys Computational Theory Certificate" },
    { img: "/certificates/build generative.png", name: "Built Generative & AI Certificate" }
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