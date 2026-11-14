import { motion } from "motion/react";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="section-label">
        01 — ABOUT ME
      </div>

      <div className="about-content">
        <motion.div
          className="about-title-wrap"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="about-big-number">01</span>

          <h2>
            I don't just
            <span> write code.</span>
            <br />
            I build things.
          </h2>
        </motion.div>

        <motion.div
          className="about-text"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.9,
            delay: 0.15,
          }}
        >
          <div className="about-line"></div>

          <p className="about-lead">
            I'm Mohammed Sohail, a developer and technology
            enthusiast interested in building products across
            web, mobile, AI and IoT.
          </p>

          <p>
            From mobile applications to autonomous UAV systems,
            I enjoy turning ideas into working technology.
            I like experimenting, learning by building and
            solving problems that exist beyond the screen.
          </p>

          <div className="about-tags">
            <span>WEB</span>
            <span>MOBILE</span>
            <span>AI</span>
            <span>IoT</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="about-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <span>BASED IN HYDERABAD</span>

        <div className="about-scroll-line">
          <span></span>
        </div>

        <span>ALWAYS BUILDING</span>
      </motion.div>
    </section>
  );
}

export default About;