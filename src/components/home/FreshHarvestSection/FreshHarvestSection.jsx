import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import tomato from "../../../assets/tomato.png";
import avacado from "../../../assets/avacado.png";
import broccoli from "../../../assets/broccoli.png";
import carrot from "../../../assets/carrot.png";
import spinach from "../../../assets/spinach.png";
import cucumber from "../../../assets/cucumber.png";
import lemon from "../../../assets/lemon.png";
import capsicum from "../../../assets/capsicum.png";
import cauliflower from "../../../assets/cauliflower.png";
import potato from "../../../assets/potato.png";
import slide from "../../../assets/slide.png";
import leaf from "../../../assets/leaf.png";
import "./FreshHarvestSection.css";

const products = [
  { name: "Tomato", image: tomato },
  { name: "Avocado", image: avacado },
  { name: "Broccoli", image: broccoli },
  { name: "Carrot", image: carrot },
  { name: "Spinach", image: spinach },
  { name: "Cucumber", image: cucumber },
  { name: "Lemon", image: lemon },
  { name: "Capsicum", image: capsicum },
  { name: "Cauliflower", image: cauliflower },
  { name: "Potato", image: potato },
];

export default function FreshHarvestSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const handleBrowseProducts = () => {
    navigate("/product");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={sectionRef}
      className={`harvest-section ${visible ? "show" : ""}`}
    >
      <img src={leaf} alt="" className="side-leaf left-leaf" />
      <img src={leaf} alt="" className="side-leaf right-leaf" />

      <div className="harvest-header">
        <div className="harvest-top">
          <span className="header-line"></span>

          <span className="harvest-label">
            🍃 FRESH HARVEST
          </span>

          <span className="header-line"></span>
        </div>

        <h2>What’s Fresh & Available</h2>

        <p>
          Handpicked Produce, Sourced directly from farms and
          available for delivery
        </p>
      </div>

      <div className="product-grid">
        {products.map((product, index) => (
          <div
            key={index}
            className="product-card"
            style={{ animationDelay: `${index * 0.12}s` }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />

            <div className="divider-image">
              <img src={slide} alt="divider" />
            </div>

            <h3>{product.name}</h3>

            <p>
              Farm fresh and juicy
              <br />
              Perfect for every kitchen
            </p>

            <button>Enquire Now →</button>
          </div>
        ))}
      </div>

      <div className="browse-button">
        <button onClick={handleBrowseProducts}>
          Browse All Products →
        </button>
      </div>

      <div className="harvest-stroke"></div>
    </section>
  );
}