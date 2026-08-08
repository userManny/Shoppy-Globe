import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ProductDetail.css";

function ProductDetail() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Get the selected product using the ID from the URL
    fetch("https://dummyjson.com/products/" + id)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Product not found");
        }

        return response.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading product...</p>;
  }

  if (error) {
    return (
      <div>
        <h2>Error</h2>
        <p>{error}</p>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="detail">
      <img
        src={product.thumbnail}
        alt={product.title}
        loading="lazy"
      />

      <div>
        <h1>{product.title}</h1>

        <p>{product.description}</p>

        <p>
          <b>Price:</b> ${product.price}
        </p>

        <p>
          <b>Rating:</b> {product.rating}
        </p>

        <p>
          <b>Brand:</b> {product.brand}
        </p>

        <p>
          <b>Category:</b> {product.category}
        </p>

        <button>Add to Cart</button>

        <br />
        <br />

        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
}

export default ProductDetail;