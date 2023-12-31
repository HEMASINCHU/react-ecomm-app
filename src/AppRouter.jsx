import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Home/Products";
import Layout from "./pages/Home/Layout";
import ProductDetails from "./pages/Home/Products/ProductDetails";
import About from "./pages/Home/About";
import Cart from "./pages/Home/Cart";
import PlaceOrder from "./pages/Home/PlaceOrder";
import Orders from "./pages/Home/Orders";
import CrudOperations from "./pages/CRUD";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
        <Route path="/orderList" element={<Orders />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/crud" element={<CrudOperations />} />
    </Routes>
  );
}

export default AppRouter;
/*
Components 
 /Input
 /Footer 
 /Header
 /NavBar
 /Button

pages
 /Home
  Home.jsx
  style.css
  /dir1 

  /dir2 

  /dir3 


 /Login
  index.jsx
  style.css

 /Register
  
 /Product
 */
