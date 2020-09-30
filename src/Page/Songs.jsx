import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";
import NavBar from "../Component/NavBar";
function Songs() {
  const [apiDAta, setApiData] = useState({});

  let { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://www.theaudiodb.com/api/v1/json/1/track.php?m=${id}`)
      .then((response) => {
        console.log(response.data);
        setApiData(response.data);
      });
  }, []);
  return (
    <Container>
      <NavBar />
    </Container>
  );
}

export default Songs;
