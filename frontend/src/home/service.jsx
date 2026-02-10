import "../App.css";

export default function Services() {
  return (
    <section className="services-section">
      <h2 className="services-title">Our Services</h2>

      {/* Upper Row */}
      <div className="row">
        <div className="card">
          <h3>Website Designing</h3>
          <p>
            Professional web designing services to create impressive business
            pages that engage users and convert visitors into customers.
          </p>
          <ul>
            <li>Static Website Design</li>
            <li>Dynamic Website Design</li>
            <li>E-commerce Website Design</li>
          </ul>
        </div>

        <div className="card">
          <h3>Website Development</h3>
          <p>
            Build a strong online presence using advanced technologies and
            scalable architecture tailored to your business goals.
          </p>
          <ul>
            <li>PHP Website Development</li>
            <li>E-commerce Development</li>
            <li>Custom Web Applications</li>
          </ul>
        </div>

        <div className="card">
          <h3>Mobile App Development</h3>
          <p>
            Create fast, secure, and user-friendly mobile applications that
            deliver a smooth customer experience.
          </p>
          <ul>
            <li>Android App Development</li>
            <li>iOS App Development</li>
            <li>App Maintenance & Optimization</li>
          </ul>
        </div>
      </div>

      {/* Lower Row */}
      <div className="row">
        <div className="card">
          <h3>SEO Optimization</h3>
          <p>
            Improve your website visibility on search engines with proven SEO
            strategies and keyword optimization.
          </p>
          <ul>
            <li>On-Page SEO</li>
            <li>Technical SEO</li>
            <li>Keyword Research</li>
          </ul>
        </div>

        <div className="card">
          <h3>Digital Marketing</h3>
          <p>
            Data-driven digital marketing campaigns designed to increase
            traffic, leads, and brand authority across platforms.
          </p>
          <ul>
            <li>Google Ads</li>
            <li>Social Media Marketing</li>
            <li>Analytics & Reporting</li>
          </ul>
        </div>

        <div className="card">
          <h3>Branding</h3>
          <p>
            Build a strong brand identity that connects emotionally with your
            audience and stands out in the market.
          </p>
          <ul>
            <li>Logo Design</li>
            <li>Brand Strategy</li>
            <li>Visual Identity</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
