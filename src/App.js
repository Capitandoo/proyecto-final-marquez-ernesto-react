import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Cart from "./components/Cart/Cart";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartProvider from "./context/CartContext";
import ContactForm from "./components/ContactForm/ContactForm";
import CheckOut from "./components/CheckOut/CheckOut";
import { UserProvider } from "./context/UserContext";
import Brief from "./components/Brief/Brief";


function App() {
  return (
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <UserProvider>
            <Routes>
              <Route path = "/" element = {<ItemListContainer />} />
              <Route path = "/cart/" element = {<Cart />} />
              <Route path = "/categoria/:categoriaid" element = {<ItemListContainer />} />
              <Route path = "/detalle/:detalleid" element = {<ItemDetailContainer />} />
              <Route path = "/registro/" element = {<ContactForm />} />
              <Route path = "/checkout" element = {<CheckOut />} />
              <Route path = "/brief" element = {<Brief />} />
            </Routes>
            </UserProvider>
        </CartProvider>
      </BrowserRouter>
  )
};

export default App;
