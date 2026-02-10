import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const Contact = () => {
  const initialContactState = {
    name: "",
    email: "",
    message: "",
    service: "",
  };

  const [loading, setloading] = useState(false);
  const [formData, setFormData] = useState(initialContactState);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setloading(true);
      await axios.post("http://localhost:6321/api/contact", formData);
      toast.success("Your message was sent successfully. We’ll be in touch soon.");
      setFormData(initialContactState);
    } catch (err) {
      console.error("Error submitting contact form:", err);
      toast.error("Failed to submit message. Please try again later.");
    } finally {
      setloading(false);
    }
  };
  return (
    <>
      <section className="contact-container" id="contact">
        <h2 className="contact-title">Contact Us</h2>
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
    </>
  );
};

export default Contact;
