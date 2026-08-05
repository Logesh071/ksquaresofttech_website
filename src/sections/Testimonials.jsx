import { useState } from "react";
import testimonials from "../data/testimonials.json";

function TestimonialCard({ item }) {
  const [expanded, setExpanded] = useState(false);

  const limit = 150;
  const isLong = item.review.length > limit;

  const reviewText =
    expanded || !isLong
      ? item.review
      : item.review.slice(0, limit) + "...";

  return (
    <div className="col-lg-4 col-md-6">
      <div
        className="card border-0 h-100 position-relative overflow-hidden"
        style={{
          borderRadius: "24px",
          background: "rgba(255,255,255,0.9)",
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)",
          boxShadow: "0 20px 45px rgba(0,0,0,.08)",
          transition: ".4s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-10px)";
          e.currentTarget.style.boxShadow =
            "0 25px 50px rgba(37,99,235,.18)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow =
            "0 20px 45px rgba(0,0,0,.08)";
        }}
      >
        {/* Gradient Border */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            padding: "2px",
            borderRadius: "24px",
            background:
              "linear-gradient(135deg,#2563EB,#7C3AED,#EC4899)",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            pointerEvents: "none",
          }}
        ></div>

        <div className="card-body p-4 d-flex flex-column">

          {/* Quote Icon */}
          <div
            className="d-flex justify-content-end mb-2"
            style={{
              fontSize: "55px",
              color: "#E0E7FF",
              lineHeight: 0,
            }}
          >
            ❝
          </div>

          {/* Profile */}
          <div className="text-center">
            <div
              className="mx-auto mb-3"
              style={{
                width: "90px",
                height: "90px",
                borderRadius: "50%",
                padding: "4px",
                background:
                  "linear-gradient(135deg,#2563EB,#7C3AED,#EC4899)",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                className="rounded-circle"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  border: "4px solid white",
                }}
              />
            </div>

            <h5 className="fw-bold mb-1">{item.name}</h5>

            <span
              className="badge rounded-pill px-3 py-2 mb-3"
              style={{
                background:
                  "linear-gradient(135deg,#2563EB,#7C3AED)",
                fontSize: "12px",
              }}
            >
              {item.course}
            </span>

            <div className="mb-3">
              {[...Array(item.rating)].map((_, i) => (
                <i
                  key={i}
                  className="bi bi-star-fill text-warning me-1"
                ></i>
              ))}
            </div>
          </div>

          {/* Review */}
          <div className="flex-grow-1">
            <p
              className="text-muted text-center"
              style={{
                lineHeight: "1.8",
                fontSize: "15px",
              }}
            >
              {reviewText}
            </p>
          </div>

          {isLong && (
            <button
              className="btn btn-link text-decoration-none fw-semibold mt-2"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? "Read Less ↑" : "Read More →"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="position-relative overflow-hidden py-5"
      style={{
        background:
          "linear-gradient(135deg,#EFF6FF,#EEF2FF,#FFFFFF)",
      }}
    >
      {/* Top SVG */}
      <svg
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "220px",
        }}
        viewBox="0 0 1440 320"
      >
        <path
          fill="#2563EB"
          fillOpacity="0.08"
          d="M0,160L60,176C120,192,240,224,360,234.7C480,245,600,235,720,202.7C840,171,960,117,1080,112C1200,107,1320,149,1380,170.7L1440,192V0H0Z"
        ></path>
      </svg>

      {/* Bottom SVG */}
      <svg
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "220px",
        }}
        viewBox="0 0 1440 320"
      >
        <path
          fill="#7C3AED"
          fillOpacity="0.08"
          d="M0,224L80,202.7C160,181,320,139,480,138.7C640,139,800,181,960,197.3C1120,213,1280,203,1360,197.3L1440,192V320H0Z"
        ></path>
      </svg>

      <div className="container position-relative">

        {/* Heading */}
        <div className="text-center mb-5">

          <span
            className="badge rounded-pill px-4 py-2 mb-3"
            style={{
              background:
                "linear-gradient(135deg,#2563EB,#7C3AED,#EC4899)",
              fontSize: "13px",
              letterSpacing: "1px",
            }}
          >
            STUDENT TESTIMONIALS
          </span>

          <h2 className="display-4 fw-bold">

            What Our Students

            <br />

            <span
              style={{
                background:
                  "linear-gradient(135deg,#2563EB,#7C3AED,#EC4899)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Say About Us
            </span>

          </h2>

          <p
            className="text-muted mx-auto mt-4"
            style={{
              maxWidth: "700px",
              lineHeight: "1.8",
            }}
          >
            Real experiences from students who have learned industry-ready
            skills, completed live projects, and started successful careers
            through KSquare Softtech.
          </p>

        </div>

        {/* Cards */}

        <div className="row g-4">

          {testimonials.map((item) => (
            <TestimonialCard
              key={item.id}
              item={item}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;