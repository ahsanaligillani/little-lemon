import "./styles.css";
import imageOne from "../../assets/aboutImageOne.jpg";
import imageTwo from "../../assets/aboutImageTwo.jpg";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-text">
        <h1 className="restaurant-title ">Little Lemon</h1>
        <h2 className="restaurant-city">Chicago</h2>
        <p className="about-description">
          We are a family-owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
      </div>
      <figure className="about-images">
        <img
          className="image-two"
          src={imageTwo}
          alt="Another Mediterranean dish"
        />
        <img
          className="image-one"
          src={imageOne}
          alt="Delicious Mediterranean dish"
        />
      </figure>
    </section>
  );
};

export default About;
