import { useEffect, useRef, useState } from "react";
import {
  ShoppingBasket,
  MessageCircle,
  Package,
  Truck
} from "lucide-react";
import "./Orderprocess.css";

const steps = [
  {
    number: "01",
    title: "Naturally Fresh",
    desc: "No chemicals. No compromise. Just naturally grown healthy produce.",
    icon: <ShoppingBasket size={42} strokeWidth={1.7} />
  },
  {
    number: "02",
    title: "Quick Enquiry",
    desc: "Message us directly and confirm your required fresh products instantly.",
    icon: <MessageCircle size={42} strokeWidth={1.7} />
  },
  {
    number: "03",
    title: "Pack & Process",
    desc: "We carefully pack every produce ensuring premium freshness quality.",
    icon: <Package size={42} strokeWidth={1.7} />
  },
  {
    number: "04",
    title: "Fast Delivery",
    desc: "Your fresh vegetables reach your doorstep safely and on time.",
    icon: <Truck size={42} strokeWidth={1.7} />
  }
];

export default function Orderprocess() {
  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
  return (
    <section
      ref={sectionRef}
      className={`process-section ${show ? "show" : ""}`}
    >

      <div className="process-header">

        <div className="process-top">
          <span className="header-line"></span>

          <span className="process-label">
            🍃 SIMPLE ORDER PROCESS
          </span>

          <span className="header-line"></span>
        </div>

        <h2>From Farm To Your Doorstep</h2>

        <p>
          Fresh Produce Delivered Through a Simple and
          <br />
          Reliable Process
        </p>

      </div>

      <div className="process-grid">

        {steps.map((step, index) => (
          <div
            key={index}
            className="process-card"
            style={{ animationDelay: `${index * 0.35}s` }}
          >

            <div className="circle-wrap">

              <div className="step-number">
                {step.number}
              </div>

              <div className="outer-circle">

                <div className="inner-circle">
                  {step.icon}
                </div>

              </div>

              {index !== 3 && (
                <div className="connector-line"></div>
              )}

            </div>

            <h3>{step.title}</h3>

            <div className="small-divider">
              ✤
            </div>

            <p>{step.desc}</p>

          </div>
        ))}

      </div>

      <div className="process-button">
        <button>Start Ordering Now →</button>
      </div>

      <div className="section-stroke"></div>

    </section>
  );
}