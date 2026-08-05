import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

import { FaReact, FaNodeJs, FaPython, FaDatabase } from "react-icons/fa";

import { SiMongodb, SiJavascript, SiExpress } from "react-icons/si";

import heroData from "../data/heroData";

function Hero({ openPopup }) {
  // ==========================
  // Course Tabs
  // ==========================
  const courseTabs = [
    {
      button: "Full Stack",
      heading: "Become a Full Stack Developer",
      subtitle:
        "Master HTML, CSS, Bootstrap, JavaScript, React, Node.js, Express.js & MongoDB.",
    },
    {
      button: "AI FSD MERN",
      heading: "Become an AI Powered Full Stack Developer",
      subtitle:
        "Learn MERN Stack with ChatGPT, Gemini, AI APIs and Prompt Engineering.",
    },
    {
      button: "Data Science",
      heading: "Become a Data Scientist",
      subtitle:
        "Learn Python, Machine Learning, Deep Learning and Artificial Intelligence.",
    },
    {
      button: "Python",
      heading: "Become a Python Developer",
      subtitle:
        "Master Python from Beginner to Advanced with Real-time Projects.",
    },
    {
      button: "Digital Marketing",
      heading: "Become a Digital Marketing Expert",
      subtitle:
        "Learn SEO, Google Ads, Meta Ads, Social Media Marketing and AI Tools.",
    },
  ];

  const [selectedCourse, setSelectedCourse] = useState(courseTabs[0]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const [students, setStudents] = useState(0);
  const [courses, setCourses] = useState(0);
  const [support, setSupport] = useState(0);

  // ==========================
  // Hero Slider
  // ==========================
  useEffect(() => {
    const slider = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroData.length);
    }, 5000);

    return () => clearInterval(slider);
  }, []);

  // ==========================
  // Counter Animation
  // ==========================
  useEffect(() => {
    let s = 0;
    let c = 0;
    let p = 0;

    const counter = setInterval(() => {
      if (s < 500) {
        s += 10;
        setStudents(s);
      }

      if (c < 25) {
        c += 1;
        setCourses(c);
      }

      if (p < 100) {
        p += 2;
        setSupport(p);
      }

      if (s >= 500 && c >= 25 && p >= 100) {
        clearInterval(counter);
      }
    }, 30);

    return () => clearInterval(counter);
  }, []);

  const hero = heroData[currentSlide];

  return (
    <section
      id="home"
      className="hero-section"
      style={{ background: hero.background }}
    >
      <div className="hero-overlay"></div>

      {/* Floating Icons */}

      <FaReact className="floating react" />
      <FaNodeJs className="floating node" />
      <FaPython className="floating python" />
      <FaDatabase className="floating db" />
      <SiJavascript className="floating js" />
      <SiMongodb className="floating mongo" />
      <SiExpress className="floating express" />

      <div className="container">
        <div className="row align-items-center min-vh-100">
          {/* LEFT SIDE */}

          <div className="col-lg-6">
            <span className="hero-badge">🚀 Welcome To KSquare Softtech</span>
            {/* Course Tabs */}
            <div className="d-flex flex-wrap gap-2 my-4">
              {courseTabs.map((course, index) => (
                <button
                  key={index}
                  className={`btn ${
                    selectedCourse.button === course.button
                      ? "btn-warning"
                      : "btn-outline-light"
                  } rounded-pill px-4`}
                  onClick={() => setSelectedCourse(course)}
                >
                  {course.button}
                </button>
              ))}
            </div>{" "}
            {/* Main Heading */}
            <h1 className="hero-heading">{selectedCourse.heading}</h1>
            {/* Subtitle */}
            <p className="hero-subtitle mt-3">{selectedCourse.subtitle}</p>
            {/* Typewriter */}
            <h2 className="hero-dynamic-text mt-4">
              <span className="text-warning">
                <Typewriter
                  words={heroData.map((item) => item.title)}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={40}
                  delaySpeed={2000}
                />
              </span>
            </h2>
            {/* Buttons */}
            <div className="hero-buttons mt-4">
              <a href="#courses" className="btn btn-warning btn-lg me-3">
                Explore Courses
              </a>

              <button
                type="button"
                className="btn btn-primary btn-lg"
                onClick={openPopup}
              >
                Register Now
              </button>
            </div>
            {/* Highlights */}
            <div className="hero-highlights mt-4">
              <span>✅ Live Projects</span>

              <span>✅ Internship</span>

              <span>✅ Placement Assistance</span>
            </div>
            {/* Counter */}
            <div className="row mt-5 g-3">
              <div className="col-4">
                <div className="hero-stat">
                  <h2>{students}+</h2>
                  <p>Students</p>
                </div>
              </div>

              <div className="col-4">
                <div className="hero-stat">
                  <h2>{courses}+</h2>
                  <p>Courses</p>
                </div>
              </div>

              <div className="col-4">
                <div className="hero-stat">
                  <h2>{support}%</h2>
                  <p>Support</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}

          <div className="col-lg-6 mt-5 mt-lg-0">
            <div className="hero-right">
              <img
                src={hero.image}
                alt={hero.title}
                className="img-fluid hero-main-image"
              />

              <div className="hero-floating-card card-1">
                <FaReact className="me-2 text-info" />
                React JS
              </div>

              <div className="hero-floating-card card-2">
                <FaNodeJs className="me-2 text-success" />
                Node JS
              </div>

              <div className="hero-floating-card card-3">
                <SiMongodb className="me-2 text-success" />
                MongoDB
              </div>

              <div className="hero-floating-card card-4">
                <FaPython className="me-2 text-warning" />
                Python
              </div>

              <div className="hero-floating-card card-5">
                <SiJavascript className="me-2 text-warning" />
                JavaScript
              </div>

              <div className="hero-floating-card card-6">
                <SiExpress className="me-2" />
                Express JS
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
