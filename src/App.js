import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FindArtists from "./Page/FindArtists";
import Artists from "./Page/Artists";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={FindArtists} />
        <Route exact path="/Artist" component={Artists} />
      </Switch>
    </Router>
  );
}

export default App;
