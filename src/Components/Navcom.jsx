
import { Link, Outlet } from "react-router-dom";

function Navcom() {
  return (
    <>
      <nav>
        <h1>Jewelry Store</h1>
        <Link to="/">Home</Link>{" | "}
        <Link to="/Products">Products</Link>{" | "}
        <Link to="/login">Login</Link>{" | "}
        <Link to="/register">Register</Link>
      </nav>

      <main>
        <Outlet />
      </main>

      <footer>
        <p>Jewelry Store © 2026</p>
      </footer>
    </>
  );
}

export default Navcom;
