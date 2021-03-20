import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Backdrop from "./Backdrop";
import useSideDrawer from "../hooks/useSideDrawer";
//import { DrawerContext } from "../context/drawerContext";

const Layout = ({ children }) => {
  //const { open, handleDrawer } = useContext(DrawerContext);
  // use custom hook instead of context directly.
  const { open, handleDrawer } = useSideDrawer();
  let backdrop;

  // if SideDrawer is open backdrop will open
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
