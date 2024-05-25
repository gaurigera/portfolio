import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Resume from "./components/Resume";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Layout from "./components/Layout";

export default function App() {
  return (
    <main>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Layout />} />
        </Routes>
      </Router>
    </main>
  );
}
