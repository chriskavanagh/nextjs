import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Backdrop from "./Backdrop";
import React, { useState, useContext } from "react";
import { DrawerContext } from "../context/drawerContext";

const Layout = ({ children }) => {
  const { open, handleDrawer } = useContext(DrawerContext);
  let backdrop;
  // const [open, setOpen] = useState(false);

  /* const handleDrawer = () => {
    console.log("handleDrawer Clicked!");
    setOpen(!open);
  }; */

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
