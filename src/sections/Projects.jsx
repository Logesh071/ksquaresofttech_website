import projects from "../data/projects.json";

function Projects() {
  return (
    <section id="projects" className="py-5 bg-light fade-up">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5">
          <span
            className="badge rounded-pill px-4 py-2 mb-3"
            style={{
              background: "linear-gradient(135deg,#2563EB,#7C3AED,#EC4899)",
              fontSize: "14px",
            }}
          >
            OUR PORTFOLIO
          </span>

          <h2 className="fw-bold display-5">
            Innovative Projects We Have Built
          </h2>

          <p className="text-muted mx-auto" style={{ maxWidth: "700px" }}>
            Explore our collection of innovative web applications, software
            solutions, mobile apps, and digital products developed using modern
            technologies.
          </p>
        </div>

        {/* Cards */}
        <div className="row g-4">
          {projects.map((project) => (
            <div className="col-md-6 col-lg-4" key={project.id}>
              <div
                className="card border-0 shadow-lg h-100 overflow-hidden"
                style={{
                  borderRadius: "20px",
                  transition: "all .35s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 45px rgba(37,99,235,.18)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                {/* Image */}
                <div
                  style={{
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-100"
                    style={{
                      height: "240px",
                      objectFit: "cover",
                      transition: ".4s",
                    }}
                  />
                </div>

                {/* Body */}

                <div className="card-body p-4">
                  <span
                    className="badge rounded-pill px-3 py-2 mb-3"
                    style={{
                      background: "linear-gradient(135deg,#2563EB,#7C3AED)",
                    }}
                  >
                    {project.category}
                  </span>

                  <h4 className="fw-bold">{project.title}</h4>

                  <p className="text-muted">{project.description}</p>

                  <div className="mt-3">
                    <span className="badge bg-light text-dark border me-2 mb-2">
                      {project.technology}
                    </span>
                  </div>
                </div>

                {/* Footer */}

                <div className="card-footer bg-white border-0 p-4">
                  <button
                    className="btn w-100 fw-bold text-white"
                    style={{
                      background:
                        "linear-gradient(135deg,#2563EB,#7C3AED,#EC4899)",
                      border: "none",
                      borderRadius: "50px",
                      padding: "12px",
                    }}
                  >
                    View Project →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
