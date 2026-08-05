import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const menus = [
    { id: "home", label: "Home", icon: "bi-house-fill" },
    { id: "about", label: "About", icon: "bi-person-workspace" },
    { id: "services", label: "Services", icon: "bi-boxes" },
    { id: "courses", label: "Courses", icon: "bi-book-half" },
    { id: "internship", label: "Internship", icon: "bi-rocket-takeoff-fill" },
    { id: "gallery", label: "Gallery", icon: "bi-camera2" },
    { id: "contact", label: "Contact", icon: "bi-send-fill" },
  ];

  // ==========================
  // Scroll to Section
  // ==========================
  const handleScroll = (id) => {
    setActive(id);
    setIsOpen(false);

    const section = document.getElementById(id);

    if (section) {
      const yOffset = -80; // Navbar Height
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  // ==========================
  // Scroll Spy
  // ==========================
  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + 120;

      menus.forEach((menu) => {
        const section = document.getElementById(menu.id);

        if (!section) return;

        if (
          scrollPos >= section.offsetTop &&
          scrollPos < section.offsetTop + section.offsetHeight
        ) {
          setActive(menu.id);
        }
      });
    };

    window.addEventListener("scroll", onScroll);

    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      className="navbar navbar-expand-lg custom-navbar sticky-top"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        {/* Logo */}
        <motion.button
          className="navbar-brand border-0 bg-transparent text-white fw-bold fs-4"
          onClick={() => handleScroll("home")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          KSquare SoftTech
        </motion.button>

        {/* Toggle */}
        <button
          className="navbar-toggler border-0"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i
            className={`bi ${
              isOpen ? "bi-x-lg" : "bi-list"
            } fs-2 text-white`}
          ></i>
        </button>

        {/* Menu */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto align-items-lg-center">

            {menus.map((menu, index) => (
              <motion.li
                key={menu.id}
                className="nav-item"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2 + index * 0.08,
                }}
              >
                <motion.button
                  className={`nav-btn ${
                    active === menu.id ? "active-link" : ""
                  }`}
                  onClick={() => handleScroll(menu.id)}
                  whileHover={{
                    y: -2,
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                >
                  <motion.i
                    className={`${menu.icon} me-2`}
                    animate={{
                      opacity: active === menu.id ? 1 : 0,
                      width: active === menu.id ? 18 : 0,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    style={{
                      overflow: "hidden",
                      display: "inline-block",
                    }}
                  />

                  {menu.label}
                </motion.button>
              </motion.li>
            ))}

            {/* Enquiry Button */}
            {/* <motion.li
              className="nav-item ms-lg-3 mt-3 mt-lg-0"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.button
                className="btn enquiry-btn fw-semibold px-4"
                onClick={() => handleScroll("contact")}
                whileHover={{
                  scale: 1.05,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.95,
                }}
              >
                Enquiry
              </motion.button>
            </motion.li> */}

          </ul>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;