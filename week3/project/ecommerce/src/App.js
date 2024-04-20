import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.js";
import FavoritesPage from "./pages/FavoritesPage.js";
import ProductDetail from "./pages/ProductDetail.js";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="title-box">
          <h1>Products</h1>
          <nav className="nav">
            <ul>
              <li className="nav-link">
                <Link to="/">Products</Link>
              </li>
              <li className="nav-link">
                <Link to="/favorites">Favorites</Link>
              </li>
            </ul>
          </nav>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;