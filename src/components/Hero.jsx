import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";

function MagneticButton({ children, href, primary = false }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, {
    stiffness: 250,
    damping: 18,
  });

  const smoothY = useSpring(y, {
    stiffness: 250,
    damping: 18,
  });

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const offsetX =
      event.clientX - (rect.left + rect.width / 2);

    const offsetY =
      event.clientY - (rect.top + rect.height / 2);

    x.set(offsetX * 0.18);
    y.set(offsetY * 0.18);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href={href}
      className={
        primary
          ? "primary-button magnetic-button"
          : "secondary-button magnetic-button"
      }
      style={{
        x: smoothX,
        y: smoothY,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <span>{children}</span>
    </motion.a>
  );
}

function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 80,
    damping: 25,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 80,
    damping: 25,
  });

  const photoX = useTransform(smoothX, [-600, 600], [-20, 20]);
  const photoY = useTransform(smoothY, [-600, 600], [-16, 16]);

  const ringX = useTransform(smoothX, [-600, 600], [12, -12]);
  const ringY = useTransform(smoothY, [-600, 600], [10, -10]);

  const glowX = useTransform(smoothX, [-600, 600], [-35, 35]);
  const glowY = useTransform(smoothY, [-600, 600], [-25, 25]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const x = event.clientX - (rect.left + rect.width / 2);
    const y = event.clientY - (rect.top + rect.height / 2);

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      className="hero"
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="hero-cursor-glow"
        style={{
          x: glowX,
          y: glowY,
        }}
      />

      <div className="hero-glow"></div>

      <div className="hero-content">
        <motion.p
          className="hero-intro"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          HELLO, I'M
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          Mohammed
          <br />
          <span>Sohail.</span>
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          I build digital experiences, intelligent applications
          and technology that solves real-world problems.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <MagneticButton
            href="#projects"
            primary
          >
            Explore My Work →
          </MagneticButton>

          <MagneticButton href="#contact">
            Contact Me
          </MagneticButton>
        </motion.div>
      </div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.2,
          delay: 0.3,
          ease: "easeOut",
        }}
      >
        <motion.div
          className="hero-photo-wrapper"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="hero-photo-ring"
            style={{
              x: ringX,
              y: ringY,
            }}
          />

          <motion.div
            className="hero-photo"
            style={{
              x: photoX,
              y: photoY,
            }}
          >
            <img
              src="/images/sohail.jpg"
              alt="Mohammed Sohail"
            />
          </motion.div>

          <motion.div
            className="hero-photo-glow"
            style={{
              x: photoX,
              y: photoY,
            }}
          />

          <div className="hero-photo-label">
            <span>MOHAMMED SOHAIL</span>
            <span>DEVELOPER • BUILDER</span>
          </div>

          <motion.div
            className="hero-orbit orbit-one"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.div
            className="hero-orbit orbit-two"
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>
      </motion.div>
      <motion.a
  href="#about"
  className="hero-scroll-indicator"
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 1.4 }}
>
  <span>SCROLL TO EXPLORE</span>

  <motion.span
    className="hero-scroll-arrow"
    animate={{ y: [0, 6, 0] }}
    transition={{
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    ↓
  </motion.span>
</motion.a>
    </section>
  );
}

export default Hero;