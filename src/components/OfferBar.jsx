import React from "react";

function IndianFlag() {
  return (
    <svg
      width="28"
      height="20"
      viewBox="0 0 900 600"
      xmlns="http://www.w3.org/2000/svg"
      className="india-flag"
      aria-label="Indian Flag"
    >
      {/* Saffron */}
      <rect width="900" height="200" fill="#FF9933" />

      {/* White */}
      <rect y="200" width="900" height="200" fill="#FFFFFF" />

      {/* Green */}
      <rect y="400" width="900" height="200" fill="#138808" />

      {/* Ashoka Chakra */}
      <circle
        cx="450"
        cy="300"
        r="92"
        fill="none"
        stroke="#000080"
        strokeWidth="12"
      />

      {/* Chakra spokes */}
      <g
        stroke="#000080"
        strokeWidth="6"
        transform="translate(450 300)"
      >
        <line y1="-92" y2="92" />
        <line x1="-92" y1="0" x2="92" y2="0" />

        <line
          x1="-65"
          y1="-65"
          x2="65"
          y2="65"
        />

        <line
          x1="-65"
          y1="65"
          x2="65"
          y2="-65"
        />

        <line
          x1="-24"
          y1="-89"
          x2="24"
          y2="89"
        />

        <line
          x1="-24"
          y1="89"
          x2="24"
          y2="-89"
        />

        <line
          x1="-89"
          y1="-24"
          x2="89"
          y2="24"
        />

        <line
          x1="-89"
          y1="24"
          x2="89"
          y2="-24"
        />
      </g>
    </svg>
  );
}

function OfferBar() {
  const offers = [
    "Freedom to Learn • Freedom to Create • Freedom to Grow",
    "Happy Independence Day 2026",
    "KSquare Softtech 🚀",
    "📞 8807754570",
    "✉️ info@ksquaresofttech.org",
  ];

  return (
    <div className="offer-bar">
      <div className="offer-slider">
        {[...offers, ...offers].map((offer, index) => (
          <span key={index} className="offer-item">
            {index % offers.length === 0 && <IndianFlag />}

            {offer}

            {index % offers.length === offers.length - 1 && (
              <IndianFlag />
            )}
          </span>
        ))}
      </div>
    </div>
  );
}

export default OfferBar;