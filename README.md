# ShoppyGlobe E-commerce

ShoppyGlobe is a basic e-commerce application created using React and Vite.

## Features

* View products from an API
* Search products
* View product details
* Add products to cart
* Remove products from cart
* Increase and decrease product quantity
* View cart total
* Checkout form
* Place an order
* Clear cart after placing an order
* Dynamic product routes
* 404 page
* Responsive design

## Technologies Used

* React
* Vite
* React Router
* Redux Toolkit
* React Redux
* CSS
* DummyJSON API

## API

Products are fetched from:

https://dummyjson.com/products

## How to Run

1. Clone or download the project.

2. Open the project folder in VS Code.

3. Install the required packages:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open the local URL shown in the terminal.

Usually:

```text
http://localhost:5173/
```

## Project Structure

```text
src
├── components
│   ├── Header
│   ├── ProductList
│   ├── ProductItem
│   └── CartItem
│
├── pages
│   ├── Home
│   ├── ProductDetail
│   ├── Cart
│   ├── Checkout
│   └── NotFound
│
├── redux
│   ├── store.js
│   ├── cartSlice.js
│   └── productSlice.js
│
├── hooks
│   └── useProducts.js
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```


