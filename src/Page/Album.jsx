import React, { useEffect, useState, useContext } from "react";
import { Container } from "react-bootstrap";
import { AppContext } from "../context/AppContext";
import axios from "axios";
function Album() {
  const { artists } = useContext(AppContext);
  const [artistAlbum, setArtistAlbum] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://www.theaudiodb.com/api/v1/json/1/searchalbum.php?s=${artists}`
      )
      .then((response) => {
        setArtistAlbum(response.data.album.map((name) => name.strAlbum));
      });
  }, [artists]);
  console.log(artistAlbum);
  return (
    <Container>
      {artistAlbum
        ? artistAlbum.map((albums) => {
            return <h1>{albums}</h1>;
          })
        : `There are no album for this ${artists}`}
    </Container>
  );
}

export default Album;
