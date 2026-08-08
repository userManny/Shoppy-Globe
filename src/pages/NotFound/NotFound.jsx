import { Link, useLocation } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  const location = useLocation();

  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>

      <p>The page you are looking for does not exist.</p>

      <p>
        <b>Requested URL:</b> {location.pathname}
      </p>

      <Link to="/">Go to Home</Link>
    </div>
  );
}

export default NotFound;