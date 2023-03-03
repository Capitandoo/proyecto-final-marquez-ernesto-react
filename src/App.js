import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartWidget from "./components/CartWidget/CartWidget";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";




function App() {
  return (

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path = "/" element = {<ItemListContainer />} />
          <Route path = "/cart/" element = {<CartWidget />} />
          <Route path = "/categoria/:categoriaid" element = {<ItemListContainer />} />
          <Route path = "/detalle/:detalleid" element = {<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>

  )
};

export default App;
