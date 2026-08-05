  import testimonials from "../data/testimonials.json";

  function Testimonials() {
    return (
      <section
        id="testimonials"
        className="py-5"
        style={{
          background: "linear-gradient(135deg,#F8FAFC,#EEF2FF)",
        }}
      >
        <div className="container">
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

            <h2 className="display-5 fw-bold">
              Success Stories from
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(135deg,#2563EB,#7C3AED,#EC4899)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                KSquare Softtech
              </span>
            </h2>

            <p
              className="text-muted mx-auto mt-3"
              style={{
                maxWidth: "700px",
                fontSize: "16px",
              }}
            >
              Hear from our students who have transformed their careers through
              practical training and real-world projects.
            </p>
          </div>

          {/* Testimonial Cards */}
          <div className="row g-4">
            {testimonials.map((item) => (
              <div className="col-md-6 col-lg-4" key={item.id}>
                <div
                  className="card border-0 h-100"
                  style={{
                    borderRadius: "18px",
                    boxShadow: "0 8px 25px rgba(0,0,0,.08)",
                    transition: "all .35s ease",
                    overflow: "hidden",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow =
                      "0 18px 40px rgba(37,99,235,.18)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 25px rgba(0,0,0,.08)";
                  }}
                >
                  <div className="card-body text-center p-4">

                    {/* Avatar */}
                    <div
                      className="mx-auto mb-3"
                      style={{
                        width: "85px",
                        height: "85px",
                        borderRadius: "50%",
                        padding: "3px",
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
                          border: "3px solid #fff",
                        }}
                      />
                    </div>

                    {/* Name */}
                    <h5 className="fw-bold mb-1">{item.name}</h5>

                    {/* Course */}
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

                    {/* Rating */}
                    <div className="mb-3">
                      {[...Array(item.rating)].map((_, index) => (
                        <i
                          key={index}
                          className="bi bi-star-fill text-warning me-1"
                          style={{ fontSize: "15px" }}
                        ></i>
                      ))}
                    </div>

                    {/* Quote */}
                    {/* <i
                      className="bi bi-quote text-primary"
                      style={{ fontSize: "30px" }}
                    ></i> */}

                    {/* Review */}
                    <p
                      className="text-muted mt-3 mb-0"
                      style={{
                        fontSize: "14px",
                        lineHeight: "1.7",
                        fontStyle: "italic",
                      }}
                    >
                      "{item.review}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  export default Testimonials;