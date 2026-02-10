import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Contacts = () => {
  const initialContactState = {
    name: "",
    email: "",
    message: "",
    service: "",
  };

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(initialContactState);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.post("http://localhost:6321/api/contact", formData);
      toast.success(
        "Your message was sent successfully. We’ll be in touch soon.",
      );
      setFormData(initialContactState);
    } catch (err) {
      console.log("Internal server error", err);
      toast.error("Failed to submit message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="contacted-banner">
        <div className="contacted-head">
          <h1>Ready to Get Started</h1>
          <h4>Tell us about your goals and we’ll take care of the rest.</h4>
        </div>
      </div>
      <div className="conten-container">
        <section>
          <div className="cone-left">
            <h1> Have a project in mind? Contact Us</h1>
          </div>
          <section className="social-platform">
            <div className="social-icons">
              <a
                href="http://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                href="http://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="http://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="http://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </section>
        </section>

        <section className="contact-container" id="contact">
          <h2 className="contact-title">Let’s Build Your Growth Strategy</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <select
              className="service-select-home"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">Select a service</option>
              <option value="seo">SEO</option>
              <option value="ppc">Google / Meta Ads</option>
              <option value="social-media">Social Media Marketing</option>
              <option value="branding">Branding</option>
              <option value="web">Website / Landing Page</option>
            </select>
            <textarea
              name="message"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit">
              {loading ? "Submitting..." : "Send Message"}
            </button>
          </form>
        </section>
      </div>

      <section className="reviews">
        <h1>What Our Customer Says</h1>
        <div className="customer">
          <p>
            “Honestly, working with them was way easier than I thought. They’re
            super responsive and actually understand what we need. Got more
            leads than we expected! -Severus”
          </p>

          <p>
            “Our social media blew up after they started managing it. Can’t
            believe how much difference a good strategy makes. Totally recommend
            them.” -Albus
          </p>
          <p>
            “They know their stuff, no doubt. Our website traffic went up and
            the leads coming in are really good quality. Wasn’t expecting that
            much so fast. -Minerva”
          </p>
        </div>
      </section>
    </>
  );
};

export default Contacts;
