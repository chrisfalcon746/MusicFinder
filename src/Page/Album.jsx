import React, { useContext } from "react";
import { Container, Card, Row } from "react-bootstrap";
import { AppContext } from "../context/AppContext";
import NavBar from "../Component/NavBar";
function Album() {
  const { artists } = useContext(AppContext);
  const { artistAlbum } = useContext(AppContext);

  return (
    <Container>
      <NavBar />
      <Row>
        {artistAlbum
          ? artistAlbum.map((albums) => {
              return (
                <Card style={{ width: "18rem" }}>
                  <a href={`/Songs/${albums.idAlbum}`}>
                    <Card.Img src={albums.strAlbumThumb} />
                  </a>
                  <Card.Body>
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
