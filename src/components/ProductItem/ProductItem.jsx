import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/cartSlice";
import "./ProductItem.css";

function ProductItem({ product }) {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product">
      <img
        src={product.thumbnail}
        alt={product.title}
        loading="lazy"
      />

      <h3>{product.title}</h3>

      <p>${product.price}</p>

      <Link to={"/product/" + product.id}>
        View Details
      </Link>

      <button onClick={handleAdd}>Add to Cart</button>
    </div>
  );
}

export default ProductItem;