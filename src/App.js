import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FindArtists from "./Page/FindArtists";
import Album from "./Page/Album";
import Songs from "./Page/Songs";
import { AppContextProvider } from "./context/AppContext";
import MusicVideo from "./Page/MusicVideo";
import SearchSong from "./Page/SearchSong";
function App() {
  return (
    <AppContextProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={FindArtists} />
          <Route exact path="/Album" component={Album} />
          <Route exact path="/Songs/:id" component={Songs} />
          <Route exact path="/Music-Video" component={MusicVideo} />
          <Route exact path="/Search-song" component={SearchSong} />
        </Switch>
      </Router>
    </AppContextProvider>
  );
}

export default App;
