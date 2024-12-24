import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import ProductDetails from "./pages/productdetails"; // Import ProductDetails page
import Solutions from "./pages/Solutions";

const App = () => {
  return (
    <Router>
      <div>
        {/* Navbar Section */}
        <header>
          <Navbar />
        </header>

        <main>
          <Routes>
            {/* Home and About Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* Product Page */}
            <Route path="/product" element={<Product />} />
            <Route path="/productdetails/:id" element={<ProductDetails />} /> {/* Dynamic Product Details */}

           
            <Route
              path="/solutions/object-detection"
              element={<Solutions solution="object-detection" />}
            />
            <Route
              path="/solutions/security"
              element={<Solutions solution="security" />}
            />
            <Route
              path="/solutions/workforce"
              element={<Solutions solution="workforce" />}
            />
            <Route
              path="/solutions/vehicle"
              element={<Solutions solution="vehicle" />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
