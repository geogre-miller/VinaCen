import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import NotFoundPage from "./pages/NotFoundPage";
import Contacts from "./pages/Contacts";
import Products from "./pages/Products";
import ProductsInfo from "./pages/ProductsInfo";
import Agency from "./pages/Agency";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductsInfo />} />

        {/* <Route path="/internship" element={<Internship />} /> */}
        <Route path="/agency" element={<Agency />} />
        {/* <Route path="/blogs" element={<Blogs />} /> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
