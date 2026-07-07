import leaf from "../../../assets/leaf.png";
import "../../product/ProductHero/ProductHero.css";

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
          CONTACT US
        </span>

        <div className="productHeroDivider">
          <span></span>
          <span className="flower">✤</span>
          <span></span>
        </div>

        <h1>Let's Get In Touch</h1>

        <p>
          Need Fresh Produce for your home, business or bulk order? our farm team is ready to help you
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