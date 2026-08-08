import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App.jsx";
import { store } from "./redux/store.js";


// Pages are loaded only when they are needed
const Home = lazy(() => import("./pages/Home/Home.jsx"));
const ProductDetail = lazy(() =>
  import("./pages/ProductDetail/ProductDetail.jsx")
);
const Cart = lazy(() => import("./pages/Cart/Cart.jsx"));
const Checkout = lazy(() =>
  import("./pages/Checkout/Checkout.jsx")
);
const NotFound = lazy(() =>
  import("./pages/NotFound/NotFound.jsx")
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "product/:id",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <ProductDetail />
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "checkout",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Checkout />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <NotFound />
      </Suspense>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);