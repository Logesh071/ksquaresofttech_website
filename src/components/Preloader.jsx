import { useEffect, useState } from "react";

import logo from "../assets/logo.jpeg";

function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  const messages = [
    "🚀 Welcome to KSquare SoftTech",
    "💻 Learn Full Stack Development",
    "🤖 Master Artificial Intelligence",
    "📊 Become a Data Scientist",
    "🐍 Python Programming",
    "🌐 Build Real-Time Projects",
    "🎓 Internship + Certification",
    "💼 Placement Assistance",
    "⭐ Learn Skills • Build Careers"
  ];

  useEffect(() => {
    let value = 0;

    const progressTimer = setInterval(() => {
      value += 1;

      if (value > 100) value = 100;

      setProgress(value);

      if (value === 100) {
        clearInterval(progressTimer);

        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    }, 30);

    const textTimer = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 1600);

    return () => {
      clearInterval(progressTimer);
      clearInterval(textTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <section className="preloader">

      {/* Background Glow */}
      <div className="bg-glow glow-one"></div>
      <div className="bg-glow glow-two"></div>

      {/* Floating Dots */}
      <span className="dot dot1"></span>
      <span className="dot dot2"></span>
      <span className="dot dot3"></span>
      <span className="dot dot4"></span>
      <span className="dot dot5"></span>

      {/* Main Card */}
      <div className="loader-card">

        {/* Logo */}
        <div className="logo-box">
          <img src={logo} alt="KSquare SoftTech" />
        </div>

        {/* Company Name */}
        <h1>KSquare SoftTech</h1>

        {/* Subtitle */}
        <p className="subtitle">
          AI Powered IT Training Institute
        </p>

        {/* Course Badge */}
        <div className="course-badge">
          AI • Full Stack • Python • Data Science
        </div>

        {/* Animated Text */}
        <h3 className="loading-message">
          {messages[messageIndex]}
        </h3>

        {/* Progress Bar */}
        <div className="progress-wrapper">

          <div className="progress-track">

            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            ></div>

          </div>

          <div className="progress-info">

            <span>Loading...</span>

            <span>{progress}%</span>

          </div>

        </div>

        {/* Bottom Text */}

        <p className="footer-text">
          Preparing Your Learning Journey...
        </p>

      </div>

    </section>
  );
}

export default Preloader;