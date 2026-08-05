import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

function About() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showVideo ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showVideo]);

  return (
    <section
      id="about"
      className="about-section position-relative"
      style={{
        overflow: "hidden",
        background:
          "linear-gradient(180deg,#ffffff 0%,#f8fbff 45%,#eef5ff 100%)",
      }}
    >
      {/* ================= Premium SVG Background ================= */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1920 1080"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <defs>
            <linearGradient
              id="blob1"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#2563EB" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.08" />
            </linearGradient>

            <linearGradient
              id="blob2"
              x1="0%"
              y1="100%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#2563EB" stopOpacity="0.05" />
            </linearGradient>

            <filter id="blur">
              <feGaussianBlur stdDeviation="60" />
            </filter>
          </defs>

          {/* Top Right */}
          <circle
            cx="1650"
            cy="180"
            r="260"
            fill="url(#blob1)"
            filter="url(#blur)"
          />

          {/* Bottom Left */}
          <circle
            cx="180"
            cy="900"
            r="250"
            fill="url(#blob2)"
            filter="url(#blur)"
          />

          {/* Waves */}
          <path
            d="M0 830 C300 720 650 960 980 840 S1600 640 1920 860"
            stroke="#2563EB"
            strokeWidth="3"
            strokeOpacity="0.12"
            fill="none"
          />

          <path
            d="M0 930 C520 760 980 1040 1920 780"
            stroke="#7C3AED"
            strokeWidth="2"
            strokeOpacity="0.10"
            fill="none"
          />

          {/* Grid */}
          {Array.from({ length: 22 }).map((_, i) => (
            <line
              key={"v" + i}
              x1={i * 90}
              y1="0"
              x2={i * 90}
              y2="1080"
              stroke="#2563EB"
              strokeOpacity="0.04"
            />
          ))}

          {Array.from({ length: 15 }).map((_, i) => (
            <line
              key={"h" + i}
              x1="0"
              y1={i * 90}
              x2="1920"
              y2={i * 90}
              stroke="#2563EB"
              strokeOpacity="0.04"
            />
          ))}

          {/* Dots */}
          {Array.from({ length: 70 }).map((_, i) => (
            <circle
              key={i}
              cx={(i * 53) % 1920}
              cy={(i * 91) % 1080}
              r="2"
              fill="#3B82F6"
              opacity="0.18"
            />
          ))}
        </svg>
      </div>

      {/* ================= Content ================= */}

      <div
        className="container position-relative"
        style={{ zIndex: 2 }}
      >
        {/* Heading */}

        <div className="text-center mb-5">
          <span className="badge bg-primary about-badge">
            ABOUT KSQUARE SOFTTECH
          </span>

          <h2
            className="fw-bold mt-3 display-5 about-title text-primary"
            style={{ minHeight: "70px" }}
          >
            <Typewriter
              words={[
                "Empowering Future IT Professionals",
                "Building Future Developers",
                "Transforming Students into Professionals",
                "Learn • Build • Innovate • Grow",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={40}
              delaySpeed={1800}
            />
          </h2>

          <p className="about-text">
            <span className="gradient-text">KSquare SoftTech</span> is a
            leading IT Training, Software Development and Digital Solutions
            company committed to transforming students into industry-ready
            professionals.
          </p>
        </div>

        <div className="row align-items-center">

          {/* Left Image */}

          <div className="col-lg-6 mb-4">
            <div
              className="position-relative rounded-4 overflow-hidden shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900"
                alt="KSquare SoftTech"
                className="img-fluid"
              />

              {/* Glass Overlay */}

              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top,rgba(37,99,235,.55),transparent)",
                }}
              ></div>

              {/* Play Button */}

              <button
                className="play-btn"
                onClick={() => setShowVideo(true)}
              >
                <i className="bi bi-play-fill"></i>
              </button>
            </div>
          </div>          {/* ================= Right Content ================= */}

          <div className="col-lg-6">

            <h3
              className="about-heading mb-3 text-warning"
              style={{ minHeight: "55px" }}
            >
              <Typewriter
                words={["Learn", "Build", "Innovate", "Grow"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={90}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h3>

            <p className="text-muted about-desc">
              We provide industry-ready training in
              <span className="highlight"> Full Stack Development</span>,
              <span className="highlight"> Data Science</span>,
              <span className="highlight"> Artificial Intelligence</span>,
              <span className="highlight"> Python</span>,
              <span className="highlight"> Digital Marketing</span>,
              <span className="highlight"> UI/UX Design</span>,
              <span className="highlight"> Mobile App Development</span>, and
              <span className="highlight"> Software Development</span>. Our
              goal is to bridge the gap between
              <span className="highlight-dark"> education</span> and
              <span className="highlight-dark"> industry</span> by offering
              <span className="highlight"> hands-on training</span> with
              <span className="highlight"> live projects</span>.
            </p>

            {/* ================= Mission & Vision ================= */}

            <div className="row mt-4">

              <div className="col-md-6 mb-3">
                <div
                  className="card border-0 h-100 shadow-lg"
                  style={{
                    borderRadius: "20px",
                    backdropFilter: "blur(10px)",
                    background: "rgba(255,255,255,.75)",
                  }}
                >
                  <div className="card-body p-4">

                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center mb-3"
                      style={{
                        width: "60px",
                        height: "60px",
                        background:
                          "linear-gradient(135deg,#2563EB,#4F46E5)",
                        color: "#fff",
                      }}
                    >
                      <i className="bi bi-bullseye fs-3"></i>
                    </div>

                    <h5 className="fw-bold text-primary">
                      Mission
                    </h5>

                    <p className="text-muted mb-0">
                      Our mission is to empower students and professionals
                      through industry-focused IT training, innovative
                      software solutions and hands-on learning experiences
                      that build confidence, technical expertise and
                      successful careers.
                    </p>

                  </div>
                </div>
              </div>

              <div className="col-md-6 mb-3">
                <div
                  className="card border-0 h-100 shadow-lg"
                  style={{
                    borderRadius: "20px",
                    backdropFilter: "blur(10px)",
                    background: "rgba(255,255,255,.75)",
                  }}
                >
                  <div className="card-body p-4">

                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center mb-3"
                      style={{
                        width: "60px",
                        height: "60px",
                        background:
                          "linear-gradient(135deg,#10B981,#06B6D4)",
                        color: "#fff",
                      }}
                    >
                      <i className="bi bi-eye fs-3"></i>
                    </div>

                    <h5 className="fw-bold text-success">
                      Vision
                    </h5>

                    <p className="text-muted mb-0">
                      To become a globally trusted technology company that
                      transforms lives through innovative IT education,
                      software development and digital solutions while
                      creating highly skilled professionals.
                    </p>

                  </div>
                </div>
              </div>

            </div>

            {/* ================= Features ================= */}

            <div className="row mt-4">

              {[
                "Live Projects",
                "Expert Trainers",
                "Internship Programs",
                "Placement Assistance",
                "Industry-Oriented Curriculum",
                "Career Guidance & Mentorship",
              ].map((item, index) => (
                <div className="col-sm-6 mb-3" key={index}>
                  <div
                    className="d-flex align-items-center p-3 shadow-sm"
                    style={{
                      borderRadius: "16px",
                      background: "rgba(255,255,255,.75)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    <div
                      className="me-3 d-flex align-items-center justify-content-center"
                      style={{
                        width: "42px",
                        height: "42px",
                        borderRadius: "12px",
                        background:
                          "linear-gradient(135deg,#2563EB,#7C3AED)",
                        color: "#fff",
                      }}
                    >
                      <i className="bi bi-check-lg"></i>
                    </div>

                    <span className="fw-semibold">
                      {item}
                    </span>
                  </div>
                </div>
              ))}

            </div>            {/* ================= Statistics ================= */}

            <div className="row mt-5 text-center">

              <div className="col-4">
                <div
                  className="p-3 rounded-4 shadow-sm"
                  style={{
                    background: "rgba(255,255,255,.75)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <h2
                    className="fw-bold mb-1"
                    style={{
                      background:
                        "linear-gradient(135deg,#2563EB,#7C3AED)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    500+
                  </h2>
                  <small className="text-muted fw-semibold">
                    Students
                  </small>
                </div>
              </div>

              <div className="col-4">
                <div
                  className="p-3 rounded-4 shadow-sm"
                  style={{
                    background: "rgba(255,255,255,.75)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <h2
                    className="fw-bold mb-1"
                    style={{
                      background:
                        "linear-gradient(135deg,#2563EB,#7C3AED)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    20+
                  </h2>
                  <small className="text-muted fw-semibold">
                    Courses
                  </small>
                </div>
              </div>

              <div className="col-4">
                <div
                  className="p-3 rounded-4 shadow-sm"
                  style={{
                    background: "rgba(255,255,255,.75)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <h2
                    className="fw-bold mb-1"
                    style={{
                      background:
                        "linear-gradient(135deg,#2563EB,#7C3AED)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    100%
                  </h2>
                  <small className="text-muted fw-semibold">
                    Support
                  </small>
                </div>
              </div>

            </div>

            {/* ================= Buttons ================= */}

            <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3 mt-5">

              <button
                className="btn btn-lg px-5 py-3"
                style={{
                  borderRadius: "50px",
                  border: "none",
                  background:
                    "linear-gradient(135deg,#2563EB,#7C3AED)",
                  color: "#fff",
                  fontWeight: "600",
                  boxShadow: "0 15px 35px rgba(37,99,235,.25)",
                }}
                onClick={() => {
                  document
                    .getElementById("courses")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    });
                }}
              >
                Learn More
              </button>

              <button
                className="btn btn-outline-primary btn-lg px-5 py-3"
                style={{
                  borderRadius: "50px",
                  fontWeight: "600",
                }}
                onClick={() => setShowVideo(true)}
              >
                <i className="bi bi-play-circle me-2"></i>
                Watch Video
              </button>

            </div>

          </div>
        </div>
      </div>

      {/* ================= Video Modal ================= */}

      {showVideo && (
        <div
          className="modal fade show"
          style={{
            display: "block",
            background: "rgba(0,0,0,.85)",
            backdropFilter: "blur(8px)",
          }}
        >
          <div className="modal-dialog modal-xl modal-dialog-centered">
            <div
              className="modal-content border-0"
              style={{
                borderRadius: "20px",
                overflow: "hidden",
              }}
            >
              <div className="modal-header border-0">

                <h5 className="modal-title fw-bold">
                  KSquare SoftTech
                </h5>

                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowVideo(false)}
                ></button>

              </div>

              <div className="modal-body p-2">

                <div
                  className="ratio ratio-16x9 mx-auto"
                  style={{
                    width: "850px",
                    maxWidth: "100%",
                  }}
                >
                  <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                    title="KSquare SoftTech"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                </div>

              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
}

export default About;