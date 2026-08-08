import { useDispatch, useSelector } from "react-redux";
import useProducts from "../../hooks/useProducts";
import { selectSearch, setSearch } from "../../redux/productSlice";
import ProductItem from "../ProductItem/ProductItem";
import "./ProductList.css";

function ProductList() {
  const { products, loading, error } = useProducts();

  const dispatch = useDispatch();
  const search = useSelector(selectSearch);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>Products</h2>

      <input
        type="text"
        placeholder="Search products"
        value={search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
      />

      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
          />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p>No products found.</p>
      )}
    </div>
  );
}

export default ProductList;