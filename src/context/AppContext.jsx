import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [artists, setArtists] = useState("drake");
  const [artistAlbum, setArtistAlbum] = useState(null);
  useEffect(() => {
    axios
      .get(
        `https://www.theaudiodb.com/api/v1/json/1/searchalbum.php?s=${artists}`
      )
      .then((response) => {
        setArtistAlbum(response.data.album);
      });
  }, [artists]);
  return (
    <AppContext.Provider
      value={{ artists, setArtists, artistAlbum, setArtistAlbum }}
    >
      {children}
    </AppContext.Provider>
  );
};
