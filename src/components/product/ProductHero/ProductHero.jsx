import leaf from "../../../assets/leaf.png";
import "./ProductHero.css";

export default function ProductHero() {
  return (
    <section className="productHero">

      <img
        src={leaf}
        alt=""
        className="productHeroLeaf left"
      />

      <div className="productHeroContent">

        <span className="productHeroLabel">
          OUR COLLECTION
        </span>

        <div className="productHeroDivider">
          <span></span>
          <span className="flower">✤</span>
          <span></span>
        </div>

        <h1>What's Fresh & Available</h1>

        <p>
          Handpicked Produce, Sourced directly from farms and
          available for delivery
        </p>

      </div>

      <img
        src={leaf}
        alt=""
        className="productHeroLeaf right"
      />

    </section>
  );
}