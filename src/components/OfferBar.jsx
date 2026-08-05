function OfferBar() {
  const offers = [
    "🔥 FREE AI Enhanced Full Stack Development Workshop",
    "🎁 FREE Certificate for All Participants",
    "💼 Internship + Live Projects Included",
    "🤖 AI • React • Node.js • MongoDB • Python",
    "🏆 100% Placement Assistance",
    "🎓 Beginner to Advanced Training",
    "⏳ Limited Seats - Register Today",
    "📞 Call / WhatsApp: +91 8807754570",
  ];

  return (
    <div className="offer-bar">
      <div className="offer-slider">
        {[...offers, ...offers].map((offer, index) => (
          <span key={index} className="offer-item">
            {offer}
          </span>
        ))}
      </div>
    </div>
  );
}

export default OfferBar;
