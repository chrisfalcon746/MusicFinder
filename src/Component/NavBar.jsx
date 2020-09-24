import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Form, Navbar, InputGroup, FormControl, Button } from "react-bootstrap";
const Navigation = () => {
  const { artist, setArtists } = useContext(AppContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    setArtists(event.target.artist.value);
  };
  return (
    <Navbar className="bg-light justify-content-between">
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl id="artist" type="text" placeholder="Search Artist" />
        </InputGroup>
      </Form>
      <Form inline>
        <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
        <Button type="submit">Submit</Button>
      </Form>
    </Navbar>
  );
};

export default Navigation;
