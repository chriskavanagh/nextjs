import { useState } from "react";

const useSideDrawer = () => {
  const [open, setOpen] = useState(false);

  const handleDrawer = () => {
    console.log("handleDrawer Clicked!");
    setOpen(!open);
  };

  const closeDrawer = () => {
    console.log("CloseDrawer Func");
    setOpen(!open);
  };

  return { open, closeDrawer, handleDrawer };
};

export default useSideDrawer;
