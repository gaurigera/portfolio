import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/Layout";

export default function App() {
  return (
    <main className="font-mono w-full h-full flex justify-center">
      <Router>
        <Routes>
          <Route path="/portfolio/" element={<Layout />} />
        </Routes>
      </Router>
    </main>
  );
}
