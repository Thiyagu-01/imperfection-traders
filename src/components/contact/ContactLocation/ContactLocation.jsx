import { useEffect, useRef, useState } from "react";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaTruck,
  FaLeaf,
  FaArrowRight
} from "react-icons/fa";
import "./ContactLocation.css";

export default function ContactLocation() {
  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
  return (
    <section
      ref={sectionRef}
      className={`contactLocation ${show ? "show" : ""}`}
    >

      <div className="contactCards">

        <div className="contactCard">

          <div className="contactIcon">
            <FaWhatsapp />
          </div>

          <h3>WhatsApp</h3>

          <div className="cardDivider">
            <span></span>
            ✤
            <span></span>
          </div>

          <p>
            Fastest response — usually
            <br />
            within minutes.
          </p>

          <h4>+91 8946975666</h4>

          <a
            href="https://wa.me/918946975666"
            target="_blank"
            rel="noreferrer"
            className="contactBtn"
          >
            Chat Now
            <FaArrowRight />
          </a>

        </div>

        <div className="contactCard">

          <div className="contactIcon">
            <FaPhoneAlt />
          </div>

          <h3>Call Us</h3>

          <div className="cardDivider">
            <span></span>
            ✤
            <span></span>
          </div>

          <p>
            Speak directly with us for
            <br />
            quick assistance.
          </p>

          <h4>+91 8946975666</h4>

          <a
            href="tel:+918946975666"
            className="contactBtn"
          >
            Call Now
            <FaArrowRight />
          </a>

        </div>

        <div className="contactCard">

          <div className="contactIcon">
            <FaEnvelope />
          </div>

          <h3>Email Us</h3>

          <div className="cardDivider">
            <span></span>
            ✤
            <span></span>
          </div>

          <p>
            Send us your enquiries anytime.
            <br />
            We'll get back quickly.
          </p>

          <h4>info@imperfectiontraders.com</h4>

          <a
            href="mailto:info@imperfectiontraders.com"
            className="contactBtn"
          >
            Email Now
            <FaArrowRight />
          </a>

        </div>

      </div>

      <div className="contactInfo">

        <div className="infoBox">

          <div className="infoIcon">
            <FaMapMarkerAlt />
          </div>

          <div>

            <h5>Our Location</h5>

            <p>
              Kotagiri, The Nilgiris
              <br />
              Tamil Nadu - 643217
            </p>

          </div>

        </div>

        <div className="infoBox">

          <div className="infoIcon">
            <FaClock />
          </div>

          <div>

            <h5>Working Hours</h5>

            <p>
              Mon - Sat : 7 AM - 6 PM
              <br />
              Sunday : Closed
            </p>

          </div>

        </div>

        <div className="infoBox">

          <div className="infoIcon">
            <FaTruck />
          </div>

          <div>

            <h5>Delivery Area</h5>

            <p>
              We deliver across
              Tamil Nadu & nearby districts.
            </p>

          </div>

        </div>

      </div>

      <div className="locationHeading">

        <div className="headingTop">

          <span></span>

          <p>
            <FaLeaf />
            LOCATION
          </p>

          <span></span>

        </div>

        <h2>
          Find Our Farm Location
        </h2>

        <div className="headingDivider">
          ✤
        </div>

      </div>

      <div className="mapWrapper">

        <iframe
          title="Imperfection Traders Location"
          src="https://www.google.com/maps?q=Kotagiri,The+Nilgiris,Tamil+Nadu&output=embed"
          loading="lazy"
          allowFullScreen
        ></iframe>

      </div>

    </section>
  );
}