import React, { useState } from "react";
import NavBar from "../Component/NavBar";
import { Form, Container } from "react-bootstrap";
function SearchSong() {
  const [artist, setArtist] = useState();
  const [album, setAlbum] = useState();
  return (
    <Container>
      <NavBar />
      <Form>
        <Form.Label>Album</Form.Label>
        <Form.Control id="Album" type="text" placeholder="Enter Album" />
        <Form.Label>Artist</Form.Label>
        <Form.Control
          id="Artist"
          type="text"
          placeholder="Enter Artist's name"
        />
      </Form>
    </Container>
  );
}

export default SearchSong;
