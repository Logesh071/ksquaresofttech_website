import { useEffect, useState } from "react";

function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const total =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress = (window.scrollY / total) * 100;

      setWidth(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="progress-bar-scroll" style={{ width: `${width}%` }}></div>
  );
}

export default ScrollProgress;
