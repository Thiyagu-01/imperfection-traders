import {
  FaUsers,
  FaLeaf,
  FaMapMarkerAlt,
  FaSeedling,
} from "react-icons/fa";
import product from "../../../assets/product.png";
import "./Story.css";

const stats = [
  {
    icon: <FaUsers />,
    number: "500+",
    label: "Happy Customer",
  },
  {
    icon: <FaLeaf />,
    number: "30+",
    label: "Partner Farms",
  },
  {
    icon: <FaMapMarkerAlt />,
    number: "10+",
    label: "Cities Served",
  },
  {
    icon: <FaSeedling />,
    number: "100%",
    label: "Fresh & Natural",
  },
];

export default function Story() {
  return (
    <section className="storySection">

      <div className="storyContainer">

        <div className="storyImage">
          <img
            src={product}
            alt="Imperfection Traders"
          />
        </div>

        <div className="storyContent">

          <div className="storyTop">

            <span className="storyLine"></span>

            <span className="storyLabel">
              🍃 OUR STORY
            </span>

            <span className="storyLine"></span>

          </div>

          <h2>
            More Than just a Vegetable
            <br />
            Supplier
          </h2>

          <p className="storyPara">
            Imperfection Traders was built on a simple belief —
            fresh produce should come directly from farms
            without middlemen.
          </p>

          <p className="storyPara">
            We work closely with local farmers in the Nilgiris
            to bring you the freshest and highest quality
            produce while ensuring fair prices for the people.
          </p>

        </div>

      </div>

      <div className="storyStats">

        {stats.map((item, index) => (

          <div
            className="storyStat"
            key={index}
          >

            <div className="storyIcon">
              {item.icon}
            </div>

            <h3>{item.number}</h3>

            <p>{item.label}</p>

          </div>

        ))}

      </div>

      <div className="storyBottomStroke"></div>

    </section>
  );
}