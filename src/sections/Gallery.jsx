import { useState } from "react";
import gallery from "../data/gallery.json";
import {
  FaImages,
  FaVideo,
  FaCertificate,
  FaChalkboardTeacher,
} from "react-icons/fa";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("All");

  const filters = [
    { name: "All", icon: <FaImages /> },
    { name: "Image", icon: <FaImages /> },
    { name: "Video", icon: <FaVideo /> },
    { name: "Workshop", icon: <FaChalkboardTeacher /> },
    { name: "Certificate", icon: <FaCertificate /> },
  ];

  const filteredGallery =
    filter === "All"
      ? gallery
      : gallery.filter(
          (item) =>
            item.type === filter.toLowerCase() || item.category === filter,
        );

  return (
    <>
      {/* =======================================
                GALLERY SECTION
      ======================================== */}

      <section
        id="gallery"
        className="position-relative overflow-hidden py-5"
        style={{
          background:
            "linear-gradient(180deg,#f8fbff 0%,#eef5ff 45%,#ffffff 100%)",
        }}
      >
        {/* ================= SVG Background ================= */}

        <svg
          className="position-absolute top-0 start-0 w-100 h-100"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{
            zIndex: 0,
            opacity: 0.18,
          }}
        >
          <defs>
            <linearGradient
              id="galleryGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="50%" stopColor="#7C3AED" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
          </defs>

          <circle cx="10%" cy="15%" r="180" fill="url(#galleryGradient)" />

          <circle cx="90%" cy="20%" r="220" fill="url(#galleryGradient)" />

          <circle cx="50%" cy="90%" r="250" fill="url(#galleryGradient)" />
        </svg>

        {/* Floating Blobs */}

        <div
          className="position-absolute rounded-circle"
          style={{
            width: "240px",
            height: "240px",
            background: "linear-gradient(135deg,#2563EB,#7C3AED)",
            filter: "blur(120px)",
            top: "-80px",
            left: "-60px",
            opacity: 0.25,
            zIndex: 0,
          }}
        ></div>

        <div
          className="position-absolute rounded-circle"
          style={{
            width: "280px",
            height: "280px",
            background: "linear-gradient(135deg,#EC4899,#7C3AED)",
            filter: "blur(140px)",
            bottom: "-120px",
            right: "-60px",
            opacity: 0.25,
            zIndex: 0,
          }}
        ></div>

        {/* ================================= */}

        <div className="container position-relative" style={{ zIndex: 2 }}>
          {/* Heading */}

          <div className="text-center mb-5">
            <span
              className="badge px-4 py-2 rounded-pill shadow-sm"
              style={{
                background: "linear-gradient(135deg,#2563EB,#7C3AED,#EC4899)",
                fontSize: ".9rem",
              }}
            >
              OUR GALLERY
            </span>

            <h2 className="display-4 fw-bold mt-3">
              Training &
              <span
                style={{
                  background: "linear-gradient(90deg,#2563EB,#EC4899)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {" "}
                Events
              </span>
            </h2>

            <p
              className="text-muted mx-auto mt-3"
              style={{
                maxWidth: "720px",
                fontSize: "1.05rem",
              }}
            >
              Explore our workshops, live projects, internship programs,
              seminars, certification events and memorable moments at KSquare
              SoftTech.
            </p>
          </div>

          {/* ================= Filter Buttons ================= */}

          <div className="d-flex justify-content-center flex-wrap gap-3 mb-5">
            {filters.map((item) => (
              <button
                key={item.name}
                onClick={() => setFilter(item.name)}
                className={`btn rounded-pill px-4 py-2 fw-semibold shadow-sm ${
                  filter === item.name ? "btn-primary" : "btn-light"
                }`}
              >
                <span className="me-2">{item.icon}</span>
                {item.name}
              </button>
            ))}
          </div>

          {/* ================= Gallery Grid ================= */}

          <div className="row g-4">
            {/* PART 2 STARTS HERE */}
            {filteredGallery.map((item) => (
              <div className="col-12 col-sm-6 col-lg-4" key={item.id}>
                <div
                  className="gallery-card position-relative overflow-hidden shadow-lg h-100"
                  style={{
                    borderRadius: "22px",
                    cursor: "pointer",
                    transition: ".4s ease",
                    background: "#fff",
                  }}
                  data-bs-toggle="modal"
                  data-bs-target="#galleryModal"
                  onClick={() => setSelectedImage(item)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-10px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0px)";
                  }}
                >
                  {/* Thumbnail */}

                  <div
                    className="position-relative overflow-hidden"
                    style={{
                      height: "260px",
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-100 h-100"
                      style={{
                        objectFit: "cover",
                        transition: ".6s",
                      }}
                    />

                    {/* Overlay */}

                    <div
                      className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-between"
                      style={{
                        background:
                          "linear-gradient(to top,rgba(0,0,0,.65),rgba(0,0,0,.15),transparent)",
                      }}
                    >
                      {/* Category */}

                      <div className="p-3">
                        <span className="badge bg-primary px-3 py-2">
                          {item.category}
                        </span>
                      </div>

                      {/* Bottom */}

                      <div className="p-3">
                        {/* Video Play */}

                        {item.type === "video" && (
                          <div className="mb-3 d-flex justify-content-center">
                            <div
                              style={{
                                width: "70px",
                                height: "70px",
                                borderRadius: "50%",
                                background: "rgba(255,255,255,.95)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "30px",
                                color: "#2563EB",
                                boxShadow: "0 0 30px rgba(255,255,255,.4)",
                              }}
                            >
                              ▶
                            </div>
                          </div>
                        )}

                        <h5 className="text-white fw-bold mb-1">
                          {item.title}
                        </h5>

                        <small className="text-white-50">Click to View</small>
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}

                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <span
                        className="badge rounded-pill"
                        style={{
                          background: "linear-gradient(135deg,#2563EB,#7C3AED)",
                        }}
                      >
                        {item.type === "video" ? "🎥 Video" : "🖼 Image"}
                      </span>

                      <small className="text-muted">{item.date}</small>
                    </div>

                    <h4 className="fw-bold mb-3">{item.title}</h4>

                    <p
                      className="text-muted"
                      style={{
                        minHeight: "65px",
                      }}
                    >
                      {item.description}
                    </p>

                    <hr />

                    <div className="d-flex justify-content-between align-items-center">
                      <span className="text-primary fw-semibold">
                        📍 {item.location}
                      </span>

                      <button className="btn btn-sm btn-outline-primary rounded-pill px-3">
                        View
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}{" "}
          </div>
        </div>
      </section>
      {/* ==========================================================
                    PREMIUM GALLERY MODAL
========================================================== */}

      <div
        className="modal fade"
        id="galleryModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
          <div
            className="modal-content border-0 shadow-lg"
            style={{
              borderRadius: "24px",
              overflow: "hidden",
            }}
          >
            {/* Header */}

            <div
              className="modal-header border-0 text-white"
              style={{
                background: "linear-gradient(135deg,#2563EB,#7C3AED,#EC4899)",
              }}
            >
              <div>
                <span className="badge bg-light text-dark mb-2">
                  {selectedImage?.category}
                </span>

                <h3 className="fw-bold mb-0">{selectedImage?.title}</h3>
              </div>

              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
              ></button>
            </div>

            {/* Body */}

            <div className="modal-body p-4">
              <div className="row g-5 align-items-center">
                {/* Left */}

                <div className="col-lg-7">
                  {selectedImage?.type === "video" ? (
                    <video
                      className="w-100 rounded-4 shadow"
                      controls
                      autoPlay
                      controlsList="nodownload"
                      style={{
                        maxHeight: "520px",
                        objectFit: "cover",
                      }}
                    >
                      <source src={selectedImage?.video} type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      src={selectedImage?.image}
                      alt={selectedImage?.title}
                      className="img-fluid rounded-4 shadow"
                      style={{
                        width: "100%",
                        maxHeight: "520px",
                        objectFit: "cover",
                      }}
                    />
                  )}
                </div>

                {/* Right */}

                <div className="col-lg-5">
                  <span
                    className="badge rounded-pill px-3 py-2 mb-3"
                    style={{
                      background: "linear-gradient(135deg,#2563EB,#7C3AED)",
                    }}
                  >
                    {selectedImage?.type === "video"
                      ? "🎥 Video Gallery"
                      : "🖼 Image Gallery"}
                  </span>

                  <h2 className="fw-bold mb-3">{selectedImage?.title}</h2>

                  <p className="text-muted">{selectedImage?.description}</p>

                  <hr />

                  <div className="mb-3">
                    <h6 className="fw-bold">📅 Event Date</h6>

                    <p className="text-muted mb-0">{selectedImage?.date}</p>
                  </div>

                  <div className="mb-3">
                    <h6 className="fw-bold">📍 Location</h6>

                    <p className="text-muted mb-0">{selectedImage?.location}</p>
                  </div>

                  <div className="mb-4">
                    <h6 className="fw-bold">📂 Category</h6>

                    <p className="text-muted mb-0">{selectedImage?.category}</p>
                  </div>

                  {/* Buttons */}

                  <div className="d-grid gap-3">
                    {selectedImage?.type === "video" ? (
                      <button className="btn btn-primary btn-lg rounded-pill">
                        ▶ Watch Again
                      </button>
                    ) : (
                      <a
                        href={selectedImage?.image}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary btn-lg rounded-pill"
                      >
                        🔍 View Full Image
                      </a>
                    )}

                    <button
                      className="btn btn-outline-secondary rounded-pill"
                      data-bs-dismiss="modal"
                    >
                      Close Gallery
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
