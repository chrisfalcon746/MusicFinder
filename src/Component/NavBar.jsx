import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Form, Nav, Navbar, InputGroup, FormControl } from "react-bootstrap";
const Navigation = () => {
  const { artists, setArtists } = useContext(AppContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    setArtists(event.target.artist.value);
    console.log(artists);
  };
  return (
    <Navbar>
      <Form inline onSubmit={handleSubmit}>
        <InputGroup>
          <FormControl id="artist" type="text" placeholder="Search Artist" />
        </InputGroup>
        <Nav>
          <Nav.Link href="/album">Album</Nav.Link>
        </Nav>
      </Form>
    </Navbar>
  );
};

export default Navigation;
