import {
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import logo from "../../../assets/logo.png";
import slide from "../../../assets/slide.png";
import leaf from "../../../assets/leaf.png";
import "./FooterSection.css";

const quickLinks = ["Home", "About us", "Products", "How it Works", "FAQ", "Contact us"];
const produceLinks = [
  "Fresh Fruits",
  "Vegetables",
  "Leaf Greens",
  "Organic Packs",
  "Bulk Orders",
  "Seasonal Produce",
];

const contactRows = [
  { icon: <FaPhoneAlt />, text: "+91 8946074588" },
  { icon: <FaEnvelope />, text: "Hello@imperfections.com" },
  { icon: <FaMapMarkerAlt />, text: "Kotagiri, The Nilgiris Tamilnadu, India" },
  { icon: <FaClock />, text: "Mon - Sat : 7:00 am - 6.00 pm" },
];

export default function FooterSection() {
  return (
    <footer className="ft-footer">
      <img src={leaf} alt="" className="ft-corner ft-corner-left" />
      <img src={leaf} alt="" className="ft-corner ft-corner-right" />

      <div className="ft-container">
        <div className="ft-grid">
          <div className="ft-col ft-brand">
            <img src={logo} alt="Imperfection Traders" className="ft-logo" />
            <img src={slide} alt="" className="ft-divider ft-divider-brand" />
            <p className="ft-desc">
              Bringing fresh fruits, vegetables and wholesale produce directly
              from Nilgiri farms to homes, businesses and retailers.
            </p>
            <div className="ft-socials">
              <a href="#" className="ft-social-icon" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className="ft-social-icon" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
              <a href="#" className="ft-social-icon" aria-label="Mail">
                <FaEnvelope />
              </a>
            </div>
          </div>

          <div className="ft-col">
            <h4 className="ft-heading">QUICK LINKS</h4>
            <img src={slide} alt="" className="ft-divider ft-divider-col" />
            <ul className="ft-list">
              {quickLinks.map((item) => (
                <li key={item} className="ft-list-item">
                  <span className="ft-leaf-bullet">🍃</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="ft-col">
            <h4 className="ft-heading">OUR PRODUCE</h4>
            <img src={slide} alt="" className="ft-divider ft-divider-col" />
            <ul className="ft-list">
              {produceLinks.map((item) => (
                <li key={item} className="ft-list-item">
                  <span className="ft-leaf-bullet">🍃</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="ft-col ft-col-last">
            <h4 className="ft-heading">OUR CONTACTS</h4>
            <img src={slide} alt="" className="ft-divider ft-divider-col" />
            <ul className="ft-contact-list">
              {contactRows.map((row, i) => (
                <li key={i} className="ft-contact-row">
                  <span className="ft-contact-icon">{row.icon}</span>
                  <span className="ft-contact-text">{row.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="ft-cta">
          <p className="ft-cta-text">
            <span className="ft-cta-emoji">🌿</span> Ready to order? We
            respond within minutes on WhatsApp.
          </p>
          <a href="#" className="ft-cta-btn">
            <FaWhatsapp className="ft-cta-btn-icon" />
            Chat on WhatsApp
          </a>
        </div>

        <div className="ft-legal">
          <p className="ft-legal-left">
            © 2026 Imperfection Traders. All rights reserved.
          </p>
          <p className="ft-legal-right">
            Privacy Policy • Terms of Use • Made with 🍃 in Erode
          </p>
        </div>
      </div>
    </footer>
  );
}