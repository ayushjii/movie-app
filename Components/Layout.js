import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <div className="">
        <h1>{children}</h1>
      </div>
    </>
  );
};

export default Layout;
