import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { ColorVariants } from "./lib/colorVariants";
import { useContext } from "react";
import ColorThemeContext from "./lib/context/colorThemeContext";

export default function App() {
  const { colorTheme } = useContext(ColorThemeContext);

  return (
    <main
      className={`font-mono w-full h-full min-h-dvh flex justify-center ${ColorVariants[colorTheme]["bg"]} ${ColorVariants[colorTheme]["select"]}`}
    >
      <Router>
        <Routes>
          <Route path="/portfolio/" element={<Layout />} />
        </Routes>
      </Router>
    </main>
  );
}
