import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../../components/CartItem/CartItem";
import "./Cart.css";

function Cart() {
  const items = useSelector((state) => state.cart.items);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <div className="cart">
        <h1>Your Cart</h1>
        <p>Your cart is empty.</p>
        <Link to="/">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="cart">
      <h1>Your Cart</h1>

      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}

      <h2>Total: ${total.toFixed(2)}</h2>

      <Link to="/checkout">Go to Checkout</Link>
    </div>
  );
}

export default Cart;