import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/Layout";

export default function App() {
  return (
    <main className="font-mono">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} />
        </Routes>
      </Router>
    </main>
  );
}
