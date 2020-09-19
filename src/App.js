import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    console.log("is this working?");
    axios
      .get(`https://www.theaudiodb.com/api/v1/json/1/search.php?s=coldplay`)
      .then((response) => {
        setApiData(response.data.artists);
      });
  }, []);
  return (
    <div>
      <h1>Music finder</h1>
      {apiData.map((artists) => {
        console.log(artists);
        return <h1>{artists.strArtist}</h1>;
      })}
    </div>
  );
}

export default App;
