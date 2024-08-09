import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { useColorVariant } from "./hooks/useColorVariant";
import { ColorVariants } from "./lib/colorVariants";

export default function App() {
  const { colorTheme } = useColorVariant();

  return (
    <main
      className={`font-mono w-full h-full flex justify-center ${ColorVariants[colorTheme]["bg"]} ${ColorVariants[colorTheme]["select"]}`}
    >
      <Router>
        <Routes>
          <Route path="/portfolio/" element={<Layout />} />
        </Routes>
      </Router>
    </main>
  );
}
