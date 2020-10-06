import React, { useEffect, useState } from "react";
import { Container, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import NavBar from "../Component/NavBar";
import axios from "axios";
function ArtistSong() {
  const [musicVideo, setMusicVideo] = useState();

  let { artist } = useParams();
  let { song } = useParams();
  useEffect(() => {
    axios
      .get(
        `https://www.theaudiodb.com/api/v1/json/1/searchtrack.php?s=${artist}&t=${song}`
      )
      .then((response) => {
        console.log(response.data);
        setMusicVideo(response.data.track);
      });
  }, []);
  console.log(musicVideo);

  return (
    <Container>
      <NavBar />
      {musicVideo
        ? musicVideo.map((music) => {
            return (
              <Card>
                <a href={music.strMusicVid}>
                  <Card.Img src={music.strTrackThumb} />
                </a>
                <Card.Title>Album: {music.strAlbum}</Card.Title>
              </Card>
            );
          })
        : "Not Available"}
      <h1>Artist Song</h1>;
    </Container>
  );
}

export default ArtistSong;
