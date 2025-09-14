import React, { createContext, useContext, useState } from "react";

const TabContext = createContext();

const TabProvider = ({ children }) => {
  const [siderOpen, setSiderOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState("Dashboard")

  return <TabContext.Provider value={{siderOpen,setSiderOpen, currentTab, setCurrentTab}}>{children}</TabContext.Provider>;
};

export const useTabContext = () => useContext(TabContext);

export default TabProvider;
