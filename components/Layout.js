import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import React, { useState } from "react";
import Backdrop from "./Backdrop";

const Layout = ({ children }) => {
  let backdrop;
  const [open, setOpen] = useState(false);

  const handleDrawer = () => {
    console.log("handleDrawer Clicked!");
    setOpen(!open);
  };

  if (open) {
    backdrop = <Backdrop />;
  }

  return (
    <div className="content">
      <Navbar handle={handleDrawer} />
      <Sidebar show={open} handle={handleDrawer} />
      {backdrop}
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
