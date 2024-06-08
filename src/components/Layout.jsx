import React from "react";
import { Scroll } from "@react-three/drei";
import Content from "./Content";

// Image by <a href="https://www.freepik.com/free-vector/watercolor-galaxy-background_21449231.htm#page=2&query=hdri%20space&position=12&from_view=keyword&track=ais_user&uuid=47f1664e-0168-4c46-9cc7-17742fcdc1be">Freepik</a>

const Layout = () => {
  return (
    <Scroll html>
      <section className="h-screen w-screen flex justify-center">
        <Content />
      </section>
    </Scroll>
  );
};

export default Layout;
