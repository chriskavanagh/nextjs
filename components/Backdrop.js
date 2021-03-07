import React, { useContext } from "react";
import { DrawerContext } from "../context/drawerContext";

const Backdrop = () => {
  const { closeDrawer } = useContext(DrawerContext);

  React.useEffect(() => {
    const body = document.querySelector(".backdrop");
    //console.log(body);
    body.addEventListener("click", closeDrawer);
    return function cleanup() {
      body.addEventListener("click", closeDrawer);
    };
  }, []);
  return (
    <div className="backdrop">
      <style jsx>
        {`
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.3);
          z-index: 100;
        `}
      </style>
    </div>
  );
};

// pointer-events: none; lets btn click 'fall through' Backdrop/Overlay
// and work correctly. Otherwise btn click won't work.
// this works because we won't btn click on the backdrop only

export default Backdrop;
