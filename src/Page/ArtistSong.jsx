import React from "react";
import { useParams } from "react-router-dom";
function ArtistSong() {
  let { artist } = useParams();
  let { song } = useParams();

  console.log(artist);
  console.log(song);
  return <h1>Artist Song</h1>;
}

export default ArtistSong;
