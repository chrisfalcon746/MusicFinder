import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [artists, setArtists] = useState("lil skies");
  return (
    <AppContext.Provider value={{ artists, setArtists }}>
      {children}
    </AppContext.Provider>
  );
};
