import { useEffect, useRef, useState } from "react";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import image2 from "../../../assets/image2.png";
import frame1 from "../../../assets/frame1.png";
import "./Farmers.css";

const CHECKLIST = [
  "Direct sourcing from trusted farms",
  "Sustainable and natural farming practices",
  "Better income for our farming communities",
  "Zero unnecessary middlemen",
];

export default function Farmers() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(entry.target); // fire once
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return (
    <section ref={sectionRef} className={`farmers${inView ? " is-visible" : ""}`}>
      <div className="farmers__container">
        <div className="farmers__grid">
          <div className="farmers__content">
            <span className="farmers__label">
              <span className="farmers__label-line" />
              🍃 OUR FARMERS
              <span className="farmers__label-line" />
            </span>

            <h2 className="farmers__heading">
              The People Behind Every Harvest
            </h2>

            <p className="farmers__text">
              Every vegetable and fruit you order begins with hardworking
              local farmers who trust us.
            </p>

            <ul className="farmers__list">
              {CHECKLIST.map((item) => (
                <li key={item} className="farmers__list-item">
                  <FaCheckCircle className="farmers__check" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="farmers__media">
            <img
              src={image2}
              alt="Farmer standing among rows of crops"
              className="farmers__image"
            />
          </div>
        </div>

        <div className="farmers__cta" style={{ backgroundImage: `url(${frame1})` }}>
          <div className="farmers__cta-inner">
            <h3 className="farmers__cta-heading">Ready to Experience Freshness?</h3>
            <p className="farmers__cta-text">
              Order Premium Produce Directly From Imperfection Traders
            </p>

            <div className="farmers__cta-actions">
              <button type="button" className="btn btn--filled">
                Shop Fresh
                <FaArrowRight className="btn__icon" />
              </button>
              <button type="button" className="btn btn--ghost">
                Explore Products
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}