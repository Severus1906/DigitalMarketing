import React from "react";
import Image from "../assets/aboutusimg.jpg";
import Image2 from "../assets/aboutus-img1.jpg";

const about = () => {
  return (
    <>
      {/* INTRO */}
      <section className="aboutus-container">
        <div className="aboutus-header">
      <h1>About Severus Agency – Digital Marketing That Drives Growth</h1>
        <p>
          Severus Agency is a results-driven digital marketing agency focused on
          helping brands grow online through smart strategy, data-backed
          decisions, and creative execution. We transform visibility into
          measurable business growth.
        </p>
        </div>
      </section>
      <section className="aboutus-intro">
     
        {/* UPPER */}
      </section>
      <section className="aboutus-middle">
        <div className="aboutus-middle1">
          <h1>What We Do</h1>
          <p>
            We provide end-to-end digital marketing solutions designed to
            increase organic traffic, generate high-quality leads, and improve
            conversion rates.
          </p>
          <ul>
            <li>Search Engine Optimization (SEO)</li>
            <li>Social Media Marketing</li>
            <li>Performance Marketing & Paid Ads</li>
            <li>Content Marketing & Copywriting</li>
            <li>Website & Brand Strategy</li>
          </ul>
        </div>
        <div className="aboutus-middle2">
          <img className="middle-img" src={Image} alt="About Us Image" />
        </div>
      </section>
      {/* LOWER */}
      <section className="aboutus-lower">
        <div className="aboutus-lower2">
          <img className="lower-img" src={Image2} alt="About Us Image2" />
        </div>
        <div className="aboutus-lower1">
          <h1>Why Brands Trust Severus Agency</h1>
          <p>
            At <b>Severus Agency</b>, brands trust us because we focus on what
            truly drives growth—visibility, relevance, and results. Our
            SEO-first approach ensures that every digital marketing strategy is
            built to improve search rankings, attract the right audience, and
            convert traffic into meaningful business outcomes. We combine
            data-driven insights, in-depth market research, and creative
            execution to deliver strategies that are both scalable and
            sustainable. Instead of relying on generic tactics, we tailor our
            solutions to align with each brand’s goals, industry, and customer
            behavior. With transparent processes, continuous optimization, and a
            forward-thinking mindset, Severus Agency helps businesses build
            long-term authority and stay competitive in an ever-evolving digital
            landscape.
          </p>
        </div>
      </section>
      <section>
        <h1 className="lowest-title">Testimonials</h1>
        <div className="lowest">
          <p>
            “Severus Agency helped us significantly improve our search rankings
            and organic traffic. Their SEO-first strategy and attention to
            detail made a real difference in how our brand performs online.” <br /> —
            Ron
          </p>
          <p>
            “What sets Severus Agency apart is their focus on measurable growth.
            Every campaign was aligned with our business goals, and we saw clear
            improvements in leads and conversions within a short time.”  <br />—
            Harry
          </p>
          <p>
            “Severus Agency operates like a true growth partner. Their
            transparent communication, data-driven decisions, and long-term
            mindset gave us confidence at every stage of our digital journey
            ” <br /> — Hermione
          </p>
        </div>
      </section>
    </>
  );
};

export default about;
