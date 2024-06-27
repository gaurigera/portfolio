import { BriefDisplay } from "./BriefDisplay";
import { Nav } from "./Navbar";
import ModelCanvas from "./model/ModelCanvas";

const Layout = () => {
  return (
    <section
      className="w-screen h-dvh bg-pink-200"
    >
      <div className="h-full">
        <div>
          <Nav />
        </div>
        <BriefDisplay />
        <ModelCanvas />
      </div>
    </section>
  );
};

export default Layout;
