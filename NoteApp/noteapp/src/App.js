import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import AddNote from "./components/AddNote";
import UserProfile from "./components/UserProfile";
import NoteState from "./context/notes/NoteState";

function App() {
  return (
    <NoteState>
      <Router>
        <div className="bg-slate-950 overflow-y-auto">
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/addnote" element={<AddNote />} />
            <Route path="/profile" element={<UserProfile />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </NoteState>
  );
}

export default App;
