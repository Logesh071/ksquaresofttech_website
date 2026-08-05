import { motion } from "framer-motion";
import team from "../data/team.json";

function Team() {
  return (
    <section
      id="team"
      className="py-5 position-relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg,#F8FBFF,#FFFFFF)",
      }}
    >
      {/* ================= Background ================= */}

      <div
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1600 900"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="teamGradient1">
              <stop offset="0%" stopColor="#2563EB" stopOpacity=".12" />
              <stop offset="100%" stopColor="#7C3AED" stopOpacity=".03" />
            </linearGradient>

            <linearGradient id="teamGradient2">
              <stop offset="0%" stopColor="#06B6D4" stopOpacity=".10" />
              <stop offset="100%" stopColor="#2563EB" stopOpacity=".03" />
            </linearGradient>
          </defs>

          <circle
            cx="1450"
            cy="120"
            r="250"
            fill="url(#teamGradient1)"
          />

          <circle
            cx="180"
            cy="760"
            r="280"
            fill="url(#teamGradient2)"
          />

          <circle
            cx="1500"
            cy="730"
            r="180"
            fill="#7C3AED"
            opacity=".05"
          />
        </svg>
      </div>

      <div
        className="container position-relative"
        style={{ zIndex: 2 }}
      >
        {/* ================= Heading ================= */}

        <div className="text-center mb-5">

          <span
            className="badge rounded-pill px-4 py-2 mb-3"
            style={{
              background:
                "linear-gradient(135deg,#2563EB,#7C3AED)",
              color: "#fff",
              letterSpacing: "1px",
            }}
          >
            OUR TEAM
          </span>

          <h2
            className="display-5 fw-bold mb-3"
            style={{
              color: "#0F172A",
            }}
          >
            Meet Our Experts
          </h2>

          <p
            className="mx-auto"
            style={{
              maxWidth: "650px",
              color: "#64748B",
            }}
          >
            Passionate professionals committed to delivering
            innovative solutions and quality services.
          </p>

        </div>

        {/* ================= Cards ================= */}

        <div className="row g-4 justify-content-center">

          {team.map((member, index) => (

            <div
              key={member.id}
              className="col-xl-4 col-lg-4 col-md-6 d-flex justify-content-center"
            >

              <motion.div
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: .5,
                  delay: index * .15,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                viewport={{
                  once: true,
                }}
              >

                <div
                  className="card border-0 text-center h-100"
                  style={{
                    width: "300px",
                    borderRadius: "22px",
                    padding: "20px",
                    background: "rgba(255,255,255,.90)",
                    backdropFilter: "blur(18px)",
                    boxShadow:
                      "0 15px 35px rgba(15,23,42,.08)",
                  }}
                >

                  {/* Profile Image */}

                  <div className="mb-3">

                    <img
                      src={member.image}
                      alt={member.name}
                      style={{
                        width: "90px",
                        height: "90px",
                        objectFit: "cover",
                        borderRadius: "50%",
                        border: "4px solid #fff",
                        boxShadow:
                          "0 8px 20px rgba(37,99,235,.25)",
                      }}
                    />

                  </div>

                  {/* Name */}

                  <h5
                    className="fw-bold mb-2"
                    style={{
                      color: "#0F172A",
                    }}
                  >
                    {member.name}
                  </h5>

                  {/* Role */}

                  <div
                    className="d-inline-block mx-auto px-3 py-1 rounded-pill mb-3"
                    style={{
                      background: "rgba(37,99,235,.10)",
                      color: "#2563EB",
                      fontSize: "12px",
                      fontWeight: "600",
                    }}
                  >
                    {member.role}
                  </div>

                  {/* Description */}

                  <p
                    style={{
                      color: "#64748B",
                      fontSize: "13px",
                      lineHeight: "1.6",
                      minHeight: "55px",
                    }}
                  >
                    {member.description}
                  </p>                  {/* Social Icons */}

                  <div className="d-flex justify-content-center gap-2 mt-3">

                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.15, y: -3 }}
                      className="d-flex align-items-center justify-content-center"
                      style={{
                        width: "38px",
                        height: "38px",
                        borderRadius: "50%",
                        background: "#EFF6FF",
                        color: "#2563EB",
                        textDecoration: "none",
                        transition: ".3s",
                      }}
                    >
                      <i className="bi bi-linkedin"></i>
                    </motion.a>

                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.15, y: -3 }}
                      className="d-flex align-items-center justify-content-center"
                      style={{
                        width: "38px",
                        height: "38px",
                        borderRadius: "50%",
                        background: "#F5F3FF",
                        color: "#7C3AED",
                        textDecoration: "none",
                        transition: ".3s",
                      }}
                    >
                      <i className="bi bi-github"></i>
                    </motion.a>

                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.15, y: -3 }}
                      className="d-flex align-items-center justify-content-center"
                      style={{
                        width: "38px",
                        height: "38px",
                        borderRadius: "50%",
                        background: "#ECFEFF",
                        color: "#0891B2",
                        textDecoration: "none",
                        transition: ".3s",
                      }}
                    >
                      <i className="bi bi-envelope-fill"></i>
                    </motion.a>

                  </div>

                </div>

              </motion.div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Team;