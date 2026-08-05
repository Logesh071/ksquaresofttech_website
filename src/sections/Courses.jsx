import courses from "../data/courses.json";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

function Courses() {
  const goToContact = () => {
    const section = document.getElementById("contact");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="courses"
      className="py-5 position-relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg,#f8fbff 0%,#eef4ff 45%,#ffffff 100%)",
      }}
    >
      {/* TOP WAVE */}

      <svg
        viewBox="0 0 1440 320"
        className="position-absolute top-0 start-0 w-100"
        style={{
          opacity: 0.15,
          zIndex: 0,
        }}
      >
        <path
          fill="#2563EB"
          d="M0,192L60,170.7C120,149,240,107,360,90.7C480,75,600,85,720,112C840,139,960,181,1080,186.7C1200,192,1320,160,1380,144L1440,128L1440,0L0,0Z"
        />
      </svg>

      {/* RIGHT CIRCLE */}

      <svg
        width="430"
        height="430"
        className="position-absolute"
        style={{
          top: "-120px",
          right: "-120px",
          opacity: ".08",
          zIndex: 0,
        }}
      >
        <circle cx="215" cy="215" r="180" fill="#2563EB" />
        <circle cx="215" cy="215" r="120" fill="#7C3AED" />
        <circle cx="215" cy="215" r="70" fill="#EC4899" />
      </svg>

      {/* LEFT BLOB */}

      <svg
        width="520"
        height="520"
        viewBox="0 0 600 600"
        className="position-absolute"
        style={{
          left: "-180px",
          bottom: "-180px",
          opacity: ".08",
          zIndex: 0,
        }}
      >
        <path
          fill="#2563EB"
          d="M430,300Q420,400,320,470Q220,540,130,450Q40,360,70,240Q100,120,220,80Q340,40,420,120Q500,200,430,300Z"
        />
      </svg>

      {/* SHAPES */}

      <svg
        width="120"
        height="120"
        className="position-absolute"
        style={{
          left: "8%",
          top: "20%",
          opacity: ".10",
          zIndex: 0,
        }}
      >
        <polygon
          points="60,0 120,60 60,120 0,60"
          fill="#7C3AED"
        />
      </svg>

      <svg
        width="90"
        height="90"
        className="position-absolute"
        style={{
          right: "10%",
          bottom: "18%",
          opacity: ".10",
          zIndex: 0,
        }}
      >
        <circle cx="45" cy="45" r="40" fill="#EC4899" />
      </svg>

      <div
        className="container position-relative"
        style={{ zIndex: 2 }}
      >
        {/* HEADING */}

        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div
            className="d-inline-flex align-items-center px-3 px-md-4 py-2 py-md-3 rounded-pill shadow"
            style={{
              background:
                "linear-gradient(135deg,#2563EB,#7C3AED,#EC4899)",
              color: "#fff",
              fontWeight: "700",
              letterSpacing: "1px",
              fontSize: "14px",
            }}
          >
            📚 OUR COURSES
          </div>

          <h2
            className="fw-bold mt-4"
            style={{
              minHeight: "80px",
              fontSize: "clamp(2rem,5vw,3.5rem)",
              color: "#0F172A",
              lineHeight: "1.25",
            }}
          >
            <span
              style={{
                background:
                  "linear-gradient(90deg,#2563EB,#7C3AED,#EC4899)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              <Typewriter
                words={[
                  "AI Enhanced Courses",
                  "Full Stack Development",
                  "Data Science & AI",
                  "Python Programming",
                  "Digital Marketing",
                  "UI / UX Design",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={45}
                delaySpeed={2000}
              />
            </span>
          </h2>

          <p
            className="mx-auto text-muted"
            style={{
              maxWidth: "720px",
              lineHeight: "1.8",
              fontSize: "clamp(14px,2vw,18px)",
            }}
          >
            Learn today's most in-demand technologies through
            industry-oriented training, live projects,
            internships, certification and placement
            assistance designed to help you build a
            successful IT career.
          </p>

          {/* STATS */}

          <div className="row justify-content-center mt-4 g-3">

            <div className="col-6 col-md-3">
              <div className="rounded-4 shadow-sm bg-white p-3 p-md-4 h-100">
                <h3 className="fw-bold text-primary mb-1">15+</h3>
                <small className="text-muted">
                  Professional Courses
                </small>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div className="rounded-4 shadow-sm bg-white p-3 p-md-4 h-100">
                <h3 className="fw-bold text-success mb-1">100+</h3>
                <small className="text-muted">
                  Students
                </small>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div className="rounded-4 shadow-sm bg-white p-3 p-md-4 h-100">
                <h3 className="fw-bold text-danger mb-1">25+</h3>
                <small className="text-muted">
                  Live Projects
                </small>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div className="rounded-4 shadow-sm bg-white p-3 p-md-4 h-100">
                <h3 className="fw-bold text-warning mb-1">100%</h3>
                <small className="text-muted">
                  Career Support
                </small>
              </div>
            </div>

          </div>
        </motion.div>

        {/* COURSE GRID */}

        <div className="row g-3">

          {courses.map((course, index) => (

            <motion.div
              key={course.id}
              className="col-12 col-md-6 col-xl-4"
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
            >
              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                transition={{ duration: 0.35 }}
                className="position-relative rounded-4 overflow-hidden h-100"
                style={{
                  background: "rgba(255,255,255,.82)",
                  backdropFilter: "blur(18px)",
                  border: "1px solid rgba(255,255,255,.45)",
                  boxShadow: "0 12px 30px rgba(37,99,235,.12)",
                }}
              >
                {/* Glow */}

                <div
                  className="position-absolute"
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg,#2563EB,#7C3AED,#EC4899)",
                    top: "-60px",
                    right: "-60px",
                    opacity: ".10",
                  }}
                ></div>

                {/* Badge */}

                <span
                  className="position-absolute text-white fw-bold px-3 py-1 rounded-pill shadow"
                  style={{
                    right: "12px",
                    top: "12px",
                    background:
                      "linear-gradient(135deg,#2563EB,#7C3AED)",
                    fontSize: "12px",
                    zIndex: 10,
                  }}
                >
                  ⭐ Popular
                </span>

                <div className="p-3 p-md-4 text-center">

                  {/* Icon */}

                  <motion.div
                    whileHover={{
                      rotate: 360,
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.8 }}
                    className="mx-auto rounded-circle d-flex align-items-center justify-content-center shadow mb-3"
                    style={{
                      width: "75px",
                      height: "75px",
                      background:
                        "linear-gradient(135deg,#2563EB,#7C3AED,#EC4899)",
                    }}
                  >
                    <i
                      className={`bi ${course.icon} text-white`}
                      style={{
                        fontSize: "32px",
                      }}
                    ></i>
                  </motion.div>

                  {/* Title */}

                  <h4
                    className="fw-bold mb-2"
                    style={{
                      color: "#0F172A",
                      fontSize: "1.2rem",
                    }}
                  >
                    {course.title}
                  </h4>

                  {/* Description */}

                  <p
                    className="text-muted mx-auto"
                    style={{
                      maxWidth: "280px",
                      minHeight: "60px",
                      lineHeight: "1.6",
                      fontSize: "14px",
                    }}
                  >
                    {course.description}
                  </p>

                  {/* Divider */}

                  <div
                    className="mx-auto my-3"
                    style={{
                      width: "60px",
                      height: "4px",
                      borderRadius: "50px",
                      background:
                        "linear-gradient(90deg,#2563EB,#7C3AED,#EC4899)",
                    }}
                  ></div>

                  {/* Details */}

                  <div className="row g-2 text-center">

                    <div className="col-4">
                      <div
                        className="rounded-4 p-2 h-100"
                        style={{
                          background: "#F8FAFC",
                        }}
                      >
                        <i className="bi bi-clock-fill text-primary fs-4"></i>

                        <h6
                          className="fw-bold mt-2 mb-1"
                          style={{ fontSize: "13px" }}
                        >
                          Duration
                        </h6>

                        <small style={{ fontSize: "11px" }}>
                          {course.duration}
                        </small>
                      </div>
                    </div>

                    <div className="col-4">
                      <div
                        className="rounded-4 p-2 h-100"
                        style={{
                          background: "#F8FAFC",
                        }}
                      >
                        <i className="bi bi-people-fill text-danger fs-4"></i>

                        <h6
                          className="fw-bold mt-2 mb-1"
                          style={{ fontSize: "13px" }}
                        >
                          Students
                        </h6>

                        <small style={{ fontSize: "11px" }}>
                          {course.students}
                        </small>
                      </div>
                    </div>

                    <div className="col-4">
                      <div
                        className="rounded-4 p-2 h-100"
                        style={{
                          background: "#F8FAFC",
                        }}
                      >
                        <i className="bi bi-award-fill text-success fs-4"></i>

                        <h6
                          className="fw-bold mt-2 mb-1"
                          style={{ fontSize: "13px" }}
                        >
                          Certificate
                        </h6>

                        <small style={{ fontSize: "11px" }}>
                          Included
                        </small>
                      </div>
                    </div>

                  </div>

                  {/* Feature Pills */}

                  <div className="d-flex flex-wrap justify-content-center gap-2 mt-3">

                    <span
                      className="px-2 py-1 rounded-pill text-white fw-semibold"
                      style={{
                        fontSize: "11px",
                        background:
                          "linear-gradient(135deg,#16A34A,#22C55E)",
                      }}
                    >
                      Live Projects
                    </span>

                    <span
                      className="px-2 py-1 rounded-pill text-dark fw-semibold"
                      style={{
                        fontSize: "11px",
                        background:
                          "linear-gradient(135deg,#FACC15,#F59E0B)",
                      }}
                    >
                      Internship
                    </span>

                    <span
                      className="px-2 py-1 rounded-pill text-white fw-semibold"
                      style={{
                        fontSize: "11px",
                        background:
                          "linear-gradient(135deg,#0EA5E9,#2563EB)",
                      }}
                    >
                      Placement
                    </span>

                  </div>

                  {/* CTA */}
                  <div className="mt-4">

                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.96 }}
                      onClick={goToContact}
                      className="btn text-white fw-bold rounded-pill w-100 py-2 shadow"
                      style={{
                        background:
                          "linear-gradient(135deg,#2563EB,#7C3AED,#EC4899)",
                        border: "none",
                        fontSize: "14px",
                        letterSpacing: ".5px",
                      }}
                    >
                      Enroll Now
                      <i className="bi bi-arrow-right-circle-fill ms-2"></i>
                    </motion.button>

                  </div>

                </div>
              </motion.div>

            </motion.div>

          ))}

        </div>

      </div>

      {/* Bottom Wave */}

      <svg
        viewBox="0 0 1440 320"
        className="w-100 mt-5"
        style={{
          display: "block",
          opacity: 0.15,
        }}
      >
        <defs>
          <linearGradient
            id="courseWave"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="50%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
        </defs>

        <path
          fill="url(#courseWave)"
          d="M0,224L80,208C160,192,320,160,480,149.3C640,139,800,149,960,176C1120,203,1280,245,1360,266.7L1440,288L1440,320L0,320Z"
        />
      </svg>

      {/* Right Blur */}

      <div
        className="position-absolute rounded-circle"
        style={{
          width: "180px",
          height: "180px",
          background:
            "radial-gradient(circle, rgba(37,99,235,.18), transparent 70%)",
          bottom: "40px",
          right: "-60px",
          filter: "blur(12px)",
          pointerEvents: "none",
        }}
      ></div>

      {/* Left Blur */}

      <div
        className="position-absolute rounded-circle"
        style={{
          width: "150px",
          height: "150px",
          background:
            "radial-gradient(circle, rgba(124,58,237,.16), transparent 70%)",
          top: "120px",
          left: "-60px",
          filter: "blur(14px)",
          pointerEvents: "none",
        }}
      ></div>

    </section>
  );
}

export default Courses;