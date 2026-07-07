import { useRef, useEffect } from "react";
import fruit from "../../../assets/fruit.png";
import vegetable from "../../../assets/vegetable.png";
import leafy from "../../../assets/leafy.png";
import wholesale from "../../../assets/Wholesale.png";
import organic from "../../../assets/organicpacks.png";
import "./CategorySection.css";

const cards = [
  {
    title: "Fresh Fruits",
    desc: "Picked at peak ripeness, delivered with care",
    image: fruit,
    large: true,
    delay: 0.8,
  },
  {
    title: "Fresh Vegetable",
    desc: "Farm fresh vegetables delivered daily to your doorstep",
    image: vegetable,
    large: true,
    delay: 1.1,
  },
  {
    title: "Leafy Greens",
    desc: "Clean, crisp and full of nutrients",
    image: leafy,
    delay: 1.4,
  },
  {
    title: "Organic Packs",
    desc: "Homepicked goodness packed for your family",
    image: organic,
    delay: 1.7,
  },
  {
    title: "Wholesale",
    desc: "Reliable supply for business",
    image: wholesale,
    delay: 2.0,
  },
];

export default function CategorySection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("cat-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <section className="category-section" ref={sectionRef}>

      <div className="category-header reveal-header">

        <div className="discover">
          <span className="line"></span>

          <span className="discover-center">
            🍃 DISCOVER
          </span>

          <span className="line"></span>
        </div>

        <h2>Shop By Categories</h2>

        <p>
          Discover our wide range of exotic vegetables, freshly sourced
          from the cool Nilgiri highlands.
        </p>

      </div>

      <div className="grid-top">
        {cards.slice(0, 2).map((card, index) => (
          <Card key={index} {...card} large />
        ))}
      </div>

      <div className="grid-bottom">
        {cards.slice(2).map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>

      <div className="category-bottom-stroke" />

    </section>
  );
}

function Card({ title, desc, image, large, delay }) {
  return (
    <div
      className={`category-card ${large ? "large" : "small"} reveal`}
      style={{
        backgroundImage: `url(${image})`,
        animationDelay: `${delay}s`,
      }}
    >
      <div className="overlay"></div>

      <div className="card-content">

        <div className="card-top">
          <span className="leaf">🍃</span>
          <span className="small-line"></span>
        </div>

        <h3>{title}</h3>

        <p>{desc}</p>

        <button>Explore now →</button>

      </div>
    </div>
  );
}