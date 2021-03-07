import React, { useContext, useEffect } from "react";
import Link from "next/link";
import { AiOutlineBars } from "react-icons/ai";
//import styles from "../styles/Sidebar.module.css";
import { SidebarData } from "../helpers/SidebarData";
//import { DrawerContext } from "../context/drawerContext";

const Sidebar = ({ show, handle }) => {
  // can use context instead of props
  // const { open, handleDrawer } = useContext(DrawerContext);
  let sidebarClass = "sidebar";
  if (show) {
    sidebarClass = "sidebar open";
  }

  return (
    <div className={sidebarClass}>
      <div className="topLogo" onClick={handle}>
        <AiOutlineBars size="1.6em" style={{ cursor: "pointer" }} />
        <div className="brandName">Vercel!</div>
      </div>
      <div className="topLine"></div>
      <nav className="grid">
        {SidebarData.map((item, index) => (
          <>
            <Link href={item.path}>
              <div className="icon">{item.icon}</div>
            </Link>
            <Link href={item.path}>
              <div className={item.cName}>{item.title}</div>
            </Link>
          </>
        ))}
      </nav>
      <div className="btmLine"></div>
    </div>
  );
};

export default Sidebar;
