const stats = [
  {
    id: 1,
    icon: "bi-people-fill",
    number: "500+",
    title: "Students Trained",
  },
  {
    id: 2,
    icon: "bi-journal-code",
    number: "25+",
    title: "Professional Courses",
  },
  {
    id: 3,
    icon: "bi-laptop",
    number: "100+",
    title: "Projects Completed",
  },
  {
    id: 4,
    icon: "bi-award-fill",
    number: "95%",
    title: "Placement Support",
  },
];

function Statistics() {
  return (
    <section
      id="statistics"
      className="py-5"
      style={{
        background: "linear-gradient(135deg,#0F172A,#1E3A8A,#2563EB)",
      }}
    >
      <div className="container">
        {/* Heading */}
        <div className="text-center text-white mb-5">
          <span
            className="badge rounded-pill px-4 py-2 mb-3"
            style={{
              background: "linear-gradient(135deg,#F59E0B,#F97316)",
              fontSize: "15px",
            }}
          >
            OUR ACHIEVEMENTS
          </span>

          <h2
            className="fw-bold display-4 mb-3"
            style={{ letterSpacing: ".5px" }}
          >
            Trusted by Students &
            <br />
            Businesses Across India
          </h2>

          <p
            className="mx-auto"
            style={{
              maxWidth: "700px",
              opacity: ".9",
              fontSize: "18px",
            }}
          >
            We empower students with industry-ready skills and help businesses
            grow through innovative software solutions, practical training, and
            real-world projects.
          </p>
        </div>

        {/* Cards */}
        <div className="row g-4">
          {stats.map((item) => (
            <div className="col-md-6 col-lg-3" key={item.id}>
              <div
                className="text-center h-100 p-4"
                style={{
                  background: "rgba(255,255,255,.08)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,.15)",
                  borderRadius: "20px",
                  transition: ".35s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.background = "rgba(255,255,255,.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.background = "rgba(255,255,255,.08)";
                }}
              >
                <div
                  className="mx-auto mb-4 d-flex justify-content-center align-items-center"
                  style={{
                    width: "85px",
                    height: "85px",
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg,#2563EB,#7C3AED,#EC4899)",
                    color: "#fff",
                    fontSize: "36px",
                    boxShadow: "0 12px 30px rgba(37,99,235,.35)",
                  }}
                >
                  <i className={`bi ${item.icon}`}></i>
                </div>

                <h1
                  className="fw-bold text-white mb-2"
                  style={{ fontSize: "3rem" }}
                >
                  {item.number}
                </h1>

                <p
                  className="mb-0"
                  style={{
                    color: "#E2E8F0",
                    fontSize: "18px",
                    fontWeight: "500",
                  }}
                >
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Statistics;
