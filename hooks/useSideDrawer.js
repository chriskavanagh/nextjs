import { useContext } from "react";
import { DrawerContext } from "../context/drawerContext";

const useSideDrawer = () => {
  const { open, handleDrawer } = useContext(DrawerContext);

  const closeDrawer = () => {
    console.log("CloseDrawer Func");
    setOpen((open) => !open);
  };

  return { open, closeDrawer, handleDrawer };
};

export default useSideDrawer;
