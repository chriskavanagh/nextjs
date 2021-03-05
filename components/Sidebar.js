import React from "react";
import Link from "next/link";
import { AiOutlineBars } from "react-icons/ai";
//import styles from "../styles/Sidebar.module.css";
import { SidebarData } from "../helpers/SidebarData";

const Sidebar = (props) => {
  let sidebarClass = "sidebar";
  if (props.show) {
    sidebarClass = "sidebar open";
  }

  return (
    <div className={sidebarClass}>
      <div className="topLogo" onClick={props.handle}>
        <AiOutlineBars size="1.6em" style={{ cursor: "pointer" }} />
        <div className="brandName">Vercel!</div>
      </div>
      <div className="topLine"></div>
      <nav className="grid">
        {SidebarData.map((item, index) => (
          <>
            <Link href="/articles">
              <div className="icon">{item.icon}</div>
            </Link>
            <div className={item.cName}>{item.title}</div>
          </>
        ))}
      </nav>
      <div className="btmLine"></div>
    </div>
  );
};

export default Sidebar;
