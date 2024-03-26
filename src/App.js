import "./App.css";
import { useState } from "react";
import Cart from "./components/Cart";
import Home from "./components/Home";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import CartContext from "./contexts/CartContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [myCartList, setMyCartList] = useState();

  return (
    <CartContext.Provider value={{ myCartList, setMyCartList }}>
      <div>
        <ToastContainer />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/my-cart" element={<Cart />} />
          </Routes>
        </Router>
      </div>
    </CartContext.Provider>
  );
}

export default App;
