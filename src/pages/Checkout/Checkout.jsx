import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../redux/cartSlice";
import "./Checkout.css";

function Checkout() {
  const items = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !address) {
      alert("Please fill all the fields");
      return;
    }

    dispatch(clearCart());

    setMessage("Order placed");

    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  return (
    <div className="checkout">
      <h1>Checkout</h1>

      <h2>Order Summary</h2>

      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {items.map((item) => (
            <p key={item.id}>
              {item.title} x {item.quantity}
            </p>
          ))}

          <h3>Total: ${total.toFixed(2)}</h3>
        </div>
      )}

      <h2>Your Details</h2>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Address</label>
        <textarea
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        ></textarea>

        <button type="submit">Place Order</button>
      </form>

      {message && <h2>{message}</h2>}
    </div>
  );
}

export default Checkout;