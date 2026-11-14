import { motion } from "motion/react";

function Skills() {
  const skills = [
    {
      name: "React",
      type: "FRONTEND",
      level: "BUILD",
    },
    {
      name: "JavaScript",
      type: "LANGUAGE",
      level: "BUILD",
    },
    {
      name: "Flutter",
      type: "MOBILE",
      level: "BUILD",
    },
    {
      name: "Dart",
      type: "LANGUAGE",
      level: "BUILD",
    },
    {
      name: "Python",
      type: "LANGUAGE",
      level: "BUILD",
    },
    {
      name: "Java",
      type: "LANGUAGE",
      level: "BUILD",
    },
    {
      name: "C",
      type: "LANGUAGE",
      level: "BUILD",
    },
    {
      name: "Firebase",
      type: "BACKEND",
      level: "BUILD",
    },
    {
      name: "AI / ML",
      type: "INTELLIGENCE",
      level: "EXPLORE",
    },
    {
      name: "IoT",
      type: "HARDWARE",
      level: "BUILD",
    },
    {
      name: "Git / GitHub",
      type: "WORKFLOW",
      level: "BUILD",
    },
    {
      name: "Vercel & Netlify",
      type: "Deployment",
      level: "Deploy",
    },
    {
      name: "Supabase",
      type: "Database",
      level: "BUILD",
    },
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="section-label">
        02 — SKILLS
      </div>

      <div className="skills-heading">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>
            Tools I use
            <br />
            <span>to build ideas.</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          A growing technology stack built through projects,
          hackathons, experiments and real-world development.
        </motion.p>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            className="skill-card"
            key={skill.name}
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
              amount: 0.2,
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.04,
            }}
            whileHover={{
              y: -6,
            }}
          >
            <span className="skill-number">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="skill-card-content">
              <span className="skill-type">
                {skill.type}
              </span>

              <h3>{skill.name}</h3>

              <div className="skill-status">
                <span className="skill-status-dot"></span>
                {skill.level}
              </div>
            </div>

            <span className="skill-arrow">↗</span>

            <div className="skill-hover-line"></div>
          </motion.div>
        ))}
      </div>

      <div className="skills-footer">
        <span>12 TECHNOLOGIES</span>
        <span>AND STILL LEARNING...</span>
      </div>
    </section>
  );
}

export default Skills;