import React, { createContext } from "react";

type AppContextTypes = {};

type AppContextProviderTypes = { children: React.ReactNode };

export const AppContext = createContext({} as AppContextTypes);

const AppContextProvider = ({ children }: AppContextProviderTypes) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
