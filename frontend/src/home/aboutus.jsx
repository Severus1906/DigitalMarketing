import React from "react";

const aboutus = () => {
  return (
    <>
      <section className="about-section">
        <div className="about-container">
          {/* LEFT */}
          <div className="about-text">
            <h2>About Us</h2>
            <p className="subtitle">
              We don’t just market brands — we build growth systems.
            </p>

            <p>
              Severus Agency is a results-driven digital marketing agency
              focused on helping businesses grow through smart strategy, clean
              design, and data-backed execution.
            </p>

            <p>
              From SEO and paid advertising to high-converting websites, we work
              as an extension of your team — not just another service provider.
            </p>

            <ul>
              <li>✔ Strategy before execution</li>
              <li>✔ Data-driven decisions</li>
              <li>✔ Long-term brand growth</li>
            </ul>
          </div>

          {/* RIGHT */}
          <div className="about-stats">
            <div className="stat">
              <h3>5+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat">
              <h3>100+</h3>
              <p>Projects Delivered</p>
            </div>
            <div className="stat">
              <h3>90%</h3>
              <p>Client Retention</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default aboutus;
