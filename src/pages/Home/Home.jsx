import ProductList from "../../components/ProductList/ProductList";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <h1>Welcome to ShoppyGlobe</h1>
      <p>Your online shopping store.</p>

      <ProductList />
    </div>
  );
}

export default Home;