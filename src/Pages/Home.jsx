
import { Link } from "react-router-dom";

function Home() {
  return (
    <section>
      <h2>Welcome to Our Jewelry Store</h2>
      <p>Discover our jewelry collection.</p>
      <Link to="/Products">Explore Products</Link>
    </section>
  );
}

export default Home;
