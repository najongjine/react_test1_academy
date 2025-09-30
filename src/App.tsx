import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Calc from "./Pages/Calc";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calc" element={<Calc />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
