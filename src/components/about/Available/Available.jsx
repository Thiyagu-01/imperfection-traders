import { useEffect, useRef, useState } from "react";
import {
  FaLeaf,
  FaHandshake,
  FaTruck,
  FaStar,
} from "react-icons/fa";
import "./Available.css";

const features = [
  {
    icon: <FaLeaf />,
    title: "Freshness First",
    description:
      "We deliver farm fresh produce picked at the right time, ensuring maximum freshness and nutrition.",
  },
  {
    icon: <FaHandshake />,
    title: "Fair Farmer Pricing",
    description:
      "We partner directly with farmers and ensure they receive fair pricing for every harvest.",
  },
  {
    icon: <FaTruck />,
    title: "Fast & Reliable Delivery",
    description:
      "From farm to your doorstep with careful handling and quick delivery every single day.",
  },
  {
    icon: <FaStar />,
    title: "Premium Quality",
    description:
      "Every product is carefully selected to meet the highest quality standards before delivery.",
  },
];

export default function Available() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0.25,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  return (
    <section
      ref={sectionRef}
      className={`available ${visible ? "show" : ""}`}
    >

      <div className="availableHeader">

        <div className="availableTop">

          <span className="availableLine"></span>

          <span className="availableLabel">
            🍃 WHY CHOOSE US
          </span>

          <span className="availableLine"></span>

        </div>

        <h2>Why Customers Choose Us</h2>

        <p>
          We combine freshness, fair farming and premium quality
          to bring the best vegetables directly to your home.
        </p>

      </div>

      <div className="availableGrid">

        {features.map((item, index) => (

          <div
            key={index}
            className="availableCard"
            style={{
              animationDelay: `${index * 0.18}s`,
            }}
          >

            <div className="availableIcon">

              {item.icon}

            </div>

            <h3>{item.title}</h3>

            <div className="availableDivider">

              <span></span>

              ✤

              <span></span>

            </div>

            <p>{item.description}</p>

          </div>

        ))}

      </div>

      <div className="availableBottomStroke"></div>

    </section>
  );
}