import React from "react";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const subject = form.subject.value;
    const message = form.message.value;

    const whatsappMessage = `
*📩 New Contact Enquiry*

👤 Name: ${name}

📧 Email: ${email}

📱 Phone: ${phone}

📝 Subject: ${subject}

💬 Message:
${message}
`;

    const phoneNumber = "918807754570";

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(url, "_blank");

    form.reset();
  };

  return (
    <section
      id="contact"
      className="position-relative py-5 overflow-hidden bg-light"
    >
      {/* Background */}

      <svg
        className="position-absolute top-0 start-0"
        width="500"
        height="500"
        viewBox="0 0 600 600"
        style={{ opacity: ".08", zIndex: 0 }}
      >
        <circle cx="300" cy="300" r="250" fill="#0d6efd" />
      </svg>

      <svg
        className="position-absolute bottom-0 end-0"
        width="450"
        height="450"
        viewBox="0 0 600 600"
        style={{ opacity: ".08", zIndex: 0 }}
      >
        <circle cx="300" cy="300" r="260" fill="#00c6ff" />
      </svg>

      <div className="container position-relative" style={{ zIndex: 2 }}>
        {/* Heading */}

        <div className="text-center mb-5">
          <h6 className="text-primary fw-bold text-uppercase">
            CONTACT US
          </h6>

          <h2 className="display-5 fw-bold mb-3">
            Let's Build Something Great Together
          </h2>

          <p
            className="text-muted mx-auto"
            style={{ maxWidth: "700px" }}
          >
            We'd love to hear from you. Contact us for admissions,
            internships, software development, business enquiries or
            collaborations.
          </p>
        </div>

        <div className="row g-4 align-items-stretch">

          {/* Contact Info */}

          <div className="col-lg-5">

            <div
              className="bg-white shadow rounded-4 p-4 h-100"
              style={{ border: "1px solid #eee" }}
            >

              <h3 className="fw-bold mb-4">
                Contact Information
              </h3>

              <div className="d-flex mb-4 align-items-start">

                <div className="contact-icon me-3">
                  <i className="bi bi-geo-alt-fill"></i>
                </div>

                <div>
                  <h5 className="fw-bold mb-2">
                    Office Address
                  </h5>

                  <p className="text-muted mb-0">
                    <strong>KSquare Softtech</strong>
                    <br />
                    Sri Krishna Building
                    <br />
                    80/2, Chinthamanipudur
                    <br />
                    Trichy Road
                    <br />
                    Coimbatore - 641103
                    <br />
                    Tamil Nadu, India
                  </p>
                </div>

              </div>

              <div className="d-flex mb-4 align-items-center">

                <div className="contact-icon bg-success me-3">
                  <i className="bi bi-telephone-fill"></i>
                </div>

                <div>
                  <h5 className="fw-bold mb-1">
                    Phone
                  </h5>

                  <p className="text-muted mb-0">
                    +91 88077 54570
                  </p>
                </div>

              </div>

              <div className="d-flex mb-4 align-items-center">

                <div className="contact-icon bg-danger me-3">
                  <i className="bi bi-envelope-fill"></i>
                </div>

                <div>
                  <h5 className="fw-bold mb-1">
                    Email
                  </h5>

                  <p className="text-muted mb-0">
                    info@ksquaresofttech.com
                  </p>
                </div>

              </div>

              <div className="d-flex align-items-center">

                <div
                  className="contact-icon me-3"
                  style={{ background: "#ffc107" }}
                >
                  <i className="bi bi-clock-fill"></i>
                </div>

                <div>
                  <h5 className="fw-bold mb-1">
                    Working Hours
                  </h5>

                  <p className="text-muted mb-0">
                    Monday - Saturday
                    <br />
                    9:00 AM - 6:00 PM
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* Contact Form */}

          <div className="col-lg-7">

            <div
              className="bg-white shadow rounded-4 p-4 h-100"
              style={{ border: "1px solid #eee" }}
            >

              <h3 className="fw-bold mb-4">
                Send us a Message
              </h3>

              <form onSubmit={handleSubmit}>

                <div className="row">

                  <div className="col-md-6 mb-3">

                    <input
                      type="text"
                      name="name"
                      className="form-control form-control-lg"
                      placeholder="Your Name"
                      required
                    />

                  </div>

                  <div className="col-md-6 mb-3">

                    <input
                      type="email"
                      name="email"
                      className="form-control form-control-lg"
                      placeholder="Email Address"
                      required
                    />

                  </div>

                </div>

                <div className="row">

                  <div className="col-md-6 mb-3">

                    <input
                      type="text"
                      name="phone"
                      className="form-control form-control-lg"
                      placeholder="Phone Number"
                      required
                    />

                  </div>

                  <div className="col-md-6 mb-3">

                    <input
                      type="text"
                      name="subject"
                      className="form-control form-control-lg"
                      placeholder="Subject"
                      required
                    />

                  </div>

                </div>

                <div className="mb-4">

                  <textarea
                    rows="6"
                    name="message"
                    className="form-control form-control-lg"
                    placeholder="Write your message..."
                    required
                  ></textarea>

                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg px-5 rounded-pill"
                >
                  <i className="bi bi-whatsapp me-2"></i>
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </div>

        {/* Google Map */}

        <div className="mt-5">

          <div className="shadow rounded-4 overflow-hidden">

            <iframe
              title="KSquare Softtech"
              src="https://www.google.com/maps?q=Sri+Krishna+Building,+80/2,+Chinthamanipudur,+Trichy+Road,+Coimbatore,+Tamil+Nadu+641103&output=embed"
              width="100%"
              height="420"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;