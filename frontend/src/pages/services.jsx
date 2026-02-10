import "../App.css";
import Servicesbg from "../assets/services-img.png"
import Research from "../assets/research-logo.png"
import Planing from "../assets/plan-logo.png"
import Testing from "../assets/testing.png"
import Analytic from "../assets/analytic.png"

export default function Services() {
  return (
    <main className="services-page">
      {/* HERO SECTION */}
      <section className="services-hero">
        <h1>Our Digital Marketing & Development Services</h1>
        <p>
          Severus Agency delivers SEO-first digital solutions designed to help
          businesses grow online, generate quality leads, and build long-term
          brand authority.
        </p>
      </section>
          <div className="services-heading">
            <h1 className="services-title">What We Offer</h1>
            <img className="services-img" src={Servicesbg} alt="" />
          </div>
      <section className="upper-service">
        {/* SEO */}
        <div className="service-content">
          <h2>SEO Optimization</h2>
          <p>
            Our SEO strategies focus on sustainable growth by improving search
            visibility, user experience, and content relevance. We align our
            optimization techniques with search engine algorithms and real user
            intent.
          </p>
          <ul>
            <li>Technical SEO audits & fixes</li>
            <li>On-page & keyword optimization</li>
            <li>Content SEO & internal linking</li>
            <li>Performance tracking & reporting</li>
          </ul>
          <button>Get SEO Consultation</button>
        </div>

        {/* WEBSITE DESIGN */}
        <div className="service-content">
          <h2>Website Designing</h2>
          <p>
            We design modern, responsive websites that reflect your brand
            identity and guide users toward meaningful actions. Every design is
            focused on clarity, performance, and conversions.
          </p>
          <ul>
            <li>Static & dynamic website design</li>
            <li>UI/UX focused layouts</li>
            <li>E-commerce website design</li>
            <li>Mobile-first responsive design</li>
          </ul>
          <button>Request Design Consultation</button>
        </div>
        {/* WEBSITE DEVELOPMENT */}
        <div className="service-content">
          <h2>Website Development</h2>
          <p>
            We build fast, secure, and scalable websites using modern
            technologies. Our development process ensures long-term performance
            and seamless user experience.
          </p>
          <ul>
            <li>Custom website development</li>
            <li>E-commerce development</li>
            <li>Backend & database integration</li>
            <li>Performance & security optimization</li>
          </ul>
          <button>Start Your Project</button>
        </div>
      </section>

      <section className="upper-service">
        {/* MOBILE APP */}
        <div className="service-content">
          <h2>Mobile App Development</h2>
          <p>
            We create reliable, high-performance mobile applications that
            deliver seamless experiences across devices and platforms.
          </p>
          <ul>
            <li>Android app development</li>
            <li>iOS app development</li>
            <li>UI/UX optimization</li>
            <li>Maintenance & updates</li>
          </ul>
          <button>Discuss App Development</button>
        </div>

        {/* DIGITAL MARKETING */}

        <div className="service-content">
          <h2>Digital Marketing</h2>
          <p>
            Our data-driven digital marketing campaigns are designed to increase
            traffic, generate leads, and maximize ROI across multiple platforms.
          </p>
          <ul>
            <li>Google Ads & paid campaigns</li>
            <li>Social media marketing</li>
            <li>Conversion tracking</li>
            <li>Analytics & performance reports</li>
          </ul>
          <button>Plan Marketing Strategy</button>
        </div>

        {/* BRANDING */}
        <div className="service-content">
          <h2>Branding</h2>
          <p>
            We help brands create a strong identity that builds trust,
            recognition, and emotional connection with their audience.
          </p>
          <ul>
            <li>Brand strategy & positioning</li>
            <li>Logo & visual identity</li>
            <li>Brand guidelines</li>
            <li>Consistency across platforms</li>
          </ul>
          <button>Build Your Brand</button>
        </div>
      </section>

      {/* PROCESS */}
      <section className="service-process">
        <h2>Our Working Process</h2>
        <div className="services-logo">
          <div className="ser-logo">
              <img src={Research} alt="Marketing research Logo" />
              <p>Research & Strategy</p>
          </div>
          <div className="ser-logo">
              <img src={Planing} alt="Marketing research Logo" />
              <p>Planning & Execution</p>
          </div>
          <div className="ser-logo">
              <img src={Testing} alt="Marketing research Logo" />
              <p>Optimization & Testing</p>
          </div>
          <div className="ser-logo">
              <img src={Analytic} alt="Marketing research Logo" />
              <p>Reporting & Scaling</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="service-cta">
        <h2>Ready to Grow Your Business?</h2>
        <p>
          Let’s create a digital strategy tailored to your goals and audience.
        </p>
        <button ><a className="telephone" href="tel:+">Get a Free Strategy Call </a></button>
      </section>
    </main>
  );
}
