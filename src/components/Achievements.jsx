import { motion } from "motion/react";

function Achievements() {
  const achievements = [
    {
      year: "2026",
      title: "Campus Ambassador for Techfest IIT Bombay",
      type: "Internship",
      description:
        " I have been selected as a College Ambassador for Techfest, IIT Bombay. In this role, I will mainly be contributing through web development, along with taking up relevant technical tasks and activities assigned by Techfest.",
    },
    {
      year: "2026",
      title: "1st Prize at Tech For Good Hackathon @ BVRIT",
      type: "Hackathon",
      description:
        " Won 1st prize at the Tech For Good Hackathon hosted at BVRIT where we Developed an AI-powered personalized learning platform that analyzes student performance, identifies learning gaps, and recommends tailored study resources and practice questions..",
    },
    {
      year: "2026",
      title: "VJIT Internal SIH",
      type: "HACKATHON",
      description:
        "As a Coordinator and Participant in the VJIT Internal Smart India Hackathon ecosystem and worked on technology-driven solutions.",
    },
    {
      year: "2026",
      title: "2nd Prize at VJIT IoT Project Expo",
      type: "PROJECT EXPO",
      description:
        "Presented an autonomous UAV surveillance project combining IoT, cloud technologies and intelligent monitoring.",
    },
    {
      year: "2025",
      title: "NRCM Hackathon",
      type: "HACKATHON",
      description:
        "Participated in a competitive hackathon environment focused on rapid prototyping and real-world problem solving.",
    },
    {
      year: "2026",
      title: "2nd Prize at CSI VJIT Paper Presentation",
      type: "RESEARCH",
      description:
        "Presented technical research and project work through the CSI student community.",
    },
    {
      year: "2026",
      title: "IEEE Student Activities",
      type: "LEADERSHIP",
      description:
        "Contributed to IEEE-related technical initiatives and explored building stronger technical communities within campus.",
    },
    {
      year: "2026",
      title: "Technology & Hackathon Projects",
      type: "BUILDING",
      description:
        "Built and experimented across AI, IoT, mobile development, web technologies and autonomous systems.",
    },
  ];

  return (
    <section
      className="achievements-section"
      id="achievements"
    >
      <div className="section-label">
        04 — JOURNEY
      </div>

      <div className="achievements-heading">
        <motion.h2
          initial={{
            opacity: 0,
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          More than
          <br />
          <span>just code.</span>
        </motion.h2>

        <motion.p
          initial={{
            opacity: 0,
            x: 50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.15,
          }}
        >
          Experiences, experiments and opportunities that
          shaped the way I build, learn and collaborate.
        </motion.p>
      </div>

      <div className="journey-timeline">
        <motion.div
          className="journey-progress"
          initial={{
            scaleY: 0,
          }}
          whileInView={{
            scaleY: 1,
          }}
          viewport={{
            once: true,
            amount: 0.1,
          }}
          transition={{
            duration: 2,
            ease: "easeOut",
          }}
        />

        {achievements.map((item, index) => (
          <motion.div
            className="achievement-item"
            key={item.title}
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
          >
            <div className="achievement-year">
              {item.year}
            </div>

            <div className="achievement-line">
              <motion.span
                initial={{
                  scale: 0,
                }}
                whileInView={{
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1 + 0.2,
                }}
              />
            </div>

            <div className="achievement-content">
              <div className="achievement-meta">
                {item.type}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>

            <div className="achievement-arrow">
              ↗
            </div>
          </motion.div>
        ))}
      </div>

      <div className="journey-end">
        <span>2026 — NOW</span>
        <span>THE JOURNEY CONTINUES →</span>
      </div>
    </section>
  );
}

export default Achievements;