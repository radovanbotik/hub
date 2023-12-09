import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="w-full h-full">
      <section className="w-full ">{children}</section>
    </div>
  );
};

export default Layout;
