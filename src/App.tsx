import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Calc from "./Pages/Calc";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Lotto from "./Pages/Lotto";
import Memo from "./Pages/Memo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calc" element={<Calc />} />
          <Route path="/lotto" element={<Lotto />} />
          <Route path="/memo" element={<Memo />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
