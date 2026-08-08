import { useEffect, useState } from "react";

function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");



  useEffect(() => {
     // Fetch products when the component is loaded
    fetch("https://dummyjson.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        return response.json();
      })
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((error) => {
         // Show an error if the API request fails
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return {
    products,
    loading,
    error,
  };
}

export default useProducts;