import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { Helmet } from "react-helmet";
import { ColorVariants } from "./lib/colorVariants";
import { useContext } from "react";
import ColorThemeContext from "./lib/context/colorThemeContext";

export default function App() {
  const { colorTheme } = useContext(ColorThemeContext);

  return (
    <>
      <Helmet>
        <title>Gauri Gera - Portfolio</title>
        <meta
          name="description"
          content="Learn about Gauri Gera, an aspiring software developer with keen interest in low-level systems, fullstack development and DevOps."
        />
      </Helmet>
      <main
        className={`font-mono w-full h-full min-h-dvh flex justify-center ${ColorVariants[colorTheme]["bg"]} ${ColorVariants[colorTheme]["select"]}`}
      >
        <Router>
          <Routes>
            <Route path="/portfolio/" element={<Layout />} />
          </Routes>
        </Router>
      </main>
    </>
  );
}
