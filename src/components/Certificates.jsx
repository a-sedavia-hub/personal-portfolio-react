import { useState, useEffect } from "react";
function Certificates() {
  const certificates = [
    {
      title: "HTML Essentials",
      issuer: "Cisco Networking Academy",
      date: "May 15, 2025",
      image: "${import.meta.env.BASE_URL}images/Certificates/html-cert.jpg",
    },
    {
      title: "Certificate Title 2",
      issuer: "Issuing Organization",
      date: "2026",
      image: "https://placehold.co/600x400?text=Certificate+2&font=open-sans",
    },
    {
      title: "Certificate Title 3",
      issuer: "Issuing Organization",
      date: "2026",
      image: "https://placehold.co/600x400?text=Certificate+3&font=open-sans",
    },
  ];

  const [selectedCertificate, setSelectedCertificate] = useState(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedCertificate(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <section className="certificates section" id="certificates">
      <div className="section-heading">
        <span className="eyebrow">MY ACHIEVEMENTS</span>
        <h2>Certificates</h2>
        <p>
          Here are some of the certificates and achievements I have earned
          through learning and professional development.
        </p>
      </div>

      <div className="certificate-grid">
        {certificates.map((certificate, index) => (
          <button
            type="button"
            className="certificate-card"
            key={index}
            onClick={() => setSelectedCertificate(certificate)}
            aria-label={`Preview ${certificate.title}`}
          >
            <div className="certificate-image">
              <img src={certificate.image} alt={certificate.title} />
            </div>

            <div className="certificate-info">
              <h3>{certificate.title}</h3>
              <p>{certificate.issuer}</p>
              <span>{certificate.date}</span>
            </div>
          </button>
        ))}
      </div>

      {selectedCertificate && (
        <div
          className="certificate-modal"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="certificate-modal-content"
            role="dialog"
            aria-modal="true"
            aria-label={selectedCertificate.title}
            onClick={(event) => event.stopPropagation()}
          >
            <h3>{selectedCertificate.title}</h3>
            <img
              className="certificate-full-image"
              src={selectedCertificate.image}
              alt={selectedCertificate.title}
            />

            <p>
              {selectedCertificate.issuer} · {selectedCertificate.date}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
export default Certificates;
