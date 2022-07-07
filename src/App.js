import React from "react";
import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Photos from "./pages/Photos";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/PicSomeHome" element={<Photos />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
