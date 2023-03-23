import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Todo from "./components/Todo"
import Navbar from "./components/layout/Navbar";
import Loadout from "./components/Loadout";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/codloadout" element={<Loadout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
