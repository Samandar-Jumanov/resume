"use client"
import React, { createContext, useContext, useState } from "react";

const GlobalContext = createContext({
    activeNav : "Home",
    setActiveNav : () => {}
});

export const GlobalContextProvider = ({ children }) => {
    const [activeNav, setActiveNav] = useState("Home");

  return (
    <GlobalContext.Provider value={{ activeNav, setActiveNav }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
