import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "./TestimonialsSection.css";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Home Buyer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "Farm fresh produce directly to our home. Packaging is neat and vegetables stay fresh much longer.",
  },
  {
    name: "Arjun Kumar",
    role: "Restaurant Owner",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "Best quality vegetables delivered fresh every time. We order weekly and they never disappoint.",
  },
  {
    name: "Rahul Verma",
    role: "Retail Buyer",
    image: "https://randomuser.me/api/portraits/men/51.jpg",
    review:
      "Reliable service and premium quality produce. Definitely our go-to supplier for bulk orders.",
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // desktop active center
  const [activeIndex, setActiveIndex] = useState(1);

  // mobile slider
  const [mobileIndex, setMobileIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const nextDesktop = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevDesktop = () => {
    setActiveIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextMobile = () => {
    setMobileIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevMobile = () => {
    setMobileIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const getCardClass = (index) => {
    if (index === activeIndex) return "card-center";

    if (
      index ===
      (activeIndex - 1 + testimonials.length) % testimonials.length
    ) {
      return "card-left";
    }
    return "card-right";
  };
  return (
    <section
      ref={sectionRef}
      className={`testimonials-section ${visible ? "show" : ""}`}
    >

      <div className="testimonials-header">
        <div className="testimonials-top">
          <span className="line"></span>

          <span className="small-heading">
            🍃 SIMPLE ORDER PROCESS
          </span>

          <span className="line"></span>
        </div>

        <h2>Loved By Our Happy Customers</h2>

        <p>
          Fresh Produce trusted by homes, restaurants and
          wholesale buyers every day
        </p>
      </div>

      <div className="desktop-wrapper">

        <button className="desktop-arrow left-arrow"
          onClick={prevDesktop}>
          <FiChevronLeft />
        </button>

        <div className="desktop-carousel">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className={`testimonial-card ${getCardClass(index)}`}
            >

              <div className="quote-mark">“</div>

              <div className="stars">★★★★★</div>

              <p className="review-text">
                "{item.review}"
              </p>

              <div className="user-info">

                <img src={item.image} alt="" />

                <div>
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                </div>

              </div>

            </div>
          ))}

        </div>

        <button className="desktop-arrow right-arrow"
          onClick={nextDesktop}>
          <FiChevronRight />
        </button>

      </div>

      <div className="mobile-wrapper">

        <button className="mobile-arrow"
          onClick={prevMobile}>
          <FiChevronLeft />
        </button>

        <div className="testimonial-card mobile-card">

          <div className="quote-mark">“</div>

          <div className="stars">★★★★★</div>

          <p className="review-text">
            "{testimonials[mobileIndex].review}"
          </p>

          <div className="user-info">

            <img
              src={testimonials[mobileIndex].image}
              alt=""
            />

            <div>
              <h4>{testimonials[mobileIndex].name}</h4>
              <span>{testimonials[mobileIndex].role}</span>
            </div>

          </div>

        </div>

        <button className="mobile-arrow"
          onClick={nextMobile}>
          <FiChevronRight />
        </button>

      </div>

      <div className="trusted-row">
        🍃 Trusted by <strong>500+ Happy Customers</strong> 🍃
      </div>

      <div className="testimonial-stroke"></div>
    </section>
  );
}