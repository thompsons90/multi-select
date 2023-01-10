import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  // Hamburger icon state
  const [sidebarStatus, setSidebarStatus] = useState(false);

  return (
    <AppContext.Provider value={[sidebarStatus, setSidebarStatus]}>
      {children}
    </AppContext.Provider>
  );
}
