import React, { useEffect, useState, useContext } from "react";
import { Container, Card, Row } from "react-bootstrap";
import { AppContext } from "../context/AppContext";
import NavBar from "../Component/NavBar";
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
        console.log(response.data.album);
        setArtistAlbum(response.data.album);
      });
  }, [artists]);
  return (
    <Container>
      <NavBar />
      <Row>
        {artistAlbum
          ? artistAlbum.map((albums) => {
              return (
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Img src={albums.strAlbumThumb} />
                    <Card.Title>{albums.strAlbum}</Card.Title>
                  </Card.Body>
                </Card>
              );
            })
          : `There are no album for this ${artists}`}
      </Row>
    </Container>
  );
}

export default Album;
