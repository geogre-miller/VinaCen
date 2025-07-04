import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/auth/AuthContext";
import Homepage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import NotFoundPage from "./pages/NotFoundPage";
import Contacts from "./pages/Contacts";
import Products from "./pages/Products";
import ProductsInfo from "./pages/ProductsInfo";
import Agency from "./pages/Agency";
import Blogs from "./pages/Blogs";
import BlogPost from "@/components/Blogs/BlogPost";
import Admin from "./pages/Admin";
import LoginForm from "./components/auth/LoginForm";
import ProtectedRoute from "./components/Route/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductsInfo />} />

          <Route path="/agency" element={<Agency />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogPost />} />

          <Route path="/login" element={<LoginForm />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
