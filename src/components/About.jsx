import {
  FaBullseye,
  FaChartLine,
  FaLightbulb,
  FaFacebookF,
  FaGoogle,
  FaArrowUpRightFromSquare,
  FaEnvelope,
  FaDownload,
  FaHouse,
} from "react-icons/fa6";

import { FaSearch } from "react-icons/fa";

import "./About.css";

function About() {
  const projects = [
    {
      icon: <FaHouse />,
      type: "MY OWN PROJECT",
      title: "Ganesh Dairy Farm",
      description:
        "A digital marketing project for my own dairy business, focused on building online visibility, promoting dairy products, and reaching local customers.",
      skills: [
        "Google Ads",
        "SEO",
        "Social Media Marketing",
        "Content",
      ],
      link: "https://ganeshdairyfarm.com",
    },

    {
      icon: <FaChartLine />,
      type: "COMPANY WEBSITE",
      title: "Xact Inc.",
      description:
        "Worked on the company website as part of digital marketing activities, including SEO, website monitoring, and overall digital marketing support.",
      skills: [
        "SEO",
        "Website Monitoring",
        "Digital Marketing",
      ],
      link: "https://xact.inc",
    },

    {
      icon: <FaEnvelope />,
      type: "MARKETING CAMPAIGNS",
      title: "Email Campaigns",
      description:
        "Worked on promotional and cold email campaigns to support marketing outreach, audience engagement, and campaign activities.",
      skills: [
        "Instantly",
        "Zoho Campaigns",
        "Email Marketing",
      ],
    },
  ];

  return (
    <section className="about-section" id="about">

      <div className="about-container">

        {/* =========================
            ABOUT ME
        ========================= */}

        <div className="about-heading">

          <p className="about-label">
            ABOUT ME
          </p>

          <h2>
            Turning ideas into meaningful
            <span> digital experiences.</span>
          </h2>

          <p className="about-intro">
            I am a Digital Marketing Executive focused on
            building practical marketing strategies through
            social media, SEO, paid advertising, email marketing,
            and campaign reporting.
          </p>

        </div>


        {/* =========================
            ABOUT CONTENT
        ========================= */}

        <div className="about-content">

          <div className="about-text">

            <div className="about-role">

              <div className="about-role-icon">
                <FaBullseye />
              </div>

              <div>

                <h3>
                  Digital Marketing Executive
                </h3>

                <p>
                  Strategy • Execution • Analysis
                </p>

              </div>

            </div>


            <p>
              I enjoy creating digital marketing strategies
              that connect businesses with the right audience.
              My work includes social media management, SEO,
              campaign reporting, and digital content creation.
            </p>


            <p>
              I focus on understanding the objective first,
              creating the right strategy, executing campaigns,
              and analyzing the results to identify areas for
              improvement.
            </p>


            {/* =========================
                HIGHLIGHTS
            ========================= */}

            <div className="about-highlights">

              {/* STRATEGY */}

              <div className="about-highlight">

                <div className="highlight-icon">
                  <FaLightbulb />
                </div>

                <div>

                  <h4>
                    Strategy
                  </h4>

                  <p>
                    Planning campaigns around business goals.
                  </p>

                </div>

              </div>


              {/* EXECUTION */}

              <div className="about-highlight">

                <div className="highlight-icon">
                  <FaChartLine />
                </div>

                <div>

                  <h4>
                    Execution
                  </h4>

                  <p>
                    Creating and managing digital campaigns.
                  </p>

                </div>

              </div>


              {/* ANALYSIS */}

              <div className="about-highlight">

                <div className="highlight-icon">
                  <FaSearch />
                </div>

                <div>

                  <h4>
                    Analysis
                  </h4>

                  <p>
                    Using data to understand campaign performance.
                  </p>

                </div>

              </div>

            </div>

          </div>


          {/* =========================
              ABOUT VISUAL
          ========================= */}

          <div className="about-visual">

            <div className="about-card">

              <div className="about-card-top">

                <div className="about-main-icon">
                  <FaChartLine />
                </div>

                <div>

                  <p>
                    DIGITAL MARKETING
                  </p>

                  <h3>
                    Marketing with purpose.
                  </h3>

                </div>

              </div>


              {/* SEO */}

              <div className="about-skill">

                <div className="about-skill-header">

                  <span>
                    SEO
                  </span>

                  <FaSearch />

                </div>

                <div className="skill-line">

                  <span className="skill-fill seo-fill"></span>

                </div>

              </div>


              {/* SOCIAL MEDIA */}

              <div className="about-skill">

                <div className="about-skill-header">

                  <span>
                    Social Media Marketing
                  </span>

                  <FaFacebookF />

                </div>

                <div className="skill-line">

                  <span className="skill-fill social-fill"></span>

                </div>

              </div>


              {/* GOOGLE ADS */}

              <div className="about-skill">

                <div className="about-skill-header">

                  <span>
                    Google Ads
                  </span>

                  <FaGoogle />

                </div>

                <div className="skill-line">

                  <span className="skill-fill ads-fill"></span>

                </div>

              </div>


              <div className="about-card-bottom">

                <FaBullseye />

                <p>
                  Focused on creating meaningful digital
                  marketing strategies.
                </p>

              </div>

            </div>

          </div>

        </div>


        {/* =========================
            RESUME BUTTON
        ========================= */}

        <div className="about-resume-action">

          <a
            href="/My Resume.pdf"
            download
            className="about-resume-button"
          >
            Download Resume
            <FaDownload />
          </a>

        </div>


        {/* =========================
            MY WORK & PROJECTS
        ========================= */}

        <div className="about-work-section">

          <div className="about-subheading">

            <p className="about-label">
              MY WORK & PROJECTS
            </p>

            <h2>
              Practical work that
              <span> builds experience.</span>
            </h2>

            <p>
              A selection of digital marketing work and practical
              projects where I apply strategy, execution, and
              marketing tools.
            </p>

          </div>


          <div className="about-project-grid">

            {projects.map((project) => (

              <article
                className="about-project-card"
                key={project.title}
              >

                <div className="about-project-icon">
                  {project.icon}
                </div>


                <div className="about-project-content">

                  <span className="about-project-type">
                    {project.type}
                  </span>

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.description}
                  </p>


                  <div className="about-project-skills">

                    {project.skills.map((skill) => (

                      <span key={skill}>
                        {skill}
                      </span>

                    ))}

                  </div>


                  {project.link && (

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="about-project-link"
                    >
                      Visit Website
                      <FaArrowUpRightFromSquare />
                    </a>

                  )}

                </div>

              </article>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;