import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Backdrop from "./Backdrop";
import React, { useState } from "react";

const Layout = ({ children }) => {
  let backdrop;
  const [open, setOpen] = useState(false);

  const handleDrawer = () => {
    console.log("handleDrawer Clicked!");
    setOpen(!open);
  };

  // if (open) {
  //   backdrop = <Backdrop />;
  // }

  open ? (backdrop = <Backdrop />) : null;

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
