import React from "react";
import Link from "next/link";
import { AiOutlineBars } from "react-icons/ai";
//import styles from "../styles/Sidebar.module.css";
import { signIn, signOut, useSession } from "next-auth/client";
import { SidebarData, SidebarAuth } from "../helpers/SidebarData";
//import { DrawerContext } from "../context/drawerContext";
import SidebarAuthData from "./Sidebar/SidebarAuthData";
import SidebarPathData from "./Sidebar/SidebarPathData";

const Sidebar = ({ show, handle }) => {
  // can use context instead of props
  // const { open, handleDrawer } = useContext(DrawerContext);
  let sidebarClass = "sidebar";

  show ? (sidebarClass = "sidebar open") : "sidebar";

  return (
    <div className={sidebarClass}>
      <div className="topLogo" onClick={handle}>
        <AiOutlineBars size="1.6em" style={{ cursor: "pointer" }} />
        <div className="brandName">Vercel!</div>
      </div>
      <div className="topLine"></div>
      <SidebarPathData />
      <div className="btmLine"></div>
      <div className="sideBarLogin">Social Auth Login</div>
      <SidebarAuthData />
      <div className="btmLine"></div>
    </div>
  );
};

export default Sidebar;
