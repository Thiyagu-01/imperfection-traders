import heroImg from "../../../assets/hero img.png";
import "./HeroSection.css";

const Icon = {
  Sprout: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"
      strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M7 20h10" /><path d="M10 20c5.5-2.5.8-6.4 3-10" />
      <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8Z" />
      <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2Z" />
    </svg>
  ),
  Arrow: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
    </svg>
  ),
  Leaf: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
      strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6" />
    </svg>
  ),
  Truck: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
      strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M14 18V6a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
      <circle cx="6.5" cy="18.5" r="2.5" /><circle cx="16.5" cy="18.5" r="2.5" />
    </svg>
  ),
  Utensils: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
      strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M3 2v7c0 1.1.9 2 2 2a2 2 0 0 0 2-2V2" /><path d="M7 2v20" />
      <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
    </svg>
  ),
  Shield: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
      strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
};

const FEATURES = [
  { icon: Icon.Leaf, title: "Farm Fresh", sub: "Picked at peak freshness" },
  { icon: Icon.Truck, title: "Same Day Delivery", sub: "Fast and reliable delivery" },
  { icon: Icon.Utensils, title: "Savoured Flavours", sub: "Fast and reliable delivery" },
  { icon: Icon.Shield, title: "100% Organic", sub: "Pure, natural & chemical free" },
];

export default function HeroSection() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        <div className="hero-left">
          <span className="hero-badge">
            <Icon.Sprout className="hero-badge-icon" width="13" height="13" />
            Freshly Harvested Daily
          </span>

          <h1 className="hero-title">
            Fresh Organic Produce,
            <br />
            <span className="hero-title-italic">Delivered Daily.</span>
          </h1>

          <p className="hero-desc">
            Naturally grown produce sourced directly from{" "}
            <br className="hero-desc-br" />
            trusted farms and delivered with freshness.
          </p>

          <div className="hero-actions">
            <button className="hero-btn hero-btn--primary" onClick={() => scrollTo("#fresh-products")}>
              Shop Fresh <Icon.Arrow width="17" height="17" />
            </button>
            <button className="hero-btn hero-btn--ghost" onClick={() => scrollTo("#product")}>
              Explore Products
            </button>
          </div>

          <div className="hero-trust">
            <div className="hero-avatars">
              <img src="https://i.pravatar.cc/80?img=12" alt="" />
              <img src="https://i.pravatar.cc/80?img=32" alt="" />
              <img src="https://i.pravatar.cc/80?img=5" alt="" />
            </div>
            <span className="hero-trust-text">
              Trusted by <strong>5000+</strong> happy customers
            </span>
          </div>
        </div>

        <div className="hero-right">
          <img className="hero-image" src={heroImg} alt="Fresh produce" />
        </div>
      </div>

      <div className="hero-feature-wrap">
        <div className="hero-feature-strip">
          {FEATURES.map(({ icon: I, title, sub }, i) => (
            <div className="hero-feature-card" key={title}>
              <span className="hero-feature-icon"><I width="18" height="18" /></span>
              <div className="hero-feature-text">
                <p className="hero-feature-title">{title}</p>
                <p className="hero-feature-sub">{sub}</p>
              </div>
              {i < FEATURES.length - 1 && <span className="hero-feature-divider" />}
            </div>
          ))}
        </div>
        <div className="hero-feature-stroke" />
      </div>
    </section>
  );
}