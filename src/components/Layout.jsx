import { lazy } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import About from "./About";
import { BriefDisplay } from "./BriefDisplay";
import { Experience } from "./Experience";
import { Nav } from "./Navbar";
import { Projects } from "./Project";
import { Skills } from "./Skills";
const ModelCanvas = lazy(() => import("./model/ModelCanvas"));

const Layout = () => {
  const isTablet = useMediaQuery("(max-width: 1024px)");

  return (
    <>
      <section className="relative h-full w-svh antialiased mb-10">
        <Nav />
        {isTablet ? (
          <div className="w-full px-6 py-3 space-y-3">
            <About />
            <BriefDisplay />
            <div className="md:px-10 space-y-6">
              <Experience />
              <Projects />
              <Skills />
            </div>
          </div>
        ) : (
          <div className="flex w-full mx-auto px-5 lg:px-8 max-w-screen-2xl">
            <div className="w-1/3 relative">
              <BriefDisplay />
              <ModelCanvas />
            </div>
            <div className="relative mt-6 w-2/3">
              <div className="relative flex-grow">
                <div className="relative px-10 space-y-6">
                  <About />
                  <Experience />
                  <Projects />
                  <Skills />
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

    </>
  );
};

export default Layout;
