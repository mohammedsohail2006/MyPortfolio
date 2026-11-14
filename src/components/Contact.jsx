import { motion } from "motion/react";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="section-label">
        05 — CONTACT
      </div>

      <div className="contact-content">
        <motion.div
          className="contact-heading"
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p className="contact-small">
            HAVE AN IDEA?
          </p>

          <h2>
            Let's build
            <br />
            <span>something.</span>
          </h2>
        </motion.div>

        <motion.div
          className="contact-details"
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
        >
          <div className="contact-availability">
            <span className="availability-dot"></span>
            AVAILABLE FOR OPPORTUNITIES
          </div>

          <p>
            Whether it's a project, collaboration, internship
            opportunity or just a conversation about technology,
            feel free to reach out.
          </p>

          <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=mohammedsohail2007@gmail.com"
  className="mail-button"
  target="_blank"
  rel="noopener noreferrer"
>
  Let's Talk↗
</a>
        </motion.div>
      </div>

      <motion.div
        className="contact-marquee"
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
        }}
      >
        <div className="contact-marquee-track">
          <span>LET'S BUILD</span>
          <span>LET'S BUILD</span>
          <span>LET'S BUILD</span>
          <span>LET'S BUILD</span>
        </div>
      </motion.div>

      <div className="contact-bottom">
        <span>MOHAMMED SOHAIL</span>

        <div className="contact-socials">
          <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=mohammedsohail2007@gmail.com"
  className="mail-button"
  target="_blank"
  rel="noopener noreferrer"
>
  Mail Me ↗
</a>
          <a href="https://github.com/mohammedsohail2006" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>

          <a href="https://www.linkedin.com/in/mohammed-sohail-bbb2362a3" target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>

          <a href="https://www.instagram.com/mohammedsohail2440/" target="_blank" rel="noreferrer">
            Instagram ↗
          </a>
          <a href="https://wa.me/919381574033" target="_blank" rel="noreferrer">
  WhatsApp ↗
</a>

        </div>
      </div>

      <div className="contact-footer">
        <span>© 2026 Mohammed Sohail</span>
        <span>BUILT WITH REACT • MOTION</span>
      </div>
    </section>
  );
}

export default Contact;