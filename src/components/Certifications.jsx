import {
  FaGoogle,
  FaLinkedinIn,
  FaArrowUpRightFromSquare
} from "react-icons/fa6";

import "./Certifications.css";

function Certifications() {
  const certifications = [
    {
      name: "Google Ads Display Certification",
      issuer: "Google Digital Academy (Skillshop)",
      issued: "ISSUED SEP 2026",
      credentialId: "193922898",
      icon: <FaGoogle />,
      link: "https://skillshop.credential.net/34d828dc-44fd-4765-bad0-817e89c0309c#acc.Czaqwh4g"
    },
    {
      name: "Google Ads Search Certification",
      issuer: "Google Digital Academy (Skillshop)",
      issued: "ISSUED SEP 2026",
      credentialId: "193916512",
      icon: <FaGoogle />,
      link: "https://skillshop.credential.net/ebac3efc-32e2-458f-83f2-8898a38481f2#acc.eWm20NP1"
    },
    {
      name: "Google Analytics Certification",
      issuer: "Google Digital Academy (Skillshop)",
      issued: "ISSUED SEP 2026",
      credentialId: "193834039",
      icon: <FaGoogle />,
      link: "https://skillshop.credential.net/deb78e2c-7496-4398-b2e2-4fc149409130#acc.ZtT45i3F"
    },
    {
      name: "LinkedIn Advertising Fundamentals Certification",
      issuer: "LinkedIn",
      issued: "ISSUED OCT 2026",
      credentialId: "3t2984cio9tc",
      icon: <FaLinkedinIn />,
      link: "https://training.marketing.linkedin.com/verify/3t2984cio9tc"
    }
  ];

  return (
    <section
      className="certifications-section"
      id="certifications"
    >
      <div className="certifications-container">

        <div className="certifications-heading">

          <span className="certifications-label">
            CERTIFICATIONS
          </span>

          <h2>
            Certifications that
            <span> strengthen my expertise.</span>
          </h2>

          <p>
            Professional certifications that validate my knowledge across
            digital advertising, analytics, and marketing platforms.
          </p>

        </div>

        <div className="certifications-grid">

          {certifications.map((certification) => (
            <article
              className="certification-card"
              key={certification.name}
            >

              <div className="certification-icon">
                {certification.icon}
              </div>

              <div className="certification-content">

                <span className="certification-issued">
                  {certification.issued}
                </span>

                <h3>
                  {certification.name}
                </h3>

                <p className="certification-issuer">
                  {certification.issuer}
                </p>

                <p className="certification-id">
                  Credential ID: {certification.credentialId}
                </p>

                <a
                  href={certification.link}
                  target="_blank"
                  rel="noreferrer"
                  className="certification-link"
                >
                  View Credential
                  <FaArrowUpRightFromSquare />
                </a>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Certifications;