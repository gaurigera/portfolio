import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { Helmet } from "react-helmet";

export default function App() {
  return (
    <>
      <Helmet>
        <title>Gauri Gera - Portfolio</title>
        <meta
          name="description"
          content="Learn about Gauri Gera, an aspiring software developer with keen interest in low-level systems, fullstack development and DevOps."
        />
      </Helmet>
      <main className="font-mono w-full h-full flex justify-center">
        <Router>
          <Routes>
            <Route path="/portfolio/" element={<Layout />} />
          </Routes>
        </Router>
      </main>
    </>
  );
}
