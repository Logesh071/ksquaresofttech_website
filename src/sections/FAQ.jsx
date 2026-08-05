import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPlus,
  FaTimes,
  FaQuestionCircle,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaHeadset,
  FaLaptopCode,
  FaCertificate,
  FaBriefcase,
  FaVideo,
  FaCode,
  FaProjectDiagram,
  FaRocket,
} from "react-icons/fa";

import faqData from "../data/faq.json";

function FAQ() {
  const [active, setActive] = useState(1);

  const toggleFAQ = (id) => {
    setActive(active === id ? null : id);
  };

  return (
    <section
      id="faq"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "100px 0",
        background: "linear-gradient(180deg,#f8fbff 0%,#eef4ff 100%)",
        fontFamily: "'Poppins',sans-serif",
      }}
    >
      {/* ================= SVG Background ================= */}

      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          overflow: "hidden",
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="faqGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#2563EB" stopOpacity="0.12" />

              <stop offset="50%" stopColor="#7C3AED" stopOpacity="0.12" />

              <stop offset="100%" stopColor="#EC4899" stopOpacity="0.12" />
            </linearGradient>

            <radialGradient id="blob1">
              <stop offset="0%" stopColor="#2563EB" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
            </radialGradient>

            <radialGradient id="blob2">
              <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
            </radialGradient>

            <radialGradient id="blob3">
              <stop offset="0%" stopColor="#EC4899" stopOpacity="0.20" />
              <stop offset="100%" stopColor="#EC4899" stopOpacity="0" />
            </radialGradient>
          </defs>

          <circle cx="180" cy="180" r="220" fill="url(#blob1)" />

          <circle cx="1260" cy="120" r="180" fill="url(#blob2)" />

          <circle cx="1180" cy="720" r="240" fill="url(#blob3)" />

          <circle cx="250" cy="760" r="180" fill="url(#blob2)" />
        </svg>
      </div>

      {/* Floating Gradient Circles */}

      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        style={{
          position: "absolute",
          width: "260px",
          height: "260px",
          borderRadius: "50%",
          background: "linear-gradient(135deg,#2563EB,#7C3AED)",
          opacity: 0.08,
          top: "8%",
          left: "-80px",
          filter: "blur(20px)",
        }}
      />

      <motion.div
        animate={{
          y: [0, 25, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        style={{
          position: "absolute",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "linear-gradient(135deg,#7C3AED,#EC4899)",
          opacity: 0.08,
          bottom: "-80px",
          right: "-80px",
          filter: "blur(20px)",
        }}
      />

      {/* ================= Container ================= */}

      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Small Badge */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="text-center"
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 22px",
              borderRadius: "40px",
              color: "#fff",
              fontWeight: "600",
              letterSpacing: "1px",
              background: "linear-gradient(135deg,#2563EB,#7C3AED,#EC4899)",
              boxShadow: "0 10px 30px rgba(37,99,235,.30)",
            }}
          >
            <FaQuestionCircle />
            FREQUENTLY ASKED QUESTIONS
          </span>
        </motion.div>
        {/* Heading */}
        <motion.h2
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="text-center fw-bold mt-4"
          style={{
            fontSize: "clamp(2.2rem,5vw,3.8rem)",
            color: "#0F172A",
          }}
        >
          Everything You
          <span
            style={{
              background: "linear-gradient(90deg,#2563EB,#7C3AED,#EC4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {" "}
            Need To Know
          </span>
        </motion.h2>
        {/* Description */}
        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
            duration: 0.7,
          }}
          className="text-center mx-auto"
          style={{
            maxWidth: "760px",
            color: "#475569",
            fontSize: "18px",
            lineHeight: "1.9",
            marginTop: "25px",
            marginBottom: "70px",
          }}
        >
          Find answers to the most common questions about our software
          development services, internships, professional training programs,
          certifications, placement assistance, and career support at
          <strong> KSquare SoftTech.</strong>
        </motion.p>
        {/* ================= FAQ Cards Start ================= */}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            {faqData.map((faq, index) => {
              const isOpen = active === faq.id;

              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -4,
                  }}
                  style={{
                    marginBottom: "22px",
                  }}
                >
                  {/* Card */}

                  <div
                    style={{
                      background: "rgba(255,255,255,.75)",
                      backdropFilter: "blur(18px)",
                      border: "1px solid rgba(255,255,255,.45)",
                      borderRadius: "24px",
                      overflow: "hidden",
                      boxShadow: isOpen
                        ? "0 20px 60px rgba(37,99,235,.18)"
                        : "0 10px 35px rgba(15,23,42,.08)",
                      transition: ".35s",
                    }}
                  >
                    {/* Header */}

                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      style={{
                        width: "100%",
                        border: "none",
                        outline: "none",
                        background: "transparent",
                        padding: "28px 30px",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      {/* Left */}

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "18px",
                          textAlign: "left",
                        }}
                      >
                        {/* Number */}

                        <div
                          style={{
                            minWidth: "55px",
                            width: "55px",
                            height: "55px",
                            borderRadius: "16px",
                            background:
                              "linear-gradient(135deg,#2563EB,#7C3AED,#EC4899)",
                            color: "#fff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: "700",
                            fontSize: "20px",
                            boxShadow: "0 12px 25px rgba(37,99,235,.30)",
                          }}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </div>

                        {/* Question */}

                        <h4
                          style={{
                            margin: 0,
                            color: "#0F172A",
                            fontWeight: "700",
                            fontSize: "22px",
                            lineHeight: "1.5",
                          }}
                        >
                          {faq.question}
                        </h4>
                      </div>

                      {/* Right Icon */}

                      <motion.div
                        animate={{
                          rotate: isOpen ? 180 : 0,
                          scale: isOpen ? 1.08 : 1,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                        style={{
                          width: "52px",
                          height: "52px",
                          borderRadius: "50%",
                          background: isOpen
                            ? "linear-gradient(135deg,#EF4444,#EC4899)"
                            : "linear-gradient(135deg,#2563EB,#7C3AED)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#fff",
                          flexShrink: 0,
                          boxShadow: "0 10px 25px rgba(37,99,235,.25)",
                        }}
                      >
                        {isOpen ? <FaTimes size={20} /> : <FaPlus size={18} />}
                      </motion.div>
                    </button>

                    {/* Body */}

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{
                            opacity: 0,
                            height: 0,
                          }}
                          animate={{
                            opacity: 1,
                            height: "auto",
                          }}
                          exit={{
                            opacity: 0,
                            height: 0,
                          }}
                          transition={{
                            duration: 0.35,
                          }}
                          style={{
                            overflow: "hidden",
                          }}
                        >
                          <div
                            style={{
                              padding: "0px 35px 30px 103px",
                            }}
                          >
                            <div
                              style={{
                                width: "100%",
                                height: "1px",
                                background:
                                  "linear-gradient(to right,#2563EB,#EC4899)",
                                marginBottom: "24px",
                                opacity: 0.2,
                              }}
                            />

                            <p
                              style={{
                                margin: 0,
                                color: "#475569",
                                fontSize: "18px",
                                lineHeight: "1.9",
                              }}
                            >
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>{" "}
        {/* ================= End FAQ Cards ================= */}
      </div>
    </section>
  );
}

export default FAQ;
