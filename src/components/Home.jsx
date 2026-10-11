import { useEffect, useState } from "react";
import "./Home.css";

import {
  FaSearch,
  FaChartLine,
  FaEnvelope,
} from "react-icons/fa";

import {
  FaGoogle,
  FaArrowRight,
  FaMeta,
} from "react-icons/fa6";

function Home() {
  const fullName = "Ganesh Seemusiri";
  const [typedName, setTypedName] = useState("");

  useEffect(() => {
    let index = 0;
    let deleting = false;
    let timeout;

    const typeAnimation = () => {
      if (!deleting) {
        index++;

        setTypedName(fullName.substring(0, index));

        if (index === fullName.length) {
          deleting = true;

          timeout = setTimeout(typeAnimation, 1800);
          return;
        }

        timeout = setTimeout(typeAnimation, 110);
      } else {
        index--;

        setTypedName(fullName.substring(0, index));

        if (index === 0) {
          deleting = false;

          timeout = setTimeout(typeAnimation, 500);
          return;
        }

        timeout = setTimeout(typeAnimation, 65);
      }
    };

    timeout = setTimeout(typeAnimation, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section className="home" id="home">

      <div className="home-content">

        <p className="home-label">
          DIGITAL MARKETING EXECUTIVE
        </p>

        <h1>
          Hi, I'm{" "}
          <span className="typing-line">
            <span className="typing-name">
              {typedName}
            </span>

            <span className="typing-cursor"></span>
          </span>
        </h1>

        <p className="home-description">
          I create meaningful digital marketing strategies and help
          businesses grow through Social Media, SEO, and Email
          Marketing campaigns.
        </p>

        <div className="home-buttons">

          <a
            href="#about"
            className="primary-button"
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="secondary-button"
          >
            Let's Connect
            <FaArrowRight />
          </a>

        </div>

      </div>


      <div className="home-visual">

        <div className="dashboard-card">

          <div className="dashboard-top">

            <div>
              <p>
                MARKETING OVERVIEW
              </p>

              <h3>
                Digital Strategy
              </h3>
            </div>

            <div className="dashboard-status">
              Active
            </div>

          </div>


          <div className="marketing-cards">

            <div className="marketing-card">

              <div className="marketing-icon">
                <FaGoogle />
              </div>

              <div>
                <p>
                  Google Ads
                </p>

                <span>
                  Campaign Management
                </span>
              </div>

            </div>


            <div className="marketing-card">

              <div className="marketing-icon">
                <FaMeta />
              </div>

              <div>
                <p>
                  Meta Marketing
                </p>

                <span>
                  Social Media
                </span>
              </div>

            </div>


            <div className="marketing-card">

              <div className="marketing-icon">
                <FaSearch />
              </div>

              <div>
                <p>
                  SEO
                </p>

                <span>
                  Organic Growth
                </span>
              </div>

            </div>


            <div className="marketing-card">

              <div className="marketing-icon">
                <FaChartLine />
              </div>

              <div>
                <p>
                  Analytics
                </p>

                <span>
                  Campaign Reporting
                </span>
              </div>

            </div>

          </div>


          <div className="chart-area">

            <div className="chart-header">

              <div>

                <p>
                  CAMPAIGN PERFORMANCE
                </p>

                <h4>
                  Marketing Insights
                </h4>

              </div>

              <FaChartLine />

            </div>


            <div className="chart">

              <div className="chart-grid">

                <span></span>
                <span></span>
                <span></span>
                <span></span>

              </div>


              <svg
                className="chart-svg"
                viewBox="0 0 500 150"
                preserveAspectRatio="none"
                aria-hidden="true"
              >

                <path
                  className="chart-area-fill"
                  d="
                    M 0 125
                    C 55 118, 70 108, 105 112
                    C 145 116, 155 92, 195 95
                    C 235 98, 245 72, 285 78
                    C 325 84, 340 60, 375 63
                    C 415 67, 440 35, 500 20
                    L 500 150
                    L 0 150
                    Z
                  "
                />

                <path
                  className="chart-path"
                  d="
                    M 0 125
                    C 55 118, 70 108, 105 112
                    C 145 116, 155 92, 195 95
                    C 235 98, 245 72, 285 78
                    C 325 84, 340 60, 375 63
                    C 415 67, 440 35, 500 20
                  "
                />

                <circle
                  className="chart-point"
                  cx="0"
                  cy="125"
                  r="4"
                />

                <circle
                  className="chart-point"
                  cx="105"
                  cy="112"
                  r="4"
                />

                <circle
                  className="chart-point"
                  cx="195"
                  cy="95"
                  r="4"
                />

                <circle
                  className="chart-point"
                  cx="285"
                  cy="78"
                  r="4"
                />

                <circle
                  className="chart-point"
                  cx="375"
                  cy="63"
                  r="4"
                />

                <circle
                  className="chart-point"
                  cx="500"
                  cy="20"
                  r="5"
                />

              </svg>

            </div>

          </div>

        </div>


        <div className="floating-card floating-seo">

          <FaSearch />

          <div>

            <p>
              SEO
            </p>

            <span>
              Optimization
            </span>

          </div>

        </div>


        <div className="floating-card floating-email">

          <FaEnvelope />

          <div>

            <p>
              Email
            </p>

            <span>
              Campaigns
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Home;