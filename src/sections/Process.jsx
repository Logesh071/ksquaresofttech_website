import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import {
  FaClipboardCheck,
  FaLightbulb,
  FaLaptopCode,
  FaRocket,
} from "react-icons/fa";


function Process() {
  const processTexts = [
    "Understanding Your Requirements",
    "Planning the Right Solution",
    "Building with Modern Technologies",
    "Live Project Development",
    "Industry-Focused IT Training",
    "Real-Time Internship Experience",
    "Quality Testing & Deployment",
    "Continuous Support & Maintenance",
    "Learn • Build • Grow • Succeed",
  ];

  const process = [
    {
      id: "01",
      icon: <FaClipboardCheck size={42} />,
      title: "Requirement Analysis",
      description:
        "We understand your business goals, project requirements, or learning objectives before starting every project or training program.",
    },
    {
      id: "02",
      icon: <FaLightbulb size={42} />,
      title: "Planning & Strategy",
      description:
        "Our experts prepare the right roadmap, technology stack, project timeline, and execution strategy for successful delivery.",
    },
    {
      id: "03",
      icon: <FaLaptopCode size={42} />,
      title: "Development & Training",
      description:
        "We develop high-quality software solutions and provide practical IT training with live projects and internship experience.",
    },
    {
      id: "04",
      icon: <FaRocket size={42} />,
      title: "Testing & Delivery",
      description:
        "Every project is thoroughly tested before deployment, followed by continuous support, maintenance, and guidance.",
    },
  ];

  return (
    <section
      id="process"
      className="process-section position-relative overflow-hidden"
    >
      {/* ========= Background Elements ========= */}

      <div className="process-bg-grid"></div>

      <motion.div
        className="blob blob1"
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="blob blob2"
        animate={{
          x: [0, -30, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="blob blob3"
        animate={{
          x: [0, 20, 0],
          y: [0, 35, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating Circles */}

      <div className="circle circle1"></div>
      <div className="circle circle2"></div>
      <div className="circle circle3"></div>

      <div className="container position-relative">
        {/* Heading */}

        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">OUR PROCESS</span>

          <h2 className="process-title mt-3">
            How
            <span> KSquare SoftTech </span>
            Works
          </h2>

          <h3 className="typing-text mt-3">
            <Typewriter
              words={processTexts}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1800}
            />
          </h3>

          <p className="process-description">
            We follow a structured and industry-focused workflow to deliver
            innovative software solutions, practical IT training, real-time
            internships, and successful project outcomes for students,
            professionals, and businesses.
          </p>
        </motion.div>

        {/* ========= Cards ========= */}

        <div className="row g-4">
          {" "}
          {process.map((step, index) => (
            <div className="col-xl-3 col-lg-6 col-md-6" key={step.id}>
              <motion.div
                className="process-card h-100 position-relative"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                }}
              >
                {/* Step Number */}

                <div className="step-number">{step.id}</div>

                {/* Glow Border */}

                <div className="card-glow"></div>

                {/* Icon */}

                <div className="icon-wrapper">{step.icon}</div>

                {/* Title */}

                <h4 className="card-title">{step.title}</h4>

                {/* Description */}

                <p className="card-description">{step.description}</p>

                {/* Bottom Line */}

                <div className="bottom-line"></div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* ========================= CTA ========================= */}

        <motion.div
          className="cta-box text-center mt-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="fw-bold mb-3">Ready to Start Your IT Journey?</h3>

          <p className="text-muted mb-4">
            Join KSquare SoftTech and gain real-world skills through expert
            mentorship, live projects, internships, and placement-focused
            training.
          </p>

          <motion.a
            href="#contact"
            className="btn process-btn"
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            Get Started →
          </motion.a>
        </motion.div>
      </div>

      {/* Floating Decorative Dots */}

      <div className="dot dot1"></div>
      <div className="dot dot2"></div>
      <div className="dot dot3"></div>

      {/* Animated Wave */}

      <svg
        className="process-wave"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#0d6efd10"
          d="
          M0,224
          L60,213.3
          C120,203,240,181,360,176
          C480,171,600,181,720,192
          C840,203,960,213,1080,197.3
          C1200,181,1320,139,1380,117.3
          L1440,96
          L1440,320
          L0,320
          Z"
        />
      </svg>
    </section>
  );
}

export default Process;
