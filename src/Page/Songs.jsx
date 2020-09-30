import React, { useEffect, useState } from "react";
import { Container, Card, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";
import NavBar from "../Component/NavBar";
function Songs() {
  const [apiData, setApiData] = useState();

  let { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://www.theaudiodb.com/api/v1/json/1/track.php?m=${id}`)
      .then((response) => {
        console.log(response.data);
        setApiData(response.data.track);
      });
  }, [id]);
  console.log(apiData);
  return (
    <Container>
      <NavBar />
      <Row>
        {apiData
          ? apiData.map((songs) => {
              return (
                <Card variant="top" style={{ width: "18rem", margin: 10 }}>
                  <Card.Title>{songs.strAlbum}</Card.Title>
                  <Card.Subtitle>{songs.strGenre}</Card.Subtitle>
                  <Card.Text>{songs.strTrack}</Card.Text>
                </Card>
              );
            })
          : "There are no songs for this album"}
      </Row>
    </Container>
  );
}

export default Songs;
