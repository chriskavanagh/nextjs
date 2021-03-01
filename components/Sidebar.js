import React, { useState } from "react";

const Sidebar = (props) => {
  let sidebarClass = "sidebar";
  if (props.show) {
    sidebarClass = "sidebar open";
  }
  return (
    <nav className={sidebarClass} onClick={props.handle}>
      <p>I am the sidebar</p>
    </nav>
  );
};

export default Sidebar;
