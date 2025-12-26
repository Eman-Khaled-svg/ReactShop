import { Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import ProductList from './component/ProductList';
import NotFound from './component/NotFound';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contect';
import ProductDetails from './component/ProductDetails';
import { Online, Offline } from "react-detect-offline"

export default function App() {
return (
<>
<Navbar />
<div className="container mt-4">
  <Online>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/products" element={<ProductList />} />
  <Route path="/product/:id" element={<ProductDetails />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
<Route path="*" element={<NotFound />} />
</Routes>
  </Online>
  <Offline>
    <div className="text-center py-5">
      <p className="text-danger">You are currently offline.</p>
    </div>
  </Offline>
</div>
<Footer />
</>
);
}