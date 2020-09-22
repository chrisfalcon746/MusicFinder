import React, { useEffect } from "react";
import axios from "axios";
function Artists(artists) {
  console.log(artists);
  return <>{artists.artists}</>;
}

export default Artists;
