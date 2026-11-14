import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";

function ProjectCard({ project, index }) {
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);

  const smoothX = useSpring(mouseX, {
    stiffness: 120,
    damping: 25,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 120,
    damping: 25,
  });

  const rotateX = useSpring(
    useTransform(mouseY, [0, 100], [5, -5]),
    { stiffness: 150, damping: 20 }
  );

  const rotateY = useSpring(
    useTransform(mouseX, [0, 100], [-5, 5]),
    { stiffness: 150, damping: 20 }
  );

  const visualX = useTransform(mouseX, [0, 100], [-8, 8]);
  const visualY = useTransform(mouseY, [0, 100], [-8, 8]);

  const spotlightLeft = useTransform(
    smoothX,
    (value) => `${value}%`
  );

  const spotlightTop = useTransform(
    smoothY,
    (value) => `${value}%`
  );

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    mouseX.set(
      ((event.clientX - rect.left) / rect.width) * 100
    );

    mouseY.set(
      ((event.clientY - rect.top) / rect.height) * 100
    );
  };

  const handleMouseLeave = () => {
    mouseX.set(50);
    mouseY.set(50);
  };

  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
      }}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="project-spotlight"
        style={{
          left: spotlightLeft,
          top: spotlightTop,
        }}
      />

      <div className="project-top">
        <div className="project-heading-meta">
          <span className="project-number">
            {project.number}
          </span>

          <span className="project-status">
            {project.status}
          </span>
        </div>

        <span className="project-category">
          {project.category}
        </span>
      </div>

      <div className="project-main">
        <motion.div
          className={`project-visual project-${index + 1}`}
          style={{
            x: visualX,
            y: visualY,
          }}
        >
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.title} project preview`}
              className="project-image"
              loading="lazy"
              onError={(event) => {
                console.error(
                  `Image failed to load for ${project.title}:`,
                  event.currentTarget.src
                );
                event.currentTarget.style.display = "none";
              }}
            />
          ) : (
            <>
              <div className="project-grid" />
              <div className="project-orbit" />
              <div className="project-scan-line" />

              <span className="project-index">
                {project.number}
              </span>

              <span className="project-symbol">↗</span>

              <span className="project-visual-label">
                SYSTEM / {project.shortName}
              </span>
            </>
          )}
        </motion.div>

        <div className="project-info">
          <span className="project-eyebrow">
            PROJECT {project.number}
          </span>

          <h3>{project.title}</h3>

          <p>{project.description}</p>

          <div className="project-tech">
            {project.tech.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <a
            href={project.caseStudyUrl || "#contact"}
            className="project-case-link"
            target={
              project.caseStudyUrl ? "_blank" : undefined
            }
            rel={
              project.caseStudyUrl
                ? "noopener noreferrer"
                : undefined
            }
          >
            <span>
              {project.caseStudyUrl
                ? "VIEW PROJECT"
                : "CASE STUDY COMING SOON"}
            </span>
            <strong>↗</strong>
          </a>
        </div>
      </div>
    </motion.article>
  );
}

function Projects() {
  const projects = [
    {
      number: "01",
      shortName: "SKYNETRA",
      title: "SkyNetra",
      category: "IoT • UAV • AI",
      status: "ACTIVE",
      image: "/images/skynetra.jpg",
      caseStudyUrl: "https://drive.google.com/drive/folders/1UtxsduV4q95iKs_3RROrSPKBg0O98ZNf",  
      description:
        "Cloud-based autonomous UAV surveillance system combining IoT, computer vision and autonomous flight for intelligent monitoring.",
      tech: ["ESP32", "IoT", "AI / ML", "UAV"],
    },
    {
      number: "02",
      shortName: "ATTENDEASE",
      title: "AttendEase",
      category: "MOBILE • FIREBASE",
      status: "BUILT",
      image: "/images/attendease.jpg",
      caseStudyUrl: "https://github.com/mohammedsohail2006/it-attendance-app",
      description:
        "A role-based attendance management application designed for students, CRs and faculty with Firebase-powered data management.",
      tech: ["Flutter", "Dart", "Firebase"],
    },
    {
      number: "03",
      shortName: "SHILPSETU",
      title: "ShilpSetu",
      category: "AI • MOBILE",
      status: "PROTOTYPE",
      image: "/images/shilpsetu.jpg",
      caseStudyUrl: "https://github.com/mohammedsohail2006/shilpsetu",
      description:
        "An AI-assisted digital platform designed to help artisans showcase, catalogue and connect their traditional crafts with wider markets.",
      tech: ["Flutter", "Firebase", "AI"],
    },
    {
      number: "04",
      shortName: "ANVESH",
      title: "Anvesh",
      category: "TRAVEL • AI",
      status: "PROTOTYPE",
      image: "",
      caseStudyUrl: "",
      description:
        "A smart tourism platform connecting travelers with local experiences through personalized recommendations and dedicated user roles.",
      tech: ["Flutter", "Firebase", "GenAI"],
    },
    {
      number: "05",
      shortName: "GREENBIN",
      title: "GreenBin",
      category: "SMART",
      status: "BUILT",
      image: "/images/greenbin.jpg",
      caseStudyUrl: "https://github.com/mohammedsohail2006/greenbin",
      description:
        "A technology-driven concept focused on smarter waste management and encouraging sustainable everyday practices.",
      tech: ["Mobile", "Firebase"],
    },
    {
      number: "06",
      shortName: "CAMPUSTIX",
      title: "MyCampusTix",
      category: "WEB • EVENTS",
      status: "BUILT",
      image: "/images/campus.jpg",
      caseStudyUrl: "https://github.com/mohammedsohail2006/campus-ticket-hub",
      description:
        "A campus-focused event and ticketing platform designed to simplify event discovery, registration and participation.",
      tech: ["Web", "JavaScript", "Firebase"],
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="section-label">
        03 — SELECTED WORK
      </div>

      <div className="projects-heading">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>
            Things I've
            <br />
            <span>built.</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          A selection of projects where technology,
          experimentation and real-world problem solving
          come together.
        </motion.p>
      </div>

      <div className="projects-list">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;