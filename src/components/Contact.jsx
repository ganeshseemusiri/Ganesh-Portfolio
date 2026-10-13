import {
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaLinkedinIn,
  FaArrowRight,
  FaBriefcase,
} from "react-icons/fa6";

import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-decoration contact-decoration-left"></div>
      <div className="contact-decoration contact-decoration-right"></div>

      <div className="contact-container">
        <div className="contact-content">

          <div className="contact-left">

            <div className="contact-heading">
              <span className="contact-label">
                LET'S CONNECT
              </span>

              <h2>
                Let's create something
                <span> meaningful together.</span>
              </h2>

              <p>
                Have a project, opportunity, or digital marketing role in
                mind? I'd be happy to connect and discuss how I can
                contribute through SEO, social media marketing, paid
                advertising, and campaign reporting.
              </p>
            </div>

            <div className="availability-card">

              <div className="availability-icon">
                <FaBriefcase />
              </div>

              <div className="availability-content">
                <span className="availability-label">
                  OPEN TO OPPORTUNITIES
                </span>

                <p>
                  Open to digital marketing opportunities,
                  freelance projects and collaborations.
                </p>
              </div>

              <div className="availability-status">
                <span className="status-dot"></span>
                <span>Available</span>
              </div>

            </div>
          </div>

       
          <div className="contact-details-card">

            <h3 className="contact-details-title">
              CONTACT DETAILS
            </h3>

        
            <div className="contact-detail-item">

              <div className="contact-detail-icon">
                <FaEnvelope />
              </div>

              <div className="contact-detail-content">
                <span>EMAIL</span>

                <a href="mailto:ganeshseemusiri96@gmail.com">
                  ganeshseemusiri96@gmail.com
                </a>
              </div>

            </div>

          
            <div className="contact-detail-item">

              <div className="contact-detail-icon">
                <FaPhone />
              </div>

              <div className="contact-detail-content">
                <span>PHONE</span>

                <a href="tel:+919014353533">
                  +91 90143 53533
                </a>
              </div>

            </div>

       
            <div className="contact-detail-item">

              <div className="contact-detail-icon">
                <FaLocationDot />
              </div>

              <div className="contact-detail-content">
                <span>LOCATION</span>

                <p>
                  Visakhapatnam, Andhra Pradesh, India
                </p>
              </div>

            </div>

            <a
              className="linkedin-contact-button"
              href="https://www.linkedin.com/in/ganesh-seemusiri-9a0b2a266/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />

              <span>
                Connect with me on LinkedIn
              </span>

              <FaArrowRight />
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;