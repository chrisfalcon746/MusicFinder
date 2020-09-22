import React, { useState, useEffect } from "react";
import { Form, Container, Card, Row } from "react-bootstrap";
import axios from "axios";
import Artists from "./Artists";
function FindArtists() {
  const [artists, setArtist] = useState(["drake"]);
  const [apiData, setApiData] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("im working");
    console.log(event.target.searchbar.value);
    setArtist(event.target.searchbar.value);
  };

  useEffect(() => {
    console.log("is this working?");
    axios
      .get(`https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artists}`)
      .then((response) => {
        console.log(response.data.artists);
        setApiData(response.data.artists);
      });
  }, [artists]);
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Enter Artist's Name</Form.Label>
          <Form.Control id="searchbar" type="text" placeholder="Enter name" />
        </Form.Group>
      </Form>

      {apiData
        ? apiData.map((artists) => {
            return (
              <Row>
                <Card style={{ width: "18rem" }} key={artists.idArtists}>
                  <Card.Img variant="top" src={artists.strArtistThumb} />
                  <Card.Body>
                    <Card.Title>{artists.strArtist}</Card.Title>
                    <Card.Text>{artists.strBiographyEN}</Card.Text>
                  </Card.Body>
                </Card>
              </Row>
            );
          })
        : "Sorry can't find the artists, please check the spelling."}
      {/* <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{artists}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text>
            {apiData.map((artists) => {
              return <h1>{artists.strArtist}</h1>;
            })}
          </Card.Text>
          <Card.Link href="#" class="icon brands alt fa-github"></Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card> */}
    </Container>
  );
}

export default FindArtists;
