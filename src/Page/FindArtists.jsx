import React, { useState, useEffect, useContext } from "react";
import { Container, Card, Row, Jumbotron } from "react-bootstrap";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import NavBar from "../Component/NavBar";
function FindArtists() {
  const { artists } = useContext(AppContext);
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artists}`)
      .then((response) => {
        console.log(response.data.artists);
        setApiData(response.data.artists);
      });
  }, [artists]);

  return (
    <Container>
      <NavBar />
      {apiData
        ? apiData.map((artist) => {
            return (
              <Row>
                <Jumbotron>
                  <Card style={{ width: "18rem" }} key={artist.idArtists}>
                    <Card.Img variant="top" src={artist.strArtistThumb} />
                  </Card>
                  <h1>{artist.strArtist}</h1>
                  <p>{artist.strBiographyEN}</p>
                </Jumbotron>
              </Row>
            );
          })
        : "Search for an artist"}
    </Container>
  );
}

export default FindArtists;
