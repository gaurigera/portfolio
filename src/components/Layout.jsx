import About from "./About";
import { BriefDisplay } from "./BriefDisplay";
import { Experience } from "./Experience";
import { Nav } from "./Navbar";
import { Projects } from "./Project";
import { Skills } from "./Skills";

const Layout = () => {
  return (
    <section className="w-full overflow-hidden h-screen">
      <div className="w-full flex justify-center sticky">
        <Nav />
      </div>
      <div className="px-5 lg:px-10 w-full flex mt-6">
        <div className="lg:w-1/3 sticky h-fit">
          <BriefDisplay />
        </div>
        <div className="lg:w-2/3 h-svh px-10 overflow-auto space-y-6">
          <About />
          <Experience />
          <Projects />
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default Layout;
