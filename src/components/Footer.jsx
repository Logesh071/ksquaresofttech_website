function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-section">
      {/* ================= Background ================= */}
      <div className="footer-watermark">KSQUARE SOFTTECH</div>
      <div className="footer-circle one"></div>
      <div className="footer-circle two"></div>

      <div className="container position-relative">
        <div className="row gy-5">
          {/* ======================================================
                        COMPANY INFO
          ====================================================== */}
          <div className="col-lg-4 col-md-6">
            <h2 className="footer-logo">
              KSquare <span>Softtech</span>
            </h2>

            <p className="footer-description">
              KSquare Softtech is a leading IT Training, Internship & Software
              Development Company in Coimbatore. We empower students, graduates,
              and working professionals with industry-ready skills through
              hands-on training, live projects, internships, and placement
              assistance.
            </p>

            <div className="footer-social">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <i className="bi bi-facebook"></i>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <i className="bi bi-instagram"></i>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
              >
                <i className="bi bi-youtube"></i>
              </a>

              <a
                href="https://wa.me/918807754570"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>
          {/* ======================================================
                        QUICK LINKS
          ====================================================== */}
          <div className="col-lg-2 col-md-6">
            <h4 className="footer-title">Quick Links</h4>

            <ul className="footer-links">
              <li>
                <a href="#home">
                  <i className="bi bi-chevron-right"></i>
                  Home
                </a>
              </li>

              <li>
                <a href="#about">
                  <i className="bi bi-chevron-right"></i>
                  About Us
                </a>
              </li>

              <li>
                <a href="#services">
                  <i className="bi bi-chevron-right"></i>
                  Services
                </a>
              </li>

              <li>
                <a href="#courses">
                  <i className="bi bi-chevron-right"></i>
                  Courses
                </a>
              </li>

              <li>
                <a href="#internship">
                  <i className="bi bi-chevron-right"></i>
                  Internship
                </a>
              </li>

              <li>
                <a href="#projects">
                  <i className="bi bi-chevron-right"></i>
                  Projects
                </a>
              </li>

              <li>
                <a href="#gallery">
                  <i className="bi bi-chevron-right"></i>
                  Gallery
                </a>
              </li>

              <li>
                <a href="#contact">
                  <i className="bi bi-chevron-right"></i>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          {/* ======================================================
                        POPULAR COURSES
          ====================================================== */}
          <div className="col-lg-3 col-md-6">
            <h4 className="footer-title">Popular Courses</h4>

            <ul className="footer-links">
              <li>
                <i className="bi bi-mortarboard-fill"></i>
                AI Enhanced Full Stack Development
              </li>

              <li>
                <i className="bi bi-mortarboard-fill"></i>
                Python Programming
              </li>

              <li>
                <i className="bi bi-mortarboard-fill"></i>
                Data Science
              </li>

              <li>
                <i className="bi bi-mortarboard-fill"></i>
                Artificial Intelligence
              </li>

              <li>
                <i className="bi bi-mortarboard-fill"></i>
                Machine Learning
              </li>

              <li>
                <i className="bi bi-mortarboard-fill"></i>
                Data Analytics
              </li>

              <li>
                <i className="bi bi-mortarboard-fill"></i>
                UI / UX Design
              </li>

              <li>
                <i className="bi bi-mortarboard-fill"></i>
                Digital Marketing
              </li>
            </ul>
          </div>
          {/* ======================================================
                        CONTACT US
          ====================================================== */}
          <div className="col-lg-3 col-md-6">
            <h4 className="footer-title">Contact Us</h4>

            <div className="footer-contact">
              {/* Address */}

              <div className="contact-item">
                <div className="contact-icon">
                  <i className="bi bi-geo-alt-fill"></i>
                </div>

                <div>
                  <strong>Office Address</strong>

                  <p>
                    Sri Krishna Building,
                    <br />
                    80/2, Chinthamanipudur,
                    <br />
                    Trichy Road,
                    <br />
                    Coimbatore - 641103,
                    <br />
                    Tamil Nadu, India
                  </p>
                </div>
              </div>

              {/* Phone */}

              <div className="contact-item">
                <div className="contact-icon">
                  <i className="bi bi-telephone-fill"></i>
                </div>

                <div>
                  <strong>Phone</strong>

                  <p>
                    <a href="tel:+918807754570">+91 88077 54570</a>

                    <br />

                    <a href="tel:+917010798196">+91 7010798196</a>
                  </p>
                </div>
              </div>

              {/* Email */}

              <div className="contact-item">
                <div className="contact-icon">
                  <i className="bi bi-envelope-fill"></i>
                </div>

                <div>
                  <strong>Email</strong>

                  <p>
                    <a href="mailto:info@ksquaresofttech.com">
                      info@ksquaresofttech.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Website */}

              <div className="contact-item">
                <div className="contact-icon">
                  <i className="bi bi-globe2"></i>
                </div>

                <div>
                  <strong>Website</strong>

                  <p>
                    <a
                      href="https://ksquaresofttech.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      www.ksquaresofttech.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>

        {/* ======================================================
                      FOOTER BOTTOM
        ====================================================== */}

        <div className="footer-bottom mt-5">
          <hr className="footer-divider" />

          <div className="row align-items-center gy-3">
            {/* Copyright */}

            <div className="col-lg-6 text-center text-lg-start">
              <p className="copyright mb-0">
                © {year} <strong>KSquare Softtech</strong>. All Rights Reserved.
              </p>
            </div>

            {/* Developed By */}

            <div className="col-lg-6 text-center text-lg-end">
              <p className="copyright mb-0">
                Designed & Developed with
                <i className="bi bi-heart-fill text-danger mx-2"></i>
                by <span className="developer-name">KSquare Softtech</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================
                    BACK TO TOP
      ====================================================== */}

      <a href="#home" className="back-to-top" aria-label="Back To Top">
        <i className="bi bi-arrow-up"></i>
      </a>
    </footer>
  );
}

export default Footer;
