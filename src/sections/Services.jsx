import { useState, useEffect, useRef } from "react";
import Typed from "typed.js";
import services from "../data/services.json";
import { motion } from "framer-motion";

function Services() {
  const [selectedService, setSelectedService] = useState(null);

  // ===========================
  // Typed.js
  // ===========================
  const typedRef = useRef(null);

  const serviceTitles = [
    "Comprehensive IT Solutions",
    "& Professional Training",
    "Web Development",
    "Mobile App Development",
    "Digital Marketing",
    "Data Science & AI",
  ];

  const colors = [
    "text-primary",
    "text-success",
    "text-danger",
    "text-warning",
    "text-info",
    "text-dark",
  ];

  const [currentColor, setCurrentColor] = useState(colors[0]);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: serviceTitles,
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 1800,
      loop: true,
      showCursor: true,
      cursorChar: "|",

      preStringTyped: (arrayPos) => {
        setCurrentColor(colors[arrayPos]);
      },
    });

    return () => {
      typed.destroy();
    };
  }, []);

  // ===========================
  // Animated Paragraph
  // ===========================
  const words = [
    "We",
    "provide",
    "innovative",
    "Software",
    "Development,",
    "Website",
    "Design,",
    "Mobile",
    "App",
    "Development,",
    "Digital",
    "Marketing,",
    "UI/UX",
    "Design,",
    "and",
    "Industry-Focused",
    "IT",
    "Training.",
  ];

  return (
    <>
      {/* ===========================
          Services Section
      =========================== */}
      <section id="services" className="py-5 fade-up">
        <div className="container">
          {/* ================= Premium Background ================= */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              overflow: "hidden",
              pointerEvents: "none",
              zIndex: 0,
            }}
          >
            {/* Mesh Gradient */}
            <svg
              width="100%"
              height="100%"
              style={{
                position: "absolute",
                inset: 0,
              }}
            >
              <defs>
                <radialGradient id="mesh1">
                  <stop offset="0%" stopColor="#2563EB" stopOpacity="0.28" />
                  <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
                </radialGradient>

                <radialGradient id="mesh2">
                  <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
                </radialGradient>

                <radialGradient id="mesh3">
                  <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.22" />
                  <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
                </radialGradient>
              </defs>

              <circle cx="15%" cy="20%" r="240" fill="url(#mesh1)" />
              <circle cx="85%" cy="18%" r="260" fill="url(#mesh2)" />
              <circle cx="50%" cy="80%" r="300" fill="url(#mesh3)" />
            </svg>

            {/* Large Ring */}
            <svg
              width="420"
              height="420"
              style={{
                position: "absolute",
                top: "-120px",
                right: "-120px",
                opacity: 0.08,
              }}
            >
              <circle
                cx="210"
                cy="210"
                r="170"
                fill="none"
                stroke="#2563EB"
                strokeWidth="2"
              />

              <circle
                cx="210"
                cy="210"
                r="120"
                fill="none"
                stroke="#7C3AED"
                strokeWidth="2"
                strokeDasharray="8 10"
              />
            </svg>

            {/* Bottom Ring */}
            <svg
              width="350"
              height="350"
              style={{
                position: "absolute",
                bottom: "-120px",
                left: "-120px",
                opacity: 0.08,
              }}
            >
              <circle
                cx="175"
                cy="175"
                r="130"
                fill="none"
                stroke="#06B6D4"
                strokeWidth="2"
              />

              <circle
                cx="175"
                cy="175"
                r="90"
                fill="none"
                stroke="#2563EB"
                strokeWidth="2"
                strokeDasharray="10 10"
              />
            </svg>

            {/* Hexagon Pattern */}
            <svg
              width="300"
              height="300"
              style={{
                position: "absolute",
                left: "6%",
                top: "30%",
                opacity: 0.06,
              }}
            >
              {[...Array(7)].map((_, row) =>
                [...Array(7)].map((_, col) => (
                  <polygon
                    key={`${row}-${col}`}
                    points={`
            ${20 + col * 35},${5 + row * 35}
            ${35 + col * 35},${15 + row * 35}
            ${35 + col * 35},${35 + row * 35}
            ${20 + col * 35},${45 + row * 35}
            ${5 + col * 35},${35 + row * 35}
            ${5 + col * 35},${15 + row * 35}
          `}
                    fill="none"
                    stroke="#2563EB"
                    strokeWidth="1"
                  />
                )),
              )}
            </svg>

            {/* Floating Dots */}
            <svg
              width="100%"
              height="100%"
              style={{
                position: "absolute",
                inset: 0,
                opacity: 0.08,
              }}
            >
              {[...Array(40)].map((_, i) => (
                <circle
                  key={i}
                  cx={`${Math.random() * 100}%`}
                  cy={`${Math.random() * 100}%`}
                  r="2"
                  fill="#2563EB"
                />
              ))}
            </svg>

            {/* Bottom Wave */}
            <svg
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
              style={{
                position: "absolute",
                bottom: 0,
                width: "100%",
                height: "140px",
                opacity: 0.08,
              }}
            >
              <path
                fill="#2563EB"
                d="M0,224L80,213C160,203,320,181,480,176C640,171,800,181,960,192C1120,203,1280,213,1360,219L1440,224V320H0Z"
              />
            </svg>
          </div>
          {/* Heading */}
          <div className="text-center mb-5">
            <div className="d-flex justify-content-center mb-4">
              <span className="btn btn-primary rounded-pill px-5 py-2 fw-bold text-uppercase fs-4">
                OUR SERVICES
              </span>
            </div>
            <h2 className={`fw-bold display-5 ${currentColor}`}>
              <span ref={typedRef}></span>
            </h2>

            <motion.p
              className="hero-description mx-auto"
              style={{ maxWidth: "720px" }}
            >
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  style={{
                    display: "inline-block",
                    marginRight: "6px",
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.p>
          </div>

          {/* Service Cards */}
          <div className="row g-4">
            {services.map((service, index) => (
              <motion.div
                className="col-md-6 col-lg-4"
                key={service.id}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
              >
                <motion.div
                  className="card h-100 border-0 shadow-sm service-card"
                  whileHover={{
                    y: -15,
                    scale: 1.03,
                    rotateX: 5,
                  }}
                  transition={{ type: "spring", stiffness: 250 }}
                >
                  <div className="card-body text-center p-4">
                    <motion.i
                      className={`bi ${service.icon} display-3 text-primary service-icon`}
                      whileHover={{
                        rotate: 360,
                        scale: 1.2,
                      }}
                      transition={{ duration: 0.7 }}
                    ></motion.i>

                    <motion.h4
                      className="fw-bold mt-4"
                      whileHover={{ color: "#0d6efd" }}
                    >
                      {service.title}
                    </motion.h4>

                    <p className="text-muted mt-3">{service.description}</p>

                    <motion.button
                      className="btn btn-primary mt-3 rounded-pill px-4"
                      whileHover={{
                        scale: 1.08,
                      }}
                      whileTap={{
                        scale: 0.95,
                      }}
                      data-bs-toggle="modal"
                      data-bs-target="#serviceModal"
                      onClick={() => setSelectedService(service)}
                    >
                      Explore Service →
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===========================
          Service Modal
      =========================== */}
      <div
        className="modal fade"
        id="serviceModal"
        tabIndex="-1"
        aria-labelledby="serviceModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content border-0 shadow">
            {/* Header */}
            <div className="modal-header">
              <h3 className="modal-title fw-bold" id="serviceModalLabel">
                {selectedService?.title}
              </h3>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            {/* Body */}
            <div className="modal-body text-center p-5">
              <i
                className={`bi ${selectedService?.icon} display-1 text-primary`}
              ></i>

              <h2 className="fw-bold mt-4">{selectedService?.title}</h2>

              <p className="text-muted fs-5 mt-3">
                {selectedService?.description}
              </p>

              <hr className="my-4" />

              <h4 className="fw-bold mb-4">Why Choose KSquare Softtech?</h4>

              <div className="row text-start">
                <div className="col-md-6">
                  <ul className="list-unstyled">
                    <li className="mb-3">✔ Experienced & Professional Team</li>
                    <li className="mb-3">✔ Modern Technologies</li>
                    <li className="mb-3">✔ High-Quality Development</li>
                    <li className="mb-3">✔ Responsive & Secure Solutions</li>
                  </ul>
                </div>

                <div className="col-md-6">
                  <ul className="list-unstyled">
                    <li className="mb-3">✔ On-Time Project Delivery</li>
                    <li className="mb-3">✔ Affordable Pricing</li>
                    <li className="mb-3">✔ Dedicated Technical Support</li>
                    <li className="mb-3">✔ 100% Customer Satisfaction</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="modal-footer justify-content-center">
              <button
                type="button"
                className="btn btn-outline-secondary px-4"
                data-bs-dismiss="modal"
              >
                Close
              </button>

              <a
                href="https://wa.me/918807754570?text=Hi%20KSquare%20Softtech,%20I%20am%20interested%20in%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary px-4"
              >
                Enquire Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
