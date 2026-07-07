import "./AnnouncementBar.css";

const announcements = [
  { id: 1, icon: "🚚", text: "Free Delivery Across India on Orders Above ₹499" },
  { id: 2, icon: "🌿", text: "100% Organic Farm Fresh Produce" },
  { id: 3, icon: "🏪", text: "Wholesale Orders Available For Businesses" },
];

const AnnouncementItem = ({ icon, text }) => (
  <span className="announcement-item">
    <span className="announcement-icon">{icon}</span>
    {text}
  </span>
);

const AnnouncementBar = () => {
  return (
    <div className="announcement-bar" aria-label="Site announcements">
      <div className="announcement-track">
        {[...Array(4)].map((_, setIndex) =>
          announcements.map(({ id, icon, text }) => (
            <AnnouncementItem key={`${setIndex}-${id}`} icon={icon} text={text} />
          ))
        )}
      </div>
    </div>
  );
};

export default AnnouncementBar;
