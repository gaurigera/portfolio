import useMediaQuery from "../hooks/useMediaQuery";
import About from "./About";
import { BriefDisplay } from "./BriefDisplay";
import { Experience } from "./Experience";
import { Nav } from "./Navbar";
import { Projects } from "./Project";
import { Skills } from "./Skills";

const Layout = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");

  return (
    <section className="relative w-full h-full p-1 antialiased">
      <Nav />
      {!isMobile && !isTablet && (
        <>
          <BriefDisplay />
          <div className="relative px-5 lg:px-10 w-full mt-6">
            <div className="relative flex-grow">
              <div className="flex">
                <div className="md:w-1/3 flex-shrink-0"></div>
                <div className="px-10 space-y-6">
                  <About />
                  <Experience />
                  <Projects />
                  <Skills />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {isMobile && (
        <div className="w-full px-6 py-3 space-y-3">
            <About />
          <BriefDisplay isMobile={isMobile} />
          <div className="px-10 space-y-6">
            <Experience />
            <Projects />
            <Skills />
          </div>
        </div>
      )}
    </section>
  );
};

export default Layout;
