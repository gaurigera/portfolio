import About from "./About";
import { BriefDisplay } from "./BriefDisplay";
import { Nav } from "./Navbar";

const Layout = () => {
  return (
    <section className="w-full h-full dark:bg-slate-600">
      <div className="h-full">
        <div className="w-full flex justify-center">
          <Nav />
        </div>
        <div className="px-5 lg:px-10 w-full min-h-svh flex mt-6">
          <div className="lg:w-1/3">
            <BriefDisplay />
          </div>
          <div className="lg:w-2/3 h-svh px-10 scroll-auto">
          <About />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Layout;
