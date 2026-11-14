import { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "motion/react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";

function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 500,
    damping: 35,
    mass: 0.5,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 500,
    damping: 35,
    mass: 0.5,
  });

  useEffect(() => {
    const finePointer = window.matchMedia(
      "(pointer: fine)"
    );

    const updatePointer = () => {
      setEnabled(finePointer.matches);
    };

    updatePointer();

    finePointer.addEventListener(
      "change",
      updatePointer
    );

    return () => {
      finePointer.removeEventListener(
        "change",
        updatePointer
      );
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const handleMouseMove = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);

      const target = event.target;

      if (
        target.closest("a") ||
        target.closest("button")
      ) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, [enabled, mouseX, mouseY]);

  if (!enabled) {
    return null;
  }

  return (
    <>
      <motion.div
        className={`custom-cursor-ring ${
          hovering ? "cursor-hover" : ""
        }`}
        style={{
          x: smoothX,
          y: smoothY,
        }}
      />

      <motion.div
        className="custom-cursor-dot"
        style={{
          x: mouseX,
          y: mouseY,
        }}
      />
    </>
  );
}

function PageLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let value = 0;

    const interval = setInterval(() => {
      value += Math.floor(Math.random() * 8) + 3;

      if (value >= 100) {
        value = 100;
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 450);
      }

      setProgress(value);
    }, 70);

    return () => {
      clearInterval(interval);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="page-loader"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        pointerEvents: "none",
      }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="loader-top">
        <span>MOHAMMED SOHAIL</span>
        <span>PORTFOLIO / 2026</span>
      </div>

      <div className="loader-center">
        <motion.div
          className="loader-logo"
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          MS.
        </motion.div>

        <div className="loader-progress">
          <motion.div
            className="loader-progress-bar"
            animate={{
              width: `${progress}%`,
            }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
            }}
          />
        </div>

        <div className="loader-percentage">
          {String(progress).padStart(3, "0")}%
        </div>
      </div>

      <div className="loader-bottom">
        <span>DESIGN</span>
        <span>DEVELOPMENT</span>
        <span>EXPERIMENTATION</span>
      </div>
    </motion.div>
  );
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const percentage =
        documentHeight > 0
          ? (scrollTop / documentHeight) * 100
          : 0;

      setProgress(percentage);
    };

    updateProgress();

    window.addEventListener(
      "scroll",
      updateProgress,
      { passive: true }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        updateProgress
      );
    };
  }, []);

  return (
    <motion.div
      className="scroll-progress"
      style={{
        scaleX: progress / 100,
      }}
    />
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <PageLoader
            onComplete={() => setLoading(false)}
          />
        )}
      </AnimatePresence>

      <ScrollProgress />

      <CustomCursor />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
    </>
  );
}

export default App;