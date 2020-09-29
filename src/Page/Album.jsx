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
        setArtistAlbum(
          response.data.album.map((artist) => artist.strAlbumThumb)
        );
      });
  }, [artists]);
  return (
    <Container>
      <NavBar />
      {artistAlbum
        ? artistAlbum.map((albums) => {
            return (
              <Row>
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Img src={albums} />
                  </Card.Body>
                </Card>
              </Row>
            );
          })
        : `There are no album for this ${artists}`}
    </Container>
  );
}

export default Album;
