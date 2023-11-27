import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./header";
import Footer from "./Footer";
import Home from "./home";
import Login from "./login";
import Inventory from "./inventory";
import PointOfSale from "./PointOfSale";
import Supplier from "./supplier";
import HumanResource from "./hr";
import CRM from "./crm";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/point-of-sale" element={<PointOfSale />} />
        <Route path="/supplier" element={<Supplier />} />
        <Route path="/hr" element={<HumanResource />} />
        <Route path="/crm" element={<CRM />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
