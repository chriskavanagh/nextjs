import React, { useState, createContext } from "react";

// Create Context Object
export const DrawerContext = createContext(false);

// create provide for components to consume
export const DrawerContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleDrawer = () => {
    console.log("handleDrawer Clicked!");
    setOpen(!open);
  };

  return (
    <DrawerContext.Provider value={{ open, handleDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
};
