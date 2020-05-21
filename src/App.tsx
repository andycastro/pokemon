import React from "react";
import PokemonProvider from "./context/pokemons";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import Details from "./pages/Details/Details";

function App() {
  return (
    <Router>
      <Switch>
        <PokemonProvider>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/details">
            <Details />
          </Route>
        </PokemonProvider>
      </Switch>
    </Router>
  );
}

export default App;
