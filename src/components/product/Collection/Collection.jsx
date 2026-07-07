import { useEffect, useRef, useState, useMemo, Fragment } from "react";
import { FiSearch } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
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
import "./Collection.css";

const DESCRIPTION = "Farm fresh and juicy\nPerfect for every kitchen";

const productData = [
  { id: 1, name: "Tomato", category: "Fresh Vegetables", price: 40, image: tomato, description: DESCRIPTION },
  { id: 2, name: "Avocado", category: "Exotic Vegetables", price: 120, image: avacado, description: DESCRIPTION },
  { id: 3, name: "Broccoli", category: "Exotic Vegetables", price: 90, image: broccoli, description: DESCRIPTION },
  { id: 4, name: "Carrot", category: "Fresh Vegetables", price: 50, image: carrot, description: DESCRIPTION },
  { id: 5, name: "Spinach", category: "Fresh Greens", price: 30, image: spinach, description: DESCRIPTION },
  { id: 6, name: "Cucumber", category: "Fresh Vegetables", price: 35, image: cucumber, description: DESCRIPTION },
  { id: 7, name: "Lemon", category: "Fresh Fruits", price: 60, image: lemon, description: DESCRIPTION },
  { id: 8, name: "Capsicum", category: "Fresh Vegetables", price: 80, image: capsicum, description: DESCRIPTION },
  { id: 9, name: "Cauliflower", category: "Fresh Vegetables", price: 45, image: cauliflower, description: DESCRIPTION },
  { id: 10, name: "Potato", category: "Fresh Vegetables", price: 32, image: potato, description: DESCRIPTION },
];

const categories = [
  "All",
  "Fresh Fruits",
  "Fresh Vegetables",
  "Fresh Greens",
  "Exotic Vegetables",
  "Organic Packs",
];

const sortOptions = [
  "Popular",
  "Newest",
  "Price Low → High",
  "Price High → Low",
  "A-Z",
];

export default function Collection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("Popular");

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

  const filteredProducts = useMemo(() => {
    let list = [...productData];

    const q = search.trim().toLowerCase();
    if (q) {
      list = list.filter((p) => p.name.toLowerCase().includes(q));
    }

    if (category !== "All") {
      list = list.filter((p) => p.category === category);
    }

    switch (sort) {
      case "Price Low → High":
        list.sort((a, b) => a.price - b.price);
        break;
      case "Price High → Low":
        list.sort((a, b) => b.price - a.price);
        break;
      case "A-Z":
        list.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Newest":
        list.sort((a, b) => b.id - a.id);
        break;
      default:
        break;
    }
    return list;
  }, [search, category, sort]);
  return (
    <section
      ref={sectionRef}
      className={`harvest-section ${visible ? "show" : ""}`}
    >
      <div className="search-top">
        <div className="search-bar">
          <FiSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search brocoli, cauliflower, potato"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="search-actions">
          <div className="sort-wrap">
            <label>Sort by :</label>
            <select value={sort} onChange={(e) => setSort(e.target.value)}>
              {sortOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <button className="whatsapp-btn">
            <FaWhatsapp /> Whatsapp Bulk Order
          </button>
        </div>
      </div>

      <div className="category-pills">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`pill ${category === cat ? "active" : ""}`}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {filteredProducts.length === 0 ? (
        <div className="no-products">
          <h3>No Products Available</h3>
          <p>Try another search or category.</p>
        </div>
      ) : (
        <div className="product-grid">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
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
                {product.description.split("\n").map((line, i, arr) => (
                  <Fragment key={i}>
                    {line}
                    {i < arr.length - 1 && <br />}
                  </Fragment>
                ))}
              </p>

              <div className="product-price">₹{product.price} / kg</div>

              <button>Enquire Now →</button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}