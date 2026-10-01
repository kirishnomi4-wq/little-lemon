import { Link } from "react-router-dom";
import restaurant from "../assets/restaurant.svg";
import chefs from "../assets/chefs.svg";
import greekSalad from "../assets/greek-salad.svg";
import bruschetta from "../assets/bruschetta.svg";
import lemonDessert from "../assets/lemon-dessert.svg";

const specials = [
  {
    name: "Greek Salad",
    price: "$12.99",
    image: greekSalad,
    description:
      "Crispy lettuce, peppers, olives and Chicago-style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    name: "Bruschetta",
    price: "$5.99",
    image: bruschetta,
    description:
      "Grilled bread smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    name: "Lemon Dessert",
    price: "$5.00",
    image: lemonDessert,
    description:
      "Straight from grandma's recipe book, every ingredient is as authentic as can be.",
  },
];

const testimonials = [
  { name: "Maria", rating: 5, text: "Best Greek salad in Chicago!" },
  { name: "John", rating: 4, text: "Lovely atmosphere and friendly staff." },
  { name: "Aisha", rating: 5, text: "The lemon dessert is a must-try." },
  { name: "Tom", rating: 5, text: "Booking a table online was so easy." },
];

function HomePage() {
  return (
    <>
      {/* Hero section */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container hero-inner">
          <div>
            <h1 id="hero-title">Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <Link to="/booking" className="button" aria-label="Reserve a table">
              Reserve a Table
            </Link>
          </div>
          <img src={restaurant} alt="Plate of food served at Little Lemon" className="hero-img" />
        </div>
      </section>

      {/* Specials section */}
      <section id="menu" className="container specials" aria-labelledby="specials-title">
        <div className="specials-head">
          <h2 id="specials-title">This week's specials!</h2>
          <a href="/#menu" className="button">Online Menu</a>
        </div>
        <div className="cards">
          {specials.map((dish) => (
            <article className="card" key={dish.name}>
              <img src={dish.image} alt={dish.name} />
              <div className="card-body">
                <div className="card-title">
                  <h3>{dish.name}</h3>
                  <span className="price">{dish.price}</span>
                </div>
                <p>{dish.description}</p>
                <a href="/#order">Order a delivery 🛵</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Testimonials section */}
      <section className="testimonials" aria-labelledby="testimonials-title">
        <div className="container">
          <h2 id="testimonials-title">Testimonials</h2>
          <div className="testimonial-grid">
            {testimonials.map((t) => (
              <figure className="testimonial" key={t.name}>
                <p aria-label={`Rating: ${t.rating} out of 5`}>
                  {"★".repeat(t.rating)}
                </p>
                <blockquote>"{t.text}"</blockquote>
                <figcaption>{t.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* About section */}
      <section id="about" className="container about" aria-labelledby="about-title">
        <div>
          <h2 id="about-title">Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            Little Lemon is owned by two Italian brothers, Mario and Adrian, who
            moved to the United States to pursue their shared dream of owning a
            restaurant. Their menu combines traditional Mediterranean recipes
            with a modern twist.
          </p>
        </div>
        <img src={chefs} alt="Mario and Adrian, the owners of Little Lemon" />
      </section>
    </>
  );
}

export default HomePage;
