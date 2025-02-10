import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import AdminPanel from "./pages/AdminPanel";
import "./App.css";


const Header = () => {
  return (
    <header className="header">
      <h1>QuickLib</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/search">Search</Link>
        <Link to="/admin">Admin Panel</Link>
      </nav>
    </header>
  );
};


const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 QuickLib. All rights reserved.</p>
      <p>Contact: support@quicklib.com</p>
    </footer>
  );
};


function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
