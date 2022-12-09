import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import SingleProduct from "./features/products/SingleProduct";

function App() {
  return (
    <div className="flex-col font-poppins tracking-normal">
      <BrowserRouter>
        <nav className="z-10 flex sticky top-0  justify-center bg-slate-800 w-full text-white">
          <Navbar />
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product" element={<SingleProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
