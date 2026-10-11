import {
  FaMeta,
  FaGoogle,
  FaMagnifyingGlassChart,
  FaPalette,
  FaRobot,
  FaEnvelope
} from "react-icons/fa6";

import "./Tools.css";

function Tools() {
  const tools = [
    {
      name: "Meta Business Suite",
      category: "SOCIAL MEDIA",
      icon: <FaMeta />
    },
    {
      name: "Meta Ads Manager",
      category: "PAID ADVERTISING",
      icon: <FaMeta />
    },
    {
      name: "Google Ads",
      category: "PAID ADVERTISING",
      icon: <FaGoogle />
    },
    {
      name: "Google Analytics",
      category: "ANALYTICS",
      icon: <FaGoogle />
    },
    {
      name: "Google Search Console",
      category: "SEO",
      icon: <FaGoogle />
    },
    {
      name: "SEMrush",
      category: "SEO",
      icon: <FaMagnifyingGlassChart />
    },
    {
      name: "Canva",
      category: "CREATIVE",
      icon: <FaPalette />
    },
    
    {
      name: "ChatGPT",
      category: "AI TOOL",
      icon: <FaRobot />
    },
    {
      name: "Instantly, Zoho Campaigns",
      category: "EMAIL MARKETING",
      icon: <FaEnvelope />
    },
  ];

  return (
    <section className="tools-section" id="tools">
      <div className="tools-container">

        <div className="tools-heading">
          <span className="tools-label">
            TOOLS & PLATFORMS
          </span>

          <h2>
            Tools I use to
            <span> execute digital marketing.</span>
          </h2>

          <p>
            A selection of digital marketing platforms and tools I use across
            social media, SEO, advertising, analytics, creative work, and
            campaign reporting.
          </p>
        </div>

        <div className="tools-grid">
          {tools.map((tool) => (
            <article
              className="tool-card"
              key={tool.name}
            >
              <div className="tool-icon">
                {tool.icon}
              </div>

              <div className="tool-content">
                <span className="tool-category">
                  {tool.category}
                </span>

                <h3>
                  {tool.name}
                </h3>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Tools;