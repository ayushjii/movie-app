import React from "react";
import { Navabr } from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navabr />
      <div className="">
        <h1>{children}</h1>
      </div>
    </>
  );
};

export default Layout;
