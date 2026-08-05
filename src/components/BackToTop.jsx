import { useEffect, useState } from "react";

function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {show && (
        <button
          className="back-top btn btn-primary"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          <i className="bi bi-arrow-up"></i>
        </button>
      )}
    </>
  );
}

export default BackToTop;
