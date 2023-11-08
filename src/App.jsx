import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetallesContainer from "./components/ItemDetalles/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import { CartProvider } from "./components/CartContext/CartContext";
import Carrito from "./components/Carrito/Carrito";
import Checkout from "./components/ChecKout/ChecKout";

function App() {
  return (
    <div className="App">
   <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/item/:id" element={<ItemDetallesContainer />} />
          <Route path="/productos/" element={<ItemListContainer />} />
          <Route path="/productos/:categoria" element={<ItemListContainer />} />
          <Route path="/carrito" element={<Carrito />}/>
          <Route path="/checkout" element={<Checkout />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
