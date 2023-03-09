import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Cart from "./components/Cart/Cart";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartProvider from "./context/CartContext";

function App() {
  return (
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path = "/" element = {<ItemListContainer />} />
            <Route path = "/cart/" element = {<Cart />} />
            <Route path = "/categoria/:categoriaid" element = {<ItemListContainer />} />
            <Route path = "/detalle/:detalleid" element = {<ItemDetailContainer />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
  )
};

export default App;
