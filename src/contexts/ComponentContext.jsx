import { useContext, createContext, useState } from "react";

const ComponentContext = createContext();

export const ComponentProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  const values = {
    isSidebarOpen,
    toggleSidebar,
  };

  return (
    <ComponentContext.Provider value={values}>
      {children}
    </ComponentContext.Provider>
  );
};

//! Custom hook to use the ComponentContext
export const useComponentContext = () => {
  return useContext(ComponentContext);
};
