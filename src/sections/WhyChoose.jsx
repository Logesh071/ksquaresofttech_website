import { Typewriter } from "react-simple-typewriter";

const features = [
  {
    icon: "bi-person-workspace",
    title: "Industry Experts",
    desc: "Learn from experienced IT professionals with real-world expertise.",
  },
  {
    icon: "bi-laptop",
    title: "Live Projects",
    desc: "Build real-world applications and gain practical experience.",
  },
  {
    icon: "bi-award",
    title: "Certification",
    desc: "Earn an industry-recognized certificate after successful completion.",
  },
  {
    icon: "bi-briefcase",
    title: "Placement Support",
    desc: "Resume building, mock interviews, and career guidance.",
  },
  {
    icon: "bi-clock-history",
    title: "Flexible Timings",
    desc: "Convenient weekday and weekend batches for every learner.",
  },
  {
    icon: "bi-headset",
    title: "Lifetime Support",
    desc: "Continuous learning support even after course completion.",
  },
];

function WhyChoose() {
  return (
    <section
      id="whychoose"
      className="py-5 position-relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg,#F8FAFC 0%,#EEF4FF 50%,#FFFFFF 100%)",
      }}
    >
      {/* ================= SVG Background ================= */}

      <svg
        style={{
          position: "absolute",
          top: "-120px",
          left: "-150px",
          width: "700px",
          zIndex: 0,
          opacity: 0.25,
        }}
        viewBox="0 0 600 600"
      >
        <defs>
          <linearGradient id="blob1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="50%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
        </defs>

        <path
          fill="url(#blob1)"
          d="M442,317Q401,434,286,446Q171,458,124,351Q77,244,138,145Q199,46,319,71Q439,96,462,198Q485,300,442,317Z"
        >
          <animate
            attributeName="d"
            dur="12s"
            repeatCount="indefinite"
            values="
M442,317Q401,434,286,446Q171,458,124,351Q77,244,138,145Q199,46,319,71Q439,96,462,198Q485,300,442,317Z;
M448,295Q430,430,292,455Q154,480,110,350Q66,220,162,130Q258,40,378,78Q498,116,486,233Q474,350,448,295Z;
M442,317Q401,434,286,446Q171,458,124,351Q77,244,138,145Q199,46,319,71Q439,96,462,198Q485,300,442,317Z"
          />
        </path>
      </svg>

      <svg
        style={{
          position: "absolute",
          bottom: "-160px",
          right: "-150px",
          width: "650px",
          opacity: 0.2,
          zIndex: 0,
        }}
        viewBox="0 0 600 600"
      >
        <defs>
          <linearGradient id="blob2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06B6D4" />
            <stop offset="50%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
        </defs>

        <path
          fill="url(#blob2)"
          d="M432,338Q395,476,257,458Q119,440,96,301Q73,162,198,104Q323,46,425,129Q527,212,432,338Z"
        >
          <animate
            attributeName="d"
            dur="15s"
            repeatCount="indefinite"
            values="
M432,338Q395,476,257,458Q119,440,96,301Q73,162,198,104Q323,46,425,129Q527,212,432,338Z;
M438,330Q420,470,280,470Q140,470,92,315Q44,160,170,85Q296,10,420,108Q544,206,438,330Z;
M432,338Q395,476,257,458Q119,440,96,301Q73,162,198,104Q323,46,425,129Q527,212,432,338Z"
          />
        </path>
      </svg>

      {/* Floating Circles */}

      <div
        style={{
          position: "absolute",
          width: "16px",
          height: "16px",
          borderRadius: "50%",
          background: "#2563EB",
          top: "18%",
          left: "12%",
          opacity: .15,
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "24px",
          height: "24px",
          borderRadius: "50%",
          background: "#EC4899",
          top: "70%",
          right: "10%",
          opacity: .12,
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          background: "#7C3AED",
          top: "40%",
          right: "18%",
          opacity: .18,
        }}
      />

      {/* ================= Content ================= */}

      <div className="container position-relative" style={{ zIndex: 2 }}>

        {/* Heading */}

        <div className="text-center mb-5">

          <span
            className="badge px-4 py-2 rounded-pill shadow-sm mb-3"
            style={{
              background:
                "linear-gradient(135deg,#2563EB,#7C3AED,#EC4899)",
              color: "#fff",
              fontSize: "14px",
              letterSpacing: "1px",
            }}
          >
            ⭐ WHY CHOOSE US
          </span>

          <h2
            className="fw-bold display-4 mb-3"
            style={{ lineHeight: "1.3" }}
          >
            Why Choose{" "}
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
                  "KSquare Softtech?",
                  "Industry Experts?",
                  "Real-Time Projects?",
                  "Career Growth?",
                  "100% Practical Learning?",
                  "Placement Support?",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={90}
                deleteSpeed={50}
                delaySpeed={1800}
              />
            </span>
          </h2>

          <p
            className="text-muted mx-auto fs-5"
            style={{ maxWidth: "760px" }}
          >
            We provide{" "}
            <span className="fw-bold text-primary">
              industry-focused IT training
            </span>
            , hands-on project experience, expert mentorship,
            internship opportunities, and complete placement assistance
            to help you build a successful career in technology.
          </p>
        </div>

        {/* Cards */}

        <div className="row g-4">

          {features.map((item, index) => (

            <div className="col-md-6 col-lg-4" key={index}>

              <div
                className="card border-0 h-100 text-center p-4"
                style={{
                  borderRadius: "22px",
                  background: "rgba(255,255,255,.75)",
                  backdropFilter: "blur(12px)",
                  transition: ".4s",
                  boxShadow: "0 10px 35px rgba(0,0,0,.08)",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-12px)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 45px rgba(37,99,235,.18)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 35px rgba(0,0,0,.08)";
                }}
              >
                <div
                  className="mx-auto d-flex align-items-center justify-content-center mb-4"
                  style={{
                    width: "90px",
                    height: "90px",
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg,#2563EB,#7C3AED,#EC4899)",
                    color: "#fff",
                    fontSize: "38px",
                    boxShadow:
                      "0 15px 30px rgba(124,58,237,.35)",
                  }}
                >
                  <i className={`bi ${item.icon}`}></i>
                </div>

                <h4 className="fw-bold mb-3">{item.title}</h4>

                <p
                  className="text-muted"
                  style={{ lineHeight: "1.8" }}
                >
                  {item.desc}
                </p>

              </div>

            </div>

          ))}

        </div>

        {/* CTA */}

        <div className="text-center mt-5">

          <button
            className="btn px-5 py-3 rounded-pill fw-semibold text-white shadow-lg"
            style={{
              background:
                "linear-gradient(135deg,#2563EB,#7C3AED,#EC4899)",
              border: "none",
              fontSize: "17px",
            }}
          >
            Start Your IT Career Today 🚀
          </button>

        </div>

      </div>
    </section>
  );
}

export default WhyChoose;