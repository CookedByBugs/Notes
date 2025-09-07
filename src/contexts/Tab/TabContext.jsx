import React, { createContext, useContext, useState } from "react";

const TabContext = createContext();

const TabProvider = ({ children }) => {
  const [siderOpen, setSiderOpen] = useState(false);

  return <TabContext.Provider value={{siderOpen,setSiderOpen}}>{children}</TabContext.Provider>;
};

export const useTabContext = () => useContext(TabContext);

export default TabProvider;
