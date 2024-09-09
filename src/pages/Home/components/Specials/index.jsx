import "./styles.css";
import bruchetta from "../../assets/bruschetta.jpg"
import greekSalad from "../../assets/greek-salad.jpg"
import lemonDessert from "../../assets/lemon-dessert.jpg"

const specialItems = [
  {
    name: "Greek Salad",
    price: "$12.99",
    description:
      "The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago-style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    image: greekSalad,
    altText: "Greek Salad",
  },
  {
    name: "Bruchetta",
    price: "$5.99",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    image: bruchetta,
    altText: "Bruchetta",
  },
  {
    name: "Lemon Dessert",
    price: "$5.00",
    description:
      "This comes straight from grandma’s recipe book; every last ingredient has been sourced and is as authentic as can be imagined.",
    image: lemonDessert,
    altText: "Lemon Dessert",
  },
];

const Specials = () => {
  return (
    <main className="menu-container">
      <header className="menu-header">
        <h1 className="menu-title">This Week's Specials!</h1>
        <button className="menu-button">Online Menu</button>
      </header>
      <section className="menu-card-list">
        {specialItems.map((item, index) => (
          <article className="menu-card" key={index}>
            <div className="menu-card-image-wrapper">
              <img className="menu-card-image" src={item.image} alt={item.altText} />
            </div>
            <div className="menu-card-details">
              <div className="menu-card-header">
                <h2 className="menu-card-name">{item.name}</h2>
                <p className="menu-card-price">{item.price}</p>
              </div>
              <p className="menu-card-description">{item.description}</p>
              <p className="menu-card-button">Order a delivery</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Specials;
