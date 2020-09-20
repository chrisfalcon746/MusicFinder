import React, { useState, useEffect } from "react";
import { Form, Jumbotron, Container, Button } from "react-bootstrap";
import axios from "axios";
function FindArtists() {
  const [artists, setArtist] = useState([]);
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
        <Button href="artist">Search</Button>
      </Form>
      <Jumbotron>
        {apiData.map((artists) => {
          return <h1>{artists.strArtist}</h1>;
        })}
      </Jumbotron>
    </Container>
  );
}

export default FindArtists;
