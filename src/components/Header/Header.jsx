import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const items = useSelector((state) => state.cart.items);

  const count = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="header">
      <h2 className="header-logo">ShoppyGlobe</h2>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart 🛒 ({count})</Link>
      </nav>
    </header>
  );
}

export default Header;