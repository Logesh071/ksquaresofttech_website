import { TypeAnimation } from "react-type-animation";

function Internship() {
  const technologies = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Bootstrap",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Python",
    "AI",
    "Data Science",
    "Git & GitHub",
  ];

  const benefits = [
    "Live Industry Projects",
    "Expert Developer Mentorship",
    "Internship Certificate",
    "Placement Assistance",
    "Resume Building",
    "Mock Interviews",
    "Career Guidance",
    "Real Client Experience",
  ];

  return (
    <section
      id="internship"
      className="py-5 position-relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg,#f8fbff 0%,#eef5ff 50%,#ffffff 100%)",
      }}
    >
      {/* ================= SVG TOP WAVE ================= */}

      <svg
        viewBox="0 0 1440 320"
        className="position-absolute top-0 start-0 w-100"
        style={{
          zIndex: 0,
          opacity: 0.18,
        }}
      >
        <path
          fill="#2563EB"
          d="M0,192L60,170.7C120,149,240,107,360,90.7C480,75,600,85,720,112C840,139,960,181,1080,186.7C1200,192,1320,160,1380,144L1440,128L1440,0L0,0Z"
        />
      </svg>

      {/* ================= SVG CIRCLE ================= */}

      <svg
        width="420"
        height="420"
        className="position-absolute"
        style={{
          top: "-120px",
          right: "-120px",
          opacity: ".10",
          zIndex: 0,
        }}
      >
        <circle cx="210" cy="210" r="180" fill="#2563EB" />
        <circle cx="210" cy="210" r="120" fill="#7C3AED" />
        <circle cx="210" cy="210" r="70" fill="#EC4899" />
      </svg>

      {/* ================= SVG BLOB ================= */}

      <svg
        className="position-absolute"
        width="500"
        height="500"
        viewBox="0 0 600 600"
        style={{
          bottom: "-200px",
          left: "-150px",
          opacity: ".08",
          zIndex: 0,
        }}
      >
        <path
          fill="#2563EB"
          d="M430,300Q420,400,320,470Q220,540,130,450Q40,360,70,240Q100,120,220,80Q340,40,420,120Q500,200,430,300Z"
        />
      </svg>

      <div
        className="container position-relative"
        style={{
          zIndex: 2,
        }}
      >
        {/* ================= HEADING ================= */}

        <div className="text-center mb-5">

          <span
            className="badge px-4 py-3 rounded-pill shadow"
            style={{
              background:
                "linear-gradient(135deg,#2563EB,#7C3AED,#EC4899)",
              fontSize: "15px",
              letterSpacing: "1px",
            }}
          >
            🚀 INTERNSHIP PROGRAM
          </span>

          <h2
            className="display-4 fw-bold mt-4 mb-4"
            style={{
              minHeight: "90px",
              color: "#0F172A",
            }}
          >
            <TypeAnimation
              sequence={[
                "Transform Your Skills Into a Successful Career",
                2000,
                "Learn. Build. Get Hired.",
                2000,
                "Industry Oriented Internship Program",
                2000,
                "Become an Industry Ready Developer",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </h2>

          <p
            className="mx-auto text-muted fs-5"
            style={{
              maxWidth: "760px",
              lineHeight: "1.9",
            }}
          >
            Learn from experienced developers, build live industry projects,
            strengthen your portfolio and gain practical experience that helps
            you confidently start your IT career.
          </p>
        </div>

        {/* ================= CONTENT ================= */}

        <div className="row align-items-center g-5">

          {/* ================= LEFT ================= */}

          <div className="col-lg-6">

            {/* Image Card */}

            <div
              className="position-relative rounded-5 overflow-hidden shadow-lg"
              style={{
                background: "#fff",
              }}
            >
              <img
                src="/src/assets/internship.jpg"
                alt="internship"
                className="img-fluid w-100"
              />

              {/* Floating Badge */}

              <div
                className="position-absolute"
                style={{
                  left: "25px",
                  top: "25px",
                }}
              >
                <div
                  className="px-4 py-2 rounded-pill text-white fw-bold shadow"
                  style={{
                    background:
                      "linear-gradient(135deg,#2563EB,#7C3AED)",
                  }}
                >
                  ⭐ Live Internship
                </div>
              </div>

              {/* Bottom Floating Card */}

              <div
                className="position-absolute"
                style={{
                  bottom: "25px",
                  left: "25px",
                  right: "25px",
                }}
              >
                <div
                  className="rounded-4 p-3"
                  style={{
                    backdropFilter: "blur(18px)",
                    background: "rgba(255,255,255,.85)",
                    border: "1px solid rgba(255,255,255,.4)",
                  }}
                >
                  <h5 className="fw-bold mb-2">
                    Industry Ready Training
                  </h5>

                  <small className="text-muted">
                    Learn with real projects, experienced mentors and practical
                    sessions.
                  </small>
                </div>
              </div>
            </div>

            {/* Title */}

            <h3
              className="fw-bold mt-5 mb-3"
              style={{
                minHeight: "55px",
                color: "#0F172A",
              }}
            >
              <TypeAnimation
                sequence={[
                  "Learn • Practice • Build",
                  1800,
                  "Real Projects • Real Skills",
                  1800,
                  "Build Portfolio & Resume",
                  1800,
                  "Become Industry Ready",
                  1800,
                ]}
                repeat={Infinity}
                speed={55}
              />
            </h3>

            <p className="text-muted fs-5">
              Master today's most in-demand technologies through practical
              learning. Work on live projects, improve your coding skills,
              collaborate with mentors and build an impressive portfolio that
              employers value.
            </p>

            {/* Statistics */}

            <div className="row g-4 my-4">

              <div className="col-4">
                <div
                  className="text-center rounded-4 p-4 shadow-sm h-100"
                  style={{
                    background: "#fff",
                  }}
                >
                  <h2 className="fw-bold text-primary">100+</h2>
                  <small className="text-muted">
                    Students
                  </small>
                </div>
              </div>

              <div className="col-4">
                <div
                  className="text-center rounded-4 p-4 shadow-sm h-100"
                  style={{
                    background: "#fff",
                  }}
                >
                  <h2 className="fw-bold text-primary">25+</h2>
                  <small className="text-muted">
                    Projects
                  </small>
                </div>
              </div>

              <div className="col-4">
                <div
                  className="text-center rounded-4 p-4 shadow-sm h-100"
                  style={{
                    background: "#fff",
                  }}
                >
                  <h2 className="fw-bold text-primary">
                    95%
                  </h2>
                  <small className="text-muted">
                    Support
                  </small>
                </div>
              </div>

            </div>

            {/* Technologies */}

            <h4 className="fw-bold text-primary mb-4">
              Technologies You'll Learn
            </h4>

            <div className="d-flex flex-wrap gap-3">

              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="px-4 py-2 rounded-pill text-white fw-semibold shadow"
                  style={{
                    background:
                      "linear-gradient(135deg,#2563EB,#7C3AED,#EC4899)",
                    transition: ".35s",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(-6px) scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(0)";
                  }}
                >
                  {tech}
                </div>
              ))}
            </div>            {/* Buttons */}

            <div className="d-flex flex-wrap gap-3 mt-5">

              <a
                href="#contact"
                className="btn btn-lg px-5 py-3 rounded-pill text-white fw-bold shadow"
                style={{
                  background:
                    "linear-gradient(135deg,#2563EB,#7C3AED)",
                  border: "none",
                  transition: ".35s",
                }}
              >
                <i className="bi bi-rocket-takeoff-fill me-2"></i>
                Apply Now
              </a>

              <a
                href="https://wa.me/918807754570"
                target="_blank"
                rel="noreferrer"
                className="btn btn-lg px-5 py-3 rounded-pill fw-bold shadow"
                style={{
                  background: "#fff",
                  color: "#2563EB",
                  border: "2px solid #2563EB",
                }}
              >
                <i className="bi bi-whatsapp me-2"></i>
                Enquire Now
              </a>

            </div>

          </div>

          {/* ================= RIGHT SIDE ================= */}

          <div className="col-lg-6">

            <div className="row g-4">

              {benefits.map((item, index) => (
                <div className="col-md-6" key={index}>

                  <div
                    className="h-100 rounded-5 p-4 position-relative overflow-hidden"
                    style={{
                      background: "rgba(255,255,255,.75)",
                      backdropFilter: "blur(20px)",
                      border: "1px solid rgba(255,255,255,.4)",
                      boxShadow: "0 15px 35px rgba(37,99,235,.12)",
                      transition: ".4s",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform =
                        "translateY(-10px)";
                      e.currentTarget.style.boxShadow =
                        "0 25px 45px rgba(37,99,235,.18)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform =
                        "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 15px 35px rgba(37,99,235,.12)";
                    }}
                  >
                    {/* Background Glow */}

                    <div
                      className="position-absolute"
                      style={{
                        width: "140px",
                        height: "140px",
                        borderRadius: "50%",
                        background:
                          "linear-gradient(135deg,#2563EB,#7C3AED)",
                        top: "-60px",
                        right: "-60px",
                        opacity: ".08",
                      }}
                    ></div>

                    {/* Icon */}

                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center shadow mb-4"
                      style={{
                        width: "75px",
                        height: "75px",
                        background:
                          "linear-gradient(135deg,#2563EB,#7C3AED,#EC4899)",
                      }}
                    >
                      <i
                        className="bi bi-check-circle-fill text-white"
                        style={{
                          fontSize: "34px",
                        }}
                      ></i>
                    </div>

                    <h5 className="fw-bold mb-3">
                      {item}
                    </h5>

                    <p
                      className="text-muted mb-0"
                      style={{
                        lineHeight: "1.8",
                      }}
                    >
                      Gain practical exposure through live client projects,
                      industry-standard development practices, expert guidance,
                      and hands-on implementation.
                    </p>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

      {/* ================= BOTTOM SVG WAVE ================= */}

      <svg
        viewBox="0 0 1440 320"
        className="w-100 mt-5"
        style={{
          display: "block",
          opacity: ".18",
        }}
      >
        <path
          fill="#2563EB"
          d="M0,224L80,208C160,192,320,160,480,144C640,128,800,128,960,154.7C1120,181,1280,235,1360,261.3L1440,288L1440,320L0,320Z"
        />
      </svg>

    </section>
  );
}

export default Internship;