import { useState } from "react";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TicketProcess from "./components/TicketProcess";
import Tickets from "./components/Tickets";
import About from "./components/AboutProject";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<TicketProcess />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
