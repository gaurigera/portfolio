import About from "./About";
import { BriefDisplay } from "./BriefDisplay";
import { Experience } from "./Experience";
import { Nav } from "./Navbar";
import { Projects } from "./Project";
import { Skills } from "./Skills";

const Layout = () => {
  return (
    <section className="relative w-full h-full p-1 antialiased">
      <Nav />
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
    </section>
  );
};

export default Layout;
