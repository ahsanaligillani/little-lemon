import "./styles.css";
import customerOne from "../../assets/customer1.jpg"
import customerTwo from "../../assets/customer2.jpg"
import customerThree from "../../assets/customer3.jpg"

const testimonials = [
  {
    name: "Jane Smith",
    rating: "5/5",
    image: customerOne,
    altText: "Reviewer Jane Smith",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa massa, semper sed enim at, faucibus mattis lorem. Donec vehicula, leo ut auctor ullamcorper, diam tortor dignissim velit, ac iaculis libero lacus non diam.",
  },
  {
    name: "John Doe",
    rating: "5/5",
    image: customerTwo,
    altText: "Reviewer John Doe",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa massa, semper sed enim at, faucibus mattis lorem. Donec vehicula, leo ut auctor ullamcorper, diam tortor dignissim velit, ac iaculis libero lacus non diam.",
  },
  {
    name: "Emily Johnson",
    rating: "5/5",
    image: customerThree,
    altText: "Reviewer Emily Johnson",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa massa, semper sed enim at, faucibus mattis lorem. Donec vehicula, leo ut auctor ullamcorper, diam tortor dignissim velit, ac iaculis libero lacus non diam.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <header className="testimonials-header">
        <h2 className="testimonials-title">What Our Customers Say</h2>
      </header>
      <div className="testimonials-list">
        {testimonials.map((testimonial, index) => (
          <article className="testimonial-item" key={index}>
            <figure className="testimonial-avatar">
              <img
                className="avatar-image"
                src={testimonial.image}
                alt={testimonial.altText}
              />
            </figure>
            <div className="testimonial-content">
              <div className="testimonial-meta">
                <p className="testimonial-name">{testimonial.name}</p>
                <p className="testimonial-rating">{testimonial.rating}</p>
              </div>
              <blockquote className="testimonial-text">
                <p>{testimonial.text}</p>
              </blockquote>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
