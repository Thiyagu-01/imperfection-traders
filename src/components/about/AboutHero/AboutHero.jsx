import leaf from "../../../assets/leaf.png";
import "./AboutHero.css";

export default function AboutHero() {
  return (
    <section className="aboutHero">

      <img
        src={leaf}
        alt=""
        className="aboutHeroLeaf left"
      />

      <img
        src={leaf}
        alt=""
        className="aboutHeroLeaf right"
      />

      <div className="aboutHeroContent">

        <span className="aboutHeroLabel">
          ABOUT US
        </span>

        <div className="aboutHeroDivider">
          <span></span>
          ✤
          <span></span>
        </div>

        <h1>Know More About Us</h1>

        <p>
          For over 30 years, Imperfection Traders has been
          connecting the highland farms fresh to the kitchens.
        </p>

      </div>

    </section>
  );
}