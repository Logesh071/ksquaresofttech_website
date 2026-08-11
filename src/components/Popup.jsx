import { useEffect, useState } from "react";
import "./Popup.css";
import popupPoster from "../assets/Popup/Independence.png";

function Popup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="popup-overlay" onClick={closePopup}>
      <div
        className="popup-container"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="popup-close"
          onClick={closePopup}
          aria-label="Close popup"
        >
          ×
        </button>

        <img
          src={popupPoster}
          alt="KSquare Softtech Independence Day"
          className="popup-image"
        />
      </div>
    </div>
  );
}

export default Popup;