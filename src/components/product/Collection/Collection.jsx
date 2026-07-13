import { useEffect, useRef, useState, useMemo, Fragment } from "react";
import { FiSearch } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import slide from "../../../assets/slide.png";
import productData from "../../../data/products.json";
import "./Collection.css";

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
  "A-Z",
];

export default function Collection() {
  const sectionRef = useRef(null);

  const [visible, setVisible] = useState(false);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("Popular");
  const [category, setCategory] = useState("All");

  const [searchParams] = useSearchParams();

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

  useEffect(() => {
    const urlCategory = searchParams.get("category");
    const storedCategory = sessionStorage.getItem("selectedCategory");

    if (urlCategory) {
      setCategory(urlCategory);
    } else if (storedCategory) {
      setCategory(storedCategory);
    } else {
      setCategory("All");
    }

    if (window.location.hash === "#categories") {
      setTimeout(() => {
        const section = document.getElementById("categories");

        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 200);
    }
  }, [searchParams]);
    const filteredProducts = useMemo(() => {
    let list = [...productData];

    const query = search.trim().toLowerCase();

    // Search Filter
    if (query) {
      list = list.filter((product) =>
        product.name.toLowerCase().includes(query)
      );
    }

    // Category Filter
    if (category !== "All") {
      list = list.filter(
        (product) => product.category === category
      );
    }

    // Sorting
    switch (sort) {
      case "Newest":
        list.sort((a, b) => b.id - a.id);
        break;

      case "A-Z":
        list.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        break;

      default:
        break;
    }

    return list;
  }, [search, category, sort]);

  const handleCategoryClick = (cat) => {
    setCategory(cat);
    sessionStorage.setItem("selectedCategory", cat);
  };

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
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="search-actions">
          <div className="sort-wrap">
            <label>Sort by :</label>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              {sortOptions.map((option) => (
                <option
                  key={option}
                  value={option}
                >
                  {option}
                </option>
              ))}
            </select>
          </div>

          <button className="whatsapp-btn">
            <FaWhatsapp />
            Whatsapp Bulk Order
          </button>
        </div>
      </div>

      <div id="categories" className="category-pills">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`pill ${category === cat ? "active" : ""}`}
            onClick={() => handleCategoryClick(cat)}
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
              style={{
                animationDelay: `${index * 0.12}s`,
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />

              <div className="divider-image">
                <img
                  src={slide}
                  alt="divider"
                />
              </div>

              <h3>{product.name}</h3>

              <p>
                {product.description
                  .split("\n")
                  .map((line, i, arr) => (
                    <Fragment key={i}>
                      {line}
                      {i < arr.length - 1 && <br />}
                    </Fragment>
                  ))}
              </p>

              <button>Enquire Now →</button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}