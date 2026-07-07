import { useEffect, useRef, useState } from "react";
import {
  Tractor,
  Truck,
  Package,
  Leaf,
  BadgeDollarSign,
  Award,
} from "lucide-react";
import slide from "../../../assets/slide.png";
import "./WhyChooseSection.css";

const features = [
  {
    title: "Farm Direct Sourcing",
    desc: "Sourced directly from trusted farms ensuring fresher produce.",
    icon: <Tractor size={30} strokeWidth={1.7} />,
  },
  {
    title: "Fast & Reliable Delivery",
    desc: "Same day or scheduled delivery to ensure freshness.",
    icon: <Truck size={30} strokeWidth={1.7} />,
  },
  {
    title: "Bulk Supply Solutions",
    desc: "Wholesale and bulk supply for businesses and retailers.",
    icon: <Package size={30} strokeWidth={1.7} />,
  },
  {
    title: "Naturally Fresh",
    desc: "No chemicals. No compromise. Fresh and safe produce.",
    icon: <Leaf size={30} strokeWidth={1.7} />,
  },
  {
    title: "Better Prices",
    desc: "No middlemen, direct farm prices for better value.",
    icon: <BadgeDollarSign size={30} strokeWidth={1.7} />,
  },
  {
    title: "Premium Quality",
    desc: "Strict quality checks to deliver only the best.",
    icon: <Award size={30} strokeWidth={1.7} />,
  },
];

export default function WhyChooseSection() {
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
      className={`why-section ${visible ? "show" : ""}`}
    >

      <div className="why-header">
        <div className="why-top">
          <span className="header-line"></span>

          <span className="why-label">
            🍃 WHY CHOOSE US
          </span>

          <span className="header-line"></span>
        </div>

        <h2>Why Choose Imperfection Traders</h2>

        <p>
          We are committed to delivering farm fresh produce
          with quality you can trust and service you can rely on
        </p>
      </div>

      <div className="why-grid">
        {features.map((item, index) => (
          <div
            key={index}
            className="why-card"
            style={{
              animationDelay: `${index * 0.15}s`,
            }}
          >
            <div className="icon-circle">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <div className="divider-image">
              <img src={slide} alt="divider" />
            </div>

            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="why-section-stroke"></div>
    </section>
  );
}