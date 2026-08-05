import { useEffect, useState } from "react";
import "./Popup.css";
import popupPoster from "../assets/Popup/workshop_fsd.jpeg"; 

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
    <div className="popup-overlay">
      <div className="popup-container">

        <button
          className="popup-close"
          onClick={closePopup}
        >
          ×
        </button>

        <img
          src={popupPoster}
          alt="Workshop Poster"
          className="popup-image"
        />

      </div>
    </div>
  );
}

export default Popup;