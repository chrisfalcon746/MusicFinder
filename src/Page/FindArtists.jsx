import React, { useState, useEffect, useContext } from "react";
import { Form, Container, Card, Row } from "react-bootstrap";
import { AppContext } from "../context/AppContext";
import axios from "axios";
function FindArtists() {
  const { artists, setArtists } = useContext(AppContext);
  const [apiData, setApiData] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setArtists(event.target.searchbar.value);
  };

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
    </Container>
  );
}

export default FindArtists;
