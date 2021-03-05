import React, { useState, createContext } from "react";

// Create Context Object
export const DrawerContext = createContext(false);

// create provide for components to consume
export const DrawerContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  console.log(`Context ${open}`);

  const handleDrawer = () => {
    console.log("handleDrawer Clicked!");
    setOpen(!open);
  };

  const closeDrawer = () => {
    console.log("CloseDrawer Func");
    setOpen(false);
  };

  return (
    <DrawerContext.Provider value={{ open, handleDrawer, closeDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
};
