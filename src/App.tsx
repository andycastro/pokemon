import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import Details from "./pages/Details/Details";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/details">
          <Details />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
