import { useNavigate } from "react-router-dom";
import restaurantFoodImage from "../../assets/restaurant-food.jpg";
import "./styles.css";
const Hero = () => {
  const navigate=useNavigate()
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-information">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family-owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button className="button-primary" onClick={navigate("/bookings")}>Reserve a table</button>
        </div>
        <img
          className="hero-image"
          src={restaurantFoodImage}
          alt="Restaurant food"
        />
      </div>
    </section>
  );
};

export default Hero;
