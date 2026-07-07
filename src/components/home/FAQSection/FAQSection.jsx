import { useState, useEffect, useRef } from "react";
import { FiChevronRight } from "react-icons/fi";
import slide from "../../../assets/slide.png";
import faq from "../../../assets/faq.png";
import "./FAQSection.css";

const faqs = [
  {
    question: "Do you deliver bulk wholesale orders?",
    answer:
      "Yes, we supply restaurants, hotels, retailers and businesses with flexible bulk quantities and reliable delivery.",
  },
  {
    question: "How can I place an order?",
    answer:
      "Simply enquire through our website and our team will contact you immediately.",
  },
  {
    question: "Do you offer same day delivery?",
    answer:
      "Yes, based on location and availability we provide same day delivery support.",
  },
  {
    question: "Can I order custom quantities?",
    answer:
      "Yes, we provide customized order quantities based on your business requirements.",
  },
];

export default function FAQSection() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
  return (
    <section
      ref={sectionRef}
      className={`faq-section ${visible ? "show" : ""}`}
    >
      <div className="faq-header">
        <div className="faq-top">
          <span className="line"></span>
          <span className="small-heading">🍃 HELP CENTER</span>
          <span className="line"></span>
        </div>

        <h2>Frequently Asked Questions</h2>

        <p>
          Everything You Need to know before placing
          <br />
          your fresh produce orders
        </p>
      </div>

      <div className="faq-main">

        <div className="faq-left">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="faq-item"
              onClick={() => setActive(index)}
            >
              <div className="faq-question">
                <span>🍃 {item.question}</span>

                <div
                  className={`faq-icon ${
                    active === index ? "rotate" : ""
                  }`}
                >
                  <FiChevronRight />
                </div>
              </div>

              <div
                className={`faq-answer-wrapper ${
                  active === index ? "open" : ""
                }`}
              >
                <div className="faq-answer">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-card">

          <img src={faq} alt="" className="faq-image" />

          <h3>Need Help With Orders</h3>

          <div className="faq-divider">
            <img src={slide} alt="" />
          </div>

          <p>
            Our team helps restaurants, hotels and wholesale
            buyers with custom requirements
          </p>

          <button>Enquire Now →</button>

        </div>

      </div>
    </section>
  );
}