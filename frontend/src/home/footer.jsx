export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <h3>Severus Agency</h3>
          <p>
            Performance-focused digital marketing agency helping brands grow
            through SEO, ads, and conversion-driven design.
          </p>
        </div>

        <div>
          <h4>Services</h4>
          <a href="#">SEO</a>
          <a href="#">Digital Marketing</a>
          <a href="#">Web Development</a>
          <a href="#">Branding</a>
        </div>

        <div>
          <h4>Company</h4>
          <a href="#">About</a>
          <a href="#">Case Studies</a>
          <a href="#">Contact</a>
        </div>

        <div>
          <h4>Contact</h4>
          <p>Email: hello@severusagency.com</p>
          <p>Phone: +91 XXXXX XXXXX</p>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Severus Agency. All rights reserved.
      </div>
    </footer>
  );
}
